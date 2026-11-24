const DatePickerStyles = `
  .nn-date-picker {
    --nn-date-picker-width: 300px;
    --nn-date-picker-height: 40px;
    --nn-date-picker-bg: var(--gray-10);
    --nn-date-picker-border: var(--gray-8);
    --nn-date-picker-text: var(--gray-4);
    --nn-date-picker-placeholder: var(--gray-6);
    --nn-date-picker-separator: var(--gray-7);
    --nn-date-picker-icon: var(--gray-6);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: var(--nn-date-picker-width);
    min-height: var(--nn-date-picker-height);
    padding: var(--space0) var(--space12);
    border: 1px solid var(--nn-date-picker-border);
    border-radius: var(--border-radius-2r);
    background: var(--nn-date-picker-bg);
    color: var(--nn-date-picker-text);
    font-family: var(--font-family-main);
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    text-align: left;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  button.nn-date-picker:not(.is-disabled) {
    cursor: pointer;
  }

  button.nn-date-picker:not(.is-disabled) * {
    cursor: pointer;
  }

  .nn-date-picker:focus {
    outline: none;
  }

  .nn-date-picker--large {
    --nn-date-picker-height: 40px;
  }

  .nn-date-picker--default {
    --nn-date-picker-height: 32px;
  }

  .nn-date-picker--small {
    --nn-date-picker-height: 24px;
  }

  .nn-date-picker--subtler {
    --nn-date-picker-bg: var(--gray-9);
  }

  button.nn-date-picker:not(.is-disabled):not(.is-active-start):not(.is-active-end):hover,
  .nn-date-picker.is-hover {
    --nn-date-picker-bg: var(--gray-9);
  }

  .nn-date-picker.is-disabled {
    --nn-date-picker-border: var(--gray-9);
    --nn-date-picker-placeholder: var(--gray-7);
    --nn-date-picker-text: var(--gray-7);
    --nn-date-picker-icon: var(--gray-7);
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-date-picker.is-active-start,
  .nn-date-picker.is-active-end {
    --nn-date-picker-bg: var(--gray-1);
    --nn-date-picker-border: var(--gray-7);
    --nn-date-picker-icon: var(--gray-4);
  }

  .nn-date-picker.is-entered {
    --nn-date-picker-icon: var(--gray-4);
  }

  .nn-date-picker__content {
    display: flex;
    align-items: center;
    gap: var(--space20);
    min-width: 0;
    width: 252px;
    flex: 0 1 auto;
  }

  .nn-date-picker__date {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    color: var(--nn-date-picker-text);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-date-picker__date.is-placeholder {
    color: var(--nn-date-picker-placeholder);
  }

  .nn-date-picker__text {
    position: relative;
    z-index: 2;
  }

  .nn-date-picker__date.is-selected::before {
    content: "";
    position: absolute;
    left: -4px;
    right: -4px;
    top: 50%;
    height: var(--nn-date-picker-selection-height, 20px);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    transform: translateY(-50%);
    z-index: 1;
  }

  .nn-date-picker__date.is-selected::after {
    content: "";
    position: absolute;
    right: -2px;
    top: 50%;
    width: 1px;
    height: 14px;
    background: var(--gray-3);
    transform: translateY(-50%);
    z-index: 3;
  }

  .nn-date-picker--large .nn-date-picker__date.is-selected {
    --nn-date-picker-selection-height: 24px;
  }

  .nn-date-picker--default .nn-date-picker__date.is-selected {
    --nn-date-picker-selection-height: 20px;
  }

  .nn-date-picker--small .nn-date-picker__date.is-selected {
    --nn-date-picker-selection-height: 16px;
  }

  .nn-date-picker__separator {
    color: var(--nn-date-picker-separator);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    opacity: 0.7;
    white-space: nowrap;
  }

  .nn-date-picker__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: var(--nn-date-picker-icon);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-date-picker__icon .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-date-picker__icon svg {
    display: block;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
  }

  .nn-date-picker-dropdown {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: visible;
    font-family: var(--font-family-main);
  }

  .nn-date-picker-dropdown__panel {
    position: absolute;
    left: 0;
    top: calc(100% + 8px);
    z-index: 20;
    display: none;
    flex-direction: column;
    align-items: center;
    width: 438px;
    min-height: 356px;
    padding: var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    box-sizing: border-box;
  }

  .nn-date-picker-dropdown.is-open .nn-date-picker-dropdown__panel {
    display: flex;
  }

  .nn-date-picker-calendar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space0);
    width: 100%;
    padding: var(--space0) var(--space16);
    box-sizing: border-box;
  }

  .nn-date-picker-calendar__nav-group {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    flex: 0 0 auto;
  }

  .nn-date-picker-calendar__nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: var(--space0);
    border: none;
    background: transparent;
    color: var(--gray-6);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-date-picker-calendar__nav:hover {
    color: var(--gray-3);
  }

  .nn-date-picker-calendar__nav svg {
    display: block;
    width: 24px;
    height: 24px;
  }

  .nn-date-picker-calendar__month {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: auto;
    flex: 1 1 auto;
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    font-weight: var(--font-weight-medium);
    white-space: pre-wrap;
  }

  .nn-date-picker-calendar__title-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: var(--space0) var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-date-picker-calendar__title-button:hover,
  .nn-date-picker-calendar__title-button.is-active {
    background: var(--gray-10);
  }

  .nn-date-picker-calendar__title-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
  }

  .nn-date-picker-calendar__body {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    padding-top: var(--space10);
  }

  .nn-date-picker-calendar__weekdays,
  .nn-date-picker-calendar__dates {
    display: grid;
    grid-template-columns: repeat(7, 58px);
  }

  .nn-date-picker-calendar__dates {
    grid-auto-rows: 40px;
  }

  .nn-date-picker-calendar__option-grid {
    display: grid;
    grid-template-columns: repeat(4, 90px);
    column-gap: calc((100% - 360px) / 3);
    row-gap: var(--space28);
    width: 380px;
    padding-top: var(--space40);
  }

  .nn-date-picker-calendar__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 40px;
    padding: var(--space0);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-date-picker-calendar__option:hover:not(.is-selected):not(.is-muted) {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-date-picker-calendar__option.is-selected {
    background: var(--gray-3);
    color: var(--gray-1);
    font-weight: var(--font-weight-semibold);
  }

  .nn-date-picker-calendar__option.is-muted {
    color: var(--gray-7);
    opacity: 0.5;
    cursor: default;
  }

  .nn-date-picker-calendar__weekday,
  .nn-date-picker-calendar__day {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    font-family: var(--font-family-main);
    text-align: center;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-date-picker-calendar__day {
    border-radius: var(--border-radius-2r);
    cursor: pointer;
  }

  .nn-date-picker-calendar__day:hover:not(.is-muted):not(.is-range-start):not(.is-range-end) {
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .nn-date-picker-calendar__day.is-muted {
    color: var(--gray-7);
    opacity: 0.5;
    cursor: default;
  }

  .nn-date-picker-calendar__day.is-today {
    color: var(--gray-3);
  }

  .nn-date-picker-calendar__day.is-today::after {
    content: "";
    position: absolute;
    left: 50%;
    top: calc(50% + 11px);
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: var(--gray-3);
    transform: translate(-50%, -50%);
  }

  .nn-date-picker-calendar__day.is-in-range {
    border-radius: 0;
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .nn-date-picker-calendar__day.is-range-start,
  .nn-date-picker-calendar__day.is-range-end {
    background: var(--gray-3);
    color: var(--gray-1);
    font-weight: var(--font-weight-semibold);
  }

  .nn-date-picker-calendar__day.is-range-start {
    border-radius: var(--border-radius-2r) 0 0 var(--border-radius-2r);
  }

  .nn-date-picker-calendar__day.is-range-end {
    border-radius: 0 var(--border-radius-2r) var(--border-radius-2r) 0;
  }

  .nn-date-picker-calendar__day.is-range-single {
    border-radius: var(--border-radius-2r);
  }
`;

