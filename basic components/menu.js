const MenuStyles = `
.nn-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 820px;
}

.nn-menu-list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
}

.nn-menu-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: var(--space8);
}

.nn-menu-action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: var(--space0) var(--space8);
  box-sizing: border-box;
  cursor: pointer;
}

.nn-menu-action-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  padding: var(--space6) var(--space0);
  border-radius: var(--border-radius-4r);
  color: var(--gray-5);
  opacity: 0.8;
}

.nn-menu-action:focus {
  outline: none;
}

.nn-menu-action:hover .nn-menu-action-content,
.nn-menu-action:focus-visible .nn-menu-action-content {
  color: var(--gray-5);
  opacity: 1;
}

.nn-menu-action.is-selected .nn-menu-action-content {
  color: var(--gray-3);
  opacity: 1;
}

.nn-menu-action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size-x24);
  height: var(--icon-size-x24);
  color: currentColor;
  font-family: nnicon !important;
  font-size: var(--icon-size-x20);
  font-style: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nn-menu-action-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size-x20);
  height: var(--icon-size-x20);
}

.nn-menu-action.is-selected .nn-menu-action-avatar .nn-avatar {
  outline: 2px solid var(--gray-3);
  outline-offset: 0;
}

.nn-menu-action-label {
  color: currentColor;
  font-family: var(--font-family-main);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-body);
  text-align: center;
}

.nn-menu-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;
}

.nn-menu-logo-icon {
  display: flex;
  align-items: center;
  z-index: 1;
  margin-right: var(--space12);
  margin-left: var(--space6);
  border-radius: 12px;
  background: var(--gray-4);
  overflow: hidden;
}

.nn-menu-logo-icon img {
  width: var(--icon-size-x14);
  height: var(--icon-size-x14);
}

.nn-menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

/* Game Community Item States */
.nn-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;
  position: relative;
  cursor: pointer;
}

.nn-menu-item .logo {
  display: flex;
  align-items: center;
  z-index: 1;
  border-radius: 11.5px;
  background: var(--gray-4);
  overflow: hidden;
}

.nn-menu-item .logo .image {
  width: 46px;
  height: 46px;
}

.nn-menu-item .logo img {
  width: 46px;
  height: 46px;
  object-fit: cover;
}

.nn-menu-item .logo .item-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 11.5px;
  color: var(--Neutral-0);
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
}

.nn-menu-item .logo .item-icon,
.nn-menu-item .logo i[class*="icon-"] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 11.5px;
  font-family: nnicon !important;
  font-size: var(--icon-size-x14);
  font-style: normal;
  color: var(--gray-1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.nn-menu-item .logo .item-text,
.nn-menu-item .logo img {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.nn-menu-item .logo-wrapper {
  display: block;
  position: relative;
}

.nn-menu-item .logo-wrapper .logo-focus,
.nn-menu-item.state-default .logo-focus,
.nn-menu-item.state-hover .logo-focus {
  display: none;
}

.nn-menu-item.state-focus .logo-main,
.nn-menu-item.state-focus-hover .logo-main {
  display: none;
}

.nn-menu-item.state-focus .logo-focus,
.nn-menu-item.state-focus-hover .logo-focus {
  display: flex;
}

.nn-menu-item .logo-wrapper .logo-focus .item-icon,
.nn-menu-item .logo-wrapper .logo-focus i[class*="icon-"] {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.nn-menu-item.state-hover .logo-main .item-icon,
.nn-menu-item.state-hover .logo-main i[class*="icon-"] {
  transform: scale(1.1);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.nn-menu-item.state-hover .logo-focus .item-icon,
.nn-menu-item.state-hover .logo-focus i[class*="icon-"] {
  transform: scale(1.1);
}

.nn-menu-item.state-focus .logo-focus .item-icon,
.nn-menu-item.state-focus .logo-focus i[class*="icon-"] {
  transform: scale(1);
}

/* Default state */
.nn-menu-item.state-default .logo {
  margin: var(--space12);
}

.nn-menu-item .hidden {
  display: none;
}

.nn-menu-item .select-indicator {
  display: block;
}

.nn-menu-item.state-hover .logo {
  margin: var(--space0);
}

.nn-menu-item.state-hover .hover-overlay {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: var(--gray-8);
  border-radius: 14px;
  z-index: 0;
}

.nn-menu-item.state-hover .select-indicator {
  position: absolute;
  top: 12px;
  left: 0;
  width: 6px;
  height: 36px;
  background: var(--gray-3);
  border-radius: 0 4px 4px 0;
  z-index: 1;
}

.nn-menu-item.state-hover .nn-tooltip {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: var(--space6);
  position: absolute;
  display: inline-flex;
  animation: none;
}

.nn-menu-item.state-hover .nn-tooltip .nn-tooltip-beak {
  top: 50%;
  left: -5px;
  transform: translateY(-50%) rotate(135deg);
  position: absolute;
}

/* Focus state */
.nn-menu-item.state-focus {
  padding: var(--space0);
}

.nn-menu-item.state-focus .select-indicator {
  position: absolute;
  top: 12px;
  left: 0;
  width: 6px;
  height: 36px;
  background: var(--Esports-Blue-LD);
  border-radius: 0 4px 4px 0;
  z-index: 3;
}

.nn-menu-item.state-focus .logo-wrapper {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: var(--border-radius-14, 14px);
  background: var(--Esports-Blue-LD);
}

.nn-menu-item.state-focus .logo-wrapper .logo-middle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-12, 12px);
  background: var(--gray-1);
}

.nn-menu-item.state-focus .logo-wrapper .logo-focus,
.nn-menu-item.state-focus-hover .logo-wrapper .logo-focus {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 46px;
  height: 46px;
  border-radius: 11.5px;
  background: var(--gray-4) !important;
  z-index: 1;
}

/* Focus-hover state */
.nn-menu-item.state-focus-hover {
  padding: var(--space0);
}

.nn-menu-item.state-focus-hover .select-indicator {
  position: absolute;
  top: 12px;
  left: 0;
  width: 6px;
  height: 36px;
  background: var(--Esports-Blue-LD);
  border-radius: 0 4px 4px 0;
  z-index: 3;
}

.nn-menu-item.state-focus-hover .logo-wrapper {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: var(--border-radius-14, 14px);
  background: var(--Esports-Blue-LD);
}

.nn-menu-item.state-focus-hover .logo-wrapper .logo-middle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-12, 12px);
  background: var(--gray-1);
}

.nn-menu-item.state-focus-hover .logo-wrapper .logo-focus {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 46px;
  height: 46px;
  border-radius: 11.5px;
  background: var(--gray-4);
  z-index: 1;
}

.nn-menu-item.state-focus-hover .nn-tooltip {
  position: relative;
  display: inline-flex;
  margin-left: var(--space6);
  animation: none;
}

.nn-menu-item.state-focus-hover .nn-tooltip .nn-tooltip-beak {
  top: 50%;
  left: -5px;
  transform: translateY(-50%) rotate(135deg);
  position: absolute;
}

/* Selected state (for component use) */
.nn-menu-item-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;
  position: relative;
}

.nn-menu-item-selected::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 0;
  width: 6px;
  height: 36px;
  background: var(--Esports-Blue-LD);
  border-radius: 0 4px 4px 0;
}

.nn-menu-item-icon {
  display: flex;
  align-items: center;
  z-index: 1;
  margin-right: var(--space12);
  margin-left: var(--space6);
  border-radius: 12px;
  background: var(--gray-3);
  overflow: hidden;
}

.nn-menu-item-icon img {
  width: 46px;
  height: 46px;
}

.nn-menu-item-hover {
  position: relative;
  width: 70px;
  height: 60px;
}

.nn-menu-item-hover::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 10px;
  width: 50px;
  height: 50px;
  background: var(--gray-8);
  border-radius: 14px;
  z-index: 0;
}

.nn-menu-avatar {
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.nn-menu-avatar-status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background: var(--BaseColor-Green);
  border: 2px solid var(--gray-2);
}
`;

