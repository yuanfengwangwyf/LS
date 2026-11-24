(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const toolCatalog = [
    { name: '壁纸美化', category: '电脑性能优化', rating: 97, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-22.png' },
    { name: '内存智能清理', category: '电脑性能优化', rating: 96, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-15.png' },
    { name: '显卡性能优化', category: '电脑性能优化', rating: 95, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-18.png' },
    { name: 'DNS助手', category: '电脑性能优化', rating: 94, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-23.png' },
    { name: 'CPU温度性能监控', category: '电脑性能优化', rating: 93, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-16.png' },
    { name: '系统雷达', category: '电脑性能优化', rating: 92, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-20.png' },
    { name: '桌面整理', category: '电脑系统工具', rating: 96, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-17.png' },
    { name: '一键屏蔽麦克风', category: '电脑系统工具', rating: 95, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-03.png' },
    { name: '误触屏蔽', category: '电脑系统工具', rating: 94, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-04.png' },
    { name: '窗口快捷切换', category: '电脑系统工具', rating: 93, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-10.png' },
    { name: '游戏闪退修复大师', category: '电脑系统工具', rating: 92, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-19.png' },
    { name: 'C 盘空间清理', category: '电脑系统工具', rating: 91, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-12.png' }
  ];

  const categories = ['电脑性能优化', '电脑系统工具'];
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  const activeCategory = categories.indexOf(requestedCategory) !== -1 ? requestedCategory : categories[0];
  const categoryTools = toolCatalog.filter(function(tool) { return tool.category === activeCategory; });
  let categorySearchTerm = '';

  const byId = function(id) { return document.getElementById(id); };

  document.title = '加速器页面 - ' + activeCategory;
  const previewTitle = byId('tool-category-preview-title');
  if (previewTitle) previewTitle.textContent = activeCategory;
  const previewDescription = byId('tool-category-preview-description');
  if (previewDescription) previewDescription.textContent = '浏览「' + activeCategory + '」分类下的全部电脑工具。';
  const categoryTitle = byId('tool-category-title');
  if (categoryTitle) categoryTitle.textContent = activeCategory;
  const grid = byId('tool-category-grid');
  if (grid) grid.setAttribute('aria-label', activeCategory + '工具列表');

  const header = byId('accelerator-tool-category-header');
  let acceleratorHeader = null;
  if (header && typeof window.createAcceleratorHeader === 'function') {
    function openGameSearch(value) {
      if (!acceleratorHeader || !window.createAcceleratorGameSearch) return;
      acceleratorHeader.suppressSearchSuggestions();
      const frame = header.closest('.accelerator-tools-frame');
      if (!frame || frame.querySelector('.accelerator-game-search')) return;
      const search = window.createAcceleratorGameSearch({
        mountTarget: frame,
        onClose: function() { acceleratorHeader.suppressSearchSuggestions(); }
      });
      if (value) {
        search.searchInput.value = value;
        search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }

    acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true,
      onSearchSuggestionSelect: openGameSearch
    });
    header.appendChild(acceleratorHeader);
    const headerInput = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (headerInput) {
      headerInput.readOnly = true;
      headerInput.setAttribute('aria-haspopup', 'dialog');
    }
    acceleratorHeader.search?.addEventListener('click', function(event) {
      event.preventDefault();
      openGameSearch();
    });
  }

  const sidebar = byId('accelerator-tool-category-sidebar');
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

  function createToolCard(tool) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-card accelerator-tools-card--grid';
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', '查看' + tool.name + '详情');

    const icon = document.createElement('img');
    icon.className = 'accelerator-tools-card__icon';
    icon.src = tool.iconSrc;
    icon.alt = '';

    const copy = document.createElement('span');
    copy.className = 'accelerator-tools-card__copy';
    const title = document.createElement('strong');
    title.textContent = tool.name;
    const category = document.createElement('small');
    category.textContent = tool.category;
    const rating = document.createElement('span');
    rating.className = 'accelerator-tools-card__rating';
    rating.innerHTML = '<small>好评率</small><strong>' + tool.rating + '%</strong>';
    copy.append(title, category, rating);

    const trailing = document.createElement('span');
    trailing.className = 'accelerator-tools-card__trailing';
    if (tool.action === 'toggle' && typeof window.createSwitch === 'function') {
      const toggle = window.createSwitch({
        checked: false,
        size: 'default',
        state: 'default',
        className: 'accelerator-tools-card__switch',
        onChange: function(checked) { card.dataset.enabled = checked ? 'true' : 'false'; }
      });
      toggle.setAttribute('aria-label', tool.name);
      trailing.appendChild(toggle);
    } else {
      const arrow = document.createElement('i');
      arrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-card__arrow';
      arrow.setAttribute('aria-hidden', 'true');
      trailing.appendChild(arrow);
    }

    const openDetail = function(event) {
      if (event && event.target instanceof Element && event.target.closest('.nn-switch')) return;
      window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(tool.name);
    };
    card.addEventListener('click', openDetail);
    card.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openDetail(event);
    });

    card.append(icon, copy, trailing);
    return card;
  }

  function renderCategoryTools() {
    if (!grid) return;
    grid.replaceChildren();
    const keyword = categorySearchTerm.trim().toLowerCase();
    const visibleTools = categoryTools.filter(function(tool) {
      return !keyword || tool.name.toLowerCase().includes(keyword) || tool.category.toLowerCase().includes(keyword);
    });
    if (!visibleTools.length) {
      if (typeof window.createEmpty === 'function') {
        grid.appendChild(window.createEmpty({
          scene: 'page',
          type: 'search',
          title: '没有找到符合条件的工具',
          description: '换个关键词再试试',
          showActions: false,
          className: 'accelerator-tool-category-empty'
        }));
      }
      return;
    }
    visibleTools.forEach(function(tool) { grid.appendChild(createToolCard(tool)); });
  }

  const searchHost = byId('tool-category-search');
  if (searchHost && typeof window.createInput === 'function') {
    searchHost.appendChild(window.createInput({
      placeholder: '搜索' + activeCategory,
      size: 'default',
      showSearch: true,
      onInput: function(payload) {
        categorySearchTerm = payload.value || '';
        renderCategoryTools();
      },
      onSearch: function(payload) {
        categorySearchTerm = payload.value || '';
        renderCategoryTools();
      }
    }));
  }
  renderCategoryTools();

  const content = byId('tool-category-content');
  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({
      target: content,
      container: content.parentElement,
      hoverTarget: content,
      variant: 'page',
      right: 4,
      top: 0,
      bottom: 0,
      minThumbSize: 60
    });
  }
})();
