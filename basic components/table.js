const TableStyles = `
  .nn-table {
    position: relative;
    width: 100%;
    height: var(--nn-table-height, 420px);
    max-height: var(--nn-table-height, 420px);
    overflow: auto;
    isolation: isolate;
    background: var(--gray-1);
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-table-wrap {
    position: relative;
    width: 100%;
    height: var(--nn-table-height, 420px);
    max-height: var(--nn-table-height, 420px);
    overflow: hidden;
    background: var(--gray-1);
    isolation: isolate;
  }

  .nn-table-wrap > .nn-table {
    height: 100%;
    max-height: 100%;
  }

  .nn-table-wrap--surface-panel,
  .nn-table--surface-panel {
    background: var(--gray-2);
  }

  .nn-table--surface-panel .nn-table__head-cell,
  .nn-table--surface-panel .nn-table__foot-cell {
    background: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%), var(--gray-2);
  }

  .nn-table--surface-panel .nn-table__body-cell {
    background: var(--gray-2);
  }

  .nn-table--surface-panel .nn-table__row:hover .nn-table__body-cell {
    background-color: var(--gray-2);
    background-image: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%);
  }

  .nn-table-wrap__scrollbar-x {
    --nn-scrollbar-track-height: 12px;
    --nn-scrollbar-height: 6px;
  }

  .nn-table__table {
    width: 100%;
    min-width: var(--nn-table-min-width, 760px);
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }

  .nn-table__head-cell,
  .nn-table__foot-cell {
    height: var(--nn-table-header-height, 40px);
    padding: var(--space8) var(--space16);
    background: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%), var(--gray-1);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-semibold);
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
  }

  .nn-table__head-cell {
    position: relative;
    z-index: 1;
  }

  .nn-table--sticky-header .nn-table__head-cell {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  .nn-table--sticky-footer .nn-table__foot-cell {
    position: sticky;
    bottom: 0;
    z-index: 5;
    border-top: 1px solid var(--gray-8);
  }

  .nn-table__body-cell {
    height: var(--nn-table-row-height, 60px);
    padding: var(--space8) var(--space16);
    border-bottom: 1px solid var(--gray-8);
    background: var(--gray-1);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    text-align: left;
    vertical-align: middle;
  }

  .nn-table__cell--center {
    text-align: center;
  }

  .nn-table__cell--right {
    text-align: right;
  }

  .nn-table__cell--center .nn-table__cell-content {
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }

  .nn-table__cell--right .nn-table__cell-content {
    justify-content: flex-end;
    margin-left: auto;
  }

  .nn-table__cell-content {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  }

  .nn-table__cell-content--inline {
    display: inline-flex;
    align-items: center;
    width: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .nn-table__header-stack {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--space0);
    max-width: 100%;
    min-width: 0;
  }

  .nn-table__header-title,
  .nn-table__header-subtitle {
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-table__header-subtitle {
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
  }

  .nn-table__selection-cell {
    text-align: center;
  }

  .nn-table__selection-cell .nn-table__cell-content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }

  .nn-table__sort-header {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    max-width: 100%;
    padding: var(--space0);
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    font-weight: inherit;
    text-align: left;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-table__sort-header:hover {
    color: var(--gray-4);
  }

  .nn-table__sort-title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-table__sort-icon {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space2);
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
  }

  .nn-table__sort-icon::before,
  .nn-table__sort-icon::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }

  .nn-table__sort-icon::before {
    border-bottom: 5px solid var(--gray-7);
  }

  .nn-table__sort-icon::after {
    border-top: 5px solid var(--gray-7);
  }

  .nn-table__sort-header.is-asc .nn-table__sort-icon::before {
    border-bottom-color: var(--gray-5);
  }

  .nn-table__sort-header.is-desc .nn-table__sort-icon::after {
    border-top-color: var(--gray-5);
  }

  .nn-table__row:hover .nn-table__body-cell {
    background: var(--gray-10);
  }

  .nn-table__row:hover .nn-table__body-cell.nn-table__fixed-left,
  .nn-table__row:hover .nn-table__body-cell.nn-table__fixed-right {
    background-color: var(--gray-1) !important;
    background-image: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%) !important;
  }

  .nn-table__row:hover .nn-table__body-cell.nn-table__fixed-left::before,
  .nn-table__row:hover .nn-table__body-cell.nn-table__fixed-right::before {
    background-color: var(--gray-1);
    background-image: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%);
  }

  .nn-table__empty {
    height: var(--nn-table-row-height, 60px);
    padding: var(--space8) var(--space16);
    border-bottom: 1px solid var(--gray-8);
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    text-align: center;
  }

  .nn-table__fixed-left,
  .nn-table__fixed-right {
    position: sticky;
    background: var(--gray-1) !important;
    background-clip: padding-box;
    overflow: hidden;
  }

  .nn-table__fixed-left::before,
  .nn-table__fixed-right::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-color: var(--gray-1);
    background-image: none;
  }

  .nn-table__fixed-left > *,
  .nn-table__fixed-right > * {
    position: relative;
    z-index: 1;
  }

  .nn-table__fixed-left {
    z-index: 8;
  }

  .nn-table__fixed-right {
    z-index: 8;
  }

  .nn-table--has-scroll-left .nn-table__fixed-left {
    box-shadow: 1px 0 0 var(--gray-8);
  }

  .nn-table--has-scroll-right .nn-table__fixed-right {
    box-shadow: -1px 0 0 var(--gray-8);
  }

  .nn-table--sticky-header .nn-table__head-cell.nn-table__fixed-left,
  .nn-table--sticky-header .nn-table__head-cell.nn-table__fixed-right {
    z-index: 12;
  }

  .nn-table--sticky-footer .nn-table__foot-cell.nn-table__fixed-left,
  .nn-table--sticky-footer .nn-table__foot-cell.nn-table__fixed-right {
    z-index: 12;
  }

  .nn-table__head-cell.nn-table__fixed-left,
  .nn-table__head-cell.nn-table__fixed-right,
  .nn-table__foot-cell.nn-table__fixed-left,
  .nn-table__foot-cell.nn-table__fixed-right {
    background-color: var(--gray-1) !important;
    background-image: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%) !important;
  }

  .nn-table__head-cell.nn-table__fixed-left::before,
  .nn-table__head-cell.nn-table__fixed-right::before,
  .nn-table__foot-cell.nn-table__fixed-left::before,
  .nn-table__foot-cell.nn-table__fixed-right::before {
    background-color: var(--gray-1);
    background-image: linear-gradient(90deg, var(--gray-10) 0%, var(--gray-10) 100%);
  }

  .nn-table__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
  }

  .nn-table__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    padding: var(--space4) var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    font-family: var(--font-family-main);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-table__action--primary {
    background: var(--gray-3);
    color: var(--gray-1);
  }

  .nn-table__action--primary:hover {
    background: var(--gray-4);
  }

  .nn-table__action--secondary {
    border: 1px solid var(--gray-9);
    background: var(--gray-9);
    color: var(--gray-4);
  }

  .nn-table__action--secondary:hover {
    border-color: var(--gray-8);
    background: var(--gray-8);
  }
`;

