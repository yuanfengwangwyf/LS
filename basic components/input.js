const InputStyles = `
  .nn-input-wrapper {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-family: var(--font-family-main);
  }

  .nn-input {
    display: flex;
    align-items: center;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    padding: var(--space10) var(--space12) var(--space10) var(--space12);
    width: 240px;
    height: 40px;
    font-family: inherit;
    color: var(--gray-4);
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  .nn-input::placeholder {
    color: var(--gray-6);
  }

  .nn-input:focus {
    outline: none;
  }

  .nn-input:disabled {
    opacity: 1;
    cursor: not-allowed;
    pointer-events: none;
    justify-content: center;
  }

  .nn-input:disabled::placeholder {
    color: var(--gray-7);
  }

  /* ==================== SIZE VARIANTS ==================== */
  .nn-input.nn-input-default {
    width: 240px;
    height: 32px;
    padding: var(--space6) var(--space12) var(--space6) var(--space12);
    font-size: 14px;
    line-height: 16px;
  }

  .nn-input.nn-input-large {
    width: 240px;
    height: 40px;
    padding: var(--space10) var(--space12) var(--space10) var(--space12);
    font-size: 14px;
    line-height: 20px;
  }

  /* ==================== STATE: HOVER (via CSS :hover) ==================== */
  .nn-input:hover {
    background: var(--gray-9);
  }

  /* ==================== STATE: ACTIVE (FOCUS) ==================== */
  .nn-input:focus {
    border-color: var(--gray-7);
    background: var(--gray-10);
  }

  /* ==================== STATE: ERROR ==================== */
  .nn-input.nn-input-error {
    border-color: var(--Red);
    background: var(--gray-10);
  }

  .nn-input.nn-input-error::placeholder {
    color: var(--gray-6);
  }

  .nn-input.nn-input-error:focus {
    border-color: var(--Red);
  }

  /* ==================== STATE: DISABLED ==================== */
  .nn-input.nn-input-disabled {
    border-color: var(--gray-9);
    background: var(--gray-10);
  }

  /* ==================== WITH CHAR COUNTER ==================== */
  .nn-input-wrapper.nn-input-char-limit {
    column-gap: var(--space0);
  }

  .nn-input-wrapper.nn-input-char-limit .nn-input {
    padding-right: var(--space48);
  }

  .nn-input-char-counter {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-6);
    pointer-events: none;
    white-space: nowrap;
  }

  .nn-input-wrapper.nn-input-char-limit.nn-input-error .nn-input-char-counter {
    color: var(--Red);
  }

  /* ==================== WITH SEARCH ICON ==================== */
  .nn-input-wrapper.nn-input-search {
    column-gap: var(--space0);
  }

  .nn-input-wrapper.nn-input-search .nn-input {
    padding-right: var(--space40);
  }

  .nn-input-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    cursor: pointer;
    color: var(--gray-6);
    transition: color 0.2s;
  }

  .nn-input-icon:hover {
    color: var(--gray-5);
  }

  .nn-input-icon .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-input-icon.nn-input-clear {
    display: none;
  }

  .nn-input-wrapper.nn-input-search-has-value .nn-input-icon.nn-input-clear {
    display: inline-flex;
  }

  .nn-input-wrapper.nn-input-search-has-value .nn-input-icon.nn-input-search-icon {
    display: none;
  }

  /* ==================== WITH PREFIX ICON ==================== */
  .nn-input-wrapper.nn-input-has-prefix .nn-input {
    padding-left: var(--space40);
  }

  .nn-input-prefix-icon {
    position: absolute;
    left: var(--space10);
    top: 50%;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    color: var(--Esports-Blue-LD);
    pointer-events: none;
    transform: translateY(-50%);
  }

  .nn-input-prefix-icon img,
  .nn-input-prefix-icon svg,
  .nn-input-prefix-icon .nnicon {
    display: block;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  /* ==================== EFFECT: SHINE BORDER ==================== */
  .nn-input-wrapper.nn-input-effect-shine {
    border-radius: var(--border-radius-2r);
    overflow: visible;
    isolation: isolate;
  }

  .nn-input-wrapper.nn-input-effect-shine::before {
    content: "";
    position: absolute;
    inset: calc(var(--Search-Shine-Inset) * -1);
    z-index: 0;
    padding: var(--space4);
    border-radius: calc(var(--border-radius-2r) + var(--Search-Shine-Inset));
    background-image:
      radial-gradient(
        transparent,
        transparent,
        var(--Search-Shine-Start, var(--campaign-panel-light, var(--Link))),
        var(--Search-Shine-End, var(--Purple)),
        transparent,
        transparent
      );
    background-size: 300% 300%;
    -webkit-mask:
      linear-gradient(var(--Neutral-1) 0 0) content-box,
      linear-gradient(var(--Neutral-1) 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(var(--Neutral-1) 0 0) content-box,
      linear-gradient(var(--Neutral-1) 0 0);
    mask-composite: exclude;
    pointer-events: none;
    opacity: 1;
    animation:
      nn-input-shine-border 2.8s linear infinite,
      nn-input-shine-exit 5.6s ease forwards;
    filter: var(--Search-Shine-Filter, none);
    will-change: background-position, opacity;
  }

  .nn-input-wrapper.nn-input-effect-shine .nn-input {
    position: relative;
    z-index: 1;
  }

  .nn-input-wrapper.nn-input-effect-shine .nn-input-icon,
  .nn-input-wrapper.nn-input-effect-shine .nn-input-prefix-icon {
    z-index: 1;
  }

  @keyframes nn-input-shine-border {
    0% { background-position: 50% 0%; }
    6.25% { background-position: 70% 4%; }
    12.5% { background-position: 85% 15%; }
    18.75% { background-position: 96% 30%; }
    25% { background-position: 100% 50%; }
    31.25% { background-position: 96% 70%; }
    37.5% { background-position: 85% 85%; }
    43.75% { background-position: 70% 96%; }
    50% { background-position: 50% 100%; }
    56.25% { background-position: 30% 96%; }
    62.5% { background-position: 15% 85%; }
    68.75% { background-position: 4% 70%; }
    75% { background-position: 0% 50%; }
    81.25% { background-position: 4% 30%; }
    87.5% { background-position: 15% 15%; }
    93.75% { background-position: 30% 4%; }
    100% { background-position: 50% 0%; }
  }

  @keyframes nn-input-shine-exit {
    0%, 89% { opacity: 1; }
    100% { opacity: 0; }
  }

  /* ==================== TEXTAREA TYPE ==================== */
  .nn-input-wrapper.nn-input-textarea-wrapper {
    position: relative;
    display: inline-flex;
  }

  .nn-input.nn-input-textarea {
    width: 400px;
    height: 160px;
    padding: var(--space8) var(--space12);
    padding-bottom: var(--space28);
    border-radius: var(--border-radius-2r);
    resize: none;
    overflow: auto;
    flex-direction: column;
    align-items: flex-start;
    row-gap: var(--space6);
  }

  .nn-input.nn-input-textarea::placeholder {
    color: var(--gray-6);
  }

  .nn-input-textarea-counter {
    position: absolute;
    right: 11px;
    bottom: 7px;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-6);
    opacity: 0.7;
    pointer-events: none;
    white-space: nowrap;
  }

  /* ==================== WITH LINK COPY ==================== */
  .nn-input-wrapper.nn-input-link-copy {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    padding: var(--space0);
    width: 240px;
    height: 40px;
    column-gap: var(--space0);
  }

  .nn-input-wrapper.nn-input-link-copy.nn-input-default {
    height: 32px;
  }

  .nn-input-link-icon {
    display: inline-flex;
    align-items: center;
    margin-left: var(--space12);
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-6);
    flex-shrink: 0;
  }

  .nn-input-link-icon svg {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    fill: currentColor;
  }

  .nn-input-wrapper.nn-input-link-copy .nn-input {
    flex: 1;
    border: none;
    background: transparent;
    padding: var(--space0) var(--space6) var(--space0) var(--space6);
    height: 100%;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray-4);
  }

  .nn-input-wrapper.nn-input-link-copy .nn-input:hover {
    background: transparent;
  }

  .nn-input-wrapper.nn-input-link-copy .nn-input:focus {
    outline: none;
    border: none;
    background: transparent;
  }

  .nn-input-wrapper.nn-input-link-copy .nn-input-copy-btn {
    flex-shrink: 0;
    margin-right: var(--space4);
  }

  /* ==================== COPY TIPS ==================== */
  .nn-input-copy-tips {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--gray-3);
    color: var(--gray-1);
    padding: var(--space12) var(--space24);
    border-radius: var(--border-radius-8r);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .nn-input-copy-tips.nn-input-tips-visible {
    opacity: 1;
  }

  /* ==================== DARK MODE ==================== */
  .dark-mode .nn-input::placeholder {
    color: var(--gray-6);
  }

  .dark-mode .nn-input.nn-input-error::placeholder {
    color: var(--gray-6);
  }

  .dark-mode .nn-input-char-counter {
    color: var(--gray-6);
  }

  .dark-mode .nn-input-icon {
    color: var(--gray-6);
  }

  .dark-mode .nn-input-icon:hover {
    color: var(--gray-5);
  }

  .dark-mode .nn-input-link-icon {
    color: var(--gray-6);
  }

  .dark-mode .nn-input-copy-tips {
    background: var(--gray-3);
    color: var(--gray-1);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-input-wrapper.nn-input-effect-shine::before {
      opacity: 0;
      animation: none;
    }
  }
`;

