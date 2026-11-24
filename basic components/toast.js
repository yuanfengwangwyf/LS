const ToastStyles = `
  .nn-toast {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: 0 12px 36px var(--shadow);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
    max-height: calc(100vh - 96px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .nn-toast__close {
    position: absolute;
    top: 11px;
    right: 11px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: var(--space6);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-toast__close:hover {
    background: var(--gray-10);
    color: var(--gray-4);
  }

  .nn-toast__body {
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    width: 100%;
    padding: var(--space24);
    box-sizing: border-box;
  }

  .nn-toast__header {
    width: 100%;
    padding: var(--space0);
    box-sizing: border-box;
  }

  .nn-toast__title-row {
    display: flex;
    align-items: center;
    gap: var(--space8);
    min-height: 28px;
    padding-right: var(--space40);
  }

  .nn-toast__title {
    margin: var(--space0);
    color: var(--gray-3);
    font-size: 20px;
    line-height: 28px;
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
  }

  .nn-toast__subtitle {
    margin: var(--space8) var(--space0) var(--space0);
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-toast__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    box-sizing: border-box;
  }

  .nn-toast__content--default {
    padding: var(--space0);
  }

  .nn-toast--scrollable-content {
    overflow: hidden;
  }

  .nn-toast--scrollable-content .nn-toast__body {
    flex: 1 1 auto;
    gap: var(--space24);
    min-height: 0;
    height: 100%;
    padding: var(--space0);
    overflow: hidden;
  }

  .nn-toast--scrollable-content .nn-toast__header {
    padding: var(--space24) var(--space24) var(--space0);
  }

  .nn-toast--scrollable-content .nn-toast__content {
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }

  .nn-toast--scrollable-content .nn-toast__content--default {
    padding: var(--space0) var(--space24) var(--space24);
  }

  .nn-toast__placeholder {
    width: 100%;
    height: 40px;
    background: #fde0f4;
  }

  .nn-toast .nn-toast__content .nn-input-wrapper,
  .nn-toast .nn-toast__content .nn-input.nn-input {
    width: 100%;
  }

  .nn-toast__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space16);
    width: 100%;
    padding: var(--space0) var(--space24) var(--space24);
    box-sizing: border-box;
  }

  .nn-toast__footer-slot {
    display: flex;
    width: 100%;
    min-width: 0;
  }

  .nn-toast__footer-slot--vertical {
    flex-direction: column;
    gap: var(--space16);
  }

  .nn-toast__footer-slot--horizontal {
    flex-direction: row;
    gap: var(--space16);
  }

  .nn-toast__footer-slot .nn-btn {
    flex: 1 1 0;
    min-width: 96px;
    min-height: 40px;
  }

  .nn-toast__footer-slot--vertical .nn-btn {
    width: 100%;
  }

  .nn-toast__checkbox {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

function injectToastStyles() {
  if (document.getElementById('nn-toast-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-toast-styles';
  style.textContent = ToastStyles;
  document.head.appendChild(style);
}

function appendToastSlot(container, slot, context = {}) {
  if (!slot) return false;

  const resolved = typeof slot === 'function' ? slot(context) : slot;
  if (!resolved) return false;

  if (Array.isArray(resolved)) {
    resolved.forEach(function(node) {
      if (node instanceof Node) container.appendChild(node);
    });
    return true;
  }

  if (resolved instanceof Node) {
    container.appendChild(resolved);
    return true;
  }

  container.textContent = String(resolved);
  return true;
}

function createToastButton(config = {}) {
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton(Object.assign({
      text: 'button',
      variant: 'system',
      level: 'primary',
      size: 'large'
    }, config));
  }

  const fallback = document.createElement('button');
  fallback.type = 'button';
  fallback.textContent = config.text || 'button';
  fallback.style.cssText = 'min-height:40px;border:0;border-radius:2px;background:var(--gray-3);color:var(--gray-1);font:inherit;font-weight:var(--font-weight-medium);';
  return fallback;
}

function createToastDefaultContent() {
  if (typeof window !== 'undefined' && typeof window.createInput === 'function') {
    return window.createInput({
      placeholder: 'Placeholder',
      size: 'large'
    });
  }

  const placeholder = document.createElement('div');
  placeholder.className = 'nn-toast__placeholder';
  return placeholder;
}

function createToastFooter(options = {}) {
  const {
    layout = 'single-vertical',
    showCheckbox = false,
    checkboxText = 'Checkbox',
    checkboxChecked = false,
    buttons = null,
    slot = null,
    className = ''
  } = options;

  const footer = document.createElement('div');
  footer.className = ['nn-toast__footer', className].filter(Boolean).join(' ');

  if (showCheckbox) {
    const checkboxWrap = document.createElement('div');
    checkboxWrap.className = 'nn-toast__checkbox';
    if (typeof window !== 'undefined' && typeof window.createCheckbox === 'function') {
      checkboxWrap.appendChild(window.createCheckbox({
        text: checkboxText,
        checked: checkboxChecked,
        interactive: true
      }));
    } else {
      checkboxWrap.textContent = checkboxText;
    }
    footer.appendChild(checkboxWrap);
  }

  const slotWrap = document.createElement('div');
  slotWrap.className = [
    'nn-toast__footer-slot',
    layout === 'double-horizontal' ? 'nn-toast__footer-slot--horizontal' : 'nn-toast__footer-slot--vertical'
  ].join(' ');

  const hasCustomSlot = appendToastSlot(slotWrap, slot, options);
  if (!hasCustomSlot) {
    const resolvedButtons = buttons || (
      layout === 'single-vertical'
        ? [{ text: 'button', level: 'primary' }]
        : [
            { text: layout === 'double-horizontal' ? '主按钮' : 'button', level: 'primary' },
            { text: 'button', level: 'secondary' }
          ]
    );
    resolvedButtons.forEach(function(buttonConfig) {
      slotWrap.appendChild(createToastButton(buttonConfig));
    });
  }

  footer.appendChild(slotWrap);
  return footer;
}

function bindToastScrollbar(dialog, target, options = {}) {
  if (!dialog || !target || typeof window === 'undefined' || typeof window.createScrollbar !== 'function') {
    return null;
  }

  const top = options.top !== undefined ? options.top : function() {
    const dialogRect = dialog.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return Math.max(0, targetRect.top - dialogRect.top);
  };
  const bottom = options.bottom !== undefined ? options.bottom : function() {
    const dialogRect = dialog.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return Math.max(0, dialogRect.bottom - targetRect.bottom);
  };

  return window.createScrollbar({
    target,
    container: dialog,
    hoverTarget: options.hoverTarget || dialog,
    variant: 'thin',
    right: 4,
    top,
    bottom,
    minThumbSize: 24,
    alwaysVisible: Boolean(options.alwaysVisible),
    scrollHideDelay: options.scrollHideDelay,
    className: options.className || ''
  });
}

function createToast(options = {}) {
  const {
    title = 'Toast-title',
    subtitle = '',
    content = null,
    showHeader = true,
    showClose = true,
    showFooter = true,
    footer = {},
    className = '',
    id = '',
    scrollableContent = false,
    onClose = null
  } = options;

  injectToastStyles();
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectCheckboxStyles === 'function') {
    window.injectCheckboxStyles();
  }

  const root = document.createElement('div');
  root.className = [
    'nn-toast',
    scrollableContent ? 'nn-toast--scrollable-content' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;

  if (showClose) {
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'nn-toast__close';
    close.setAttribute('aria-label', '关闭');
    close.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
    close.addEventListener('click', function() {
      if (typeof onClose === 'function') {
        onClose(root);
      }
    });
    root.appendChild(close);
  }

  const body = document.createElement('div');
  body.className = 'nn-toast__body';

  if (showHeader) {
    const titleBlock = document.createElement('div');
    titleBlock.className = 'nn-toast__header';
    const titleRow = document.createElement('div');
    titleRow.className = 'nn-toast__title-row';
    const titleEl = document.createElement('h3');
    titleEl.className = 'nn-toast__title';
    titleEl.textContent = title;
    titleRow.appendChild(titleEl);
    titleBlock.appendChild(titleRow);

    if (subtitle) {
      const subtitleEl = document.createElement('p');
      subtitleEl.className = 'nn-toast__subtitle';
      subtitleEl.textContent = subtitle;
      titleBlock.appendChild(subtitleEl);
    }

    body.appendChild(titleBlock);
  }

  const contentWrap = document.createElement('div');
  contentWrap.className = 'nn-toast__content';
  const hasContent = appendToastSlot(contentWrap, content, options);
  if (!hasContent) {
    contentWrap.classList.add('nn-toast__content--default');
    contentWrap.appendChild(createToastDefaultContent());
  }
  body.appendChild(contentWrap);
  root.appendChild(body);

  if (showFooter) {
    root.appendChild(createToastFooter(footer));
  }

  if (!scrollableContent && typeof window !== 'undefined' && typeof window.createScrollbar === 'function') {
    bindToastScrollbar(root, root);
  }

  return root;
}

function renderToasts(container, toasts = []) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  injectToastStyles();
  container.innerHTML = '';
  toasts.forEach(function(options) {
    container.appendChild(createToast(options));
  });
}

if (typeof window !== 'undefined') {
  window.injectToastStyles = injectToastStyles;
  window.bindToastScrollbar = bindToastScrollbar;
  window.createToast = createToast;
  window.createToastFooter = createToastFooter;
  window.renderToasts = renderToasts;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectToastStyles,
    bindToastScrollbar,
    createToast,
    createToastFooter,
    renderToasts
  };
}
