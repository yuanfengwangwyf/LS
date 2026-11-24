(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const tools = [
    {
      name: '壁纸美化', category: '电脑性能优化', rating: 97,
      icon: '../image/Accelerator%20tools/tool-22.png',
      author: '阿泽同学', authorId: '20010', avatar: '../image/Avatar/头像1095.png',
      published: '2026-11-18', system: 'Windows', version: 'v1.0.0',
      reviewCount: '280', likes: '2,316', dislikes: '102',
      highlights: [['桌面壁纸', '高清美化'], ['主题方案', '一键应用'], ['画面适配', '多屏支持']]
    },
    {
      name: '内存智能清理', category: '电脑性能优化', rating: 96,
      icon: '../image/Accelerator%20tools/tool-15.png',
      author: '七喜不加冰', authorId: '20007', avatar: '../image/Avatar/头像1086.png',
      published: '2026-11-12', system: 'Windows 10 / 11', version: 'v1.8.0',
      reviewCount: '1,806', likes: '1,728', dislikes: '78',
      highlights: [['实时监控', '内存占用'], ['一键清理', '低占用运行'], ['后台管理', '智能释放']]
    },
    {
      name: '显卡性能优化', category: '电脑性能优化', rating: 95,
      icon: '../image/Accelerator%20tools/tool-18.png',
      author: '老周爱折腾', authorId: '20031', avatar: '../image/Avatar/头像717.png',
      published: '2026-11-08', system: 'Windows 10 / 11', version: 'v3.1.2',
      reviewCount: '1,524', likes: '1,448', dislikes: '76',
      highlights: [['显卡识别', '自动检测'], ['画质方案', '一键切换'], ['性能面板', '实时帧率']]
    },
    {
      name: 'DNS助手', category: '电脑性能优化', rating: 94,
      icon: '../image/Accelerator%20tools/tool-23.png',
      author: '小林装机铺', authorId: '20102', avatar: '../image/Avatar/头像311.png',
      published: '2026-11-05', system: 'Windows 10 / 11', version: 'v1.6.3',
      reviewCount: '1,206', likes: '1,134', dislikes: '72',
      highlights: [['DNS检测', '网络诊断'], ['节点方案', '智能推荐'], ['快速切换', '即时生效']]
    },
    {
      name: 'CPU温度性能监控', category: '电脑性能优化', rating: 93,
      icon: '../image/Accelerator%20tools/tool-16.png',
      author: '北川Code', authorId: '900302', avatar: '../image/Avatar/头像498.png',
      published: '2026-10-28', system: 'Windows 10 / 11', version: 'v2.0.4',
      reviewCount: '986', likes: '928', dislikes: '58',
      highlights: [['温度监控', '实时曲线'], ['风扇策略', '智能调节'], ['告警提醒', '高温提醒']]
    },
    {
      name: '系统雷达', category: '电脑性能优化', rating: 92,
      icon: '../image/Accelerator%20tools/tool-20.png',
      author: '帧率猫', authorId: '20126', avatar: '../image/Avatar/头像511.png',
      published: '2026-10-21', system: 'Windows 10 / 11', version: 'v1.4.2',
      reviewCount: '842', likes: '796', dislikes: '46',
      highlights: [['系统监测', '状态扫描'], ['风险提示', '异常识别'], ['实时面板', '后台运行']]
    },
    {
      name: '桌面整理', category: '电脑系统工具', rating: 96,
      icon: '../image/Accelerator%20tools/tool-17.png',
      author: '柚子的软件屋', authorId: '20139', avatar: '../image/Avatar/头像542.png',
      published: '2026-10-15', system: 'Windows 10 / 11', version: 'v1.2.0',
      reviewCount: '764', likes: '718', dislikes: '46',
      highlights: [['图标收纳', '自动分类'], ['布局方案', '一键切换'], ['桌面美化', '主题适配']]
    },
    {
      name: '一键屏蔽麦克风', category: '电脑系统工具', rating: 95,
      icon: '../image/Accelerator%20tools/tool-03.png',
      author: '键盘边的阿哲', authorId: '20157', avatar: '../image/Avatar/头像551.png',
      published: '2026-10-09', system: 'Windows 10 / 11', version: 'v1.1.6',
      reviewCount: '638', likes: '602', dislikes: '36',
      highlights: [['一键静音', '快捷切换'], ['状态提示', '实时反馈'], ['快捷键', '自定义绑定']]
    },
    {
      name: '游戏闪退修复大师', category: '电脑系统工具', rating: 92,
      icon: '../image/Accelerator%20tools/tool-19.png',
      author: '修复研究所', authorId: '20181', avatar: '../image/Avatar/头像580.png',
      published: '2026-10-02', system: 'Windows 10 / 11', version: 'v2.3.0',
      reviewCount: '592', likes: '558', dislikes: '34',
      highlights: [['崩溃诊断', '自动扫描'], ['组件修复', '一键处理'], ['日志分析', '问题定位']]
    },
    {
      name: '误触屏蔽', category: '电脑系统工具', rating: 94,
      icon: '../image/Accelerator%20tools/tool-04.png',
      author: '键盘边的阿哲', authorId: '20157', avatar: '../image/Avatar/头像551.png',
      published: '2026-09-28', system: 'Windows 10 / 11', version: 'v1.5.1',
      reviewCount: '614', likes: '579', dislikes: '35',
      highlights: [['按键屏蔽', '自由选择'], ['游戏模式', '快速切换'], ['配置方案', '按游戏保存']]
    },
    {
      name: '窗口快捷切换', category: '电脑系统工具', rating: 93,
      icon: '../image/Accelerator%20tools/tool-10.png',
      author: '夏夜调参员', authorId: '20163', avatar: '../image/Avatar/头像580.png',
      published: '2026-09-22', system: 'Windows 10 / 11', version: 'v1.3.4',
      reviewCount: '566', likes: '532', dislikes: '34',
      highlights: [['窗口识别', '自动归类'], ['快捷切换', '组合键'], ['多屏支持', '快速定位']]
    },
    {
      name: 'C 盘空间清理', category: '电脑系统工具', rating: 91,
      icon: '../image/Accelerator%20tools/tool-12.png',
      author: '橙子爱装机', authorId: '20188', avatar: '../image/Avatar/头像624.png',
      published: '2026-09-15', system: 'Windows 10 / 11', version: 'v2.0.1',
      reviewCount: '524', likes: '493', dislikes: '31',
      highlights: [['空间扫描', '分类统计'], ['安全清理', '风险提示'], ['大文件', '快速定位']]
    }
  ];

  const galleryItems = [
    { title: '桌面壁纸', imageSrc: '../image/windows11/Wallpaper.png' },
    { title: '适配游戏', imageSrc: '../image/Game%20Store/game-phantom-blade.png' },
    { title: '游戏画面', imageSrc: '../image/Game%20Detail/monster-hunter-wilds-01.jpg' },
    { title: '使用场景', imageSrc: '../image/Game%20Detail/monster-hunter-wilds-02.jpg' },
    { title: '演示画面', imageSrc: '../image/Game%20Detail/monster-hunter-wilds-03.jpg' }
  ];

  const usageParagraphs = [
    '下载并安装工具后，打开主界面即可查看当前状态与可用功能。建议先阅读界面提示，再按需选择需要处理的项目，避免同时开启多个优化任务。',
    '完成设置后点击应用并等待处理结束，必要时重新启动游戏或应用验证效果。如遇异常，可返回本页查看版本说明与更新记录，或联系开发者反馈问题。'
  ];

  const requestedName = new URLSearchParams(window.location.search).get('tool');
  const tool = tools.find(function(item) { return item.name === requestedName; }) || tools[0];
  const byId = function(id) { return document.getElementById(id); };
  const setText = function(id, text) { const node = byId(id); if (node) node.textContent = text; };
  const header = byId('accelerator-tool-detail-header');

  if (header && typeof window.createAcceleratorHeader === 'function') {
    const acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true,
      onSearchSuggestionSelect: function(value) {
        const frame = header.closest('.accelerator-tools-frame');
        if (!frame || !window.createAcceleratorGameSearch || frame.querySelector('.accelerator-game-search')) return;
        const search = window.createAcceleratorGameSearch({ mountTarget: frame });
        if (value && search.searchInput) {
          search.searchInput.value = value;
          search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
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
        if (frame && !frame.querySelector('.accelerator-game-search')) {
          window.createAcceleratorGameSearch({ mountTarget: frame });
        }
      });
    }
  }

  const sidebar = byId('accelerator-tool-detail-sidebar');
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

  setText('tool-detail-preview-title', tool.name);
  setText('tool-detail-name', tool.name);
  setText('tool-detail-category', tool.category);
  setText('tool-detail-rating', tool.rating + '%');
  const reviewCountNode = byId('tool-detail-review-count');
  if (reviewCountNode) {
    const reviewCountValue = document.createElement('span');
    reviewCountValue.className = 'accelerator-tool-detail-review-count__value';
    reviewCountValue.textContent = tool.reviewCount;
    reviewCountNode.replaceChildren(reviewCountValue, document.createTextNode('人参与点评'));
  }
  setText('tool-detail-author-name', tool.author);
  setText('tool-detail-author-id', 'ID：' + tool.authorId);
  setText('tool-detail-published', tool.published);
  setText('tool-detail-system', tool.system);
  setText('tool-detail-version', tool.version);
  document.title = '加速器页面 - ' + tool.name;

  function renderReaction(id, iconClass, count, label) {
    const node = byId(id);
    if (!node) return;
    const iconNode = document.createElement('i');
    iconNode.className = 'nnicon ' + iconClass;
    iconNode.setAttribute('aria-hidden', 'true');
    const value = document.createElement('span');
    value.className = 'accelerator-tool-detail-reaction__value';
    value.textContent = count;
    node.setAttribute('aria-label', label + ' ' + count);
    node.append(iconNode, value);
  }
  renderReaction('tool-detail-likes', 'nicon-a-like-linedianzan-xianxing', tool.likes, '点赞');
  renderReaction('tool-detail-dislikes', 'nicon-a-Stepon-linecai-xianxing', tool.dislikes, '踩');

  let reviewDialog = null;
  let reviewDialogTrigger = null;
  let reviewPublishButton = null;
  let selectedSentiment = 'positive';
  let sentimentButtons = [];
  let reviewInputElement = null;
  let submittedReview = null;
  let activeReviewFilter = 'all';

  function closeReviewDialog() {
    if (!reviewDialog) return;
    reviewDialog.hidden = true;
    if (reviewDialogTrigger && reviewDialogTrigger.isConnected) reviewDialogTrigger.focus();
    reviewDialogTrigger = null;
  }

  function syncSentimentButtons() {
    sentimentButtons.forEach(function(button) {
      const selected = button.dataset.sentiment === selectedSentiment;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      const icon = button.querySelector('.accelerator-tool-detail-review-dialog__reaction-icon');
      if (icon) {
        icon.className = 'accelerator-tool-detail-review-dialog__reaction-icon nnicon ' + (
          selected ? 'nicon-a-like-Filldianzan-mianxing' : 'nicon-a-like-linedianzan-xianxing'
        );
      }
    });
  }

  function playSentimentReaction(button) {
    const motion = button.querySelector('.accelerator-tool-detail-review-dialog__reaction-motion');
    if (!motion) return;
    button.classList.remove('is-animating');
    void motion.offsetWidth;
    button.classList.add('is-animating');
    let cleaned = false;
    const cleanup = function() {
      if (cleaned) return;
      cleaned = true;
      button.classList.remove('is-animating');
    };
    motion.addEventListener('animationend', cleanup, { once: true });
    window.setTimeout(cleanup, 380);
  }

  function submitReview() {
    const content = reviewInputElement ? reviewInputElement.value.trim() : '';
    if (!content) {
      if (typeof window.showMessage === 'function') {
        window.showMessage({ state: 'error', text: '请输入点评内容' });
      }
      if (reviewInputElement) reviewInputElement.focus();
      return;
    }

    const now = new Date();
    const publishedAt = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('-');
    const previousSentiment = submittedReview ? submittedReview.sentiment : null;

    if (submittedReview) {
      submittedReview.sentiment = selectedSentiment;
      submittedReview.title = selectedSentiment === 'negative' ? '不推荐' : '推荐';
      submittedReview.paragraphs = [content];
      submittedReview.publishedAt = publishedAt;
      if (previousSentiment !== selectedSentiment) {
        reviewStats[previousSentiment] -= 1;
        reviewStats[selectedSentiment] += 1;
      }
    } else {
      submittedReview = {
        username: '雷神玩家',
        avatarSrc: '../image/Avatar/头像1095.png',
        publishedAt: publishedAt,
        playtime: '0小时0分',
        title: selectedSentiment === 'negative' ? '不推荐' : '推荐',
        sentiment: selectedSentiment,
        paragraphs: [content],
        likeCount: 0,
        dislikeCount: 0
      };
      reviews.unshift(submittedReview);
      reviewStats.total += 1;
      reviewStats[selectedSentiment] += 1;
    }

    activeReviewFilter = 'all';
    renderReviews(activeReviewFilter);
    mountReviewTabs(true);
    reviewInputElement.value = '';
    reviewInputElement.dispatchEvent(new Event('input', { bubbles: true }));
    closeReviewDialog();
    if (reviewPublishButton && typeof reviewPublishButton.setButtonText === 'function') {
      reviewPublishButton.setButtonText('编辑点评');
      reviewPublishButton.setAttribute('aria-label', '编辑点评');
    }
    if (typeof window.showMessage === 'function') {
      window.showMessage({ state: 'success', text: '点评已发布' });
    }
  }

  function ensureReviewDialog() {
    if (reviewDialog) return reviewDialog;
    if (typeof window.createToast !== 'function' || typeof window.createInput !== 'function') return null;

    const overlay = document.createElement('div');
    overlay.className = 'accelerator-tool-detail-review-dialog';
    overlay.hidden = true;

    const content = document.createElement('div');
    content.className = 'accelerator-tool-detail-review-dialog__content';

    const sentiments = document.createElement('div');
    sentiments.className = 'accelerator-tool-detail-review-dialog__sentiments';
    sentiments.setAttribute('role', 'group');
    sentiments.setAttribute('aria-label', '点评态度');

    sentimentButtons = [];
    [
      { key: 'positive', text: '推荐', modifier: 'like' },
      { key: 'negative', text: '不推荐', modifier: 'dislike' }
    ].forEach(function(option) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'accelerator-tool-detail-review-dialog__sentiment accelerator-tool-detail-review-dialog__sentiment--' + option.modifier;
      button.dataset.sentiment = option.key;
      button.innerHTML = '<span class="accelerator-tool-detail-review-dialog__reaction-motion"><i class="accelerator-tool-detail-review-dialog__reaction-icon nnicon nicon-a-like-linedianzan-xianxing" aria-hidden="true"></i></span><span>' + option.text + '</span>';
      button.addEventListener('click', function() {
        selectedSentiment = option.key;
        syncSentimentButtons();
        playSentimentReaction(button);
      });
      sentimentButtons.push(button);
      sentiments.appendChild(button);
    });
    syncSentimentButtons();
    content.appendChild(sentiments);

    const reviewInput = window.createInput({
      type: 'textarea',
      placeholder: '这款工具哪里好用？哪里让你失望？说说你的真实体验.....',
      id: 'accelerator-tool-detail-review-input'
    });
    reviewInputElement = reviewInput.querySelector('textarea');
    content.appendChild(reviewInput);

    const toast = window.createToast({
      title: '发表点评',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: true,
      className: 'accelerator-tool-detail-review-dialog__panel',
      id: 'accelerator-tool-detail-review-dialog',
      onClose: closeReviewDialog,
      footer: {
        layout: 'single-vertical',
        buttons: [{
          text: '提交评价',
          variant: 'system',
          level: 'primary',
          size: 'large',
          onClick: submitReview
        }]
      }
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-labelledby', 'accelerator-tool-detail-review-dialog-title');
    const toastTitle = toast.querySelector('.nn-toast__title');
    if (toastTitle) toastTitle.id = 'accelerator-tool-detail-review-dialog-title';
    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeReviewDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !overlay.hidden) closeReviewDialog();
    });
    document.body.appendChild(overlay);
    reviewDialog = overlay;
    return overlay;
  }

  function openReviewDialog(sentiment, trigger) {
    const dialog = ensureReviewDialog();
    if (!dialog) return;
    selectedSentiment = sentiment || (submittedReview && submittedReview.sentiment) || 'positive';
    syncSentimentButtons();
    if (reviewInputElement) {
      reviewInputElement.value = submittedReview ? submittedReview.paragraphs[0] : '';
      reviewInputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
    reviewDialogTrigger = trigger || document.activeElement;
    dialog.hidden = false;
    const selectedButton = dialog.querySelector('[aria-pressed="true"]');
    if (selectedButton) selectedButton.focus();
  }

  function makeReactionInteractive(node, sentiment) {
    if (!node) return;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    const open = function() { openReviewDialog(sentiment, node); };
    node.addEventListener('click', open);
    node.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      open();
    });
  }
  makeReactionInteractive(byId('tool-detail-likes'), 'positive');
  makeReactionInteractive(byId('tool-detail-dislikes'), 'negative');

  const metrics = byId('tool-detail-metrics');
  const metricLabels = ['工具类型', '解决的问题', '使用限制'];
  tool.highlights.forEach(function(highlight, index) {
    const item = document.createElement('div');
    item.className = 'accelerator-tool-detail-metric';
    const value = document.createElement('strong');
    value.textContent = highlight[0];
    const label = document.createElement('small');
    label.textContent = metricLabels[index] || '';
    item.append(value, label);
    metrics && metrics.appendChild(item);
  });

  const avatar = byId('tool-detail-author-avatar');
  if (avatar && typeof window.createAvatar === 'function') {
    avatar.appendChild(window.createAvatar({ src: tool.avatar, text: tool.author, size: 40 }));
  }

  const mediaHost = byId('accelerator-tool-detail-media');
  if (mediaHost && typeof window.createMediaCarousel === 'function') {
    const carousel = window.createMediaCarousel({
      ariaLabel: tool.name + '工具截图',
      width: '100%',
      maxWidth: 1200,
      muted: true,
      className: 'accelerator-tool-detail-gallery',
      items: galleryItems.map(function(item) {
        return {
          title: item.title,
          mediaType: 'image',
          imageSrc: item.imageSrc,
          thumbnailSrc: item.imageSrc
        };
      })
    });
    mediaHost.appendChild(carousel);
  }

  const usage = byId('tool-detail-usage');
  usageParagraphs.forEach(function(paragraph) {
    const node = document.createElement('p');
    node.textContent = paragraph;
    usage && usage.appendChild(node);
  });

  const downloadHost = byId('tool-detail-download');
  if (downloadHost && typeof window.createButton === 'function') {
    const downloadButton = window.createButton({
      text: '打开工具', variant: 'primary', level: 'primary', size: 'large',
      icon: '<i class="nnicon nicon-a-Start-lineqidong-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      onClick: function(event) {
        const button = event.currentTarget;
        const opened = button.dataset.opened !== 'true';
        button.dataset.opened = String(opened);
        button.setAttribute('aria-pressed', String(opened));
        const text = button.querySelector('.nn-btn-text');
        if (text) text.textContent = opened ? '关闭工具' : '打开工具';
        const icon = button.querySelector('.nn-btn-icon i');
        if (icon) {
          icon.classList.toggle('nicon-a-close-lineguanbi-xianxing', opened);
          icon.classList.toggle('nicon-a-Start-lineqidong-xianxing', !opened);
        }
      }
    });
    downloadButton.dataset.opened = 'false';
    downloadButton.setAttribute('aria-pressed', 'false');
    downloadHost.appendChild(downloadButton);
  }

  const favoriteHost = byId('tool-detail-favorite');
  if (favoriteHost && typeof window.createButton === 'function') {
    const favoriteButton = window.createButton({
      text: '收藏', variant: 'system', level: 'secondary', size: 'large', appearance: 'outline',
      icon: '<i class="nnicon nicon-a-Heart-Linexin-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      onClick: function(event) {
        const button = event.currentTarget;
        const saved = button.dataset.saved === 'true';
        button.dataset.saved = saved ? 'false' : 'true';
        button.classList.toggle('is-favorited', !saved);
        const text = button.querySelector('.nn-btn-text');
        if (text) text.textContent = saved ? '收藏' : '已收藏';
        const icon = button.querySelector('.nn-btn-icon i');
        if (icon) {
          icon.classList.toggle('nicon-a-Heart-Fillxin-mianxing', !saved);
          icon.classList.toggle('nicon-a-Heart-Linexin-xianxing', saved);
        }
        button.classList.remove('is-celebrating');
        void button.offsetWidth;
        button.classList.add('is-celebrating');
        window.setTimeout(function() { button.classList.remove('is-celebrating'); }, 760);
      }
    });
    const iconHost = favoriteButton.querySelector('.nn-btn-icon');
    if (iconHost) {
      [[0, -24], [17, -17], [24, 0], [17, 17], [0, 24], [-17, 17], [-24, 0], [-17, -17]].forEach(function(offset, index) {
        const spark = document.createElement('span');
        spark.className = 'accelerator-tool-detail-favorite-spark';
        spark.style.setProperty('--spark-x', offset[0] + 'px');
        spark.style.setProperty('--spark-y', offset[1] + 'px');
        spark.style.animationDelay = (index * 0.02) + 's';
        iconHost.appendChild(spark);
      });
    }
    favoriteHost.appendChild(favoriteButton);
  }

  function createRecommendationCard(item) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-card accelerator-tools-card--grid';
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', '查看' + item.name + '详情');

    const image = document.createElement('img');
    image.className = 'accelerator-tools-card__icon';
    image.src = item.icon;
    image.alt = '';

    const copy = document.createElement('span');
    copy.className = 'accelerator-tools-card__copy';
    const name = document.createElement('strong');
    name.textContent = item.name;
    const category = document.createElement('small');
    category.textContent = item.category;
    const rating = document.createElement('span');
    rating.className = 'accelerator-tools-card__rating';
    const ratingLabel = document.createElement('small');
    ratingLabel.textContent = '好评率';
    const ratingValue = document.createElement('strong');
    ratingValue.textContent = item.rating + '%';
    rating.append(ratingLabel, ratingValue);
    copy.append(name, category, rating);

    const trailing = document.createElement('span');
    trailing.className = 'accelerator-tools-card__trailing';
    const arrow = document.createElement('i');
    arrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-card__arrow';
    arrow.setAttribute('aria-hidden', 'true');
    trailing.appendChild(arrow);

    const openDetail = function() {
      window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(item.name);
    };
    card.addEventListener('click', openDetail);
    card.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openDetail();
    });

    card.append(image, copy, trailing);
    return card;
  }

  const recommendations = byId('tool-detail-recommendations');
  tools.filter(function(item) { return item.name !== tool.name; }).slice(0, 6).forEach(function(item) {
    recommendations && recommendations.appendChild(createRecommendationCard(item));
  });

  const reviews = [
    { username: '夜行玩家', avatarSrc: '../image/Avatar/头像1086.png', publishedAt: '2026-11-19', playtime: '128小时36分', title: '推荐', paragraphs: ['检测步骤很清晰，跟着提示排查之后解决了启动异常问题。'], likeCount: 128, dislikeCount: 3 },
    { username: '像素旅人', avatarSrc: '../image/Avatar/头像717.png', publishedAt: '2026-11-16', playtime: '64小时12分', title: '推荐', paragraphs: ['界面简单，常见问题的说明比较实用，希望后续增加更多游戏适配。'], likeCount: 86, dislikeCount: 2 },
    { username: '风中回声', avatarSrc: '../image/Avatar/头像311.png', publishedAt: '2026-11-10', playtime: '37小时45分', title: '不推荐', sentiment: 'negative', paragraphs: ['部分问题仍需要手动处理，建议先查看提示再继续操作。'], likeCount: 12, dislikeCount: 5 }
  ];
  const reviewStats = { total: 321, positive: 301, negative: 20 };
  const reviewList = byId('tool-detail-review-list');

  function renderReviews(filter) {
    if (!reviewList || typeof window.createComment !== 'function') return;
    reviewList.replaceChildren();
    reviews.filter(function(review) {
      if (filter === 'positive') return review.sentiment !== 'negative';
      if (filter === 'negative') return review.sentiment === 'negative';
      return true;
    }).forEach(function(review) {
      const comment = window.createComment(Object.assign({}, review, { fluid: true, userTag: '' }));
      const userTag = comment.querySelector('.nn-comment__author > .nn-label');
      if (userTag) userTag.remove();
      reviewList.appendChild(comment);
    });
  }
  renderReviews('all');

  const reviewTabsHost = byId('tool-detail-review-tabs');
  let reviewTabsMounted = false;
  function mountReviewTabs(force) {
    if (!reviewTabsHost || typeof window.createTabs !== 'function') return;
    if (force) {
      reviewTabsHost.replaceChildren();
      reviewTabsMounted = false;
    }
    if (reviewTabsMounted) return;
    reviewTabsMounted = true;
    const reviewFilters = ['all', 'positive', 'negative'];
    reviewTabsHost.appendChild(window.createTabs({
      type: 'tertiary',
      tabs: [
        { name: '全部' + reviewStats.total + '条', value: 'all' },
        { name: '好评' + reviewStats.positive + '条', value: 'positive' },
        { name: '差评' + reviewStats.negative + '条', value: 'negative' }
      ],
      defaultActive: Math.max(0, reviewFilters.indexOf(activeReviewFilter)),
      onChange: function(change) {
        activeReviewFilter = change.tab.value;
        renderReviews(activeReviewFilter);
      }
    }));
  }

  const reviewPublishHost = byId('tool-detail-review-publish');
  if (reviewPublishHost && typeof window.createButton === 'function') {
    reviewPublishButton = window.createButton({
      text: '发布点评',
      variant: 'system',
      level: 'secondary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-Publishcontent-linefabuneirong-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x12)',
      iconGap: 'var(--space8)',
      className: 'accelerator-tool-detail-review-publish__button',
      onClick: function() {
        openReviewDialog(submittedReview ? submittedReview.sentiment : 'positive', reviewPublishButton);
      }
    });
    reviewPublishHost.appendChild(reviewPublishButton);
  }

  const tabsHost = byId('accelerator-tool-detail-tabs');
  if (tabsHost && typeof window.createTabs === 'function') {
    tabsHost.appendChild(window.createTabs({
      type: 'primary',
      tabs: [{ name: '工具介绍', value: 'intro' }, { name: '点评', value: 'reviews' }],
      defaultActive: 0,
      onChange: function(change) {
        const showReviews = change.index === 1;
        byId('tool-introduction-view').hidden = showReviews;
        byId('tool-reviews-view').hidden = !showReviews;
        if (showReviews) mountReviewTabs();
        if (byId('accelerator-tool-detail-content')) byId('accelerator-tool-detail-content').scrollTo({ top: 0, behavior: 'smooth' });
      }
    }));
  }

  const content = byId('accelerator-tool-detail-content');
  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({ target: content, container: content.parentElement, hoverTarget: content, variant: 'page', right: 4, top: 0, bottom: 0, minThumbSize: 60 });
  }
})();
