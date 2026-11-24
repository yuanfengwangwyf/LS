const AcceleratorHeatmapStyles = `
  .accelerator-heatmap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    width: 1000px;
    max-width: 100%;
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .accelerator-heatmap__months {
    position: relative;
    width: 100%;
    height: 16px;
  }

  .accelerator-heatmap__month {
    position: absolute;
    top: var(--space0);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .accelerator-heatmap__grid {
    display: grid;
    grid-template-columns: repeat(60, minmax(0, 1fr));
    grid-template-rows: repeat(7, minmax(0, 1fr));
    gap: var(--space4);
    width: 100%;
    aspect-ratio: 60 / 7;
  }

  .accelerator-heatmap__cell {
    min-width: 0;
    min-height: 0;
    padding: var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--Heatmap-Level-1);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    transition: filter 0.16s ease, transform 0.16s ease;
  }

  .accelerator-heatmap__cell[data-level="2"] {
    background: var(--Heatmap-Level-2);
  }

  .accelerator-heatmap__cell[data-level="3"] {
    background: var(--Heatmap-Level-3);
  }

  .accelerator-heatmap__cell[data-level="4"] {
    background: var(--Heatmap-Level-4);
  }

  .accelerator-heatmap__cell:hover,
  .accelerator-heatmap__cell:focus-visible,
  .accelerator-heatmap__cell.is-active {
    filter: brightness(1.12);
    outline: none;
    transform: scale(1.08);
  }

  .accelerator-heatmap__detail {
    position: fixed;
    z-index: 1200;
    display: none;
    width: 184px;
    padding: var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    color: var(--gray-4);
    pointer-events: none;
  }

  .accelerator-heatmap__detail.is-visible {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
  }

  .accelerator-heatmap__detail-summary {
    display: flex;
    flex-direction: column;
    gap: var(--space6);
    padding-bottom: var(--space8);
    border-bottom: 1px solid var(--gray-9);
  }

  .accelerator-heatmap__detail-date {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-heatmap__detail-time {
    display: flex;
    align-items: baseline;
    gap: var(--space2);
  }

  .accelerator-heatmap__detail-value {
    height: 30px;
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-data-number);
    font-weight: var(--font-weight-bold);
    line-height: 30px;
  }

  .accelerator-heatmap__detail-unit {
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-heatmap__games {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
  }

  .accelerator-heatmap__game {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space8);
  }

  .accelerator-heatmap__game-main {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .accelerator-heatmap__game-logo {
    display: block;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 var(--icon-size-x12);
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    object-fit: cover;
  }

  .accelerator-heatmap__game-name,
  .accelerator-heatmap__game-time {
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .accelerator-heatmap__game-name {
    overflow: hidden;
    color: var(--gray-5);
    text-overflow: ellipsis;
  }

  .accelerator-heatmap__game-time {
    flex: 0 0 auto;
    color: var(--gray-4);
    font-weight: var(--font-weight-semibold);
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-heatmap__cell {
      transition: none;
    }
  }
`;

function injectAcceleratorHeatmapStyles() {
  if (document.getElementById('accelerator-heatmap-styles')) return;
  const style = document.createElement('style');
  style.id = 'accelerator-heatmap-styles';
  style.textContent = AcceleratorHeatmapStyles;
  document.head.appendChild(style);
}

