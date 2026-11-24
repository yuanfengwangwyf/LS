const InputNumberStyles = `
  .nn-input-number {
    --nn-input-number-height: 34px;
    --nn-input-number-icon-size: var(--icon-size-x10);
    display: inline-flex;
    align-items: stretch;
    width: 158px;
    height: var(--nn-input-number-height);
    color: var(--gray-5);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-input-number--large {
    --nn-input-number-height: 42px;
    --nn-input-number-icon-size: var(--icon-size-x10);
  }

  .nn-input-number--default {
    --nn-input-number-height: 34px;
    --nn-input-number-icon-size: var(--icon-size-x10);
  }

  .nn-input-number--small {
    --nn-input-number-height: 26px;
    --nn-input-number-icon-size: var(--icon-size-x8);
  }

  .nn-input-number__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 var(--nn-input-number-height);
    width: var(--nn-input-number-height);
    height: var(--nn-input-number-height);
    padding: var(--space0);
    border: 1px solid var(--gray-8);
    background: transparent;
    color: var(--gray-5);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  .nn-input-number__button--minus {
    border-radius: var(--border-radius-2r) 0 0 var(--border-radius-2r);
  }

  .nn-input-number__button--plus {
    border-radius: 0 var(--border-radius-2r) var(--border-radius-2r) 0;
  }

  .nn-input-number__button .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--nn-input-number-icon-size);
    height: var(--nn-input-number-icon-size);
    font-size: var(--nn-input-number-icon-size);
    line-height: 1;
  }

  .nn-input-number__button:hover {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-input-number__button:disabled:hover {
    background: transparent;
    color: var(--gray-7);
  }

  .nn-input-number__field {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    padding: var(--space0) var(--space10);
    border-top: 1px solid var(--gray-8);
    border-bottom: 1px solid var(--gray-8);
    background: transparent;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
  }

  .nn-input-number:hover .nn-input-number__field,
  .nn-input-number.is-hover .nn-input-number__field,
  .nn-input-number:focus-within .nn-input-number__field,
  .nn-input-number.is-focus .nn-input-number__field {
    background: var(--gray-10);
  }

  .nn-input-number:focus-within .nn-input-number__field,
  .nn-input-number.is-focus .nn-input-number__field {
    box-shadow: -1px 0 0 var(--gray-8), 1px 0 0 var(--gray-8);
  }

  .nn-input-number:focus-within .nn-input-number__button--minus,
  .nn-input-number.is-focus .nn-input-number__button--minus {
    border-right-color: transparent;
  }

  .nn-input-number:focus-within .nn-input-number__button--plus,
  .nn-input-number.is-focus .nn-input-number__button--plus {
    border-left-color: transparent;
  }

  .nn-input-number__input {
    display: block;
    width: 100%;
    min-width: 0;
    padding: var(--space0);
    border: 0;
    outline: none;
    background: transparent;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    font-weight: var(--font-weight-semibold);
    text-align: center;
    appearance: textfield;
    -moz-appearance: textfield;
  }

  .nn-input-number__input::-webkit-outer-spin-button,
  .nn-input-number__input::-webkit-inner-spin-button {
    margin: var(--space0);
    -webkit-appearance: none;
  }

  .nn-input-number.is-disabled {
    color: var(--gray-7);
  }

  .nn-input-number.is-disabled .nn-input-number__button,
  .nn-input-number.is-disabled .nn-input-number__input,
  .nn-input-number__button:disabled,
  .nn-input-number__input:disabled {
    color: var(--gray-7);
    cursor: not-allowed;
  }

  .nn-input-number.is-disabled .nn-input-number__button,
  .nn-input-number__button:disabled {
    pointer-events: none;
  }

  .nn-input-number.is-disabled:hover .nn-input-number__field {
    background: transparent;
  }
`;

