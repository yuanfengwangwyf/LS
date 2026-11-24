const FormStyles = `
  .nn-form {
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    font-family: var(--font-family-main);
  }

  .nn-form-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: var(--space32);
  }

  .nn-form-item {
    --nn-form-label-width: 100px;
    --nn-form-control-width: 240px;
    --nn-form-item-gap: 10px;
    display: flex;
    position: relative;
    color: var(--gray-5);
    font-family: var(--font-family-main);
  }

  .nn-form-item--align-left,
  .nn-form-item--align-right {
    align-items: center;
    gap: var(--nn-form-item-gap);
  }

  .nn-form-item--top.nn-form-item--align-left,
  .nn-form-item--top.nn-form-item--align-right {
    align-items: flex-start;
  }

  .nn-form-item--vertical {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space8);
    width: var(--nn-form-control-width);
  }

  .nn-form-label {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
  }

  .nn-form-item--align-left .nn-form-label {
    position: relative;
    width: var(--nn-form-label-width);
  }

  .nn-form-item--align-right .nn-form-label {
    width: var(--nn-form-label-width);
    justify-content: flex-end;
    text-align: right;
  }

  .nn-form-item--align-right {
    --nn-form-item-gap: 16px;
  }

  .nn-form-item--top.nn-form-item--align-left .nn-form-label,
  .nn-form-item--top.nn-form-item--align-right .nn-form-label {
    padding-top: var(--space8);
  }

  .nn-form-item--choice.nn-form-item--align-left,
  .nn-form-item--choice.nn-form-item--align-right {
    align-items: flex-start;
  }

  .nn-form-item--choice.nn-form-item--align-left .nn-form-label,
  .nn-form-item--choice.nn-form-item--align-right .nn-form-label {
    padding-top: var(--space6);
  }

  .nn-form-item--choice.nn-form-item--align-left .nn-form-required {
    top: 6px;
  }

  .nn-form-item--vertical .nn-form-label {
    width: 100%;
  }

  .nn-form-item--vertical.nn-form-item--label-left .nn-form-label {
    justify-content: flex-start;
    text-align: left;
  }

  .nn-form-item--vertical.nn-form-item--label-right .nn-form-label {
    justify-content: flex-end;
    text-align: right;
  }

  .nn-form-label__text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nn-form-item--align-left .nn-form-label__text {
    flex: 1 0 0;
  }

  .nn-form-required {
    color: var(--Red);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
  }

  .nn-form-item--align-left .nn-form-required {
    position: absolute;
    left: -10px;
    top: 0;
  }

  .nn-form-item--top.nn-form-item--align-left .nn-form-required {
    top: 8px;
  }

  .nn-form-item--align-right .nn-form-required {
    order: -1;
  }

  .nn-form-item--vertical .nn-form-required {
    order: 2;
  }

  .nn-form-control {
    width: var(--nn-form-control-width);
    min-width: 0;
  }

  .nn-form-item--vertical .nn-form-control {
    width: 100%;
  }

  .nn-form-control .nn-input-wrapper,
  .nn-form-control .nn-input,
  .nn-form-control .nn-dropdown {
    width: 100%;
  }

  .nn-form-control .nn-input.nn-input-textarea {
    width: 100%;
  }

  .nn-form-control .nn-input-wrapper.nn-input-textarea-wrapper {
    width: 100%;
  }

  .nn-form-control .nn-dropdown-panel {
    z-index: 40;
  }

  .nn-form-choice-group {
    display: flex;
    align-items: center;
    gap: var(--space24);
  }

  .nn-form-choice-group--vertical {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space16);
  }

  .nn-form-item--choice .nn-form-control {
    width: var(--nn-form-control-width);
    padding: var(--space6) var(--space0);
    box-sizing: border-box;
  }

  .nn-form-help {
    margin-top: calc(var(--space4) * -1);
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
  }
`;

