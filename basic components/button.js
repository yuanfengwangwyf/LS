const ButtonStyles = `
  .nn-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-main);
    cursor: pointer;
    border: none;
    transition: background-color 0.2s ease;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .nn-btn.is-progress {
    overflow: hidden;
    background: var(--gray-3);
  }

  .nn-btn.is-progress:disabled {
    opacity: 1;
  }

  .nn-btn-progress__fill {
    position: absolute;
    inset: var(--space0) auto var(--space0) var(--space0);
    width: var(--nn-btn-progress);
    background: var(--gray-1);
    opacity: 0.2;
    pointer-events: none;
    transition: width 0.16s linear;
  }

  .nn-btn.is-progress .nn-btn-text,
  .nn-btn.is-progress .nn-btn-icon {
    position: relative;
    z-index: 1;
  }

  .nn-btn.nn-btn-text-caption .nn-btn-text {
    font-size: var(--font-size-caption);
  }

  .nn-btn.nn-btn-compact-label {
    height: 20px;
    min-height: 20px;
    padding: var(--space0) var(--space6);
    line-height: var(--line-height-caption);
  }

  .nn-btn:focus {
    outline: none;
  }

  .nn-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Icon styles */
  .nn-btn .nn-btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    font-size: var(--icon-size-x9);
    line-height: 1;
  }

  .nn-btn .nn-btn-icon svg {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
  }

  .nn-btn .nn-btn-icon i {
    width: 1em;
    height: 1em;
  }

  .nn-btn.nn-btn-small .nn-btn-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
  }

  .nn-btn.nn-btn-small .nn-btn-icon svg {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
  }

  .nn-btn.nn-btn-small {
    font-weight: var(--font-weight-normal);
  }

  .nn-btn.nn-btn-large .nn-btn-icon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
  }

  .nn-btn.nn-btn-large .nn-btn-icon svg {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
  }

  /* Icon spacing */
  .nn-btn.nn-btn-icon-left .nn-btn-icon {
    margin-right: var(--space4);
  }

  .nn-btn.nn-btn-icon-right .nn-btn-icon {
    margin-left: var(--space4);
  }

  .nn-btn.nn-btn-small:not(.nn-btn-icon-only) {
    padding-right: var(--space6);
    padding-left: var(--space6);
    font-size: var(--font-size-body);
  }

  .nn-btn.nn-btn-small.nn-btn-icon-left .nn-btn-icon {
    margin-right: var(--space2);
  }

  .nn-btn.nn-btn-small.nn-btn-icon-right .nn-btn-icon {
    margin-left: var(--space2);
  }

  .nn-btn.nn-btn-large {
    font-size: var(--font-size-subtitle);
  }

  /* Icon-only button (square) */
  .nn-btn.nn-btn-icon-only {
    padding: var(--space0);
    aspect-ratio: 1;
  }

  .nn-btn.nn-btn-icon-only.nn-btn-large {
    width: var(--icon-size-x20);
    height: var(--icon-size-x20);
  }

  .nn-btn.nn-btn-icon-only.nn-btn-default {
    width: var(--icon-size-x16);
    height: var(--icon-size-x16);
  }

  .nn-btn.nn-btn-icon-only.nn-btn-small {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
  }

  .nn-btn.nn-btn-icon-only.nn-btn-outline-icon {
    width: 36px;
    height: 36px;
    padding: var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    box-shadow: none;
  }

  .nn-btn.nn-btn-icon-only.nn-btn-outline-icon:hover,
  .nn-btn.nn-btn-icon-only.nn-btn-outline-icon[data-state="hover"] {
    border-color: var(--gray-8);
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-btn.nn-btn-icon-only.nn-btn-outline-icon:active,
  .nn-btn.nn-btn-icon-only.nn-btn-outline-icon[data-state="active"] {
    border-color: var(--gray-8);
    background: var(--gray-9);
    color: var(--gray-3);
  }

  /* ==================== SYSTEM TYPE ==================== */
  /* System - Primary */
  .nn-btn-system-primary {
    background: var(--gray-3);
    color: var(--gray-1);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-system-primary[data-state="hover"],
  .nn-btn-system-primary:hover {
    background: var(--gray-4);
  }

  .nn-btn-system-primary[data-state="active"],
  .nn-btn-system-primary:active {
    background: var(--gray-5);
  }

  .nn-btn-system-primary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-system-primary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-system-primary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* System - Secondary */
  .nn-btn-system-secondary {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--gray-4);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-system-secondary[data-state="hover"],
  .nn-btn-system-secondary:hover {
    background: var(--gray-8);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-system-secondary[data-state="active"],
  .nn-btn-system-secondary:active {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-system-secondary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-system-secondary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-system-secondary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* System - Tertiary */
  .nn-btn-system-tertiary {
    background: transparent;
    color: var(--gray-4);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-system-tertiary[data-state="hover"],
  .nn-btn-system-tertiary:hover {
    background: var(--gray-10);
  }

  .nn-btn-system-tertiary[data-state="active"],
  .nn-btn-system-tertiary:active {
    background: var(--gray-9);
  }

  .nn-btn-system-tertiary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-system-tertiary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-system-tertiary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* Overlay - Primary: compact controls placed over imagery */
  .nn-btn-overlay-primary {
    background: var(--Black-A60);
    color: var(--White-A80);
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-overlay-primary[data-state="hover"],
  .nn-btn-overlay-primary:hover {
    background: var(--Black-A70);
    color: var(--Neutral-0);
  }

  .nn-btn-overlay-primary[data-state="active"],
  .nn-btn-overlay-primary:active {
    background: var(--Black-A80);
  }

  /* ==================== PRIMARY TYPE ==================== */
  /* Primary - Primary */
  .nn-btn-primary-primary {
    background: var(--Esports-Blue);
    color: var(--Neutral-0);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-primary-primary[data-state="hover"],
  .nn-btn-primary-primary:hover {
    background: linear-gradient(0deg, var(--gray-8, rgba(0, 0, 0, 0.10)) 0%, var(--gray-8, rgba(0, 0, 0, 0.10)) 100%), var(--Esports-Blue);
  }

  .nn-btn-primary-primary[data-state="active"],
  .nn-btn-primary-primary:active {
    opacity: 0.9;
    background: var(--Esports-Blue);
  }

  .nn-btn-primary-primary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-primary-primary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-primary-primary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* Primary - Secondary */
  .nn-btn-primary-secondary {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--Esports-Blue);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-primary-secondary[data-state="hover"],
  .nn-btn-primary-secondary:hover {
    background: var(--gray-8);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-primary-secondary[data-state="active"],
  .nn-btn-primary-secondary:active {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-primary-secondary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-primary-secondary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-primary-secondary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* Primary - Tertiary */
  .nn-btn-primary-tertiary {
    background: transparent;
    color: var(--Esports-Blue);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-primary-tertiary[data-state="hover"],
  .nn-btn-primary-tertiary:hover {
    background: var(--gray-10);
  }

  .nn-btn-primary-tertiary[data-state="active"],
  .nn-btn-primary-tertiary:active {
    background: var(--gray-9);
  }

  .nn-btn-primary-tertiary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-primary-tertiary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-primary-tertiary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* ==================== WARNING TYPE ==================== */
  /* Warning - Primary */
  .nn-btn-warning-primary {
    background: var(--Red);
    color: var(--Neutral-0);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-warning-primary[data-state="hover"],
  .nn-btn-warning-primary:hover {
    background: linear-gradient(0deg, var(--gray-8, rgba(0, 0, 0, 0.10)) 0%, var(--gray-8, rgba(0, 0, 0, 0.10)) 100%), var(--Red);;
  }

  .nn-btn-warning-primary[data-state="active"],
  .nn-btn-warning-primary:active {
    opacity: 0.9;
    background: var(--Red);
  }

  .nn-btn-warning-primary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-warning-primary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-warning-primary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* Warning - Secondary */
  .nn-btn-warning-secondary {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--Red);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-warning-secondary[data-state="hover"],
  .nn-btn-warning-secondary:hover {
    background: var(--gray-8);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-warning-secondary[data-state="active"],
  .nn-btn-warning-secondary:active {
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
  }

  .nn-btn-warning-secondary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-warning-secondary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-warning-secondary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  }

  /* Warning - Tertiary */
  .nn-btn-warning-tertiary {
    background: transparent;
    color: var(--Red);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    letter-spacing: 0;
    border-radius: var(--border-radius-2r);
  }

  .nn-btn-warning-tertiary[data-state="hover"],
  .nn-btn-warning-tertiary:hover {
    background: var(--gray-10);
  }

  .nn-btn-warning-tertiary[data-state="active"],
  .nn-btn-warning-tertiary:active {
    background: var(--gray-9);
  }

  .nn-btn-warning-tertiary.nn-btn-large {
    padding: var(--space10) var(--space16);
  }

  .nn-btn-warning-tertiary.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .nn-btn-warning-tertiary.nn-btn-small {
    padding: var(--space4) var(--space8);
    font-size: var(--font-size-body);
    line-height: 16px;
  `;

