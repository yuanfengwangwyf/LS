const AcceleratorHeaderStyles = `
  .accelerator-header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 1200px;
    height: 50px;
    overflow: visible;
    box-sizing: border-box;
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    transition: height 0.16s ease;
  }

  .accelerator-header:hover {
    height: 60px;
  }

  .accelerator-header__brand {
    display: flex;
    flex: 0 0 274px;
    align-items: center;
    gap: var(--space10);
    width: 274px;
    height: 100%;
    padding-left: var(--space14);
    box-sizing: border-box;
  }

  .accelerator-header__logo {
    display: block;
    flex: 0 0 auto;
    width: 70px;
    height: 26px;
    object-fit: contain;
  }

  .accelerator-header__logo--dark {
    display: none;
  }

  body.dark-mode .accelerator-header__logo--light {
    display: none;
  }

  body.dark-mode .accelerator-header__logo--dark {
    display: block;
  }

  .accelerator-header__slogan {
    width: 180px;
    height: 24px;
    overflow: hidden;
  }

  .accelerator-header__slogan-track {
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: accelerator-header-slogan-scroll 6s ease-in-out infinite;
  }

  .accelerator-header__slogan-item {
    display: flex;
    flex: 0 0 24px;
    align-items: center;
    width: 180px;
    height: 24px;
  }

  .accelerator-header__slogan-image {
    display: block;
    width: 180px;
    height: 24px;
    object-fit: contain;
  }

  body.dark-mode .accelerator-header__slogan-image {
    filter: invert(1);
  }

  @keyframes accelerator-header-slogan-scroll {
    0%, 38% {
      transform: translateY(0);
    }
    48%, 88% {
      transform: translateY(-24px);
    }
    100% {
      transform: translateY(-48px);
    }
  }

  .accelerator-header__main {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
    height: 100%;
    padding-left: var(--space16);
    box-sizing: border-box;
  }

  .accelerator-header__navigation {
    display: flex;
    flex: 0 0 320px;
    align-items: center;
    gap: var(--space24);
    width: 320px;
  }

  .accelerator-header__back {
    display: inline-flex;
    flex: 0 0 56px;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space4);
    width: 56px;
    height: 32px;
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--gray-7);
    font-family: var(--font-family-main);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    appearance: none;
    -webkit-appearance: none;
  }

  .accelerator-header__back .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .accelerator-header__back-text {
    display: none;
    white-space: nowrap;
  }

  .accelerator-header__back.is-active {
    color: var(--gray-4);
    cursor: pointer;
  }

  .accelerator-header__back.is-active .accelerator-header__back-text {
    display: inline;
  }

  .accelerator-header__back.is-active:hover {
    color: var(--gray-3);
  }

  .accelerator-header__back:disabled {
    opacity: 1;
    cursor: default;
  }

  .accelerator-header__search.nn-header__search {
    flex: 0 0 240px;
    width: 240px;
  }

  .accelerator-header__search-host {
    position: relative;
    display: flex;
    flex: 0 0 240px;
    width: 240px;
    height: 30px;
  }

  .accelerator-header__search-host::after {
    position: absolute;
    top: 100%;
    left: var(--space0);
    width: 320px;
    height: var(--space8);
    content: '';
  }

  .accelerator-header__search-popover {
    position: absolute;
    top: calc(100% + var(--space8));
    left: var(--space0);
    z-index: 1100;
    display: flex;
    width: 320px;
    padding: var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    flex-direction: column;
    gap: var(--space20);
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(calc(var(--space4) * -1));
    transition: opacity 0.16s ease, transform 0.16s ease, visibility 0.16s ease;
  }

  .accelerator-header__search-host:not(.is-suggestions-suppressed):hover .accelerator-header__search-popover,
  .accelerator-header__search-host:not(.is-suggestions-suppressed):focus-within .accelerator-header__search-popover {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(var(--space0));
  }

  .accelerator-header__search-section {
    display: flex;
    flex-direction: column;
    gap: var(--space12);
  }

  .accelerator-header__search-section[hidden] {
    display: none;
  }

  .accelerator-header__search-section-heading {
    display: flex;
    min-height: 24px;
    align-items: center;
    justify-content: space-between;
  }

  .accelerator-header__search-section-title {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    color: var(--gray-4);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
  }

  .accelerator-header__search-section-title .nnicon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .accelerator-header__search-history-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space8);
  }

  .accelerator-header__search-clear.nn-btn {
    flex: 0 0 auto;
  }

  .accelerator-header__search-popular-list {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
  }

  .accelerator-header__search-game.nn-btn {
    width: 100%;
    height: auto;
    min-height: 52px;
    justify-content: flex-start;
    padding: var(--space6) var(--space8);
    text-align: left;
  }

  .accelerator-header__search-game-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: var(--space2);
  }

  .accelerator-header__search-game-name,
  .accelerator-header__search-game-en {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-header__search-game-name {
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-body);
  }

  .accelerator-header__search-game-en {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__operations {
    display: flex;
    flex: 0 0 460px;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space16);
    width: 460px;
    padding-right: var(--space8);
    box-sizing: border-box;
  }

  .accelerator-header__operation-spacer {
    flex: 0 0 var(--icon-size-x10);
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    visibility: hidden;
  }

  .accelerator-header__time-group {
    display: flex;
    flex: 0 0 240px;
    align-items: center;
    gap: var(--space10);
    width: 240px;
  }

  .accelerator-header__duration-dropdown.nn-dropdown {
    flex: 0 0 240px;
    width: 240px;
    overflow: visible;
  }

  .accelerator-header__duration-dropdown .accelerator-header__time-group {
    flex: 0 0 32px;
    height: 32px;
  }

  .accelerator-header__duration-dropdown .nn-dropdown-trigger {
    width: 240px;
    min-height: 32px;
  }

  .accelerator-header__duration-panel.nn-dropdown-panel {
    display: none;
    position: absolute;
    top: calc(50% + 16px + var(--space8));
    left: auto;
    right: calc(var(--space48) + var(--space8));
    width: 480px;
    padding: var(--space16);
    box-sizing: border-box;
    overflow: visible;
  }

  .accelerator-header__duration-panel.nn-dropdown-panel.is-open {
    display: flex;
  }

  .accelerator-header__duration-details {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .accelerator-header__duration-details-header,
  .accelerator-header__duration-details-footer,
  .accelerator-header__duration-details-title-row,
  .accelerator-header__duration-details-value-row,
  .accelerator-header__duration-details-meta-row {
    display: flex;
    align-items: center;
  }

  .accelerator-header__duration-details-header,
  .accelerator-header__duration-details-footer,
  .accelerator-header__duration-details-title-row,
  .accelerator-header__duration-details-meta-row {
    justify-content: space-between;
  }

  .accelerator-header__duration-details-heading {
    color: var(--gray-3);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
  }

  .accelerator-header__duration-details-heading-group {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: var(--space4);
  }

  .accelerator-header__duration-details-section {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    padding: var(--space12);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
  }

  .accelerator-header__duration-details-label {
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-status {
    padding: var(--space2) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-value-row {
    gap: var(--space6);
  }

  .accelerator-header__duration-details-value {
    display: flex;
    height: 22px;
    align-items: baseline;
    gap: var(--space2);
    color: var(--gray-3);
    letter-spacing: 0;
    white-space: nowrap;
  }

  .accelerator-header__duration-details-value-number {
    display: block;
    font-family: var(--font-family-din);
    font-size: var(--font-size-header-2);
    font-weight: var(--font-weight-bold);
    line-height: normal;
  }

  .accelerator-header__duration-details-value-unit {
    display: block;
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-unit {
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-progress-row {
    display: flex;
    align-items: center;
    gap: var(--space8);
  }

  .accelerator-header__duration-details-progress {
    flex: 1 1 auto;
    height: 4px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
  }

  .accelerator-header__duration-details-progress-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--Esports-Blue-LD);
  }

  .accelerator-header__duration-details-progress-fill--full {
    background: var(--Esports-Blue-LD);
  }

  .accelerator-header__duration-details-progress-fill--blue {
    background: var(--Link);
  }

  .accelerator-header__duration-details-progress-fill--danger {
    background: var(--Red);
  }

  .accelerator-header__duration-details-progress-fill--exhausted {
    background: var(--gray-7);
  }

  .accelerator-header__duration-details-percent {
    min-width: 42px;
    color: var(--gray-4);
    font-family: var(--font-family-din);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    text-align: right;
  }

  .accelerator-header__duration-details-meta {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-footer {
    gap: var(--space12);
    padding-top: var(--space4);
  }

  .accelerator-header__duration-details-footer-copy {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-details-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .accelerator-header__duration-details-link.nn-btn {
    flex: 0 0 auto;
  }

  .accelerator-header__time {
    display: flex;
    flex: 0 0 150px;
    align-items: baseline;
    justify-content: flex-end;
    gap: var(--space4);
    width: 150px;
    height: 30px;
    color: var(--gray-3);
    white-space: nowrap;
  }

  .accelerator-header__time-number {
    font-family: var(--font-family-din);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-bold);
    line-height: 30px;
  }

  .accelerator-header__time-unit {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-header__duration-button.nn-btn {
    flex: 0 0 80px;
    width: 80px;
    height: 32px;
    padding: var(--space6) var(--space12);
  }

  .accelerator-header__account {
    display: flex;
    flex: 0 0 152px;
    align-items: center;
    gap: var(--space4);
    width: 152px;
  }

  .accelerator-header__recharge.nn-btn {
    flex: 0 0 52px;
    width: 52px;
    height: 32px;
    padding: var(--space6) var(--space12);
    color: var(--Esports-Blue-LD);
  }

  .accelerator-header__system-actions {
    display: flex;
    flex: 0 0 96px;
    align-items: center;
    width: 96px;
  }

  .accelerator-header__icon-button.nn-btn {
    width: var(--icon-size-x16);
    height: var(--icon-size-x16);
    color: var(--gray-4);
  }

  .accelerator-header__icon-button.nn-btn:hover {
    color: var(--gray-3);
  }

  .accelerator-header__action-image {
    display: block;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
  }

  body.dark-mode .accelerator-header__action-image {
    filter: invert(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-header,
    .accelerator-header__slogan-track {
      transition: none;
      animation: none;
    }
  }
`;

