(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const byId = function(id) { return document.getElementById(id); };
  const systemOptions = ['Windows 7', 'Windows 8', 'Windows 10', 'Windows 11', 'Mac'];
  const state = {
    name: '',
    intro: '',
    description: '',
    version: '',
    updateNotes: '',
    systems: [],
    packageFile: null,
    covers: []
  };
  let previewDialog = null;
  let previewTrigger = null;

  const editorPresets = {
    'desktop-organizer': {
      name: '桌面整理',
      intro: '自动整理桌面图标，保持桌面整洁。',
      description: '支持按文件类型自动分类桌面图标，可保存多套布局方案并一键恢复，帮助保持桌面整洁有序。',
      version: 'v1.0.0',
      updateNotes: '正式版发布：支持桌面图标自动分类、布局保存与恢复。',
      systems: ['Windows 10', 'Windows 11'],
      packageFile: { name: 'desktop-organizer-v1.0.0.zip', size: 2516582 },
      covers: ['../image/windows11/Wallpaper.png']
    },
    'quick-actions': {
      name: '一键屏蔽麦克风',
      intro: '一键切换麦克风状态，避免语音误开。',
      description: '支持快捷屏蔽麦克风、状态提示与自定义快捷键，适用于游戏和会议场景。',
      version: 'v1.0.0',
      updateNotes: '正式版发布：支持快捷指令、自定义手势与配置备份。',
      systems: ['Windows 10', 'Windows 11'],
      packageFile: { name: 'quick-actions-v1.0.0.zip', size: 2097152 },
      covers: ['../image/Steam%20achievements/tool%20banner1.png']
    },
    'quick-actions-v05': {
      name: '误触屏蔽',
      intro: '屏蔽易误触按键，避免游戏中断。',
      description: '支持选择需要屏蔽的按键与组合键，可在游戏内快速切换屏蔽状态。',
      version: 'v0.5.0',
      updateNotes: '新增自定义快捷键组合，优化手势识别稳定性。',
      systems: ['Windows 10', 'Windows 11'],
      packageFile: { name: 'quick-actions-v0.5.0.zip', size: 1992294 },
      covers: ['../image/Steam%20achievements/tool%20banner1.png']
    }
  };
  const editId = new URLSearchParams(window.location.search).get('edit');
  const editorPreset = editId && editorPresets[editId] ? editorPresets[editId] : null;
  if (editorPreset) {
    state.name = editorPreset.name;
    state.intro = editorPreset.intro;
    state.description = editorPreset.description;
    state.version = editorPreset.version;
    state.updateNotes = editorPreset.updateNotes;
    state.systems = editorPreset.systems.slice();
    state.packageFile = Object.assign({}, editorPreset.packageFile);
    state.covers = editorPreset.covers.slice();
    document.title = '加速器页面 - 编辑工具';
    const previewTitle = byId('tool-editor-preview-title');
    if (previewTitle) previewTitle.textContent = '编辑工具';
    const previewDescription = byId('tool-editor-preview-description');
    if (previewDescription) previewDescription.textContent = '修改工具信息后重新提交审核，或先保存为草稿。';
    const headingTitle = byId('tool-editor-heading-title');
    if (headingTitle) headingTitle.textContent = '编辑工具';
    const headingDescription = byId('tool-editor-heading-description');
    if (headingDescription) headingDescription.textContent = '修改以下信息后重新提交审核，也可以先保存为草稿。';
    const editorContent = byId('developer-tool-editor-content');
    if (editorContent) editorContent.setAttribute('aria-label', '编辑工具');
  }

  const header = byId('accelerator-tool-editor-header');
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

  const sidebar = byId('accelerator-tool-editor-sidebar');
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

  function createField(label, placeholder, controlType, className) {
    const options = { size: 'large', placeholder: placeholder, className: className || '' };
    const control = window.createFormControl(controlType, options);
    return { label: label, required: true, layout: 'vertical', labelAlign: 'left', control: control };
  }

  const nameControl = createField('工具名称', '请输入工具名称', 'input', 'developer-tool-editor-input');
  const versionControl = createField('版本号', '例如 v1.0.0', 'input', 'developer-tool-editor-input');
  const introControl = createField('工具简介', '一句话介绍工具的主要能力', 'input', 'developer-tool-editor-input');
  const descriptionControl = createField('详细介绍', '详细介绍工具的功能、使用场景与注意事项', 'textarea', 'developer-tool-editor-textarea developer-tool-editor-textarea--description');
  const notesControl = createField('更新说明', '填写本版本的更新内容', 'textarea', 'developer-tool-editor-textarea developer-tool-editor-textarea--notes');

  const formItems = [
    nameControl,
    versionControl,
    Object.assign({}, introControl, { className: 'developer-tool-editor-field--full' }),
    Object.assign({}, descriptionControl, { className: 'developer-tool-editor-field--full' }),
    Object.assign({}, notesControl, { className: 'developer-tool-editor-field--full' })
  ];
  const basicFormHost = byId('developer-tool-basic-form');
  if (basicFormHost && typeof window.createForm === 'function') {
    basicFormHost.appendChild(window.createForm({ items: formItems, className: 'developer-tool-editor-form' }));
  }

  const fieldMap = [
    { control: nameControl.control, key: 'name' },
    { control: versionControl.control, key: 'version' },
    { control: introControl.control, key: 'intro' },
    { control: descriptionControl.control, key: 'description' },
    { control: notesControl.control, key: 'updateNotes' }
  ];
  fieldMap.forEach(function(field) {
    const input = field.control.querySelector('input, textarea');
    if (!input) return;
    field.input = input;
    input.addEventListener('input', function() { state[field.key] = input.value; });
    if (state[field.key]) {
      input.value = state[field.key];
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  const nameField = fieldMap[0];
  const versionField = fieldMap[1];
  const introField = fieldMap[2];
  const descriptionField = fieldMap[3];
  const notesField = fieldMap[4];

  const systemsHost = byId('developer-tool-systems');
  if (systemsHost && typeof window.createFormChoiceGroup === 'function') {
    const checkedSystemIndices = state.systems.map(function(name) {
      return systemOptions.indexOf(name);
    }).filter(function(index) { return index >= 0; });
    systemsHost.appendChild(window.createFormChoiceGroup({
      type: 'checkbox',
      direction: 'horizontal',
      items: systemOptions,
      checkedIndices: checkedSystemIndices,
      onChange: function(change) {
        state.systems = change.checkedIndices.map(function(index) { return systemOptions[index]; });
      }
    }));
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  const packageHost = byId('developer-tool-package');
  let packageBoxHost = null;
  if (packageHost) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.zip,.exe,.msi,.7z,.rar,.dmg';
    fileInput.hidden = true;
    fileInput.addEventListener('change', function() {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      state.packageFile = file;
      renderPackage();
    });
    packageBoxHost = document.createElement('div');
    packageBoxHost.tabIndex = -1;
    packageHost.append(fileInput, packageBoxHost);

    packageBoxHost.addEventListener('click', function(event) {
      if (event.target.closest('button')) return;
      fileInput.click();
    });
  }

  function renderPackage() {
    if (!packageBoxHost) return;
    packageBoxHost.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'developer-tool-package';
    box.tabIndex = 0;
    box.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      const input = packageHost.querySelector('input[type="file"]');
      if (input) input.click();
    });
    const icon = document.createElement('span');
    icon.className = 'nnicon nicon-a-add-linetianjia-xianxing developer-tool-package__icon';
    icon.setAttribute('aria-hidden', 'true');
    const copy = document.createElement('div');
    copy.className = 'developer-tool-package__copy';
    const title = document.createElement('strong');

    if (state.packageFile) {
      box.classList.add('is-selected');
      title.textContent = state.packageFile.name;
      const size = document.createElement('small');
      size.textContent = formatFileSize(state.packageFile.size);
      copy.append(title, size);
      box.append(copy);
      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'developer-tool-package__remove';
      removeButton.setAttribute('aria-label', '移除文件');
      removeButton.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing" aria-hidden="true"></i>';
      removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        state.packageFile = null;
        renderPackage();
      });
      box.appendChild(removeButton);
    } else {
      title.textContent = '上传文件';
      copy.appendChild(title);
      box.append(icon, copy);
    }

    packageBoxHost.appendChild(box);
  }
  renderPackage();

  const coverHost = byId('developer-tool-covers');
  function renderCovers() {
    if (!coverHost || typeof window.createUploadPicture !== 'function') return;
    coverHost.innerHTML = '';
    state.covers.forEach(function(url, index) {
      coverHost.appendChild(window.createUploadPicture({
        size: '16:9',
        uploaded: true,
        imageSrc: url,
        text: '上传截图',
        showText: true,
        onRemove: function() {
          state.covers.splice(index, 1);
          renderCovers();
        }
      }));
    });
    if (state.covers.length < 5) {
      coverHost.appendChild(window.createUploadPicture({
        size: '16:9',
        text: '上传截图',
        showText: true,
        onChange: function(result) {
          if (result.state !== 'uploaded') return;
          state.covers.push(result.url);
          renderCovers();
        }
      }));
    }
  }
  renderCovers();

  function showMessage(message) {
    if (typeof window.showMessage === 'function') {
      window.showMessage({ state: message.state, text: message.text, duration: 3200 });
      return;
    }
    window.alert(message.text);
  }

  function validateForSubmit() {
    const checks = [
      { value: state.name, target: nameField && nameField.input, message: '请填写工具名称' },
      { value: state.version, target: versionField && versionField.input, message: '请填写版本号' },
      { value: state.intro, target: introField && introField.input, message: '请填写工具简介' },
      { value: state.description, target: descriptionField && descriptionField.input, message: '请填写详细介绍' },
      { value: state.updateNotes, target: notesField && notesField.input, message: '请填写更新说明' },
      { value: state.systems.length, target: systemsHost && systemsHost.querySelector('.nn-checkbox'), message: '请选择适用系统' },
      { value: state.packageFile, target: packageBoxHost, message: '请上传工具文件包' }
    ];
    const missing = checks.find(function(check) { return !check.value; });
    if (!missing) return true;
    showMessage({ state: 'error', text: missing.message });
    if (missing.target && missing.target.focus) missing.target.focus();
    return false;
  }

  function saveDraft() {
    showMessage({ state: 'success', text: '草稿已保存。' });
  }

  function submitForReview() {
    if (!validateForSubmit()) return;
    showMessage({ state: 'success', text: '已提交审核，请等待平台审核。' });
  }

  function buildPreviewCard() {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-card accelerator-tools-card--grid';

    const icon = document.createElement('img');
    icon.className = 'accelerator-tools-card__icon';
    icon.src = state.covers[0] || '../image/Accelerator%20tools/tool-14.png';
    icon.alt = '';

    const copy = document.createElement('span');
    copy.className = 'accelerator-tools-card__copy';
    const title = document.createElement('strong');
    title.textContent = state.name.trim() || '工具名称';
    const category = document.createElement('small');
    category.textContent = '电脑工具';
    const rating = document.createElement('span');
    rating.className = 'accelerator-tools-card__rating';
    rating.innerHTML = '<small>好评率</small><strong>—</strong>';
    copy.append(title, category, rating);

    const trailing = document.createElement('span');
    trailing.className = 'accelerator-tools-card__trailing';
    const arrow = document.createElement('i');
    arrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-card__arrow';
    arrow.setAttribute('aria-hidden', 'true');
    trailing.appendChild(arrow);

    card.append(icon, copy, trailing);
    return card;
  }

  function closePreviewDialog() {
    if (!previewDialog) return;
    previewDialog.hidden = true;
    if (previewTrigger && previewTrigger.isConnected) previewTrigger.focus();
    previewTrigger = null;
  }

  function ensurePreviewDialog() {
    if (previewDialog) return previewDialog;
    if (typeof window.createToast !== 'function') return null;

    const overlay = document.createElement('div');
    overlay.className = 'developer-tool-preview-dialog';
    overlay.hidden = true;

    const content = document.createElement('div');
    content.className = 'developer-tool-preview-dialog__content';
    const cardHost = document.createElement('div');
    cardHost.className = 'developer-tool-preview-dialog__card';
    content.appendChild(cardHost);

    const toast = window.createToast({
      title: '工具预览',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: true,
      className: 'developer-tool-preview-dialog__panel',
      id: 'developer-tool-preview-dialog',
      onClose: closePreviewDialog,
      footer: {
        layout: 'single-vertical',
        buttons: [{
          text: '继续编辑',
          variant: 'primary',
          level: 'primary',
          size: 'large',
          onClick: closePreviewDialog
        }]
      }
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-labelledby', 'developer-tool-preview-dialog-title');
    const toastTitle = toast.querySelector('.nn-toast__title');
    if (toastTitle) toastTitle.id = 'developer-tool-preview-dialog-title';

    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closePreviewDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !overlay.hidden) closePreviewDialog();
    });
    document.body.appendChild(overlay);
    previewDialog = overlay;
    return overlay;
  }

  function openPreview(trigger) {
    const dialog = ensurePreviewDialog();
    if (!dialog) return;
    const cardHost = dialog.querySelector('.developer-tool-preview-dialog__card');
    cardHost.innerHTML = '';
    cardHost.appendChild(buildPreviewCard());
    previewTrigger = trigger || document.activeElement;
    dialog.hidden = false;
    const continueButton = dialog.querySelector('.nn-toast__footer button');
    if (continueButton) continueButton.focus();
  }

  const actionsHost = byId('developer-tool-actions');
  if (actionsHost && typeof window.createButton === 'function') {
    actionsHost.append(
      window.createButton({
        text: '提交审核',
        variant: 'primary',
        level: 'primary',
        size: 'default',
        onClick: submitForReview
      }),
      window.createButton({
        text: '预览',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        onClick: function() { openPreview(this); }
      }),
      window.createButton({
        text: '保存草稿',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        onClick: saveDraft
      })
    );
  }

  const content = byId('developer-tool-editor-content');
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
