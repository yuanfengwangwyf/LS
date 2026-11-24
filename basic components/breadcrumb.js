const BreadcrumbStyles = `
  .nn-breadcrumb {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    color: var(--gray-6);
  }

  .nn-breadcrumb__item {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    padding: var(--space0);
    border: none;
    background: transparent;
    color: var(--gray-6);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    text-decoration: none;
    white-space: nowrap;
    appearance: none;
    -webkit-appearance: none;
  }

  button.nn-breadcrumb__item,
  a.nn-breadcrumb__item {
    cursor: pointer;
  }

  button.nn-breadcrumb__item:hover,
  a.nn-breadcrumb__item:hover,
  .nn-breadcrumb__item.is-hover {
    color: var(--Link);
    text-decoration: underline;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  button.nn-breadcrumb__item:focus,
  a.nn-breadcrumb__item:focus,
  .nn-breadcrumb__item.is-focus {
    outline: none;
    color: var(--Link);
    text-decoration: none;
  }

  .nn-breadcrumb__item.is-current {
    color: var(--gray-3);
    cursor: default;
  }

  .nn-breadcrumb__item.is-disabled {
    color: var(--gray-7);
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-breadcrumb__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: currentColor;
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-breadcrumb__icon .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-breadcrumb__separator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-breadcrumb__separator--slash {
    font-size: 14px;
    line-height: 20px;
  }

  .nn-breadcrumb__separator .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
  }
`;

function injectBreadcrumbStyles() {
  if (document.getElementById('nn-breadcrumb-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-breadcrumb-styles';
  style.textContent = BreadcrumbStyles;
  document.head.appendChild(style);
}

function createBreadcrumbIcon(icon) {
  if (!icon) return null;
  const wrap = document.createElement('span');
  wrap.className = 'nn-breadcrumb__icon';
  if (typeof icon === 'string' && icon.trim().startsWith('<')) {
    wrap.innerHTML = icon;
  } else {
    const iconEl = document.createElement('i');
    iconEl.className = ['nnicon', icon].filter(Boolean).join(' ');
    iconEl.setAttribute('aria-hidden', 'true');
    wrap.appendChild(iconEl);
  }
  return wrap;
}

function createBreadcrumbSeparator(type) {
  const separator = document.createElement('span');
  const safeType = type === 'slash' ? 'slash' : 'arrow';
  separator.className = [
    'nn-breadcrumb__separator',
    `nn-breadcrumb__separator--${safeType}`
  ].join(' ');
  separator.setAttribute('aria-hidden', 'true');
  separator.innerHTML = safeType === 'slash'
    ? '/'
    : '<i class="nnicon nicon-a-Arrowright-linejiantouyou-xianxing"></i>';
  return separator;
}

function createBreadcrumbItem(item = {}, index = 0, onNavigate = null, onSelect = null) {
  const {
    label = `上级页面${index + 1}`,
    href = '',
    current = false,
    disabled = false,
    state = '',
    iconBefore = '',
    iconAfter = ''
  } = item;

  const isCurrent = Boolean(current || state === 'current');
  const isDisabled = Boolean(disabled || state === 'disabled' || state === 'disable');
  const isInteractive = !isCurrent && !isDisabled;
  const tagName = isInteractive && href ? 'a' : isInteractive ? 'button' : 'span';
  const root = document.createElement(tagName);
  root.className = [
    'nn-breadcrumb__item',
    isCurrent ? 'is-current' : '',
    isDisabled ? 'is-disabled' : '',
    state === 'hover' ? 'is-hover' : '',
    state === 'focus' ? 'is-focus' : ''
  ].filter(Boolean).join(' ');

  if (tagName === 'button') root.type = 'button';
  if (tagName === 'a') root.href = href;
  if (isCurrent) root.setAttribute('aria-current', 'page');
  if (isDisabled) root.setAttribute('aria-disabled', 'true');

  const before = createBreadcrumbIcon(iconBefore);
  if (before) root.appendChild(before);

  const text = document.createElement('span');
  text.className = 'nn-breadcrumb__label';
  text.textContent = label;
  root.appendChild(text);

  const after = createBreadcrumbIcon(iconAfter);
  if (after) root.appendChild(after);

  if (isInteractive && typeof onNavigate === 'function') {
    root.addEventListener('click', function(event) {
      event.preventDefault();
      if (typeof onSelect === 'function') {
        onSelect(index);
      }
      onNavigate({ item, index, event });
    });
  } else if (isInteractive) {
    root.addEventListener('click', function(event) {
      event.preventDefault();
      if (typeof onSelect === 'function') {
        onSelect(index);
      }
    });
  }

  return root;
}

function createBreadcrumb(options = {}) {
  const {
    items = [
      { label: '上级页面' },
      { label: '上级页面' },
      { label: '上级页面' },
      { label: '上级页面' },
      { label: '当前页面', current: true }
    ],
    separator = 'arrow',
    className = '',
    id = '',
    onNavigate = null
  } = options;

  injectBreadcrumbStyles();

  let currentItems = items.map(function(item) {
    return { ...item };
  });

  const root = document.createElement('nav');
  root.className = ['nn-breadcrumb', className].filter(Boolean).join(' ');
  root.setAttribute('aria-label', 'Breadcrumb');
  if (id) root.id = id;

  function render() {
    root.innerHTML = '';
    currentItems.forEach(function(item, index) {
      root.appendChild(createBreadcrumbItem(item, index, onNavigate, setCurrentIndex));
      if (index < currentItems.length - 1) {
        root.appendChild(createBreadcrumbSeparator(separator));
      }
    });
  }

  function setCurrentIndex(nextIndex) {
    currentItems = currentItems.map(function(item, index) {
      return {
        ...item,
        current: index === nextIndex,
        state: item.state === 'current' && index !== nextIndex ? '' : item.state
      };
    });
    render();
  }

  render();

  return root;
}

function renderBreadcrumbs(container, breadcrumbs) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  breadcrumbs.forEach(function(options) {
    container.appendChild(createBreadcrumb(options));
  });
}

function nnBreadcrumb(options) {
  injectBreadcrumbStyles();
  return createBreadcrumb(options);
}

if (typeof window !== 'undefined') {
  window.injectBreadcrumbStyles = injectBreadcrumbStyles;
  window.createBreadcrumb = createBreadcrumb;
  window.renderBreadcrumbs = renderBreadcrumbs;
  window.nnBreadcrumb = nnBreadcrumb;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectBreadcrumbStyles,
    createBreadcrumb,
    renderBreadcrumbs,
    nnBreadcrumb
  };
}
