const AcceleratorRankingItemStyles = `
  .accelerator-ranking-item {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 448px;
    max-width: 100%;
    min-height: 40px;
    padding: var(--space8);
    padding-left: var(--space0);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: transparent;
    color: var(--gray-4);
    font-family: var(--font-family-main);
    transition: background-color 0.16s ease;
  }

  .accelerator-ranking-item:hover {
    background: var(--gray-10);
  }

  .accelerator-ranking-item__rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    min-width: 48px;
    flex: 0 0 48px;
    overflow: hidden;
    color: var(--gray-6);
    font-family: var(--font-family-din);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-body);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-ranking-item__rank-plus {
    display: inline-flex;
    align-items: center;
    align-self: center;
    line-height: inherit;
  }

  .accelerator-ranking-item__rank-plus-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    min-width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    padding-bottom: var(--space4);
    box-sizing: border-box;
    line-height: 1;
  }

  .accelerator-ranking-item[data-rank="1"] .accelerator-ranking-item__rank {
    color: var(--Leaderboard-Rank-First);
  }

  .accelerator-ranking-item[data-rank="1"] {
    background: var(--Leaderboard-Rank-First-Bar);
  }

  .accelerator-ranking-item[data-rank="1"]:hover {
    background: var(--Leaderboard-Rank-First-Bar-Hover);
  }

  .accelerator-ranking-item[data-rank="2"] .accelerator-ranking-item__rank {
    color: var(--Leaderboard-Rank-Second);
  }

  .accelerator-ranking-item[data-rank="2"] {
    background: var(--Leaderboard-Rank-Second-Bar);
  }

  .accelerator-ranking-item[data-rank="2"]:hover {
    background: var(--Leaderboard-Rank-Second-Bar-Hover);
  }

  .accelerator-ranking-item[data-rank="3"] .accelerator-ranking-item__rank {
    color: var(--Leaderboard-Rank-Third);
  }

  .accelerator-ranking-item[data-rank="3"] {
    background: var(--Leaderboard-Rank-Third-Bar);
  }

  .accelerator-ranking-item[data-rank="3"]:hover {
    background: var(--Leaderboard-Rank-Third-Bar-Hover);
  }

  .accelerator-ranking-item__identity {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
  }

  .accelerator-ranking-item__identity .nn-avatar {
    --nn-avatar-radius: 100%;
    flex: 0 0 auto;
  }

  .accelerator-ranking-item__name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-ranking-item__value {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    flex: 0 0 auto;
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .accelerator-ranking-item__affix {
    color: var(--gray-5);
    font-weight: var(--font-weight-normal);
  }

  .accelerator-ranking-list {
    display: flex;
    flex-direction: column;
    width: 488px;
    max-width: 100%;
    height: 610px;
    min-height: 610px;
    overflow: hidden;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    box-sizing: border-box;
    color: var(--gray-4);
    font-family: var(--font-family-main);
  }

  .accelerator-ranking-list__title {
    flex: 0 0 auto;
    margin: var(--space0);
    padding: var(--space16) var(--space24);
    color: var(--gray-4);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
  }

  .accelerator-ranking-list__body {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }

  .accelerator-ranking-list__scroll {
    display: flex;
    flex-direction: column;
    gap: var(--space6);
    height: 100%;
    padding: var(--space0) var(--space16);
    overflow-y: auto;
    box-sizing: border-box;
  }

  .accelerator-ranking-list__scroll .accelerator-ranking-item {
    width: 100%;
    flex: 0 0 auto;
  }

  .accelerator-ranking-list__scrollbar.nn-scrollbar {
    --nn-scrollbar-thumb-color: var(--gray-9);
    --nn-scrollbar-thumb-hover-color: var(--gray-9);
    opacity: 0.6;
  }

  .accelerator-ranking-list__current {
    flex: 0 0 auto;
    width: 100%;
    min-height: 56px;
    padding: var(--space16) var(--space24) var(--space16) var(--space16);
    background: var(--gray-9);
    border-radius: var(--border-radius-2r);
  }

  .accelerator-ranking-list__current:hover {
    background: var(--gray-9);
  }

  @media (max-width: 520px) {
    .accelerator-ranking-item {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-ranking-item {
      transition: none;
    }
  }
`;

function injectAcceleratorRankingItemStyles() {
  if (document.getElementById('accelerator-ranking-item-styles')) return;

  const style = document.createElement('style');
  style.id = 'accelerator-ranking-item-styles';
  style.textContent = AcceleratorRankingItemStyles;
  document.head.appendChild(style);
}

