const LabelStyles = `
  .nn-label {
    --nn-label-color: var(--gray-5);
    --nn-label-bg: var(--gray-9);
    --nn-label-border: transparent;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space2);
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid var(--nn-label-border);
    border-radius: var(--border-radius-2r);
    background: var(--nn-label-bg);
    color: var(--nn-label-color);
    font-family: var(--font-family-main);
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    vertical-align: middle;
    box-sizing: border-box;
  }

  .nn-label__text,
  .nn-label__icon {
    position: relative;
    z-index: 1;
  }

  .nn-label__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: currentColor;
    line-height: 1;
  }

  .nn-label__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-label--size-s {
    min-height: 16px;
    padding: var(--space2) var(--space4);
    font-size: 10px;
    line-height: 12px;
  }

  .nn-label--size-d {
    min-height: 20px;
    padding: var(--space2) var(--space6);
    font-size: 12px;
    line-height: 16px;
  }

  .nn-label--size-m {
    min-height: 24px;
    padding: var(--space4) var(--space6);
    font-size: 12px;
    line-height: 16px;
  }

  .nn-label--size-l {
    min-height: 28px;
    padding: var(--space4) var(--space8);
    font-size: 14px;
    line-height: 20px;
  }

  .nn-label--size-s .nn-label__icon,
  .nn-label--size-d .nn-label__icon {
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    font-size: var(--icon-size-x6);
  }

  .nn-label--size-m .nn-label__icon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    font-size: var(--icon-size-x7);
  }

  .nn-label--size-l .nn-label__icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
  }

  .nn-label--color-neutral {
    --nn-label-color-base: var(--gray-5);
    --nn-label-bg-soft: var(--gray-9);
    --nn-label-text-on-solid: var(--gray-2);
    --nn-label-border-base: var(--gray-7);
  }

  .nn-label--color-blue {
    --nn-label-color-base: var(--Esports-Blue-LD);
    --nn-label-bg-soft: color-mix(in srgb, var(--Esports-Blue-LD) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Esports-Blue-LD) 30%, transparent);
  }

  .nn-label--color-green {
    --nn-label-color-base: var(--Green);
    --nn-label-bg-soft: color-mix(in srgb, var(--Green) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Green) 30%, transparent);
  }

  .nn-label--color-red {
    --nn-label-color-base: var(--Red);
    --nn-label-bg-soft: color-mix(in srgb, var(--Red) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Red) 30%, transparent);
  }

  .nn-label--color-orange {
    --nn-label-color-base: var(--Orange);
    --nn-label-bg-soft: color-mix(in srgb, var(--Orange) 12%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Orange) 30%, transparent);
  }

  .nn-label--color-purple {
    --nn-label-color-base: var(--Purple);
    --nn-label-bg-soft: color-mix(in srgb, var(--Purple) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Purple) 30%, transparent);
  }

  .nn-label--color-magenta {
    --nn-label-color-base: var(--Magenta);
    --nn-label-bg-soft: color-mix(in srgb, var(--Magenta) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Magenta) 30%, transparent);
  }

  .nn-label--color-cyan {
    --nn-label-color-base: var(--Cyan);
    --nn-label-bg-soft: color-mix(in srgb, var(--Cyan) 12%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Cyan) 30%, transparent);
  }

  .nn-label--color-link {
    --nn-label-color-base: var(--Link);
    --nn-label-bg-soft: color-mix(in srgb, var(--Link) 10%, transparent);
    --nn-label-text-on-solid: var(--Neutral-0);
    --nn-label-border-base: color-mix(in srgb, var(--Link) 30%, transparent);
  }

  .nn-label--type-soft {
    --nn-label-color: var(--nn-label-color-base);
    --nn-label-bg: var(--nn-label-bg-soft);
    --nn-label-border: transparent;
  }

  .nn-label--type-soft.nn-label--color-neutral {
    --nn-label-color: var(--gray-5);
    --nn-label-bg: var(--gray-9);
  }

  .nn-label--type-outline {
    --nn-label-color: var(--nn-label-color-base);
    --nn-label-bg: transparent;
    --nn-label-border: var(--nn-label-border-base);
  }

  .nn-label--type-outline.nn-label--color-neutral {
    --nn-label-color: var(--gray-5);
    --nn-label-border: var(--gray-7);
  }

  .nn-label--type-subtle {
    --nn-label-color: var(--nn-label-color-base);
    --nn-label-bg: var(--nn-label-bg-soft);
    --nn-label-border: var(--nn-label-border-base);
  }

  .nn-label--type-subtle.nn-label--color-neutral {
    --nn-label-color: var(--gray-5);
    --nn-label-bg: var(--gray-9);
    --nn-label-border: var(--gray-7);
  }

  .nn-label--type-solid {
    --nn-label-color: var(--nn-label-text-on-solid);
    --nn-label-bg: var(--nn-label-color-base);
    --nn-label-border: transparent;
  }

  .nn-label--type-solid.nn-label--color-neutral {
    --nn-label-color: var(--gray-2);
    --nn-label-bg: var(--gray-3);
  }

  .nn-label--custom-color.nn-label--type-soft {
    --nn-label-color: var(--nn-label-custom-text, var(--nn-label-color-base));
    --nn-label-bg: var(--nn-label-custom-bg, var(--nn-label-bg-soft));
    --nn-label-border: transparent;
  }

  .nn-label--custom-color.nn-label--type-outline {
    --nn-label-color: var(--nn-label-custom-text, var(--nn-label-color-base));
    --nn-label-bg: var(--nn-label-custom-bg, transparent);
    --nn-label-border: var(--nn-label-custom-border, var(--nn-label-border-base));
  }

  .nn-label--custom-color.nn-label--type-subtle {
    --nn-label-color: var(--nn-label-custom-text, var(--nn-label-color-base));
    --nn-label-bg: var(--nn-label-custom-bg, var(--nn-label-bg-soft));
    --nn-label-border: var(--nn-label-custom-border, var(--nn-label-border-base));
  }

  .nn-label--custom-color.nn-label--type-solid {
    --nn-label-color: var(--nn-label-custom-text, var(--nn-label-text-on-solid));
    --nn-label-bg: var(--nn-label-custom-bg, var(--nn-label-color-base));
    --nn-label-border: var(--nn-label-custom-border, transparent);
  }

  .nn-label--type-history {
    gap: var(--space0);
    min-height: 28px;
    padding: var(--space4) var(--space8);
    overflow: visible;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    cursor: default;
  }

  .nn-label--type-history:hover,
  .nn-label--type-history.is-hover {
    gap: var(--space2);
    color: var(--gray-5);
    cursor: pointer;
  }

  .nn-label__delete {
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: 2;
    width: 16px;
    height: 16px;
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--gray-6);
    font-size: 16px;
    line-height: 1;
    opacity: 0;
    transform: scale(0.88);
    transition: opacity 0.16s ease, transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), color 0.16s ease;
    cursor: pointer;
    pointer-events: none;
  }

  .nn-label--type-history:hover .nn-label__delete,
  .nn-label--type-history.is-hover .nn-label__delete {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .nn-label__delete:hover {
    color: var(--gray-4);
  }

  .nn-label__delete.nnicon {
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-label--type-certification {
    width: var(--icon-size-x10);
    min-width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    min-height: var(--icon-size-x10);
    padding: var(--space0);
    border: 0;
    background: transparent;
    overflow: visible;
    cursor: default;
  }

  .nn-label__cert-icon {
    display: block;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    object-fit: contain;
    pointer-events: none;
  }

  .nn-label--type-certification .nn-tooltip {
    z-index: 9999;
  }
`;

