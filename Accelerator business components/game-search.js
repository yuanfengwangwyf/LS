const AcceleratorGameSearchStyles = `
  .accelerator-game-search {
    position: absolute;
    inset: var(--space0);
    z-index: 120;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-shadow: var(--shadow-lg);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    opacity: 0;
    transform: translateY(var(--space8));
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  html.is-accelerator-game-search-open {
    overflow: hidden;
  }

  body.is-accelerator-game-search-open {
    position: fixed;
    top: var(--accelerator-game-search-page-top);
    left: var(--accelerator-game-search-page-left);
    width: var(--accelerator-game-search-page-width);
    overflow: hidden;
  }

  .accelerator-game-search.is-open {
    opacity: 1;
    transform: translateY(var(--space0));
  }

  .accelerator-game-search .accelerator-game-search__search {
    position: absolute;
    top: var(--space24);
    left: 50%;
    z-index: 2;
    width: 500px;
    height: 50px;
    transform: translateX(-50%);
  }

  .accelerator-game-search .accelerator-game-search__search {
    padding-right: 44px;
    padding-left: 46px;
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-input,
  .accelerator-game-search .accelerator-game-search__search .nn-header__search-placeholder {
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-placeholder {
    left: 46px;
    right: 44px;
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-placeholder-item {
    height: 24px;
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-icon {
    left: 10px;
    width: var(--icon-size-x14);
    height: var(--icon-size-x14);
    margin-top: -14px;
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-icon img {
    width: var(--icon-size-x14);
    height: var(--icon-size-x14);
  }

  .accelerator-game-search .accelerator-game-search__search .nn-header__search-submit {
    right: 10px;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    font-size: var(--icon-size-x12);
  }

  .accelerator-game-search__close.nn-btn {
    position: absolute;
    top: var(--space20);
    right: var(--space24);
    z-index: 2;
  }

  .accelerator-game-search__scroll {
    position: absolute;
    top: calc(var(--space24) + 40px + var(--space24));
    right: var(--space0);
    bottom: var(--space0);
    left: var(--space0);
    width: 100%;
    height: auto;
    padding: var(--space0) var(--space40) var(--space40);
    overflow-x: hidden;
    overscroll-behavior: contain;
    overflow-y: auto;
    overscroll-behavior: contain;
    box-sizing: border-box;
    scrollbar-width: none;
  }

  .accelerator-game-search__scroll::-webkit-scrollbar {
    display: none;
  }

  .accelerator-game-search__history {
    display: flex;
    align-items: center;
    gap: var(--space12);
    min-height: 42px;
    padding-top: var(--space8);
    margin-bottom: var(--space24);
    box-sizing: border-box;
  }

  .accelerator-game-search__history[hidden] {
    display: none;
  }

  .accelerator-game-search__history-title {
    flex: 0 0 auto;
    color: var(--gray-3);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-body);
  }

  .accelerator-game-search__history-list {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
    overflow: visible;
  }

  .accelerator-game-search__history-list .nn-label {
    flex: 0 0 auto;
  }

  .accelerator-game-search__history-list .nn-label__delete {
    z-index: 4;
  }

  .accelerator-game-search__clear.nn-btn {
    flex: 0 0 auto;
    margin-left: var(--space16);
  }

  .accelerator-game-search__banner-group {
    width: 100%;
    margin-bottom: var(--space24);
  }

  .accelerator-game-search__tabs {
    margin-bottom: var(--space24);
  }

  .accelerator-game-search__tabs .nn-tabs-primary {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .accelerator-game-search__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space16);
  }

  .accelerator-game-search__card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    padding: var(--space24) var(--space20) var(--space16);
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    box-sizing: border-box;
    transition: background-color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
  }

  .accelerator-game-search__card:hover,
  .accelerator-game-search__card:focus,
  .accelerator-game-search__card:focus-within {
    border-color: var(--gray-8);
    background: var(--gray-9);
    transform: translateY(calc(var(--space2) * -1));
  }

  .accelerator-game-search__cover-wrap {
    position: relative;
    flex: 0 0 auto;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
  }

  .accelerator-game-search__cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .accelerator-game-search__platforms {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 24px;
    padding: var(--space0) var(--space6);
    border-radius: var(--border-radius-2r) var(--border-radius-2r) var(--border-radius-2r) var(--space0);
    background: var(--Black-A60);
    color: var(--White-A90);
  }

  .accelerator-game-search__platforms .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .accelerator-game-search__tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space20);
    height: 20px;
    margin-top: var(--space12);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-game-search__tag--free { color: var(--Link); }
  .accelerator-game-search__tag--hot { color: var(--Red); }
  .accelerator-game-search__tag--cloud { color: var(--Cyan); }

  .accelerator-game-search__game-title {
    width: 100%;
    margin: var(--space12) var(--space0) var(--space0);
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-game-search__game-platform {
    width: 100%;
    margin-top: var(--space4);
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-game-search__accelerate.nn-btn {
    position: absolute;
    right: var(--space16);
    bottom: var(--space16);
    left: var(--space16);
    width: calc(100% - var(--space32));
    opacity: 0;
    transform: translateY(var(--space8));
    pointer-events: none;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .accelerator-game-search__card:hover .accelerator-game-search__accelerate,
  .accelerator-game-search__card:focus .accelerator-game-search__accelerate,
  .accelerator-game-search__card:focus-within .accelerator-game-search__accelerate {
    opacity: 1;
    transform: translateY(var(--space0));
    pointer-events: auto;
  }

  .accelerator-game-search__card:hover .accelerator-game-search__game-title,
  .accelerator-game-search__card:hover .accelerator-game-search__game-platform,
  .accelerator-game-search__card:focus .accelerator-game-search__game-title,
  .accelerator-game-search__card:focus .accelerator-game-search__game-platform,
  .accelerator-game-search__card:focus-within .accelerator-game-search__game-title,
  .accelerator-game-search__card:focus-within .accelerator-game-search__game-platform {
    opacity: 0;
  }

  .accelerator-game-search__empty {
    display: flex;
    grid-column: 1 / -1;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }
`;