function createAcceleratorRankingItem(options = {}) {
  injectAcceleratorRankingItemStyles();

  if (typeof window.createAvatar !== 'function') {
    throw new Error('createAcceleratorRankingItem requires the Avatar basic component.');
  }

  const rankLabelNumber = options.rank == null && /^\d+$/.test(String(options.rankLabel || ''))
    ? Number(options.rankLabel)
    : null;
  const hasNumericRank = options.rank != null
    ? Number.isFinite(Number(options.rank)) && Number(options.rank) > 0
    : options.rankLabel == null
      ? true
      : Number.isFinite(rankLabelNumber) && rankLabelNumber > 0;
  const normalizedRank = hasNumericRank
    ? Math.max(1, Number(options.rank == null ? rankLabelNumber : options.rank))
    : 1;
  const root = document.createElement('article');
  root.className = ['accelerator-ranking-item', options.className || ''].filter(Boolean).join(' ');
  if (hasNumericRank) root.dataset.rank = String(normalizedRank);
  const rankDescription = hasNumericRank
    ? `排行榜第 ${normalizedRank} 名`
    : (options.rankLabel && String(options.rankLabel) !== '-' ? `排行榜排名 ${options.rankLabel}` : '排行榜排名 1000+');
  root.setAttribute('aria-label', options.ariaLabel || rankDescription);

  const rank = document.createElement('span');
  rank.className = 'accelerator-ranking-item__rank';
  const rankLabel = options.rankLabel == null ? String(normalizedRank) : String(options.rankLabel);
  if (rankLabel === '1000+') {
    const rankNumber = document.createElement('span');
    rankNumber.textContent = '1000';
    const rankPlusBox = document.createElement('span');
    rankPlusBox.className = 'accelerator-ranking-item__rank-plus-box';
    const rankPlus = document.createElement('span');
    rankPlus.className = 'accelerator-ranking-item__rank-plus';
    rankPlus.textContent = '+';
    rankPlusBox.appendChild(rankPlus);
    rank.append(rankNumber, rankPlusBox);
  } else {
    rank.textContent = rankLabel;
  }
  root.appendChild(rank);

  const identity = document.createElement('div');
  identity.className = 'accelerator-ranking-item__identity';
  identity.appendChild(createAvatar({
    src: options.avatarSrc || '../image/Avatar/头像748.png',
    text: options.userName || '排行榜用户',
    size: 24,
    status: options.online === false ? null : 'on'
  }));

  const name = document.createElement('span');
  name.className = 'accelerator-ranking-item__name';
  name.textContent = options.userName || '185****8806';
  name.title = name.textContent;
  identity.appendChild(name);

  if (options.labelText) {
    if (typeof window.createLabel !== 'function') {
      throw new Error('createAcceleratorRankingItem labelText requires the Label basic component.');
    }
    identity.appendChild(createLabel({
      text: options.labelText,
      color: options.labelColor || 'neutral',
      type: options.labelType || 'soft',
      size: options.labelSize || 'd'
    }));
  }
  root.appendChild(identity);

  const value = document.createElement('span');
  value.className = 'accelerator-ranking-item__value';

  if (options.prefix) {
    const prefix = document.createElement('span');
    prefix.className = 'accelerator-ranking-item__affix';
    prefix.textContent = options.prefix;
    value.appendChild(prefix);
  }

  const valueText = document.createElement('span');
  valueText.textContent = options.value == null ? '1009008' : String(options.value);
  value.appendChild(valueText);

  if (options.suffix !== false) {
    const suffix = document.createElement('span');
    suffix.className = 'accelerator-ranking-item__affix';
    suffix.textContent = typeof options.suffix === 'string' ? options.suffix : 'h';
    value.appendChild(suffix);
  }

  root.appendChild(value);

  return root;
}