function injectLabelStyles() {
  if (document.getElementById('nn-label-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-label-styles';
  style.textContent = LabelStyles;
  document.head.appendChild(style);
}

function normalizeLabelSize(size) {
  const value = String(size || 'l').toLowerCase();
  if (value === 's' || value === 'small') return 's';
  if (value === 'd' || value === 'default') return 'd';
  if (value === 'm' || value === 'medium') return 'm';
  return 'l';
}

function normalizeLabelType(type) {
  const value = String(type || 'soft').toLowerCase();
  if (value === 'history' || value === '历史记录') return 'history';
  if (
    value === 'certification' ||
    value === 'certified' ||
    value === 'verify' ||
    value === 'verified' ||
    value === 'auth' ||
    value === 'authentication' ||
    value === '认证标识'
  ) return 'certification';
  if (value === 'outline') return 'outline';
  if (value === 'subtle') return 'subtle';
  if (value === 'solid') return 'solid';
  return 'soft';
}

function normalizeCertificationColor(color) {
  const value = String(color || 'orange').toLowerCase();
  if (value === 'red' || value === 'corporate' || value === 'f8394f') return 'red';
  return 'blue';
}

function getCertificationTooltipText(color) {
  if (color === 'red') return '企业认证';
  return '游戏官方认证';
}

function hasCustomLabelColor(options = {}) {
  return Boolean(
    options.customColor ||
    options.customBackgroundColor ||
    options.customBorderColor ||
    options.customTextColor ||
    options.customTextOnSolid
  );
}

function applyCustomLabelColor(root, options = {}, type = 'soft') {
  if (!hasCustomLabelColor(options) || type === 'history' || type === 'certification') return;

  const {
    customColor = '',
    customBackgroundColor = '',
    customBorderColor = '',
    customTextColor = '',
    customTextOnSolid = ''
  } = options;
  const baseColor = customColor || customTextColor || customBackgroundColor || customBorderColor;

  root.classList.add('nn-label--custom-color');
  if (baseColor) {
    root.style.setProperty('--nn-label-color-base', baseColor);
    root.style.setProperty('--nn-label-bg-soft', `color-mix(in srgb, ${baseColor} 10%, transparent)`);
    root.style.setProperty('--nn-label-border-base', `color-mix(in srgb, ${baseColor} 30%, transparent)`);
    root.style.setProperty('--nn-label-text-on-solid', 'var(--Neutral-0)');
  }
  if (customBackgroundColor) root.style.setProperty('--nn-label-custom-bg', customBackgroundColor);
  if (customBorderColor) root.style.setProperty('--nn-label-custom-border', customBorderColor);
  if (customTextColor) root.style.setProperty('--nn-label-custom-text', customTextColor);
  if (customTextOnSolid && type === 'solid') root.style.setProperty('--nn-label-custom-text', customTextOnSolid);
}

function createLabelIcon(icon, fallbackClass) {
  const span = document.createElement('span');
  span.className = 'nn-label__icon';
  if (icon) {
    span.innerHTML = icon;
  } else {
    span.innerHTML = `<i class="nnicon ${fallbackClass}"></i>`;
  }
  return span;
}

function createLabel(options = {}) {
  const {
    text = 'LABLE',
    color = 'neutral',
    type = 'soft',
    size = 'l',
    iconBefore = false,
    iconAfter = false,
    beforeIcon = '',
    afterIcon = '',
    state = 'default',
    showDelete = true,
    deleteIcon = '',
    onDelete = null,
    customColor = '',
    customBackgroundColor = '',
    customBorderColor = '',
    customTextColor = '',
    customTextOnSolid = '',
    certColor = color,
    certIconSrc = '',
    certTooltip = '',
    className = '',
    id = ''
  } = options;

  injectLabelStyles();
  if (normalizeLabelType(type) === 'certification' && typeof window !== 'undefined' && typeof window.injectTooltipStyles === 'function') {
    window.injectTooltipStyles();
  }

  const safeType = normalizeLabelType(type);
  const safeSize = normalizeLabelSize(size);
  const safeCertColor = normalizeCertificationColor(certColor);
  const semanticLabelColors = ['neutral', 'blue', 'green', 'red', 'orange', 'purple', 'magenta', 'cyan', 'link'];
  const normalizedColor = String(color || 'neutral').toLowerCase();
  const isSemanticColor = semanticLabelColors.includes(normalizedColor);
  const safeColor = isSemanticColor ? normalizedColor : 'neutral';
  const inferredCustomColor = !isSemanticColor && color ? color : '';

  const root = document.createElement('span');
  root.className = [
    'nn-label',
    `nn-label--color-${safeColor}`,
    `nn-label--type-${safeType}`,
    `nn-label--size-${safeSize}`,
    safeType === 'certification' ? `nn-label--cert-${safeCertColor}` : '',
    safeType === 'history' && state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  applyCustomLabelColor(root, {
    customColor: customColor || inferredCustomColor,
    customBackgroundColor,
    customBorderColor,
    customTextColor,
    customTextOnSolid
  }, safeType);

  if (safeType === 'certification') {
    root.classList.add('nn-tooltip-primitive');
    const certIcon = document.createElement('img');
    certIcon.className = 'nn-label__cert-icon';
    certIcon.src = certIconSrc || (safeCertColor === 'red'
      ? '../image/Community Level/Corporate Certification.svg'
      : '../image/Community Level/Official Certification.svg');
    certIcon.alt = '';
    root.appendChild(certIcon);

    const tooltipEl = document.createElement('span');
    tooltipEl.className = 'nn-tooltip nn-tooltip-top';
    const tooltipText = document.createElement('span');
    tooltipText.className = 'nn-tooltip-text';
    tooltipText.textContent = certTooltip || getCertificationTooltipText(safeCertColor);
    const tooltipBeak = document.createElement('span');
    tooltipBeak.className = 'nn-tooltip-beak';
    tooltipEl.appendChild(tooltipText);
    tooltipEl.appendChild(tooltipBeak);
    root.appendChild(tooltipEl);
    return root;
  }

  if (iconBefore && safeType !== 'history') {
    root.appendChild(createLabelIcon(beforeIcon, 'nicon-a-add-linetianjia-xianxing'));
  }

  const textEl = document.createElement('span');
  textEl.className = 'nn-label__text';
  textEl.textContent = text;
  root.appendChild(textEl);

  if (iconAfter && safeType !== 'history') {
    root.appendChild(createLabelIcon(afterIcon, 'nicon-a-Arrowright-linejiantouyou-xianxing'));
  }

  if (safeType === 'history' && showDelete) {
    const deleteButton = document.createElement('i');
    deleteButton.className = 'nn-label__delete';
    if (deleteIcon) {
      const template = document.createElement('template');
      template.innerHTML = deleteIcon.trim();
      const customIcon = template.content.firstElementChild;
      if (customIcon) {
        deleteButton.className = customIcon.className;
        deleteButton.innerHTML = customIcon.innerHTML;
      }
    } else {
      deleteButton.className = 'nn-label__delete nnicon nicon-a-close-fillguanbi-mianxing';
    }
    deleteButton.classList.add('nn-label__delete');
    deleteButton.setAttribute('role', 'button');
    deleteButton.setAttribute('tabindex', '0');
    deleteButton.setAttribute('aria-label', '删除历史记录');
    const handleDelete = function(event) {
      event.stopPropagation();
      if (typeof onDelete === 'function') {
        onDelete({
          event,
          text,
          target: root
        });
      }
    };
    deleteButton.addEventListener('click', handleDelete);
    deleteButton.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleDelete(event);
      }
    });
    root.appendChild(deleteButton);
  }

  return root;
}

function renderLabels(container, labels = []) {
  if (!container) return;
  injectLabelStyles();
  container.innerHTML = '';
  labels.forEach(function(options) {
    container.appendChild(createLabel(options));
  });
}

if (typeof window !== 'undefined') {
  window.injectLabelStyles = injectLabelStyles;
  window.createLabel = createLabel;
  window.renderLabels = renderLabels;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectLabelStyles,
    createLabel,
    renderLabels
  };
}
