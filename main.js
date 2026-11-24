function applyDarkMode() {
      const isDarkMode = localStorage.getItem('dark-mode') === 'true';
      document.documentElement.classList.toggle('dark-mode', isDarkMode);
      document.body.classList.toggle('dark-mode', isDarkMode);

      const toggleBtn = document.querySelector('.mode-toggle');
      if (toggleBtn) {
        toggleBtn.textContent = isDarkMode ? '切换到浅色模式' : '切换到深色模式';
      }
    }

    function toggleDarkMode() {
      const body = document.body;
      const isDarkMode = body.classList.contains('dark-mode');
      const newDarkMode = !isDarkMode;

      localStorage.setItem('dark-mode', newDarkMode);
      document.documentElement.classList.toggle('dark-mode', newDarkMode);
      body.classList.toggle('dark-mode', newDarkMode);

      const toggleBtn = document.querySelector('.mode-toggle');
      if (toggleBtn) {
        toggleBtn.textContent = newDarkMode ? '切换到浅色模式' : '切换到深色模式';
      }

      notifyIframeDarkMode(newDarkMode);
    }

    function setActiveNav(navId) {
      window.currentActiveNavId = navId;
      notifyIframe();
    }

    const iframeMessageQueue = [];
    let iframeLoaded = false;

    function notifyIframe() {
      const iframe = document.getElementById('nav-iframe');
      if (iframe && iframe.contentWindow) {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        const message = {
          type: 'init',
          darkMode: isDarkMode,
          activeNavId: window.currentActiveNavId || 'nav-index'
        };

        iframe.contentWindow.postMessage(message, '*');

        if (!iframeLoaded) {
          iframeMessageQueue.push(message);
        }
      }
    }

    function notifyIframeDarkMode(isDarkMode) {
      const navIframe = document.getElementById('nav-iframe');
      if (navIframe && navIframe.contentWindow) {
        const message = {
          type: 'dark-mode',
          value: isDarkMode
        };

        navIframe.contentWindow.postMessage(message, '*');

        if (!iframeLoaded) {
          iframeMessageQueue.push(message);
        }
      }

      const headerIframe = document.getElementById('header-iframe');
      if (headerIframe && headerIframe.contentWindow) {
        const message = {
          type: 'dark-mode',
          value: isDarkMode
        };
        headerIframe.contentWindow.postMessage(message, '*');
      }
    }

    function flushIframeMessageQueue() {
      const iframe = document.getElementById('nav-iframe');
      if (iframe && iframe.contentWindow) {
        while (iframeMessageQueue.length > 0) {
          const message = iframeMessageQueue.shift();
          iframe.contentWindow.postMessage(message, '*');
        }
      }
    }

    function initIframe() {
      const iframe = document.getElementById('nav-iframe');
      if (iframe) {
        iframe.addEventListener('load', function() {
          iframeLoaded = true;
          flushIframeMessageQueue();
          notifyIframe();
        });

        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
          iframeLoaded = true;
          flushIframeMessageQueue();
          notifyIframe();
        }
      }
    }

    function initHeaderMessageListener() {
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'dark-mode') {
          const isDarkMode = event.data.value;
          localStorage.setItem('dark-mode', isDarkMode);
          document.documentElement.classList.toggle('dark-mode', isDarkMode);
          document.body.classList.toggle('dark-mode', isDarkMode);

          const toggleBtn = document.querySelector('.mode-toggle');
          if (toggleBtn) {
            toggleBtn.textContent = isDarkMode ? '切换到浅色模式' : '切换到深色模式';
          }

          notifyIframeDarkMode(isDarkMode);
        }
      });
    }

    function notifyHeaderDarkMode() {
      const isDarkMode = localStorage.getItem('dark-mode') === 'true';
      const headerIframe = document.getElementById('header-iframe');
      if (headerIframe && headerIframe.contentWindow) {
        headerIframe.contentWindow.postMessage({
          type: 'dark-mode',
          value: isDarkMode
        }, '*');
      }
    }

    function getCurrentLibraryType() {
      if (window.location.pathname.indexOf('/Accelerator%20business/') !== -1) {
        return 'accelerator-business';
      }
      if (window.location.pathname.indexOf('/Accelerator%20page/') !== -1) {
        return 'accelerator-page';
      }
      if (window.location.pathname.indexOf('/public/AcceleratorFramework.html') !== -1) {
        return 'accelerator-page';
      }
      if (window.location.pathname.indexOf('/NN%20business/') !== -1) {
        return 'business';
      }
      if (
        window.location.pathname.indexOf('/page/') !== -1 ||
        window.location.pathname.indexOf('/public/CommunityFramework.html') !== -1 ||
        window.location.pathname.indexOf('/page/discover.html') !== -1 ||
        window.location.pathname.indexOf('/page/Home.html') !== -1 ||
        window.location.pathname.indexOf('/page/UnderCommunity.html') !== -1 ||
        window.location.pathname.indexOf('/page/PlayCenter.html') !== -1 ||
        window.location.pathname.indexOf('/page/RecordStandings.html') !== -1 ||
        window.location.pathname.indexOf('/page/VoiceRoom.html') !== -1
      ) {
        return 'page';
      }
      return 'basic';
    }

    function notifyHeaderLibrary() {
      const headerIframe = document.getElementById('header-iframe');
      if (headerIframe && headerIframe.contentWindow) {
        headerIframe.contentWindow.postMessage({
          type: 'library',
          value: getCurrentLibraryType()
        }, '*');
      }
    }

    function initHeaderIframe() {
      const headerIframe = document.getElementById('header-iframe');
      if (headerIframe) {
        if (headerIframe.readyState === 'complete') {
          notifyHeaderDarkMode();
          notifyHeaderLibrary();
        } else {
          headerIframe.addEventListener('load', function() {
            notifyHeaderDarkMode();
            notifyHeaderLibrary();
          });
        }
      }
    }

    function isPageShowcasePath() {
      let path = window.location.pathname;
      try {
        path = decodeURIComponent(path);
      } catch (error) {
        // Keep the browser-provided path when it contains an invalid escape sequence.
      }

      return path.indexOf('/page/') !== -1 || path.indexOf('/Accelerator page/') !== -1;
    }

    function initPagePreviewMode() {
      if (!isPageShowcasePath() || typeof window.createSwitch !== 'function') return;
      if (document.querySelector('.page-preview-mode-control')) return;

      let placeholder = null;
      let movedTarget = null;
      let previewLayer = null;
      let previewAnimation = null;
      let previewEnabled = false;
      let previewTransitioning = false;
      const previewStorageKey = window.NN_PAGE_PREVIEW_STORAGE_KEY || 'nn-page-preview-mode';
      const previewWindowNameToken = window.NN_PAGE_PREVIEW_WINDOW_NAME_TOKEN || 'nn-page-preview-mode=true';
      const previewTransitionDuration = 480;
      const previewTransitionEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

      function readPreviewPreference() {
        const windowNameEnabled = window.name.split('|').includes(previewWindowNameToken);
        try {
          return window.sessionStorage.getItem(previewStorageKey) === 'true' || windowNameEnabled;
        } catch (error) {
          return windowNameEnabled;
        }
      }

      function writePreviewPreference(checked) {
        const windowNameParts = window.name.split('|').filter(function(part) {
          return part && part !== previewWindowNameToken;
        });
        if (checked) windowNameParts.push(previewWindowNameToken);
        window.name = windowNameParts.join('|');
        try {
          window.sessionStorage.setItem(previewStorageKey, checked ? 'true' : 'false');
        } catch (error) {
          // Keep preview mode functional when storage is unavailable.
        }
      }

      const shouldRestorePreview = readPreviewPreference();

      const control = document.createElement('div');
      control.className = 'page-preview-mode-control';

      const label = document.createElement('span');
      label.className = 'page-preview-mode-control__label';
      label.textContent = '预览模式';

      function resolvePreviewTarget() {
        const rawTarget = document.querySelector([
          '[data-code-preview="true"]',
          '.member-hall-framework-demo',
          '.record-standings-framework-demo'
        ].join(', '));

        if (rawTarget) rawTarget.classList.add('page-preview-mode-target');
        return rawTarget || null;
      }

      function prefersReducedPreviewMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      function syncPreviewSwitch(checked) {
        previewSwitch.dataset.checked = checked ? 'true' : 'false';
        previewSwitch.setAttribute('aria-checked', checked ? 'true' : 'false');
      }

      function createPreviewPlaceholder(target, rect) {
        const targetStyle = window.getComputedStyle(target);
        const targetPlaceholder = document.createElement('div');
        targetPlaceholder.className = 'page-preview-mode-placeholder';
        targetPlaceholder.style.width = rect.width + 'px';
        targetPlaceholder.style.height = rect.height + 'px';
        targetPlaceholder.style.marginTop = targetStyle.marginTop;
        targetPlaceholder.style.marginRight = targetStyle.marginRight;
        targetPlaceholder.style.marginBottom = targetStyle.marginBottom;
        targetPlaceholder.style.marginLeft = targetStyle.marginLeft;
        return targetPlaceholder;
      }

      function clearPreviewState() {
        if (previewAnimation) previewAnimation.cancel();
        previewAnimation = null;
        document.body.classList.remove(
          'is-page-preview-mode',
          'is-page-preview-transitioning',
          'is-page-preview-exiting'
        );
        placeholder = null;
        movedTarget = null;
        previewLayer = null;
        previewTransitioning = false;
      }

      function finishPreviewEnter() {
        const finishedAnimation = previewAnimation;
        previewAnimation = null;
        if (finishedAnimation) finishedAnimation.cancel();
        if (movedTarget) movedTarget.style.transform = '';
        document.body.classList.remove('is-page-preview-transitioning');
        document.documentElement.classList.remove('page-preview-mode-pending');
        previewTransitioning = false;
      }

      function enterPreviewMode(options = {}) {
        const immediate = options.immediate === true;
        const target = resolvePreviewTarget();
        if (!target || !target.parentNode) {
          previewEnabled = false;
          syncPreviewSwitch(false);
          document.documentElement.classList.remove('page-preview-mode-pending');
          return;
        }

        previewEnabled = true;
        previewTransitioning = true;
        const originRect = target.getBoundingClientRect();
        placeholder = createPreviewPlaceholder(target, originRect);
        target.parentNode.insertBefore(placeholder, target);

        previewLayer = document.createElement('div');
        previewLayer.className = 'page-preview-mode-layer';
        previewLayer.setAttribute('role', 'region');
        previewLayer.setAttribute('aria-label', '页面内容预览');

        const previewCanvas = document.createElement('div');
        previewCanvas.className = 'page-preview-mode-canvas';
        previewCanvas.appendChild(target);
        previewLayer.appendChild(previewCanvas);
        document.body.classList.add('is-page-preview-transitioning');
        document.body.appendChild(previewLayer);
        movedTarget = target;

        const centeredRect = target.getBoundingClientRect();
        const startTransform = `translate(${originRect.left - centeredRect.left}px, ${originRect.top - centeredRect.top}px)`;
        target.style.transform = startTransform;

        if (immediate) {
          document.body.classList.add('is-page-preview-mode');
          target.style.transform = '';
          finishPreviewEnter();
          return;
        }

        window.requestAnimationFrame(function() {
          document.body.classList.add('is-page-preview-mode');
          if (prefersReducedPreviewMotion()) {
            finishPreviewEnter();
            return;
          }

          previewAnimation = target.animate([
            { transform: startTransform },
            { transform: 'translate(0, 0)' }
          ], {
            duration: previewTransitionDuration,
            easing: previewTransitionEasing,
            fill: 'both'
          });
          target.style.transform = '';
          previewAnimation.addEventListener('finish', finishPreviewEnter, { once: true });
          previewAnimation.addEventListener('cancel', function() { previewAnimation = null; }, { once: true });
        });
      }

      function finishPreviewExit() {
        const finishedAnimation = previewAnimation;
        previewAnimation = null;
        if (finishedAnimation) finishedAnimation.cancel();
        if (placeholder && placeholder.parentNode && movedTarget) {
          movedTarget.style.transform = '';
          placeholder.parentNode.insertBefore(movedTarget, placeholder);
          placeholder.remove();
        }
        if (previewLayer) previewLayer.remove();
        clearPreviewState();
      }

      function exitPreviewMode() {
        if (!placeholder || !movedTarget || !previewLayer) {
          previewEnabled = false;
          clearPreviewState();
          return;
        }

        previewEnabled = false;
        previewTransitioning = true;
        document.body.classList.add('is-page-preview-transitioning', 'is-page-preview-exiting');
        const currentRect = movedTarget.getBoundingClientRect();
        const destinationRect = placeholder.getBoundingClientRect();
        const endTransform = `translate(${destinationRect.left - currentRect.left}px, ${destinationRect.top - currentRect.top}px)`;

        if (prefersReducedPreviewMotion()) {
          finishPreviewExit();
          return;
        }

        // Keep the preview layout stable for the whole FLIP animation. Removing
        // the preview class here would reflow the stage before it starts moving,
        // which produces the extra jump seen when returning to normal mode.
        previewAnimation = movedTarget.animate([
          { transform: 'translate(0, 0)' },
          { transform: endTransform }
        ], {
          duration: previewTransitionDuration,
          easing: previewTransitionEasing,
          fill: 'both'
        });
        previewAnimation.addEventListener('finish', finishPreviewExit, { once: true });
        previewAnimation.addEventListener('cancel', function() { previewAnimation = null; }, { once: true });
      }

      const previewSwitch = window.createSwitch({
        checked: shouldRestorePreview,
        size: 'default',
        state: 'default',
        className: 'page-preview-mode-switch',
        onChange: function(checked) {
          if (previewTransitioning) {
            syncPreviewSwitch(previewEnabled);
            return;
          }
          writePreviewPreference(checked);
          if (checked) enterPreviewMode();
          else exitPreviewMode();
        }
      });
      previewSwitch.setAttribute('aria-label', '预览模式');

      control.appendChild(label);
      control.appendChild(previewSwitch);
      document.body.appendChild(control);

      if (shouldRestorePreview) {
        enterPreviewMode({ immediate: true });
      } else {
        document.documentElement.classList.remove('page-preview-mode-pending');
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      applyDarkMode();
      initIframe();
      initHeaderMessageListener();
      initHeaderIframe();
      window.setTimeout(initPagePreviewMode, 0);
    });

    function initAcceleratorHomePage() {
      if (!document.body.classList.contains('accelerator-home-page')) return;

      let productCardScrollTimer = null;
      let productCardHoverResetPending = false;
      let productCardPointerX = null;
      let productCardPointerY = null;
      let productCardScrollPointerX = null;
      let productCardScrollPointerY = null;

      function suspendProductCardHover() {
        window.clearTimeout(productCardScrollTimer);
        document.body.classList.add('is-product-card-scroll-active');
        productCardHoverResetPending = true;
        productCardScrollPointerX = productCardPointerX;
        productCardScrollPointerY = productCardPointerY;
        productCardScrollTimer = window.setTimeout(function() {
          document.body.classList.remove('is-product-card-scroll-active');
        }, 120);
      }

      function restoreProductCardHover(event) {
        productCardPointerX = event.clientX;
        productCardPointerY = event.clientY;
        if (!productCardHoverResetPending || document.body.classList.contains('is-product-card-scroll-active')) return;
        if (productCardScrollPointerX !== null && productCardScrollPointerY !== null) {
          const pointerDeltaX = Math.abs(productCardPointerX - productCardScrollPointerX);
          const pointerDeltaY = Math.abs(productCardPointerY - productCardScrollPointerY);
          if (pointerDeltaX < 2 && pointerDeltaY < 2) return;
        }
        productCardHoverResetPending = false;
        document.body.classList.remove('is-product-card-hover-suspended');
      }

      window.addEventListener('mousemove', function(event) {
        if (!productCardHoverResetPending) {
          productCardPointerX = event.clientX;
          productCardPointerY = event.clientY;
          return;
        }
        restoreProductCardHover(event);
      });

      window.addEventListener('scroll', function() {
        document.body.classList.add('is-product-card-hover-suspended');
        suspendProductCardHover();
      }, true);
      window.addEventListener('wheel', function() {
        document.body.classList.add('is-product-card-hover-suspended');
        suspendProductCardHover();
      }, { passive: true });

      if (new URLSearchParams(window.location.search).get('embed') === '1') {
        document.body.classList.add('is-embed-preview');
      }

      const assetRoot = '../image/Game Store/';
      const games = [
        { title: '怪物猎人：荒野-凌越', cover: 'game-monster-hunter.png' },
        { title: '湮灭之潮', cover: 'game-tides.png' },
        { title: '影之刃：零', cover: 'game-phantom-blade.png' },
        { title: '生化危机：维罗妮卡重制版', cover: 'game-resident-evil.png' },
        { title: '血源：诅咒', cover: 'game-bloodborne.png' },
        { title: '最终幻想：共鸣', cover: 'game-final-fantasy.png' }
      ];
      const wishlist = [
        { title: '恶魔城：贝尔蒙特的诅咒', cover: 'game-castlevania.png' },
        { title: '鬼武者：剑之道', cover: 'game-onimusha.png' },
        { title: '龙之信条2：黑暗觉醒', cover: 'game-dragons-dogma.png' },
        { title: '《巫师3：狂猎》- 重制版', cover: 'game-witcher-remake.png' }
      ];
      const storeProducts = [
        { title: '怪物猎人：荒野-凌越', cover: 'game-monster-hunter.png', type: 'purchase', currentPrice: '¥90', originalPrice: '¥168', discount: '-30%' },
        { title: '湮灭之潮', cover: 'game-tides.png', type: 'reservation', meta: '2027年3月上线' },
        { title: '影之刃：零', cover: 'game-phantom-blade.png', type: 'purchase', currentPrice: '¥198', originalPrice: '¥268', discount: '-26%', cornerState: 'owned' },
        { title: '生化危机：维罗妮卡重制版', cover: 'game-resident-evil.png', type: 'purchase', currentPrice: '¥218', originalPrice: '¥298', discount: '-27%' },
        { title: '血源：诅咒', cover: 'game-bloodborne.png', type: 'purchase', currentPrice: '¥128', originalPrice: '¥198', discount: '-35%' },
        { title: '最终幻想：共鸣', cover: 'game-final-fantasy.png', type: 'purchase', currentPrice: '¥188', originalPrice: '¥268', discount: '-30%' },
        { title: '恶魔城：贝尔蒙特的诅咒', cover: 'game-castlevania.png', type: 'purchase', currentPrice: '¥158', originalPrice: '¥228', discount: '-31%' },
        { title: '鬼武者：剑之道', cover: 'game-onimusha.png', type: 'reservation', meta: '2027年上线' },
        { title: '龙之信条2：黑暗觉醒', cover: 'game-dragons-dogma.png', type: 'purchase', currentPrice: '¥168', originalPrice: '¥298', discount: '-44%' },
        { title: '《巫师3：狂猎》- 重制版', cover: 'game-witcher-remake.png', type: 'purchase', currentPrice: '¥128', originalPrice: '¥198', discount: '-35%' },
        { title: '怪物猎人：荒野', cover: 'game-monster-hunter.png', type: 'purchase', currentPrice: '¥238', originalPrice: '¥348', discount: '-32%' },
        { title: '影之刃：零 豪华版', cover: 'game-phantom-blade.png', type: 'purchase', currentPrice: '¥258', originalPrice: '¥328', discount: '-21%' }
      ];

      function asset(name) {
        return assetRoot + name;
      }

      function createMoreButton(label, onClick) {
        return createButton({
          text: label || '更多',
          variant: 'system',
          level: 'tertiary',
          size: 'default',
          icon: '<i class="nnicon nicon-a-Arrowright-linejiantouyou-xianxing" aria-hidden="true"></i>',
          iconPosition: 'right',
          iconSize: 'var(--icon-size-x9)',
          className: 'accelerator-home-section__more',
          onClick: onClick || null
        });
      }

      const headerContainer = document.getElementById('accelerator-home-header');
      let acceleratorHeader = null;
      if (headerContainer) {
        acceleratorHeader = createAcceleratorHeader({
          width: '100%',
          canGoBack: true,
          enableSearchSuggestions: true,
          onSearchSuggestionSelect: function(value) {
            const input = acceleratorHeader && acceleratorHeader.search
              ? acceleratorHeader.search.querySelector('input')
              : null;
            if (input) {
              input.value = value;
              input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            const frame = headerContainer.closest('.accelerator-home-frame');
            if (frame && !frame.querySelector('.accelerator-game-search') && typeof window.createAcceleratorGameSearch === 'function') {
              window.createAcceleratorGameSearch({
                mountTarget: frame,
                onClose: function() {
                  if (typeof acceleratorHeader.suppressSearchSuggestions === 'function') {
                    acceleratorHeader.suppressSearchSuggestions();
                  }
                }
              });
            }
          },
          onBack: function() {
            const accountManagement = document.getElementById('accelerator-home-account-management');
            const homeContent = document.querySelector('.accelerator-home-frame__content');
            if (accountManagement && !accountManagement.hidden) {
              accountManagement.hidden = true;
              if (homeContent) homeContent.hidden = false;
              acceleratorHeader.setBackActive(false);
              return;
            }
            window.history.back();
          }
        });
        headerContainer.appendChild(acceleratorHeader);
        if (acceleratorHeader.search) {
          const headerSearchInput = acceleratorHeader.search.querySelector('input');
          if (headerSearchInput) {
            headerSearchInput.readOnly = true;
            headerSearchInput.setAttribute('aria-haspopup', 'dialog');
          }
          acceleratorHeader.search.addEventListener('click', function(event) {
            event.preventDefault();
            if (typeof acceleratorHeader.suppressSearchSuggestions === 'function') {
              acceleratorHeader.suppressSearchSuggestions();
            }
            const frame = headerContainer.closest('.accelerator-home-frame');
            if (!frame || frame.querySelector('.accelerator-game-search')) return;
            if (typeof window.createAcceleratorGameSearch === 'function') {
              window.createAcceleratorGameSearch({
                mountTarget: frame,
                onClose: function() {
                  if (typeof acceleratorHeader.suppressSearchSuggestions === 'function') {
                    acceleratorHeader.suppressSearchSuggestions();
                  }
                }
              });
            }
          });
        }
      }

      const sidebarContainer = document.getElementById('accelerator-home-sidebar');
      if (sidebarContainer) {
        const panel = createAcceleratorSideNavigationPanel({
          sortable: true,
          functionItems: [
            { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing' },
            { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
          ],
          onChange: function(change) {
            if (change.group === 'game') window.location.href = 'GameAccelerator.html?game=' + encodeURIComponent(change.item.id || change.item.text);
          }
        });
        sidebarContainer.appendChild(panel);
        panel.setActiveItem(panel.functionItems[0]);
      }

      const carouselContainer = document.getElementById('accelerator-home-carousel');
      if (carouselContainer) {
        carouselContainer.appendChild(createAcceleratorImageCarousel({
          variant: 'banner'
        }));
      }

      let steamBound = false;
      const steamContainer = document.getElementById('accelerator-home-steam');
      if (steamContainer) {
        const steamDemoAccounts = [
          { userName: '邪恶萨摩耶', steamId: '76561198805355097', avatarSrc: '../image/Avatar/头像1095.png' },
          { userName: 'Sophie', steamId: '76561198805355108', avatarSrc: '../image/Steam accounts/account-junjun.png' },
          { userName: '一林', steamId: '76561198805355119', avatarSrc: '../image/Steam accounts/account-yilin.png' }
        ];
        const steamAccounts = [];
        let activeSteamId = null;
        const steamSessionKey = 'accelerator-steam-session-v1';

        // Keep demo account state within this tab's session, never authorization credentials.
        try {
          const saved = JSON.parse(window.sessionStorage.getItem(steamSessionKey));
          if (saved && [1, 2].includes(saved.version) && typeof saved.bound === 'boolean' && Array.isArray(saved.accounts)) {
            const accounts = saved.accounts.filter(function(account, index, items) {
              return account && typeof account.steamId === 'string' && /^\d{17}$/.test(account.steamId)
                && typeof account.userName === 'string'
                && items.findIndex(function(item) { return item && item.steamId === account.steamId; }) === index;
            }).slice(0, 3).map(function(account) {
              return {
                steamId: account.steamId,
                userName: account.userName,
                avatarSrc: typeof account.avatarSrc === 'string' ? account.avatarSrc : '../image/Avatar/头像1095.png'
              };
            });
            if (saved.bound) steamAccounts.push(...accounts);
            steamBound = saved.bound && accounts.length > 0;
            const selectableAccounts = steamAccounts.concat(steamDemoAccounts);
            activeSteamId = steamBound && selectableAccounts.some(function(account) { return account.steamId === saved.activeSteamId; })
              ? saved.activeSteamId : (steamAccounts[0] ? steamAccounts[0].steamId : null);
          }
        } catch (error) {
          // Missing/invalid storage must not prevent the binding flow from working.
        }

        function saveSteamSession() {
          try {
            window.sessionStorage.setItem(steamSessionKey, JSON.stringify({
              version: 2,
              bound: steamBound,
              accounts: steamAccounts,
              activeSteamId: steamBound ? activeSteamId : null
            }));
          } catch (error) {
            // Continue in memory when session storage is unavailable.
          }
        }

        function activeSteamAccount() {
          return steamAccounts.concat(steamDemoAccounts).find(function(account) { return account.steamId === activeSteamId; }) || steamAccounts[0];
        }

        function bindSteamAccount(account) {
          if (!account || !account.steamId) return false;
          let selectedAccount = steamAccounts.find(function(item) { return item.steamId === account.steamId; });
          if (!selectedAccount) {
            if (steamAccounts.length >= 3) return false;
            selectedAccount = {
              userName: account.displayName || account.userName || 'Steam用户',
              steamId: account.steamId,
              avatarSrc: account.avatarSrc || '../image/Avatar/头像1095.png'
            };
            steamAccounts.push(selectedAccount);
          }
          steamBound = true;
          activeSteamId = selectedAccount.steamId;
          renderSteamCard();
          renderHomeAssetCards(true);
          return true;
        }

        function renderSteamCard() {
          saveSteamSession();
          if (!steamBound) {
            steamContainer.replaceChildren(createAcceleratorSteamInformationCard({
              state: 'not-bound',
              onBindClick: openSteamAuthorization
            }));
            return;
          }
          const account = activeSteamAccount();
          steamContainer.replaceChildren(createAcceleratorSteamInformationCard({
            state: 'bound',
            userName: account.userName,
            steamId: account.steamId,
            avatarSrc: account.avatarSrc,
            accounts: steamDemoAccounts,
            activeSteamId: activeSteamId,
            onAccountChange: function(nextAccount) {
              activeSteamId = nextAccount.steamId;
              renderSteamCard();
              renderHomeAssetCards(true);
            },
            onActionClick: openSteamAccountManagement
          }));
        }

        function openSteamAuthorization(event, card, onAuthorizationComplete) {
          if (typeof window.createAcceleratorSteamAuthorizationModal !== 'function' || steamAccounts.length >= 3) return;
          const nextDemoAccount = steamDemoAccounts.find(function(account) {
            return !steamAccounts.some(function(bound) { return bound.steamId === account.steamId; });
          });
          window.createAcceleratorSteamAuthorizationModal({
            trigger: event && event.currentTarget,
            mountTarget: (card && card.closest('.accelerator-home-frame')) || document.body,
            // Preview-only login result: each completed flow binds the next demo account.
            onCheckSteamLogin: function() {
              return new Promise(function(resolve) {
                window.setTimeout(function() {
                  resolve({
                    loggedIn: true,
                    steamId: nextDemoAccount.steamId,
                    authorizedSteamId: nextDemoAccount.steamId,
                    displayName: nextDemoAccount.userName,
                    avatarSrc: nextDemoAccount.avatarSrc
                  });
                }, 650);
              });
            },
            onComplete: function(account) {
              if (bindSteamAccount(account) && typeof onAuthorizationComplete === 'function') onAuthorizationComplete();
            }
          });
        }

        function openSteamAccountManagement() {
          const accountManagement = document.getElementById('accelerator-home-account-management');
          const homeContent = document.querySelector('.accelerator-home-frame__content');
          if (!accountManagement || typeof window.createAcceleratorSteamAccountManagement !== 'function') return;
          function renderManagement() {
            accountManagement.replaceChildren(window.createAcceleratorSteamAccountManagement({
              accounts: steamAccounts,
              activeSteamId: activeSteamId,
              maxAccounts: 3,
              onSwitch: function(account, event, management) {
                activeSteamId = account.steamId;
                management.setActiveSteamId(activeSteamId);
                renderSteamCard();
                renderHomeAssetCards(true);
              },
              onUnbind: function(account) {
                const index = steamAccounts.findIndex(function(item) { return item.steamId === account.steamId; });
                if (index === -1) return;
                steamAccounts.splice(index, 1);
                if (!steamAccounts.length) {
                  steamBound = false;
                  activeSteamId = null;
                  accountManagement.hidden = true;
                  if (homeContent) homeContent.hidden = false;
                  if (acceleratorHeader) acceleratorHeader.setBackActive(false);
                } else if (activeSteamId === account.steamId) {
                  activeSteamId = steamAccounts[0].steamId;
                }
                renderManagement();
                renderSteamCard();
                renderHomeAssetCards(steamBound);
              },
              onAdd: function(event) {
                const frame = steamContainer.closest('.accelerator-home-frame');
                openSteamAuthorization(event, frame, renderManagement);
              }
            }));
          }
          renderManagement();
          if (homeContent) homeContent.hidden = true;
          accountManagement.hidden = false;
          if (acceleratorHeader) acceleratorHeader.setBackActive(true);
        }

        renderSteamCard();
        steamContainer._steamAccountsDemo = {
          bind: function() { return bindSteamAccount(steamDemoAccounts.find(function(account) {
            return !steamAccounts.some(function(bound) { return bound.steamId === account.steamId; });
          })); },
          openManagement: openSteamAccountManagement,
          getAccounts: function() { return steamAccounts.slice(); },
          addAccount: function(account) {
            if (!account || !account.steamId || steamAccounts.length >= 3) return false;
            if (steamAccounts.some(function(item) { return item.steamId === account.steamId; })) return false;
            return bindSteamAccount(account);
          }
        };
        /*
        steamContainer.appendChild(createAcceleratorSteamInformationCard({
          state: 'not-bound',
          onBindClick: function(event, card) {
            if (typeof window.createAcceleratorSteamAuthorizationModal !== 'function') return;
            window.createAcceleratorSteamAuthorizationModal({
              trigger: event.currentTarget,
              mountTarget: card.closest('.accelerator-home-frame') || document.body,
              onComplete: function(account) {
                steamContainer.replaceChildren(createAcceleratorSteamInformationCard({
                  state: 'bound',
                  userName: account && account.displayName,
                  steamId: account && account.steamId,
                  avatarSrc: account && account.avatarSrc
                    ? account.avatarSrc
                    : '../image/Avatar/头像1095.png'
                }));
                renderHomeAssetCards(true);
              }
            });
          }
        })); */
      }

      const closeButtonContainer = document.getElementById('accelerator-home-hero-close');
      const carouselWrap = document.getElementById('accelerator-home-carousel-wrap');
      const restoreButtonContainer = document.getElementById('accelerator-home-carousel-restore');
      const hero = document.getElementById('accelerator-home-hero');
      let closeButton = null;
      let restoreButton = null;

      if (closeButtonContainer) {
        closeButton = createButton({
          text: '',
          variant: 'overlay',
          level: 'primary',
          size: 'small',
          icon: '<i class="nnicon nicon-a-close-lineguanbi-xianxing" aria-hidden="true"></i>',
          iconPosition: 'only',
          iconSize: 'var(--icon-size-x8)',
          className: 'accelerator-home-hero__close'
        });
        closeButton.setAttribute('aria-label', '收起首页广告');
        closeButtonContainer.appendChild(closeButton);
      }

      if (restoreButtonContainer) {
        restoreButton = createButton({
          text: '',
          variant: 'overlay',
          level: 'primary',
          size: 'small',
          icon: '<img src="../image/Steam achievements/banner-small.png" alt="">',
          iconPosition: 'only',
          iconSize: '38px',
          className: 'accelerator-home-carousel-restore'
        });
        restoreButton.setAttribute('aria-label', '展开首页广告');
        restoreButton.hidden = true;
        restoreButtonContainer.appendChild(restoreButton);
      }
      let restoreNudgeDelayTimer = null;
      let restoreNudgeTimer = null;
      let isCarouselTransitioning = false;

      function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      function createCarouselTransitionGhost(rect) {
        const ghost = carouselWrap.cloneNode(true);
        ghost.removeAttribute('id');
        ghost.removeAttribute('hidden');
        ghost.querySelectorAll('[id]').forEach(function(element) {
          element.removeAttribute('id');
        });
        ghost.querySelectorAll('button, a, input, [tabindex]').forEach(function(element) {
          element.setAttribute('tabindex', '-1');
          element.setAttribute('aria-hidden', 'true');
        });
        ghost.classList.add('accelerator-home-carousel-transition-ghost');
        ghost.style.left = rect.left + 'px';
        ghost.style.top = rect.top + 'px';
        ghost.style.width = rect.width + 'px';
        ghost.style.height = rect.height + 'px';
        ghost.style.visibility = 'visible';
        document.body.appendChild(ghost);
        return ghost;
      }

      function getTargetTransform(sourceRect, targetRect) {
        const scale = targetRect.width / sourceRect.width;
        const translateX = targetRect.left + targetRect.width / 2 - sourceRect.left - sourceRect.width * scale / 2;
        const translateY = targetRect.top + targetRect.height / 2 - sourceRect.top - sourceRect.height * scale / 2;
        return `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      }

      function animateSteamCard(fromRect, toRect, duration = 480) {
        const steamWrap = document.querySelector('.accelerator-home-steam-wrap');
        if (!steamWrap || prefersReducedMotion()) return null;
        const deltaY = fromRect.top - toRect.top;
        return steamWrap.animate([
          { transform: `translateY(${deltaY}px)` },
          { transform: 'translateY(0)' }
        ], {
          duration: duration,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
        });
      }

      function stopRestoreNudge() {
        if (restoreNudgeDelayTimer !== null) {
          window.clearTimeout(restoreNudgeDelayTimer);
          restoreNudgeDelayTimer = null;
        }
        if (restoreNudgeTimer !== null) {
          window.clearInterval(restoreNudgeTimer);
          restoreNudgeTimer = null;
        }
        if (restoreButton) restoreButton.classList.remove('is-nudging');
      }

      function playRestoreNudge() {
        if (!restoreButton || restoreButton.hidden) return;
        restoreButton.classList.remove('is-nudging');
        void restoreButton.offsetWidth;
        restoreButton.classList.add('is-nudging');
      }

      function startRestoreNudge() {
        stopRestoreNudge();
        restoreNudgeDelayTimer = window.setTimeout(function() {
          restoreNudgeDelayTimer = null;
          playRestoreNudge();
          restoreNudgeTimer = window.setInterval(playRestoreNudge, 5000);
        }, 2000);
      }

      async function collapseCarousel() {
        if (!carouselWrap || !restoreButton || !hero || isCarouselTransitioning) return;
        isCarouselTransitioning = true;
        stopRestoreNudge();

        const sourceRect = carouselWrap.getBoundingClientRect();
        const steamWrap = document.querySelector('.accelerator-home-steam-wrap');
        const steamRectBefore = steamWrap.getBoundingClientRect();

        restoreButton.hidden = false;
        restoreButton.classList.add('is-transition-target');
        const ghost = prefersReducedMotion() ? null : createCarouselTransitionGhost(sourceRect);
        carouselWrap.hidden = true;
        hero.classList.add('is-carousel-collapsed');

        const targetRect = restoreButton.getBoundingClientRect();
        const steamRectAfter = steamWrap.getBoundingClientRect();
        const steamAnimation = animateSteamCard(steamRectBefore, steamRectAfter, 340);

        if (ghost) {
          const targetTransform = getTargetTransform(sourceRect, targetRect);
          const ghostAnimation = ghost.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: 'var(--border-radius-4r)' },
            { transform: targetTransform, opacity: 0.2, borderRadius: 'var(--border-radius-4r)' }
          ], {
            duration: 340,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards'
          });
          await ghostAnimation.finished.catch(function() {});
          ghost.remove();
        }

        if (steamAnimation) await steamAnimation.finished.catch(function() {});
        restoreButton.classList.remove('is-transition-target');
        if (!prefersReducedMotion()) {
          restoreButton.animate([
            { opacity: 0, transform: 'scale(0.72)' },
            { opacity: 1, transform: 'scale(1)' }
          ], {
            duration: 180,
            easing: 'cubic-bezier(0.22, 1.25, 0.36, 1)'
          });
        }
        isCarouselTransitioning = false;
        startRestoreNudge();
      }

      async function expandCarousel() {
        if (!carouselWrap || !restoreButton || !hero || isCarouselTransitioning) return;
        isCarouselTransitioning = true;
        stopRestoreNudge();

        const targetRect = restoreButton.getBoundingClientRect();
        const steamWrap = document.querySelector('.accelerator-home-steam-wrap');
        const steamRectBefore = steamWrap.getBoundingClientRect();
        restoreButton.classList.add('is-transition-target');
        carouselWrap.hidden = false;
        carouselWrap.style.visibility = 'hidden';
        hero.classList.remove('is-carousel-collapsed');

        const destinationRect = carouselWrap.getBoundingClientRect();
        const steamRectAfter = steamWrap.getBoundingClientRect();
        const steamAnimation = animateSteamCard(steamRectBefore, steamRectAfter);
        const ghost = prefersReducedMotion() ? null : createCarouselTransitionGhost(destinationRect);

        if (ghost) {
          const startTransform = getTargetTransform(destinationRect, targetRect);
          const ghostAnimation = ghost.animate([
            { transform: startTransform, opacity: 0.2, borderRadius: 'var(--border-radius-4r)' },
            { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: 'var(--border-radius-4r)' }
          ], {
            duration: 520,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards'
          });
          await ghostAnimation.finished.catch(function() {});
          ghost.remove();
        }

        if (steamAnimation) await steamAnimation.finished.catch(function() {});
        carouselWrap.style.removeProperty('visibility');
        restoreButton.hidden = true;
        restoreButton.classList.remove('is-transition-target');
        isCarouselTransitioning = false;
      }

      if (closeButton) {
        closeButton.addEventListener('click', function() {
          collapseCarousel();
        });
      }

      if (restoreButton) {
        restoreButton.addEventListener('click', expandCarousel);
        restoreButton.addEventListener('animationend', function() {
          restoreButton.classList.remove('is-nudging');
        });
      }

      const dataGrid = document.getElementById('accelerator-home-data-grid');
      function createRandomTopThousandRank() {
        return Math.floor(Math.random() * 999) + 1;
      }

      const userDataCards = [
          { text: '总游戏时长', value: '606', description: 'h', rank: createRandomTopThousandRank(), tooltipContent: '当前 Steam 账号在全部游戏中的累计游玩时长', imageSrc: '../image/Steam achievements/time.png', rankingType: 'playtime', detailHref: 'AssetDetail.html?type=playtime' },
          { text: '拥有游戏', value: '18', description: '款', rank: createRandomTopThousandRank(), tooltipContent: '当前 Steam 库中已拥有的游戏数量，不含家庭共享、试玩版及已移除游戏', imageSrc: '../image/Steam achievements/game.png', rankingType: 'games', detailHref: 'AssetDetail.html?type=games' },
          { text: '加速时长', value: '8693', description: 'h', rank: createRandomTopThousandRank(), tooltipContent: '使用雷神加速器产生的累计有效游戏加速时长', imageSrc: '../image/Steam achievements/speed.png', rankingType: 'acceleration', detailHref: 'AssetDetail.html?type=acceleration' },
          {
            text: '游戏成就',
            value: '1762',
            description: '个',
            rank: '1000+',
            tooltipContent: '当前 Steam 库中全部游戏已解锁成就的数量总和',
            imageSrc: '../image/Steam achievements/Achievement.png',
            rankingType: 'achievements',
            detailHref: 'AssetDetail.html?type=achievements'
          }
        ];
      function renderHomeAssetCards(hasSteamData = false) {
        if (!dataGrid) return;
        dataGrid.replaceChildren();

        const viewport = document.createElement('div');
        viewport.className = 'accelerator-home-data-grid__viewport';

        const track = document.createElement('div');
        track.className = 'accelerator-home-data-grid__track';
        const cardElements = [];
        userDataCards.forEach(function(card) {
          const cardOptions = hasSteamData
            ? Object.assign({}, card, {
                rankLabel: '全球排名：',
                rankHref: `Ranking.html?type=${card.rankingType}`,
                onClick: card.detailHref
                  ? function() { window.location.href = card.detailHref; }
                  : null,
                ariaLabel: `${card.text}，${card.value}${card.description || ''}，全球排名${card.rank}`
              })
            : Object.assign({}, card, {
                state: 'empty',
                value: '--',
                numericDescription: false,
                rankLabel: '全球排名',
                rank: '',
                rankHref: null,
                tooltipContent: null,
                onClick: null,
                ariaLabel: `${card.text}，暂无数据`
              });
          const cardElement = createAcceleratorUserDataCard(cardOptions);
          cardElements.push(cardElement);
          track.appendChild(cardElement);
        });
        viewport.appendChild(track);
        dataGrid.appendChild(viewport);

        if (cardElements.length <= 4) return;

        function createAssetNavigationControl(direction, label, onClick) {
          const control = document.createElement('div');
          control.className = `accelerator-home-data-grid__control accelerator-home-data-grid__control--${direction}`;
          control.appendChild(createButton({
            text: '',
            variant: 'system',
            level: 'tertiary',
            size: 'small',
            icon: '<i class="nnicon nicon-a-Arrowflattenedbelow-Linejiantoubianxia-xianxing" aria-hidden="true"></i>',
            iconPosition: 'only',
            iconSize: 'var(--icon-size-x12)',
            className: 'accelerator-home-data-grid__arrow-button',
            onClick: onClick
          }));
          control.querySelector('button').setAttribute('aria-label', label);
          return control;
        }

        const previousControl = createAssetNavigationControl('previous', '查看前四项资产数据', function() {
          setAssetCardPage(0);
        });
        const nextControl = createAssetNavigationControl('next', '查看游戏成就数据', function() {
          setAssetCardPage(1);
        });
        dataGrid.appendChild(previousControl);
        dataGrid.appendChild(nextControl);

        let currentAssetCardPage = null;
        let assetCardTransitionTimer = null;

        function syncAssetCardVisibility(page) {
          cardElements.forEach(function(cardElement, index) {
            const isVisible = page === 0 ? index < 4 : index > 0;
            cardElement.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
            cardElement.setAttribute('tabindex', isVisible ? '0' : '-1');
          });
        }

        function setAssetCardPage(page) {
          const normalizedPage = page === 1 ? 1 : 0;

          if (currentAssetCardPage === null) {
            currentAssetCardPage = normalizedPage;
            dataGrid.classList.toggle('is-showing-fifth-card', normalizedPage === 1);
            previousControl.hidden = normalizedPage === 0;
            nextControl.hidden = normalizedPage === 1;
            syncAssetCardVisibility(normalizedPage);
            return;
          }

          if (normalizedPage === currentAssetCardPage) return;
          window.clearTimeout(assetCardTransitionTimer);
          dataGrid.classList.add('is-transitioning');
          cardElements.forEach(function(cardElement) {
            cardElement.setAttribute('aria-hidden', 'false');
            cardElement.setAttribute('tabindex', '-1');
          });
          dataGrid.classList.toggle('is-showing-fifth-card', normalizedPage === 1);
          previousControl.hidden = normalizedPage === 0;
          nextControl.hidden = normalizedPage === 1;
          currentAssetCardPage = normalizedPage;
          assetCardTransitionTimer = window.setTimeout(function() {
            dataGrid.classList.remove('is-transitioning');
            syncAssetCardVisibility(normalizedPage);
          }, 340);
        }

        setAssetCardPage(0);
      }
      renderHomeAssetCards(steamBound);

      let wishlistCount = wishlist.length;
      let wishlistTab = null;

      function syncWishlistTabCount(animate) {
        if (!wishlistTab) return;
        const label = wishlistTab.querySelector('.nn-tab-label');
        if (label) label.textContent = `我的心愿单（${wishlistCount}）`;
        if (!animate) return;
        wishlistTab.classList.remove('is-wishlist-count-updating');
        void wishlistTab.offsetWidth;
        wishlistTab.classList.add('is-wishlist-count-updating');
        window.setTimeout(function() {
          wishlistTab.classList.remove('is-wishlist-count-updating');
        }, 440);
      }

      function animateWishlistCardToTab(cardElement, onArrival) {
        if (!cardElement || !wishlistTab || prefersReducedMotion()) {
          onArrival();
          return;
        }

        const sourceRect = cardElement.getBoundingClientRect();
        const targetRect = wishlistTab.getBoundingClientRect();
        const flyer = cardElement.cloneNode(true);
        flyer.classList.add('accelerator-home-wishlist-card-flyer');
        flyer.querySelector('.nn-product-card__wishlist')?.classList.remove('is-celebrating');
        flyer.setAttribute('aria-hidden', 'true');
        flyer.querySelectorAll('button, a, input, [tabindex]').forEach(function(element) {
          element.setAttribute('tabindex', '-1');
          element.setAttribute('aria-hidden', 'true');
        });
        flyer.style.left = sourceRect.left + 'px';
        flyer.style.top = sourceRect.top + 'px';
        flyer.style.width = sourceRect.width + 'px';
        flyer.style.height = sourceRect.height + 'px';
        document.body.appendChild(flyer);

        const sourceCenterX = sourceRect.left + sourceRect.width / 2;
        const sourceCenterY = sourceRect.top + sourceRect.height / 2;
        const destinationX = targetRect.left + targetRect.width / 2 - sourceCenterX;
        const destinationY = targetRect.top + targetRect.height / 2 - sourceCenterY;
        const arcLift = Math.min(120, Math.max(56, Math.abs(destinationY) * 0.2));
        const tiltDirection = destinationX >= 0 ? 1 : -1;
        const animation = flyer.animate([
          { transform: 'perspective(900px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)', opacity: 1 },
          { transform: `perspective(900px) translate3d(${destinationX * 0.2}px, ${destinationY * 0.12 - arcLift * 0.52}px, 38px) rotateX(10deg) rotateY(${tiltDirection * -16}deg) rotateZ(${tiltDirection * 3}deg) scale(0.92)`, opacity: 1, offset: 0.26 },
          { transform: `perspective(900px) translate3d(${destinationX * 0.56}px, ${destinationY * 0.42 - arcLift}px, 72px) rotateX(-14deg) rotateY(${tiltDirection * 22}deg) rotateZ(${tiltDirection * -6}deg) scale(0.64)`, opacity: 0.96, offset: 0.58 },
          { transform: `perspective(900px) translate3d(${destinationX * 0.84}px, ${destinationY * 0.76 - arcLift * 0.34}px, 28px) rotateX(8deg) rotateY(${tiltDirection * -12}deg) rotateZ(${tiltDirection * 4}deg) scale(0.32)`, opacity: 0.82, offset: 0.82 },
          { transform: `perspective(900px) translate3d(${destinationX}px, ${destinationY}px, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.06)`, opacity: 0 }
        ], {
          duration: 820,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'both'
        });

        let completed = false;
        function completeAnimation() {
          if (completed) return;
          completed = true;
          flyer.remove();
          onArrival();
        }
        animation.addEventListener('finish', completeAnimation, { once: true });
        animation.addEventListener('cancel', completeAnimation, { once: true });
      }

      const productGrid = document.getElementById('accelerator-home-product-grid');
      if (productGrid) {
        function closeHomeStoreAd(ad) {
          // Measure grid-local positions so preview scaling and scrolling do not
          // change the distance of the card-to-card transition.
          const followingCards = Array.from(productGrid.children).slice(
            Array.from(productGrid.children).indexOf(ad) + 1
          );
          const positions = followingCards.map(function(card) {
            return { card: card, left: card.offsetLeft, top: card.offsetTop };
          });
          const restoreFocus = ad.contains(document.activeElement);
          ad.remove();

          if (restoreFocus && followingCards[0]) {
            followingCards[0].focus({ preventScroll: true });
          }
          if (prefersReducedMotion()) return;

          // FLIP: the grid owns the final layout; only animate the visual offset.
          const moves = positions.map(function(position) {
            return {
              card: position.card,
              x: position.left - position.card.offsetLeft,
              y: position.top - position.card.offsetTop
            };
          });
          moves.forEach(function(move) {
            if (!move.x && !move.y) return;
            move.card.animate([
              { transform: `translate(${move.x}px, ${move.y}px)` },
              { transform: 'translate(0, 0)' }
            ], {
              duration: 420,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
            });
          });
        }

        function createHomeStoreAd() {
          const ad = document.createElement('aside');
          ad.className = 'accelerator-home-store-ad';
          ad.setAttribute('aria-label', '游戏推荐广告');

          const image = document.createElement('img');
          image.className = 'accelerator-home-store-ad__image';
          image.src = '../image/Game Store/home-recommendation-ad.png';
          image.alt = '游戏推荐广告';
          ad.appendChild(image);

          const closeButton = createButton({
            text: '删除',
            variant: 'overlay',
            level: 'primary',
            size: 'small',
            textSize: 'caption',
            appearance: 'compact-label',
            className: 'accelerator-home-store-ad__close',
            onClick: function(event) {
              event.stopPropagation();
              closeHomeStoreAd(ad);
            }
          });
          closeButton.setAttribute('aria-label', '删除广告');
          ad.appendChild(closeButton);
          return ad;
        }

        storeProducts.forEach(function(product, index) {
          if (index === 3) productGrid.appendChild(createHomeStoreAd());
          function openProductDetail() {
            const query = new URLSearchParams({
              title: product.title,
              price: product.currentPrice || '',
              originalPrice: product.originalPrice || '',
              discount: product.discount || '',
              cover: product.cover
            });
            window.location.href = `GameDetail.html?${query.toString()}`;
          }
          productGrid.appendChild(createAcceleratorProductCard({
            title: product.title,
            imageSrc: asset(product.cover),
            type: product.type,
            meta: product.meta,
            currentPrice: product.currentPrice,
            originalPrice: product.originalPrice,
            discount: product.discount,
            cornerState: product.cornerState,
            wishlisted: product.wishlisted === true,
            onClick: openProductDetail,
            onActionClick: openProductDetail,
            onWishlistChange: function(isWishlisted, cardElement) {
              wishlistCount = Math.max(0, wishlistCount + (isWishlisted ? 1 : -1));
              if (isWishlisted) {
                animateWishlistCardToTab(cardElement, function() {
                  syncWishlistTabCount(true);
                });
                return;
              }
              syncWishlistTabCount(true);
            }
          }));
        });
      }

      const wishlistGrid = document.getElementById('accelerator-home-wishlist-grid');
      if (wishlistGrid) {
        wishlist.forEach(function(game) {
          wishlistGrid.appendChild(createAcceleratorWishListCard({
            gameTitle: game.title,
            description: '2025年6月18日添加',
            imageSrc: asset(game.cover),
            steamText: '前往Steam'
          }));
        });
      }

      const recommendationsPanel = document.getElementById('accelerator-home-store-recommendations');
      const wishlistPanel = document.getElementById('accelerator-home-store-wishlist');
      const storeSearch = document.getElementById('accelerator-home-store-search');
      const searchStatus = document.getElementById('accelerator-home-store-search-status');
      function filterStoreProducts(value) {
        if (!productGrid) return;
        const query = String(value || '').trim().toLocaleLowerCase();
        let matches = 0;
        Array.from(productGrid.children).forEach(function(card) {
          if (card.classList.contains('accelerator-home-store-ad')) {
            card.hidden = query.length > 0;
            return;
          }
          const title = card.querySelector('.nn-product-card__title');
          card.hidden = !!query && !(title && title.textContent.toLocaleLowerCase().includes(query));
          if (!card.hidden) matches += 1;
        });
        if (searchStatus) searchStatus.hidden = matches > 0;
      }
      if (storeSearch) {
        const searchInput = createInput({
          size: 'default',
          showSearch: true,
          placeholder: '搜索游戏CDK',
          onInput: function(event) { filterStoreProducts(event.value); },
          onSearch: function(event) { filterStoreProducts(event.value); }
        });
        searchInput.querySelector('input').setAttribute('aria-label', '搜索游戏CDK');
        storeSearch.appendChild(searchInput);
      }
      const storeTabs = document.getElementById('accelerator-home-store-tabs');
      if (storeTabs) {
        const tabsComponent = createTabs({
          type: 'tertiary-box',
          tabs: [{ name: '游戏推荐' }, { name: `我的心愿单（${wishlistCount}）` }],
          defaultActive: 0,
          onChange: function(event) {
            if (recommendationsPanel) recommendationsPanel.hidden = event.index !== 0;
            if (wishlistPanel) wishlistPanel.hidden = event.index !== 1;
            if (storeSearch) storeSearch.hidden = event.index !== 0;
          }
        });
        storeTabs.appendChild(tabsComponent);
        wishlistTab = tabsComponent.querySelector('.nn-tab[data-index="1"]');
        syncWishlistTabCount(false);
      }

      const storeMore = document.getElementById('accelerator-home-store-more');
      if (storeMore) storeMore.appendChild(createMoreButton('更多'));

      setActiveNav('accelerator-p-nav-home');
    }

    document.addEventListener('DOMContentLoaded', initAcceleratorHomePage);

    function initAcceleratorAssetDetailPage() {
      if (!document.body.classList.contains('accelerator-asset-detail-page')) return;

      if (new URLSearchParams(window.location.search).get('embed') === '1') {
        document.body.classList.add('is-embed-preview');
      }

      const assetRoot = '../image/Game Store/';
      const games = [
        { title: '怪物猎人：荒野-凌越', cover: 'game-monster-hunter.png', time: '58.7', games: '1', acceleration: '126.4', value: '268', achievements: '42' },
        { title: '湮灭之潮', cover: 'game-tides.png', time: '74', games: '1', acceleration: '87.2', value: '198', achievements: '31' },
        { title: '影之刃：零', cover: 'game-phantom-blade.png', time: '66.2', games: '1', acceleration: '93.8', value: '268', achievements: '28' },
        { title: '生化危机：维罗妮卡重制版', cover: 'game-resident-evil.png', time: '49', games: '1', acceleration: '62.5', value: '298', achievements: '36' },
        { title: '血源：诅咒', cover: 'game-bloodborne.png', time: '81.5', games: '1', acceleration: '104.6', value: '198', achievements: '24' },
        { title: '最终幻想：共鸣', cover: 'game-final-fantasy.png', time: '53', games: '1', acceleration: '72.3', value: '268', achievements: '39' },
        { title: '怪物猎人：荒野-凌越', cover: 'game-monster-hunter.png', time: '62.8', games: '1', acceleration: '91.6', value: '268', achievements: '33' },
        { title: '鬼武者：剑之道', cover: 'game-onimusha.png', time: '70', games: '1', acceleration: '83.1', value: '228', achievements: '27' },
        { title: '龙之信条2：黑暗觉醒', cover: 'game-dragons-dogma.png', time: '47.3', games: '1', acceleration: '55.4', value: '298', achievements: '19' },
        { title: '《巫师3：狂猎》- 重制版', cover: 'game-witcher-remake.png', time: '43.5', games: '1', acceleration: '49.8', value: '198', achievements: '45' }
      ];
      const detailType = new URLSearchParams(window.location.search).get('type') || 'playtime';
      const configs = {
        playtime: { title: '总游戏时长', value: '606.3', unit: 'h', rank: '856', primaryLabel: '总时长', secondary: '78.5', secondaryLabel: '上周总时长', key: 'time', label: '游玩总时长', description: 'siseil sdlfwelsdfe', rankType: 'playtime' },
        games: { title: '拥有游戏', value: '18', unit: '款', rank: '257', primaryLabel: '游戏总数', secondary: '2016.8.6', secondaryUnit: '', secondaryLabel: '最早入库时间', key: 'games', label: '', description: '入库时间：2026.03.12', rankType: 'games', hideCardData: true },
        acceleration: { title: '加速时长', value: '8693', unit: 'h', rank: '931', primaryLabel: '累计加速时长', secondary: '56.2', secondaryUnit: 'h', secondaryLabel: '上周加速时长', key: 'acceleration', label: '加速总时长', description: 'siseil sdlfwelsdfe', rankType: 'acceleration' },
        value: { title: '账号价值', value: '8642', unit: '', rank: '1000+', primaryLabel: '账号总价值', secondary: '56.2', secondaryUnit: 'h', secondaryLabel: '本周加速时长', key: 'time', label: '总时长', description: 'Steam 商店参考价', titleDescription: 'Steam 库中全部游戏的原价之和，不含折扣、DLC与内购', rankType: 'value' },
        achievements: { title: '游戏成就', value: '1762', unit: '个', rank: '1000+', primaryLabel: '解锁成就数', secondary: '57', secondaryUnit: '%', secondaryLabel: '整体完成率', tertiary: '8', tertiaryUnit: '款', tertiaryLabel: '100%成就', key: 'achievements', label: '已完成成就', description: '当前游戏成就进度', rankType: 'achievements' }
      };
      const config = configs[detailType] || configs.playtime;
      const titleNode = document.querySelector('.accelerator-asset-detail-title');
      const pageHeading = document.querySelector('.section-title');
      const pageDescription = document.querySelector('.accelerator-asset-detail-page-shell .description');
      const breadcrumbParts = document.querySelectorAll('.accelerator-asset-detail-page-shell .breadcrumb-part');
      if (titleNode) titleNode.textContent = config.title;
      if (titleNode && config.titleDescription) {
        const titleDescription = document.createElement('span');
        titleDescription.className = 'accelerator-asset-detail-title-description';
        titleDescription.textContent = config.titleDescription;
        titleNode.appendChild(titleDescription);
      }
      if (pageHeading) pageHeading.textContent = config.title;
      if (pageDescription) pageDescription.textContent = config.titleDescription || ('展示账号' + config.title + '、当前排名和游戏明细。');
      if (breadcrumbParts.length > 1) breadcrumbParts[1].textContent = config.title;
      document.title = '加速器页面 - ' + config.title;
      const primaryNumber = document.querySelector('.accelerator-asset-detail-stat--primary .accelerator-asset-detail-stat__number');
      const primaryUnit = document.querySelector('.accelerator-asset-detail-stat--primary .accelerator-asset-detail-stat__value em');
      const secondaryNumber = document.querySelectorAll('.accelerator-asset-detail-stat__number')[1];
      const secondaryUnit = document.querySelectorAll('.accelerator-asset-detail-stat__value em')[1];
      const secondaryStatNode = document.querySelector('.accelerator-asset-detail-stat:not(.accelerator-asset-detail-stat--primary)');
      const secondaryLabel = secondaryStatNode ? secondaryStatNode.querySelector('.accelerator-asset-detail-stat__meta > span') : null;
      const primaryLabel = document.querySelector('.accelerator-asset-detail-stat--primary .accelerator-asset-detail-stat__meta > span');
      const secondaryMetaLabel = secondaryStatNode ? secondaryStatNode.querySelector('.accelerator-asset-detail-stat__meta > span') : null;
      const rankNumber = document.querySelector('#accelerator-asset-detail-rank-link strong');
      const rankLabel = document.querySelector('#accelerator-asset-detail-rank-link > span');
      const rankLink = document.querySelector('#accelerator-asset-detail-rank-link');
      if (primaryNumber) primaryNumber.textContent = config.value;
      if (primaryUnit) primaryUnit.textContent = config.unit;
      if (secondaryNumber) secondaryNumber.textContent = config.secondary;
      if (secondaryUnit) secondaryUnit.textContent = config.secondaryUnit == null ? config.unit : config.secondaryUnit;
      if (secondaryLabel) secondaryLabel.textContent = config.secondaryLabel;
      if (primaryLabel) primaryLabel.textContent = config.primaryLabel;
      if (secondaryMetaLabel) secondaryMetaLabel.textContent = config.secondaryLabel;
      if (rankNumber) rankNumber.textContent = config.rank;
      if (rankLabel) rankLabel.textContent = '全球排名：';
      if (rankLink) {
        rankLink.setAttribute('aria-label', '查看' + config.title + '排行榜');
      }

      if (detailType === 'achievements') {
        const summary = document.querySelector('.accelerator-asset-detail-summary');
        const secondaryStat = document.querySelector('.accelerator-asset-detail-stat:not(.accelerator-asset-detail-stat--primary)');
        if (summary && secondaryStat && !summary.querySelector('.accelerator-asset-detail-stat--tertiary')) {
          const tertiary = secondaryStat.cloneNode(true);
          tertiary.classList.add('accelerator-asset-detail-stat--tertiary');
          tertiary.querySelector('.accelerator-asset-detail-stat__number').textContent = config.tertiary;
          tertiary.querySelector('.accelerator-asset-detail-stat__value em').textContent = config.tertiaryUnit;
          tertiary.querySelector('.accelerator-asset-detail-stat__meta > span').textContent = config.tertiaryLabel;
          const oldRank = tertiary.querySelector('.accelerator-asset-detail-rank');
          if (oldRank) oldRank.remove();
          if (config.tertiary != null) summary.appendChild(tertiary);
        }
        const achievementList = document.getElementById('accelerator-asset-detail-list');
        if (achievementList) achievementList.classList.add('accelerator-asset-detail-achievement-list');
      }

      const headerContainer = document.getElementById('accelerator-asset-detail-header');
      if (headerContainer) {
        function openAssetGameSearch(value) {
          detailHeader.suppressSearchSuggestions();
          const frame = headerContainer.closest('.accelerator-asset-detail-frame');
          if (!frame || frame.querySelector('.accelerator-game-search')) return;
          const search = createAcceleratorGameSearch({
            mountTarget: frame,
            onClose: function() { detailHeader.suppressSearchSuggestions(); }
          });
          if (value) {
            search.searchInput.value = value;
            search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
        const detailHeader = createAcceleratorHeader({
          width: '100%',
          canGoBack: true,
          enableSearchSuggestions: true,
          onSearchSuggestionSelect: function(value) { openAssetGameSearch(value); }
        });
        headerContainer.appendChild(detailHeader);
        const headerInput = detailHeader.search.querySelector('input');
        headerInput.readOnly = true;
        headerInput.setAttribute('aria-haspopup', 'dialog');
        detailHeader.search.addEventListener('click', function(event) {
          event.preventDefault();
          openAssetGameSearch();
        });
      }

      const sidebarContainer = document.getElementById('accelerator-asset-detail-sidebar');
      if (sidebarContainer) {
        const panel = createAcceleratorSideNavigationPanel({
          sortable: true,
          functionItems: [
            {
              text: '首页',
              iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing',
              onClick: function() { window.location.href = 'Home.html'; }
            },
            { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
          ],
          onChange: function(change) {
            if (change.group === 'game') window.location.href = 'GameAccelerator.html?game=' + encodeURIComponent(change.item.id || change.item.text);
          }
        });
        sidebarContainer.appendChild(panel);
        panel.setActiveItem(panel.functionItems[0]);
      }

      const list = document.getElementById('accelerator-asset-detail-list');
      const detailContent = document.querySelector('.accelerator-asset-detail-content');
      let achievementDetail = null;
      if (detailType === 'achievements' && detailContent && list) {
        const searchHeading = document.getElementById('accelerator-asset-detail-search');
        if (searchHeading) searchHeading.remove();
        list.replaceChildren();
        list.classList.add('accelerator-asset-detail-achievement-layout');
        const left = document.createElement('aside');
        left.className = 'accelerator-asset-detail-achievement-sidebar';
        const leftSearch = document.createElement('div');
        leftSearch.className = 'accelerator-asset-detail-achievement-search';
        left.appendChild(leftSearch);
        const gamesPanel = document.createElement('div');
        gamesPanel.className = 'accelerator-asset-detail-achievement-games';
        left.appendChild(gamesPanel);
        achievementDetail = document.createElement('section');
        achievementDetail.className = 'accelerator-asset-detail-achievement-detail';
        list.appendChild(left);
        list.appendChild(achievementDetail);
        leftSearch.appendChild(createInput({ size: 'default', showSearch: true, placeholder: '搜索游戏', onInput: function(event) { renderAchievementGames(event.value); } }));
      }
      function renderAchievementDetail(game) {
        if (!achievementDetail) return;
        achievementDetail.replaceChildren();
        const hero = document.createElement('div'); hero.className = 'accelerator-achievement-detail-hero';
        const cover = document.createElement('img'); cover.src = assetRoot + game.cover; cover.alt = game.title; hero.appendChild(cover);
        const copy = document.createElement('div'); copy.className = 'accelerator-achievement-detail-copy';
        const title = document.createElement('h3'); title.textContent = game.title; copy.appendChild(title);
        const english = document.createElement('p'); english.textContent = game.english || 'Steam Achievement Progress'; copy.appendChild(english);
        const progress = document.createElement('div');
        progress.className = 'accelerator-achievement-detail-progress';
        const metrics = document.createElement('div');
        metrics.className = 'accelerator-achievement-detail-metrics';
        [['14已解锁', 'unlocked'], ['23未解锁', 'locked'], ['38%', 'percent']].forEach(function(metric) {
          const value = document.createElement('span');
          value.className = 'accelerator-achievement-detail-metrics__' + metric[1];
          value.textContent = metric[0];
          metrics.appendChild(value);
        });
        progress.appendChild(metrics);
        const track = document.createElement('div'); track.className = 'accelerator-achievement-detail-track';
        track.setAttribute('role', 'progressbar');
        track.setAttribute('aria-label', '成就完成率');
        track.setAttribute('aria-valuenow', '38');
        track.setAttribute('aria-valuemin', '0');
        track.setAttribute('aria-valuemax', '100');
        const fill = document.createElement('span'); fill.style.width = '38%'; track.appendChild(fill); progress.appendChild(track); copy.appendChild(progress); hero.appendChild(copy); achievementDetail.appendChild(hero);
        const achievements = document.createElement('div'); achievements.className = 'accelerator-achievement-detail-items';
        const achievementRows = [
          ['点灯人', '摧毁 666 根蜡烛', '../image/Steam achievements/witcher3/01-6078587189483353f06f48d0eefdaaa0791e9e13.jpg'],
          ['武器大师', '收集游戏内全部武器', '../image/Steam achievements/witcher3/02-07bae88f1ee9b856ddfc1d8e28ae7eedd4bcde95.jpg'],
          ['速通跳过对话', '4 小时以内完成游戏通关', '../image/Steam achievements/witcher3/03-652e39d4e750183a390a4e9f2f99018c1b335a20.jpg'],
          ['诅咒消散【隐藏】', '达成真结局通关游戏', '../image/Steam achievements/witcher3/04-883f82ffa933d6d12da3e8733f340b082a08c325.jpg'],
          ['海克特的未报之仇', '击败狂猎信徒（Zealot）', '../image/Steam achievements/witcher3/05-97246533609245ba270e7a8eb39a64d319ce5011.jpg'],
          ['闪耀之物未必是黄金', '', '../image/Steam achievements/witcher3/06-46b0b574e6334d81211e0c3db1539d3a76364144.jpg']
        ];
        achievementRows.forEach(function(row) {
          const item = document.createElement('article');
          item.className = 'accelerator-achievement-detail-item';
          const icon = document.createElement('img');
          icon.className = 'accelerator-achievement-detail-icon';
          icon.src = row[2];
          icon.alt = '';
          const description = document.createElement('div');
          description.className = 'accelerator-achievement-detail-item__copy';
          const name = document.createElement('strong'); name.textContent = row[0];
          const text = document.createElement('p'); text.textContent = row[1];
          description.appendChild(name); description.appendChild(text);
          const time = document.createElement('time');
          time.dateTime = '2024-05-05T22:57:00';
          time.textContent = '解锁于 2024年5月5日 22：57';
          item.appendChild(icon); item.appendChild(description); item.appendChild(time);
          achievements.appendChild(item);
        });
        achievementDetail.appendChild(achievements);
      }
      function renderAchievementGames(keyword) {
        if (!achievementDetail) return;
        const panel = document.querySelector('.accelerator-asset-detail-achievement-games'); if (!panel) return;
        const query = String(keyword || '').trim().toLowerCase(); panel.replaceChildren();
        const visible = query ? games.filter(function(game) { return game.title.toLowerCase().includes(query); }) : games;
        panel.setAttribute('role', 'listbox');
        panel.setAttribute('aria-label', '选择游戏查看成就');
        visible.forEach(function(game, index) {
          const item = document.createElement('div');
          item.className = 'accelerator-achievement-game-item' + (index === 0 ? ' is-selected' : '');
          item.setAttribute('role', 'option');
          item.setAttribute('aria-selected', String(index === 0));
          item.tabIndex = 0;
          const cover = document.createElement('img'); cover.src = assetRoot + game.cover; cover.alt = '';
          const copy = document.createElement('span');
          const title = document.createElement('b'); title.className = 'accelerator-achievement-game-item__title'; title.textContent = game.title; title.title = game.title;
          const count = document.createElement('small'); count.textContent = '14/37';
          copy.appendChild(title); copy.appendChild(count); item.appendChild(cover); item.appendChild(copy);
          function selectGame() {
            panel.querySelectorAll('.is-selected').forEach(function(node) { node.classList.remove('is-selected'); node.setAttribute('aria-selected', 'false'); });
            item.classList.add('is-selected'); item.setAttribute('aria-selected', 'true'); renderAchievementDetail(game);
          }
          item.addEventListener('click', selectGame);
          item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectGame(); }
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
              event.preventDefault();
              const next = event.key === 'ArrowDown' ? item.nextElementSibling : item.previousElementSibling;
              if (next) { next.focus(); next.click(); }
            }
          });
          panel.appendChild(item); if (index === 0) renderAchievementDetail(game);
        });
      }
      function renderGames(keyword) {
        if (!list) return;
        const query = String(keyword || '').trim().toLowerCase();
        const visibleGames = query
          ? games.filter(function(game) { return game.title.toLowerCase().includes(query); })
          : games;
        if (detailType === 'achievements') { renderAchievementGames(keyword); return; }
        list.replaceChildren();
        visibleGames.forEach(function(game, index) {
          if (detailType === 'achievements') {
            const achievement = createAcceleratorAchievementCard({
              gameTitle: game.title,
              imageSrc: assetRoot + game.cover,
              completedCount: Number(game.achievements || 14),
              totalCount: 37,
              highlightedCount: 6,
              className: index === 0 ? 'is-selected' : '',
              onClick: function() {
                achievementList.querySelectorAll('.is-selected').forEach(function(node) { node.classList.remove('is-selected'); });
                achievement.classList.add('is-selected');
              }
            });
            list.appendChild(achievement);
            return;
          }
          list.appendChild(createAcceleratorWishListCard({
            rank: games.indexOf(game) + 1,
            gameTitle: game.title,
            description: detailType === 'games' ? '入库时间：2026.03.12' : (detailType === 'value' ? 'Steam 商店参考价' : config.description),
            imageSrc: assetRoot + game.cover,
            rightType: 'data',
            dataValue: detailType === 'games' ? '2026.03.12' : (detailType === 'value' ? game.time : game[config.key]),
            dataUnit: detailType === 'games' ? '' : (detailType === 'value' ? 'h' : config.unit),
            dataLabel: detailType === 'games' ? '入库时间' : config.label,
            hideData: detailType === 'games'
          }));
        });
      }

      const searchContainer = document.getElementById('accelerator-asset-detail-search');
      if (searchContainer) {
        searchContainer.appendChild(createInput({
          size: 'default',
          showSearch: true,
          placeholder: '搜索游戏',
          onInput: function(event) { renderGames(event.value); }
        }));
      }

      const rankingLink = document.getElementById('accelerator-asset-detail-rank-link');
      if (rankingLink) {
        rankingLink.addEventListener('click', function() {
          window.location.href = 'Ranking.html?type=' + config.rankType;
        });
        rankingLink.addEventListener('keydown', function(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = 'Ranking.html?type=' + config.rankType;
          }
        });
      }

      renderGames('');

      const preview = document.getElementById('accelerator-asset-detail-stage');
      if (preview) {
        preview.dataset.codeJs = [
          "const search = createInput({ size: 'default', showSearch: true, placeholder: '搜索游戏' });",
          "const game = createAcceleratorWishListCard({",
          "  gameTitle: '怪物猎人：荒野-凌越',",
          "  description: '游玩总时长 29.8h',",
          "  rightType: 'data', dataValue: '58.7', dataUnit: 'h', dataLabel: '总时长'",
          "});"
        ].join('\n');
      }

      if (typeof setActiveNav === 'function') setActiveNav('accelerator-p-nav-home');
    }

    document.addEventListener('DOMContentLoaded', initAcceleratorAssetDetailPage);

    /* Accelerator page: Ranking */
(function() {
  const avatarSources = [
    '../image/Avatar/头像1095.png',
    '../image/Avatar/头像748.png',
    '../image/Avatar/头像562.png',
    '../image/Avatar/头像827.png',
    '../image/Avatar/头像629.png',
    '../image/Avatar/头像826.png',
    '../image/Avatar/头像985.png',
    '../image/Avatar/头像991.png',
    '../image/Avatar/头像824.png',
    '../image/Avatar/头像1078.png',
    '../image/Avatar/头像10.png',
    '../image/Avatar/头像558.png',
    '../image/Avatar/头像809.png',
    '../image/Avatar/头像821.png',
    '../image/Avatar/头像834.png',
    '../image/Avatar/头像1098.png',
    '../image/Avatar/头像619.png',
    '../image/Avatar/头像624.png',
    '../image/Avatar/头像546.png',
    '../image/Avatar/头像746.png',
    '../image/Avatar/头像829.png',
    '../image/Avatar/头像800.png',
    '../image/Avatar/头像551.png',
    '../image/Avatar/头像753.png',
    '../image/Avatar/头像974.png',
    '../image/Avatar/头像637.png',
    '../image/Avatar/头像1100.png',
    '../image/Avatar/头像636.png',
    '../image/Avatar/头像967.png',
    '../image/Avatar/头像797.png',
    '../image/Avatar/头像556.png',
    '../image/Avatar/头像542.png',
    '../image/Avatar/头像634.png',
    '../image/Avatar/头像580.png',
    '../image/Avatar/头像849.png',
    '../image/Avatar/头像691.png',
    '../image/Avatar/头像445.png',
    '../image/Avatar/头像902.png',
    '../image/Avatar/头像719.png',
    '../image/Avatar/头像686.png',
    '../image/Avatar/头像655.png',
    '../image/Avatar/头像480.png',
    '../image/Avatar/头像496.png',
    '../image/Avatar/头像441.png',
    '../image/Avatar/头像643.png',
    '../image/Avatar/头像656.png',
    '../image/Avatar/头像911.png',
    '../image/Avatar/头像934.png',
    '../image/Avatar/头像511.png',
    '../image/Avatar/头像706.png',
    '../image/Avatar/头像72.png',
    '../image/Avatar/头像664.png',
    '../image/Avatar/头像659.png',
    '../image/Avatar/头像498.png',
    '../image/Avatar/头像311.png',
    '../image/Avatar/头像716.png',
    '../image/Avatar/头像662.png',
    '../image/Avatar/头像676.png',
    '../image/Avatar/头像717.png',
    '../image/Avatar/头像1086.png',
    '../image/Avatar/头像798.png',
    '../image/Avatar/头像954.png',
    '../image/Avatar/头像773.png',
    '../image/Avatar/头像559.png'
  ];

  const rankingDefinitions = [
    {
      type: 'playtime',
      seed: 1207,
      title: '加速时长排行',
      values: [1498119, 1422541, 1357246, 1270037, 1259279, 1119089, 1091493, 1090786, 1068972, 1034094, 1025704, 1025598, 1020742, 1010258, 960126],
      suffix: 'h',
      currentUser: { rankLabel: '1000+', value: 643, suffix: 'h' }
    },
    {
      type: 'games',
      seed: 2411,
      title: '游戏数量排行',
      values: [882, 829, 819, 797, 796, 784, 758, 624, 612, 603, 592, 540, 534, 521, 510],
      suffix: '款',
      currentUser: { rank: 865, value: 487, suffix: '款', ariaLabel: '排行榜第 865 名' }
    },
    {
      type: 'acceleration',
      seed: 3613,
      title: '加速时长排行',
      values: [1498119, 1422541, 1357246, 1270037, 1259279, 1119089, 1091493, 1090786, 1068972, 1034094, 1025704, 1025598, 1020742, 1010258, 960126],
      suffix: 'h',
      currentUser: { rankLabel: '1000+', value: 643, suffix: 'h' }
    },
    {
      type: 'value',
      seed: 4817,
      title: '账号价值排行',
      values: [880, 855, 854, 846, 831, 801, 801, 789, 656, 637, 593, 571, 566, 506, 503],
      prefix: '¥',
      suffix: false,
      currentUser: { rankLabel: '1000+', value: 95, prefix: '¥', suffix: false }
    },
    {
      type: 'achievements',
      seed: 5923,
      title: '游戏成就排行',
      values: [1862, 1754, 1698, 1642, 1588, 1534, 1491, 1428, 1382, 1310, 1276, 1219, 1184, 1128, 1087],
      suffix: '个',
      currentUser: { rankLabel: '1000+', value: 1762, suffix: '个' }
    }
  ];

  function createSeededRandom(seed) {
    let state = seed >>> 0;
    return function() {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }

  function createRandomizedProfiles(definition) {
    const random = createSeededRandom(definition.seed);
    const avatars = avatarSources.slice();
    for (let index = avatars.length - 1; index > 0; index -= 1) {
      const targetIndex = Math.floor(random() * (index + 1));
      const current = avatars[index];
      avatars[index] = avatars[targetIndex];
      avatars[targetIndex] = current;
    }

    return definition.values.map(function(_, index) {
      const prefixOptions = ['131', '132', '136', '138', '150', '151', '159', '178', '180', '181', '183', '184', '185', '186', '187', '189'];
      const prefix = prefixOptions[Math.floor(random() * prefixOptions.length)];
      const suffix = String(Math.floor(random() * 10000)).padStart(4, '0');
      return {
        userName: `${prefix}****${suffix}`,
        avatarSrc: avatars[index]
      };
    });
  }

  function createRankingItems(definition) {
    const profiles = createRandomizedProfiles(definition);
    return definition.values.map(function(value, index) {
      return {
        userName: profiles[index].userName,
        value: value,
        prefix: definition.prefix || '',
        suffix: definition.suffix,
        avatarSrc: profiles[index].avatarSrc,
        online: true
      };
    });
  }

  function renderRankingPage() {
    if (!document.body.classList.contains('accelerator-ranking-page')) return;

    if (new URLSearchParams(window.location.search).get('embed') === '1') {
      document.body.classList.add('is-embed-preview');
    }

    const headerContainer = document.getElementById('accelerator-ranking-page-header');
    if (headerContainer) {
      let rankingHeader = null;
      function openRankingSearch(value) {
        if (!rankingHeader || !window.createAcceleratorGameSearch) return;
        rankingHeader.suppressSearchSuggestions();
        const frame = headerContainer.closest('.accelerator-ranking-page-frame');
        if (!frame || frame.querySelector('.accelerator-game-search')) return;
        const search = window.createAcceleratorGameSearch({
          mountTarget: frame,
          onClose: function() { rankingHeader.suppressSearchSuggestions(); }
        });
        if (value) {
          search.searchInput.value = value;
          search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
      rankingHeader = createAcceleratorHeader({
        width: '100%',
        enableSearchSuggestions: true,
        onSearchSuggestionSelect: openRankingSearch,
        canGoBack: true
      });
      headerContainer.appendChild(rankingHeader);
      const headerInput = rankingHeader.search && rankingHeader.search.querySelector('input');
      if (headerInput) {
        headerInput.readOnly = true;
        headerInput.setAttribute('aria-haspopup', 'dialog');
      }
      rankingHeader.search?.addEventListener('click', function(event) {
        event.preventDefault();
        openRankingSearch();
      });
    }

    const sidebarContainer = document.getElementById('accelerator-ranking-page-sidebar');
    if (sidebarContainer) {
      const panel = createAcceleratorSideNavigationPanel({
        sortable: true,
        functionItems: [
          {
            text: '首页',
            iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing',
            onClick: function() { window.location.href = 'Home.html'; }
          },
          { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
        ],
        onChange: function(change) {
          if (change.group === 'game') window.location.href = 'GameAccelerator.html?game=' + encodeURIComponent(change.item.id || change.item.text);
        }
      });
      sidebarContainer.appendChild(panel);
      panel.setActiveItem(panel.functionItems[0]);
    }

    const grid = document.getElementById('accelerator-ranking-page-grid');
    if (grid) {
      rankingDefinitions.forEach(function(definition) {
        const currentUser = Object.assign({
          avatarSrc: '../image/Avatar/头像834.png',
          online: true,
          userName: '136****3232',
          prefix: definition.prefix || ''
        }, definition.currentUser);

        const list = createAcceleratorRankingList({
          title: definition.title,
          items: createRankingItems(definition),
          currentUser: currentUser,
          suffix: definition.suffix,
          height: 610,
          className: `accelerator-ranking-page-list accelerator-ranking-page-list--${definition.type}`
        });
        list.dataset.rankingType = definition.type;
        grid.appendChild(list);
      });
    }

    const requestedType = new URLSearchParams(window.location.search).get('type');
    const requestedList = requestedType
      ? document.querySelector(`[data-ranking-type="${CSS.escape(requestedType)}"]`)
      : null;
    if (requestedList) requestedList.setAttribute('aria-current', 'true');

    const preview = document.getElementById('accelerator-ranking-page-stage');
    if (preview) {
      preview.dataset.codeJs = [
        "const list = createAcceleratorRankingList({",
        "  title: '游戏数量排行',",
        "  items: rankingItems,",
        "  currentUser: { rank: 865, value: 487, suffix: '款' },",
        "  suffix: '款',",
        "  height: 610",
        "});",
        "document.getElementById('container').appendChild(list);"
      ].join('\n');
    }

    if (typeof setActiveNav === 'function') setActiveNav('accelerator-p-nav-ranking');
  }

  document.addEventListener('DOMContentLoaded', renderRankingPage);

  function initAcceleratorGameDetailPage() {
    if (!document.body.classList.contains('accelerator-game-detail-page')) return;

    if (new URLSearchParams(window.location.search).get('embed') === '1') {
      document.body.classList.add('is-embed-preview');
    }

    const query = new URLSearchParams(window.location.search);
    const title = query.get('title') || '怪物猎人：荒野-凌越';
    const currentPrice = query.get('price') || '¥90';
    const originalPrice = query.get('originalPrice') || '¥168';
    const discount = query.get('discount') || '-30%';
    const imageRoot = '../image/Game Detail/';
    const storeRoot = '../image/Game Store/';
    const mediaItems = [
      { type: 'video', src: `${imageRoot}monster-hunter-wilds-trailer.mp4`, poster: `${imageRoot}monster-hunter-wilds-video-poster.jpg`, label: '《怪物猎人：荒野》官方预告片' },
      { type: 'image', src: `${imageRoot}monster-hunter-wilds-01.jpg`, label: '《怪物猎人：荒野》游戏截图 1' },
      { type: 'image', src: `${imageRoot}monster-hunter-wilds-02.jpg`, label: '《怪物猎人：荒野》游戏截图 2' },
      { type: 'image', src: `${imageRoot}monster-hunter-wilds-03.jpg`, label: '《怪物猎人：荒野》游戏截图 3' },
      { type: 'image', src: `${imageRoot}monster-hunter-wilds-04.jpg`, label: '《怪物猎人：荒野》游戏截图 4' },
      { type: 'image', src: `${imageRoot}monster-hunter-wilds-05.jpg`, label: '《怪物猎人：荒野》游戏截图 5' }
    ];

    const headerContainer = document.getElementById('accelerator-game-detail-header');
    if (headerContainer) {
      headerContainer.appendChild(createAcceleratorHeader({
        width: '100%',
        canGoBack: true
      }));
    }

    const sidebarContainer = document.getElementById('accelerator-game-detail-sidebar');
    if (sidebarContainer) {
      const panel = createAcceleratorSideNavigationPanel({
        sortable: true,
        functionItems: [
          { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = 'Home.html'; } },
          { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
        ]
      });
      sidebarContainer.appendChild(panel);
    }

    const player = document.getElementById('accelerator-game-detail-player');
    const thumbnails = document.getElementById('accelerator-game-detail-thumbnails');
    let activeMediaIndex = 0;

    function renderMedia(index) {
      activeMediaIndex = index;
      const item = mediaItems[index];
      player.replaceChildren();
      if (item.type === 'video') {
        const video = document.createElement('video');
        video.className = 'accelerator-game-detail-video';
        video.src = item.src;
        video.poster = item.poster;
        video.controls = true;
        video.preload = 'metadata';
        video.playsInline = true;
        video.setAttribute('aria-label', item.label);
        player.appendChild(video);
      } else {
        const image = document.createElement('img');
        image.className = 'accelerator-game-detail-media-image';
        image.src = item.src;
        image.alt = item.label;
        player.appendChild(image);
      }
      thumbnails.querySelectorAll('.accelerator-game-detail-thumbnail').forEach(function(button, buttonIndex) {
        button.classList.toggle('is-active', buttonIndex === index);
        button.setAttribute('aria-current', buttonIndex === index ? 'true' : 'false');
      });
    }

    mediaItems.forEach(function(item, index) {
      const button = createButton({
        text: '',
        variant: 'system',
        level: 'tertiary',
        size: 'small',
        className: 'accelerator-game-detail-thumbnail',
        onClick: function() { renderMedia(index); }
      });
      button.setAttribute('aria-label', item.label);
      const preview = document.createElement('img');
      preview.src = item.type === 'video' ? item.poster : item.src;
      preview.alt = '';
      button.appendChild(preview);
      if (item.type === 'video') {
        const playIcon = document.createElement('i');
        playIcon.className = 'nnicon nicon-a-play-filebofang-mianxing accelerator-game-detail-thumbnail__play';
        playIcon.setAttribute('aria-hidden', 'true');
        button.appendChild(playIcon);
      }
      thumbnails.appendChild(button);
    });
    renderMedia(activeMediaIndex);

    const overview = document.getElementById('accelerator-game-detail-overview');
    const overviewHeading = document.createElement('div');
    overviewHeading.className = 'accelerator-game-detail-overview__heading';
    const overviewTitle = document.createElement('div');
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    const englishTitle = document.createElement('p');
    englishTitle.textContent = 'Monster Hunter Wilds';
    overviewTitle.appendChild(titleElement);
    overviewTitle.appendChild(englishTitle);
    const rating = document.createElement('div');
    rating.className = 'accelerator-game-detail-rating';
    rating.innerHTML = '<strong>8.6</strong><span>20.3 万人评价</span>';
    overviewHeading.appendChild(overviewTitle);
    overviewHeading.appendChild(rating);
    overview.appendChild(overviewHeading);

    const tagRow = document.createElement('div');
    tagRow.className = 'accelerator-game-detail-tags';
    ['动作', '冒险', '角色扮演', '多人合作', '开放世界'].forEach(function(text) {
      tagRow.appendChild(createLabel({ text: text, color: 'neutral', type: 'soft', size: 's', showDelete: false }));
    });
    overview.appendChild(tagRow);

    const metrics = document.createElement('div');
    metrics.className = 'accelerator-game-detail-metrics';
    [
      ['单人', '支持'],
      ['在线合作', '支持'],
      ['跨平台联机', '支持'],
      ['Steam 成就', '50 项']
    ].forEach(function(metric) {
      const card = document.createElement('div');
      card.className = 'accelerator-game-detail-metric';
      card.innerHTML = `<strong>${metric[1]}</strong><span>${metric[0]}</span>`;
      metrics.appendChild(card);
    });
    overview.appendChild(metrics);

    const tabs = document.getElementById('accelerator-game-detail-tabs');
    tabs.appendChild(createTabs({
      type: 'primary',
      tabs: [{ name: '游戏介绍' }, { name: '配置要求' }],
      defaultActive: 0,
      onChange: function(event) {
        document.getElementById(event.index === 0 ? 'accelerator-game-detail-description' : 'accelerator-game-detail-requirements')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }));

    const description = document.getElementById('accelerator-game-detail-description');
    [
      ['狂野凶猛的大自然，袭来', '时刻都在动态变化的原野。这是个关于生活在具有两面性的世界中的怪物与人们的故事。你会化为以狩猎强大怪物为生的猎人，使用狩猎获得的素材打造更强的武器防具，并逐渐解明这个世界与人们之间的关联。'],
      ['活着的世界', '原野具有两面性，经历残酷的荒芜期与异常气象之后，会迎来满溢富饶生机的丰饶期，同一个地点也会在不同时间展现截然不同的面貌。'],
      ['进化的狩猎', '丰富多彩的武器、装备与新动作让狩猎实现新的进化。集中模式可以瞄准攻击或防御目标，并针对怪物要害发动特殊衍生。']
    ].forEach(function(section, index) {
      const block = document.createElement('section');
      const heading = document.createElement('h3');
      heading.textContent = section[0];
      const copy = document.createElement('p');
      copy.textContent = section[1];
      block.appendChild(heading);
      block.appendChild(copy);
      if (index === 1) {
        const image = document.createElement('img');
        image.src = mediaItems[2].src;
        image.alt = '《怪物猎人：荒野》动态原野截图';
        block.appendChild(image);
      }
      description.appendChild(block);
    });

    const requirements = document.getElementById('accelerator-game-detail-requirements');
    const requirementsTitle = document.createElement('h2');
    requirementsTitle.textContent = '系统配置';
    requirements.appendChild(requirementsTitle);
    const requirementGrid = document.createElement('div');
    requirementGrid.className = 'accelerator-game-detail-requirement-grid';
    [
      { title: '最低配置', gpu: 'NVIDIA GeForce GTX 1660 6GB / AMD Radeon RX 5500 XT 8GB' },
      { title: '推荐配置', gpu: 'NVIDIA GeForce RTX 2060 Super 8GB / AMD Radeon RX 6600 8GB' }
    ].forEach(function(config) {
      const column = document.createElement('section');
      column.innerHTML = `<h3>${config.title}</h3><dl><dt>操作系统</dt><dd>Windows 10 64-bit</dd><dt>处理器</dt><dd>Intel Core i5-10400 / AMD Ryzen 5 3600</dd><dt>内存</dt><dd>16 GB RAM</dd><dt>显卡</dt><dd>${config.gpu}</dd><dt>DirectX</dt><dd>版本 12</dd><dt>存储空间</dt><dd>需要 75 GB 可用空间，必须使用 SSD</dd></dl>`;
      requirementGrid.appendChild(column);
    });
    requirements.appendChild(requirementGrid);

    const purchase = document.getElementById('accelerator-game-detail-purchase');
    const purchaseTitle = document.createElement('h2');
    purchaseTitle.textContent = title;
    purchase.appendChild(purchaseTitle);
    const productTypeTitle = document.createElement('h3');
    productTypeTitle.textContent = '选择商品';
    purchase.appendChild(productTypeTitle);
    const editionGroup = document.createElement('div');
    editionGroup.className = 'accelerator-game-detail-product-types';
    let selectedEdition = '标准版 CDK';
    ['标准版 CDK', '豪华版 CDK', '超豪华版 CDK'].forEach(function(text, index) {
      const editionButton = createButton({
        text: text,
        variant: 'system',
        level: index === 0 ? 'secondary' : 'tertiary',
        size: 'large',
        disabled: index === 2,
        className: 'accelerator-game-detail-edition',
        onClick: function() {
          selectedEdition = text;
          editionGroup.querySelectorAll('.accelerator-game-detail-edition').forEach(function(item) {
            item.setAttribute('aria-pressed', item === editionButton ? 'true' : 'false');
            item.classList.toggle('nn-btn-system-secondary', item === editionButton);
            item.classList.toggle('nn-btn-system-tertiary', item !== editionButton);
          });
        }
      });
      editionButton.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      editionGroup.appendChild(editionButton);
    });
    purchase.appendChild(editionGroup);
    purchase.appendChild(createMessage({ state: 'warning', text: '根据政策要求，本平台不对未成年人提供服务' }));

    const guarantees = document.createElement('div');
    guarantees.className = 'accelerator-game-detail-guarantees';
    ['官方正版', '闪电发货', '售后无忧'].forEach(function(text, index) {
      const item = document.createElement('span');
      item.innerHTML = `<i class="nnicon ${['nicon-a-check-linewancheng-xianxing', 'nicon-a-Lightning-Fillshandian-mianxing', 'nicon-a-safetyshield-lineNNanquandun-xianxing'][index]}" aria-hidden="true"></i>${text}`;
      guarantees.appendChild(item);
    });
    purchase.appendChild(guarantees);

    const quantity = document.createElement('div');
    quantity.className = 'accelerator-game-detail-quantity';
    const quantityLabel = document.createElement('span');
    quantityLabel.textContent = '数量';
    quantity.appendChild(quantityLabel);
    quantity.appendChild(createInputNumber({ value: 1, min: 1, max: 10, size: 'large' }));
    const sales = document.createElement('span');
    sales.textContent = '销量：1209760';
    quantity.appendChild(sales);
    purchase.appendChild(quantity);

    const price = document.createElement('div');
    price.className = 'accelerator-game-detail-price';
    price.innerHTML = `<strong>${currentPrice || '¥90'}</strong><del>${originalPrice || '¥168'}</del><span>券后价</span><em>${discount || '-30%'}</em>`;
    purchase.appendChild(price);

    const actions = document.createElement('div');
    actions.className = 'accelerator-game-detail-purchase-actions';
    actions.appendChild(createButton({
      text: '加入购物车',
      variant: 'system',
      level: 'secondary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-Shopping-Fillgouwu-mianxing"></i>',
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x9)'
    }));
    actions.appendChild(createButton({
      text: `${currentPrice || '¥90'} 购买`,
      variant: 'system',
      level: 'primary',
      size: 'large',
      onClick: function() {
        purchase.dataset.selectedEdition = selectedEdition;
      }
    }));
    purchase.appendChild(actions);

    const recommendationData = [
      ['湮灭之潮', 'game-tides.png', '动作冒险/角色扮演/单人/剧情'],
      ['血源：诅咒', 'game-bloodborne.png', '动作角色扮演/恐怖/单人/探索'],
      ['影之刃：零', 'game-phantom-blade.png', '动作/角色扮演/武侠/单人'],
      ['生化危机：维罗妮卡重制版', 'game-resident-evil.png', '生存恐怖/动作冒险/单人'],
      ['最终幻想：共鸣', 'game-final-fantasy.png', '角色扮演/动作/奇幻/单人'],
      ['鬼武者：剑之道', 'game-onimusha.png', '动作冒险/武士/单人/剧情']
    ];
    const recommendationList = document.getElementById('accelerator-game-detail-recommendation-list');
    recommendationData.forEach(function(game) {
      recommendationList.appendChild(createGameListCard({
        variant: 'summary',
        title: game[0],
        imageSrc: `${storeRoot}${game[1]}`,
        summary: game[2],
        discount: '-20%',
        price: '¥79.00'
      }));
    });

      if (typeof setActiveNav === 'function') setActiveNav('accelerator-p-nav-game-accelerator');
  }

  document.addEventListener('DOMContentLoaded', initAcceleratorGameDetailPage);
})();
