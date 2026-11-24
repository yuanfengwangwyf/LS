const DropdownMenuStyles = `
  .nn-dropdown {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    gap: var(--space4);
    width: 184px;
    font-family: var(--font-family-main);
    overflow: visible;
  }

  .nn-dropdown.nn-dropdown-large,
  .nn-dropdown.nn-dropdown-medium {
    width: 184px;
  }

  .nn-dropdown.nn-dropdown-appearance-multi-select-wrap {
    width: 246px;
  }

  .nn-dropdown.nn-dropdown-appearance-search {
    width: 300px;
  }

  .nn-dropdown-trigger {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space0);
    border-radius: var(--border-radius-2r);
    border: 1px solid transparent;
    background: transparent;
    color: var(--gray-3);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    text-align: left;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .nn-dropdown-trigger:focus {
    outline: none;
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-trigger,
  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-trigger,
  .nn-dropdown-appearance-search .nn-dropdown-trigger,
  .nn-dropdown-appearance-filled .nn-dropdown-trigger {
    background: var(--gray-10);
    border-color: var(--gray-8);
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-trigger:hover,
  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-trigger:hover,
  .nn-dropdown-appearance-search .nn-dropdown-trigger:hover,
  .nn-dropdown-appearance-filled .nn-dropdown-trigger:hover {
    background: var(--gray-9);
  }

  .nn-dropdown-appearance-multi-select.nn-dropdown-open .nn-dropdown-trigger,
  .nn-dropdown-appearance-multi-select-wrap.nn-dropdown-open .nn-dropdown-trigger,
  .nn-dropdown-appearance-search.nn-dropdown-open .nn-dropdown-trigger,
  .nn-dropdown-appearance-filled.nn-dropdown-open .nn-dropdown-trigger {
    background: var(--gray-9);
  }

  .nn-dropdown-appearance-no-padding .nn-dropdown-trigger {
    padding: var(--space0);
  }

  .nn-dropdown-large .nn-dropdown-trigger {
    padding-top: var(--space4);
    padding-bottom: var(--space4);
    min-height: 40px;
    height: 40px;
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select-wrap.has-value:not(.is-text-mode) .nn-dropdown-trigger {
    height: auto;
  }

  .nn-dropdown-large .nn-dropdown-contents {
    min-height: 40px;
    height: 40px;
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select-wrap .nn-dropdown-contents {
    min-height: 40px;
    height: auto;
  }

  .nn-dropdown-large .nn-dropdown-text {
    min-height: 40px;
    padding-top: var(--space10);
    padding-bottom: var(--space10);
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select .nn-dropdown-text {
    min-height: 40px;
    padding-top: var(--space0);
    padding-bottom: var(--space0);
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select .nn-dropdown-multi-values {
    padding: var(--space8) var(--space0) var(--space8) var(--space0);
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select .nn-dropdown-text-stack {
    padding-left: var(--space8);
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select .nn-dropdown-chip {
    min-height: 24px;
    box-sizing: border-box;
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select-wrap .nn-dropdown-text {
    min-height: 40px;
    height: auto;
    padding-top: var(--space0);
    padding-bottom: var(--space0);
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select-wrap .nn-dropdown-multi-values-wrap {
    max-height: 80px;
  }

  .nn-dropdown-large.nn-dropdown-appearance-multi-select-wrap.is-text-mode .nn-dropdown-text {
    min-height: 40px;
    padding-top: var(--space10);
    padding-bottom: var(--space10);
  }

  .nn-dropdown-contents {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    min-width: 0;
    height: 32px;
  }

  .nn-dropdown-appearance-filled .nn-dropdown-contents {
    gap: var(--space10);
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-contents {
    gap: var(--space10);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-contents {
    gap: var(--space10);
  }

  .nn-dropdown-appearance-search .nn-dropdown-contents {
    gap: var(--space10);
  }

  .nn-dropdown-appearance-no-padding .nn-dropdown-contents {
    gap: var(--space0);
  }

  .nn-dropdown-text-stack {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    min-width: 0;
  }

  .nn-dropdown-appearance-filled .nn-dropdown-text-stack {
    padding-left: var(--space12);
    padding-right: var(--space0);
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-text-stack {
    padding-left: var(--space6);
    padding-right: var(--space0);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-text-stack {
    padding-left: var(--space6);
    padding-right: var(--space0);
  }

  .nn-dropdown-appearance-search .nn-dropdown-text-stack {
    padding-left: var(--space12);
    padding-right: var(--space0);
    gap: var(--space8);
  }

  .nn-dropdown-appearance-search .nn-dropdown-leading {
    margin-right: var(--space0);
  }

  .nn-dropdown-appearance-search .nn-dropdown-text {
    padding-left: var(--space0);
  }

  .nn-dropdown-appearance-no-padding .nn-dropdown-text-stack {
    padding-left: var(--space12);
    padding-right: var(--space4);
  }

  .nn-dropdown-leading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: var(--space2);
    color: var(--gray-5);
    font-size: 16px;
    line-height: 1;
  }

  .nn-dropdown-leading img {
    width: 18px;
    height: 18px;
    border-radius: var(--border-radius-2r);
    object-fit: cover;
    display: block;
  }

  .nn-dropdown-text {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 0 0;
    min-width: 0;
    padding: var(--space6) var(--space0);
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-text {
    padding: var(--space0);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-text {
    align-items: flex-start;
    height: auto;
    min-height: 100%;
    padding: var(--space0);
  }

  .nn-dropdown-appearance-multi-select-wrap:not(.has-value) .nn-dropdown-text {
    align-items: center;
  }

  .nn-dropdown-appearance-multi-select-wrap.is-text-mode .nn-dropdown-text {
    align-items: center;
    padding: var(--space6) var(--space0);
  }

  .nn-dropdown-value {
    flex: 1 0 0;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    color: var(--gray-6);
  }

  .nn-dropdown.has-value .nn-dropdown-value {
    color: var(--gray-4);
  }

  .nn-dropdown-appearance-no-padding:not(.nn-dropdown-disabled) .nn-dropdown-trigger:hover .nn-dropdown-value,
  .nn-dropdown-appearance-no-padding:not(.nn-dropdown-disabled) .nn-dropdown-trigger:hover .nn-dropdown-arrow {
    color: var(--gray-4);
  }

  .nn-dropdown-icon-end {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    flex-shrink: 0;
    padding: var(--space6) var(--space10) var(--space6) var(--space2);
    color: var(--gray-5);
  }

  .nn-dropdown-appearance-multi-select .nn-dropdown-icon-end {
    padding-left: var(--space2);
    padding-right: var(--space10);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-icon-end {
    align-self: center;
    padding-left: var(--space2);
    padding-right: var(--space10);
  }

  .nn-dropdown-appearance-search .nn-dropdown-icon-end {
    padding-left: var(--space2);
    padding-right: var(--space10);
  }

  .nn-dropdown-multi-values {
    display: flex;
    align-items: center;
    gap: var(--space6);
    flex: 1 0 0;
    min-width: 0;
    padding: var(--space8) var(--space4) var(--space8) var(--space0);
    overflow: hidden;
  }

  .nn-dropdown-multi-values-wrap {
    display: flex;
    flex: 1 0 0;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--space6);
    min-width: 0;
    height: auto;
    max-height: 72px;
    padding: var(--space6) var(--space12) var(--space6) var(--space0);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .nn-dropdown-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    min-width: 0;
    padding: var(--space2) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
  }

  .nn-dropdown-chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-medium);
    color: var(--gray-5);
  }

  .nn-dropdown-chip-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    padding: var(--space0);
    border: none;
    background: transparent;
    font-size: var(--icon-size-x6);
    line-height: 1;
    color: var(--gray-5);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-dropdown-chip-close .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-dropdown-chip-close:focus {
    outline: none;
  }

  .nn-dropdown-clear {
    display: none;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
    color: var(--gray-5);
    transition: color 0.2s ease;
  }

  .nn-dropdown-clear:hover {
    color: var(--gray-4);
  }

  .nn-dropdown-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: 1;
    color: var(--gray-5);
  }

  .nn-dropdown-panel {
    display: none;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    flex-direction: column;
    width: 100%;
    padding: var(--space8);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
  }

  .nn-dropdown.nn-dropdown-open .nn-dropdown-panel {
    display: flex;
  }

  .nn-dropdown-panel-content {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    position: relative;
  }

  .nn-dropdown-search {
    display: block;
    width: 100%;
  }

  .nn-dropdown-appearance-search .nn-dropdown-search {
    padding: var(--space0);
  }

  .nn-dropdown-search .nn-input-wrapper.nn-input-search {
    width: 100%;
  }

  .nn-dropdown-search-input {
    flex: 1 0 0;
    min-width: 0;
    border: none;
    background: transparent;
    color: var(--gray-6);
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    font-weight: var(--font-weight-medium);
  }

  .nn-dropdown-appearance-search .nn-dropdown-search-input {
    font-size: 14px;
    line-height: 20px;
  }

  .nn-dropdown-search-input::placeholder {
    color: var(--gray-6);
  }

  .nn-dropdown-search-input:focus {
    outline: none;
  }

  .nn-dropdown-search-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding-right: var(--space12);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-dropdown-appearance-search .nn-dropdown-search-icon {
    padding-right: var(--space8);
    font-size: var(--icon-size-x8);
  }

  .nn-dropdown-list {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    max-height: 360px;
    overflow-y: auto;
  }

  .nn-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    min-height: 32px;
    padding: var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .nn-dropdown-item:hover,
  .nn-dropdown-item.is-selected {
    background: var(--gray-10);
  }

  .nn-dropdown-item.is-focused {
    background: var(--gray-9);
  }

  .nn-dropdown-item.is-focused:hover {
    background: var(--gray-9);
  }

  .nn-dropdown-item-multi.is-selected {
    background: transparent;
  }

  .nn-dropdown-item-multi.is-selected:hover {
    background: var(--gray-10);
  }

  .nn-dropdown-item-multi:hover {
    background: var(--gray-10);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-list {
    max-height: 360px;
    overflow-y: auto;
  }

  .nn-dropdown-item-copy {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    min-width: 0;
    gap: var(--space2);
  }

  .nn-dropdown-item-leading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
  }

  .nn-dropdown-item-leading img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .nn-dropdown-appearance-search .nn-input-wrapper {
    width: 100%;
  }

  .nn-dropdown-appearance-search .nn-input {
    width: 100%;
  }

  .nn-dropdown-item-copy.has-description {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .nn-dropdown-item-title {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    color: var(--gray-4);
  }

  .nn-dropdown-item-desc {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-medium);
    color: var(--gray-6);
  }

  .nn-dropdown-item-multi {
    min-height: 32px;
    padding: var(--space6) var(--space8);
  }

  .nn-dropdown-item-multi .nn-dropdown-item-copy {
    gap: var(--space0);
  }

  .nn-dropdown-item-multi .nn-dropdown-item-copy.has-description {
    gap: var(--space0);
  }

  .nn-dropdown-item-checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .nn-dropdown-disabled .nn-dropdown-trigger,
  .nn-dropdown-trigger:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 1;
  }

  .nn-dropdown-disabled .nn-dropdown-trigger {
    border-color: var(--gray-8);
    background: var(--gray-10);
  }

  .nn-dropdown-disabled.nn-dropdown-appearance-no-padding .nn-dropdown-trigger {
    border-color: transparent;
    background: transparent;
  }

  .nn-dropdown-disabled .nn-dropdown-value,
  .nn-dropdown-disabled .nn-dropdown-arrow,
  .nn-dropdown-disabled .nn-dropdown-clear,
  .nn-dropdown-disabled .nn-dropdown-leading {
    color: var(--gray-7);
  }

  .nn-dropdown-item.is-disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-dropdown-item.is-disabled .nn-dropdown-item-title {
    color: var(--gray-7);
  }

  .nn-dropdown-item.is-disabled .nn-dropdown-item-desc {
    color: var(--gray-7);
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-contents {
    align-items: stretch;
    min-height: 32px;
    height: auto;
  }

  .nn-dropdown-appearance-multi-select-wrap .nn-dropdown-value {
    white-space: normal;
  }

  .nn-dropdown-appearance-multi-select-wrap.is-text-mode .nn-dropdown-value {
    white-space: nowrap;
  }

`;