function injectFormStyles() {
  if (document.getElementById('nn-form-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-form-styles';
  style.textContent = FormStyles;
  document.head.appendChild(style);
}

const FormDefaultDropdownItems = [
  { label: 'Option 1', description: '描述文本' },
  { label: 'Option 2', description: '描述文本' },
  { label: 'Option 3', description: '描述文本' }
];

function createFormControl(type = 'custom', options = {}) {
  const safeType = ['input', 'textarea', 'dropdown', 'radio', 'checkbox'].includes(type) ? type : 'custom';

  if (safeType === 'input') {
    if (typeof injectInputStyles === 'function') injectInputStyles();
    return createInput(Object.assign({
      size: 'large',
      placeholder: 'Placeholder'
    }, options));
  }

  if (safeType === 'textarea') {
    if (typeof injectInputStyles === 'function') injectInputStyles();
    return createInput(Object.assign({
      type: 'textarea',
      placeholder: 'Enter long form text here'
    }, options));
  }

  if (safeType === 'dropdown') {
    if (typeof injectDropdownMenuStyles === 'function') injectDropdownMenuStyles();
    return createDropdownMenu(Object.assign({
      appearance: 'filled',
      size: 'large',
      placeholder: 'Placeholder',
      items: FormDefaultDropdownItems
    }, options));
  }

  if (safeType === 'radio' || safeType === 'checkbox') {
    if (safeType === 'radio' && typeof injectRadioStyles === 'function') injectRadioStyles();
    if (safeType === 'checkbox' && typeof injectCheckboxStyles === 'function') injectCheckboxStyles();
    return createFormChoiceGroup(Object.assign({
      type: safeType
    }, options));
  }

  return null;
}

function createFormItem(options = {}) {
  const {
    label = 'Username',
    required = true,
    layout = 'align-left',
    labelAlign = 'left',
    valign = 'center',
    labelWidth = layout === 'align-right' ? 80 : 100,
    controlWidth = 240,
    control = null,
    controlType = 'custom',
    controlProps = {},
    help = '',
    className = '',
    id = ''
  } = options;

  injectFormStyles();

  const safeLayout = ['align-left', 'align-right', 'vertical'].includes(layout) ? layout : 'align-left';
  const safeLabelAlign = ['left', 'right'].includes(labelAlign) ? labelAlign : 'left';
  const root = document.createElement('div');
  root.className = [
    'nn-form-item',
    `nn-form-item--${safeLayout}`,
    safeLayout === 'vertical' ? `nn-form-item--label-${safeLabelAlign}` : '',
    valign === 'top' ? 'nn-form-item--top' : '',
    ['radio', 'checkbox'].includes(controlType) ? 'nn-form-item--choice' : '',
    className
  ].filter(Boolean).join(' ');
  root.style.setProperty('--nn-form-label-width', `${labelWidth}px`);
  root.style.setProperty('--nn-form-control-width', `${controlWidth}px`);
  if (id) root.id = id;

  const labelEl = document.createElement('label');
  labelEl.className = 'nn-form-label';

  const labelText = document.createElement('span');
  labelText.className = 'nn-form-label__text';
  labelText.textContent = label;

  if (required) {
    const requiredEl = document.createElement('span');
    requiredEl.className = 'nn-form-required';
    requiredEl.textContent = '*';
    if (safeLayout === 'vertical') {
      labelEl.appendChild(labelText);
      labelEl.appendChild(requiredEl);
    } else if (safeLayout === 'align-right') {
      labelEl.appendChild(requiredEl);
      labelEl.appendChild(labelText);
    } else {
      labelEl.appendChild(requiredEl);
      labelEl.appendChild(labelText);
    }
  } else {
    labelEl.appendChild(labelText);
  }

  const controlWrap = document.createElement('div');
  controlWrap.className = 'nn-form-control';
  const resolvedControl = control || createFormControl(controlType, controlProps);
  if (resolvedControl instanceof Node) {
    controlWrap.appendChild(resolvedControl);
  } else if (typeof resolvedControl === 'string') {
    controlWrap.innerHTML = resolvedControl;
  } else if (typeof control === 'string') {
    controlWrap.innerHTML = control;
  }

  root.appendChild(labelEl);
  root.appendChild(controlWrap);

  if (help) {
    const helpEl = document.createElement('div');
    helpEl.className = 'nn-form-help';
    helpEl.textContent = help;
    controlWrap.appendChild(helpEl);
  }

  return root;
}

function createFormChoiceGroup(options = {}) {
  const {
    type = 'radio',
    direction = 'horizontal',
    items = ['Radio', 'Radio', 'Radio', 'Radio', 'Radio'],
    selectedIndex = 0,
    checkedIndices = [0],
    interactive = true,
    onChange = null
  } = options;

  injectFormStyles();

  const group = document.createElement('div');
  group.className = [
    'nn-form-choice-group',
    direction === 'vertical' ? 'nn-form-choice-group--vertical' : ''
  ].filter(Boolean).join(' ');

  let currentRadioIndex = selectedIndex;
  let currentChecked = Array.isArray(checkedIndices) ? checkedIndices.slice() : [];

  function render() {
    group.innerHTML = '';
    items.forEach(function(text, index) {
      if (type === 'checkbox') {
        group.appendChild(createCheckbox({
          text,
          checked: currentChecked.includes(index),
          interactive,
          onChange: function() {
            if (currentChecked.includes(index)) {
              currentChecked = currentChecked.filter(function(itemIndex) {
                return itemIndex !== index;
              });
            } else {
              currentChecked.push(index);
            }
            render();
            if (typeof onChange === 'function') {
              onChange({ checkedIndices: currentChecked.slice() });
            }
          }
        }));
        return;
      }

      group.appendChild(createRadio({
        text,
        checked: currentRadioIndex === index,
        interactive,
        onChange: function() {
          currentRadioIndex = index;
          render();
          if (typeof onChange === 'function') {
            onChange({ selectedIndex: currentRadioIndex });
          }
        }
      }));
    });
  }

  render();
  return group;
}

function createForm(options = {}) {
  const {
    items = [],
    className = '',
    id = ''
  } = options;

  injectFormStyles();

  const form = document.createElement('div');
  form.className = ['nn-form', className].filter(Boolean).join(' ');
  if (id) form.id = id;

  items.forEach(function(item) {
    form.appendChild(createFormItem(item));
  });

  return form;
}

if (typeof window !== 'undefined') {
  window.injectFormStyles = injectFormStyles;
  window.createFormControl = createFormControl;
  window.createFormItem = createFormItem;
  window.createFormChoiceGroup = createFormChoiceGroup;
  window.createForm = createForm;
}