function injectButtonStyles() {
  const existing = document.getElementById('nn-button-styles');
  if (existing) {
    existing.textContent = ButtonStyles;
    return;
  }
  const style = document.createElement('style');
  style.id = 'nn-button-styles';
  style.textContent = ButtonStyles;
  document.head.appendChild(style);
}

const ButtonIconSizeTokenMap = {
  8: 'var(--icon-size-x4)',
  10: 'var(--icon-size-x5)',
  12: 'var(--icon-size-x6)',
  14: 'var(--icon-size-x7)',
  16: 'var(--icon-size-x8)',
  18: 'var(--icon-size-x9)',
  20: 'var(--icon-size-x10)',
  24: 'var(--icon-size-x12)',
  28: 'var(--icon-size-x14)',
  32: 'var(--icon-size-x16)',
  36: 'var(--icon-size-x18)',
  40: 'var(--icon-size-x20)',
  44: 'var(--icon-size-x22)',
  48: 'var(--icon-size-x24)',
  52: 'var(--icon-size-x26)',
  60: 'var(--icon-size-x30)',
  64: 'var(--icon-size-x32)',
  80: 'var(--icon-size-x40)'
};

const ButtonDefaultIconSizeByButtonSize = {
  small: 'var(--icon-size-x8)',
  default: 'var(--icon-size-x9)',
  large: 'var(--icon-size-x10)'
};

