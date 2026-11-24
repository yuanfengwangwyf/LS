(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const toolCatalog = [
    { name: '壁纸美化', category: '电脑性能优化', rating: 97, iconSrc: '../image/Accelerator%20tools/tool-22.png' },
    { name: '内存智能清理', category: '电脑性能优化', rating: 96, iconSrc: '../image/Accelerator%20tools/tool-15.png' },
    { name: '显卡性能优化', category: '电脑性能优化', rating: 95, iconSrc: '../image/Accelerator%20tools/tool-18.png' },
    { name: 'DNS助手', category: '电脑性能优化', rating: 94, iconSrc: '../image/Accelerator%20tools/tool-23.png' },
    { name: 'CPU温度性能监控', category: '电脑性能优化', rating: 93, iconSrc: '../image/Accelerator%20tools/tool-16.png' },
    { name: '系统雷达', category: '电脑性能优化', rating: 92, iconSrc: '../image/Accelerator%20tools/tool-20.png' },
    { name: '桌面整理', category: '电脑系统工具', rating: 96, iconSrc: '../image/Accelerator%20tools/tool-17.png' },
    { name: '一键屏蔽麦克风', category: '电脑系统工具', rating: 95, iconSrc: '../image/Accelerator%20tools/tool-03.png' },
    { name: '误触屏蔽', category: '电脑系统工具', rating: 94, iconSrc: '../image/Accelerator%20tools/tool-04.png' },
    { name: '窗口快捷切换', category: '电脑系统工具', rating: 93, iconSrc: '../image/Accelerator%20tools/tool-10.png' },
    { name: '游戏闪退修复大师', category: '电脑系统工具', rating: 92, iconSrc: '../image/Accelerator%20tools/tool-19.png' },
    { name: 'C 盘空间清理', category: '电脑系统工具', rating: 91, iconSrc: '../image/Accelerator%20tools/tool-12.png' }
  ];

  const developers = [
    { name: '阿泽同学', id: '900301', score: '94.5', avatar: '../image/Avatar/头像1095.png' },
    { name: '七喜不加冰', id: '20007', score: '93.8', avatar: '../image/Avatar/头像1086.png' },
    { name: '老周爱折腾', id: '20031', score: '92.9', avatar: '../image/Avatar/头像717.png' },
    { name: '小林装机铺', id: '20102', score: '92.3', avatar: '../image/Avatar/头像311.png' },
    { name: '北川Code', id: '20118', score: '91.7', avatar: '../image/Avatar/头像498.png' },
    { name: '帧率猫', id: '20126', score: '91.2', avatar: '../image/Avatar/头像511.png' },
    { name: '柚子的软件屋', id: '20139', score: '90.8', avatar: '../image/Avatar/头像542.png' },
    { name: '键盘边的阿哲', id: '20157', score: '90.3', avatar: '../image/Avatar/头像551.png' },
    { name: '夏夜调参员', id: '20163', score: '89.9', avatar: '../image/Avatar/头像580.png' },
    { name: '橙子爱装机', id: '20188', score: '89.4', avatar: '../image/Avatar/头像624.png' }
  ];

  const developerToolIndexes = [
    [0, 5, 10, 2, 7],
    [6, 1, 9, 4, 11],
    [2, 8, 3, 10, 0],
    [7, 4, 11, 1, 5],
    [3, 9, 6, 0, 8],
    [5, 10, 2, 7, 4],
    [1, 11, 8, 3, 9],
    [9, 0, 4, 6, 2],
    [11, 7, 5, 1, 10],
    [4, 2, 6, 8, 3]
  ];

  const requestedId = new URLSearchParams(window.location.search).get('id');
  const matchedIndex = developers.findIndex(function(item) { return item.id === requestedId; });
  const developerIndex = matchedIndex >= 0 ? matchedIndex : 0;
  const developer = developers[developerIndex];
  const tools = developerToolIndexes[developerIndex].map(function(toolIndex) {
    return toolCatalog[toolIndex];
  });

  const byId = function(id) { return document.getElementById(id); };
  const header = byId('accelerator-developer-profile-header');
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

  const sidebar = byId('accelerator-developer-profile-sidebar');
  if (sidebar && typeof window.createAcceleratorSideNavigationPanel === 'function') {
    const panel = window.createAcceleratorSideNavigationPanel({
      sortable: false,
      functionItems: [
        { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = 'Home.html'; } },
        { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
      ]
    });
    sidebar.appendChild(panel);
    panel.setActiveItem(panel.functionItems[1]);
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
    const name = document.createElement('strong');
    name.textContent = tool.name;
    const category = document.createElement('small');
    category.textContent = tool.category;
    const rating = document.createElement('span');
    rating.className = 'accelerator-tools-card__rating';
    rating.innerHTML = '<small>好评率</small><strong>' + tool.rating + '%</strong>';
    copy.append(name, category, rating);

    const trailing = document.createElement('span');
    trailing.className = 'accelerator-tools-card__trailing';
    if (typeof window.createSwitch === 'function') {
      const toggle = window.createSwitch({
        checked: false,
        size: 'default',
        state: 'default',
        className: 'accelerator-tools-card__switch'
      });
      toggle.setAttribute('aria-label', tool.name);
      trailing.appendChild(toggle);
    }

    const openDetail = function(event) {
      if (event && event.target instanceof Element && event.target.closest('.nn-switch')) return;
      window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(tool.name);
    };
    card.addEventListener('click', openDetail);
    card.addEventListener('keydown', function(event) {
      if (event.target instanceof Element && event.target.closest('.nn-switch')) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openDetail(event);
    });

    card.append(icon, copy, trailing);
    return card;
  }

  function renderProfile() {
    document.title = '加速器页面 - ' + developer.name;
    const pageTitle = byId('developer-profile-page-title');
    if (pageTitle) pageTitle.textContent = developer.name + '的主页';

    const avatarHost = byId('developer-profile-avatar');
    if (avatarHost && typeof window.createAvatar === 'function') {
      avatarHost.appendChild(window.createAvatar({ src: developer.avatar, text: developer.name, size: 144 }));
    }

    const name = byId('developer-profile-name');
    if (name) name.textContent = developer.name;
    const id = byId('developer-profile-id');
    if (id) id.textContent = 'ID: ' + developer.id;

    const stats = byId('developer-profile-stats');
    const averageRating = Math.round(tools.reduce(function(sum, tool) { return sum + tool.rating; }, 0) / tools.length);
    [
      { label: '质量分', value: developer.score },
      { label: '作品数', value: String(tools.length) },
      { label: '有效点评', value: String(180 + developerIndex * 23) },
      { label: '平均好评率', value: averageRating + '%' }
    ].forEach(function(stat) {
      if (!stats) return;
      const card = document.createElement('div');
      card.className = 'accelerator-developer-profile-stat';
      const label = document.createElement('span');
      label.textContent = stat.label;
      const value = document.createElement('strong');
      value.textContent = stat.value;
      card.append(label, value);
      stats.appendChild(card);
    });

    const works = byId('developer-profile-works');
    tools.forEach(function(tool) { works?.appendChild(createToolCard(tool)); });
  }

  function rgbToHsl(color) {
    const red = color.r / 255;
    const green = color.g / 255;
    const blue = color.b / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l: lightness };
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue;
    if (max === red) hue = ((green - blue) / delta) % 6;
    else if (max === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    hue *= 60;
    if (hue < 0) hue += 360;
    return { h: hue, s: saturation, l: lightness };
  }

  function extractAvatarColor(src) {
    return new Promise(function(resolve) {
      const image = new Image();
      image.onload = function() {
        try {
          const sampleSize = 32;
          const canvas = document.createElement('canvas');
          canvas.width = sampleSize;
          canvas.height = sampleSize;
          const context = canvas.getContext('2d', { willReadFrequently: true });
          context.drawImage(image, 0, 0, sampleSize, sampleSize);
          const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
          const buckets = new Map();
          for (let index = 0; index < pixels.length; index += 4) {
            if (pixels[index + 3] < 128) continue;
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const max = Math.max(red, green, blue);
            const min = Math.min(red, green, blue);
            const lightness = (max + min) / 510;
            if (lightness < 0.12 || lightness > 0.92) continue;
            const saturation = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));
            const key = (red >> 5) + '-' + (green >> 5) + '-' + (blue >> 5);
            const bucket = buckets.get(key) || { r: 0, g: 0, b: 0, weight: 0 };
            const weight = 0.2 + saturation;
            bucket.r += red * weight;
            bucket.g += green * weight;
            bucket.b += blue * weight;
            bucket.weight += weight;
            buckets.set(key, bucket);
          }
          let best = null;
          buckets.forEach(function(bucket) {
            if (!best || bucket.weight > best.weight) best = bucket;
          });
          resolve(best ? {
            r: Math.round(best.r / best.weight),
            g: Math.round(best.g / best.weight),
            b: Math.round(best.b / best.weight)
          } : null);
        } catch (error) {
          resolve(null);
        }
      };
      image.onerror = function() { resolve(null); };
      image.src = src;
    });
  }

  function applyAvatarBannerColor() {
    const banner = byId('developer-profile-banner');
    if (!banner) return;
    extractAvatarColor(developer.avatar).then(function(color) {
      if (!color) return;
      const hsl = rgbToHsl(color);
      const hue = Math.round(hsl.h);
      const isNeutral = hsl.s < 0.08;
      const saturation = isNeutral ? 4 : Math.round(Math.min(0.46, Math.max(0.24, hsl.s)) * 100);
      banner.style.setProperty('--developer-profile-banner-from', 'hsl(' + hue + ', ' + saturation + '%, 26%)');
      banner.style.setProperty('--developer-profile-banner-to', 'hsl(' + hue + ', ' + saturation + '%, 14%)');
      if (!isNeutral) {
        banner.style.setProperty('--developer-profile-banner-glow', 'hsla(' + hue + ', ' + Math.min(70, saturation + 12) + '%, 46%, 0.28)');
      }
    });
  }

  renderProfile();
  applyAvatarBannerColor();

  const content = byId('accelerator-developer-profile-content');
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