function injectTableStyles() {
  if (document.getElementById('nn-table-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-table-styles';
  style.textContent = TableStyles;
  document.head.appendChild(style);
}

function getColumnWidth(column) {
  const width = column.width || column.minWidth || 160;
  if (typeof width === 'number') return width;
  const parsed = parseFloat(width);
  return Number.isFinite(parsed) ? parsed : 160;
}

function createTableActionButtons(actions = []) {
  const wrap = document.createElement('span');
  wrap.className = 'nn-table__actions';

  actions.forEach(function(action) {
    if (typeof window !== 'undefined' && typeof window.nnButton === 'function') {
      wrap.appendChild(window.nnButton({
        text: action.text || '',
        variant: 'system',
        level: action.type === 'primary' ? 'primary' : 'secondary',
        size: 'small',
        disabled: Boolean(action.disabled),
        onClick: typeof action.onClick === 'function' ? action.onClick : null
      }));
      return;
    }

    if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function' && typeof window.createButton === 'function') {
      window.injectButtonStyles();
      wrap.appendChild(window.createButton({
        text: action.text || '',
        variant: 'system',
        level: action.type === 'primary' ? 'primary' : 'secondary',
        size: 'small',
        disabled: Boolean(action.disabled),
        onClick: typeof action.onClick === 'function' ? action.onClick : null
      }));
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = `nn-table__action nn-table__action--${action.type || 'secondary'}`;
    button.textContent = action.text || '';
    if (action.disabled) button.disabled = true;
    if (typeof action.onClick === 'function') button.addEventListener('click', action.onClick);
    wrap.appendChild(button);
  });

  return wrap;
}

function createTableLabel(options = {}) {
  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    return window.createLabel(Object.assign({
      text: 'LABLE',
      color: 'neutral',
      type: 'soft',
      size: 'd'
    }, options));
  }

  const fallback = document.createElement('span');
  fallback.textContent = options.text || 'LABLE';
  fallback.style.cssText = 'display:inline-flex;align-items:center;min-height:20px;padding:var(--space2) var(--space6);border-radius:2px;background:var(--gray-9);color:var(--gray-5);font-size:12px;line-height:16px;font-weight:var(--font-weight-semibold);';
  return fallback;
}

function applyFixedColumn(cell, column, fixedMeta) {
  const meta = fixedMeta.get(column);
  if (!meta) return;

  cell.classList.add(meta.side === 'left' ? 'nn-table__fixed-left' : 'nn-table__fixed-right');
  cell.style[meta.side] = `${meta.offset}px`;
}

function buildFixedMeta(columns) {
  const fixedMeta = new Map();
  let leftOffset = 0;
  columns.forEach(function(column) {
    if (column.fixed === 'left' || column.fixed === true) {
      fixedMeta.set(column, { side: 'left', offset: leftOffset });
      leftOffset += getColumnWidth(column);
    }
  });

  let rightOffset = 0;
  columns.slice().reverse().forEach(function(column) {
    if (column.fixed === 'right') {
      fixedMeta.set(column, { side: 'right', offset: rightOffset });
      rightOffset += getColumnWidth(column);
    }
  });

  return fixedMeta;
}

function setCellContent(cell, value, row, column) {
  const content = document.createElement('span');
  content.className = [
    'nn-table__cell-content',
    value instanceof Node ? 'nn-table__cell-content--inline' : ''
  ].filter(Boolean).join(' ');

  if (value instanceof Node) {
    content.appendChild(value);
  } else {
    content.textContent = value == null ? '' : String(value);
    content.title = value == null ? '' : String(value);
  }

  cell.appendChild(content);
}

function createSortableHeader(column, sortState, onSort) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = [
    'nn-table__sort-header',
    sortState && sortState.key === column.key && sortState.order ? `is-${sortState.order}` : ''
  ].filter(Boolean).join(' ');

  const title = document.createElement('span');
  title.className = 'nn-table__sort-title';
  title.textContent = Array.isArray(column.title)
    ? column.title[0] || ''
    : column.title || column.label || '';

  const icon = document.createElement('span');
  icon.className = 'nn-table__sort-icon';
  icon.setAttribute('aria-hidden', 'true');

  button.appendChild(title);
  button.appendChild(icon);
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    onSort(column);
  });

  return button;
}