function injectDatePickerStyles() {
  if (document.getElementById('nn-date-picker-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-date-picker-styles';
  style.textContent = DatePickerStyles;
  document.head.appendChild(style);
}

function createDatePicker(options = {}) {
  const {
    startDate = '',
    endDate = '',
    startPlaceholder = '选择开始时间',
    endPlaceholder = '选择结束时间',
    size = 'large',
    type = 'default',
    state = 'default',
    disabled = false,
    clearable = false,
    interactive = false,
    selectionMode = 'auto',
    onClick = null,
    width = 300,
    className = '',
    id = '',
    onChange = null,
    onClear = null
  } = options;

  injectDatePickerStyles();

  const normalizedSize = ['large', 'default', 'small'].includes(size) ? size : 'large';
  const normalizedType = type === 'subtler' ? 'subtler' : 'default';
  const isDisabled = disabled || state === 'disabled' || state === 'disable';
  const isHoverState = state === 'hover';
  const canInteract = !isDisabled && interactive;

  let currentStartDate = startDate;
  let currentEndDate = endDate;
  let activeSegment = state === 'active2' || state === 'active-end'
    ? 'end'
    : state === 'active1' || state === 'active-start'
      ? 'start'
      : '';

  const root = document.createElement(canInteract ? 'button' : 'div');
  root.className = [
    'nn-date-picker',
    `nn-date-picker--${normalizedSize}`,
    normalizedType === 'subtler' ? 'nn-date-picker--subtler' : '',
    isHoverState ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');

  if (id) root.id = id;
  if (root.tagName === 'BUTTON') root.type = 'button';
  root.style.setProperty('--nn-date-picker-width', typeof width === 'number' ? `${width}px` : width);

  const content = document.createElement('span');
  content.className = 'nn-date-picker__content';

  const startEl = document.createElement('span');
  startEl.className = 'nn-date-picker__date';
  const startText = document.createElement('span');
  startText.className = 'nn-date-picker__text';
  startEl.appendChild(startText);

  const separator = document.createElement('span');
  separator.className = 'nn-date-picker__separator';
  separator.textContent = '-';

  const endEl = document.createElement('span');
  endEl.className = 'nn-date-picker__date';
  const endText = document.createElement('span');
  endText.className = 'nn-date-picker__text';
  endEl.appendChild(endText);

  const icon = document.createElement('span');
  icon.className = 'nn-date-picker__icon';

  content.appendChild(startEl);
  content.appendChild(separator);
  content.appendChild(endEl);
  root.appendChild(content);
  root.appendChild(icon);

  function getCalendarLineIcon() {
    return [
      '<svg class="nn-date-picker__calendar-line" viewBox="0 0 20 20" fill="none" aria-hidden="true">',
      '<path d="M6.926 0H4.926V2H2C0.895 2 0 2.895 0 4V18C0 19.105 0.895 20 2 20H17.943C19.048 20 19.943 19.105 19.943 18V4C19.943 2.895 19.048 2 17.943 2H14.994V0H12.994V2H6.926V0ZM17.943 6.968H2V4H4.926V4.881H6.926V4H12.994V4.881H14.994V4H17.943V6.968ZM2 8.968H17.943V18H2V8.968Z" fill="currentColor"/>',
      '</svg>'
    ].join('');
  }

  function getVisualState() {
    if (isDisabled) return 'disabled';
    if (activeSegment === 'start') return 'active-start';
    if (activeSegment === 'end') return 'active-end';
    if (isHoverState && !currentStartDate && !currentEndDate) return 'hover';
    if (currentStartDate || currentEndDate) return 'entered';
    return 'default';
  }

  function syncState() {
    const visualState = getVisualState();
    root.dataset.state = visualState;
    root.dataset.size = normalizedSize;
    root.dataset.type = normalizedType;
    root.classList.toggle('is-disabled', visualState === 'disabled');
    root.classList.toggle('is-entered', visualState === 'entered');
    root.classList.toggle('is-hover', visualState === 'hover');
    root.classList.toggle('is-active-start', visualState === 'active-start');
    root.classList.toggle('is-active-end', visualState === 'active-end');

    startText.textContent = currentStartDate || startPlaceholder;
    endText.textContent = currentEndDate || endPlaceholder;
    startEl.classList.toggle('is-placeholder', !currentStartDate);
    endEl.classList.toggle('is-placeholder', !currentEndDate);
    startEl.classList.toggle('is-selected', visualState === 'active-start');
    endEl.classList.toggle('is-selected', visualState === 'active-end');

    const showClearIcon = clearable && (currentStartDate || currentEndDate);
    icon.classList.toggle('nn-date-picker__icon--clear', Boolean(showClearIcon));
    icon.innerHTML = showClearIcon
      ? '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>'
      : getCalendarLineIcon();
  }

  function emitChange() {
    if (typeof onChange === 'function') {
      onChange({
        startDate: currentStartDate,
        endDate: currentEndDate,
        activeSegment
      });
    }
  }

  if (canInteract) {
    root.addEventListener('click', function(event) {
      if (typeof onClick === 'function') {
        onClick(event);
      }

      if (event.target.closest('.nn-date-picker__icon--clear')) {
        currentStartDate = '';
        currentEndDate = '';
        activeSegment = '';
        syncState();
        emitChange();
        if (typeof onClear === 'function') {
          onClear();
        }
        return;
      }

      if (selectionMode === 'none') {
        return;
      }

      if (!currentStartDate) {
        currentStartDate = '2024-06-06';
        activeSegment = 'end';
      } else if (!currentEndDate) {
        currentEndDate = '2024-06-16';
        activeSegment = '';
      } else {
        activeSegment = activeSegment === 'start' ? 'end' : 'start';
      }

      syncState();
      emitChange();
    });
  }

  syncState();
  root._setValue = function(nextStartDate, nextEndDate, nextActiveSegment = '') {
    currentStartDate = nextStartDate || '';
    currentEndDate = nextEndDate || '';
    activeSegment = nextActiveSegment;
    syncState();
  };
  return root;
}

function getDatePickerArrowIcon(type) {
  if (type === 'double-left') {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M11 6L5 12L11 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 6L12 12L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  if (type === 'left') {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  if (type === 'right') {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6L12 12L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function parseDatePickerMonthLabel(label) {
  const match = String(label || '').match(/(\d{4})年\s*(\d{1,2})月/);
  if (!match) {
    const today = getDatePickerToday();
    return {
      year: today.year,
      month: today.month
    };
  }
  return {
    year: Number(match[1]),
    month: Number(match[2])
  };
}

function formatDatePickerMonthLabel(year, month) {
  return `${year}年  ${month}月`;
}

function padDatePickerPart(value) {
  return String(value).padStart(2, '0');
}

function createDatePickerDate(year, month, day) {
  return {
    year,
    month,
    day,
    value: day,
    key: `${year}-${padDatePickerPart(month)}-${padDatePickerPart(day)}`,
    time: new Date(year, month - 1, day).getTime()
  };
}

function getDatePickerToday() {
  const today = new Date();
  return createDatePickerDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
}

function getDatePickerParts(value, fallbackYear, fallbackMonth) {
  if (!value) return null;
  if (typeof value === 'string') {
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    return createDatePickerDate(Number(match[1]), Number(match[2]), Number(match[3]));
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return createDatePickerDate(value.getFullYear(), value.getMonth() + 1, value.getDate());
  }
  if (typeof value === 'object' && value.day) {
    return createDatePickerDate(
      Number(value.year || fallbackYear),
      Number(value.month || fallbackMonth),
      Number(value.day)
    );
  }
  return null;
}

function addDatePickerMonths(year, month, offset) {
  const next = new Date(year, month - 1 + offset, 1);
  return {
    year: next.getFullYear(),
    month: next.getMonth() + 1
  };
}

function buildDatePickerCalendarDays(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  const prevMonth = addDatePickerMonths(year, month, -1);
  const nextMonth = addDatePickerMonths(year, month, 1);
  const prevMonthDays = new Date(prevMonth.year, prevMonth.month, 0).getDate();
  const days = [];

  for (let index = firstWeekday - 1; index >= 0; index -= 1) {
    const day = prevMonthDays - index;
    days.push({
      ...createDatePickerDate(prevMonth.year, prevMonth.month, day),
      muted: true
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(createDatePickerDate(year, month, day));
  }

  let nextDay = 1;
  while (days.length < 42) {
    days.push({
      ...createDatePickerDate(nextMonth.year, nextMonth.month, nextDay),
      muted: true
    });
    nextDay += 1;
  }

  return days;
}

function buildDatePickerYearOptions(year) {
  const decadeStart = Math.floor(year / 10) * 10;
  const years = [];
  for (let itemYear = decadeStart - 3; itemYear <= decadeStart + 12; itemYear += 1) {
    years.push({
      value: itemYear,
      label: String(itemYear),
      muted: itemYear < decadeStart || itemYear > decadeStart + 9
    });
  }
  return years;
}

function buildDatePickerMonthOptions(year) {
  const months = Array.from({ length: 12 }, function(_, index) {
    const month = index + 1;
    return {
      value: month,
      year,
      label: `${month}月`
    };
  });
  for (let month = 1; month <= 4; month += 1) {
    months.push({
      value: month,
      year: year + 1,
      label: `${month}月`,
      muted: true
    });
  }
  return months;
}

function createDatePickerCalendarPanel(options = {}) {
  const {
    monthLabel = '',
    viewMode = 'date',
    displayYear = null,
    displayMonth = null,
    selectedStartDate = null,
    selectedEndDate = null,
    selectedStartDay = null,
    selectedEndDay = null,
    previewEndDate = null,
    previewEndDay = null,
    isPreviewing = false,
    todayDate = null,
    todayDay = null,
    onNavigate = null,
    onViewChange = null,
    onSelectYear = null,
    onSelectMonth = null,
    onSelectDate = null,
    onSelectDay = null,
    onPreviewDate = null,
    onPreviewDay = null
  } = options;

  injectDatePickerStyles();

  const parsedMonth = parseDatePickerMonthLabel(monthLabel);
  const activeYear = Number(displayYear || parsedMonth.year);
  const activeMonth = Number(displayMonth || parsedMonth.month);
  const normalizedViewMode = ['date', 'year', 'month'].includes(viewMode) ? viewMode : 'date';
  const normalizedStartDate = getDatePickerParts(selectedStartDate, activeYear, activeMonth)
    || (selectedStartDay ? createDatePickerDate(activeYear, activeMonth, selectedStartDay) : null);
  const normalizedEndDate = getDatePickerParts(selectedEndDate, activeYear, activeMonth)
    || (selectedEndDay ? createDatePickerDate(activeYear, activeMonth, selectedEndDay) : null);
  const normalizedPreviewEndDate = getDatePickerParts(previewEndDate, activeYear, activeMonth)
    || (previewEndDay ? createDatePickerDate(activeYear, activeMonth, previewEndDay) : null);
  const normalizedTodayDate = getDatePickerParts(todayDate, activeYear, activeMonth)
    || (todayDay ? createDatePickerDate(activeYear, activeMonth, todayDay) : null);

  const panel = document.createElement('div');
  panel.className = 'nn-date-picker-dropdown__panel';

  const header = document.createElement('div');
  header.className = 'nn-date-picker-calendar__header';

  const prevGroup = document.createElement('div');
  prevGroup.className = 'nn-date-picker-calendar__nav-group';
  const prevNavItems = normalizedViewMode === 'date'
    ? [
        { type: 'double-left', label: '上一年' },
        { type: 'left', label: '上一月' }
      ]
    : [
        { type: 'double-left', label: normalizedViewMode === 'year' ? '上一年代' : '上一年' }
      ];
  prevNavItems.forEach(function(item) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-date-picker-calendar__nav';
    button.setAttribute('aria-label', item.label);
    button.innerHTML = getDatePickerArrowIcon(item.type);
    button.addEventListener('click', function() {
      if (typeof onNavigate === 'function') {
        onNavigate(item.type);
      }
    });
    prevGroup.appendChild(button);
  });

  const month = document.createElement('span');
  month.className = 'nn-date-picker-calendar__month';

  if (normalizedViewMode === 'date') {
    const yearButton = document.createElement('button');
    yearButton.type = 'button';
    yearButton.className = 'nn-date-picker-calendar__title-button';
    yearButton.textContent = `${activeYear}年`;
    yearButton.setAttribute('aria-label', '选择年份');
    yearButton.addEventListener('click', function() {
      if (typeof onViewChange === 'function') {
        onViewChange('year');
      }
    });

    const monthButton = document.createElement('button');
    monthButton.type = 'button';
    monthButton.className = 'nn-date-picker-calendar__title-button';
    monthButton.textContent = `${activeMonth}月`;
    monthButton.setAttribute('aria-label', '选择月份');
    monthButton.addEventListener('click', function() {
      if (typeof onViewChange === 'function') {
        onViewChange('month');
      }
    });

    month.appendChild(yearButton);
    month.appendChild(monthButton);
  } else {
    const titleText = document.createElement('span');
    titleText.className = 'nn-date-picker-calendar__title-text';
    if (normalizedViewMode === 'year') {
      const decadeStart = Math.floor(activeYear / 10) * 10;
      titleText.textContent = `${decadeStart}年 ~ ${decadeStart + 9}年`;
    } else {
      titleText.textContent = `${activeYear}年`;
    }
    month.appendChild(titleText);
  }

  const nextGroup = document.createElement('div');
  nextGroup.className = 'nn-date-picker-calendar__nav-group';
  const nextNavItems = normalizedViewMode === 'date'
    ? [
        { type: 'right', label: '下一月' },
        { type: 'double-right', label: '下一年' }
      ]
    : [
        { type: 'double-right', label: normalizedViewMode === 'year' ? '下一年代' : '下一年' }
      ];
  nextNavItems.forEach(function(item) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-date-picker-calendar__nav';
    button.setAttribute('aria-label', item.label);
    button.innerHTML = getDatePickerArrowIcon(item.type);
    button.addEventListener('click', function() {
      if (typeof onNavigate === 'function') {
        onNavigate(item.type);
      }
    });
    nextGroup.appendChild(button);
  });

  header.appendChild(prevGroup);
  header.appendChild(month);
  header.appendChild(nextGroup);

  if (normalizedViewMode === 'year' || normalizedViewMode === 'month') {
    const optionGrid = document.createElement('div');
    optionGrid.className = 'nn-date-picker-calendar__option-grid';
    const optionItems = normalizedViewMode === 'year'
      ? buildDatePickerYearOptions(activeYear)
      : buildDatePickerMonthOptions(activeYear);
    const selectedValue = normalizedViewMode === 'year' ? activeYear : activeMonth;

    optionItems.forEach(function(item) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = [
        'nn-date-picker-calendar__option',
        item.value === selectedValue && !item.muted ? 'is-selected' : '',
        item.muted ? 'is-muted' : ''
      ].filter(Boolean).join(' ');
      button.textContent = item.label;
      button.disabled = Boolean(item.muted);
      button.setAttribute('aria-label', item.label);
      button.addEventListener('click', function() {
        if (item.muted) return;
        if (normalizedViewMode === 'year' && typeof onSelectYear === 'function') {
          onSelectYear(item.value);
        }
        if (normalizedViewMode === 'month' && typeof onSelectMonth === 'function') {
          onSelectMonth(item.value);
        }
      });
      optionGrid.appendChild(button);
    });

    panel.appendChild(header);
    panel.appendChild(optionGrid);
    return panel;
  }

  const body = document.createElement('div');
  body.className = 'nn-date-picker-calendar__body';

  const weekdays = document.createElement('div');
  weekdays.className = 'nn-date-picker-calendar__weekdays';
  ['一', '二', '三', '四', '五', '六', '日'].forEach(function(label) {
    const item = document.createElement('span');
    item.className = 'nn-date-picker-calendar__weekday';
    item.textContent = label;
    weekdays.appendChild(item);
  });

  const dates = document.createElement('div');
  dates.className = 'nn-date-picker-calendar__dates';

  const calendarDays = buildDatePickerCalendarDays(activeYear, activeMonth);

  let currentSelectedStartDate = normalizedStartDate;
  let currentSelectedEndDate = normalizedEndDate;
  let currentPreviewEndDate = normalizedPreviewEndDate;
  let currentIsPreviewing = isPreviewing;

  function syncRangeState() {
    const visualEndDate = currentSelectedEndDate || currentPreviewEndDate || currentSelectedStartDate;
    const hasRange = Boolean(currentSelectedStartDate && visualEndDate);
    const rangeStart = hasRange ? Math.min(currentSelectedStartDate.time, visualEndDate.time) : 0;
    const rangeEnd = hasRange ? Math.max(currentSelectedStartDate.time, visualEndDate.time) : 0;

    dates.querySelectorAll('.nn-date-picker-calendar__day').forEach(function(button) {
      const dayTime = Number(button.dataset.time);
      const isMuted = button.classList.contains('is-muted');

      button.classList.remove('is-range-start', 'is-range-end', 'is-range-single', 'is-in-range');
      if (isMuted || !hasRange) return;

      if (dayTime === rangeStart && dayTime === rangeEnd) {
        button.classList.add('is-range-start', 'is-range-end', 'is-range-single');
      } else if (dayTime === rangeStart) {
        button.classList.add('is-range-start');
      } else if (dayTime === rangeEnd) {
        button.classList.add('is-range-end');
      } else if (dayTime > rangeStart && dayTime < rangeEnd) {
        button.classList.add('is-in-range');
      }
    });
  }

  calendarDays.forEach(function(day) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-date-picker-calendar__day';
    button.textContent = String(day.value);
    button.dataset.day = String(day.value);
    button.dataset.date = day.key;
    button.dataset.time = String(day.time);
    if (day.muted) {
      button.classList.add('is-muted');
      button.disabled = true;
    }
    if (!day.muted && normalizedTodayDate && day.time === normalizedTodayDate.time) {
      button.classList.add('is-today');
    }

    function handlePreview() {
      if (
        !currentIsPreviewing
        || day.muted
        || (typeof onPreviewDate !== 'function' && typeof onPreviewDay !== 'function')
      ) return;
      if (typeof onPreviewDate === 'function') {
        onPreviewDate(day);
      }
      if (typeof onPreviewDay === 'function') {
        onPreviewDay(day.value);
      }
    }

    button.addEventListener('pointerenter', handlePreview);
    button.addEventListener('mouseenter', handlePreview);
    button.addEventListener('mouseover', handlePreview);

    button.addEventListener('click', function() {
      if (typeof onSelectDate === 'function') {
        onSelectDate(day);
      }
      if (typeof onSelectDay === 'function') {
        onSelectDay(day.value);
      }
    });

    dates.appendChild(button);
  });

  function handleGridPreview(event) {
    if (
      !currentIsPreviewing
      || (typeof onPreviewDate !== 'function' && typeof onPreviewDay !== 'function')
    ) return;
    const target = event.target.closest('.nn-date-picker-calendar__day');
    if (!target || target.classList.contains('is-muted')) return;
    const dayValue = Number(target.dataset.day);
    if (!dayValue) return;
    if (typeof onPreviewDate === 'function') {
      onPreviewDate(getDatePickerParts(target.dataset.date, activeYear, activeMonth));
    }
    if (typeof onPreviewDay === 'function') {
      onPreviewDay(dayValue);
    }
  }

  dates.addEventListener('pointerover', handleGridPreview);
  dates.addEventListener('pointermove', handleGridPreview);
  dates.addEventListener('mouseover', handleGridPreview);
  dates.addEventListener('mousemove', handleGridPreview);

  syncRangeState();
  panel._setRangeState = function(nextState = {}) {
    if (Object.prototype.hasOwnProperty.call(nextState, 'selectedStartDate')) {
      currentSelectedStartDate = getDatePickerParts(nextState.selectedStartDate, activeYear, activeMonth);
    } else if (Object.prototype.hasOwnProperty.call(nextState, 'selectedStartDay')) {
      currentSelectedStartDate = nextState.selectedStartDay
        ? createDatePickerDate(activeYear, activeMonth, nextState.selectedStartDay)
        : null;
    }
    if (Object.prototype.hasOwnProperty.call(nextState, 'selectedEndDate')) {
      currentSelectedEndDate = getDatePickerParts(nextState.selectedEndDate, activeYear, activeMonth);
    } else if (Object.prototype.hasOwnProperty.call(nextState, 'selectedEndDay')) {
      currentSelectedEndDate = nextState.selectedEndDay
        ? createDatePickerDate(activeYear, activeMonth, nextState.selectedEndDay)
        : null;
    }
    if (Object.prototype.hasOwnProperty.call(nextState, 'previewEndDate')) {
      currentPreviewEndDate = getDatePickerParts(nextState.previewEndDate, activeYear, activeMonth);
    } else if (Object.prototype.hasOwnProperty.call(nextState, 'previewEndDay')) {
      currentPreviewEndDate = nextState.previewEndDay
        ? createDatePickerDate(activeYear, activeMonth, nextState.previewEndDay)
        : null;
    }
    if (Object.prototype.hasOwnProperty.call(nextState, 'isPreviewing')) {
      currentIsPreviewing = nextState.isPreviewing;
    }
    syncRangeState();
  };

  body.appendChild(weekdays);
  body.appendChild(dates);
  panel.appendChild(header);
  panel.appendChild(body);
  return panel;
}

function createDatePickerDropdown(options = {}) {
  const {
    panelOpen = false,
    monthLabel = '',
    displayYear = null,
    displayMonth = null,
    selectedStartDate = null,
    selectedEndDate = null,
    selectedStartDay = null,
    selectedEndDay = null,
    todayDate = null,
    todayDay = null,
    size = 'large',
    type = 'default',
    clearable = true,
    width = 300,
    className = '',
    id = '',
    onChange = null
  } = options;

  injectDatePickerStyles();

  const parsedMonth = parseDatePickerMonthLabel(monthLabel);
  const startDateFromOptions = getDatePickerParts(selectedStartDate, parsedMonth.year, parsedMonth.month);
  const endDateFromOptions = getDatePickerParts(selectedEndDate, parsedMonth.year, parsedMonth.month);
  const initialTodayDate = getDatePickerParts(todayDate, parsedMonth.year, parsedMonth.month)
    || (todayDay ? createDatePickerDate(parsedMonth.year, parsedMonth.month, todayDay) : null)
    || getDatePickerToday();
  let currentYear = Number(displayYear || startDateFromOptions?.year || initialTodayDate.year);
  let currentMonth = Number(displayMonth || startDateFromOptions?.month || initialTodayDate.month);
  let isOpen = Boolean(panelOpen);
  let rangeStart = startDateFromOptions
    || (selectedStartDay ? createDatePickerDate(currentYear, currentMonth, selectedStartDay) : null);
  let rangeEnd = endDateFromOptions
    || (selectedEndDay ? createDatePickerDate(currentYear, currentMonth, selectedEndDay) : null);
  let previewEnd = null;
  let pickingEnd = false;
  let panelMode = 'date';

  const root = document.createElement('div');
  root.className = ['nn-date-picker-dropdown', isOpen ? 'is-open' : '', className].filter(Boolean).join(' ');
  if (id) root.id = id;

  const trigger = createDatePicker({
    startDate: formatDate(rangeStart),
    endDate: formatDate(rangeEnd),
    size,
    type,
    clearable,
    interactive: true,
    selectionMode: 'none',
    width,
    onClick: function(event) {
      if (!event.target.closest('.nn-date-picker__icon--clear')) {
        setOpen(!isOpen);
      }
    },
    onClear: function() {
      resetCalendarToToday();
      renderPanel();
      if (typeof onChange === 'function') {
        onChange({
          startDate: '',
          endDate: '',
          displayYear: currentYear,
          displayMonth: currentMonth
        });
      }
    }
  });

  let panel = null;

  function formatDate(date) {
    return date ? date.key : '';
  }

  function getCurrentTodayDate() {
    return getDatePickerParts(todayDate, currentYear, currentMonth)
      || (todayDay ? createDatePickerDate(currentYear, currentMonth, todayDay) : null)
      || getDatePickerToday();
  }

  function resetCalendarToToday() {
    const today = getCurrentTodayDate();
    currentYear = Number(displayYear || today.year);
    currentMonth = Number(displayMonth || today.month);
    rangeStart = null;
    rangeEnd = null;
    previewEnd = null;
    pickingEnd = false;
    panelMode = 'date';
    trigger._setValue('', '');
  }

  function setOpen(nextOpen) {
    if (nextOpen && !rangeStart && !rangeEnd) {
      resetCalendarToToday();
      renderPanel();
    }
    isOpen = Boolean(nextOpen);
    root.classList.toggle('is-open', isOpen);
  }

  function handleOutsideClick(event) {
    const eventPath = typeof event.composedPath === 'function' ? event.composedPath() : [];
    if (!isOpen || root.contains(event.target) || eventPath.includes(root)) return;
    setOpen(false);
  }

  function navigateCalendar(type) {
    if (panelMode === 'year') {
      currentYear += type === 'double-left' || type === 'left' ? -10 : 10;
      renderPanel();
      return;
    }

    if (panelMode === 'month') {
      currentYear += type === 'double-left' || type === 'left' ? -1 : 1;
      renderPanel();
      return;
    }

    const offset = type === 'double-left'
      ? -12
      : type === 'left'
        ? -1
        : type === 'right'
          ? 1
          : 12;
    const nextMonth = addDatePickerMonths(currentYear, currentMonth, offset);
    currentYear = nextMonth.year;
    currentMonth = nextMonth.month;
    renderPanel();
  }

  function changePanelMode(nextMode) {
    panelMode = nextMode;
    renderPanel();
  }

  function syncPanelRange() {
    if (!panel || typeof panel._setRangeState !== 'function') return;
    panel._setRangeState({
      selectedStartDate: rangeStart,
      selectedEndDate: rangeEnd,
      previewEndDate: previewEnd,
      isPreviewing: pickingEnd
    });
  }

  function renderPanel() {
    if (panel) {
      panel.remove();
    }

    panel = createDatePickerCalendarPanel({
      monthLabel: formatDatePickerMonthLabel(currentYear, currentMonth),
      viewMode: panelMode,
      displayYear: currentYear,
      displayMonth: currentMonth,
      selectedStartDate: rangeStart,
      selectedEndDate: rangeEnd,
      selectedStartDay: rangeStart ? rangeStart.day : null,
      selectedEndDay: rangeEnd ? rangeEnd.day : null,
      previewEndDate: previewEnd,
      previewEndDay: previewEnd ? previewEnd.day : null,
      isPreviewing: pickingEnd,
      todayDate: getCurrentTodayDate(),
      todayDay: null,
      onNavigate: navigateCalendar,
      onViewChange: changePanelMode,
      onSelectYear: function(year) {
        currentYear = year;
        panelMode = 'date';
        renderPanel();
      },
      onSelectMonth: function(month) {
        currentMonth = month;
        panelMode = 'date';
        renderPanel();
      },
      onPreviewDate: function(date) {
        if (!pickingEnd || (previewEnd && previewEnd.time === date.time)) return;
        previewEnd = date;
        syncPanelRange();
      },
      onSelectDate: function(date) {
        if (!rangeStart || (rangeStart && rangeEnd && !pickingEnd)) {
          rangeStart = date;
          rangeEnd = null;
          previewEnd = date;
          pickingEnd = true;
          currentYear = date.year;
          currentMonth = date.month;
          trigger._setValue(formatDate(rangeStart), '', 'end');
        } else {
          rangeEnd = date;
          if (rangeEnd.time < rangeStart.time) {
            const nextEnd = rangeStart;
            rangeStart = rangeEnd;
            rangeEnd = nextEnd;
          }
          previewEnd = null;
          pickingEnd = false;
          trigger._setValue(formatDate(rangeStart), formatDate(rangeEnd));
          syncPanelRange();
          setOpen(false);
        }

        syncPanelRange();
        if (typeof onChange === 'function') {
          onChange({
            startDate: formatDate(rangeStart),
            endDate: formatDate(rangeEnd),
            displayYear: currentYear,
            displayMonth: currentMonth
          });
        }
      }
    });
    root.appendChild(panel);
  }

  root.appendChild(trigger);
  renderPanel();
  document.addEventListener('click', handleOutsideClick);

  root._setOpen = setOpen;
  root._destroy = function() {
    document.removeEventListener('click', handleOutsideClick);
  };
  return root;
}

function renderDatePickers(container, datePickers) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  datePickers.forEach(function(options) {
    container.appendChild(createDatePicker(options));
  });
}

function nnDatePicker(options) {
  injectDatePickerStyles();
  return createDatePicker(options);
}

if (typeof window !== 'undefined') {
  window.injectDatePickerStyles = injectDatePickerStyles;
  window.createDatePicker = createDatePicker;
  window.createDatePickerCalendarPanel = createDatePickerCalendarPanel;
  window.createDatePickerDropdown = createDatePickerDropdown;
  window.renderDatePickers = renderDatePickers;
  window.nnDatePicker = nnDatePicker;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectDatePickerStyles,
    createDatePicker,
    createDatePickerCalendarPanel,
    createDatePickerDropdown,
    renderDatePickers,
    nnDatePicker
  };
}
