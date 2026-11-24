const LeaderboardStyles = `
  .nn-leaderboard {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 280px;
    height: var(--nn-leaderboard-height, 364px);
    min-width: 0;
    padding: var(--space6) var(--space12) var(--space12);
    overflow: hidden;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
    color: var(--gray-4);
    font-family: var(--font-family-main);
  }

  .nn-leaderboard__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space12);
    min-width: 0;
    height: 38px;
  }

  div.nn-leaderboard__tabs.nn-tabs-primary {
    flex: 1 1 auto;
    min-width: 0;
    column-gap: var(--space20);
  }

  div.nn-leaderboard__tabs.nn-tabs-primary .nn-tab {
    height: 38px;
    padding: var(--space10) var(--space0);
    font-size: 14px;
    line-height: 20px;
  }

  .nn-leaderboard__more {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space2);
    flex: 0 0 auto;
    border: 0;
    padding: var(--space0);
    background: transparent;
    color: var(--gray-6);
    font-family: var(--font-family-main);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-leaderboard__more:hover {
    color: var(--gray-4);
  }

  .nn-leaderboard__more-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: currentColor;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-leaderboard__more-icon::before {
    color: currentColor;
  }

  .nn-leaderboard__filters {
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    width: 100%;
    min-width: 0;
  }

  .nn-leaderboard__filters.is-region-visible {
    gap: var(--space16);
  }

  .nn-leaderboard__body {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    min-width: 0;
    min-height: 0;
    flex: 1 1 auto;
  }

  .nn-leaderboard__region-wrap {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-4px);
    transition:
      max-height 0.26s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.18s ease,
      transform 0.26s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-leaderboard__region-wrap.is-visible {
    max-height: 40px;
    opacity: 1;
    transform: translateY(0);
    overflow: visible;
    z-index: 12;
  }

  .nn-leaderboard__region-inner {
    position: relative;
    overflow: visible;
  }

  div.nn-leaderboard__subtabs.nn-tabs-secondary {
    width: 100%;
    max-width: 100%;
    height: 32px;
    column-gap: var(--space12);
    font-weight: var(--font-weight-normal);
  }

  div.nn-leaderboard__subtabs.nn-tabs-secondary .nn-tab {
    flex: 1 1 0;
    height: 32px;
    min-width: 0;
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-leaderboard .nn-leaderboard__select.nn-dropdown,
  .nn-leaderboard .nn-leaderboard__select.nn-dropdown.nn-dropdown-medium {
    width: 100%;
    max-width: none;
    align-self: stretch;
    gap: var(--space4);
  }

  .nn-leaderboard__select.nn-dropdown-open {
    z-index: 20;
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-trigger {
    width: 100%;
    height: 32px;
    min-height: 32px;
    padding: var(--space0);
    background: var(--gray-9);
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-contents {
    width: 100%;
    height: 30px;
    min-height: 30px;
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-text-stack,
  .nn-leaderboard__select.nn-dropdown .nn-dropdown-text {
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-leading {
    color: var(--gray-5);
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-value {
    color: var(--gray-3);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-icon-end {
    width: var(--icon-size-x14);
    height: calc(var(--icon-size-x14) + var(--space2));
  }

  .nn-leaderboard__select.nn-dropdown .nn-dropdown-panel {
    width: 100%;
  }

  .nn-leaderboard__list-wrap {
    position: relative;
    width: 100%;
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .nn-leaderboard__list {
    display: flex;
    flex-direction: column;
    gap: var(--space6);
    width: 100%;
    height: 100%;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .nn-leaderboard__row {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 100%;
    min-width: 0;
    height: 36px;
    min-height: 36px;
    padding: var(--space6) var(--space6) var(--space6) var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    box-sizing: border-box;
    text-align: left;
    cursor: pointer;
  }

  .nn-leaderboard__row:hover {
    background: transparent;
  }

  .nn-leaderboard__rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    flex: 0 0 20px;
    color: var(--gray-6);
    font-family: var(--font-family-din);
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    font-variant-numeric: tabular-nums;
  }

  .nn-leaderboard__row[data-rank="1"] .nn-leaderboard__rank {
    color: #ffbc14;
  }

  .nn-leaderboard__row[data-rank="2"] .nn-leaderboard__rank {
    color: #8ac9ff;
  }

  .nn-leaderboard__row[data-rank="3"] .nn-leaderboard__rank {
    color: #e4ae7b;
  }

  .nn-leaderboard .nn-avatar {
    flex: 0 0 auto;
  }

  .nn-leaderboard__identity {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    flex: 0 1 auto;
  }

  .nn-leaderboard__name {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    text-decoration: none;
    text-underline-offset: 2px;
    white-space: nowrap;
  }

  .nn-leaderboard__row:hover .nn-leaderboard__name,
  .nn-leaderboard__row.is-hover .nn-leaderboard__name {
    text-decoration: underline;
    cursor: pointer;
  }

  .nn-leaderboard__city {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    height: 16px;
    padding: var(--space2) var(--space4);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    color: var(--gray-5);
    font-size: 10px;
    font-weight: var(--font-weight-normal);
    line-height: 12px;
    white-space: nowrap;
  }

  .nn-leaderboard__identity .nn-equity-rank {
    flex: 0 0 auto;
  }

  .nn-leaderboard__value {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
    margin-left: auto;
    min-width: 0;
    color: var(--gray-4);
    font-size: 13px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    white-space: nowrap;
  }

  .nn-leaderboard__value .nn-equity-rank {
    flex: 0 0 auto;
  }

  .nn-leaderboard__self {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 100%;
    min-height: 52px;
    padding: var(--space8) var(--space10) var(--space10) var(--space12);
    border-radius: 0 0 var(--border-radius-4r) var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
    isolation: isolate;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(100%);
    transition: transform 0.2s ease, visibility 0s linear 0.2s;
  }

  .nn-leaderboard__self::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: var(--gray-10);
    pointer-events: none;
  }

  .nn-leaderboard:hover .nn-leaderboard__self,
  .nn-leaderboard:focus-within .nn-leaderboard__self {
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
    transition: transform 0.2s ease, visibility 0s linear 0s;
  }

  .nn-leaderboard__self-rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    flex: 0 0 20px;
    color: var(--gray-6);
    font-family: var(--font-family-din);
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    white-space: nowrap;
  }

  .nn-leaderboard__self-copy {
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-leaderboard__self-title {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-leaderboard__self-name {
    overflow: hidden;
    color: var(--gray-4);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-leaderboard__self-title .nn-equity-rank {
    flex: 0 0 auto;
  }

  .nn-leaderboard__self-desc {
    overflow: hidden;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-leaderboard__self-value {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
    min-width: 58px;
    color: var(--gray-4);
    font-size: 13px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    white-space: nowrap;
  }

  .nn-leaderboard__self-value .nn-equity-rank {
    flex: 0 0 auto;
  }

  .nn-leaderboard--standings {
    width: var(--nn-leaderboard-width, 280px);
    max-width: 100%;
    height: var(--nn-leaderboard-height, 506px);
    flex: 0 0 auto;
    gap: var(--space10);
    padding: var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    overflow: visible;
  }

  .nn-leaderboard--standings .nn-leaderboard__header {
    flex: 0 0 38px;
    gap: var(--space8);
  }

  .nn-leaderboard--standings .nn-leaderboard__tabs.nn-tabs-primary {
    flex: 0 1 auto;
    column-gap: var(--space16);
  }

  .nn-leaderboard--standings .nn-leaderboard__more {
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-leaderboard--standings .nn-leaderboard__body {
    gap: var(--space16);
  }

  .nn-leaderboard--standings .nn-leaderboard__filters {
    flex: 0 0 auto;
    gap: var(--space8);
  }

  .nn-leaderboard--standings .nn-leaderboard__subtabs.nn-tabs-secondary {
    column-gap: var(--space8);
  }

  .nn-leaderboard--standings .nn-leaderboard__subtabs.nn-tabs-secondary .nn-tab {
    padding: var(--space6) var(--space8);
  }

  .nn-leaderboard__standings-selects {
    display: flex;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-leaderboard__standings-selects[hidden],
  .nn-leaderboard__standings-select[hidden] {
    display: none;
  }

  .nn-leaderboard__standings-select {
    flex: 1 1 0;
    min-width: 0;
  }

  .nn-leaderboard--standings .nn-leaderboard__list-wrap {
    min-height: 0;
  }

  .nn-leaderboard--standings .nn-leaderboard__list {
    padding-right: var(--space8);
    overscroll-behavior: contain;
  }

  .nn-leaderboard--standings .nn-leaderboard__row {
    display: grid;
    grid-template-columns: 20px 24px minmax(0, 1fr) 40px;
    flex: 0 0 36px;
    padding: var(--space0);
    color: var(--gray-4);
  }

  .nn-leaderboard--standings .nn-leaderboard__rank {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
  }

  .nn-leaderboard--standings .nn-leaderboard__row[data-rank="1"] .nn-leaderboard__rank { color: var(--Leaderboard-Rank-First); }
  .nn-leaderboard--standings .nn-leaderboard__row[data-rank="2"] .nn-leaderboard__rank { color: var(--Leaderboard-Rank-Second); }
  .nn-leaderboard--standings .nn-leaderboard__row[data-rank="3"] .nn-leaderboard__rank { color: var(--Leaderboard-Rank-Third); }

  .nn-leaderboard--standings .nn-avatar { --nn-avatar-radius: 100%; }
  .nn-leaderboard--standings .nn-leaderboard__identity { gap: var(--space6); }
  .nn-leaderboard--standings .nn-label { flex: 0 0 auto; }

  .nn-leaderboard--standings .nn-leaderboard__name {
    color: var(--gray-4);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-leaderboard--standings .nn-leaderboard__value {
    color: var(--gray-5);
    font-family: var(--font-family-din);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
  }

  .nn-leaderboard--standings .nn-leaderboard__self {
    display: grid;
    grid-template-columns: 28px 24px minmax(0, 1fr) 48px;
    gap: var(--space8);
    min-height: 54px;
    padding: var(--space8);
    border-radius: var(--border-radius-2r);
    z-index: 2;
    opacity: 0;
    transform: translateY(var(--space4));
    transition: opacity 160ms ease, transform 160ms ease, visibility 160ms;
  }

  .nn-leaderboard--standings:hover .nn-leaderboard__self,
  .nn-leaderboard--standings:focus-within .nn-leaderboard__self {
    opacity: 1;
    transform: translateY(var(--space0));
  }

  .nn-leaderboard--standings .nn-leaderboard__self-rank {
    justify-content: flex-start;
    width: auto;
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-leaderboard--standings .nn-leaderboard__self-name {
    color: var(--gray-3);
    font-weight: var(--font-weight-semibold);
  }

  .nn-leaderboard--standings .nn-leaderboard__self-value {
    flex-direction: column;
    align-items: flex-end;
    min-width: 0;
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
  }

  .nn-leaderboard__self-unit {
    color: var(--gray-6);
    font-family: var(--font-family-main);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }
`;

