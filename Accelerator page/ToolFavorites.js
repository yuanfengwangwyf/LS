(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const favorites = [
    { name: '壁纸美化', category: '电脑性能优化', rating: '97%', author: '阿泽同学', authorId: '20010', icon: '../image/Accelerator%20tools/tool-22.png', avatar: '../image/Avatar/头像1095.png', updated: '2026-11-18' },
    { name: '内存智能清理', category: '电脑性能优化', rating: '96%', author: '七喜不加冰', authorId: '20007', icon: '../image/Accelerator%20tools/tool-15.png', avatar: '../image/Avatar/头像1086.png', updated: '2026-11-12' },
    { name: '显卡性能优化', category: '电脑性能优化', rating: '95%', author: '老周爱折腾', authorId: '20031', icon: '../image/Accelerator%20tools/tool-18.png', avatar: '../image/Avatar/头像717.png', updated: '2026-11-08' },
    { name: 'DNS助手', category: '电脑性能优化', rating: '94%', author: '小林装机铺', authorId: '20102', icon: '../image/Accelerator%20tools/tool-23.png', avatar: '../image/Avatar/头像311.png', updated: '2026-11-05' }
  ];
  const byId = function(id) { return document.getElementById(id); };
  const header = byId('accelerator-tool-favorites-header');

  if (header && typeof window.createAcceleratorHeader === 'function') {
    const acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true
    });
    header.appendChild(acceleratorHeader);
    const input = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (input) {
      input.readOnly = true;
      input.setAttribute('aria-haspopup', 'dialog');
    }
    if (acceleratorHeader.search && window.createAcceleratorGameSearch) {
      acceleratorHeader.search.addEventListener('click', function(event) {
        event.preventDefault();
        const frame = header.closest('.accelerator-tools-frame');
        if (frame && !frame.querySelector('.accelerator-game-search')) window.createAcceleratorGameSearch({ mountTarget: frame });
      });
    }
  }

  const sidebar = byId('accelerator-tool-favorites-sidebar');
  if (sidebar && typeof window.createAcceleratorSideNavigationPanel === 'function') {
    const panel = window.createAcceleratorSideNavigationPanel({
      sortable: false,
      functionItems: [
        { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = 'Home.html'; } },
        { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
      ],
      onChange: function(change) {
        if (change.item && change.item.text === '首页') window.location.href = 'Home.html';
        if (change.item && change.item.text === '电脑工具') window.location.href = 'Tools.html';
      }
    });
    sidebar.appendChild(panel);
    if (panel.functionItems && panel.functionItems[1]) panel.setActiveItem(panel.functionItems[1]);
  }

  const list = byId('tool-favorites-list');
  const emptyState = byId('tool-favorites-empty');
  const filtersHost = byId('tool-favorites-filters');
  let searchTerm = '';
  let selectedSort = '使用率优先';

  function getSortedFavorites(items) {
    const sorted = items.slice();
    switch (selectedSort) {
      case '评分从高到低':
        return sorted.sort(function(a, b) { return parseFloat(b.rating) - parseFloat(a.rating); });
      case '名称 A-Z':
        return sorted.sort(function(a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });
      default:
        return sorted;
    }
  }

  function renderFavorites() {
    if (!list) return;
    const query = searchTerm.trim().toLocaleLowerCase();
    const visibleFavorites = getSortedFavorites(favorites.filter(function(tool) {
      return !query || (tool.name + ' ' + tool.category + ' ' + tool.author).toLocaleLowerCase().includes(query);
    }));
    list.replaceChildren();
    visibleFavorites.forEach(function(tool) {
      const card = document.createElement('article');
      card.className = 'accelerator-tools-card accelerator-tools-card--grid accelerator-tool-favorite-card';
      card.setAttribute('role', 'link');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', '查看' + tool.name + '详情');

      const icon = document.createElement('img');
      icon.className = 'accelerator-tools-card__icon';
      icon.src = tool.icon;
      icon.alt = '';

      const copy = document.createElement('span');
      copy.className = 'accelerator-tools-card__copy';
      const name = document.createElement('strong');
      name.textContent = tool.name;
      const category = document.createElement('small');
      category.textContent = tool.category;
      const rating = document.createElement('span');
      rating.className = 'accelerator-tools-card__rating';
      rating.innerHTML = '<small>好评率</small><strong>' + tool.rating + '</strong>';
      copy.append(name, category, rating);

      const trailing = document.createElement('span');
      trailing.className = 'accelerator-tools-card__trailing';
      const arrow = document.createElement('i');
      arrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-card__arrow';
      arrow.setAttribute('aria-hidden', 'true');
      trailing.appendChild(arrow);

      const openDetail = function() { window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(tool.name); };
      card.addEventListener('click', openDetail);
      card.addEventListener('keydown', function(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openDetail();
      });
      card.append(icon, copy, trailing);
      list.appendChild(card);
    });
    if (emptyState) {
      emptyState.replaceChildren();
      emptyState.hidden = visibleFavorites.length > 0;
      if (!visibleFavorites.length && typeof window.createEmpty === 'function') {
        emptyState.appendChild(window.createEmpty({
          scene: 'page',
          type: 'search',
          title: '没有找到符合条件的工具',
          description: '换个关键词或筛选条件再试试',
          showActions: false,
          className: 'accelerator-tool-favorites-empty__state'
        }));
      }
    }
  }

  if (filtersHost && typeof window.createInput === 'function') {
    const search = window.createInput({
      placeholder: '搜索收藏工具',
      size: 'large',
      showSearch: true,
      className: 'accelerator-tool-favorites-search',
      onInput: function(payload) {
        searchTerm = payload.value || '';
        renderFavorites();
      },
      onSearch: function(payload) {
        searchTerm = payload.value || '';
        renderFavorites();
      }
    });
    filtersHost.appendChild(search);
  }
  if (filtersHost && typeof window.createDropdownMenu === 'function') {
    filtersHost.appendChild(window.createDropdownMenu({
      appearance: 'filled',
      size: 'large',
      value: '使用率优先',
      items: [
        { label: '使用率优先' },
        { label: '评分从高到低' },
        { label: '名称 A-Z' }
      ],
      selectedIndex: 0,
      className: 'accelerator-tool-favorites-category-filter',
      onChange: function(change) {
        selectedSort = change.item ? change.item.label : change.value;
        renderFavorites();
      }
    }));
  }
  renderFavorites();

  const content = byId('accelerator-tool-favorites-content');
  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({ target: content, container: content.parentElement, hoverTarget: content, variant: 'page', right: 4, top: 0, bottom: 0, minThumbSize: 60 });
  }
})();
