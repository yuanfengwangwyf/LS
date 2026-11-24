const SwitchStyles = `
  .nn-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    border: none;
    border-radius: var(--border-radius-2r);
    background: var(--nn-switch-track-bg, var(--gray-8));
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    box-sizing: border-box;
    font-family: var(--font-family-main);
    opacity: var(--nn-switch-opacity, 1);
    --nn-switch-track-bg: var(--gray-8);
    --nn-switch-thumb-bg: var(--White-A70);
    --nn-switch-thumb-color: transparent;
    --nn-switch-thumb-shadow: 0 0.4px 0.45px rgba(0, 0, 0, 0.06), 0 1px 1.5px rgba(0, 0, 0, 0.1);
    --nn-switch-opacity: 1;
  }

  .nn-switch:focus {
    outline: none;
  }

  .nn-switch:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-switch.nn-switch-large {
    width: 48px;
    height: 24px;
    --nn-switch-thumb-size: 18px;
    --nn-switch-thumb-offset: 3px;
    --nn-switch-thumb-translate: 24px;
    --nn-switch-thumb-radius: var(--border-radius-2r);
  }

  .nn-switch.nn-switch-default {
    width: 40px;
    height: 20px;
    --nn-switch-thumb-size: 16px;
    --nn-switch-thumb-offset: 2px;
    --nn-switch-thumb-translate: 20px;
    --nn-switch-thumb-radius: 1px;
  }

  .nn-switch.nn-switch-small {
    width: 32px;
    height: 16px;
    --nn-switch-thumb-size: 12px;
    --nn-switch-thumb-offset: 2px;
    --nn-switch-thumb-translate: 16px;
    --nn-switch-thumb-radius: 1px;
  }

  .nn-switch__thumb {
    position: absolute;
    top: 50%;
    left: var(--nn-switch-thumb-offset);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--nn-switch-thumb-size);
    height: var(--nn-switch-thumb-size);
    border-radius: var(--nn-switch-thumb-radius);
    background: var(--nn-switch-thumb-bg);
    color: var(--nn-switch-thumb-color);
    box-shadow: var(--nn-switch-thumb-shadow);
    transform: translate(0, -50%);
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .nn-switch[data-checked="true"] {
    --nn-switch-track-bg: var(--gray-15);
    --nn-switch-thumb-bg: var(--Neutral-0);
  }

  .nn-switch[data-checked="false"] {
    --nn-switch-track-bg: var(--gray-8);
    --nn-switch-thumb-bg: var(--White-A70);
  }

  .nn-switch[data-disabled="true"][data-checked="true"] {
    --nn-switch-track-bg: var(--gray-6);
    --nn-switch-thumb-bg: var(--Neutral-0);
    --nn-switch-thumb-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);
    --nn-switch-opacity: 0.5;
  }

  .nn-switch[data-disabled="true"][data-checked="false"] {
    --nn-switch-track-bg: var(--gray-8);
    --nn-switch-thumb-bg: var(--White-A50);
    --nn-switch-thumb-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);
    --nn-switch-opacity: 0.5;
  }

  .nn-switch[data-state="icon"][data-checked="true"] .nn-switch__thumb {
    --nn-switch-thumb-color: var(--gray-15);
  }

  .nn-switch[data-state="icon"][data-checked="false"] .nn-switch__thumb {
    --nn-switch-thumb-color: var(--Black-A20);
  }

  .nn-switch[data-disabled="true"][data-state="icon"] .nn-switch__thumb {
    --nn-switch-thumb-color: var(--Black-A30);
  }

  .nn-switch[data-disabled="true"][data-state="icon"][data-checked="false"] .nn-switch__thumb {
    --nn-switch-thumb-color: var(--Black-A10);
  }

  .nn-switch-large[data-checked="true"] .nn-switch__thumb {
    transform: translate(var(--nn-switch-thumb-translate), -50%);
  }

  .nn-switch-default[data-checked="true"] .nn-switch__thumb {
    transform: translate(var(--nn-switch-thumb-translate), -50%);
  }

  .nn-switch-small[data-checked="true"] .nn-switch__thumb {
    transform: translate(var(--nn-switch-thumb-translate), -50%);
  }

  .nn-switch__lock {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    line-height: 1;
  }

  .nn-switch__lock .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-switch-large .nn-switch__lock {
    font-size: var(--icon-size-x6);
  }

  .nn-switch-default .nn-switch__lock {
    font-size: 10px;
  }

  .nn-switch-small .nn-switch__lock {
    font-size: 8px;
  }

  .nn-switch-password {
    display: inline-flex;
    align-items: center;
    position: relative;
    isolation: isolate;
    height: 24px;
    overflow: visible;
    width: 160px;
  }

  .nn-switch-password__switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
    height: 24px;
  }

  .nn-switch-password__panel {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-100, var(--space4));
    height: 24px;
    padding-left: var(--space60);
    padding-right: var(--space8);
    border-top-right-radius: var(--border-radius-2r);
    border-bottom-right-radius: var(--border-radius-2r);
    background: var(--gray-9);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    box-sizing: border-box;
    align-self: center;
    opacity: 0;
    overflow: visible;
    transform: translateX(-56px);
    transform-origin: left center;
    pointer-events: none;
    transition: opacity 0.1s ease,
      transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }

  .nn-switch-password--with-panel .nn-switch-password__panel {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
    transition: opacity 0.16s ease 0.08s,
      transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-switch-password__label,
  .nn-switch-password__code {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    color: var(--gray-6);
    white-space: nowrap;
  }

  .nn-switch-password__code {
    display: inline-block;
    min-width: 36px;
    text-align: center;
  }

  .nn-switch-password__code-mask {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
    vertical-align: top;
  }

  .nn-switch-password__code-mask-dots {
    position: absolute;
    left: 50%;
    top: 7px;
    width: 36px;
    height: 6px;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  .nn-switch-password__code-mask-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gray-6);
    flex-shrink: 0;
  }

  .nn-switch-password__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    border: none;
    padding: var(--space0);
    background: transparent;
    color: var(--gray-6);
    cursor: pointer;
    flex-shrink: 0;
  }

  .nn-switch-password__action .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
    color: inherit;
  }
`;