function injectAcceleratorHeaderStyles() {
  if (document.getElementById('accelerator-header-styles')) return;

  const style = document.createElement('style');
  style.id = 'accelerator-header-styles';
  style.textContent = AcceleratorHeaderStyles;
  document.head.appendChild(style);
}

function resolveAcceleratorHeaderBackState(options) {
  if (typeof options.canGoBack === 'boolean') return options.canGoBack;

  const storageKey = options.navigationStorageKey || 'accelerator-header-entry-page';
  const navigationId = options.navigationId || `${window.location.pathname}${window.location.search}`;

  try {
    const entryPage = window.sessionStorage.getItem(storageKey);
    if (!entryPage) {
      window.sessionStorage.setItem(storageKey, navigationId);
      return false;
    }
    return entryPage !== navigationId;
  } catch (error) {
    return window.history.length > 1;
  }
}

function createAcceleratorHeaderSearchPopover(options = {}) {
  const historyItems = Array.isArray(options.historyItems)
    ? options.historyItems.slice()
    : ['龙族破坏者', '游戏集合验证-2', '影之刃零', 'MMO通用加速', '斯普拉遁3(Switch)'];
  const popularGames = Array.isArray(options.popularGames) && options.popularGames.length
    ? options.popularGames.slice()
    : [
        { name: '绝地求生', englishName: 'PLAYERUNKNOWN’S BATTLEGROUNDS' },
        { name: 'Steam商店社区', englishName: 'Steam Community' },
        { name: '使命召唤', englishName: 'Call of Duty 19/20/21/22/23' },
        { name: 'Apex 英雄', englishName: 'Apex Legends' },
        { name: '逃离后室', englishName: 'Escape the Backrooms' }
      ];

  const popover = document.createElement('div');
  popover.className = 'accelerator-header__search-popover';
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '搜索推荐');

  function createHeading(title, iconClass) {
    const heading = document.createElement('div');
    heading.className = 'accelerator-header__search-section-heading';
    const label = document.createElement('span');
    label.className = 'accelerator-header__search-section-title';
    label.innerHTML = '<i class="nnicon ' + iconClass + '" aria-hidden="true"></i><span>' + title + '</span>';
    heading.appendChild(label);
    return heading;
  }

  const historySection = document.createElement('section');
  historySection.className = 'accelerator-header__search-section';
  const historyHeading = createHeading('历史搜索', 'nicon-a-Time-lineshijian-xianxing');
  const clearHistory = window.createButton({
    text: '',
    variant: 'system',
    level: 'tertiary',
    size: 'small',
    icon: '<i class="nnicon nicon-a-delete-lineshanchulajitong-xianxing" aria-hidden="true"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x9)',
    className: 'accelerator-header__search-clear',
    onClick: function(event) {
      event.stopPropagation();
      historyItems.splice(0, historyItems.length);
      renderHistory();
    }
  });
  clearHistory.setAttribute('aria-label', '清空历史搜索');
  historyHeading.appendChild(clearHistory);
  const historyList = document.createElement('div');
  historyList.className = 'accelerator-header__search-history-list';
  historySection.appendChild(historyHeading);
  historySection.appendChild(historyList);

  function selectSuggestion(value, event) {
    const host = popover.closest('.accelerator-header__search-host');
    if (host) host.classList.add('is-suggestions-suppressed');
    if (typeof options.onSelect === 'function') options.onSelect(value, event, popover);
  }

  function renderHistory() {
    const hideHistory = historyItems.length === 0;
    const collapse = hideHistory && historySection.isConnected && !historySection.hidden;
    const oldHeight = collapse ? popover.offsetHeight : 0;
    const oldTop = collapse ? popularSection.offsetTop : 0;
    const restoreFocus = collapse && historySection.contains(document.activeElement);
    historyList.replaceChildren();
    historyItems.forEach(function(value) {
      const label = window.createLabel({
        text: value,
        type: 'history',
        showDelete: false
      });
      label.setAttribute('role', 'button');
      label.setAttribute('tabindex', '0');
      label.addEventListener('click', function(event) { selectSuggestion(value, event); });
      label.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectSuggestion(value, event);
        }
      });
      historyList.appendChild(label);
    });
    historySection.hidden = hideHistory;
    if (restoreFocus) popularList.querySelector('button').focus({ preventScroll: true });
    if (!collapse || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const newHeight = popover.offsetHeight;
    const deltaY = oldTop - popularSection.offsetTop;
    const timing = { duration: 360, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' };
    popover.animate([
      { height: oldHeight + 'px', overflow: 'hidden' },
      { height: newHeight + 'px', overflow: 'hidden' }
    ], timing);
    popularSection.animate([
      { transform: `translateY(${deltaY}px)` },
      { transform: 'translateY(0)' }
    ], timing);
  }

  const popularSection = document.createElement('section');
  popularSection.className = 'accelerator-header__search-section';
  popularSection.appendChild(createHeading('热门游戏', 'nicon-a-Fire-Linehuo-xianxing'));
  const popularList = document.createElement('div');
  popularList.className = 'accelerator-header__search-popular-list';
  popularGames.forEach(function(game) {
    const button = window.createButton({
      text: '',
      variant: 'system',
      level: 'tertiary',
      size: 'default',
      className: 'accelerator-header__search-game',
      onClick: function(event) { selectSuggestion(game.name, event); }
    });
    const copy = document.createElement('span');
    copy.className = 'accelerator-header__search-game-copy';
    const name = document.createElement('span');
    name.className = 'accelerator-header__search-game-name';
    name.textContent = game.name;
    const englishName = document.createElement('span');
    englishName.className = 'accelerator-header__search-game-en';
    englishName.textContent = game.englishName;
    copy.appendChild(name);
    copy.appendChild(englishName);
    button.appendChild(copy);
    button.setAttribute('aria-label', game.name + '，' + game.englishName);
    popularList.appendChild(button);
  });
  popularSection.appendChild(popularList);

  popover.appendChild(historySection);
  popover.appendChild(popularSection);
  renderHistory();
  return popover;
}