const leaderboardDefaultAvatars = [
  '../image/Avatar/头像1098.png',
  '../image/Avatar/头像619.png',
  '../image/Avatar/头像624.png',
  '../image/Avatar/头像546.png',
  '../image/Avatar/头像746.png',
  '../image/Avatar/头像829.png',
  '../image/Avatar/头像800.png',
  '../image/Avatar/头像551.png',
  '../image/Avatar/头像753.png',
  '../image/Avatar/头像974.png',
  '../image/Avatar/头像637.png',
  '../image/Avatar/头像1100.png'
];

const leaderboardDefaultRows = [
  { rank: 1, name: '亚洲暴龙兽', city: '武汉', wins: '吃鸡23次', rankLv: 10 },
  { rank: 2, name: '拖鞋也能赢', city: '上海', wins: '吃鸡21次', rankLv: 9 },
  { rank: 3, name: '今晚不落地', city: '广州', wins: '吃鸡18次', rankLv: 8 },
  { rank: 4, name: '圈边观察员阿北', city: '成都', wins: '吃鸡16次', rankLv: 7 },
  { rank: 5, name: '雨林收割', city: '杭州', wins: '吃鸡15次', rankLv: 7 },
  { rank: 6, name: '一枪一个梦', city: '南京', wins: '吃鸡13次', rankLv: 6 },
  { rank: 7, name: '港口狙神小队长', city: '深圳', wins: '吃鸡12次', rankLv: 6 },
  { rank: 8, name: '海岛快递员', city: '重庆', wins: '吃鸡11次', rankLv: 5 },
  { rank: 9, name: '苟到天亮', city: '长沙', wins: '吃鸡10次', rankLv: 5 },
  { rank: 10, name: '北坡独狼七号', city: '西安', wins: '吃鸡9次', rankLv: 4 },
  { rank: 11, name: '北坡独狼', city: '苏州', wins: '吃鸡8次', rankLv: 4 },
  { rank: 12, name: '楼顶伏地魔', city: '郑州', wins: '吃鸡7次', rankLv: 3 }
];