function injectInputNumberStyles() {
  if (document.getElementById('nn-input-number-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-input-number-styles';
  style.textContent = InputNumberStyles;
  document.head.appendChild(style);
}

function createInputNumber(options = {}) {
  const {
    value = 6,
    min = -Infinity,
    max = Infinity,
    step = 1,
    size = 'large',
    state = 'default',
    disabled = false,
    onChange = null,
    onInput = null,
    className = '',
    id = ''
  } = options;

  injectInputNumberStyles();

  const normalizedSize = ['large', 'default', 'small'].includes(size) ? size : 'large';
  const isDisabled = disabled || state === 'disabled' || state === 'disable';
  let currentValue = normalizeValue(value);

  const root = document.createElement('div');
  root.className = [
    'nn-input-number',
    `nn-input-number--${normalizedSize}`,
    state === 'hover' ? 'is-hover' : '',
    state === 'focus' ? 'is-focus' : '',
    isDisabled ? 'is-disabled' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;

  const minusButton = createControlButton('minus', '减少', 'nicon-a-delete-fillshanchu-mianxing');
  const field = document.createElement('div');
  field.className = 'nn-input-number__field';

  const input = document.createElement('input');
  input.className = 'nn-input-number__input';
  input.type = 'text';
  input.inputMode = 'decimal';
  input.value = formatValue(currentValue);
  input.disabled = isDisabled;
  input.setAttribute('aria-label', '数字输入');
  field.appendChild(input);

  const plusButton = createControlButton('plus', '增加', 'nicon-a-add-linetianjia-xianxing');

  root.appendChild(minusButton);
  root.appendChild(field);
  root.appendChild(plusButton);

  function normalizeValue(nextValue) {
    const parsed = Number(nextValue);
    const fallback = Number.isFinite(Number(value)) ? Number(value) : 0;
    const safeValue = Number.isFinite(parsed) ? parsed : fallback;
    return clampValue(safeValue);
  }

  function clampValue(nextValue) {
    let safeValue = Number(nextValue);
    if (!Number.isFinite(safeValue)) safeValue = 0;
    if (Number.isFinite(Number(min))) safeValue = Math.max(Number(min), safeValue);
    if (Number.isFinite(Number(max))) safeValue = Math.min(Number(max), safeValue);
    return safeValue;
  }

  function formatValue(nextValue) {
    return Number.isInteger(nextValue) ? String(nextValue) : String(Number(nextValue.toFixed(8)));
  }

  function emitChange() {
    if (typeof onChange === 'function') {
      onChange(currentValue);
    }
  }

  function syncControlState() {
    input.value = formatValue(currentValue);
    minusButton.disabled = isDisabled || (Number.isFinite(Number(min)) && currentValue <= Number(min));
    plusButton.disabled = isDisabled || (Number.isFinite(Number(max)) && currentValue >= Number(max));
  }

  function setValue(nextValue, shouldEmit = true) {
    const safeValue = clampValue(nextValue);
    currentValue = safeValue;
    syncControlState();
    if (shouldEmit) emitChange();
  }

  function stepValue(direction) {
    const base = Number.isFinite(Number(input.value)) ? Number(input.value) : currentValue;
    const nextStep = Number(step) || 1;
    setValue(base + direction * nextStep);
  }

  function createControlButton(type, label, iconClass) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `nn-input-number__button nn-input-number__button--${type}`;
    button.setAttribute('aria-label', label);
    button.disabled = isDisabled;
    button.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
    return button;
  }

  minusButton.addEventListener('click', function() {
    stepValue(-1);
  });

  plusButton.addEventListener('click', function() {
    stepValue(1);
  });

  input.addEventListener('input', function() {
    if (typeof onInput === 'function') {
      onInput(input.value);
    }
  });

  input.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      stepValue(1);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      stepValue(-1);
    } else if (event.key === 'Enter') {
      setValue(input.value);
      input.blur();
    }
  });

  input.addEventListener('blur', function() {
    setValue(input.value);
  });

  root.getValue = function() {
    return currentValue;
  };

  root.setValue = function(nextValue) {
    setValue(nextValue);
  };

  syncControlState();
  return root;
}

if (typeof window !== 'undefined') {
  window.injectInputNumberStyles = injectInputNumberStyles;
  window.createInputNumber = createInputNumber;
}