function createAcceleratorHeatmapRandom(seed) {
  let state = Number(seed) >>> 0;
  return function() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createAcceleratorHeatmap(options = {}) {
  injectAcceleratorHeatmapStyles();

  const columns = Math.max(1, Number(options.columns) || 60);
  const rows = Math.max(1, Number(options.rows) || 7);
  const totalCells = columns * rows;
  const random = createAcceleratorHeatmapRandom(options.seed == null ? 188849 : options.seed);
  const startDate = new Date(options.startDate || '2025-11-01T12:00:00');
  const defaultGames = Array.isArray(options.games) && options.games.length ? options.games : [
    { name: '绝地求生', logoSrc: '../image/Game logo/game1.webp' },
    { name: '炉石传说', logoSrc: '../image/Game logo/game5.webp' },
    { name: '全境封锁2', logoSrc: '../image/Game logo/game16.webp' }
  ];
  const monthNames = Array.isArray(options.months) && options.months.length
    ? options.months
    : ['11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'];

  const root = document.createElement('section');
  root.className = ['accelerator-heatmap', options.className || ''].filter(Boolean).join(' ');
  root.setAttribute('aria-label', options.ariaLabel || '年度游戏时长热力图');
  if (options.width != null) {
    root.style.width = typeof options.width === 'number' ? `${options.width}px` : String(options.width);
  }

  const months = document.createElement('div');
  months.className = 'accelerator-heatmap__months';
  monthNames.forEach(function(month, index) {
    const label = document.createElement('span');
    label.className = 'accelerator-heatmap__month';
    label.textContent = month;
    label.style.left = `${index / monthNames.length * 100}%`;
    months.appendChild(label);
  });
  root.appendChild(months);

  const grid = document.createElement('div');
  grid.className = 'accelerator-heatmap__grid';
  grid.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
  grid.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
  grid.style.aspectRatio = `${columns} / ${rows}`;
  grid.setAttribute('role', 'grid');
  root.appendChild(grid);

  const detail = document.createElement('div');
  detail.className = 'accelerator-heatmap__detail';
  detail.setAttribute('role', 'tooltip');
  document.body.appendChild(detail);

  let activeCell = null;

  function formatDate(date) {
    const weekNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${weekNames[date.getDay()]}`;
  }

  function buildDetail(cellData) {
    detail.replaceChildren();

    const summary = document.createElement('div');
    summary.className = 'accelerator-heatmap__detail-summary';

    const date = document.createElement('div');
    date.className = 'accelerator-heatmap__detail-date';
    date.textContent = formatDate(cellData.date);

    const time = document.createElement('div');
    time.className = 'accelerator-heatmap__detail-time';
    const value = document.createElement('span');
    value.className = 'accelerator-heatmap__detail-value';
    value.textContent = String(cellData.hours);
    const unit = document.createElement('span');
    unit.className = 'accelerator-heatmap__detail-unit';
    unit.textContent = 'h';
    time.appendChild(value);
    time.appendChild(unit);
    summary.appendChild(date);
    summary.appendChild(time);
    detail.appendChild(summary);

    const games = document.createElement('div');
    games.className = 'accelerator-heatmap__games';
    cellData.games.forEach(function(game) {
      const row = document.createElement('div');
      row.className = 'accelerator-heatmap__game';
      const main = document.createElement('div');
      main.className = 'accelerator-heatmap__game-main';
      const logo = document.createElement('img');
      logo.className = 'accelerator-heatmap__game-logo';
      logo.src = game.logoSrc;
      logo.alt = '';
      const name = document.createElement('span');
      name.className = 'accelerator-heatmap__game-name';
      name.textContent = game.name;
      const duration = document.createElement('span');
      duration.className = 'accelerator-heatmap__game-time';
      duration.textContent = `${game.hours}h`;
      main.appendChild(logo);
      main.appendChild(name);
      row.appendChild(main);
      row.appendChild(duration);
      games.appendChild(row);
    });
    detail.appendChild(games);
  }

  function positionDetail(cell) {
    const cellRect = cell.getBoundingClientRect();
    const detailRect = detail.getBoundingClientRect();
    const viewportGap = 8;
    let left = cellRect.left + cellRect.width / 2 - detailRect.width / 2;
    let top = cellRect.top - detailRect.height - viewportGap;
    left = Math.max(viewportGap, Math.min(left, window.innerWidth - detailRect.width - viewportGap));
    if (top < viewportGap) top = cellRect.bottom + viewportGap;
    detail.style.left = `${left}px`;
    detail.style.top = `${top}px`;
  }

  function showDetail(cell) {
    if (!cell || !cell.heatmapData) return;
    if (activeCell && activeCell !== cell) activeCell.classList.remove('is-active');
    activeCell = cell;
    activeCell.classList.add('is-active');
    buildDetail(cell.heatmapData);
    detail.classList.add('is-visible');
    positionDetail(cell);
  }

  function hideDetail() {
    if (activeCell) activeCell.classList.remove('is-active');
    activeCell = null;
    detail.classList.remove('is-visible');
  }

  const suppliedData = Array.isArray(options.data) ? options.data : [];
  for (let index = 0; index < totalCells; index += 1) {
    const supplied = suppliedData[index] || {};
    const level = Math.max(1, Math.min(4, Number(supplied.level) || Math.floor(random() * 4) + 1));
    const date = supplied.date ? new Date(supplied.date) : new Date(startDate.getTime() + index * 86400000);
    const hours = supplied.hours == null ? Math.max(1, Math.round((level * 3 + random() * 4) * 10) / 10) : supplied.hours;
    const games = Array.isArray(supplied.games) && supplied.games.length
      ? supplied.games
      : defaultGames.map(function(game, gameIndex) {
          const portion = Math.max(0.1, Math.round((hours / defaultGames.length + (gameIndex - 1) * 0.2) * 10) / 10);
          return Object.assign({}, game, { hours: portion });
        });

    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'accelerator-heatmap__cell';
    cell.dataset.level = String(level);
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-label', `${formatDate(date)}，游戏时长 ${hours} 小时`);
    cell.heatmapData = { date, hours, games };
    cell.addEventListener('mouseenter', function() { showDetail(cell); });
    cell.addEventListener('mouseleave', hideDetail);
    cell.addEventListener('focus', function() { showDetail(cell); });
    cell.addEventListener('blur', hideDetail);
    grid.appendChild(cell);
  }

  root.destroy = function() {
    detail.remove();
  };
  root.detail = detail;
  return root;
}

if (typeof window !== 'undefined') {
  window.createAcceleratorHeatmap = createAcceleratorHeatmap;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createAcceleratorHeatmap, injectAcceleratorHeatmapStyles };
}
