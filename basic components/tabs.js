const TabsStyles = `
  .nn-tabs {
    display: inline-flex;
    align-items: center;
    background: var(--gray-2);
    font-family: var(--font-family-main);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
  }

  .nn-tabs-primary {
    column-gap: var(--space32);
    background: transparent;
  }

  .nn-tabs-secondary {
    column-gap: var(--space12);
    background: transparent;
  }

  .nn-tabs-tertiary {
    column-gap: var(--space4);
    background: var(--gray-10);
    border-radius: var(--border-radius-2r);
    padding: var(--space0);
  }

  .nn-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space6) var(--space10);
    color: var(--gray-6);
    cursor: pointer;
    transition: color 0.2s ease;
    white-space: nowrap;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .nn-tab:hover {
    color: var(--gray-4);
  }

  .nn-tab.active {
    color: var(--gray-3);
  }

  .nn-tab:disabled {
    color: var(--gray-7);
    cursor: not-allowed;
    opacity: 0.5;
  }

  .nn-tab-icon-left,
  .nn-tab-icon-right {
    display: inline-block;
    font-family: nnicon!important;
    font-size: inherit;
    line-height: 1;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
  }

.nn-tabs-primary .nn-tab-icon-left,
  .nn-tabs-primary .nn-tab-icon-right {
    font-size: var(--icon-size-x9);
}

  .nn-tabs-secondary .nn-tab-icon-left,
  .nn-tabs-secondary .nn-tab-icon-right,
  .nn-tabs-tertiary .nn-tab-icon-left,
  .nn-tabs-tertiary .nn-tab-icon-right,
  .nn-tabs-tertiary-box .nn-tab-icon-left,
  .nn-tabs-tertiary-box .nn-tab-icon-right {
    font-size: var(--icon-size-x8);
}

  .nn-tab-icon-left {
    margin-right: var(--space4);
  }

  .nn-tab-icon-right {
    margin-left: var(--space4);
  }

  .nn-tab-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
  }

  .nn-tab-badge {
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }

  .nn-tab-badge.nn-badge-dot-red {
    width: 8px;
    height: 8px;
  }

  .nn-tabs-primary .nn-tab-badge {
    top: 9px;
    right: 0;
    transform: translate(50%, -50%);
  }

  .nn-tabs-secondary .nn-tab-badge {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  /* Primary Tab - underline style */
  .nn-tabs-primary {
    position: relative;
  }

  .nn-tabs-primary .nn-tab-indicator {
    position: absolute;
    bottom: 0;
    height: 3px;
    border-radius: 99px 99px 0px 0px;
    background: var(--gray-3);
    transition: left 0.3s ease, right 0.3s ease;
  }

  .nn-tabs-primary .nn-tab {
    height: 38px;
    padding: var(--space10) var(--space0);
    font-weight: var(--font-weight-semibold);
  }

  .nn-tabs-primary .nn-tab.active {
    color: var(--gray-3);
  }

  /* Secondary Tab - bordered style */
  .nn-tabs-secondary .nn-tab {
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    padding: var(--space6) var(--space12);
    background: transparent;
    min-width: 24px;
    font-weight: var(--font-weight-normal);
  }

  .nn-tabs-secondary .nn-tab:hover {
    background: var(--gray-10);
    color: var(--gray-5);
  }

  .nn-tabs-secondary .nn-tab.active {
    background: var(--gray-9);
    border-color: var(--gray-8);
    color: var(--gray-3);
  }

  .nn-tabs-secondary .nn-tab:disabled {
    background: var(--gray-10);
    color: var(--gray-7);
  }

  /* Tertiary Tab - box container style */
  .nn-tabs-tertiary,
  .nn-tabs-tertiary-box {
    position: relative;
  }

  .nn-tabs-tertiary .nn-tab-indicator,
  .nn-tabs-tertiary-box .nn-tab-indicator {
    position: absolute;
    background: var(--gray-11);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-2r);
    transition: left 0.3s ease, right 0.3s ease;
    z-index: 1;
    pointer-events: none;
    height:32px;
  }

  .nn-tabs-tertiary .nn-tab,
  .nn-tabs-tertiary-box .nn-tab {
    position: relative;
    z-index: 2;
  }

  .nn-tabs-tertiary .nn-tab {
    padding: var(--space6) var(--space10);
    font-weight: var(--font-weight-normal);
    background: transparent;
  }

  .nn-tabs-tertiary .nn-tab.active {
    color: var(--gray-3);
  }

  .nn-tabs-tertiary .nn-tab:hover:not(.active):not(:disabled) {
    color: var(--gray-4);
  }

  /* Tertiary Tab with Box */
  .nn-tabs-tertiary-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    padding: var(--space0);
    font-family: var(--font-family-main);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-tabs-tertiary-box .nn-tab {
    padding: var(--space6) var(--space10);
    color: var(--gray-6);
    cursor: pointer;
    transition: color 0.2s ease;
    white-space: nowrap;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .nn-tabs-tertiary-box .nn-tab:hover {
    color: var(--gray-4);
  }

  .nn-tabs-tertiary-box .nn-tab.active {
    color: var(--gray-3);
    z-index: 2;
    position: relative;
  }

  .nn-tabs-tertiary-box .nn-tab:disabled {
    color: var(--gray-7);
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Dark Mode */
  .dark-mode .nn-tabs-tertiary {
    background: var(--gray-10);
  }

  .dark-mode .nn-tabs-tertiary-box {
    background: var(--gray-10);
  }

  .dark-mode .nn-tab {
    color: var(--gray-6);
  }

  .dark-mode .nn-tab:hover {
    color: var(--gray-5);
  }

  .dark-mode .nn-tab.active {
    color: var(--gray-3);
  }

  .dark-mode .nn-tabs-primary .nn-tab {
    color: var(--gray-6);
  }

  .dark-mode .nn-tabs-primary .nn-tab:hover {
    color: var(--gray-5);
  }

  .dark-mode .nn-tabs-primary .nn-tab.active {
    color: var(--gray-3);
  }

  .dark-mode .nn-tabs-primary .nn-tab-indicator {
    background: var(--gray-3);
  }

  .dark-mode .nn-tabs-secondary .nn-tab {
    border-color: var(--gray-8);
  }

  .dark-mode .nn-tabs-secondary .nn-tab:hover {
    background: var(--gray-10);
    color: var(--gray-5);
  }

  .dark-mode .nn-tabs-secondary .nn-tab.active {
    background: var(--gray-9);
    border-color: var(--gray-8);
    color: var(--gray-3);
  }

  .dark-mode .nn-tabs-secondary .nn-tab:disabled {
    background: var(--gray-10);
  }

  .dark-mode .nn-tabs-tertiary .nn-tab.active,
  .dark-mode .nn-tabs-tertiary-box .nn-tab.active {
    color: var(--gray-3);
  }
`;