function createHeaderContent(column, context = {}) {
  if (column.header instanceof Node) return column.header;

  if (typeof column.headerRender === 'function') {
    return column.headerRender(column);
  }

  if (column.sortable) {
    return createSortableHeader(column, context.sortState, context.onSort);
  }

  if (Array.isArray(column.title)) {
    const stack = document.createElement('span');
    stack.className = 'nn-table__header-stack';
    column.title.forEach(function(item, index) {
      const line = document.createElement('span');
      line.className = index === 0 ? 'nn-table__header-title' : 'nn-table__header-subtitle';
      line.textContent = item == null ? '' : String(item);
      stack.appendChild(line);
    });
    return stack;
  }

  if (column.subtitle) {
    const stack = document.createElement('span');
    stack.className = 'nn-table__header-stack';
    const title = document.createElement('span');
    title.className = 'nn-table__header-title';
    title.textContent = column.title || column.label || '';
    const subtitle = document.createElement('span');
    subtitle.className = 'nn-table__header-subtitle';
    subtitle.textContent = column.subtitle;
    stack.appendChild(title);
    stack.appendChild(subtitle);
    return stack;
  }

  return column.title || column.label || '';
}

function updateFixedColumnDividers(root) {
  const maxScrollLeft = Math.max(0, root.scrollWidth - root.clientWidth);
  const scrollLeft = Math.max(0, root.scrollLeft);
  root.classList.toggle('nn-table--has-scroll-left', scrollLeft > 0);
  root.classList.toggle('nn-table--has-scroll-right', scrollLeft < maxScrollLeft - 1);
}