function createMenu(options = {}) {
  const {
    logo = null,
    items = [],
    selectedIndex = -1,
    avatar = null,
    avatarStatus = null,
  } = options;

  injectMenuStyles();

  const menu = document.createElement('div');
  menu.className = 'nn-menu';

  if (logo) {
    const logoEl = document.createElement('div');
    logoEl.className = 'nn-menu-logo';
    logoEl.innerHTML = `
      <div class="nn-menu-logo-icon">
        <img src="${logo.src}" alt="${logo.alt || 'logo'}" />
      </div>
    `;
    menu.appendChild(logoEl);
  }

  const listEl = document.createElement('div');
  listEl.className = 'nn-menu-list';

  items.forEach(function(item, index) {
    const isSelected = index === selectedIndex;
    const itemEl = document.createElement('div');

    if (isSelected) {
      itemEl.className = 'nn-menu-item state-focus';
      itemEl.innerHTML = `
        <div class="select-indicator"></div>
        <div class="logo">
          <div class="image"></div>
        </div>
      `;
    } else if (item.hover) {
      itemEl.className = 'nn-menu-item state-hover';
      itemEl.innerHTML = `
        <div class="logo">
          <div class="image"></div>
        </div>
        <div class="hover-overlay"></div>
        <div class="select-indicator"></div>
        <div class="tooltip">
          <span class="text">${item.tooltip || 'prompt text'}</span>
          <div class="beak"></div>
        </div>
      `;
    } else {
      itemEl.className = 'nn-menu-item state-default';
      itemEl.innerHTML = `
        <div class="logo">
          <div class="image"></div>
        </div>
      `;
    }

    listEl.appendChild(itemEl);
  });

  const listWrapper = document.createElement('div');
  listWrapper.className = 'nn-menu-list-wrapper';
  listWrapper.appendChild(listEl);

  menu.appendChild(listWrapper);

  if (avatar) {
    const avatarContainer = document.createElement('div');
    avatarContainer.style.position = 'absolute';
    avatarContainer.style.bottom = '12px';
    avatarContainer.style.left = '12px';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'nn-menu-avatar';
    if (avatar.style === 'image' && avatar.src) {
      avatarEl.style.backgroundImage = `url(${avatar.src})`;
    } else if (avatar.style === 'text') {
      avatarEl.style.background = 'var(--gray-4)';
      avatarEl.style.display = 'flex';
      avatarEl.style.alignItems = 'center';
      avatarEl.style.justifyContent = 'center';
      avatarEl.style.color = 'var(--Neutral-0)';
      avatarEl.style.fontSize = '18px';
      avatarEl.style.fontWeight = 'var(--font-weight-medium)';
      avatarEl.textContent = avatar.text || '';
    }

    if (avatarStatus) {
      const statusEl = document.createElement('div');
      statusEl.className = 'nn-menu-avatar-status';
      avatarContainer.appendChild(statusEl);
    }

    avatarContainer.appendChild(avatarEl);
    menu.appendChild(avatarContainer);
  }

  return menu;
}

