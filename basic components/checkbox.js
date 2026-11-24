const CheckboxStyles = `
  .nn-checkbox {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    position: relative;
    font-family: var(--font-family-main);
  }

  .nn-checkbox {
    border: none;
    background: transparent;
    padding: var(--space0);
    appearance: none;
    -webkit-appearance: none;
    text-align: left;
  }

  button.nn-checkbox:not(.is-disabled),
  button.nn-checkbox:not(.is-disabled) * {
    cursor: pointer !important;
  }

  .nn-checkbox:focus {
    outline: none;
  }

  .nn-checkbox__box {
    position: relative;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex-shrink: 0;
  }

  .nn-checkbox__mark {
    position: absolute;
    inset: 0;
    border: 1.5px solid var(--gray-8);
    border-radius: 2px;
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-checkbox__icon {
    position: absolute;
    left: 50%;
    top: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    width: var(--icon-size-x5);
    height: var(--icon-size-x5);
    font-size: var(--icon-size-x5);
    line-height: 1;
    color: var(--gray-5);
    opacity: 0;
  }

  .nn-checkbox__icon .nnicon {
    font-size: var(--icon-size-x5);
    line-height: 1;
  }

  .nn-checkbox__label {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    color: var(--gray-6);
    white-space: nowrap;
  }

  .nn-checkbox:hover .nn-checkbox__mark,
  .nn-checkbox.is-hover .nn-checkbox__mark {
    border-color: var(--gray-7);
    background: var(--gray-10);
  }

  .nn-checkbox:hover .nn-checkbox__label,
  .nn-checkbox.is-hover .nn-checkbox__label {
    color: var(--gray-5);
  }

  .nn-checkbox.is-focused .nn-checkbox__label {
    color: var(--gray-3);
  }

  .nn-checkbox.is-checked .nn-checkbox__mark {
    border-color: var(--gray-7);
    background: var(--gray-8);
  }

  .nn-checkbox.is-checked .nn-checkbox__icon {
    color: var(--gray-3);
    opacity: 1;
  }

  .nn-checkbox.is-half .nn-checkbox__mark {
    border-color: var(--gray-7);
    background: var(--gray-8);
  }

  .nn-checkbox.is-half .nn-checkbox__icon {
    opacity: 1;
  }

  .nn-checkbox.is-disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 1;
  }

  .nn-checkbox.is-disabled .nn-checkbox__mark {
    border-color: var(--gray-8);
    background: var(--gray-8);
  }

  .nn-checkbox.is-disabled.is-checked .nn-checkbox__mark {
    background: var(--gray-8);
    opacity: 1;
  }

  .nn-checkbox.is-disabled .nn-checkbox__label {
    color: var(--gray-7);
  }

  .nn-checkbox.is-disabled .nn-checkbox__icon {
    color: var(--gray-7);
  }

  .nn-checkbox.is-disabled.is-checked .nn-checkbox__icon {
    color: var(--gray-7);
    opacity: 1;
  }

  .nn-checkbox.is-disabled.is-focused .nn-checkbox__label {
    color: var(--gray-6);
  }

  .nn-checkbox.is-basic {
    gap: var(--space0);
  }
`;

function injectCheckboxStyles() {
  if (document.getElementById('nn-checkbox-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-checkbox-styles';
  style.textContent = CheckboxStyles;
  document.head.appendChild(style);
}

function createCheckbox(options = {}) {
  const {
    text = 'Checkbox',
    checked = false,
    half = false,
    disabled = false,
    hover = false,
    showLabel = true,
    interactive = false,
    className = '',
    id = '',
    onChange = null
  } = options;

  injectCheckboxStyles();

  const root = document.createElement(hover || interactive || typeof onChange === 'function' ? 'button' : 'span');
  root.className = [
    'nn-checkbox',
    showLabel ? '' : 'is-basic',
    checked ? 'is-checked' : '',
    half ? 'is-half' : '',
    disabled ? 'is-disabled' : '',
    hover ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');

  if (id) {
    root.id = id;
  }
  if (root.tagName === 'BUTTON') {
    root.type = 'button';
  }

  const box = document.createElement('span');
  box.className = 'nn-checkbox__box';

  const mark = document.createElement('span');
  mark.className = 'nn-checkbox__mark';
  box.appendChild(mark);

  const icon = document.createElement('span');
  icon.className = 'nn-checkbox__icon';
  icon.innerHTML = checked
    ? '<i class="nnicon nicon-a-check-boldwancheng-jiacu"></i>'
    : half
      ? '<i class="nnicon nicon-a-delete-fillshanchu-mianxing"></i>'
      : '<i class="nnicon nicon-a-check-boldwancheng-jiacu"></i>';
  box.appendChild(icon);

  root.appendChild(box);

  if (showLabel) {
    const label = document.createElement('span');
    label.className = 'nn-checkbox__label';
    label.textContent = text;
    root.appendChild(label);
  }

  if (!disabled && (interactive || typeof onChange === 'function')) {
    let currentChecked = checked;
    let currentHalf = half;
    let currentFocused = false;

    function syncState() {
      root.classList.toggle('is-checked', currentChecked);
      root.classList.toggle('is-half', currentHalf);
      root.classList.toggle('is-focused', currentFocused);
      icon.innerHTML = currentHalf
        ? '<i class="nnicon nicon-a-delete-fillshanchu-mianxing"></i>'
        : '<i class="nnicon nicon-a-check-boldwancheng-jiacu"></i>';
    }

    root.addEventListener('click', function() {
      const wasChecked = currentChecked;
      if (interactive) {
        currentChecked = !currentChecked;
        currentHalf = false;
        currentFocused = currentChecked;
        syncState();
      }
      if (typeof onChange === 'function') {
        onChange({ checked: !checked, half });
      }
    });
  }

  return root;
}

function renderCheckboxes(container, checkboxes) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  checkboxes.forEach(function(options) {
    container.appendChild(createCheckbox(options));
  });
}

function nnCheckbox(options) {
  injectCheckboxStyles();
  return createCheckbox(options);
}

if (typeof window !== 'undefined') {
  window.createCheckbox = createCheckbox;
  window.renderCheckboxes = renderCheckboxes;
  window.nnCheckbox = nnCheckbox;
  window.injectCheckboxStyles = injectCheckboxStyles;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createCheckbox,
    renderCheckboxes,
    nnCheckbox,
    injectCheckboxStyles
  };
}