function injectLeaderboardStyles() {
  if (document.getElementById('nn-leaderboard-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-leaderboard-styles';
  style.textContent = LeaderboardStyles;
  document.head.appendChild(style);
}

function createLeaderboardElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined && text !== null) el.textContent = String(text);
  return el;
}

function createLeaderboardTabs(tabs, activeIndex, className, onChange) {
  const normalizedTabs = (tabs || []).map(function(tab) {
    return typeof tab === 'string' ? { name: tab } : tab;
  });

  if (typeof window !== 'undefined' && typeof window.createTabs === 'function') {
    const tabsComponent = window.createTabs({
      type: className === 'nn-leaderboard__tabs' ? 'primary' : 'secondary',
      tabs: normalizedTabs,
      defaultActive: activeIndex,
      onChange
    });
    tabsComponent.classList.add(className);
    return tabsComponent;
  }

  const wrap = createLeaderboardElement('div', className);
  (tabs || []).forEach(function(tab, index) {
    const label = typeof tab === 'string' ? tab : tab.name;
    const btn = createLeaderboardElement('button', className === 'nn-leaderboard__tabs' ? 'nn-tab' : 'nn-tab', label);
    btn.type = 'button';
    if (index === activeIndex) btn.classList.add('active');
    btn.addEventListener('click', function() {
      wrap.querySelectorAll('button').forEach(function(item) {
        item.classList.remove('active');
      });
      btn.classList.add('active');
      if (typeof onChange === 'function') {
        onChange({ index, tab, tabs });
      }
    });
    wrap.appendChild(btn);
  });
  return wrap;
}

