const AcceleratorSideNavigationStyles = `
  .accelerator-side-navigation {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    width: 224px;
    font-family: var(--font-family-main);
  }

  .accelerator-side-navigation-panel {
    display: block;
    width: 240px;
    padding: var(--space16) var(--space8);
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  .accelerator-side-navigation-panel__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space24);
    width: 100%;
    min-height: 100%;
  }

  .accelerator-side-navigation-panel-list,
  .accelerator-side-navigation-panel-game-list {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
  }

  .accelerator-side-navigation-panel-game-section {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
  }

  .accelerator-side-navigation-panel-title {
    margin: var(--space0);
    padding: var(--space0) var(--space16);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .accelerator-side-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 224px;
    min-height: 52px;
    padding: var(--space14) var(--space16);
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    text-align: left;
    white-space: nowrap;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    transition: background-color 0.16s ease, color 0.16s ease;
  }

  .accelerator-side-nav-item:hover,
  .accelerator-side-nav-item.is-hover {
    background: var(--gray-10);
  }

  .accelerator-side-nav-item.is-active {
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .accelerator-side-nav-item:focus {
    outline: none;
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .accelerator-side-nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 var(--icon-size-x12);
    color: currentColor;
  }

  .accelerator-side-nav-icon .nnicon {
    display: block;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: currentColor;
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .accelerator-side-nav-icon-image {
    display: block;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    background: currentColor;
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }

  .accelerator-side-nav-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .accelerator-side-nav-game {
    gap: var(--space4);
    padding: var(--space10) var(--space16);
  }

  .accelerator-side-nav-game-progress-fill {
    position: absolute;
    inset: var(--space0);
    z-index: 0;
    background: var(--gray-9);
    opacity: 0;
    pointer-events: none;
    transform: scaleX(0);
    transform-origin: left center;
  }

  .accelerator-side-nav-game.is-loading .accelerator-side-nav-game-progress-fill,
  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-progress-fill {
    opacity: 1;
  }

  .accelerator-side-nav-game-main {
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1 1 0;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
  }

  .accelerator-side-nav-game-logo {
    display: block;
    width: var(--icon-size-x16);
    height: var(--icon-size-x16);
    flex: 0 0 var(--icon-size-x16);
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    object-fit: cover;
  }

  .accelerator-side-nav-game-content {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
  }

  .accelerator-side-nav-game-title {
    width: 100%;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
  }

  .accelerator-side-nav-game.is-active .accelerator-side-nav-game-title,
  .accelerator-side-nav-game:focus .accelerator-side-nav-game-title {
    color: var(--gray-3);
  }

  .accelerator-side-nav-game-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .accelerator-side-nav-game-server {
    display: flex;
    align-items: center;
    gap: var(--space2);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-side-nav-game-server.is-muted {
    opacity: 0.7;
  }

  .accelerator-side-nav-game-server-icon {
    display: block;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
  }

  .accelerator-side-nav-game-status {
    display: none;
    color: var(--gray-3);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    text-align: center;
  }

  .accelerator-side-nav-game.is-accelerating .accelerator-side-nav-game-status {
    display: inline-flex;
  }

  .accelerator-side-nav-game-progress {
    position: relative;
    z-index: 2;
    display: none;
    place-items: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
    color: var(--gray-3);
  }

  .accelerator-side-nav-game.is-loading .accelerator-side-nav-game-progress,
  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-progress {
    display: grid;
  }

  .accelerator-side-nav-game-progress-ring {
    position: absolute;
    inset: var(--space0);
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    overflow: visible;
    transform: rotate(-90deg);
  }

  .accelerator-side-nav-game-progress-value {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
  }

  .accelerator-side-nav-game-progress-number {
    position: relative;
    z-index: 1;
    color: var(--gray-3);
    font-size: var(--font-size-mini);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-mini);
  }

  .accelerator-side-nav-game-progress-check {
    display: none;
    color: var(--gray-3);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-progress-ring,
  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-progress-number {
    display: none;
  }

  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-progress-check {
    display: block;
  }

  .accelerator-side-nav-game-drag {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-5);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
    opacity: 0;
    transform: translateY(-50%);
  }

  .accelerator-side-nav-game:hover .accelerator-side-nav-game-drag,
  .accelerator-side-nav-game.is-hover .accelerator-side-nav-game-drag {
    opacity: 1;
  }

  .accelerator-side-navigation-panel-game-list.is-sortable .accelerator-side-nav-game-drag {
    cursor: grab;
    touch-action: none;
    user-select: none;
  }

  .accelerator-side-navigation-panel-game-list.is-reordering .accelerator-side-nav-game-drag {
    cursor: grabbing;
  }

  .accelerator-side-nav-game.is-dragging {
    background: var(--gray-10);
    opacity: 0.45;
  }

  .accelerator-side-nav-game.is-drop-target-before::after,
  .accelerator-side-nav-game.is-drop-target-after::after {
    position: absolute;
    right: var(--space8);
    left: var(--space8);
    z-index: 4;
    height: 2px;
    border-radius: var(--border-radius-2r);
    background: var(--Esports-Blue-LD);
    content: '';
    pointer-events: none;
  }

  .accelerator-side-nav-game.is-drop-target-before::after {
    top: var(--space0);
  }

  .accelerator-side-nav-game.is-drop-target-after::after {
    bottom: var(--space0);
  }

  .accelerator-side-nav-game.is-loading .accelerator-side-nav-game-drag,
  .accelerator-side-nav-game.is-complete .accelerator-side-nav-game-drag {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-side-nav-game-progress-fill {
      transition: none;
    }
  }

  .accelerator-side-nav-state {
    position: absolute;
    top: 50%;
    left: 0;
    width: 4px;
    height: 8px;
    border-top-right-radius: var(--border-radius-6r);
    border-bottom-right-radius: var(--border-radius-6r);
    background: var(--Esports-Blue-LD);
    opacity: 0;
    transform: translateY(-50%);
    transition: height 0.16s ease, opacity 0.16s ease;
  }

  .accelerator-side-nav-item:hover .accelerator-side-nav-state,
  .accelerator-side-nav-item.is-hover .accelerator-side-nav-state {
    height: 8px;
    opacity: 1;
  }

  .accelerator-side-nav-item.is-active .accelerator-side-nav-state {
    height: 36px;
    opacity: 1;
  }

  .accelerator-side-nav-item:focus .accelerator-side-nav-state {
    height: 36px;
    opacity: 1;
  }
`;

