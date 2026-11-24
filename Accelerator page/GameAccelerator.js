(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-game-accelerator');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const home = 'Home.html';
  const toolsPage = 'Tools.html';
  const detailPage = 'GameAccelerator.html';
  const games = [
    { id: 'pubg', text: '绝地求生', english: 'PUBG: BATTLEGROUNDS', server: '澳洲服', gameLogoSrc: '../image/Game logo/game1.webp', serverIconSrc: '../image/National flag/澳服.svg', latency: '22ms' },
    { id: 'fortnite', text: '堡垒之夜', english: 'FORTNITE', server: '中国香港服', gameLogoSrc: '../image/Game logo/game2.webp', serverIconSrc: '../image/National flag/港服.svg' },
    { id: 'apex', text: 'APEX英雄', english: 'APEX LEGENDS', server: '美服', gameLogoSrc: '../image/Game logo/game4.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { id: 'dbd', text: '黎明杀机', english: 'DEAD BY DAYLIGHT', server: '韩服', gameLogoSrc: '../image/Game logo/game13.webp', serverIconSrc: '../image/National flag/韩服.svg' },
    { id: 'delta-force', text: '三角洲行动', english: 'DELTA FORCE', server: '马来西亚服', gameLogoSrc: '../image/Game logo/game9.webp', serverIconSrc: '../image/National flag/马来西亚服.svg' },
    { id: 'wow', text: '魔兽世界', english: 'WORLD OF WARCRAFT', server: '澳洲服', gameLogoSrc: '../image/Game logo/game3.webp', serverIconSrc: '../image/National flag/澳服.svg' },
    { id: 'hearthstone', text: '炉石传说', english: 'HEARTHSTONE', gameLogoSrc: '../image/Game logo/game5.webp', server: '新加坡服', serverIconSrc: '../image/National flag/新加坡服.svg' },
    { id: 'zenless', text: '绝区零', english: 'ZENLESS ZONE ZERO', server: '美服', gameLogoSrc: '../image/Game logo/game6.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { id: 'overwatch', text: '守望先锋', english: 'OVERWATCH 2', server: '亚服', gameLogoSrc: '../image/Game logo/game14.webp', serverIconSrc: '../image/National flag/亚服.svg' },
    { id: 'valorant', text: '无畏契约', english: 'VALORANT', server: '中国服', gameLogoSrc: '../image/Game logo/game10.webp', serverIconSrc: '../image/National flag/中国服.svg' },
    { id: 'palia', text: 'Palia', english: 'PALIA', server: '美服', gameLogoSrc: '../image/Game logo/game17.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { id: 'once-human', text: '七日世界', english: 'ONCE HUMAN', server: '东南亚服', gameLogoSrc: '../image/Game logo/game18.webp', serverIconSrc: '../image/National flag/东南亚服.svg' },
    { id: 'sea-of-thieves', text: '盗贼之海', english: 'SEA OF THIEVES', server: '欧服', gameLogoSrc: '../image/Game logo/game19.webp', serverIconSrc: '../image/National flag/欧服.svg' },
    { id: 'marvel-rivals', text: '漫威争锋', english: 'MARVEL RIVALS', server: '亚服', gameLogoSrc: '../image/Game logo/game20.webp', serverIconSrc: '../image/National flag/亚服.svg' }
  ];
  const requestedGame = new URLSearchParams(window.location.search).get('game') || 'pubg';
  const selectedGame = games.find(function(game) { return game.id === requestedGame || game.text === requestedGame; }) || games[0];
  const hallCountHost = document.getElementById('game-accel-hall-count');
  if (hallCountHost && typeof window.createBadge === 'function') {
    const hallCountBadge = window.createBadge({ text: '8', variant: 'red' });
    hallCountBadge.classList.add('accelerator-game-accel-hall-count');
    hallCountBadge.setAttribute('aria-label', '8 条新消息');
    hallCountHost.replaceWith(hallCountBadge);
  }
  const hallAvatarHost = document.getElementById('game-accel-hall-avatar');
  if (hallAvatarHost && typeof window.createAvatar === 'function') {
    hallAvatarHost.appendChild(window.createAvatar({ src: '../image/Avatar/头像662.png', size: 16 }));
  }
  const teamExpand = document.getElementById('game-accel-team-expand');
  const teamExpandTrigger = document.getElementById('game-accel-team-expand-trigger');
  const teamRooms = document.getElementById('game-accel-team-rooms');
  const joinActionHost = document.getElementById('game-accel-join-action');
  if (joinActionHost && typeof window.createButton === 'function') {
    const joinButton = window.createButton({
      text: '组队',
      variant: 'system',
      level: 'primary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-Multiplayer2-Linezudui2-xianxing" aria-hidden="true"></i>',
      iconSize: 'var(--icon-size-x8)',
      iconGap: 'var(--space4)'
    });
    joinButton.classList.add('accelerator-game-accel-join-button');
    joinActionHost.appendChild(joinButton);
  }
  const teamExpandIcon = teamExpandTrigger && teamExpandTrigger.querySelector('.nnicon');
  if (teamExpand && teamExpandTrigger && teamRooms && teamExpandIcon) {
    let teamRoomsHeightTimer = null;
    function setTeamRoomsExpanded(expanded) {
      teamExpandTrigger.setAttribute('aria-expanded', String(expanded));
      teamExpandTrigger.setAttribute('aria-label', expanded ? '收起组队房间' : '展开组队房间');
      teamExpandIcon.classList.toggle('nicon-a-Arrowflattenedbelow-Linejiantoubianxia-xianxing', !expanded);
      teamExpandIcon.classList.toggle('nicon-a-Arrowflat-Linejiantoubianshang-xianxing', expanded);
      window.clearTimeout(teamRoomsHeightTimer);
      if (expanded) {
        teamRooms.hidden = false;
        teamRooms.style.height = '0px';
        void teamRooms.offsetHeight;
        teamRooms.style.height = teamRooms.scrollHeight + 'px';
        teamExpand.classList.add('is-open');
        teamRoomsHeightTimer = window.setTimeout(function() {
          if (teamExpand.classList.contains('is-open')) teamRooms.style.height = 'auto';
        }, 260);
        return;
      }
      teamExpand.classList.remove('is-open');
      teamRooms.style.height = teamRooms.getBoundingClientRect().height + 'px';
      void teamRooms.offsetHeight;
      teamRooms.style.height = '0px';
      teamRoomsHeightTimer = window.setTimeout(function() {
        if (teamExpand.classList.contains('is-open')) return;
        teamRooms.hidden = true;
        teamRooms.style.height = '';
      }, 260);
    }
    teamExpand.addEventListener('pointerenter', function() { setTeamRoomsExpanded(true); });
    teamExpand.addEventListener('pointerleave', function() { setTeamRoomsExpanded(false); });
    teamExpand.addEventListener('focusin', function() { setTeamRoomsExpanded(true); });
    teamExpand.addEventListener('focusout', function(event) {
      if (!teamExpand.contains(event.relatedTarget)) setTeamRoomsExpanded(false);
    });
    teamExpandTrigger.addEventListener('click', function(event) {
      if (event.detail > 0) {
        setTeamRoomsExpanded(true);
        return;
      }
      setTeamRoomsExpanded(teamExpandTrigger.getAttribute('aria-expanded') !== 'true');
    });
  }
  const header = document.getElementById('game-accel-header');
  if (header && typeof window.createAcceleratorHeader === 'function') {
    let acceleratorHeader = null;
    function openGameSearch(value) {
      if (!acceleratorHeader || !window.createAcceleratorGameSearch) return;
      acceleratorHeader.suppressSearchSuggestions();
      const frame = header.closest('.accelerator-game-accel-frame');
      if (!frame || frame.querySelector('.accelerator-game-search')) return;
      const search = window.createAcceleratorGameSearch({ mountTarget: frame, onClose: function() { acceleratorHeader.suppressSearchSuggestions(); } });
      if (value) {
        search.searchInput.value = value;
        search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
    acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true,
      onSearchSuggestionSelect: openGameSearch
    });
    header.appendChild(acceleratorHeader);
    const headerInput = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (headerInput) {
      headerInput.readOnly = true;
      headerInput.setAttribute('aria-haspopup', 'dialog');
    }
    acceleratorHeader.search?.addEventListener('click', function(event) {
      event.preventDefault();
      openGameSearch();
    });
  }

  const sidebarHost = document.getElementById('game-accel-sidebar');
  let gameMenu = null;
  if (sidebarHost && typeof window.createAcceleratorSideNavigationPanel === 'function') {
    gameMenu = window.createAcceleratorSideNavigationPanel({
      sortable: true,
      functionItems: [
        { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = home; } },
        { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = toolsPage; } }
      ],
      gameItems: games.map(function(game) {
        return Object.assign({}, game, {
          onClick: function() { window.location.href = detailPage + '?game=' + encodeURIComponent(game.id); }
        });
      })
    });
    sidebarHost.appendChild(gameMenu);
    const selectedItem = gameMenu.gameItems.find(function(item) { return item.sideNavigationData.id === selectedGame.id; }) || gameMenu.gameItems[0];
    gameMenu.setActiveItem(selectedItem);
    gameMenu.selectedGameItem = selectedItem;
    selectedItem.classList.add('accelerator-game-accel-selected-game');
    const selectedGameMeta = selectedItem.querySelector('.accelerator-side-nav-game-meta');
    if (selectedGameMeta) {
      const serverGroup = selectedGameMeta.querySelector('.accelerator-side-nav-game-server');
      const serverHoverZone = document.createElement('span');
      serverHoverZone.className = 'accelerator-game-accel-sidebar-server-hover-zone';
      const accelerationDuration = document.createElement('span');
      accelerationDuration.className = 'accelerator-game-accel-sidebar-duration';
      accelerationDuration.textContent = '00:00:42';
      if (serverGroup) {
        selectedGameMeta.insertBefore(serverHoverZone, serverGroup);
        serverHoverZone.append(serverGroup, accelerationDuration);
      }
    }
  }

  const gameLogo = document.querySelector('.accelerator-game-accel-gamehead__logo');
  const gameTitle = document.querySelector('[data-game-title]');
  if (gameLogo) {
    gameLogo.src = selectedGame.gameLogoSrc;
    gameLogo.alt = selectedGame.text;
  }
  if (gameTitle) {
    gameTitle.textContent = selectedGame.text;
    gameTitle.setAttribute('aria-label', selectedGame.text);
  }
  const gameEnglish = document.querySelector('[data-game-english]');
  if (gameEnglish) gameEnglish.textContent = selectedGame.english;

  const actions = document.getElementById('game-accel-actions');
  const note = document.getElementById('game-accel-note');
  const announcementCounter = note && note.querySelector('.accelerator-game-accel-note__counter');
  const announcementTrack = note && note.querySelector('.accelerator-game-accel-note__track');
  const values = {
    latency: document.querySelector('[data-metric="latency"]'),
    loss: document.querySelector('[data-metric="loss"]'),
    latencyRepeat: document.querySelector('[data-metric="latency-repeat"]'),
    traffic: document.querySelector('[data-metric="traffic"]')
  };
  const network = document.querySelector('.accelerator-game-accel-network');
  const metricIcons = {
    latency: Array.from(document.querySelectorAll('[data-metric-icon="latency"]')),
    traffic: Array.from(document.querySelectorAll('[data-metric-icon="traffic"]'))
  };
  const promoMount = document.getElementById('game-accel-promo');
  let state = 'idle';
  let progress = 0;
  let timer = 0;
  let accelerateButton;
  let stopButton;
  let announcementIndex = 0;

  if (promoMount && typeof window.createAcceleratorImageCarousel === 'function') {
    const promoCarousel = window.createAcceleratorImageCarousel({
      variant: 'home',
      className: 'accelerator-game-accel-promo-carousel',
      ariaLabel: '游戏活动横幅',
      items: [
        { title: '和平精英模拟器', imageSrc: '../image/Community/banner-a1.png' },
        { title: '雷神暑假嘉年华', imageSrc: '../image/Community/banner-a2.png' },
        { title: '雷神8周年', imageSrc: '../image/Community/banner-a3.png' }
      ]
    });
    promoMount.replaceWith(promoCarousel);
  }

  function createLaunchGroup(options) {
    const group = document.createElement('div');
    group.className = 'accelerator-game-accel-launch-group';
    group.classList.toggle('is-accelerated', state === 'accelerated');
    stopButton = window.createButton({
      text: '启动游戏',
      variant: 'system',
      level: options.level,
      size: 'large',
      disabled: Boolean(options.disabled),
      onClick: function() { if (!options.disabled) note.setAttribute('aria-label', '游戏启动演示'); }
    });
    stopButton.classList.add('accelerator-game-accel-launch-game');
    stopButton.classList.add('accelerator-game-accel-action-button');
    const settingsButton = window.createButton({
      text: '',
      variant: 'system',
      level: options.level,
      size: 'large',
      icon: '<span class="accelerator-game-accel-settings-icon" aria-hidden="true"></span>',
      iconPosition: 'only',
      disabled: Boolean(options.disabled)
    });
    settingsButton.classList.add('accelerator-game-accel-settings-button');
    settingsButton.setAttribute('aria-label', '设置');
    settingsButton.title = '设置';
    group.append(stopButton, settingsButton);
    return group;
  }

  if (announcementTrack && announcementCounter) {
    const announcementItems = Array.from(announcementTrack.querySelectorAll('.accelerator-game-accel-note__item'));
    window.setInterval(function() {
      if (announcementItems.length < 2) return;
      announcementIndex = (announcementIndex + 1) % announcementItems.length;
      announcementCounter.textContent = (announcementIndex + 1) + '/' + announcementItems.length;
      const itemHeight = announcementItems[0].getBoundingClientRect().height;
      announcementTrack.style.transform = 'translateY(-' + (announcementIndex * itemHeight) + 'px)';
    }, 5000);
  }

  function updateSidebarStatus(text) {
    const item = gameMenu && gameMenu.selectedGameItem;
    if (!item) return;
    if (text === '加速中22ms') item.setAccelerating(true);
    else if (text === '加速中…') item.startAcceleration();
    else item.stopAcceleration();
  }

  function renderMetricValue(element, value, unit) {
    const numberBox = document.createElement('span');
    numberBox.className = 'accelerator-game-accel-metric__number-box';
    const numberText = document.createElement('span');
    numberText.className = 'accelerator-game-accel-metric__number-text';
    numberText.textContent = value;
    numberBox.appendChild(numberText);

    const unitBox = document.createElement('span');
    unitBox.className = 'accelerator-game-accel-metric__unit-box';
    const unitText = document.createElement('em');
    unitText.className = 'accelerator-game-accel-metric__unit-text';
    unitText.textContent = unit;
    unitBox.appendChild(unitText);
    element.replaceChildren(numberBox, unitBox);
  }

  function renderMetrics(latency, loss, traffic) {
    renderMetricValue(values.latency, latency, 'ms');
    renderMetricValue(values.loss, loss, '%');
    renderMetricValue(values.latencyRepeat, latency, 'ms');
    renderMetricValue(values.traffic, traffic, 'kb');
  }

  function renderMetricIcons(isAccelerated) {
    const extension = isAccelerated ? 'webp' : 'png';
    metricIcons.latency.forEach(function(icon) {
      icon.src = '../image/Accelerate%20business%20icon/jiantou.' + extension;
    });
    metricIcons.traffic.forEach(function(icon) {
      icon.src = '../image/Accelerate%20business%20icon/xing.' + extension;
    });
  }

  function setStatus(next) {
    state = next;
    network.classList.toggle('is-accelerating', next !== 'idle');
    network.classList.toggle('is-accelerated', next === 'accelerated');
    renderMetricIcons(next === 'accelerated');
    actions.replaceChildren();
    if (next === 'idle') {
      accelerateButton = window.createButton({ text: '开始加速', size: 'large', onClick: beginAcceleration });
      accelerateButton.classList.add('game-accel-primary');
      accelerateButton.classList.add('accelerator-game-accel-action-button');
      actions.append(accelerateButton, createLaunchGroup({ level: 'secondary' }));
      renderMetrics('00', '00', '00');
      updateSidebarStatus('');
      return;
    }

    if (next === 'loading') {
      accelerateButton = window.createButton({ text: '连接加速节点 0%', size: 'large', progress: 0, onClick: function() {} });
      accelerateButton.classList.add('game-accel-primary');
      accelerateButton.classList.add('accelerator-game-accel-action-button');
      actions.append(accelerateButton, createLaunchGroup({ level: 'secondary', disabled: true }));
      renderMetrics('00', '00', '00');
      updateSidebarStatus('加速中…');
      return;
    }

    accelerateButton = window.createButton({ text: '停止加速', variant: 'warning', level: 'primary', size: 'large', onClick: function() { setStatus('idle'); } });
    accelerateButton.classList.add('accelerator-game-accel-stop');
    accelerateButton.classList.add('accelerator-game-accel-action-button');
    actions.append(accelerateButton, createLaunchGroup({ level: 'primary' }));
    renderMetrics('32', '0.2', '890');
    updateSidebarStatus('加速中22ms');
  }

  function beginAcceleration() {
    if (state !== 'idle') return;
    progress = 0;
    setStatus('loading');
    timer = window.setInterval(function() {
      progress = Math.min(100, progress + 2.2);
      accelerateButton.style.setProperty('--nn-btn-progress', progress + '%');
      accelerateButton.setAttribute('aria-valuenow', String(Math.round(progress)));
      accelerateButton.querySelector('.nn-btn-text').textContent = '正在加速 ' + Math.round(progress) + '%';
      if (progress >= 100) {
        window.clearInterval(timer);
        setStatus('accelerated');
      }
    }, 70);
  }

  setStatus('idle');
})();