function createLeaderboardDropdown(options = {}) {
  const {
    value = '湖北',
    icon = 'nicon-a-Navigation-linedingwei-xianxing1',
    items = ['湖北', '广东', '上海', '浙江']
  } = options;

  const normalizedItems = items.map(function(item) {
    return typeof item === 'string' ? { label: item, value: item } : item;
  });

  if (typeof window !== 'undefined' && typeof window.createDropdownMenu === 'function') {
    const selectedIndex = Math.max(0, normalizedItems.findIndex(function(item) {
      return item.value === value || item.label === value;
    }));
    return window.createDropdownMenu({
      appearance: 'filled',
      size: 'medium',
      value,
      items: normalizedItems,
      selectedIndex,
      clearable: false,
      leadingIcon: `<i class="nnicon ${icon}"></i>`,
      className: 'nn-leaderboard__select'
    });
  }

  const root = createLeaderboardElement('div', 'nn-leaderboard__select');
  const trigger = createLeaderboardElement('button', 'nn-leaderboard__select-trigger');
  trigger.type = 'button';

  const copy = createLeaderboardElement('span', 'nn-leaderboard__select-copy');
  const leading = createLeaderboardElement('i', `nnicon ${icon} nn-leaderboard__select-icon`);
  const text = createLeaderboardElement('span', 'nn-leaderboard__select-text', value);
  copy.appendChild(leading);
  copy.appendChild(text);

  const arrow = createLeaderboardElement('i', 'nnicon nicon-a-Arrow-down-linejiantouxia-xianxing nn-leaderboard__select-arrow');
  trigger.appendChild(copy);
  trigger.appendChild(arrow);
  root.appendChild(trigger);

  const panel = createLeaderboardElement('div', 'nn-leaderboard__select-panel');
  items.forEach(function(item) {
    const option = createLeaderboardElement('button', 'nn-leaderboard__select-option', item);
    option.type = 'button';
    if (item === value) option.classList.add('is-selected');
    option.addEventListener('click', function(event) {
      event.stopPropagation();
      text.textContent = item;
      panel.querySelectorAll('.nn-leaderboard__select-option').forEach(function(optionItem) {
        optionItem.classList.remove('is-selected');
      });
      option.classList.add('is-selected');
      root.classList.remove('is-open');
    });
    panel.appendChild(option);
  });
  root.appendChild(panel);

  trigger.addEventListener('click', function(event) {
    event.stopPropagation();
    const shouldOpen = !root.classList.contains('is-open');
    document.querySelectorAll('.nn-leaderboard__select.is-open').forEach(function(select) {
      if (select !== root) select.classList.remove('is-open');
    });
    root.classList.toggle('is-open', shouldOpen);
  });

  if (!window.__nnLeaderboardDropdownBound) {
    window.__nnLeaderboardDropdownBound = true;
    document.addEventListener('click', function() {
      document.querySelectorAll('.nn-leaderboard__select.is-open').forEach(function(select) {
        select.classList.remove('is-open');
      });
    });
  }

  return root;
}

function createLeaderboardAvatar(options = {}) {
  const {
    src = '../image/Avatar/default.png',
    text = '',
    online = null,
    size = 24
  } = options;

  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    return window.createAvatar({
      src,
      text,
      size,
      status: online === true ? 'on' : null
    });
  }

  const avatar = createLeaderboardElement('span', `nn-avatar nn-avatar-${size}`);
  const img = createLeaderboardElement('img', '');
  img.src = src;
  img.alt = text || 'avatar';
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
  img.style.objectFit = 'cover';
  img.style.borderRadius = '100%';
  avatar.appendChild(img);
  return avatar;
}

function formatLeaderboardWinsText(value) {
  return String(value || '0次').replace(/^吃鸡/, '');
}