const defaultAcceleratorRankingItems = [
  { userName: '185****8806', value: 1498119, avatarSrc: '../image/Avatar/头像1095.png' },
  { userName: '150****8473', value: 1422541, avatarSrc: '../image/Avatar/头像748.png' },
  { userName: '186****6377', value: 1357246, avatarSrc: '../image/Avatar/头像562.png' },
  { userName: '187****0618', value: 1270037, avatarSrc: '../image/Avatar/头像827.png' },
  { userName: '184****9802', value: 1259279, avatarSrc: '../image/Avatar/头像629.png' },
  { userName: '183****4506', value: 1119089, avatarSrc: '../image/Avatar/头像826.png' },
  { userName: '180****4866', value: 1091493, avatarSrc: '../image/Avatar/头像985.png' },
  { userName: '181****8165', value: 1090786, avatarSrc: '../image/Avatar/头像991.png' },
  { userName: '178****7842', value: 1068972, avatarSrc: '../image/Avatar/头像824.png' },
  { userName: '189****5335', value: 1052118, avatarSrc: '../image/Avatar/头像1093.png' },
  { userName: '187****4143', value: 1034094, avatarSrc: '../image/Avatar/头像1078.png' },
  { userName: '186****7839', value: 1025598, avatarSrc: '../image/Avatar/头像558.png' },
  { userName: '131****6177', value: 1020742, avatarSrc: '../image/Avatar/头像10.png' },
  { userName: '178****8173', value: 1010258, avatarSrc: '../image/Avatar/头像809.png' },
  { userName: '151****2135', value: 960126, avatarSrc: '../image/Avatar/头像821.png' }
];

function createAcceleratorRankingList(options = {}) {
  injectAcceleratorRankingItemStyles();

  if (typeof window.createScrollbar !== 'function') {
    throw new Error('createAcceleratorRankingList requires the Scrollbar basic component.');
  }

  const root = document.createElement('section');
  root.className = ['accelerator-ranking-list', options.className || ''].filter(Boolean).join(' ');
  root.setAttribute('aria-label', options.ariaLabel || options.title || '加速时长排行');
  if (options.height != null) {
    const normalizedHeight = typeof options.height === 'number'
      ? `${options.height}px`
      : String(options.height);
    root.style.height = normalizedHeight;
    root.style.minHeight = normalizedHeight;
  }

  const title = document.createElement('h3');
  title.className = 'accelerator-ranking-list__title';
  title.textContent = options.title || '加速时长排行';
  root.appendChild(title);

  const body = document.createElement('div');
  body.className = 'accelerator-ranking-list__body';

  const scroll = document.createElement('div');
  scroll.className = 'accelerator-ranking-list__scroll';
  const items = Array.isArray(options.items) && options.items.length ? options.items : defaultAcceleratorRankingItems;
  items.forEach(function(item, index) {
    scroll.appendChild(createAcceleratorRankingItem(Object.assign({}, item, {
      rank: item.rank == null ? index + 1 : item.rank,
      suffix: item.suffix == null ? (options.suffix == null ? 'h' : options.suffix) : item.suffix
    })));
  });
  body.appendChild(scroll);
  root.appendChild(body);

  const currentUser = Object.assign({
    rankLabel: '1000+',
    avatarSrc: '../image/Avatar/头像834.png',
    online: true,
    userName: '136****3232',
    value: 643,
    suffix: options.suffix == null ? 'h' : options.suffix
  }, options.currentUser || {});
  const currentRank = Number(currentUser.rank);
  const currentRankLabel = currentUser.rankLabel == null ? '' : String(currentUser.rankLabel);
  if (Number.isFinite(currentRank) && currentRank > 0 && currentRank <= 1000) {
    currentUser.rankLabel = String(Math.floor(currentRank));
  } else if (!currentRankLabel || currentRankLabel === '-' || (Number.isFinite(Number(currentRankLabel)) && Number(currentRankLabel) > 1000)) {
    currentUser.rankLabel = '1000+';
  }
  currentUser.labelText = '';
  currentUser.className = ['accelerator-ranking-list__current', currentUser.className || ''].filter(Boolean).join(' ');
  root.appendChild(createAcceleratorRankingItem(currentUser));

  const scrollbar = createScrollbar({
    target: scroll,
    container: body,
    hoverTarget: body,
    variant: 'page',
    right: 4,
    top: 4,
    bottom: 4,
    minThumbSize: 60,
    alwaysVisible: true,
    className: 'accelerator-ranking-list__scrollbar'
  });

  root.scrollbar = scrollbar;
  return root;
}

if (typeof window !== 'undefined') {
  window.createAcceleratorRankingItem = createAcceleratorRankingItem;
  window.createAcceleratorRankingList = createAcceleratorRankingList;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createAcceleratorRankingItem, createAcceleratorRankingList, injectAcceleratorRankingItemStyles };
}