function createTable(options = {}) {
  const {
    columns = [],
    data = [],
    footerData = null,
    height = 420,
    rowHeight = 60,
    headerHeight = 40,
    minWidth = 760,
    surface = 'page',
    stickyHeader = true,
    stickyFooter = false,
    fixedLeftColumns = 0,
    fixedRightColumns = 0,
    selectable = false,
    selectedRowKeys = [],
    rowKey = 'id',
    defaultSort = null,
    onSortChange = null,
    onSelectionChange = null,
    emptyText = '暂无数据',
    className = '',
    id = ''
  } = options;

  injectTableStyles();
  const selectionColumn = selectable ? {
    key: '__selection',
    width: 48,
    fixed: fixedLeftColumns > 0 ? 'left' : undefined,
    headerRender: function() {
      if (typeof window !== 'undefined' && typeof window.createCheckbox === 'function') {
        return window.createCheckbox({
          showLabel: false,
          checked: data.length > 0 && selectedKeys.size === data.length,
          half: selectedKeys.size > 0 && selectedKeys.size < data.length,
          interactive: true,
          onChange: function() {
            if (selectedKeys.size === data.length) {
              selectedKeys.clear();
            } else {
              data.forEach(function(row) {
                selectedKeys.add(String(row[rowKey]));
              });
            }
            emitSelectionChange();
            rerender();
          }
        });
      }
      return '';
    },
    render: function(value, row) {
      if (typeof window !== 'undefined' && typeof window.createCheckbox === 'function') {
        return window.createCheckbox({
          showLabel: false,
          checked: selectedKeys.has(String(row[rowKey])),
          interactive: true,
          onChange: function() {
            const key = String(row[rowKey]);
            if (selectedKeys.has(key)) {
              selectedKeys.delete(key);
            } else {
              selectedKeys.add(key);
            }
            emitSelectionChange();
            rerender();
          }
        });
      }
      return '';
    }
  } : null;

  let selectedKeys = new Set((selectedRowKeys || []).map(function(key) {
    return String(key);
  }));
  let sortState = defaultSort && defaultSort.key ? {
    key: defaultSort.key,
    order: defaultSort.order === 'desc' ? 'desc' : 'asc'
  } : null;
  const sourceColumns = selectionColumn ? [selectionColumn].concat(columns) : columns;
  const resolvedColumns = sourceColumns.map(function(column, index) {
    const resolved = Object.assign({}, column);
    if (!resolved.fixed && fixedLeftColumns > 0 && index < fixedLeftColumns) {
      resolved.fixed = 'left';
    }
    if (!resolved.fixed && fixedRightColumns > 0 && index >= sourceColumns.length - fixedRightColumns) {
      resolved.fixed = 'right';
    }
    return resolved;
  });

  const root = document.createElement('div');
  root.className = [
    'nn-table-wrap',
    surface === 'panel' ? 'nn-table-wrap--surface-panel' : '',
    className ? `${className}-wrap` : ''
  ].filter(Boolean).join(' ');
  root.style.setProperty('--nn-table-height', `${height}px`);

  const scroller = document.createElement('div');
  scroller.className = [
    'nn-table',
    surface === 'panel' ? 'nn-table--surface-panel' : '',
    stickyHeader ? 'nn-table--sticky-header' : '',
    stickyFooter ? 'nn-table--sticky-footer' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) scroller.id = id;
  scroller.style.setProperty('--nn-table-height', `${height}px`);
  scroller.style.setProperty('--nn-table-row-height', `${rowHeight}px`);
  scroller.style.setProperty('--nn-table-header-height', `${headerHeight}px`);
  scroller.style.setProperty('--nn-table-min-width', `${minWidth}px`);
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-label', '数据表格');
  scroller.tabIndex = 0;

  const fixedMeta = buildFixedMeta(resolvedColumns);
  const table = document.createElement('table');
  table.className = 'nn-table__table';

  function emitSelectionChange() {
    if (typeof onSelectionChange === 'function') {
      onSelectionChange({
        selectedRowKeys: Array.from(selectedKeys),
        selectedRows: data.filter(function(row) {
          return selectedKeys.has(String(row[rowKey]));
        })
      });
    }
  }

  function rerender() {
    thead.innerHTML = '';
    tbody.innerHTML = '';
    renderHead();
    renderBody();
  }

  function handleSort(column) {
    if (!sortState || sortState.key !== column.key || !sortState.order) {
      sortState = {
        key: column.key,
        order: 'asc'
      };
    } else if (sortState.order === 'asc') {
      sortState = {
        key: column.key,
        order: 'desc'
      };
    } else {
      sortState = null;
    }
    if (typeof onSortChange === 'function') {
      onSortChange(sortState);
    }
    rerender();
  }

  function getBodyData() {
    if (!sortState || !sortState.key) return data;
    const sorted = data.slice();
    sorted.sort(function(a, b) {
      const av = a[sortState.key];
      const bv = b[sortState.key];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      const result = String(av).localeCompare(String(bv), 'zh-Hans-CN', {
        numeric: true,
        sensitivity: 'base'
      });
      return sortState.order === 'desc' ? -result : result;
    });
    return sorted;
  }

  if (resolvedColumns.length) {
    const colgroup = document.createElement('colgroup');
    resolvedColumns.forEach(function(column) {
      const col = document.createElement('col');
      if (column.width) {
        col.style.width = typeof column.width === 'number' ? `${column.width}px` : column.width;
      }
      colgroup.appendChild(col);
    });
    table.appendChild(colgroup);
  }

  const thead = document.createElement('thead');
  function renderHead() {
    const headRow = document.createElement('tr');
    resolvedColumns.forEach(function(column) {
      const th = document.createElement('th');
      th.className = [
        'nn-table__head-cell',
        column.align === 'center' ? 'nn-table__cell--center' : '',
        column.align === 'right' ? 'nn-table__cell--right' : '',
        column.key === '__selection' ? 'nn-table__selection-cell' : ''
      ].filter(Boolean).join(' ');
      th.scope = 'col';
      setCellContent(th, createHeaderContent(column, {
        sortState,
        onSort: handleSort
      }), null, column);
      applyFixedColumn(th, column, fixedMeta);
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
  }
  renderHead();
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  function renderBody() {
    const bodyData = getBodyData();
    if (bodyData.length) {
      bodyData.forEach(function(row, rowIndex) {
        const tr = document.createElement('tr');
        tr.className = 'nn-table__row';

        resolvedColumns.forEach(function(column) {
          const td = document.createElement('td');
          td.className = [
            'nn-table__body-cell',
            column.align === 'center' ? 'nn-table__cell--center' : '',
            column.align === 'right' ? 'nn-table__cell--right' : '',
            column.key === '__selection' ? 'nn-table__selection-cell' : ''
          ].filter(Boolean).join(' ');
          applyFixedColumn(td, column, fixedMeta);

          const value = typeof column.render === 'function'
            ? column.render(row[column.key], row, column, rowIndex)
            : row[column.key];
          setCellContent(td, value, row, column);
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });
    } else {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.className = 'nn-table__empty';
      td.colSpan = Math.max(resolvedColumns.length, 1);
      td.textContent = emptyText;
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  }
  renderBody();

  table.appendChild(tbody);

  if (footerData) {
    const tfoot = document.createElement('tfoot');
    const footRow = document.createElement('tr');
    footRow.className = 'nn-table__footer-row';

    resolvedColumns.forEach(function(column) {
      const td = document.createElement('td');
      td.className = [
        'nn-table__foot-cell',
        column.align === 'center' ? 'nn-table__cell--center' : '',
        column.align === 'right' ? 'nn-table__cell--right' : ''
      ].filter(Boolean).join(' ');
      applyFixedColumn(td, column, fixedMeta);
      const value = typeof column.footerRender === 'function'
        ? column.footerRender(footerData[column.key], footerData, column)
        : footerData[column.key];
      setCellContent(td, value, footerData, column);
      footRow.appendChild(td);
    });

    tfoot.appendChild(footRow);
    table.appendChild(tfoot);
  }

  scroller.appendChild(table);
  root.appendChild(scroller);

  const verticalScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: scroller,
      container: root,
      hoverTarget: root,
      variant: 'page',
      right: 3,
      bottom: 12,
      minThumbSize: 60
    })
    : null;

  const horizontalScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: scroller,
      container: root,
      hoverTarget: root,
      direction: 'horizontal',
      left: 0,
      right: 12,
      bottom: 0,
      minThumbSize: 60,
      className: 'nn-table-wrap__scrollbar-x'
    })
    : null;

  updateFixedColumnDividers(scroller);
  requestAnimationFrame(function() {
    updateFixedColumnDividers(scroller);
    if (verticalScrollbar) verticalScrollbar.update();
    if (horizontalScrollbar) horizontalScrollbar.update();
  });
  setTimeout(function() {
    updateFixedColumnDividers(scroller);
    if (verticalScrollbar) verticalScrollbar.update();
    if (horizontalScrollbar) horizontalScrollbar.update();
  }, 0);
  scroller.addEventListener('scroll', function() {
    updateFixedColumnDividers(scroller);
  });
  window.addEventListener('resize', function() {
    updateFixedColumnDividers(scroller);
    if (verticalScrollbar) verticalScrollbar.update();
    if (horizontalScrollbar) horizontalScrollbar.update();
  });

  return root;
}

function renderTables(container, tables = []) {
  if (!container) return;
  injectTableStyles();
  container.innerHTML = '';
  tables.forEach(function(tableOptions) {
    container.appendChild(createTable(tableOptions));
  });
}

if (typeof window !== 'undefined') {
  window.injectTableStyles = injectTableStyles;
  window.createTable = createTable;
  window.createTableActionButtons = createTableActionButtons;
  window.createTableLabel = createTableLabel;
  window.renderTables = renderTables;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectTableStyles,
    createTable,
    createTableActionButtons,
    createTableLabel,
    renderTables
  };
}