function navigateToDiscoverPage() {
  const discoverUrl = new URL('../page/discover.html', window.location.href).href;
  const navigationTarget = window.top || window;
  navigationTarget.location.href = discoverUrl;
}

function navigateToPersonalCenterPage() {
  const personalCenterUrl = new URL('../page/PersonalCenter.html', window.location.href).href;
  const navigationTarget = window.top || window;
  navigationTarget.location.href = personalCenterUrl;
}

function navigateToCommunityHomePage() {
  const communityHomeUrl = new URL('../page/Home.html', window.location.href).href;
  const navigationTarget = window.top || window;
  navigationTarget.location.href = communityHomeUrl;
}

function navigateToGameHomePage() {
  const gameHomeUrl = new URL('../page/GameDetail.html', window.location.href).href;
  const navigationTarget = window.top || window;
  navigationTarget.location.href = gameHomeUrl;
}

const DefaultMenuActions = [
  { label: '游戏', icon: 'a-Discovery1-fillfaxian1-mianxing', onClick: navigateToDiscoverPage },
  { label: '申报', icon: 'a-Declaration-fillshenbao-mianxing' },
  { label: '我的', avatarSrc: '../image/Avatar/头像706.png', avatarSize: 33.333, onClick: navigateToPersonalCenterPage }
];

