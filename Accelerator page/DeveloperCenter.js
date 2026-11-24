(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const byId = function(id) { return document.getElementById(id); };
  const isIntroPreview = new URLSearchParams(window.location.search).get('view') === 'intro';

  const developerProfile = {
    name: '阿泽同学',
    account: 'aze_dev',
    id: '9002301',
    avatar: '../image/Avatar/头像1095.png'
  };

  const dashboardStats = [
    { label: '工具使用次数', value: '3,100', delta: { direction: 'up', value: '320' } },
    { label: '点赞总数', value: '204', delta: { direction: 'up', value: '18' } },
    { label: '累计收益', value: '¥2,580.00', gain: '¥280.00' },
    { label: '上架工具总数', value: '2' },
    { label: '点评总数', value: '79', delta: { direction: 'down', value: '6' } },
    { label: '可提现', value: '¥1,600.00', gain: '¥280.00', action: 'withdraw' }
  ];

  const dashboardTools = [
    { id: 'desktop-organizer', name: '桌面整理', version: 'v1.0.0', versionState: '已上架', review: 'approved', usage: '1240', likes: '108', comments: '42', rating: '4.75', actions: ['edit'], editId: 'desktop-organizer', iconSrc: '../image/Accelerator%20tools/tool-17.png' },
    { id: 'quick-actions', name: '一键屏蔽麦克风', version: 'v1.0.0', versionState: '已上架', review: 'approved', usage: '1860', likes: '96', comments: '37', rating: '4.85', actions: ['edit'], editId: 'quick-actions', iconSrc: '../image/Accelerator%20tools/tool-03.png' },
    { id: 'desktop-organizer-v03', name: '桌面整理', version: 'v0.3.0', versionState: '版本审核', review: 'pending', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['progress'], iconSrc: '../image/Accelerator%20tools/tool-17.png' },
    { id: 'quick-actions-v05', name: '误触屏蔽', version: 'v0.5.0', versionState: '版本审核', review: 'failed', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['reason', 'resubmit'], editId: 'quick-actions-v05', iconSrc: '../image/Accelerator%20tools/tool-04.png' },
    { id: 'memory-cleaner', name: '内存智能清理', version: 'v1.0.0', versionState: '版本审核', review: 'pending', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['progress'], iconSrc: '../image/Accelerator%20tools/tool-15.png' },
    { id: 'gpu-optimizer', name: '显卡性能优化', version: 'v1.0.0', versionState: '版本审核', review: 'failed', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['reason', 'resubmit'], editId: 'gpu-optimizer', iconSrc: '../image/Accelerator%20tools/tool-18.png' },
    { id: 'network-repair', name: 'DNS助手', version: 'v1.0.0', versionState: '版本审核', review: 'pending', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['progress'], iconSrc: '../image/Accelerator%20tools/tool-23.png' },
    { id: 'cpu-monitor', name: 'CPU温度性能监控', version: 'v1.0.0', versionState: '版本审核', review: 'failed', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['reason', 'resubmit'], editId: 'cpu-monitor', iconSrc: '../image/Accelerator%20tools/tool-16.png' },
    { id: 'process-booster', name: '系统雷达', version: 'v1.0.0', versionState: '版本审核', review: 'pending', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['progress'], iconSrc: '../image/Accelerator%20tools/tool-20.png' },
    { id: 'system-cleaner', name: '壁纸美化', version: 'v1.0.0', versionState: '版本审核', review: 'failed', usage: '—', likes: '—', comments: '—', rating: '—', actions: ['reason', 'resubmit'], editId: 'system-cleaner', iconSrc: '../image/Accelerator%20tools/tool-22.png' }
  ];

  const dashboardDrafts = [
    { id: 'draft-111', name: '111', version: 'v0.1.0', systems: 'Windows 10 / Windows 11', status: 'unsubmitted', savedAt: '2026/11/21 11:45:02', iconSrc: '../image/Accelerator%20tools/tool-14.png' }
  ];

  const dashboardReviewStates = {
    approved: { text: '审核通过', color: 'green' },
    pending: { text: '审核中', color: 'blue' },
    failed: { text: '审核失败', color: 'red' }
  };

  const dashboardDraftStates = {
    unsubmitted: { text: '未提交审核', color: 'neutral' }
  };

  const dashboardVersionStates = {
    '已上架': { text: '已上架', color: 'green' },
    '版本审核': { text: '版本审核', color: 'blue' }
  };

  const dashboardEarnings = [
    { id: 'earning-1', tool: '桌面整理', source: '工具收益', amount: '¥128.40' },
    { id: 'earning-2', tool: '桌面整理', source: '工具收益', amount: '¥96.20' },
    { id: 'earning-3', tool: '一键屏蔽麦克风', source: '工具收益', amount: '¥86.00' },
    { id: 'earning-4', tool: '一键屏蔽麦克风', source: '工具收益', amount: '¥42.80' },
    { id: 'earning-5', tool: '桌面整理', source: '工具收益', amount: '¥18.60' }
  ];

  const dashboardWithdrawals = [
    { id: '20261115001', amount: '¥500.00', appliedAt: '2026-11-15 10:24:18', status: 'processing' },
    { id: '20261028002', amount: '¥800.00', appliedAt: '2026-10-28 16:05:42', status: 'paid' },
    { id: '20261012003', amount: '¥300.00', appliedAt: '2026-10-12 09:31:07', status: 'paid' },
    { id: '20260930004', amount: '¥600.00', appliedAt: '2026-09-30 14:12:50', status: 'failed' }
  ];

  const dashboardWithdrawalStates = {
    paid: { text: '已到账', color: 'green' },
    processing: { text: '处理中', color: 'blue' },
    failed: { text: '提现失败', color: 'red' }
  };

  const dashboardToolActions = {
    edit: { text: '编辑详情', level: 'secondary', message: { state: 'normal', text: '编辑详情原型：工具编辑流程暂未接入。' } },
    progress: {
      text: '审核进度',
      level: 'tertiary',
      dialog: {
        title: '审核中',
        content: '正在进行安全与资料检查。审核结果尚未产生，当前上架版本不变。未审核版本不计入已上架工具数。'
      }
    },
    reason: {
      text: '失败原因',
      level: 'tertiary',
      dialog: {
        title: '审核失败',
        content: '更新说明与权限声明不完整，请补充后重新提交。未审核版本不计入已上架工具数。'
      }
    },
    resubmit: { text: '修改重提', level: 'secondary', message: { state: 'success', text: '已进入修改重提流程，修改完成后可再次提交审核。' } }
  };

  const dashboardCommentTools = ['全部工具'].concat(Array.from(new Set(dashboardTools.map(function(tool) { return tool.name; }))));
  const dashboardComments = [
    { id: 'comment-1', tool: '桌面整理', player: '玩家 A', avatar: '../image/Avatar/头像716.png', time: '2026-11-18', rating: 5, content: '希望增加桌面布局备份和恢复说明。', status: 'pending', reply: '' },
    { id: 'comment-2', tool: '一键屏蔽麦克风', player: '玩家 B', avatar: '../image/Avatar/头像717.png', time: '2026-11-17', rating: 4, content: '快捷键很方便，希望增加自定义说明。', status: 'pending', reply: '' },
    { id: 'comment-3', tool: '桌面整理', player: '玩家 C', avatar: '../image/Avatar/头像748.png', time: '2026-11-15', rating: 5, content: '整理后的桌面清爽很多，布局保存功能也很实用。', status: 'replied', reply: '感谢支持，我们会在后续版本继续优化布局备份体验。' },
    { id: 'comment-4', tool: '一键屏蔽麦克风', player: '玩家 D', avatar: '../image/Avatar/头像1095.png', time: '2026-11-13', rating: 4, content: '希望支持更多快捷键组合。', status: 'replied', reply: '已记录需求，会在下个版本评估支持范围。' }
  ];
  let commentStatus = 'all';
  let commentTool = '全部工具';
  let replyDialog = null;
  let replyTrigger = null;
  let replyCommentId = null;

  const dashboardPanelIds = ['developer-center-tools-panel', 'developer-center-drafts-panel', 'developer-center-comments-panel', 'developer-center-earnings-panel'];

  const header = byId('developer-center-header');
  if (header && typeof window.createAcceleratorHeader === 'function') {
    const acceleratorHeader = window.createAcceleratorHeader({
      width: '100%', canGoBack: true, enableSearchSuggestions: true,
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
    if (input) { input.readOnly = true; input.setAttribute('aria-haspopup', 'dialog'); }
    if (acceleratorHeader.search && window.createAcceleratorGameSearch) {
      acceleratorHeader.search.addEventListener('click', function(event) {
        event.preventDefault();
        const frame = header.closest('.accelerator-tools-frame');
        if (frame && !frame.querySelector('.accelerator-game-search')) window.createAcceleratorGameSearch({ mountTarget: frame });
      });
    }
  }

  const sidebar = byId('developer-center-sidebar');
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

  function showView(viewId, title, description) {
    ['developer-center-intro-view', 'developer-center-application-view', 'developer-center-success-view', 'developer-center-dashboard-view'].forEach(function(id) {
      const view = byId(id);
      if (view) view.hidden = id !== viewId;
    });
    byId('developer-center-content').scrollTo({ top: 0, behavior: 'smooth' });
    byId('developer-center-page-title').textContent = title;
    byId('developer-center-page-description').textContent = description;
  }

  function makeButton(host, options) {
    if (!host || typeof window.createButton !== 'function') return null;
    const button = window.createButton(options);
    host.appendChild(button);
    return button;
  }

  function startApplication(type) {
    applicationType = type;
    showView('developer-center-application-view', '开发者申请', '填写申请资料，开启开发者之旅。');
    byId('developer-center-application-title').textContent = type === 'company' ? '企业开发者申请' : '个人开发者申请';
    byId('developer-center-form-title').textContent = type === 'company' ? '企业资料' : '个人开发者资料';
    renderApplicationTabs();
    renderStepper(0);
    renderForm();
  }

  function showDeveloperDashboard() {
    showView('developer-center-dashboard-view', '开发者工作台', '管理工具、查看数据与平台通知。');
    renderDeveloperDashboard();
  }

  const developerModeLabel = byId('developer-center-mode-label');
  const developerModeSwitchHost = byId('developer-center-mode-switch');
  if (developerModeLabel) developerModeLabel.textContent = isIntroPreview ? '非开发者' : '开发者';
  if (developerModeSwitchHost && typeof window.createSwitch === 'function') {
    const developerModeSwitch = window.createSwitch({
      checked: !isIntroPreview,
      size: 'default',
      state: 'default',
      onChange: function(checked) {
        if (developerModeLabel) developerModeLabel.textContent = checked ? '开发者' : '非开发者';
        if (checked) {
          showDeveloperDashboard();
          return;
        }
        showView('developer-center-intro-view', '开发者中心', '加入雷神开发者计划，让优质工具触达更多玩家。');
      }
    });
    developerModeSwitch.setAttribute('aria-label', '切换开发者身份');
    developerModeSwitchHost.appendChild(developerModeSwitch);
  }


  let applicationType = 'individual';
  function renderStepper(activeStep) {
    const host = byId('developer-center-stepper');
    if (!host) return;
    host.innerHTML = '';
    ['填写资料', '提交审核', '完成入驻'].forEach(function(label, index) {
      const step = document.createElement('div');
      step.className = 'developer-center-step' + (index === activeStep ? ' is-active' : '') + (index < activeStep ? ' is-complete' : '');
      const number = document.createElement('span');
      number.className = 'developer-center-step__number';
      number.textContent = index < activeStep ? '✓' : String(index + 1);
      const text = document.createElement('span');
      text.textContent = label;
      step.append(number, text);
      host.appendChild(step);
    });
  }

  function renderApplicationTabs() {
    const host = byId('developer-center-application-type-tabs');
    if (!host || typeof window.createTabs !== 'function') return;
    host.innerHTML = '';
    host.appendChild(window.createTabs({
      type: 'tertiary-box',
      tabs: [{ name: '个人开发者', value: 'individual' }, { name: '企业开发者', value: 'company' }],
      defaultActive: applicationType === 'company' ? 1 : 0,
      onChange: function(change) { startApplication(change.tab.value); }
    }));
  }

  function createControl(type, placeholder, options) {
    if (typeof window.createInput !== 'function') return document.createElement('span');
    const controlOptions = Object.assign({ size: 'large', placeholder: placeholder, className: 'developer-center-input' }, options || {});
    if (type === 'textarea') controlOptions.type = 'textarea';
    const control = window.createInput(controlOptions);
    control.style.width = '100%';
    return control;
  }

  function createUploadControl(description) {
    const wrap = document.createElement('div');
    wrap.className = 'developer-center-upload-field';
    const slot = typeof window.createUploadPicture === 'function'
      ? window.createUploadPicture({ size: '16:9', text: '上传图片', showText: true, interactive: true })
      : document.createElement('span');
    wrap.appendChild(slot);
    const hint = document.createElement('small');
    hint.textContent = description;
    wrap.appendChild(hint);
    return wrap;
  }

  function createVerificationCodeControl() {
    const wrap = document.createElement('div');
    wrap.className = 'developer-center-code-field';
    if (typeof window.createFormControl === 'function') {
      wrap.appendChild(window.createFormControl('input', { size: 'large', placeholder: '请输入验证码', className: 'developer-center-input' }));
    }
    if (typeof window.createButton === 'function') {
      wrap.appendChild(window.createButton({
        text: '获取验证码',
        variant: 'primary',
        level: 'tertiary',
        size: 'default',
        className: 'developer-center-code-button'
      }));
    }
    return wrap;
  }

  function createField(label, control, required, help, className) {
    return {
      label: label,
      required: required !== false,
      layout: 'vertical',
      labelAlign: 'left',
      control: control,
      help: help || '',
      className: className || ''
    };
  }

  function createFieldGroup(label, placeholder, required, options, help) {
    const control = window.createFormControl('input', Object.assign({ size: 'large', placeholder: placeholder, className: 'developer-center-input' }, options || {}));
    return createField(label, control, required, help);
  }

  function renderAgreement() {
    const host = byId('developer-center-form-agreement');
    if (!host || typeof window.createCheckbox !== 'function') return;
    host.innerHTML = '';
    const checkbox = window.createCheckbox({
      text: '我已阅读并同意开发者协议、隐私说明及原创安全规范',
      checked: false,
      interactive: true
    });
    const label = checkbox.querySelector('.nn-checkbox__label');
    if (label) {
      label.textContent = '';
      [
        { text: '我已阅读并同意' },
        { text: '开发者协议', link: true },
        { text: '、' },
        { text: '隐私说明', link: true },
        { text: '及' },
        { text: '原创安全规范', link: true }
      ].forEach(function(part) {
        if (!part.link) {
          label.appendChild(document.createTextNode(part.text));
          return;
        }
        const link = document.createElement('span');
        link.className = 'developer-center-agreement-link';
        link.textContent = part.text;
        link.addEventListener('click', function(event) { event.stopPropagation(); });
        label.appendChild(link);
      });
    }
    host.appendChild(checkbox);
  }

  function renderForm() {
    const formHost = byId('developer-center-form');
    if (!formHost) return;
    formHost.innerHTML = '';
    if (typeof window.createForm !== 'function' || typeof window.createFormItem !== 'function') return;
    const items = [];
    if (applicationType === 'individual') {
      items.push(createFieldGroup('真实姓名', '请输入身份证姓名', true));
      items.push(createFieldGroup('身份证号码', '请输入身份证号码', true));
      items.push(createField('身份证人像面', createUploadControl('请上传身份证人像面照片'), true));
      items.push(createField('身份证国徽面', createUploadControl('请上传身份证国徽面照片'), true));
      items.push(createFieldGroup('手机号', '请输入手机号', true));
      items.push(createField('验证码', createVerificationCodeControl(), true));
      items.push(createFieldGroup('支付宝账号', '请输入支付宝账号', true));
    } else {
      items.push(createFieldGroup('企业名称', '请输入营业执照上的企业名称', true));
      items.push(createFieldGroup('统一社会信用代码', '请输入统一社会信用代码', true));
      items.push(createFieldGroup('法定代表人姓名', '请输入法定代表人姓名', true));
      items.push(createFieldGroup('法定代表人身份证号', '请输入法定代表人身份证号', true));
      items.push(createFieldGroup('经办人姓名', '请输入经办人姓名', true));
      items.push(createFieldGroup('经办人身份证号', '请输入经办人身份证号', true));
      items.push(createField('营业执照', createUploadControl('请上传清晰完整的营业执照照片'), true));
      items.push(createField('企业授权证明', createUploadControl('请上传企业授权证明图片'), true));
      items.push(createField('经办人身份证人像面', createUploadControl('请上传经办人身份证人像面照片'), true));
      items.push(createField('经办人身份证国徽面', createUploadControl('请上传经办人身份证国徽面照片'), true));
      items.push(createFieldGroup('企业支付宝账号', '请输入企业支付宝账号', true));
      items.push(createFieldGroup('手机号', '请输入手机号', true));
      items.push(createField('手机验证码', createVerificationCodeControl(), true));
    }
    formHost.appendChild(window.createForm({ items, className: 'developer-center-form' }));
  }

  makeButton(byId('developer-intro-hero-actions'), {
    text: '申请成为开发者', variant: 'primary', level: 'primary', size: 'large',
    onClick: function() { startApplication('individual'); }
  });

  makeButton(byId('developer-center-intro-actions'), {
    text: '申请成为开发者', variant: 'primary', level: 'primary', size: 'large', className: 'developer-center-intro-submit',
    onClick: function() { startApplication('individual'); }
  });

  renderAgreement();

  makeButton(byId('developer-center-form-actions'), {
    text: '提交申请', variant: 'primary', level: 'primary', size: 'large', className: 'developer-center-submit',
    onClick: function() {
      renderStepper(1);
      showView('developer-center-success-view', '申请已提交', '申请资料已提交审核。');
      renderStepper(2);
    }
  });
  makeButton(byId('developer-center-success-actions'), {
    text: '前往首页', variant: 'primary', level: 'primary', size: 'large',
    onClick: function() {
      window.location.href = 'Tools.html';
    }
  });

  function showPrototypeMessage(message) {
    if (typeof window.showMessage === 'function') {
      window.showMessage({ state: message.state, text: message.text, duration: 3200 });
      return;
    }
    window.alert(message.text);
  }

  let toolReviewDialog = null;
  let toolReviewDialogTrigger = null;

  function closeToolReviewDialog() {
    if (!toolReviewDialog) return;
    toolReviewDialog.hidden = true;
    if (toolReviewDialogTrigger && toolReviewDialogTrigger.isConnected) toolReviewDialogTrigger.focus();
    toolReviewDialogTrigger = null;
  }

  function ensureToolReviewDialog() {
    if (toolReviewDialog) return toolReviewDialog;
    if (typeof window.createToast !== 'function') return null;

    const overlay = document.createElement('div');
    overlay.className = 'developer-center-tool-review-dialog';
    overlay.hidden = true;

    const content = document.createElement('p');
    content.className = 'developer-center-tool-review-dialog__content';

    const toast = window.createToast({
      title: '审核中',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: true,
      className: 'developer-center-tool-review-dialog__panel',
      id: 'developer-center-tool-review-dialog',
      onClose: closeToolReviewDialog,
      footer: {
        layout: 'single-vertical',
        buttons: [{
          text: '知道了',
          variant: 'system',
          level: 'primary',
          size: 'large',
          onClick: closeToolReviewDialog
        }]
      }
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-labelledby', 'developer-center-tool-review-dialog-title');
    const toastTitle = toast.querySelector('.nn-toast__title');
    if (toastTitle) toastTitle.id = 'developer-center-tool-review-dialog-title';

    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeToolReviewDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !overlay.hidden) closeToolReviewDialog();
    });
    document.body.appendChild(overlay);
    toolReviewDialog = overlay;
    return overlay;
  }

  function openToolReviewDialog(action, trigger) {
    const dialog = ensureToolReviewDialog();
    if (!dialog || !action || !action.dialog) return;
    toolReviewDialogTrigger = trigger || document.activeElement;
    const title = dialog.querySelector('.nn-toast__title');
    const content = dialog.querySelector('.developer-center-tool-review-dialog__content');
    if (title) title.textContent = action.dialog.title;
    if (content) content.textContent = action.dialog.content;
    dialog.hidden = false;
    const confirmButton = dialog.querySelector('.nn-toast__footer button');
    if (confirmButton) confirmButton.focus();
  }

  const withdrawBalance = 1600;
  const withdrawBalanceText = '¥1,600.00';
  let withdrawAccount = 'leigod***@163.com';
  let withdrawDraftAmount = '';
  let withdrawDialog = null;

  function formatWithdrawAmount(value) {
    return '¥' + Number(value).toLocaleString('zh-CN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function createWithdrawSerial() {
    const now = new Date();
    const pad = function(value) { return String(value).padStart(2, '0'); };
    return 'TX' + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) +
      pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds()) +
      String(Math.floor(Math.random() * 900) + 100);
  }

  function closeWithdrawDialog() {
    if (!withdrawDialog) return;
    withdrawDialog.remove();
    withdrawDialog = null;
  }

  function appendWithdrawHelp(toast) {
    const title = toast.querySelector('.nn-toast__title');
    if (!title) return;
    const help = document.createElement('span');
    help.className = 'developer-center-withdraw__help';
    help.innerHTML = '<i class="nnicon nicon-a-query-lineyiwen-xianxing" aria-hidden="true"></i>';
    if (typeof window.createTooltip === 'function') {
      title.appendChild(window.createTooltip({
        type: 'rich',
        title: '提现说明',
        content: '可提现金额仅包含已结算且未被提现申请占用的收益。请核对支付宝收款账号。申请后可在提现记录查看结果；费用、限额与到账时间以正式结算规则为准。',
        direction: 'bottom',
        portal: true,
        width: 320,
        trigger: help
      }));
    } else {
      title.appendChild(help);
    }
  }

  function openWithdrawDialogPanel(options) {
    closeWithdrawDialog();
    if (typeof window.createToast !== 'function') return null;
    const overlay = document.createElement('div');
    overlay.className = 'developer-center-withdraw-dialog';
    const toast = window.createToast({
      title: options.title,
      content: options.content,
      showHeader: true,
      showClose: true,
      showFooter: true,
      className: 'developer-center-withdraw-dialog__panel',
      onClose: closeWithdrawDialog,
      footer: {
        layout: options.layout || 'double-horizontal',
        buttons: options.buttons
      }
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    if (options.withHelp) appendWithdrawHelp(toast);
    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeWithdrawDialog();
    });
    document.body.appendChild(overlay);
    withdrawDialog = overlay;
    if (options.afterOpen) options.afterOpen(toast);
    return toast;
  }

  function createWithdrawLabel(text) {
    const label = document.createElement('span');
    label.className = 'developer-center-withdraw__label';
    label.textContent = text;
    return label;
  }

  function createWithdrawRow(labelText, valueNode) {
    const row = document.createElement('div');
    row.className = 'developer-center-withdraw__row';
    row.append(createWithdrawLabel(labelText), valueNode);
    return row;
  }

  function setWithdrawError(container, message) {
    const error = container.querySelector('.developer-center-withdraw__error');
    if (!error) return;
    error.textContent = message || '';
    error.hidden = !message;
  }

  function sanitizeWithdrawAmount(input) {
    let next = input.value.replace(/[^\d.]/g, '');
    const dotIndex = next.indexOf('.');
    if (dotIndex !== -1) {
      next = next.slice(0, dotIndex + 1) + next.slice(dotIndex + 1).replace(/\./g, '');
    }
    const matched = next.match(/^\d*(?:\.\d{0,2})?/);
    next = matched ? matched[0] : '';
    if (input.value !== next) input.value = next;
  }

  function buildWithdrawAmountContent() {
    const content = document.createElement('div');
    content.className = 'developer-center-withdraw';

    const balance = document.createElement('strong');
    balance.className = 'developer-center-withdraw__amount';
    balance.textContent = withdrawBalanceText;

    const accountWrap = document.createElement('span');
    accountWrap.className = 'developer-center-withdraw__account-wrap';
    const account = document.createElement('span');
    account.className = 'developer-center-withdraw__account';
    account.textContent = withdrawAccount;
    accountWrap.appendChild(account);
    if (typeof window.createButton === 'function') {
      accountWrap.appendChild(window.createButton({
        text: '更换',
        variant: 'system',
        level: 'tertiary',
        size: 'default',
        onClick: openChangeWithdrawAccountDialog
      }));
    }

    const field = document.createElement('div');
    field.className = 'developer-center-withdraw__field';
    field.appendChild(createWithdrawLabel('提现金额'));
    if (typeof window.createInput === 'function') {
      const input = window.createInput({
        size: 'large',
        placeholder: '请输入提现金额',
        className: 'developer-center-withdraw__input'
      });
      input.style.width = '100%';
      const inputEl = input._inputEl;
      if (inputEl) {
        inputEl.setAttribute('inputmode', 'decimal');
        inputEl.setAttribute('autocomplete', 'off');
        inputEl.addEventListener('input', function() {
          sanitizeWithdrawAmount(inputEl);
          setWithdrawError(content, '');
        });
      }
      field.appendChild(input);
    }

    const error = document.createElement('p');
    error.className = 'developer-center-withdraw__error';
    error.hidden = true;

    content.append(
      createWithdrawRow('可提现余额', balance),
      createWithdrawRow('提现至支付宝', accountWrap),
      field,
      error
    );
    return content;
  }

  function openWithdrawDialog() {
    const content = buildWithdrawAmountContent();
    openWithdrawDialogPanel({
      title: '提现',
      withHelp: true,
      content: content,
      buttons: [
        { text: '下一步', variant: 'primary', level: 'primary', size: 'large', onClick: submitWithdrawAmount },
        { text: '取消', variant: 'system', level: 'secondary', size: 'large', onClick: closeWithdrawDialog }
      ],
      afterOpen: function(toast) {
        const input = toast.querySelector('.developer-center-withdraw__field input');
        if (!input) return;
        input.value = withdrawDraftAmount;
        input.focus();
      }
    });
  }

  function submitWithdrawAmount() {
    const toast = withdrawDialog && withdrawDialog.querySelector('.nn-toast');
    const content = toast && toast.querySelector('.developer-center-withdraw');
    const input = toast && toast.querySelector('.developer-center-withdraw__field input');
    if (!content || !input) return;
    const value = input.value.trim();
    withdrawDraftAmount = value;
    if (!value) {
      setWithdrawError(content, '请输入提现金额。');
      input.focus();
      return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      setWithdrawError(content, '提现金额最多保留两位小数。');
      input.focus();
      return;
    }
    const amount = Number(value);
    if (amount <= 0) {
      setWithdrawError(content, '提现金额需大于 0。');
      input.focus();
      return;
    }
    if (amount > withdrawBalance) {
      setWithdrawError(content, '提现金额不能超过可提现余额。');
      input.focus();
      return;
    }
    openWithdrawConfirmDialog(amount);
  }

  function openWithdrawConfirmDialog(amount) {
    const content = document.createElement('div');
    content.className = 'developer-center-withdraw';

    const amountValue = document.createElement('strong');
    amountValue.className = 'developer-center-withdraw__amount';
    amountValue.textContent = formatWithdrawAmount(amount);

    const account = document.createElement('span');
    account.className = 'developer-center-withdraw__account';
    account.textContent = withdrawAccount;

    const tip = document.createElement('p');
    tip.className = 'developer-center-withdraw__tip';
    tip.textContent = '费用与税费以结算规则为准，请确认金额与收款账号。';

    content.append(
      createWithdrawRow('申请金额', amountValue),
      createWithdrawRow('提现至支付宝账户', account),
      tip
    );

    openWithdrawDialogPanel({
      title: '确认提现',
      content: content,
      buttons: [
        { text: '确认提现', variant: 'primary', level: 'primary', size: 'large', onClick: confirmWithdraw },
        { text: '返回修改', variant: 'system', level: 'secondary', size: 'large', onClick: openWithdrawDialog }
      ]
    });
  }

  function confirmWithdraw() {
    withdrawDraftAmount = '';
    openWithdrawSuccessDialog(createWithdrawSerial());
  }

  function openWithdrawSuccessDialog(serial) {
    const content = document.createElement('div');
    content.className = 'developer-center-withdraw';
    const message = document.createElement('p');
    message.className = 'developer-center-withdraw__success';
    message.innerHTML = '流水号：<strong></strong>';
    message.querySelector('strong').textContent = serial;
    content.appendChild(message);

    openWithdrawDialogPanel({
      title: '申请已提交',
      content: content,
      layout: 'single-vertical',
      buttons: [
        { text: '知道了', variant: 'primary', level: 'primary', size: 'large', onClick: closeWithdrawDialog }
      ]
    });
  }

  function openChangeWithdrawAccountDialog() {
    const content = document.createElement('div');
    content.className = 'developer-center-withdraw';

    const intro = document.createElement('p');
    intro.className = 'developer-center-withdraw__tip';
    intro.textContent = '通过绑定手机号验证身份后更换收款账号。';

    const phoneField = document.createElement('div');
    phoneField.className = 'developer-center-withdraw__field';
    phoneField.appendChild(createWithdrawLabel('绑定手机号'));
    const status = document.createElement('p');
    status.className = 'developer-center-withdraw__status';
    status.hidden = true;
    if (typeof window.createInput === 'function') {
      const phoneInput = window.createInput({
        size: 'large',
        placeholder: '请输入绑定手机号',
        className: 'developer-center-withdraw__phone'
      });
      phoneInput.classList.add('developer-center-withdraw__phone-wrap');
      phoneInput.style.width = '100%';
      if (phoneInput._inputEl) {
        phoneInput._inputEl.style.paddingRight = '104px';
        phoneInput._inputEl.setAttribute('inputmode', 'tel');
        phoneInput._inputEl.setAttribute('autocomplete', 'off');
        phoneInput._inputEl.addEventListener('input', function() {
          setWithdrawError(content, '');
          status.hidden = true;
        });
      }
      if (typeof window.createButton === 'function') {
        phoneInput.appendChild(window.createButton({
          text: '获取验证码',
          variant: 'primary',
          level: 'tertiary',
          size: 'small',
          className: 'developer-center-withdraw__code-button',
          onClick: function() {
            const phone = phoneInput._inputEl ? phoneInput._inputEl.value.trim() : '';
            if (!phone) {
              setWithdrawError(content, '请输入绑定手机号。');
              if (phoneInput._inputEl) phoneInput._inputEl.focus();
              return;
            }
            setWithdrawError(content, '');
            status.hidden = false;
            status.textContent = '验证码已发送，请使用测试验证码。';
          }
        }));
      }
      phoneField.appendChild(phoneInput);
    }

    const codeField = document.createElement('div');
    codeField.className = 'developer-center-withdraw__field';
    codeField.appendChild(createWithdrawLabel('验证码'));
    if (typeof window.createInput === 'function') {
      const codeInput = window.createInput({
        size: 'large',
        placeholder: '请输入验证码',
        className: 'developer-center-withdraw__code'
      });
      codeInput.style.width = '100%';
      if (codeInput._inputEl) {
        codeInput._inputEl.setAttribute('inputmode', 'numeric');
        codeInput._inputEl.setAttribute('autocomplete', 'off');
        codeInput._inputEl.addEventListener('input', function() { setWithdrawError(content, ''); });
      }
      codeField.appendChild(codeInput);
    }

    const note = document.createElement('p');
    note.className = 'developer-center-withdraw__note';
    note.textContent = '当前为本地原型，请使用测试资料。手机号与验证码不上传、不保存；真实短信验证与账号绑定服务尚未接入。';

    const error = document.createElement('p');
    error.className = 'developer-center-withdraw__error';
    error.hidden = true;

    content.append(intro, phoneField, codeField, note, status, error);

    openWithdrawDialogPanel({
      title: '更换收款账号',
      content: content,
      buttons: [
        { text: '确认更换', variant: 'primary', level: 'primary', size: 'large', onClick: submitWithdrawAccountChange },
        { text: '取消', variant: 'system', level: 'secondary', size: 'large', onClick: openWithdrawDialog }
      ],
      afterOpen: function(toast) {
        const phone = toast.querySelector('input.developer-center-withdraw__phone');
        if (phone) phone.focus();
      }
    });
  }

  function submitWithdrawAccountChange() {
    const toast = withdrawDialog && withdrawDialog.querySelector('.nn-toast');
    const content = toast && toast.querySelector('.developer-center-withdraw');
    const phoneInput = toast && toast.querySelector('input.developer-center-withdraw__phone');
    const codeInput = toast && toast.querySelector('input.developer-center-withdraw__code');
    if (!content || !phoneInput || !codeInput) return;
    if (!phoneInput.value.trim()) {
      setWithdrawError(content, '请输入绑定手机号。');
      phoneInput.focus();
      return;
    }
    if (!codeInput.value.trim()) {
      setWithdrawError(content, '请输入验证码。');
      codeInput.focus();
      return;
    }
    const phone = phoneInput.value.trim();
    withdrawAccount = phone.length > 7
      ? phone.slice(0, 3) + '****' + phone.slice(-4)
      : phone;
    closeWithdrawDialog();
    showPrototypeMessage({ state: 'success', text: '收款账号更换成功。' });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && withdrawDialog) closeWithdrawDialog();
  });

  function renderDeveloperProfile() {
    const host = byId('developer-center-profile');
    if (!host || host.children.length) return;
    const avatar = document.createElement('span');
    avatar.className = 'developer-center-profile__avatar';
    if (typeof window.createAvatar === 'function') {
      avatar.appendChild(window.createAvatar({ src: developerProfile.avatar, text: developerProfile.name, size: 60 }));
    }
    const info = document.createElement('div');
    info.className = 'developer-center-profile__info';
    const nameRow = document.createElement('div');
    nameRow.className = 'developer-center-profile__name-row';
    const name = document.createElement('h2');
    name.textContent = developerProfile.name;
    const status = typeof window.createLabel === 'function'
      ? window.createLabel({
        text: '已认证开发者',
        color: 'blue',
        type: 'soft',
        size: 'm',
        iconBefore: true,
        beforeIcon: '<i class="nnicon nicon-a-certification-Fillkaoherenzheng-mianxing" aria-hidden="true"></i>'
      })
      : document.createElement('span');
    if (typeof window.createLabel !== 'function') status.textContent = '已认证开发者';
    nameRow.append(name, status);
    const meta = document.createElement('p');
    meta.className = 'developer-center-profile__meta';
    const account = document.createElement('span');
    account.textContent = '账号：' + developerProfile.account;
    const divider = document.createElement('span');
    divider.className = 'developer-center-profile__divider';
    divider.setAttribute('aria-hidden', 'true');
    const identity = document.createElement('span');
    identity.className = 'developer-center-profile__id';
    identity.textContent = 'ID：' + developerProfile.id;
    meta.append(account, divider, identity);
    info.append(nameRow, meta);
    host.append(avatar, info);
    if (typeof window.createButton === 'function') {
      host.appendChild(window.createButton({
        text: '新建工具',
        variant: 'primary',
        level: 'primary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-add-linetianjia-xianxing" aria-hidden="true"></i>',
        iconPosition: 'left',
        className: 'developer-center-dashboard-create',
        onClick: function() { window.location.href = 'ToolEditor.html'; }
      }));
    }
  }

  function createStatDelta(delta) {
    const wrap = document.createElement('span');
    wrap.className = 'developer-center-dashboard-stat__delta is-' + delta.direction;
    const arrowClass = delta.direction === 'down'
      ? 'nicon-a-Arrow1down-linejiantou1xia-xianxing'
      : 'nicon-a-Arrow1up-linejiantou1shang-xianxing';
    if (typeof window.createLabel === 'function') {
      wrap.appendChild(window.createLabel({
        text: delta.value,
        color: delta.direction === 'down' ? 'red' : 'green',
        type: 'soft',
        size: 'm',
        iconBefore: true,
        beforeIcon: '<i class="nnicon ' + arrowClass + '" aria-hidden="true"></i>'
      }));
      return wrap;
    }
    const icon = document.createElement('i');
    icon.className = 'nnicon ' + arrowClass;
    icon.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = delta.value;
    wrap.append(icon, text);
    return wrap;
  }

  function createStatGain(gain) {
    const wrap = document.createElement('span');
    wrap.className = 'developer-center-dashboard-stat__gain';
    if (typeof window.createLabel !== 'function') {
      wrap.textContent = gain;
      return wrap;
    }
    wrap.appendChild(window.createLabel({
      text: gain,
      color: 'green',
      type: 'soft',
      size: 'm',
      iconBefore: true,
      beforeIcon: '<i class="nnicon nicon-a-Arrow1up-linejiantou1shang-xianxing" aria-hidden="true"></i>'
    }));
    return wrap;
  }

  function renderDashboardStats() {
    const host = byId('developer-center-dashboard-stats');
    if (!host || host.children.length) return;
    dashboardStats.forEach(function(stat) {
      const card = document.createElement('article');
      card.className = 'developer-center-dashboard-stat';
      const body = document.createElement('div');
      body.className = 'developer-center-dashboard-stat__body';
      const label = document.createElement('small');
      label.textContent = stat.label;
      const valueRow = document.createElement('div');
      valueRow.className = 'developer-center-dashboard-stat__value-row';
      const valueBox = document.createElement('span');
      valueBox.className = 'developer-center-dashboard-stat__value';
      const value = document.createElement('strong');
      value.className = 'developer-center-dashboard-stat__value-text';
      value.textContent = stat.value;
      valueBox.appendChild(value);
      valueRow.appendChild(valueBox);
      if (stat.delta) valueRow.appendChild(createStatDelta(stat.delta));
      if (stat.gain) valueRow.appendChild(createStatGain(stat.gain));
      body.append(label, valueRow);
      card.appendChild(body);
      if (stat.action === 'withdraw' && typeof window.createButton === 'function') {
        const action = document.createElement('span');
        action.className = 'developer-center-dashboard-stat__action';
        action.appendChild(window.createButton({
          text: '提现', variant: 'primary', level: 'primary', size: 'default',
          onClick: openWithdrawDialog
        }));
        card.appendChild(action);
      }
      host.appendChild(card);
    });
  }

  function createToolCell(row) {
    const cell = document.createElement('div');
    cell.className = 'developer-center-tool-cell developer-center-tool-cell--icon';

    const icon = document.createElement('img');
    icon.className = 'developer-center-tool-cell__icon';
    icon.src = row.iconSrc;
    icon.alt = '';

    const body = document.createElement('div');
    body.className = 'developer-center-tool-cell__body';

    const name = document.createElement('strong');
    name.textContent = row.name;

    const meta = document.createElement('div');
    meta.className = 'developer-center-tool-cell__meta';
    const version = document.createElement('small');
    version.textContent = row.version;
    meta.appendChild(version);

    const versionState = dashboardVersionStates[row.versionState];
    if (versionState && typeof window.createLabel === 'function') {
      meta.appendChild(window.createLabel({
        text: versionState.text,
        color: versionState.color,
        type: 'soft',
        size: 's'
      }));
    } else if (row.versionState) {
      const fallback = document.createElement('small');
      fallback.textContent = row.versionState;
      meta.appendChild(fallback);
    }

    body.append(name, meta);
    cell.append(icon, body);
    return cell;
  }

  function createToolReviewCell(row) {
    const state = dashboardReviewStates[row.review];
    if (!state || typeof window.createLabel !== 'function') {
      const fallback = document.createElement('span');
      fallback.textContent = state ? state.text : '—';
      return fallback;
    }
    return window.createLabel({ text: state.text, color: state.color, type: 'soft', size: 'm' });
  }

  function createToolActionsCell(row) {
    const wrap = document.createElement('span');
    wrap.className = 'developer-center-tool-actions';
    if (typeof window.createButton !== 'function') return wrap;
    row.actions.forEach(function(key) {
      const action = dashboardToolActions[key];
      if (!action) return;
      wrap.appendChild(window.createButton({
        text: action.text,
        variant: 'system',
        level: action.level,
        size: 'default',
        onClick: function() {
          if ((key === 'edit' || key === 'resubmit') && row.editId) {
            window.location.href = 'ToolEditor.html?edit=' + encodeURIComponent(row.editId);
            return;
          }
          if (action.dialog) {
            openToolReviewDialog(action, this);
            return;
          }
          if (action.message) showPrototypeMessage(action.message);
        }
      }));
    });
    return wrap;
  }

  function createDraftToolCell(row) {
    const cell = document.createElement('div');
    cell.className = 'developer-center-tool-cell developer-center-tool-cell--icon';

    const icon = document.createElement('img');
    icon.className = 'developer-center-tool-cell__icon';
    icon.src = row.iconSrc;
    icon.alt = '';

    const body = document.createElement('div');
    body.className = 'developer-center-tool-cell__body';

    const name = document.createElement('strong');
    name.textContent = row.name;
    const version = document.createElement('small');
    version.textContent = row.version;

    body.append(name, version);
    cell.append(icon, body);
    return cell;
  }

  function createDraftStatusCell(row) {
    const state = dashboardDraftStates[row.status];
    if (!state || typeof window.createLabel !== 'function') {
      const fallback = document.createElement('span');
      fallback.textContent = state ? state.text : '—';
      return fallback;
    }
    return window.createLabel({ text: state.text, color: state.color, type: 'soft', size: 'm' });
  }

  function createDraftActionsCell() {
    const wrap = document.createElement('span');
    wrap.className = 'developer-center-tool-actions';
    if (typeof window.createButton !== 'function') return wrap;
    wrap.appendChild(window.createButton({
      text: '继续编辑',
      variant: 'system',
      level: 'secondary',
      size: 'small',
      onClick: function() { window.location.href = 'ToolEditor.html'; }
    }));
    return wrap;
  }

  function renderDashboardToolsTable() {
    const host = byId('developer-center-tools-table');
    if (!host || host.children.length || typeof window.createTable !== 'function') return;
    host.appendChild(window.createTable({
      height: 52 + 78 * dashboardTools.length,
      rowHeight: 78,
      headerHeight: 52,
      minWidth: 960,
      stickyHeader: false,
      className: 'developer-center-tools-table',
      columns: [
        { key: 'name', title: '工具 / 版本', render: function(value, row) { return createToolCell(row); } },
        { key: 'review', title: '审核状态', width: 112, render: function(value, row) { return createToolReviewCell(row); } },
        { key: 'usage', title: '使用次数', width: 108 },
        { key: 'likes', title: '点赞总数', width: 108 },
        { key: 'comments', title: '点评总数', width: 108 },
        { key: 'rating', title: '评分', width: 88 },
        { key: 'actions', title: '操作', width: 216, render: function(value, row) { return createToolActionsCell(row); } }
      ],
      data: dashboardTools
    }));
  }

  function renderDashboardDraftsTable() {
    const host = byId('developer-center-drafts-table');
    if (!host || host.children.length || typeof window.createTable !== 'function') return;
    host.appendChild(window.createTable({
      height: 52 + 78 * dashboardDrafts.length,
      rowHeight: 78,
      headerHeight: 52,
      minWidth: 960,
      stickyHeader: false,
      className: 'developer-center-drafts-table',
      columns: [
        { key: 'name', title: '工具名称', render: function(value, row) { return createDraftToolCell(row); } },
        { key: 'systems', title: '适用系统', width: 260 },
        { key: 'status', title: '状态', width: 140, render: function(value, row) { return createDraftStatusCell(row); } },
        { key: 'savedAt', title: '保存时间', width: 220 },
        { key: 'actions', title: '操作', width: 160, render: function() { return createDraftActionsCell(); } }
      ],
      data: dashboardDrafts
    }));
  }

  function renderDashboardComments() {
    const host = byId('developer-center-comments-panel');
    if (!host || host.children.length) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'developer-center-comments-toolbar';

    const toolHost = document.createElement('div');
    toolHost.className = 'developer-center-comment-tool-filter';
    if (typeof window.createDropdownMenu === 'function') {
      toolHost.appendChild(window.createDropdownMenu({
        appearance: 'filled',
        size: 'large',
        value: '全部工具',
        selectedIndex: 0,
        items: dashboardCommentTools.map(function(label) { return { label: label }; }),
        className: 'developer-center-comment-tool-dropdown',
        onChange: function(change) {
          commentTool = change.item ? change.item.label : '全部工具';
          updateDashboardComments();
        }
      }));
    }

    const statusHost = document.createElement('div');
    statusHost.className = 'developer-center-comment-status-tabs';
    if (typeof window.createTabs === 'function') {
      statusHost.appendChild(window.createTabs({
        type: 'tertiary-box',
        tabs: [
          { name: '全部点评', value: 'all' },
          { name: '待回复', value: 'pending' },
          { name: '已回复', value: 'replied' }
        ],
        defaultActive: 0,
        onChange: function(change) {
          commentStatus = change.tab && change.tab.value ? change.tab.value : 'all';
          updateDashboardComments();
        }
      }));
    }

    toolbar.append(statusHost, toolHost);

    const list = document.createElement('div');
    list.className = 'developer-center-comment-list';
    list.id = 'developer-center-comment-list';

    host.append(toolbar, list);
    updateDashboardComments();
  }

  function updateDashboardComments() {
    const list = byId('developer-center-comment-list');
    if (!list) return;
    const filtered = dashboardComments.filter(function(comment) {
      const matchesStatus = commentStatus === 'all' || comment.status === commentStatus;
      const matchesTool = commentTool === '全部工具' || comment.tool === commentTool;
      return matchesStatus && matchesTool;
    });
    list.innerHTML = '';
    if (!filtered.length) {
      if (typeof window.createEmpty === 'function') {
        list.appendChild(window.createEmpty({
          scene: 'page',
          type: 'message',
          title: '暂无点评',
          description: '当前筛选条件下没有点评',
          showActions: false
        }));
      }
      return;
    }
    filtered.forEach(function(comment) { list.appendChild(createDashboardCommentCard(comment)); });
  }

  function createDashboardCommentCard(comment) {
    const card = document.createElement('article');
    card.className = 'developer-center-comment-card';

    const avatarColumn = document.createElement('div');
    avatarColumn.className = 'developer-center-comment-card__avatar';
    if (typeof window.createAvatar === 'function') {
      avatarColumn.appendChild(window.createAvatar({ src: comment.avatar, text: comment.player, size: 40 }));
    }
    const thread = document.createElement('span');
    thread.className = 'developer-center-comment-card__thread';
    thread.setAttribute('aria-hidden', 'true');
    avatarColumn.appendChild(thread);

    const body = document.createElement('div');
    body.className = 'developer-center-comment-card__body';

    const header = document.createElement('div');
    header.className = 'developer-center-comment-card__header';
    const meta = document.createElement('div');
    meta.className = 'developer-center-comment-card__meta';
    const player = document.createElement('strong');
    player.className = 'developer-center-comment-card__player';
    player.textContent = comment.player;
    const metaText = document.createElement('span');
    metaText.textContent = comment.time + ' · ' + comment.rating + ' 分';
    meta.append(player, metaText);
    header.appendChild(meta);
    if (typeof window.createLabel === 'function') {
      header.appendChild(window.createLabel({
        text: comment.status === 'replied' ? '已回复' : '待回复',
        color: comment.status === 'replied' ? 'green' : 'neutral',
        type: 'soft',
        size: 'm'
      }));
    }

    const toolName = document.createElement('strong');
    toolName.className = 'developer-center-comment-card__tool';
    toolName.textContent = comment.tool;

    const content = document.createElement('p');
    content.className = 'developer-center-comment-card__content';
    content.textContent = comment.content;

    body.append(header, toolName, content);

    if (comment.status === 'replied' && comment.reply) {
      const reply = document.createElement('div');
      reply.className = 'developer-center-comment-card__reply';
      const replyLabel = document.createElement('span');
      replyLabel.textContent = '开发者回复';
      const replyText = document.createElement('p');
      replyText.textContent = comment.reply;
      reply.append(replyLabel, replyText);
      body.appendChild(reply);
    }

    const actions = document.createElement('div');
    actions.className = 'developer-center-comment-card__actions';
    if (typeof window.createButton === 'function') {
      actions.appendChild(window.createButton({
        text: comment.status === 'replied' ? '修改回复' : '回复点评',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        onClick: function() { openReplyDialog(comment, this); }
      }));
    }
    body.appendChild(actions);
    card.append(avatarColumn, body);
    return card;
  }

  function closeReplyDialog() {
    if (!replyDialog) return;
    replyDialog.hidden = true;
    if (replyTrigger && replyTrigger.isConnected) replyTrigger.focus();
    replyTrigger = null;
    replyCommentId = null;
  }

  function submitReply() {
    if (!replyDialog || !replyCommentId) return;
    const comment = dashboardComments.find(function(item) { return item.id === replyCommentId; });
    const textarea = replyDialog.querySelector('textarea');
    const value = textarea ? textarea.value.trim() : '';
    if (!comment) return;
    if (!value) {
      showPrototypeMessage({ state: 'error', text: '请输入回复内容。' });
      if (textarea) textarea.focus();
      return;
    }
    comment.reply = value;
    comment.status = 'replied';
    closeReplyDialog();
    updateDashboardComments();
    showPrototypeMessage({ state: 'success', text: '回复已发布。' });
  }

  function ensureReplyDialog() {
    if (replyDialog) return replyDialog;
    if (typeof window.createToast !== 'function' || typeof window.createInput !== 'function') return null;

    const overlay = document.createElement('div');
    overlay.className = 'developer-center-comment-reply-dialog';
    overlay.hidden = true;

    const content = document.createElement('div');
    content.className = 'developer-center-comment-reply-dialog__content';

    const summary = document.createElement('div');
    summary.className = 'developer-center-comment-reply-dialog__summary';
    const summaryTitle = document.createElement('strong');
    const summaryText = document.createElement('span');
    summary.append(summaryTitle, summaryText);

    const textarea = window.createInput({
      type: 'textarea',
      placeholder: '请输入回复内容',
      className: 'developer-center-comment-reply-input'
    });

    content.append(summary, textarea);

    const toast = window.createToast({
      title: '回复点评',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: true,
      className: 'developer-center-comment-reply-dialog__panel',
      id: 'developer-center-comment-reply-dialog',
      onClose: closeReplyDialog,
      footer: {
        layout: 'single-vertical',
        buttons: [{
          text: '提交回复',
          variant: 'primary',
          level: 'primary',
          size: 'large',
          onClick: submitReply
        }]
      }
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-labelledby', 'developer-center-comment-reply-dialog-title');
    const toastTitle = toast.querySelector('.nn-toast__title');
    if (toastTitle) toastTitle.id = 'developer-center-comment-reply-dialog-title';

    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeReplyDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !overlay.hidden) closeReplyDialog();
    });
    document.body.appendChild(overlay);
    replyDialog = overlay;
    return overlay;
  }

  function openReplyDialog(comment, trigger) {
    const dialog = ensureReplyDialog();
    if (!dialog) return;
    replyCommentId = comment.id;
    replyTrigger = trigger || document.activeElement;
    const title = dialog.querySelector('.nn-toast__title');
    if (title) title.textContent = comment.status === 'replied' ? '修改回复' : '回复点评';
    const summaryTitle = dialog.querySelector('.developer-center-comment-reply-dialog__summary strong');
    if (summaryTitle) summaryTitle.textContent = comment.tool + ' · ' + comment.player;
    const summaryText = dialog.querySelector('.developer-center-comment-reply-dialog__summary span');
    if (summaryText) summaryText.textContent = comment.content;
    const textarea = dialog.querySelector('textarea');
    if (textarea) textarea.value = comment.reply || '';
    dialog.hidden = false;
    if (textarea) textarea.focus();
  }

  function createWithdrawalStatusCell(row) {
    const state = dashboardWithdrawalStates[row.status];
    if (!state || typeof window.createLabel !== 'function') {
      const fallback = document.createElement('span');
      fallback.textContent = state ? state.text : '—';
      return fallback;
    }
    return window.createLabel({ text: state.text, color: state.color, type: 'soft', size: 'm' });
  }

  function createWithdrawalActionsCell(row) {
    const wrap = document.createElement('span');
    wrap.className = 'developer-center-tool-actions';
    if (typeof window.createButton !== 'function') return wrap;
    const state = dashboardWithdrawalStates[row.status];
    wrap.appendChild(window.createButton({
      text: '详情',
      variant: 'system',
      level: 'tertiary',
      size: 'small',
      onClick: function() {
        showPrototypeMessage({
          state: row.status === 'failed' ? 'error' : 'normal',
          text: '流水号 ' + row.id + '：' + row.amount + '，申请时间 ' + row.appliedAt + '，状态：' + (state ? state.text : '—') + '。'
        });
      }
    }));
    return wrap;
  }

  function switchEarningsPane(pane) {
    const detailsPanel = byId('developer-center-earnings-details-panel');
    const withdrawalsPanel = byId('developer-center-earnings-withdrawals-panel');
    if (detailsPanel) detailsPanel.hidden = pane !== 'details';
    if (withdrawalsPanel) withdrawalsPanel.hidden = pane !== 'withdrawals';
  }

  function renderEarningsDetailsTable() {
    const host = byId('developer-center-earnings-details-table');
    if (!host || host.children.length || typeof window.createTable !== 'function') return;
    host.appendChild(window.createTable({
      height: 52 + 60 * dashboardEarnings.length,
      rowHeight: 60,
      headerHeight: 52,
      minWidth: 720,
      stickyHeader: false,
      className: 'developer-center-earnings-table',
      columns: [
        { key: 'tool', title: '工具名' },
        { key: 'source', title: '收益来源', width: 200 },
        { key: 'amount', title: '收益金额', width: 220 }
      ],
      data: dashboardEarnings
    }));
  }

  function renderWithdrawalsTable() {
    const host = byId('developer-center-earnings-withdrawals-table');
    if (!host || host.children.length || typeof window.createTable !== 'function') return;
    host.appendChild(window.createTable({
      height: 52 + 60 * dashboardWithdrawals.length,
      rowHeight: 60,
      headerHeight: 52,
      minWidth: 900,
      stickyHeader: false,
      className: 'developer-center-earnings-table',
      columns: [
        { key: 'id', title: '流水号', width: 180 },
        { key: 'amount', title: '提现金额', width: 160 },
        { key: 'appliedAt', title: '申请时间', width: 220 },
        { key: 'status', title: '状态', width: 140, render: function(value, row) { return createWithdrawalStatusCell(row); } },
        { key: 'actions', title: '操作', width: 140, render: function(value, row) { return createWithdrawalActionsCell(row); } }
      ],
      data: dashboardWithdrawals
    }));
  }

  function renderDashboardEarnings() {
    const tabsHost = byId('developer-center-earnings-tabs');
    if (tabsHost && !tabsHost.children.length && typeof window.createTabs === 'function') {
      tabsHost.appendChild(window.createTabs({
        type: 'tertiary',
        tabs: [{ name: '收益明细', value: 'details' }, { name: '提现记录', value: 'withdrawals' }],
        defaultActive: 0,
        onChange: function(change) {
          switchEarningsPane(change.tab && change.tab.value === 'withdrawals' ? 'withdrawals' : 'details');
        }
      }));
    }
    renderEarningsDetailsTable();
    renderWithdrawalsTable();
  }

  function renderDashboardTabs() {
    const host = byId('developer-center-dashboard-tabs');
    if (!host || typeof window.createTabs !== 'function' || host.children.length) return;
    host.appendChild(window.createTabs({
      type: 'primary',
      tabs: [{ name: '我的工具' }, { name: '草稿箱' }, { name: '点评管理' }, { name: '收益管理' }],
      defaultActive: 0,
      onChange: function(change) {
        dashboardPanelIds.forEach(function(id, index) {
          const panel = byId(id);
          if (panel) panel.hidden = index !== change.index;
        });
        if (change.index === 2) renderDashboardComments();
        if (change.index === 3) renderDashboardEarnings();
      }
    }));
  }

  function renderDeveloperDashboard() {
    renderDeveloperProfile();
    renderDashboardStats();
    renderDashboardEarnings();
    renderDashboardTabs();
    renderDashboardToolsTable();
    renderDashboardDraftsTable();
  }

  if (isIntroPreview) {
    showView('developer-center-intro-view', '开发者中心', '加入雷神开发者计划，让优质工具触达更多玩家。');
  } else {
    showDeveloperDashboard();
  }

  const content = byId('developer-center-content');
  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({ target: content, container: content.parentElement, hoverTarget: content, variant: 'page', right: 4, top: 0, bottom: 0, minThumbSize: 60 });
  }
})();