function injectAcceleratorGameSearchStyles() {
  if (document.getElementById('accelerator-game-search-styles')) return;
  const style = document.createElement('style');
  style.id = 'accelerator-game-search-styles';
  style.textContent = AcceleratorGameSearchStyles;
  document.head.appendChild(style);
}

function createAcceleratorGameSearch(options = {}) {
  injectAcceleratorGameSearchStyles();

  const requiredFactories = ['createInput', 'createButton', 'createLabel', 'createTabs', 'createEmptyPopup', 'createAcceleratorImageCarousel'];
  const missingFactory = requiredFactories.find(function(name) {
    return typeof window[name] !== 'function';
  });
  if (missingFactory) {
    throw new Error('Accelerator game search requires ' + missingFactory);
  }

  const mountTarget = options.mountTarget || document.body;
  const lockPageScroll = mountTarget === document.body;
  const previousFocus = document.activeElement;
  const historyItems = Array.isArray(options.historyItems) && options.historyItems.length
    ? options.historyItems.slice()
    : ['英雄联盟', 'PUBG', '无畏契约', '36', '带玩', '电竞开黑', 'LOL', '魔兽', '英', 'apex'];
  const tabs = [
    { name: '推荐', category: 'recommended' },
    { name: '全部游戏 (3323)', category: 'all' },
    { name: '平台分类 (5236)', category: 'platform' },
    { name: '国服 (442)', category: 'china' },
    { name: '主机游戏 (2507)', category: 'console' },
    { name: '本地游戏 (18)', category: 'local' },
    { name: '平台下载 (11)', category: 'download' },
    { name: '雷神电脑', category: 'thor' }
  ];
  const games = [
    { title: 'PUBG', platform: 'Steam', imageSrc: '../image/Game%20logo/game1.webp', categories: ['recommended', 'all', 'platform'], icons: ['nicon-windows', 'nicon-a-STEAM-fillSTEAM-mianxing'] },
    { title: '魔兽世界', platform: 'PC端全平台', imageSrc: '../image/Game%20logo/game3.webp', categories: ['recommended', 'all', 'china'], icons: ['nicon-windows'] },
    { title: 'APEX英雄', platform: 'Steam/Epic', imageSrc: '../image/Game%20logo/game4.webp', categories: ['recommended', 'all', 'platform'], icons: ['nicon-windows', 'nicon-a-STEAM-fillSTEAM-mianxing'] },
    { title: '炉石传说', platform: 'PC端全平台', imageSrc: '../image/Game%20logo/game5.webp', categories: ['recommended', 'all', 'china'], icons: ['nicon-windows'] },
    { title: '无畏契约', platform: 'PC端全平台', imageSrc: '../image/Game%20logo/game10.webp', categories: ['recommended', 'all', 'china'], icons: ['nicon-windows'] },
    { title: '全境封锁2', platform: 'Steam/Epic', imageSrc: '../image/Game%20logo/game16.webp', categories: ['recommended', 'all', 'console'], icons: ['nicon-windows', 'nicon-a-STEAM-fillSTEAM-mianxing'] },
    { title: '七日世界', platform: 'PC端全平台', imageSrc: '../image/Game%20logo/game18.webp', categories: ['recommended', 'all', 'local'], icons: ['nicon-windows'] },
    { title: '漫威争锋', platform: 'Steam/Epic', imageSrc: '../image/Game%20logo/game20.webp', categories: ['recommended', 'all', 'console'], icons: ['nicon-windows', 'nicon-a-STEAM-fillSTEAM-mianxing'] }
  ];
  let activeCategory = 'recommended';
  let query = '';
  let isClosing = false;
  const pageScrollX = window.scrollX;
  const pageScrollY = window.scrollY;
  const pageWidth = document.body.getBoundingClientRect().width;

  const root = document.createElement('section');
  root.className = 'accelerator-game-search';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', '搜索游戏');

  const search = window.createHeaderSearch({
    placeholder: '请输入搜索内容',
    showSubmitIcon: true,
    className: 'accelerator-game-search__search',
    onInput: function(event) {
      query = event.value.trim().toLowerCase();
      renderGames();
    },
    onSearch: function(event) {
      query = event.value.trim().toLowerCase();
      renderGames();
    }
  });
  const searchInput = search.querySelector('.nn-header__search-input');
  searchInput.setAttribute('aria-label', '搜索游戏');
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      query = searchInput.value.trim().toLowerCase();
      renderGames();
    }
  });

  const closeButton = window.createButton({
    text: '',
    variant: 'system',
    level: 'tertiary',
    size: 'default',
    appearance: 'outline-icon',
    icon: '<i class="nnicon nicon-a-close-lineguanbi-xianxing" aria-hidden="true"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x12)',
    className: 'accelerator-game-search__close',
    onClick: close
  });
  closeButton.setAttribute('aria-label', '关闭游戏搜索');

  const scroll = document.createElement('div');
  scroll.className = 'accelerator-game-search__scroll';
  scroll.setAttribute('tabindex', '0');
  scroll.setAttribute('aria-label', '游戏搜索内容');

  const history = document.createElement('div');
  history.className = 'accelerator-game-search__history';
  const historyTitle = document.createElement('span');
  historyTitle.className = 'accelerator-game-search__history-title';
  historyTitle.textContent = '历史记录';
  const historyList = document.createElement('div');
  historyList.className = 'accelerator-game-search__history-list';

  const clearHistory = window.createButton({
    text: '删除记录',
    variant: 'system',
    level: 'tertiary',
    size: 'default',
    icon: '<i class="nnicon nicon-a-delete-lineshanchulajitong-xianxing" aria-hidden="true"></i>',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)',
    className: 'accelerator-game-search__clear',
    onClick: function() {
      historyItems.splice(0, historyItems.length);
      renderHistory();
    }
  });

  function selectHistory(text) {
    searchInput.value = text;
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    searchInput.focus();
  }

  function renderHistory() {
    const hideHistory = historyItems.length === 0;
    const wasVisible = history.isConnected && !history.hidden;
    const followingSections = wasVisible && hideHistory
      ? Array.from(scroll.children).filter(function(section) { return section !== history; })
      : [];
    const positions = followingSections.map(function(section) {
      return { section: section, top: section.offsetTop };
    });
    const restoreSearchFocus = hideHistory && history.contains(document.activeElement);
    historyList.replaceChildren();
    historyItems.forEach(function(text) {
      const label = window.createLabel({
        text,
        type: 'history',
        showDelete: true,
        onDelete: function() {
          const index = historyItems.indexOf(text);
          if (index !== -1) historyItems.splice(index, 1);
          renderHistory();
        }
      });
      label.setAttribute('role', 'button');
      label.setAttribute('tabindex', '0');
      label.setAttribute('aria-label', '搜索历史：' + text);
      label.addEventListener('click', function(event) {
        if (event.target.closest('.nn-label__delete')) return;
        selectHistory(text);
      });
      label.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectHistory(text);
        }
      });
      historyList.appendChild(label);
    });
    historyTitle.hidden = hideHistory;
    clearHistory.hidden = hideHistory;
    history.hidden = hideHistory;
    if (restoreSearchFocus) searchInput.focus({ preventScroll: true });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Move all following sections together from their previous layout positions.
    const moves = positions.map(function(position) {
      return { section: position.section, y: position.top - position.section.offsetTop };
    });
    moves.forEach(function(move) {
      if (!move.y) return;
      move.section.animate([
        { transform: `translateY(${move.y}px)` },
        { transform: 'translateY(0)' }
      ], { duration: 360, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
    });
  }

  history.appendChild(historyTitle);
  history.appendChild(historyList);
  history.appendChild(clearHistory);

  const bannerGroup = document.createElement('div');
  bannerGroup.className = 'accelerator-game-search__banner-group';
  const banner = window.createAcceleratorImageCarousel({
    variant: 'search',
    autoplay: true,
    autoplayDuration: 5000,
    ariaLabel: '搜索广告轮播'
  });
  bannerGroup.appendChild(banner);

  const tabsHost = document.createElement('div');
  tabsHost.className = 'accelerator-game-search__tabs';
  tabsHost.appendChild(window.createTabs({
    type: 'primary',
    tabs: tabs.map(function(tab) { return { name: tab.name }; }),
    defaultActive: 0,
    onChange: function(event) {
      activeCategory = tabs[event.index].category;
      renderGames();
    }
  }));

  const grid = document.createElement('div');
  grid.className = 'accelerator-game-search__grid';

  function createGameCard(game) {
    const card = document.createElement('article');
    card.className = 'accelerator-game-search__card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', game.title + '，' + game.platform);
    card.addEventListener('click', function(event) {
      if (event.target.closest('.accelerator-game-search__accelerate')) return;
      if (typeof options.onGameClick === 'function') options.onGameClick(game, event, root);
    });

    const coverWrap = document.createElement('div');
    coverWrap.className = 'accelerator-game-search__cover-wrap';
    const cover = document.createElement('img');
    cover.className = 'accelerator-game-search__cover';
    cover.src = game.imageSrc;
    cover.alt = game.title;
    const platforms = document.createElement('span');
    platforms.className = 'accelerator-game-search__platforms';
    platforms.setAttribute('aria-hidden', 'true');
    game.icons.forEach(function(iconClass) {
      const icon = document.createElement('i');
      icon.className = 'nnicon ' + iconClass;
      platforms.appendChild(icon);
    });
    coverWrap.appendChild(cover);
    coverWrap.appendChild(platforms);

    const tagList = document.createElement('div');
    tagList.className = 'accelerator-game-search__tags';
    [['免费', 'free'], ['热门', 'hot'], ['云游戏', 'cloud']].forEach(function(tag) {
      const tagItem = document.createElement('span');
      tagItem.className = 'accelerator-game-search__tag accelerator-game-search__tag--' + tag[1];
      tagItem.textContent = tag[0];
      tagList.appendChild(tagItem);
    });

    const title = document.createElement('h3');
    title.className = 'accelerator-game-search__game-title';
    title.textContent = game.title;
    const platform = document.createElement('p');
    platform.className = 'accelerator-game-search__game-platform';
    platform.textContent = game.platform;
    const accelerate = window.createButton({
      text: '开始加速',
      variant: 'system',
      level: 'primary',
      size: 'large',
      className: 'accelerator-game-search__accelerate',
      onClick: function(event) {
        if (typeof options.onAccelerate === 'function') options.onAccelerate(game, event, root);
      }
    });
    accelerate.setAttribute('aria-label', '开始加速' + game.title);

    card.appendChild(coverWrap);
    card.appendChild(tagList);
    card.appendChild(title);
    card.appendChild(platform);
    card.appendChild(accelerate);
    return card;
  }

  function renderGames() {
    grid.replaceChildren();
    const visibleGames = games.filter(function(game) {
      const categoryMatches = activeCategory === 'all' || game.categories.includes(activeCategory);
      const queryMatches = !query || (game.title + ' ' + game.platform).toLowerCase().includes(query);
      return categoryMatches && queryMatches;
    });
    if (!visibleGames.length) {
      const empty = document.createElement('div');
      empty.className = 'accelerator-game-search__empty';
      empty.setAttribute('role', 'status');
      empty.appendChild(window.createEmptyPopup({
        type: 'search',
        title: '暂无匹配的游戏',
        showDescription: false,
        showActions: false
      }));
      grid.appendChild(empty);
      return;
    }
    visibleGames.forEach(function(game) {
      grid.appendChild(createGameCard(game));
    });
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') close();
    if (event.key !== 'Tab') return;
    const focusable = root.querySelectorAll('[tabindex="0"], button:not([disabled]), input:not([disabled])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function close() {
    if (isClosing) return;
    isClosing = true;
    banner.destroy();
    root.classList.remove('is-open');
    if (lockPageScroll) {
      document.documentElement.classList.remove('is-accelerator-game-search-open');
      document.body.classList.remove('is-accelerator-game-search-open');
      document.body.style.removeProperty('--accelerator-game-search-page-top');
      document.body.style.removeProperty('--accelerator-game-search-page-left');
      document.body.style.removeProperty('--accelerator-game-search-page-width');
      window.scrollTo(pageScrollX, pageScrollY);
    }
    document.removeEventListener('keydown', handleKeydown);
    window.setTimeout(function() {
      root.remove();
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
      if (typeof options.onClose === 'function') options.onClose(root);
    }, 180);
  }

  root.close = close;
  root.focusSearch = function() { searchInput.focus(); };
  root.searchInput = searchInput;
  root.gameGrid = grid;

  scroll.appendChild(history);
  scroll.appendChild(bannerGroup);
  scroll.appendChild(tabsHost);
  scroll.appendChild(grid);
  root.appendChild(search);
  root.appendChild(closeButton);
  root.appendChild(scroll);
  if (lockPageScroll) {
    document.body.style.setProperty('--accelerator-game-search-page-top', -pageScrollY + 'px');
    document.body.style.setProperty('--accelerator-game-search-page-left', -pageScrollX + 'px');
    document.body.style.setProperty('--accelerator-game-search-page-width', pageWidth + 'px');
    document.documentElement.classList.add('is-accelerator-game-search-open');
    document.body.classList.add('is-accelerator-game-search-open');
  }
  mountTarget.appendChild(root);

  renderHistory();
  renderGames();
  document.addEventListener('keydown', handleKeydown);
  if (typeof window.createScrollbar === 'function') {
    root.scrollbar = window.createScrollbar({
      target: scroll,
      container: root,
      hoverTarget: root,
      variant: 'page',
      right: 4,
      top: 88,
      bottom: 8
    });
  }
  window.requestAnimationFrame(function() {
    root.classList.add('is-open');
    searchInput.focus();
    window.scrollTo(pageScrollX, pageScrollY);
  });

  return root;
}

if (typeof window !== 'undefined') {
  window.injectAcceleratorGameSearchStyles = injectAcceleratorGameSearchStyles;
  window.createAcceleratorGameSearch = createAcceleratorGameSearch;
}