function injectTabsStyles() {
  if (document.getElementById('nn-tabs-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-tabs-styles';
  style.textContent = TabsStyles;
  document.head.appendChild(style);
}

function createTabBadge(badgeOptions = {}) {
  const normalizedBadge = typeof badgeOptions === 'object' && badgeOptions !== null
    ? badgeOptions
    : { text: String(badgeOptions) };
  const {
    text = '',
    variant = 'red',
    dot = false,
    size = dot ? 8 : 'small',
    stroke = { size: 1, color: 'gray-1' }
  } = normalizedBadge;

  const badgeEl = typeof window !== 'undefined' && typeof window.createBadge === 'function'
    ? window.createBadge({ text: String(text), variant, dot, size, stroke })
    : document.createElement('span');

  if (!badgeEl.classList.contains('nn-badge')) {
    badgeEl.className = dot ? 'nn-badge nn-badge-dot-red' : 'nn-badge nn-badge-red';
    if (!dot) {
      badgeEl.textContent = String(text);
    }
  }

  badgeEl.classList.add('nn-tab-badge');
  return badgeEl;
}

function appendTabContent(tabEl, tab) {
  if (tab.iconLeft) {
    const leftIcon = document.createElement('i');
    leftIcon.className = `nn-tab-icon-left ${tab.iconLeft}`;
    tabEl.appendChild(leftIcon);
  }

  const label = document.createElement('span');
  label.className = 'nn-tab-label';
  label.textContent = tab.name || '';
  tabEl.appendChild(label);

  if (tab.iconRight) {
    const rightIcon = document.createElement('i');
    rightIcon.className = `nn-tab-icon-right ${tab.iconRight}`;
    tabEl.appendChild(rightIcon);
  }

  if (tab.badge !== undefined && tab.badge !== null && tab.badge !== false) {
    tabEl.appendChild(createTabBadge(tab.badge));
  }
}

function createTabs(options = {}) {
  injectTabsStyles();

  const {
    type = 'primary',
    tabs = [],
    defaultActive = 0,
    onChange
  } = options;

  const wrapper = document.createElement('div');
  const isTertiaryBox = type === 'tertiary-box';
  const isTertiary = type === 'tertiary';

  wrapper.className = isTertiaryBox ? 'nn-tabs nn-tabs-tertiary-box' : `nn-tabs nn-tabs-${type}`;

  const isPrimary = type === 'primary';
  const hasIndicator = isPrimary || isTertiary || isTertiaryBox;
  let indicator = null;

  function updateIndicator() {
    if (!hasIndicator || !indicator) return;
    const activeTab = wrapper.querySelector('.nn-tab.active');
    if (!activeTab) return;
    const tabRect = activeTab.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    indicator.style.left = (tabRect.left - wrapperRect.left) + 'px';
    indicator.style.right = (wrapperRect.right - tabRect.right) + 'px';
  }

  if (hasIndicator) {
    indicator = document.createElement('div');
    indicator.className = 'nn-tab-indicator';
    wrapper.appendChild(indicator);
  }

  const tabItems = tabs.map((tab, index) => {
    const tabEl = document.createElement('span');
    tabEl.className = 'nn-tab';
    tabEl.dataset.index = index;

    appendTabContent(tabEl, tab);

    if (tab.disabled) {
      tabEl.classList.add('disabled');
      tabEl.dataset.disabled = 'true';
    }

    if (index === defaultActive) {
      tabEl.classList.add('active');
    }

    tabEl.addEventListener('click', () => {
      if (tabEl.dataset.disabled === 'true') return;

      const currentActive = wrapper.querySelector('.nn-tab.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      tabEl.classList.add('active');

      updateIndicator();

      if (onChange) {
        onChange({ index, tab, tabs });
      }
    });

    return tabEl;
  });

  tabItems.forEach(item => wrapper.appendChild(item));

  if (hasIndicator && indicator) {
    requestAnimationFrame(updateIndicator);

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updateIndicator);
      resizeObserver.observe(wrapper);
      tabItems.forEach(item => resizeObserver.observe(item));
      wrapper.__nnTabsResizeObserver = resizeObserver;
    } else if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateIndicator, { passive: true });
    }
  }

  return wrapper;
}

function createTabItem(options = {}) {
  injectTabsStyles();

  const {
    type = 'primary',
    name = '',
    disabled = false,
    iconLeft = null,
    iconRight = null,
    badge = null
  } = options;

  const tabEl = document.createElement('span');
  tabEl.className = `nn-tab nn-tab-${type}`;

  appendTabContent(tabEl, { name, iconLeft, iconRight, badge });

  if (disabled) {
    tabEl.classList.add('disabled');
    tabEl.dataset.disabled = 'true';
  }

  return tabEl;
}

if (typeof window !== 'undefined') {
  window.injectTabsStyles = injectTabsStyles;
  window.createTabs = createTabs;
  window.createTabItem = createTabItem;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectTabsStyles,
    createTabs,
    createTabItem
  };
}