function resolveButtonIconSize(size) {
  if (size == null || size === '') return null;
  if (typeof size === 'number') {
    return ButtonIconSizeTokenMap[size] || `${size}px`;
  }
  const normalizedSize = String(size).trim();
  const numericSize = Number(normalizedSize);
  if (!Number.isNaN(numericSize) && normalizedSize === String(numericSize)) {
    return ButtonIconSizeTokenMap[numericSize] || `${numericSize}px`;
  }
  return normalizedSize;
}

function createButton(options = {}) {
  const {
    text = 'button',
    type = 'button',
    variant = 'system',
    level = 'primary',
    size = 'large',
    textSize = null,
    disabled = false,
    icon = null,
    iconPosition = 'left',
    iconSize = null,
    iconGap = null,
    onClick = null,
    className = '',
    id = '',
    dataState = null,
    appearance = '',
    progress = null
  } = options;

  const btn = document.createElement('button');
  const classes = ['nn-btn', `nn-btn-${variant}-${level}`, `nn-btn-${size}`];
  let currentVariant = variant;
  let currentLevel = level;
  const normalizedProgress = progress == null
    ? null
    : Math.max(0, Math.min(100, Number(progress) || 0));

  if (textSize === 'caption') classes.push('nn-btn-text-caption');
  if (normalizedProgress != null) classes.push('is-progress');
  if (appearance) classes.push(`nn-btn-${appearance}`);

  if (icon && text && iconPosition === 'left') {
    classes.push('nn-btn-icon-left');
  }
  if (icon && text && iconPosition === 'right') {
    classes.push('nn-btn-icon-right');
  }
  if (icon && !text || iconPosition === 'only') {
    classes.push('nn-btn-icon-only');
  }

  if (className) {
    classes.push(className);
  }
  btn.type = type;
  btn.className = classes.filter(Boolean).join(' ');

  if (id) btn.id = id;
  if (disabled) btn.disabled = disabled;
  if (onClick) btn.addEventListener('click', onClick);
  if (dataState) btn.setAttribute('data-state', dataState);
  if (normalizedProgress != null) {
    btn.style.setProperty('--nn-btn-progress', normalizedProgress + '%');
    btn.setAttribute('aria-valuemin', '0');
    btn.setAttribute('aria-valuemax', '100');
    btn.setAttribute('aria-valuenow', String(normalizedProgress));
    const progressFill = document.createElement('span');
    progressFill.className = 'nn-btn-progress__fill';
    progressFill.setAttribute('aria-hidden', 'true');
    btn.appendChild(progressFill);
  }

  if (icon) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'nn-btn-icon';
    iconSpan.innerHTML = icon;
    const defaultIconSize = ButtonDefaultIconSizeByButtonSize[size] || ButtonDefaultIconSizeByButtonSize.default;
    const resolvedIconSize = resolveButtonIconSize(iconSize || defaultIconSize);
    if (resolvedIconSize) {
      iconSpan.style.cssText = `width: ${resolvedIconSize} !important; height: ${resolvedIconSize} !important; font-size: ${resolvedIconSize};`;
      const iconEl = iconSpan.querySelector('i, svg');
      if (iconEl) {
        if (iconEl.tagName === 'I') {
          iconEl.style.fontSize = resolvedIconSize;
        } else {
          iconEl.style.cssText = `width: ${resolvedIconSize} !important; height: ${resolvedIconSize} !important;`;
        }
      }
    }
    if (iconGap != null && text) {
      const resolvedIconGap = String(iconGap);
      if (iconPosition === 'right') {
        iconSpan.style.marginLeft = resolvedIconGap;
      } else if (iconPosition === 'left') {
        iconSpan.style.marginRight = resolvedIconGap;
      }
    }
    if (iconPosition === 'left' || iconPosition === 'only') {
      btn.appendChild(iconSpan);
      if (text && iconPosition !== 'only') {
        const textSpan = document.createElement('span');
        textSpan.className = 'nn-btn-text';
        textSpan.textContent = text;
        btn.appendChild(textSpan);
      }
    } else if (iconPosition === 'right') {
      if (text) {
        const textSpan = document.createElement('span');
        textSpan.className = 'nn-btn-text';
        textSpan.textContent = text;
        btn.appendChild(textSpan);
      }
      btn.appendChild(iconSpan);
    }
  } else if (text) {
    const textSpan = document.createElement('span');
    textSpan.className = 'nn-btn-text';
    textSpan.textContent = text;
    btn.appendChild(textSpan);
  }

  btn.setButtonText = function(nextText) {
    const resolvedText = nextText == null ? '' : String(nextText);
    let textSpan = btn.querySelector('.nn-btn-text');
    if (!textSpan && resolvedText) {
      textSpan = document.createElement('span');
      textSpan.className = 'nn-btn-text';
      const rightIcon = btn.classList.contains('nn-btn-icon-right')
        ? btn.querySelector('.nn-btn-icon')
        : null;
      if (rightIcon) {
        btn.insertBefore(textSpan, rightIcon);
      } else {
        btn.appendChild(textSpan);
      }
    }
    if (textSpan) textSpan.textContent = resolvedText;
    return btn;
  };

  btn.setButtonAppearance = function(nextAppearance = {}) {
    const nextVariant = nextAppearance.variant || currentVariant;
    const nextLevel = nextAppearance.level || currentLevel;
    btn.classList.remove(`nn-btn-${currentVariant}-${currentLevel}`);
    btn.classList.add(`nn-btn-${nextVariant}-${nextLevel}`);
    currentVariant = nextVariant;
    currentLevel = nextLevel;
    return btn;
  };

  return btn;
}

function renderButtons(container, buttons) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;

  buttons.forEach(options => {
    const btn = createButton(options);
    container.appendChild(btn);
  });
}

function nnButton(options) {
  injectButtonStyles();
  return createButton(options);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createButton, renderButtons, nnButton, injectButtonStyles };
}

if (typeof window !== 'undefined') {
  window.createButton = createButton;
  window.renderButtons = renderButtons;
  window.nnButton = nnButton;
  window.injectButtonStyles = injectButtonStyles;
}