function createLeaderboardRow(row = {}, index = 0, mode = 'wins', avatarSize = 24) {
  const rank = row.rank || index + 1;
  const item = createLeaderboardElement('button', 'nn-leaderboard__row');
  item.type = 'button';
  item.dataset.rank = String(rank);

  item.appendChild(createLeaderboardElement('span', 'nn-leaderboard__rank', rank));

  item.appendChild(createLeaderboardAvatar({
    src: row.avatar || leaderboardDefaultAvatars[index % leaderboardDefaultAvatars.length],
    text: row.name || '',
    online: row.online,
    size: row.avatarSize || avatarSize
  }));

  const identity = createLeaderboardElement('span', 'nn-leaderboard__identity');
  identity.appendChild(createLeaderboardElement('span', 'nn-leaderboard__name', row.name || `排行榜用户${rank}`));
  if (mode === 'wins' && typeof createEquityRank === 'function') {
    identity.appendChild(createEquityRank({
      lv: row.rankLv || 1,
      size: row.rankSize || 'small',
      text: row.rankText || ''
    }));
  }
  if (row.city) {
    identity.appendChild(mode === 'score' && typeof createLabel === 'function'
      ? createLabel({ text: row.city, color: 'neutral', type: 'outline', size: 's' })
      : createLeaderboardElement('span', 'nn-leaderboard__city', row.city));
  }
  item.appendChild(identity);

  const value = createLeaderboardElement('span', 'nn-leaderboard__value');
  if (mode === 'rank') {
    if (typeof createEquityRank === 'function') {
      value.appendChild(createEquityRank({
        lv: row.rankLv || 1,
        size: row.rankSize || 'small',
        text: row.rankText || ''
      }));
    } else {
      value.textContent = row.rankText || '段位';
    }
  } else {
    value.textContent = mode === 'score' ? String(row.value ?? 0) : formatLeaderboardWinsText(row.value || row.wins || '吃鸡0次');
  }
  item.appendChild(value);

  return item;
}

function createLeaderboardSelfRow(options = {}) {
  const row = createLeaderboardElement('div', 'nn-leaderboard__self');
  row.appendChild(createLeaderboardElement('span', 'nn-leaderboard__self-rank', options.rank || '1W+'));

  row.appendChild(createLeaderboardAvatar({
    src: options.avatar || '../image/Avatar/default.png',
    text: options.name || '',
    online: options.online,
    size: options.avatarSize || 24
  }));

  const copy = createLeaderboardElement('span', 'nn-leaderboard__self-copy');
  const title = createLeaderboardElement('span', 'nn-leaderboard__self-title');
  title.appendChild(createLeaderboardElement('span', 'nn-leaderboard__self-name', options.name || '未上榜'));
  if (options.rankLv && typeof createEquityRank === 'function') {
    title.appendChild(createEquityRank({
      lv: options.rankLv || 1,
      size: options.rankSize || 'small',
      text: options.rankText || ''
    }));
  }
  copy.appendChild(title);
  copy.appendChild(createLeaderboardElement('span', 'nn-leaderboard__self-desc', options.desc || '继续参与，冲击排行榜'));
  row.appendChild(copy);

  row.appendChild(createLeaderboardSelfValue(options.value || '0次'));
  return row;
}

function createLeaderboardSelfValue(value) {
  const valueEl = createLeaderboardElement('span', 'nn-leaderboard__self-value');

  if (value && typeof value === 'object' && value.type === 'rank') {
    if (typeof createEquityRank === 'function') {
      valueEl.appendChild(createEquityRank({
        lv: value.lv || 1,
        size: value.size || 'small',
        text: value.text || ''
      }));
    } else {
      valueEl.textContent = value.text || '段位';
    }
    return valueEl;
  }

  valueEl.textContent = String(value);
  return valueEl;
}

function getLeaderboardModeConfig(mode, options = {}) {
  const isRank = mode === 'rank';
  return {
    mode: isRank ? 'rank' : 'wins',
    showSubTabs: isRank ? false : Boolean(options.showSubTabs),
    showRegion: isRank ? false : Boolean(options.showRegion),
    rows: options.rows || leaderboardDefaultRows,
    maxRows: isRank ? (options.rankMaxRows || options.maxRows || 12) : (options.winMaxRows || options.maxRows || 12),
    self: (isRank ? options.rankSelf : options.winSelf) || options.self || {
      rank: '1W+',
      name: 'Kweppejs',
      desc: '排名xx位 未上榜',
      rankLv: 10,
      value: isRank ? { type: 'rank', lv: 1, size: 'small', text: '黑铁' } : '吃鸡3次'
    }
  };
}