const DefaultInteractiveMenuItems = [
  { type: 'text', text: 'A', tooltip: '社区 A', color: 'var(--Esports-Blue)', onClick: navigateToCommunityHomePage },
  { type: 'image', src: '../image/Game logo/game1.webp', tooltip: '绝地求生', onClick: navigateToGameHomePage },
  { type: 'image', src: '../image/Game logo/game2.webp', tooltip: '社区 2' },
  { type: 'image', src: '../image/Game logo/game3.webp', tooltip: '社区 3' },
  { type: 'image', src: '../image/Game logo/game4.webp', tooltip: '社区 4' },
  { type: 'image', src: '../image/Game logo/game5.webp', tooltip: '社区 5' },
  { type: 'image', src: '../image/Game logo/game6.webp', tooltip: '社区 6' },
  { type: 'image', src: '../image/Game logo/game7.webp', tooltip: '社区 7' },
  { type: 'image', src: '../image/Game logo/game8.webp', tooltip: '社区 8' }
];

function createInteractiveMenu(options = {}) {
  const {
    logo = null,
    actions = null,
    selectedActionIndex = -1,
    selectedItemIndex = -1,
    lockItemSelection = false,
    items = null,
  } = options;

  injectMenuStyles();

  const menu = document.createElement('div');
  menu.className = 'nn-menu';

  const listEl = document.createElement('div');
  listEl.className = 'nn-menu-list';

  const actionItems = actions === null ? DefaultMenuActions : actions;
  const actionsEl = document.createElement('div');
  actionsEl.className = 'nn-menu-actions';

  actionItems.forEach(function(action, index) {
    const actionEl = document.createElement('div');
    const isSelected = index === selectedActionIndex;
    actionEl.className = `nn-menu-action${isSelected ? ' is-selected' : ''}`;
    actionEl.setAttribute('role', 'button');
    actionEl.setAttribute('tabindex', '0');
    actionEl.setAttribute('aria-label', action.ariaLabel || action.label || '');
    actionEl.setAttribute('aria-pressed', String(isSelected));

    const actionContentEl = document.createElement('div');
    actionContentEl.className = 'nn-menu-action-content';

    if (action.avatarSrc) {
      const avatarSlotEl = document.createElement('span');
      avatarSlotEl.className = 'nn-menu-action-avatar';
      avatarSlotEl.setAttribute('aria-hidden', 'true');
      avatarSlotEl.appendChild(window.createAvatar({
        src: action.avatarSrc,
        text: action.label || '',
        size: action.avatarSize || 33.333
      }));
      actionContentEl.appendChild(avatarSlotEl);
    } else {
      const iconEl = document.createElement('i');
      iconEl.className = `nn-menu-action-icon nnicon nicon-${action.icon || ''}`;
      iconEl.setAttribute('aria-hidden', 'true');
      actionContentEl.appendChild(iconEl);
    }

    const labelEl = document.createElement('span');
    labelEl.className = 'nn-menu-action-label';
    labelEl.textContent = action.label || '';
    actionContentEl.appendChild(labelEl);
    actionEl.appendChild(actionContentEl);

    actionEl.addEventListener('click', function(event) {
      actionsEl.querySelectorAll('.nn-menu-action').forEach(function(sibling) {
        sibling.classList.remove('is-selected');
        sibling.setAttribute('aria-pressed', 'false');
      });
      actionEl.classList.add('is-selected');
      actionEl.setAttribute('aria-pressed', 'true');

      if (typeof action.onClick === 'function') {
        action.onClick({ action: action, index: index, event: event });
      }
    });

    actionEl.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      actionEl.click();
    });

    actionsEl.appendChild(actionEl);
  });

  if (actionItems.length) listEl.appendChild(actionsEl);

  function renderItemContent(item) {
    if (item.type === 'text') {
      return `<span class="item-text" style="background: ${item.color || 'var(--gray-4)'};">${item.text || ''}</span>`;
    } else if (item.type === 'icon') {
      return `<i class="item-icon nnicon nicon-${item.icon || ''}"></i>`;
    } else {
      return `<img src="${item.src}" alt="">`;
    }
  }

  function getItemData(el) {
    return {
      type: el.dataset.type || 'image',
      src: el.dataset.src || '',
      text: el.dataset.text || '',
      color: el.dataset.color || '',
      icon: el.dataset.icon || '',
      tooltip: el.dataset.tooltip || 'prompt text'
    };
  }

  const menuItems = items === null ? DefaultInteractiveMenuItems : items;

  menuItems.forEach(function(item, index) {
    const itemEl = document.createElement('div');
    itemEl.className = index === selectedItemIndex
      ? 'nn-menu-item state-focus'
      : 'nn-menu-item state-default';
    itemEl.dataset.type = item.type || 'image';
    itemEl.dataset.src = item.src || '';
    itemEl.dataset.text = item.text || '';
    itemEl.dataset.color = item.color || '';
    itemEl.dataset.icon = item.icon || '';
    itemEl.dataset.tooltip = item.tooltip || 'prompt text';
    itemEl.innerHTML = `
      <div class="logo logo-main">
        ${renderItemContent(item)}
      </div>
      <div class="hover-overlay"></div>
      <div class="select-indicator"></div>
      <div class="logo-wrapper">
        <div class="logo-middle"></div>
        <div class="logo logo-focus">
          ${renderItemContent(item)}
        </div>
      </div>
    `;
    const logoWrapper = itemEl.querySelector('.logo-wrapper');
    const logoFocus = itemEl.querySelector('.logo-focus');
    const logoMain = itemEl.querySelector('.logo-main');
    const hoverOverlay = itemEl.querySelector('.hover-overlay');
    const selectIndicator = itemEl.querySelector('.select-indicator');

    itemEl.addEventListener('mouseenter', function() {
      const data = getItemData(itemEl);
      if (itemEl.classList.contains('state-focus')) {
        itemEl.className = 'nn-menu-item state-focus-hover';
      } else if (!itemEl.classList.contains('state-focus-hover')) {
        itemEl.className = 'nn-menu-item state-hover';
        const itemType = itemEl.dataset.type;
        if (itemType === 'icon') {
          const logoFocus = itemEl.querySelector('.logo-focus');
          if (logoFocus) {
            const focusIcon = logoFocus.querySelector('.item-icon, i[class*="icon-"]');
            if (focusIcon) {
              focusIcon.style.transform = 'scale(1.1)';
            }
          }
        }
      }
      if (!itemEl.querySelector('.nn-tooltip')) {
        itemEl.appendChild(createMenuTooltip(data.tooltip));
      }
    });

    itemEl.addEventListener('mouseleave', function() {
      if (itemEl.classList.contains('state-focus-hover')) {
        itemEl.className = 'nn-menu-item state-focus';
      } else if (itemEl.classList.contains('state-hover')) {
        itemEl.className = 'nn-menu-item state-default';
      }
      const tooltip = itemEl.querySelector('.nn-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });

    itemEl.addEventListener('click', function(event) {
      if (lockItemSelection && selectedItemIndex >= 0) {
        if (typeof item.onClick === 'function') {
          item.onClick({ item: item, index: index, event: event });
        }
        return;
      }

      const siblings = listEl.querySelectorAll('.nn-menu-item');
      siblings.forEach(function(sibling) {
        if (sibling !== itemEl) {
          sibling.className = 'nn-menu-item state-default';
        }
      });

      if (itemEl.classList.contains('state-focus')) {
        itemEl.className = 'nn-menu-item state-default';
      } else {
        const itemType = itemEl.dataset.type;
        if (itemType === 'icon') {
          const logoMain = itemEl.querySelector('.logo-main');
          const logoFocus = itemEl.querySelector('.logo-focus');
          if (logoMain && logoFocus) {
            const mainIcon = logoMain.querySelector('.item-icon, i[class*="icon-"]');
            if (mainIcon) {
              const currentScale = getComputedStyle(mainIcon).transform;
              if (currentScale && currentScale !== 'none') {
                const focusIcon = logoFocus.querySelector('.item-icon, i[class*="icon-"]');
                if (focusIcon) {
                  focusIcon.style.transition = 'none';
                  focusIcon.style.transform = currentScale;
                  setTimeout(function() {
                    focusIcon.style.transition = 'transform 0.3s ease-in-out';
                    focusIcon.style.transform = 'scale(1)';
                  }, 10);
                }
              }
            }
          }
        }
        itemEl.className = 'nn-menu-item state-focus';
      }

      if (typeof item.onClick === 'function') {
        item.onClick({ item: item, index: index, event: event });
      }
    });

    listEl.appendChild(itemEl);
  });

  const listWrapper = document.createElement('div');
  listWrapper.className = 'nn-menu-list-wrapper';
  listWrapper.appendChild(listEl);

  menu.appendChild(listWrapper);

  return menu;
}

function createMenuTooltip(text) {
  injectTooltipStyles();

  const tooltipEl = document.createElement('span');
  tooltipEl.className = 'nn-tooltip nn-tooltip-right';
  tooltipEl.style.display = 'inline-flex';
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = '100%';
  tooltipEl.style.marginLeft = '6px';
  tooltipEl.style.animation = 'nn-tooltip-appear-right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';

  const textEl = document.createElement('span');
  textEl.className = 'nn-tooltip-text';
  textEl.textContent = text;

  const beakEl = document.createElement('span');
  beakEl.className = 'nn-tooltip-beak';
  beakEl.style.top = '50%';
  beakEl.style.left = '-5px';
  beakEl.style.transform = 'translateY(-50%) rotate(135deg)';

  tooltipEl.appendChild(textEl);
  tooltipEl.appendChild(beakEl);

  return tooltipEl;
}

function createGameCommunityItem(options = {}) {
  const {
    state = 'default',
    src = '',
    tooltip = 'prompt text',
  } = options;

  injectMenuStyles();

  const itemEl = document.createElement('div');
  itemEl.className = `nn-menu-item state-${state}`;

  if (state === 'focus') {
    itemEl.innerHTML = `
      <div class="select-indicator"></div>
      <div class="logo">
        <div class="image"></div>
      </div>
    `;
  } else if (state === 'focus-hover') {
    itemEl.innerHTML = `
      <div class="select-indicator"></div>
      <div class="logo">
        <div class="image"></div>
      </div>
    `;
    itemEl.appendChild(createMenuTooltip(tooltip));
  } else if (state === 'hover') {
    itemEl.innerHTML = `
      <div class="logo">
        <div class="image"></div>
      </div>
      <div class="hover-overlay"></div>
      <div class="select-indicator"></div>
    `;
    itemEl.appendChild(createMenuTooltip(tooltip));
  } else {
    itemEl.innerHTML = `
      <div class="logo">
        <div class="image"></div>
      </div>
    `;
  }

  return itemEl;
}

function injectMenuStyles() {
  if (document.getElementById('nn-menu-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-menu-styles';
  style.textContent = MenuStyles;
  document.head.appendChild(style);
}