function createAcceleratorHeader(options = {}) {
  injectAcceleratorHeaderStyles();
  if (typeof window.injectButtonStyles === 'function') window.injectButtonStyles();

  const root = document.createElement('header');
  root.className = ['accelerator-header', options.className || ''].filter(Boolean).join(' ');
  root.style.width = typeof options.width === 'number' ? `${options.width}px` : (options.width || '100%');
  root.setAttribute('aria-label', options.ariaLabel || '加速器头部');

  const brand = document.createElement('div');
  brand.className = 'accelerator-header__brand';

  const logoLight = document.createElement('img');
  logoLight.className = 'accelerator-header__logo accelerator-header__logo--light';
  logoLight.src = options.logoLightSrc || '../image/Header/Accelerator-light.png';
  logoLight.alt = options.logoAlt || '雷神';

  const logoDark = document.createElement('img');
  logoDark.className = 'accelerator-header__logo accelerator-header__logo--dark';
  logoDark.src = options.logoDarkSrc || '../image/Header/Accelerator-dark.png';
  logoDark.alt = options.logoAlt || '雷神';

  const slogan = document.createElement('div');
  slogan.className = 'accelerator-header__slogan';
  slogan.setAttribute('aria-label', options.sloganAriaLabel || '品牌口号');

  const sloganTrack = document.createElement('div');
  sloganTrack.className = 'accelerator-header__slogan-track';

  const defaultSlogans = [
    { imageSrc: '../image/Header/slogan-1.svg', alt: '顶级全球游戏加速技术' },
    { imageSrc: '../image/Header/slogan-2.svg', alt: '会员权益与加速服务' }
  ];
  const sloganItems = Array.isArray(options.sloganItems) && options.sloganItems.length
    ? options.sloganItems
    : defaultSlogans;
  const loopItems = sloganItems.length > 1 ? sloganItems.concat(sloganItems[0]) : sloganItems;

  loopItems.forEach(function(item) {
    const sloganItem = document.createElement('div');
    sloganItem.className = 'accelerator-header__slogan-item';

    const sloganImage = document.createElement('img');
    sloganImage.className = 'accelerator-header__slogan-image';
    sloganImage.src = typeof item === 'string' ? item : item.imageSrc;
    sloganImage.alt = typeof item === 'string' ? '' : (item.alt || '');

    sloganItem.appendChild(sloganImage);
    sloganTrack.appendChild(sloganItem);
  });

  slogan.appendChild(sloganTrack);
  brand.appendChild(logoLight);
  brand.appendChild(logoDark);
  brand.appendChild(slogan);

  const main = document.createElement('div');
  main.className = 'accelerator-header__main';

  const navigation = document.createElement('div');
  navigation.className = 'accelerator-header__navigation';

  const backButton = document.createElement('button');
  backButton.type = 'button';
  backButton.className = 'accelerator-header__back';
  backButton.innerHTML = [
    '<i class="nnicon nicon-a-Arrowleft-linejiantouzuo-xianxing" aria-hidden="true"></i>',
    `<span class="accelerator-header__back-text">${options.backText || '返回'}</span>`
  ].join('');
  backButton.setAttribute('aria-label', options.backText || '返回');

  function setBackActive(active) {
    const isActive = Boolean(active);
    backButton.disabled = !isActive;
    backButton.classList.toggle('is-active', isActive);
    backButton.setAttribute('aria-disabled', String(!isActive));
  }

  setBackActive(resolveAcceleratorHeaderBackState(options));
  backButton.addEventListener('click', function(event) {
    if (backButton.disabled) return;
    if (typeof options.onBack === 'function') {
      options.onBack(event, root);
      return;
    }
    window.history.back();
  });

  let search = null;
  let searchHost = null;
  let searchPopover = null;

  function suppressSearchSuggestions() {
    if (searchHost) searchHost.classList.add('is-suggestions-suppressed');
    const input = search && search.querySelector('input');
    if (input) input.blur();
  }

  function resolveSearchMountTarget() {
    let current = root.parentElement;
    while (current && current !== document.body) {
      const hasFrameClass = Array.from(current.classList || []).some(function(className) {
        return className.endsWith('-frame') && !className.includes('__');
      });
      if (hasFrameClass) return current;
      current = current.parentElement;
    }
    return document.body;
  }

  function openGlobalGameSearch(value) {
    if (typeof window.createAcceleratorGameSearch !== 'function') return null;
    suppressSearchSuggestions();
    const mountTarget = resolveSearchMountTarget();
    const existing = mountTarget.querySelector('.accelerator-game-search');
    if (existing) return existing;
    const gameSearch = window.createAcceleratorGameSearch({
      mountTarget: mountTarget,
      onClose: suppressSearchSuggestions
    });
    if (value && gameSearch.searchInput) {
      gameSearch.searchInput.value = value;
      gameSearch.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return gameSearch;
  }

  if (typeof window.createHeaderSearch === 'function') {
    search = window.createHeaderSearch({
      placeholder: options.searchPlaceholder || '搜索游戏',
      value: options.searchValue || '',
      className: 'accelerator-header__search',
      onInput: options.onSearchInput || null,
      onSearch: options.onSearch || null
    });
    searchHost = document.createElement('div');
    searchHost.className = 'accelerator-header__search-host';
    searchHost.appendChild(search);
    if (options.enableSearchSuggestions !== false) {
      searchPopover = createAcceleratorHeaderSearchPopover({
        historyItems: options.searchHistoryItems,
        popularGames: options.searchPopularGames,
        onSelect: typeof options.onSearchSuggestionSelect === 'function'
          ? options.onSearchSuggestionSelect
          : openGlobalGameSearch
      });
      searchHost.appendChild(searchPopover);
      searchHost.addEventListener('mouseleave', function() {
        searchHost.classList.remove('is-suggestions-suppressed');
      });
    }
    const searchInput = search.querySelector('input');
    if (searchInput) {
      searchInput.readOnly = true;
      searchInput.setAttribute('aria-haspopup', 'dialog');
    }
    search.addEventListener('click', function(event) {
      event.preventDefault();
      openGlobalGameSearch();
    });
  }

  navigation.appendChild(backButton);
  if (searchHost) navigation.appendChild(searchHost);

  const operations = document.createElement('div');
  operations.className = 'accelerator-header__operations';

  const spacer = document.createElement('span');
  spacer.className = 'accelerator-header__operation-spacer';
  spacer.setAttribute('aria-hidden', 'true');

  const timeGroup = document.createElement('div');
  timeGroup.className = 'accelerator-header__time-group';

  const time = document.createElement('div');
  time.className = 'accelerator-header__time';
  const duration = options.duration || { hours: '100023', minutes: '25', seconds: '00' };
  [
    [duration.hours, '时'],
    [duration.minutes, '分'],
    [duration.seconds, '秒']
  ].forEach(function(item) {
    const number = document.createElement('span');
    number.className = 'accelerator-header__time-number';
    number.textContent = item[0];

    const unit = document.createElement('span');
    unit.className = 'accelerator-header__time-unit';
    unit.textContent = item[1];

    time.appendChild(number);
    time.appendChild(unit);
  });

  const durationButton = window.createButton({
    text: options.durationButtonText || '开启时长',
    variant: 'system',
    level: 'primary',
    size: 'default',
    className: 'accelerator-header__duration-button',
    onClick: options.onDurationClick || null
  });

  timeGroup.appendChild(time);
  timeGroup.appendChild(durationButton);

  const durationDetails = options.durationDetails || {};
  let durationPanel = null;
  const durationDropdown = typeof window.createDropdownMenu === 'function'
    ? window.createDropdownMenu({
        appearance: 'no-padding',
        size: 'medium',
        triggerElement: timeGroup,
        className: 'accelerator-header__duration-dropdown',
        onOpenChange: function(isOpen) {
          if (durationPanel) durationPanel.classList.toggle('is-open', isOpen);
          if (typeof options.onDurationDetailsOpenChange === 'function') {
            options.onDurationDetailsOpenChange(isOpen);
          }
        }
      })
    : timeGroup;

  if (durationDropdown !== timeGroup && durationDropdown._dropdownMenu) {
    const panel = durationDropdown._dropdownMenu.panel;
    durationPanel = panel;
    durationPanel.classList.add('accelerator-header__duration-panel');
    durationPanel.remove();
    panel.innerHTML = '';

    const details = document.createElement('div');
    details.className = 'accelerator-header__duration-details';

    const detailsHeader = document.createElement('div');
    detailsHeader.className = 'accelerator-header__duration-details-header';
    const detailsHeadingGroup = document.createElement('div');
    detailsHeadingGroup.className = 'accelerator-header__duration-details-heading-group';
    const detailsHeading = document.createElement('span');
    detailsHeading.className = 'accelerator-header__duration-details-heading';
    detailsHeading.textContent = durationDetails.title || '剩余时长';
    detailsHeadingGroup.appendChild(detailsHeading);
    if (typeof window.createButton === 'function') {
      const refreshButton = window.createButton({
        text: '',
        variant: 'system',
        level: 'tertiary',
        size: 'small',
        icon: '<i class="nnicon nicon-a-refresh-fillshuaxin-xianxing" aria-hidden="true"></i>',
        iconPosition: 'only',
        iconSize: 'var(--icon-size-x8)',
        className: 'accelerator-header__duration-details-refresh',
        onClick: options.onDurationRefreshClick || null
      });
      refreshButton.setAttribute('aria-label', durationDetails.refreshLabel || '刷新剩余时长');
      detailsHeadingGroup.appendChild(refreshButton);
    }
    detailsHeader.appendChild(detailsHeadingGroup);
    if (typeof window.createButton === 'function') {
      const detailsLink = window.createButton({
        text: durationDetails.linkText || '使用明细',
        variant: 'system',
        level: 'tertiary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-Arrowright-linejiantouyou-xianxing" aria-hidden="true"></i>',
        iconPosition: 'right',
        iconSize: 'var(--icon-size-x8)',
        className: 'accelerator-header__duration-details-link',
        onClick: options.onDurationDetailsClick || null
      });
      detailsHeader.appendChild(detailsLink);
    }
    details.appendChild(detailsHeader);

    function resolveDurationProgressState(percent) {
      const value = Math.max(0, Math.min(100, Number(percent) || 0));
      if (value <= 0) return 'exhausted';
      if (value < 30) return 'danger';
      if (value < 70) return 'blue';
      return 'full';
    }

    function appendDurationSection(config) {
      const section = document.createElement('section');
      section.className = 'accelerator-header__duration-details-section';

      const titleRow = document.createElement('div');
      titleRow.className = 'accelerator-header__duration-details-title-row';
      const label = document.createElement('span');
      label.className = 'accelerator-header__duration-details-label';
      label.textContent = config.title;
      titleRow.appendChild(label);
      const status = document.createElement('span');
      status.className = 'accelerator-header__duration-details-status';
      status.textContent = config.status;
      titleRow.appendChild(status);
      section.appendChild(titleRow);

      const valueRow = document.createElement('div');
      valueRow.className = 'accelerator-header__duration-details-value-row';
      const value = document.createElement('span');
      value.className = 'accelerator-header__duration-details-value';
      const valueParts = String(config.value).match(/[\d,.]+|[^\d,.\s]+/g) || [String(config.value)];
      valueParts.forEach(function(part) {
        const valuePart = document.createElement('span');
        valuePart.textContent = part;
        if (/[\d]/.test(part)) {
          valuePart.className = 'accelerator-header__duration-details-value-number';
          value.appendChild(valuePart);
        } else {
          valuePart.className = 'accelerator-header__duration-details-value-unit';
          value.appendChild(valuePart);
        }
      });
      valueRow.appendChild(value);
      section.appendChild(valueRow);

      const progressRow = document.createElement('div');
      progressRow.className = 'accelerator-header__duration-details-progress-row';
      const progress = document.createElement('div');
      progress.className = 'accelerator-header__duration-details-progress';
      const fill = document.createElement('div');
      const progressValue = Math.max(0, Math.min(100, Number(config.percent) || 0));
      const progressState = resolveDurationProgressState(progressValue);
      fill.className = `accelerator-header__duration-details-progress-fill accelerator-header__duration-details-progress-fill--${progressState}`;
      fill.style.width = `${progressValue}%`;
      progress.appendChild(fill);
      progressRow.appendChild(progress);
      section.appendChild(progressRow);

      const metaRow = document.createElement('div');
      metaRow.className = 'accelerator-header__duration-details-meta-row';
      const meta = document.createElement('span');
      meta.className = 'accelerator-header__duration-details-meta';
      meta.textContent = config.meta;
      metaRow.appendChild(meta);
      const percent = document.createElement('span');
      percent.className = 'accelerator-header__duration-details-percent';
      percent.textContent = `${config.percent}%`;
      metaRow.appendChild(percent);
      section.appendChild(metaRow);
      details.appendChild(section);
    }

    appendDurationSection({
      title: durationDetails.pausedTitle || '可暂停时长',
      status: durationDetails.pausedStatus || '暂停中，等待接力',
      value: durationDetails.pausedValue || '7,230 时 30 分 04 秒',
      percent: durationDetails.pausedPercent ?? '27.7',
      meta: durationDetails.pausedMeta || '累计已用 2,769.5 / 共 10,000 时'
    });
    appendDurationSection({
      title: durationDetails.activeTitle || '活动时长',
      status: durationDetails.activeStatus || '计时中',
      value: durationDetails.activeValue || '5 时 00 分 18 秒',
      percent: durationDetails.activePercent ?? '72.2',
      meta: durationDetails.activeMeta || '已用 13 / 共 18 时'
    });

    const footer = document.createElement('div');
    footer.className = 'accelerator-header__duration-details-footer';
    const footerCopy = document.createElement('div');
    footerCopy.className = 'accelerator-header__duration-details-footer-copy';
    footerCopy.innerHTML = '<span>活动用完后，自动接可暂停</span><i class="nnicon nicon-a-Info-linexinxitishi-xianxing accelerator-header__duration-details-info" aria-hidden="true"></i>';
    footer.appendChild(footerCopy);
    if (typeof window.createSwitch === 'function') {
      footer.appendChild(window.createSwitch({
        checked: durationDetails.autoContinue !== false,
        size: 'default',
        onChange: options.onDurationAutoContinueChange || null
      }));
    }
    details.appendChild(footer);
    panel.appendChild(details);

    let closeTimer = null;
    const cancelClose = function() {
      if (closeTimer) window.clearTimeout(closeTimer);
    };
    const open = function() {
      cancelClose();
      durationDropdown._dropdownMenu.setOpen(true);
    };
    const close = function() {
      if (closeTimer) window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(function() {
        durationDropdown._dropdownMenu.setOpen(false);
      }, 90);
    };
    timeGroup.addEventListener('mouseenter', open);
    timeGroup.addEventListener('mouseleave', close);
    panel.addEventListener('mouseenter', cancelClose);
    panel.addEventListener('mouseleave', close);
    panel.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }

  const account = document.createElement('div');
  account.className = 'accelerator-header__account';

  const rechargeButton = window.createButton({
    text: options.rechargeText || '充值',
    variant: 'system',
    level: 'tertiary',
    size: 'default',
    className: 'accelerator-header__recharge',
    onClick: options.onRechargeClick || null
  });

  const systemActions = document.createElement('div');
  systemActions.className = 'accelerator-header__system-actions';

  const defaultActions = [
    { key: 'menu', label: '菜单', iconClass: 'nicon-a-menu-linecaidan-xianxing', onClick: options.onMenuClick },
    { key: 'minimize', label: '最小化', assetSrc: '../image/Header/minimize.svg', onClick: options.onMinimizeClick },
    { key: 'close', label: '关闭', iconClass: 'nicon-a-close-lineguanbi-xianxing', onClick: options.onCloseClick }
  ];
  const actions = Array.isArray(options.actions) && options.actions.length ? options.actions : defaultActions;

  actions.forEach(function(action) {
    const actionIcon = action.assetSrc
      ? `<img class="accelerator-header__action-image" src="${action.assetSrc}" alt="">`
      : `<i class="nnicon ${action.iconClass}"></i>`;
    const actionButton = window.createButton({
      text: '',
      variant: 'system',
      level: 'tertiary',
      size: 'default',
      icon: actionIcon,
      iconPosition: 'only',
      iconSize: 'var(--icon-size-x10)',
      className: `accelerator-header__icon-button accelerator-header__icon-button--${action.key || 'action'}`,
      onClick: action.onClick || null
    });
    actionButton.setAttribute('aria-label', action.label || '操作');
    actionButton.title = action.label || '操作';
    systemActions.appendChild(actionButton);
  });

  account.appendChild(rechargeButton);
  account.appendChild(systemActions);

  operations.appendChild(spacer);
  operations.appendChild(durationDropdown);
  operations.appendChild(account);

  main.appendChild(navigation);
  main.appendChild(operations);
  root.appendChild(brand);
  root.appendChild(main);
  if (durationPanel) root.appendChild(durationPanel);

  root.setBackActive = setBackActive;
  root.backButton = backButton;
  root.search = search;
  root.searchPopover = searchPopover;
  root.suppressSearchSuggestions = suppressSearchSuggestions;
  root.openGameSearch = openGlobalGameSearch;
  root.durationDropdown = durationDropdown;

  return root;
}

if (typeof window !== 'undefined') {
  window.createAcceleratorHeader = createAcceleratorHeader;
}