function createLeaderboardFilters(options = {}) {
  const {
    subTabs = ['日榜', '周榜', '总榜', '地区榜'],
    subActive = 0,
    region = '湖北',
    regions = ['湖北', '广东', '上海', '浙江'],
    showSubTabs = true,
    showRegion = true
  } = options;

  const filters = createLeaderboardElement('div', 'nn-leaderboard__filters');
  let regionWrap = null;

  const getSubTabName = function(index) {
    const tab = subTabs[index];
    return typeof tab === 'string' ? tab : tab && tab.name;
  };

  const syncRegionVisibility = function(index) {
    if (!regionWrap) return;
    const shouldShow = getSubTabName(index) === '地区榜';
    regionWrap.classList.toggle('is-visible', shouldShow);
    regionWrap.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
    filters.classList.toggle('is-region-visible', shouldShow);
  };

  const syncRegionVisibilityFromActiveTab = function() {
    if (!regionWrap) return;
    const activeTab = filters.querySelector('.nn-leaderboard__subtabs .nn-tab.active');
    const activeIndex = activeTab && activeTab.dataset.index != null
      ? Number(activeTab.dataset.index)
      : subActive;
    syncRegionVisibility(Number.isFinite(activeIndex) ? activeIndex : subActive);
  };

  if (showSubTabs) {
    filters.appendChild(createLeaderboardTabs(subTabs, subActive, 'nn-leaderboard__subtabs', function(event) {
      syncRegionVisibility(event.index);
      requestAnimationFrame(syncRegionVisibilityFromActiveTab);
    }));
  }

  if (showRegion) {
    regionWrap = createLeaderboardElement('div', 'nn-leaderboard__region-wrap');
    const regionInner = createLeaderboardElement('div', 'nn-leaderboard__region-inner');
    regionInner.appendChild(createLeaderboardDropdown({ value: region, items: regions }));
    regionWrap.appendChild(regionInner);
    filters.appendChild(regionWrap);
    syncRegionVisibility(showSubTabs ? subActive : 3);
    requestAnimationFrame(syncRegionVisibilityFromActiveTab);
  }

  return filters;
}