function injectInputStyles() {
  const existing = document.getElementById('nn-input-styles');
  if (existing) {
    existing.textContent = InputStyles;
    return;
  }
  const style = document.createElement('style');
  style.id = 'nn-input-styles';
  style.textContent = InputStyles;
  document.head.appendChild(style);
}

function createInput(options = {}) {
  injectInputStyles();

  const {
    placeholder = 'Placeholder',
    value = '',
    state = 'default',
    size = 'large',
    type = 'default',
    disabled = false,
    shine = false,
    charLimit = null,
    showSearch = false,
    showLinkCopy = false,
    linkActionText = 'COPY',
    linkActionAriaLabel = '',
    prefixIcon = null,
    prefixIconLabel = '',
    effect = 'none',
    searchIconHtml = '<i class="nnicon nicon-a-search-linesousuo-xianxing"></i>',
    clearIconHtml = '<svg viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',
    onInput = null,
    onFocus = null,
    onBlur = null,
    onChange = null,
    onSearch = null,
    onClear = null,
    onCopy = null,
    onLinkAction = null,
    className = '',
    id = ''
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = 'nn-input-wrapper';
  if (shine || effect === 'shine') wrapper.classList.add('nn-input-effect-shine');

  const isTextarea = type === 'textarea';
  const inputEl = isTextarea ? document.createElement('textarea') : document.createElement('input');
  const classes = ['nn-input', isTextarea ? 'nn-input-textarea' : `nn-input-${size}`];

  if (className) {
    classes.push(className);
  }

  if (state === 'error') {
    classes.push('nn-input-error');
  }

  if (disabled) {
    classes.push('nn-input-disabled');
  }

  if (!isTextarea) {
    inputEl.type = 'text';
  }
  inputEl.className = classes.filter(Boolean).join(' ');
  inputEl.placeholder = placeholder;
  inputEl.value = value;

  if (id) {
    inputEl.id = id;
  }

  if (disabled) {
    inputEl.disabled = true;
  }

  let tipsEl = null;

  if (charLimit !== null) {
    wrapper.classList.add('nn-input-char-limit');

    const counter = document.createElement('span');
    counter.className = 'nn-input-char-counter';
    counter.textContent = `${value.length}/${charLimit}`;

    const updateCounter = () => {
      const len = inputEl.value.length;
      counter.textContent = `${len}/${charLimit}`;
      if (len > charLimit) {
        wrapper.classList.add('nn-input-error');
        inputEl.classList.add('nn-input-error');
      } else {
        wrapper.classList.remove('nn-input-error');
        inputEl.classList.remove('nn-input-error');
      }
    };

    inputEl.addEventListener('input', function(e) {
      updateCounter();
      if (onInput) {
        onInput({ target: inputEl, value: e.target.value });
      }
    });

    wrapper.appendChild(inputEl);
    wrapper.appendChild(counter);

    updateCounter();
  } else if (showSearch) {
    wrapper.classList.add('nn-input-search');

    const searchIcon = document.createElement('span');
    searchIcon.className = 'nn-input-icon nn-input-search-icon';
    searchIcon.innerHTML = searchIconHtml;

    const clearIcon = document.createElement('span');
    clearIcon.className = 'nn-input-icon nn-input-clear';
    clearIcon.innerHTML = clearIconHtml;

    const updateSearchState = () => {
      if (inputEl.value.length > 0) {
        wrapper.classList.add('nn-input-search-has-value');
      } else {
        wrapper.classList.remove('nn-input-search-has-value');
      }
    };

    inputEl.addEventListener('input', function(e) {
      updateSearchState();
      if (onInput) {
        onInput({ target: inputEl, value: e.target.value });
      }
    });

    clearIcon.addEventListener('click', function(e) {
      inputEl.value = '';
      updateSearchState();
      inputEl.focus();
      if (onClear) {
        onClear({ target: inputEl });
      }
      if (onInput) {
        onInput({ target: inputEl, value: '' });
      }
    });

    searchIcon.addEventListener('click', function(e) {
      if (onSearch) {
        onSearch({ target: inputEl, value: inputEl.value });
      }
    });

    wrapper.appendChild(inputEl);
    wrapper.appendChild(searchIcon);
    wrapper.appendChild(clearIcon);

    updateSearchState();
  } else if (showLinkCopy) {
    wrapper.classList.add('nn-input-link-copy');
    wrapper.classList.add(`nn-input-${size}`);

    const linkIcon = document.createElement('span');
    linkIcon.className = 'nn-input-link-icon';
    linkIcon.innerHTML = `<svg viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg>`;

    tipsEl = document.createElement('div');
    tipsEl.className = 'nn-input-copy-tips';
    tipsEl.textContent = 'Copied';

    const showTips = () => {
      tipsEl.classList.add('nn-input-tips-visible');
      setTimeout(() => {
        tipsEl.classList.remove('nn-input-tips-visible');
      }, 1500);
    };

    const handleLinkAction = function(e) {
      if (typeof onLinkAction === 'function') {
        onLinkAction({ event: e, target: inputEl, value: inputEl.value });
        return;
      }
      const textToCopy = inputEl.value;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showTips();
          if (onCopy) {
            onCopy({ target: inputEl, value: textToCopy });
          }
        }).catch(() => {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showTips();
          if (onCopy) {
            onCopy({ target: inputEl, value: textToCopy });
          }
        });
      }
    };

    if (
      typeof window === 'undefined' ||
      typeof window.createButton !== 'function' ||
      typeof window.injectButtonStyles !== 'function'
    ) {
      throw new Error('Input link copy requires the Button component. Load button.js before creating this input.');
    }
    window.injectButtonStyles();
    const copyBtn = window.createButton({
      text: linkActionText,
      variant: 'system',
      level: 'primary',
      size: size === 'default' ? 'small' : 'default',
      className: 'nn-input-copy-btn',
      onClick: handleLinkAction
    });
    if (linkActionAriaLabel) copyBtn.setAttribute('aria-label', linkActionAriaLabel);

    wrapper.appendChild(linkIcon);
    wrapper.appendChild(inputEl);
    wrapper.appendChild(copyBtn);
    document.body.appendChild(tipsEl);
  } else {
    if (isTextarea) {
      wrapper.classList.add('nn-input-textarea-wrapper');

      const textareaCounter = document.createElement('span');
      textareaCounter.className = 'nn-input-textarea-counter';
      const maxLength = options.charLimit || 500;
      textareaCounter.textContent = `0/${maxLength}`;

      const updateTextareaCounter = () => {
        textareaCounter.textContent = `${inputEl.value.length}/${maxLength}`;
      };

      inputEl.addEventListener('input', function(e) {
        updateTextareaCounter();
        if (onInput) {
          onInput({ target: inputEl, value: e.target.value });
        }
      });

      wrapper.appendChild(inputEl);
      wrapper.appendChild(textareaCounter);
      updateTextareaCounter();
    } else {
      if (onInput) {
        inputEl.addEventListener('input', function(e) {
          onInput({ target: inputEl, value: e.target.value });
        });
      }

      wrapper.appendChild(inputEl);
    }
  }

  if (prefixIcon && !isTextarea) {
    wrapper.classList.add('nn-input-has-prefix');
    const prefix = document.createElement('span');
    prefix.className = 'nn-input-prefix-icon';
    prefix.innerHTML = prefixIcon;
    prefix.setAttribute('aria-hidden', prefixIconLabel ? 'false' : 'true');
    if (prefixIconLabel) prefix.setAttribute('aria-label', prefixIconLabel);
    wrapper.insertBefore(prefix, inputEl);
  }

  if (onFocus) {
    inputEl.addEventListener('focus', function(e) {
      onFocus({ target: inputEl, value: e.target.value });
    });
  }

  if (onBlur) {
    inputEl.addEventListener('blur', function(e) {
      onBlur({ target: inputEl, value: e.target.value });
    });
  }

  if (onChange) {
    inputEl.addEventListener('change', function(e) {
      onChange({ target: inputEl, value: e.target.value });
    });
  }

  wrapper._inputEl = inputEl;
  wrapper._tipsEl = tipsEl;

  return wrapper;
}

function renderInputs(container, inputs) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;

  inputs.forEach(options => {
    const input = createInput(options);
    container.appendChild(input);
  });
}

function nnInput(options) {
  injectInputStyles();
  return createInput(options);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createInput, renderInputs, nnInput, injectInputStyles };
}

if (typeof window !== 'undefined') {
  window.createInput = createInput;
  window.renderInputs = renderInputs;
  window.nnInput = nnInput;
  window.injectInputStyles = injectInputStyles;
}