function injectSwitchStyles() {
  if (document.getElementById('nn-switch-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-switch-styles';
  style.textContent = SwitchStyles;
  document.head.appendChild(style);
}

function createBaseSwitch(options = {}) {
  const {
    checked = false,
    size = 'large',
    state = 'default',
    disabled = false,
    onChange = null,
    onClick = null,
    className = '',
    id = ''
  } = options;

  const normalizedState = state === 'lock' ? 'icon' : state;

  injectSwitchStyles();

  const button = document.createElement('button');
  button.type = 'button';
  button.className = ['nn-switch', `nn-switch-${size}`, className].filter(Boolean).join(' ');
  button.setAttribute('role', 'switch');
  button.setAttribute('aria-checked', checked ? 'true' : 'false');
  button.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  button.dataset.checked = checked ? 'true' : 'false';
  button.dataset.state = normalizedState;
  button.dataset.disabled = disabled ? 'true' : 'false';
  if (id) button.id = id;
  if (disabled) button.disabled = true;

  const thumb = document.createElement('span');
  thumb.className = 'nn-switch__thumb';

  if (normalizedState === 'icon') {
    const lock = document.createElement('span');
    lock.className = 'nn-switch__lock';
    lock.innerHTML = '<i class="nnicon nicon-a-lock-fillsuo-mianxing"></i>';
    thumb.appendChild(lock);
  }

  button.appendChild(thumb);

  button.addEventListener('click', function(event) {
    if (typeof onClick === 'function') {
      onClick(event);
    }

    if (disabled) {
      return;
    }

    const nextChecked = button.dataset.checked !== 'true';
    button.dataset.checked = nextChecked ? 'true' : 'false';
    button.setAttribute('aria-checked', nextChecked ? 'true' : 'false');

    if (typeof onChange === 'function') {
      onChange(nextChecked, event);
    }
  });

  return button;
}

function createPasswordToggleAction(options = {}) {
  const {
    icon = 'a-Hide-lineyincang-xianxing',
    tooltip = ''
  } = options;

  const action = document.createElement('button');
  action.type = 'button';
  action.className = 'nn-switch-password__action';
  action.innerHTML = `<i class="nnicon nicon-${icon}"></i>`;

  if (tooltip && typeof createTooltip === 'function') {
    return createTooltip({
      content: tooltip,
      direction: 'top',
      trigger: action
    });
  }

  return action;
}

function createPasswordSwitch(options = {}) {
  const {
    passwordState = 'empty',
    passwordCode = '8538',
    hiddenCode = '****',
    onChange = null,
    onClick = null,
    className = '',
    id = ''
  } = options;

  injectSwitchStyles();

  const wrapper = document.createElement('div');
  let isChecked = passwordState !== 'empty';
  let isHidden = passwordState === 'hidden';

  wrapper.className = ['nn-switch-password', isChecked ? 'nn-switch-password--with-panel' : '', className].filter(Boolean).join(' ');
  if (id) wrapper.id = id;

  const switchWrap = document.createElement('div');
  switchWrap.className = 'nn-switch-password__switch';
  const switchEl = createBaseSwitch({
    checked: isChecked,
    size: 'large',
    state: 'icon'
  });
  switchWrap.appendChild(switchEl);
  wrapper.appendChild(switchWrap);

  const panel = document.createElement('div');
  panel.className = 'nn-switch-password__panel';

  const label = document.createElement('span');
  label.className = 'nn-switch-password__label';
  label.textContent = '密码';
  panel.appendChild(label);

  const code = document.createElement('span');
  code.className = 'nn-switch-password__code';
  panel.appendChild(code);

  const eyeAction = createPasswordToggleAction({
    icon: isHidden ? 'a-check-linechakan-xianxing' : 'a-Hide-lineyincang-xianxing',
    tooltip: isHidden ? '显示密码' : '隐藏密码'
  });
  panel.appendChild(eyeAction);

  function updatePanelVisibility() {
    wrapper.classList.toggle('nn-switch-password--with-panel', isChecked);
  }

  function updatePasswordVisibility() {
    if (isHidden) {
      code.innerHTML = `
        <span class="nn-switch-password__code-mask" aria-label="${hiddenCode}">
          <span class="nn-switch-password__code-mask-dots" aria-hidden="true">
            <span class="nn-switch-password__code-mask-dot"></span>
            <span class="nn-switch-password__code-mask-dot"></span>
            <span class="nn-switch-password__code-mask-dot"></span>
            <span class="nn-switch-password__code-mask-dot"></span>
          </span>
        </span>
      `;
    } else {
      code.textContent = passwordCode;
    }
    const iconEl = eyeAction.querySelector('.nnicon');
    if (iconEl) {
      iconEl.className = `nnicon nicon-${isHidden ? 'a-check-linechakan-xianxing' : 'a-Hide-lineyincang-xianxing'}`;
    }
    const tooltipText = eyeAction.querySelector('.nn-tooltip-text');
    if (tooltipText) {
      tooltipText.textContent = isHidden ? '显示密码' : '隐藏密码';
    }
  }

  switchEl.addEventListener('click', function(event) {
    if (typeof onClick === 'function') {
      onClick(event);
    }
    isChecked = switchEl.dataset.checked === 'true';
    updatePanelVisibility();
    if (typeof onChange === 'function') {
      onChange(isChecked, event);
    }
  });

  eyeAction.addEventListener('click', function(event) {
    event.stopPropagation();
    isHidden = !isHidden;
    updatePasswordVisibility();
  });

  updatePanelVisibility();
  updatePasswordVisibility();
  wrapper.appendChild(panel);
  return wrapper;
}

function createSwitch(options = {}) {
  const normalizedState = options.state === 'lock' ? 'icon' : options.state;

  if (normalizedState === 'password') {
    return createPasswordSwitch(options);
  }

  return createBaseSwitch({
    ...options,
    state: normalizedState
  });
}

function nnSwitch(options) {
  return createSwitch(options);
}

if (typeof window !== 'undefined') {
  window.createSwitch = createSwitch;
  window.nnSwitch = nnSwitch;
  window.injectSwitchStyles = injectSwitchStyles;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createSwitch, nnSwitch, injectSwitchStyles };
}