function createLeaderboard(options = {}) {
  const {
    primaryTabs = ['吃鸡榜', '段位榜'],
    primaryActive = 0,
    showMore = true,
    moreText = '查看更多榜单',
    mode = primaryActive === 1 ? 'rank' : 'wins',
    rows = leaderboardDefaultRows,
    maxRows = 12,
    winMaxRows = maxRows,
    rankMaxRows = maxRows,
    showSubTabs = false,
    subTabs = ['日榜', '周榜', '总榜', '地区榜'],
    subActive = 0,
    showRegion = false,
    region = '湖北',
    regions = ['湖北', '广东', '上海', '浙江'],
    showSelf = true,
    self = null,
    winSelf = null,
    rankSelf = null,
    height = 364,
    avatarSize = 24,
    className = '',
    id = ''
  } = options;

  injectLeaderboardStyles();
  if (typeof injectEquityStyles === 'function') injectEquityStyles();

  const root = createLeaderboardElement('div', ['nn-leaderboard', className].filter(Boolean).join(' '));
  if (id) root.id = id;
  root.style.setProperty('--nn-leaderboard-height', `${Math.max(0, Number(height) || 364)}px`);
  let currentMode = mode === 'rank' ? 'rank' : 'wins';

  const header = createLeaderboardElement('div', 'nn-leaderboard__header');
  header.appendChild(createLeaderboardTabs(primaryTabs, primaryActive, 'nn-leaderboard__tabs', function(event) {
    currentMode = event.index === 1 ? 'rank' : 'wins';
    renderBody();
  }));

  if (showMore) {
    const more = createLeaderboardElement('button', 'nn-leaderboard__more');
    more.type = 'button';
    more.appendChild(createLeaderboardElement('span', '', moreText));
    more.appendChild(createLeaderboardElement('i', 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing nn-leaderboard__more-icon'));
    header.appendChild(more);
  }
  root.appendChild(header);

  const body = createLeaderboardElement('div', 'nn-leaderboard__body');
  root.appendChild(body);

  function renderBody() {
    const config = getLeaderboardModeConfig(currentMode, {
      rows,
      maxRows,
      winMaxRows,
      rankMaxRows,
      showSubTabs,
      showRegion,
      self,
      winSelf,
      rankSelf
    });
    body.innerHTML = '';
    if (config.showSubTabs || config.showRegion) {
      body.appendChild(createLeaderboardFilters({
        subTabs,
        subActive,
        region,
        regions,
        showSubTabs: config.showSubTabs,
        showRegion: config.showRegion
      }));
    }

    const listWrap = createLeaderboardElement('div', 'nn-leaderboard__list-wrap');
    const list = createLeaderboardElement('div', 'nn-leaderboard__list');
    config.rows.slice(0, config.maxRows).forEach(function(row, index) {
      list.appendChild(createLeaderboardRow(row, index, config.mode, avatarSize));
    });
    listWrap.appendChild(list);
    body.appendChild(listWrap);
    if (typeof window !== 'undefined' && typeof window.createScrollbar === 'function') {
      root.querySelectorAll(':scope > .nn-leaderboard__scrollbar').forEach(function(scrollbar) {
        scrollbar.remove();
      });
      window.createScrollbar({
        target: list,
        container: root,
        hoverTarget: root,
        variant: 'thin',
        className: 'nn-leaderboard__scrollbar',
        right: 0,
        top: function() {
          return listWrap.getBoundingClientRect().top - root.getBoundingClientRect().top;
        },
        bottom: function() {
          return root.getBoundingClientRect().bottom - listWrap.getBoundingClientRect().bottom;
        },
        minThumbSize: 24
      });
    }

    if (showSelf) {
      body.appendChild(createLeaderboardSelfRow(Object.assign({}, config.self, { avatarSize })));
    }
  }

  renderBody();

  return root;
}

function createLeaderboardStandings(options = {}) {
  const {
    mode = 'power',
    width = 280,
    height = 506,
    rowsByMode = {},
    selfByMode = {},
    showSelf = true,
    showMore = true,
    moreText = '完整榜单',
    regions = ['湖北', '广东', '浙江', '四川'],
    weapons = ['突击步枪', '冲锋枪', '狙击枪', '霰弹枪'],
    onChange = null,
    onMore = null,
    onRowClick = null,
    className = '',
    id = ''
  } = options;
  injectLeaderboardStyles();
  const modes = ['power', 'wins', 'weapon'];
  const state = {
    mode: modes.includes(mode) ? mode : 'power',
    period: mode === 'power' ? '周榜' : '日榜',
    region: regions[0] || '湖北',
    weapon: weapons[0] || '突击步枪'
  };
  const names = ['走走停停', '小欣欣欣', '王星星', '一木子李', 'Caroline', 'Caroline', '李博文', '月亮图标', 'Mr.Liu', '李博文'];
  const avatars = ['头像10.png', '头像311.png', '头像809.png', '头像498.png', '头像659.png'];
  const scores = {
    power: [9988, 9742, 9461, 9218, 9056, 8894, 8211, 7234, 7024, 5632],
    wins: [211, 198, 182, 175, 168, 159, 152, 144, 136, 131],
    weapon: [1310, 1270, 1218, 1184, 1136, 1092, 1023, 982, 914, 865]
  };
  const defaultSelf = {
    power: { rank: '15', desc: '距第10名还差 41战力', value: '2112', label: '战力' },
    wins: { rank: '11', desc: '距第10名还差 41次吃鸡', value: '90', label: '吃鸡' },
    weapon: { rank: '11', desc: '距第10名还差 41击杀', value: '424', label: '击杀' }
  };
  const root = createLeaderboardElement('div', ['nn-leaderboard', 'nn-leaderboard--standings', className].filter(Boolean).join(' '));
  if (id) root.id = id;
  root.style.setProperty('--nn-leaderboard-width', typeof width === 'number' ? `${width}px` : width);
  root.style.setProperty('--nn-leaderboard-height', `${Math.max(0, Number(height) || 506)}px`);
  const header = createLeaderboardElement('div', 'nn-leaderboard__header');
  const body = createLeaderboardElement('div', 'nn-leaderboard__body');
  const filters = createLeaderboardElement('div', 'nn-leaderboard__filters');
  const periods = createLeaderboardElement('div', 'nn-leaderboard__periods');
  const selects = createLeaderboardElement('div', 'nn-leaderboard__standings-selects');
  const regionSlot = createLeaderboardElement('div', 'nn-leaderboard__standings-select');
  const weaponSlot = createLeaderboardElement('div', 'nn-leaderboard__standings-select');
  const listWrap = createLeaderboardElement('div', 'nn-leaderboard__list-wrap');
  const list = createLeaderboardElement('div', 'nn-leaderboard__list');
  let scrollbar;

  function emitChange() {
    const detail = Object.assign({}, state);
    if (typeof onChange === 'function') onChange(detail);
    root.dispatchEvent(new CustomEvent('leaderboard-change', { detail }));
  }

  function renderRows() {
    const rows = rowsByMode[state.mode] || names.map(function(name, index) {
      return { name, avatar: `../image/Avatar/${avatars[index % avatars.length]}`, city: '湖北', online: true, value: scores[state.mode][index] };
    });
    list.replaceChildren();
    rows.forEach(function(row, index) {
      const item = createLeaderboardRow(row, index, 'score', 24);
      item.addEventListener('click', function() {
        if (typeof onRowClick === 'function') onRowClick({ row, index, state: Object.assign({}, state) });
      });
      list.appendChild(item);
    });
    list.scrollTop = 0;
    const previousSelf = listWrap.querySelector('.nn-leaderboard__self');
    if (previousSelf) previousSelf.remove();
    if (showSelf) {
      const data = Object.assign({ name: 'Kweppejs', avatar: '../image/Avatar/头像10.png', online: true }, defaultSelf[state.mode], selfByMode[state.mode]);
      const self = createLeaderboardSelfRow(data);
      self.setAttribute('aria-label', '我的排名');
      const value = self.querySelector('.nn-leaderboard__self-value');
      value.replaceChildren(createLeaderboardElement('span', '', data.value), createLeaderboardElement('span', 'nn-leaderboard__self-unit', data.label));
      listWrap.appendChild(self);
    }
    if (scrollbar) requestAnimationFrame(scrollbar.update);
  }

  function renderSelects() {
    const isRegion = state.period === '地区榜';
    const isWeapon = state.mode === 'weapon';
    regionSlot.hidden = !isRegion;
    weaponSlot.hidden = !isWeapon;
    selects.hidden = !isRegion && !isWeapon;
    regionSlot.replaceChildren();
    weaponSlot.replaceChildren();
    function addSelect(slot, key, items) {
      if (!items.includes(state[key])) state[key] = items[0] || '';
      const dropdown = createDropdownMenu({
        appearance: 'filled', size: 'medium', clearable: false,
        className: 'nn-leaderboard__select',
        items: items.map(function(label) { return { label }; }),
        selectedIndex: Math.max(0, items.indexOf(state[key])),
        onChange: function(change) {
          state[key] = items[change.selectedIndex];
          emitChange();
        }
      });
      dropdown.querySelector('.nn-dropdown-trigger').setAttribute('aria-label', key === 'weapon' ? '武器类型' : '地区');
      slot.appendChild(dropdown);
    }
    if (isRegion) addSelect(regionSlot, 'region', isWeapon ? ['全国'].concat(regions) : regions);
    if (isWeapon) addSelect(weaponSlot, 'weapon', weapons);
    if (scrollbar) requestAnimationFrame(scrollbar.update);
  }

  function renderMode() {
    root.dataset.mode = state.mode;
    const tabs = state.mode === 'power' ? ['周榜', '总榜', '地区榜'] : ['日榜', '周榜', '总榜', '地区榜'];
    state.period = tabs[0];
    periods.replaceChildren(createLeaderboardTabs(tabs, 0, 'nn-leaderboard__subtabs', function(change) {
      state.period = tabs[change.index];
      renderSelects();
      emitChange();
    }));
    renderSelects();
    renderRows();
  }

  header.appendChild(createLeaderboardTabs(['战力榜', '吃鸡榜', '武器榜'], modes.indexOf(state.mode), 'nn-leaderboard__tabs', function(change) {
    state.mode = modes[change.index];
    renderMode();
    emitChange();
  }));
  if (showMore) {
    const more = createLeaderboardElement('button', 'nn-leaderboard__more', moreText);
    more.type = 'button';
    more.appendChild(createLeaderboardElement('i', 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing nn-leaderboard__more-icon'));
    more.addEventListener('click', function() {
      const detail = Object.assign({}, state);
      if (typeof onMore === 'function') onMore(detail);
      root.dispatchEvent(new CustomEvent('leaderboard-more', { detail }));
    });
    header.appendChild(more);
  }
  selects.append(regionSlot, weaponSlot);
  filters.append(periods, selects);
  listWrap.appendChild(list);
  body.append(filters, listWrap);
  root.append(header, body);
  renderMode();
  if (typeof createScrollbar === 'function') {
    scrollbar = createScrollbar({ target: list, container: listWrap, hoverTarget: root, variant: 'thin', right: 0, minThumbSize: 24 });
  }
  return root;
}

function createLeaderboardRegional(options = {}) {
  return createLeaderboard(Object.assign({
    primaryTabs: ['吃鸡榜', '段位榜'],
    primaryActive: 0,
    mode: 'wins',
    showSubTabs: true,
    subActive: 0,
    showRegion: true,
    maxRows: 8,
    showSelf: true,
    winSelf: {
      rank: '1W+',
      name: 'Kweppejs',
      desc: '排名xx位 未上榜',
      rankLv: 10,
      value: '吃鸡3次'
    },
    rankSelf: {
      rank: '1W+',
      name: 'Kweppejs',
      desc: '排名xx位 未上榜',
      value: { type: 'rank', lv: 1, size: 'small', text: '黑铁' }
    }
  }, options));
}

function createLeaderboardRank(options = {}) {
  return createLeaderboard(Object.assign({
    primaryTabs: ['吃鸡榜', '段位榜'],
    primaryActive: 1,
    mode: 'rank',
    showSubTabs: false,
    showRegion: false,
    maxRows: 12,
    showSelf: true,
    rankSelf: {
      rank: '1W+',
      name: 'Kweppejs',
      desc: '排名xx位 未上榜',
      value: { type: 'rank', lv: 1, size: 'small', text: '黑铁' }
    }
  }, options));
}

if (typeof window !== 'undefined') {
  window.injectLeaderboardStyles = injectLeaderboardStyles;
  window.createLeaderboard = createLeaderboard;
  window.createLeaderboardStandings = createLeaderboardStandings;
  window.createLeaderboardRegional = createLeaderboardRegional;
  window.createLeaderboardRank = createLeaderboardRank;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectLeaderboardStyles,
    createLeaderboard,
    createLeaderboardStandings,
    createLeaderboardRegional,
    createLeaderboardRank
  };
}