function injectDropdownMenuStyles() {
  if (document.getElementById('nn-dropdown-menu-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-dropdown-menu-styles';
  style.textContent = DropdownMenuStyles;
  document.head.appendChild(style);
}

function createDropdownMenu(options = {}) {
  const {
    appearance = 'filled',
    size = 'medium',
    placeholder = 'Placeholder',
    value = '',
    disabled = false,
    open = false,
    searchable = false,
    autoFocusSearch = true,
    searchPlaceholder = '搜索游戏',
    items = [],
    selectedIndex = -1,
    fallbackSelectedIndex = -1,
    selectedIndices = [],
    leadingIcon = '',
    clearable = null,
    multiple = false,
    wrapTriggerWhenOpen = false,
    className = '',
    id = '',
    triggerElement = null,
    itemRenderer = null,
    emptyRenderer = null,
    filterItems = null,
    onChange = null,
    onOpenChange = null
  } = options;

  injectDropdownMenuStyles();

  const root = document.createElement('div');
  root.className = [
    'nn-dropdown',
    `nn-dropdown-appearance-${appearance}`,
    `nn-dropdown-${size}`,
    disabled ? 'nn-dropdown-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  if (id) {
    root.id = id;
  }
  const hasCustomTrigger = Boolean(triggerElement && triggerElement.nodeType === 1);
  if (hasCustomTrigger) {
    root.classList.add('nn-dropdown-custom-trigger');
  }

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'nn-dropdown-trigger';
  trigger.disabled = disabled;

  const contents = document.createElement('span');
  contents.className = 'nn-dropdown-contents';

  const textStack = document.createElement('span');
  textStack.className = 'nn-dropdown-text-stack';

  const leading = document.createElement('span');
  leading.className = 'nn-dropdown-leading';
  if (leadingIcon) {
    leading.innerHTML = leadingIcon;
  } else {
    leading.style.display = 'none';
  }
  textStack.appendChild(leading);

  const text = document.createElement('span');
  text.className = 'nn-dropdown-text';

  const valueEl = document.createElement('span');
  valueEl.className = 'nn-dropdown-value';
  text.appendChild(valueEl);

  const multiValuesEl = document.createElement('span');
  multiValuesEl.className = 'nn-dropdown-multi-values';
  textStack.appendChild(text);

  const iconEnd = document.createElement('span');
  iconEnd.className = 'nn-dropdown-icon-end';

  const clearEl = document.createElement('span');
  clearEl.className = 'nn-dropdown-clear';
  clearEl.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';

  const arrowEl = document.createElement('span');
  arrowEl.className = 'nn-dropdown-arrow';
  arrowEl.innerHTML = '<i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>';

  iconEnd.appendChild(clearEl);
  iconEnd.appendChild(arrowEl);

  contents.appendChild(textStack);
  contents.appendChild(iconEnd);
  trigger.appendChild(contents);
  root.appendChild(hasCustomTrigger ? triggerElement : trigger);

  const panel = document.createElement('div');
  panel.className = 'nn-dropdown-panel';

  const panelContent = document.createElement('div');
  panelContent.className = 'nn-dropdown-panel-content';

  let searchInput = null;

  if (searchable) {
    const searchWrap = document.createElement('div');
    searchWrap.className = 'nn-dropdown-search';
    const searchInputWrap = typeof createInput === 'function'
      ? createInput({
          placeholder: searchPlaceholder,
          size: 'default',
          showSearch: true
        })
      : null;

    if (searchInputWrap && searchInputWrap._inputEl) {
      searchInput = searchInputWrap._inputEl;
      searchWrap.appendChild(searchInputWrap);
    } else {
      searchInput = document.createElement('input');
      searchInput.className = 'nn-dropdown-search-input';
      searchInput.type = 'text';
      searchInput.placeholder = searchPlaceholder;

      const searchIcon = document.createElement('span');
      searchIcon.className = 'nn-dropdown-search-icon';
      searchIcon.innerHTML = '<i class="nnicon nicon-a-search-linesousuo-xianxing"></i>';

      searchWrap.appendChild(searchInput);
      searchWrap.appendChild(searchIcon);
    }

    panelContent.appendChild(searchWrap);
  }

  const listWrap = document.createElement('div');
  listWrap.className = 'nn-dropdown-list';
  panelContent.appendChild(listWrap);

  panel.appendChild(panelContent);
  root.appendChild(panel);
  const listScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: listWrap,
      container: panelContent,
      hoverTarget: panel,
      variant: 'thin',
      right: 4,
      top: function() {
        const panelRect = panelContent.getBoundingClientRect();
        const listRect = listWrap.getBoundingClientRect();
        return Math.max(0, listRect.top - panelRect.top);
      },
      bottom: 4,
      minThumbSize: 24
    })
    : null;
  let multiValuesScrollbar = null;

  let currentOpen = Boolean(open) && !disabled;
  let currentSelectedIndex = typeof selectedIndex === 'number' ? selectedIndex : -1;
  let currentSelectedIndices = Array.isArray(selectedIndices) ? selectedIndices.slice() : [];
  let currentItems = Array.isArray(items) ? items.slice() : [];
  let currentFilterText = '';
  let currentValue = value;
  let isTriggerHovered = false;
  const allIndex = multiple && currentItems.length ? 0 : -1;
  const closeCurrentDropdown = function() {
    if (currentOpen) {
      setOpen(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.__nnDropdownCloseHandlers = window.__nnDropdownCloseHandlers || new Set();
    window.__nnDropdownCloseHandlers.add(closeCurrentDropdown);
  }

  function getAllSelectableIndices() {
    return currentItems.map(function(_, index) {
      return index;
    });
  }

  function getChildSelectableIndices() {
    return currentItems.map(function(_, index) {
      return index;
    }).filter(function(index) {
      return index !== allIndex;
    });
  }

  function normalizeMultiSelection(indices) {
    const uniqueSorted = Array.from(new Set(indices)).sort(function(a, b) {
      return a - b;
    });

    if (!multiple || allIndex < 0) {
      return uniqueSorted;
    }

    const hasAll = uniqueSorted.includes(allIndex);
    const childIndices = getChildSelectableIndices();
    const selectedChildren = uniqueSorted.filter(function(index) {
      return index !== allIndex;
    });
    const allChildrenSelected = childIndices.length > 0 && childIndices.every(function(index) {
      return selectedChildren.includes(index);
    });

    if (hasAll && !allChildrenSelected) {
      return uniqueSorted.filter(function(index) {
        return index !== allIndex;
      });
    }

    if (allChildrenSelected) {
      return [allIndex].concat(childIndices);
    }

    return uniqueSorted;
  }

  currentSelectedIndices = normalizeMultiSelection(currentSelectedIndices);

  function getMultiSelectedItems() {
    return currentSelectedIndices
      .slice()
      .sort(function(a, b) { return a - b; })
      .map(function(index) {
        return {
          index,
          item: currentItems[index]
        };
      })
      .filter(function(entry) {
        return Boolean(entry.item);
      });
  }

  function getDisplayValue() {
    if (currentValue) return currentValue;
    if (currentSelectedIndex >= 0 && currentItems[currentSelectedIndex]) {
      return currentItems[currentSelectedIndex].label || '';
    }
    return '';
  }

  function isFallbackSelection() {
    return fallbackSelectedIndex >= 0 && currentSelectedIndex === fallbackSelectedIndex;
  }

  function updateTriggerLeading() {
    if (!multiple && currentSelectedIndex >= 0 && currentItems[currentSelectedIndex] && currentItems[currentSelectedIndex].iconHtml) {
      leading.innerHTML = currentItems[currentSelectedIndex].iconHtml;
      leading.style.display = 'inline-flex';
      return;
    }

    if (leadingIcon) {
      leading.innerHTML = leadingIcon;
      leading.style.display = 'inline-flex';
      return;
    }

    leading.innerHTML = '';
    leading.style.display = 'none';
  }

  function createChipElement(labelText, withClose) {
    const chip = document.createElement('span');
    chip.className = 'nn-dropdown-chip';

    const label = document.createElement('span');
    label.className = 'nn-dropdown-chip-label';
    label.textContent = labelText;
    chip.appendChild(label);

    if (withClose) {
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'nn-dropdown-chip-close';
      close.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
      chip.appendChild(close);
    }

    return chip;
  }

  function measureChipWidth(labelText, withClose) {
    const measureRoot = document.createElement('div');
    measureRoot.style.position = 'absolute';
    measureRoot.style.visibility = 'hidden';
    measureRoot.style.pointerEvents = 'none';
    measureRoot.style.left = '-9999px';
    measureRoot.style.top = '0';
    measureRoot.style.display = 'inline-flex';
    measureRoot.appendChild(createChipElement(labelText, withClose));
    document.body.appendChild(measureRoot);
    const width = measureRoot.getBoundingClientRect().width;
    document.body.removeChild(measureRoot);
    return width;
  }

  function shouldShowClear() {
    return false;
  }

  function renderMultiValue() {
    multiValuesEl.innerHTML = '';
    root.classList.remove('is-text-mode');
    multiValuesEl.className = wrapTriggerWhenOpen
      ? 'nn-dropdown-multi-values-wrap'
      : 'nn-dropdown-multi-values';
    if (text.firstChild !== multiValuesEl) {
      text.innerHTML = '';
      text.appendChild(multiValuesEl);
    }
    if (wrapTriggerWhenOpen && !multiValuesScrollbar && typeof window !== 'undefined' && typeof window.createScrollbar === 'function') {
      multiValuesScrollbar = window.createScrollbar({
        target: multiValuesEl,
        container: text,
        hoverTarget: text,
        variant: 'thin',
        right: 0,
        top: 0,
        bottom: 0,
        minThumbSize: 24
      });
    }

    const selectedItems = getMultiSelectedItems();

    if (!selectedItems.length) {
      const placeholderEl = document.createElement('span');
      placeholderEl.className = 'nn-dropdown-value';
      placeholderEl.textContent = placeholder;
      text.innerHTML = '';
      text.appendChild(placeholderEl);
      root.classList.remove('has-value');
      return;
    }

    root.classList.add('has-value');

    const hasAllSelection = allIndex >= 0
      && currentSelectedIndices.includes(allIndex)
      && currentSelectedIndices.length === currentItems.length;

    if (hasAllSelection) {
      root.classList.add('is-text-mode');
      const allValue = document.createElement('span');
      allValue.className = 'nn-dropdown-value';
      allValue.textContent = currentItems[allIndex].label || 'All';
      text.innerHTML = '';
      text.appendChild(allValue);
      return;
    }

    if (wrapTriggerWhenOpen) {
      const firstChip = createChipElement(selectedItems[0].item.label || '', true);
      const firstClose = firstChip.querySelector('.nn-dropdown-chip-close');
      firstClose.addEventListener('click', function(event) {
        event.stopPropagation();
        const firstSelectedIndex = selectedItems[0].index;
        currentSelectedIndices = normalizeMultiSelection(currentSelectedIndices.filter(function(index) {
          return index !== firstSelectedIndex;
        }));
        renderValue();
        renderItems();
        if (typeof onChange === 'function') {
          onChange({
            values: currentSelectedIndices.map(function(index) {
              return currentItems[index];
            }),
            selectedIndices: currentSelectedIndices.slice()
          });
        }
      });
      multiValuesEl.appendChild(firstChip);

      selectedItems.slice(1).forEach(function(entry) {
        if (entry.index === allIndex) {
          return;
        }
        const chip = createChipElement(entry.item.label || '', true);
        const close = chip.querySelector('.nn-dropdown-chip-close');
        close.addEventListener('click', function(event) {
          event.stopPropagation();
          currentSelectedIndices = normalizeMultiSelection(currentSelectedIndices.filter(function(index) {
            return index !== entry.index;
          }));
          renderValue();
          renderItems();
          if (typeof onChange === 'function') {
            onChange({
              values: currentSelectedIndices.map(function(index) {
                return currentItems[index];
              }),
              selectedIndices: currentSelectedIndices.slice()
            });
          }
        });
        multiValuesEl.appendChild(chip);
      });
      return;
    }

    const visibleEntries = [];
    const entriesForSummary = selectedItems.filter(function(entry) {
      return entry.index !== allIndex;
    });
    const availableWidth = multiValuesEl.getBoundingClientRect().width || text.getBoundingClientRect().width || 0;
    const chipGap = 6;

    if (!availableWidth) {
      visibleEntries.push(entriesForSummary[0]);
    } else {
      let usedWidth = 0;
      entriesForSummary.forEach(function(entry, index) {
        const chipWidth = measureChipWidth(entry.item.label || '', true);
        const nextVisibleCount = visibleEntries.length + 1;
        const hiddenAfterThis = entriesForSummary.length - nextVisibleCount;
        const countWidth = hiddenAfterThis > 0 ? measureChipWidth(`+${hiddenAfterThis}`, false) : 0;
        const projectedWidth =
          usedWidth +
          (visibleEntries.length ? chipGap : 0) +
          chipWidth +
          (hiddenAfterThis > 0 ? chipGap + countWidth : 0);

        if (projectedWidth <= availableWidth || !visibleEntries.length) {
          visibleEntries.push(entry);
          usedWidth += (visibleEntries.length > 1 ? chipGap : 0) + chipWidth;
        }
      });
    }

    visibleEntries.forEach(function(entry, index) {
      const chip = createChipElement(entry.item.label || '', true);
      const close = chip.querySelector('.nn-dropdown-chip-close');
      close.addEventListener('click', function(event) {
        event.stopPropagation();
        const selectedIndexToRemove = visibleEntries[index].index;
        currentSelectedIndices = normalizeMultiSelection(currentSelectedIndices.filter(function(itemIndex) {
          return itemIndex !== selectedIndexToRemove;
        }));
        renderValue();
        renderItems();
        if (typeof onChange === 'function') {
          onChange({
            values: currentSelectedIndices.map(function(itemIndex) {
              return currentItems[itemIndex];
            }),
            selectedIndices: currentSelectedIndices.slice()
          });
        }
      });
      multiValuesEl.appendChild(chip);
    });

    const hiddenCount = entriesForSummary.length - visibleEntries.length;
    if (hiddenCount > 0) {
      const countChip = createChipElement(`+${hiddenCount}`, false);
      multiValuesEl.appendChild(countChip);
    }
  }

  function renderValue() {
    if (multiple) {
      renderMultiValue();
      clearEl.style.display = 'none';
      arrowEl.innerHTML = currentOpen
        ? '<i class="nnicon nicon-a-Arrowup-linejiantoushang-xianxing"></i>'
        : '<i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>';
      return;
    }

    if (text.firstChild !== valueEl) {
      text.innerHTML = '';
      text.appendChild(valueEl);
    }

    updateTriggerLeading();
    const displayValue = getDisplayValue();
    valueEl.textContent = displayValue || placeholder;
    root.classList.toggle('has-value', !!displayValue);
    clearEl.style.display = shouldShowClear() ? 'inline-flex' : 'none';

    if (!multiple && clearable !== false && displayValue && isTriggerHovered && !isFallbackSelection()) {
      arrowEl.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
    } else {
      arrowEl.innerHTML = currentOpen
        ? '<i class="nnicon nicon-a-Arrowup-linejiantoushang-xianxing"></i>'
        : '<i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>';
    }
  }

  function renderItems() {
    listWrap.innerHTML = '';
    const keyword = (searchInput ? searchInput.value : currentFilterText).trim().toLowerCase();
    const visibleItems = currentItems.filter(function(item, index) {
      if (typeof filterItems === 'function') {
        return filterItems(item, keyword, index);
      }
      if (!keyword) return true;
      const haystack = `${item.label || ''} ${item.description || ''}`.toLowerCase();
      return haystack.includes(keyword);
    });

    if (!visibleItems.length && typeof emptyRenderer === 'function') {
      const empty = emptyRenderer({ keyword });
      if (empty instanceof HTMLElement) {
        listWrap.appendChild(empty);
      }
      if (listScrollbar) {
        requestAnimationFrame(function() {
          listScrollbar.update();
        });
      }
      return;
    }

    visibleItems.forEach(function(item) {
      const originalIndex = currentItems.indexOf(item);
      const selected = (!multiple && originalIndex === currentSelectedIndex) ||
        (multiple && currentSelectedIndices.includes(originalIndex));
      const itemEl = typeof itemRenderer === 'function'
        ? itemRenderer({
            item,
            index: originalIndex,
            selected,
            keyword
          })
        : document.createElement('div');
      if (!(itemEl instanceof HTMLElement)) return;
      itemEl.classList.add('nn-dropdown-item');
      if (multiple) itemEl.classList.add('nn-dropdown-item-multi');
      itemEl.setAttribute('role', 'button');
      itemEl.setAttribute('tabindex', disabled ? '-1' : '0');
      if (item.disabled) {
        itemEl.classList.add('is-disabled');
      }

      if (selected) {
        itemEl.classList.add('is-selected');
      }

      if (!multiple && appearance === 'search' && currentOpen && originalIndex === currentSelectedIndex) {
        itemEl.classList.add('is-focused');
      }

      if (typeof itemRenderer !== 'function' && multiple) {
        const checkboxWrap = document.createElement('span');
        checkboxWrap.className = 'nn-dropdown-item-checkbox';
        checkboxWrap.appendChild(createCheckbox({
          checked: currentSelectedIndices.includes(originalIndex),
          showLabel: false
        }));
        itemEl.appendChild(checkboxWrap);
      }

      if (typeof itemRenderer !== 'function' && item.iconHtml) {
        const leading = document.createElement('span');
        leading.className = 'nn-dropdown-item-leading';
        leading.innerHTML = item.iconHtml;
        itemEl.appendChild(leading);
      }

      if (typeof itemRenderer !== 'function') {
        const copy = document.createElement('span');
        copy.className = 'nn-dropdown-item-copy';
        if (item.description) {
          copy.classList.add('has-description');
        }

        const title = document.createElement('span');
        title.className = 'nn-dropdown-item-title';
        title.textContent = item.label || '';
        copy.appendChild(title);

        if (item.description) {
          const desc = document.createElement('span');
          desc.className = 'nn-dropdown-item-desc';
          desc.textContent = item.description;
          copy.appendChild(desc);
        }

        itemEl.appendChild(copy);
      }
      function handleItemSelect(event) {
        if (event) {
          event.stopPropagation();
        }

        if (multiple) {
          if (item.disabled) {
            return;
          }
          if (originalIndex === allIndex) {
            currentSelectedIndices = currentSelectedIndices.includes(allIndex)
              ? []
              : getAllSelectableIndices();
          } else {
            const nextSelectedIndices = currentSelectedIndices.includes(originalIndex)
              ? currentSelectedIndices.filter(function(index) {
                  return index !== originalIndex;
                }).filter(function(index) {
                  return index !== allIndex;
                })
              : currentSelectedIndices.concat(originalIndex);
            currentSelectedIndices = normalizeMultiSelection(nextSelectedIndices);
          }
          currentSelectedIndices = normalizeMultiSelection(currentSelectedIndices);
          renderValue();
          renderItems();
          if (typeof onChange === 'function') {
            onChange({
              values: currentSelectedIndices.map(function(index) {
                return currentItems[index];
              }),
              selectedIndices: currentSelectedIndices.slice()
            });
          }
          return;
        }

        currentSelectedIndex = originalIndex;
        currentValue = item.label || '';
        setOpen(false);
        renderValue();
        renderItems();
        if (typeof onChange === 'function') {
          onChange({
            value: currentValue,
            item,
            selectedIndex: currentSelectedIndex
          });
        }
      }

      itemEl.addEventListener('click', handleItemSelect);
      itemEl.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleItemSelect(event);
        }
      });

      listWrap.appendChild(itemEl);
    });
    if (listScrollbar) {
      requestAnimationFrame(function() {
        listScrollbar.update();
      });
    }
  }

  function setOpen(nextOpen) {
    if (disabled) return;
    const nextOpenState = Boolean(nextOpen);
    if (nextOpenState && typeof window !== 'undefined' && window.__nnDropdownCloseHandlers) {
      window.__nnDropdownCloseHandlers.forEach(function(closeHandler) {
        if (closeHandler !== closeCurrentDropdown && typeof closeHandler === 'function') {
          closeHandler();
        }
      });
    }
    currentOpen = nextOpenState;
    root.classList.toggle('nn-dropdown-open', currentOpen);
    renderValue();
    renderItems();
    if (typeof onOpenChange === 'function') {
      onOpenChange(currentOpen);
    }
    if (currentOpen && searchInput && autoFocusSearch) {
      setTimeout(function() {
        searchInput.focus();
      }, 0);
    }
    if (currentOpen && !multiple && currentSelectedIndex >= 0) {
      setTimeout(function() {
        const focusedItem = listWrap.children[currentSelectedIndex];
        if (focusedItem && typeof focusedItem.scrollIntoView === 'function') {
          focusedItem.scrollIntoView({ block: 'nearest' });
        }
        if (listScrollbar) listScrollbar.update();
      }, 0);
    }
    if (listScrollbar) {
      requestAnimationFrame(function() {
        listScrollbar.update();
      });
    }
    if (multiValuesScrollbar) {
      requestAnimationFrame(function() {
        multiValuesScrollbar.update();
      });
    }
  }

  function clearSelection() {
    if (fallbackSelectedIndex >= 0 && currentItems[fallbackSelectedIndex]) {
      currentSelectedIndex = fallbackSelectedIndex;
      currentValue = currentItems[fallbackSelectedIndex].label || '';
    } else {
      currentSelectedIndex = -1;
      currentValue = '';
    }
    setOpen(false);
    renderValue();
    renderItems();
    if (typeof onChange === 'function') {
      onChange({
        value: currentValue,
        item: currentSelectedIndex >= 0 ? currentItems[currentSelectedIndex] : null,
        selectedIndex: currentSelectedIndex
      });
    }
  }

  if (!hasCustomTrigger) {
    arrowEl.addEventListener('click', function(event) {
      event.stopPropagation();
      if (!multiple && clearable !== false && getDisplayValue() && isTriggerHovered && !isFallbackSelection()) {
        clearSelection();
        return;
      }
      setOpen(!currentOpen);
    });

    trigger.addEventListener('click', function(event) {
      event.stopPropagation();
      setOpen(!currentOpen);
    });

    clearEl.addEventListener('click', function(event) {
      event.stopPropagation();
      clearSelection();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    searchInput.addEventListener('input', function() {
      renderItems();
    });
  }

  if (!hasCustomTrigger) {
    trigger.addEventListener('mouseenter', function() {
      isTriggerHovered = true;
      if (!multiple) {
        renderValue();
      }
    });

    trigger.addEventListener('mouseleave', function() {
      isTriggerHovered = false;
      if (!multiple) {
        renderValue();
      }
    });
  }

  document.addEventListener('click', function(event) {
    if (!root.contains(event.target)) {
      setOpen(false);
    }
  });

  renderValue();
  renderItems();
  root.classList.toggle('nn-dropdown-open', currentOpen);
  root._dropdownMenu = {
    setOpen,
    setItems: function(nextItems) {
      currentItems = Array.isArray(nextItems) ? nextItems.slice() : [];
      renderItems();
    },
    setFilterText: function(nextFilterText) {
      currentFilterText = String(nextFilterText || '');
      renderItems();
    },
    renderItems,
    panel,
    list: listWrap
  };

  return root;
}

function renderDropdownMenus(container, dropdowns) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;

  dropdowns.forEach(function(options) {
    container.appendChild(createDropdownMenu(options));
  });
}

function nnDropdownMenu(options) {
  injectDropdownMenuStyles();
  return createDropdownMenu(options);
}

if (typeof window !== 'undefined') {
  window.createDropdownMenu = createDropdownMenu;
  window.renderDropdownMenus = renderDropdownMenus;
  window.nnDropdownMenu = nnDropdownMenu;
  window.injectDropdownMenuStyles = injectDropdownMenuStyles;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createDropdownMenu,
    renderDropdownMenus,
    nnDropdownMenu,
    injectDropdownMenuStyles
  };
}