function injectAcceleratorSideNavigationStyles() {
  if (document.getElementById('accelerator-side-navigation-styles')) return;

  const style = document.createElement('style');
  style.id = 'accelerator-side-navigation-styles';
  style.textContent = AcceleratorSideNavigationStyles;
  document.head.appendChild(style);
}

function createAcceleratorSideNavigationItem(options = {}) {
  injectAcceleratorSideNavigationStyles();

  if (options.variant === 'game') {
    return createAcceleratorGameMenuItem(options);
  }

  const {
    text = 'Tab',
    state = 'default',
    icon = true,
    iconClass = 'nicon-a-Communityhalls-fillshequshouye-mianxing',
    iconSrc = '',
    onClick = null
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'accelerator-side-nav-item';

  if (icon) {
    const iconWrap = document.createElement('span');
    iconWrap.className = 'accelerator-side-nav-icon';

    const iconElement = iconSrc ? document.createElement('span') : document.createElement('i');
    if (iconSrc) {
      iconElement.className = 'accelerator-side-nav-icon-image';
      iconElement.style.maskImage = `url("${iconSrc}")`;
      iconElement.style.webkitMaskImage = `url("${iconSrc}")`;
    } else {
      iconElement.className = `nnicon ${iconClass}`;
    }
    iconElement.setAttribute('aria-hidden', 'true');
    iconWrap.appendChild(iconElement);
    item.appendChild(iconWrap);
  }

  const textElement = document.createElement('span');
  textElement.className = 'accelerator-side-nav-text';
  textElement.textContent = text;
  item.appendChild(textElement);

  const stateElement = document.createElement('span');
  stateElement.className = 'accelerator-side-nav-state';
  stateElement.setAttribute('aria-hidden', 'true');
  item.appendChild(stateElement);

  function setState(nextState) {
    const normalizedState = ['default', 'hover', 'active'].includes(nextState) ? nextState : 'default';
    item.dataset.state = normalizedState;
    item.classList.toggle('is-hover', normalizedState === 'hover');
    item.classList.toggle('is-active', normalizedState === 'active');

    if (normalizedState === 'active') {
      item.setAttribute('aria-current', 'page');
    } else {
      item.removeAttribute('aria-current');
    }

  }

  item.setState = setState;
  setState(state);

  item.addEventListener('click', function(event) {
    if (typeof onClick === 'function') {
      onClick({ event, item, state: item.dataset.state });
    }
  });

  return item;
}

function createAcceleratorGameMenuItem(options = {}) {
  injectAcceleratorSideNavigationStyles();

  const {
    text = '游戏名',
    state = 'default',
    accelerating = false,
    latency = '22ms',
    progressDuration = 3000,
    completionHold = 600,
    gameLogoSrc = '../image/Game logo/game10.webp',
    server = '区服',
    serverIconSrc = '../image/National flag/美服.svg',
    onClick = null
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'accelerator-side-nav-item accelerator-side-nav-game';
  item.dataset.accelerating = accelerating ? 'true' : 'false';

  const progressFill = document.createElement('span');
  progressFill.className = 'accelerator-side-nav-game-progress-fill';
  progressFill.setAttribute('aria-hidden', 'true');
  item.appendChild(progressFill);

  const main = document.createElement('span');
  main.className = 'accelerator-side-nav-game-main';

  const logo = document.createElement('img');
  logo.className = 'accelerator-side-nav-game-logo';
  logo.src = gameLogoSrc;
  logo.alt = '';
  logo.width = 32;
  logo.height = 32;
  main.appendChild(logo);

  const content = document.createElement('span');
  content.className = 'accelerator-side-nav-game-content';

  const title = document.createElement('span');
  title.className = 'accelerator-side-nav-game-title';
  title.textContent = text;
  content.appendChild(title);

  const meta = document.createElement('span');
  meta.className = 'accelerator-side-nav-game-meta';

  const serverGroup = document.createElement('span');
  serverGroup.className = 'accelerator-side-nav-game-server';

  const serverIcon = document.createElement('img');
  serverIcon.className = 'accelerator-side-nav-game-server-icon';
  serverIcon.src = serverIconSrc;
  serverIcon.alt = '';
  serverIcon.width = 16;
  serverIcon.height = 16;
  serverGroup.appendChild(serverIcon);

  const serverText = document.createElement('span');
  serverText.textContent = server;
  serverGroup.appendChild(serverText);
  meta.appendChild(serverGroup);

  const status = document.createElement('span');
  status.className = 'accelerator-side-nav-game-status';
  status.textContent = `加速中${latency}`;
  meta.appendChild(status);

  content.appendChild(meta);
  main.appendChild(content);
  item.appendChild(main);

  const progress = document.createElement('span');
  progress.className = 'accelerator-side-nav-game-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = `
    <svg class="accelerator-side-nav-game-progress-ring" viewBox="0 0 20 20">
      <circle class="accelerator-side-nav-game-progress-value" cx="10" cy="10" r="8"></circle>
    </svg>
    <span class="accelerator-side-nav-game-progress-number">0</span>
    <i class="accelerator-side-nav-game-progress-check nnicon nicon-a-Checked-fillyigouxuan-mianxing"></i>
  `;
  item.appendChild(progress);

  const progressCircle = progress.querySelector('.accelerator-side-nav-game-progress-value');
  const progressNumber = progress.querySelector('.accelerator-side-nav-game-progress-number');
  const progressCircumference = 2 * Math.PI * 8;
  progressCircle.style.strokeDasharray = String(progressCircumference);
  progressCircle.style.strokeDashoffset = String(progressCircumference);

  const drag = document.createElement('span');
  drag.className = 'accelerator-side-nav-game-drag nnicon nicon-a-Dragtuodong';
  drag.setAttribute('aria-hidden', 'true');
  drag.title = '拖动排序';
  item.appendChild(drag);
  item.dragHandle = drag;

  const stateElement = document.createElement('span');
  stateElement.className = 'accelerator-side-nav-state';
  stateElement.setAttribute('aria-hidden', 'true');
  item.appendChild(stateElement);

  let isAccelerating = accelerating;
  let animationFrame = null;
  let completionTimer = null;

  function cancelAccelerationTimers() {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    if (completionTimer !== null) {
      clearTimeout(completionTimer);
      completionTimer = null;
    }
  }

  function setProgress(nextProgress) {
    const normalizedProgress = Math.max(0, Math.min(100, Math.round(nextProgress)));
    item.dataset.progress = String(normalizedProgress);
    progressFill.style.transform = `scaleX(${normalizedProgress / 100})`;
    progressCircle.style.strokeDashoffset = String(progressCircumference * (1 - normalizedProgress / 100));
    progressNumber.textContent = String(normalizedProgress);
  }

  function updateAccelerationState() {
    item.classList.toggle('is-accelerating', isAccelerating);
    item.dataset.accelerating = isAccelerating ? 'true' : 'false';
    serverGroup.classList.toggle('is-muted', !isAccelerating);
  }

  function finishAcceleration() {
    cancelAccelerationTimers();
    item.classList.remove('is-loading', 'is-complete');
    item.removeAttribute('aria-busy');
    isAccelerating = true;
    setProgress(0);
    updateAccelerationState();
  }

  function showAccelerationComplete() {
    item.classList.remove('is-loading');
    item.classList.add('is-complete');
    setProgress(100);
    completionTimer = setTimeout(finishAcceleration, completionHold);
  }

  function startAcceleration() {
    cancelAccelerationTimers();
    isAccelerating = false;
    updateAccelerationState();
    item.classList.remove('is-complete');
    item.classList.add('is-loading');
    item.setAttribute('aria-busy', 'true');
    setProgress(0);

    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      finishAcceleration();
      return;
    }

    const startTime = performance.now();
    function updateProgress(now) {
      const elapsed = now - startTime;
      const nextProgress = progressDuration > 0 ? Math.min(100, elapsed / progressDuration * 100) : 100;
      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        animationFrame = null;
        showAccelerationComplete();
      }
    }

    animationFrame = requestAnimationFrame(updateProgress);
  }

  function stopAcceleration() {
    cancelAccelerationTimers();
    item.classList.remove('is-loading', 'is-complete');
    item.removeAttribute('aria-busy');
    isAccelerating = false;
    setProgress(0);
    updateAccelerationState();
  }

  function setState(nextState) {
    const normalizedState = ['default', 'hover', 'active'].includes(nextState) ? nextState : 'default';
    item.dataset.state = normalizedState;
    item.classList.toggle('is-hover', normalizedState === 'hover');
    item.classList.toggle('is-active', normalizedState === 'active');

    if (normalizedState === 'active') {
      item.setAttribute('aria-current', 'page');
    } else {
      item.removeAttribute('aria-current');
    }
  }

  item.setState = setState;
  item.startAcceleration = startAcceleration;
  item.stopAcceleration = stopAcceleration;
  item.setAccelerating = function(nextAccelerating) {
    if (nextAccelerating) {
      finishAcceleration();
    } else {
      stopAcceleration();
    }
  };
  setState(state);
  setProgress(0);
  updateAccelerationState();

  item.addEventListener('click', function(event) {
    if (typeof onClick === 'function') {
      onClick({ event, item, state: item.dataset.state, accelerating: isAccelerating });
    }
  });

  return item;
}

function createAcceleratorSideNavigation(options = {}) {
  injectAcceleratorSideNavigationStyles();

  const {
    items = [],
    activeIndex = 0,
    onChange = null
  } = options;

  const navigation = document.createElement('nav');
  navigation.className = 'accelerator-side-navigation';
  navigation.setAttribute('aria-label', options.ariaLabel || '加速器侧边导航');

  const itemElements = items.map(function(itemOptions, index) {
    const item = createAcceleratorSideNavigationItem({
      ...itemOptions,
      state: index === activeIndex ? 'active' : 'default',
      onClick: function(payload) {
        itemElements.forEach(function(itemElement, itemIndex) {
          itemElement.setState(itemIndex === index ? 'active' : 'default');
        });

        if (typeof itemOptions.onClick === 'function') {
          itemOptions.onClick(payload);
        }
        if (typeof onChange === 'function') {
          onChange({ index, item: itemOptions, element: payload.item, event: payload.event });
        }
      }
    });

    navigation.appendChild(item);
    return item;
  });

  navigation.items = itemElements;
  return navigation;
}

function createAcceleratorSideNavigationPanel(options = {}) {
  injectAcceleratorSideNavigationStyles();

  const defaultFunctionItems = [
    {
      text: '首页',
      iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing'
    },
    {
      text: '电脑工具',
      iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing'
    }
  ];
  const defaultGameItems = [
    { text: '绝地求生', server: '澳洲服', gameLogoSrc: '../image/Game logo/game1.webp', serverIconSrc: '../image/National flag/澳服.svg' },
    { text: '堡垒之夜', server: '中国香港服', gameLogoSrc: '../image/Game logo/game2.webp', serverIconSrc: '../image/National flag/港服.svg' },
    { text: 'APEX英雄', server: '美服', gameLogoSrc: '../image/Game logo/game4.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { text: '黎明杀机', server: '韩服', gameLogoSrc: '../image/Game logo/game13.webp', serverIconSrc: '../image/National flag/韩服.svg' },
    { text: '三角洲行动', server: '马来西亚服', gameLogoSrc: '../image/Game logo/game9.webp', serverIconSrc: '../image/National flag/马来西亚服.svg' },
    { text: '魔兽世界', server: '澳洲服', gameLogoSrc: '../image/Game logo/game3.webp', serverIconSrc: '../image/National flag/澳服.svg' },
    { text: '炉石传说', server: '新加坡服', gameLogoSrc: '../image/Game logo/game5.webp', serverIconSrc: '../image/National flag/新加坡服.svg' },
    { text: '绝区零', server: '美服', gameLogoSrc: '../image/Game logo/game6.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { text: '守望先锋', server: '亚服', gameLogoSrc: '../image/Game logo/game14.webp', serverIconSrc: '../image/National flag/亚服.svg' },
    { text: '无畏契约', server: '中国服', gameLogoSrc: '../image/Game logo/game10.webp', serverIconSrc: '../image/National flag/中国服.svg' },
    { text: 'Palia', server: '美服', gameLogoSrc: '../image/Game logo/game17.webp', serverIconSrc: '../image/National flag/美服.svg' },
    { text: '七日世界', server: '东南亚服', gameLogoSrc: '../image/Game logo/game18.webp', serverIconSrc: '../image/National flag/东南亚服.svg' },
    { text: '盗贼之海', server: '欧服', gameLogoSrc: '../image/Game logo/game19.webp', serverIconSrc: '../image/National flag/欧服.svg' },
    { text: '漫威争锋', server: '亚服', gameLogoSrc: '../image/Game logo/game20.webp', serverIconSrc: '../image/National flag/亚服.svg' }
  ];

  const functionItems = options.functionItems || defaultFunctionItems;
  const gameItems = options.gameItems || defaultGameItems;
  const sortable = options.sortable !== false;
  const panel = document.createElement('nav');
  panel.className = 'accelerator-side-navigation-panel';
  panel.setAttribute('aria-label', options.ariaLabel || '加速器侧边导航');

  const panelContent = document.createElement('div');
  panelContent.className = 'accelerator-side-navigation-panel__content';
  panel.appendChild(panelContent);

  const functionList = document.createElement('div');
  functionList.className = 'accelerator-side-navigation-panel-list';
  panelContent.appendChild(functionList);

  const gameSection = document.createElement('section');
  gameSection.className = 'accelerator-side-navigation-panel-game-section';

  const gameSectionTitle = document.createElement('h3');
  gameSectionTitle.className = 'accelerator-side-navigation-panel-title';
  gameSectionTitle.textContent = options.gameSectionTitle || '我的加速';
  gameSection.appendChild(gameSectionTitle);

  const gameList = document.createElement('div');
  gameList.className = 'accelerator-side-navigation-panel-game-list';
  gameList.classList.toggle('is-sortable', sortable);
  gameSection.appendChild(gameList);
  panelContent.appendChild(gameSection);

  const itemElements = [];
  let draggedGameItem = null;
  let draggedFromIndex = -1;
  let dropTarget = null;
  let dropPosition = null;

  function setActiveItem(activeItem) {
    itemElements.forEach(function(itemElement) {
      itemElement.setState(itemElement === activeItem ? 'active' : 'default');
    });
  }

  function getOrderedGameItems() {
    return Array.from(gameList.children);
  }

  function refreshGameOrderMetadata() {
    const orderedItems = getOrderedGameItems();
    orderedItems.forEach(function(itemElement, index) {
      itemElement.dataset.sortIndex = String(index);
      itemElement.setAttribute('aria-posinset', String(index + 1));
      itemElement.setAttribute('aria-setsize', String(orderedItems.length));
    });
    panel.gameItems = orderedItems;
    panel.items = panel.functionItems.concat(orderedItems);
  }

  function clearDropIndicator() {
    if (dropTarget) {
      dropTarget.classList.remove('is-drop-target-before', 'is-drop-target-after');
    }
    dropTarget = null;
    dropPosition = null;
  }

  function notifyReorder(fromIndex, source) {
    refreshGameOrderMetadata();
    const toIndex = panel.gameItems.indexOf(source);
    if (fromIndex === toIndex || toIndex < 0) return;

    if (typeof options.onReorder === 'function') {
      options.onReorder({
        fromIndex,
        toIndex,
        item: source.sideNavigationData,
        items: panel.gameItems.map(function(itemElement) {
          return itemElement.sideNavigationData;
        }),
        elements: panel.gameItems.slice()
      });
    }
  }

  function finishDragging() {
    if (draggedGameItem) {
      draggedGameItem.classList.remove('is-dragging');
      draggedGameItem.removeAttribute('aria-grabbed');
    }
    gameList.classList.remove('is-reordering');
    clearDropIndicator();
    draggedGameItem = null;
    draggedFromIndex = -1;
  }

  function configureSortableGameItem(item) {
    if (!sortable || !item.dragHandle) return;

    item.setAttribute('aria-keyshortcuts', 'Alt+ArrowUp Alt+ArrowDown');

    function removePointerListeners() {
      document.removeEventListener('pointermove', updatePointerSort);
      document.removeEventListener('pointerup', completePointerSort);
      document.removeEventListener('pointercancel', cancelPointerSort);
    }

    function updatePointerSort(event) {
      if (draggedGameItem !== item) return;

      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      const hoveredItem = hoveredElement && hoveredElement.closest
        ? hoveredElement.closest('.accelerator-side-nav-game')
        : null;
      clearDropIndicator();

      if (!hoveredItem || hoveredItem === item || hoveredItem.parentElement !== gameList) return;

      const bounds = hoveredItem.getBoundingClientRect();
      dropPosition = event.clientY < bounds.top + bounds.height / 2 ? 'before' : 'after';
      dropTarget = hoveredItem;
      hoveredItem.classList.add(dropPosition === 'before' ? 'is-drop-target-before' : 'is-drop-target-after');
    }

    function completePointerSort(event) {
      if (draggedGameItem !== item) return;

      event.preventDefault();
      event.stopPropagation();
      removePointerListeners();
      const source = draggedGameItem;
      const fromIndex = draggedFromIndex;
      const target = dropTarget;
      const position = dropPosition;

      if (target && position === 'before') {
        gameList.insertBefore(source, target);
      } else if (target && position === 'after') {
        gameList.insertBefore(source, target.nextSibling);
      }
      finishDragging();
      if (target) notifyReorder(fromIndex, source);
    }

    function cancelPointerSort() {
      if (draggedGameItem !== item) return;
      removePointerListeners();
      finishDragging();
    }

    item.dragHandle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

    item.dragHandle.addEventListener('pointerdown', function(event) {
      if (event.button !== 0 || item.classList.contains('is-loading') || item.classList.contains('is-complete')) return;

      event.preventDefault();
      event.stopPropagation();
      draggedGameItem = item;
      draggedFromIndex = getOrderedGameItems().indexOf(item);
      item.classList.add('is-dragging');
      item.setAttribute('aria-grabbed', 'true');
      gameList.classList.add('is-reordering');
      document.addEventListener('pointermove', updatePointerSort);
      document.addEventListener('pointerup', completePointerSort);
      document.addEventListener('pointercancel', cancelPointerSort);
    });

    item.addEventListener('keydown', function(event) {
      if (!event.altKey || !['ArrowUp', 'ArrowDown'].includes(event.key)) return;

      const orderedItems = getOrderedGameItems();
      const fromIndex = orderedItems.indexOf(item);
      const toIndex = event.key === 'ArrowUp' ? fromIndex - 1 : fromIndex + 1;
      if (toIndex < 0 || toIndex >= orderedItems.length) return;

      event.preventDefault();
      if (event.key === 'ArrowUp') {
        gameList.insertBefore(item, orderedItems[toIndex]);
      } else {
        gameList.insertBefore(item, orderedItems[toIndex].nextSibling);
      }
      notifyReorder(fromIndex, item);
      item.focus();
    });
  }

  functionItems.forEach(function(itemOptions, index) {
    const item = createAcceleratorSideNavigationItem({
      ...itemOptions,
      variant: 'function',
      state: 'default',
      onClick: function(payload) {
        setActiveItem(payload.item);
        if (typeof itemOptions.onClick === 'function') itemOptions.onClick(payload);
        if (typeof options.onChange === 'function') {
          options.onChange({ group: 'function', index, item: itemOptions, element: payload.item, event: payload.event });
        }
      }
    });
    functionList.appendChild(item);
    itemElements.push(item);
  });

  gameItems.forEach(function(itemOptions, index) {
    const item = createAcceleratorSideNavigationItem({
      ...itemOptions,
      variant: 'game',
      state: 'default',
      onClick: function(payload) {
        const previousHref = window.location.href;
        setActiveItem(payload.item);
        if (typeof itemOptions.onClick === 'function') itemOptions.onClick(payload);
        if (typeof options.onChange === 'function') {
          options.onChange({
            group: 'game',
            index: getOrderedGameItems().indexOf(payload.item),
            item: itemOptions,
            element: payload.item,
            event: payload.event
          });
        }
        if (
          options.enableDefaultGameNavigation !== false &&
          typeof itemOptions.onClick !== 'function' &&
          !payload.event.defaultPrevented &&
          window.location.href === previousHref
        ) {
          const gamePage = options.gamePageHref || 'GameAccelerator.html';
          const gameId = itemOptions.id || itemOptions.text;
          window.location.href = gamePage + '?game=' + encodeURIComponent(gameId);
        }
      }
    });
    item.sideNavigationData = itemOptions;
    configureSortableGameItem(item);
    gameList.appendChild(item);
    itemElements.push(item);
  });

  panel.functionItems = itemElements.slice(0, functionItems.length);
  panel.gameItems = itemElements.slice(functionItems.length);
  panel.items = panel.functionItems.concat(panel.gameItems);
  panel.contentElement = panelContent;
  panel.setActiveItem = setActiveItem;
  refreshGameOrderMetadata();
  return panel;
}

window.createAcceleratorSideNavigationItem = createAcceleratorSideNavigationItem;
window.createAcceleratorGameMenuItem = createAcceleratorGameMenuItem;
window.createAcceleratorSideNavigation = createAcceleratorSideNavigation;
window.createAcceleratorSideNavigationPanel = createAcceleratorSideNavigationPanel;
