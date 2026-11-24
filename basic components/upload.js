const UploadStyles = `
  .nn-upload-picture {
    display: inline-flex;
    flex-direction: column;
    gap: var(--space4);
    width: var(--nn-upload-width, 132px);
    font-family: var(--font-family-main);
  }

  .nn-upload-picture__box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--nn-upload-width, 132px);
    height: var(--nn-upload-height, 74px);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: inherit;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-upload-picture__box:hover,
  .nn-upload-picture.is-hover .nn-upload-picture__box {
    background: var(--gray-9);
  }

  .nn-upload-picture__box:hover .nn-upload-picture__add,
  .nn-upload-picture.is-hover .nn-upload-picture__add {
    color: var(--gray-4);
  }

  .nn-upload-picture.is-disabled .nn-upload-picture__box {
    cursor: not-allowed;
    opacity: 1;
    background: var(--gray-10);
    border-color: var(--gray-10);
  }

  .nn-upload-picture.is-disabled .nn-upload-picture__add {
    color: var(--gray-6);
    opacity: 0.5;
  }

  .nn-upload-picture__add {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    min-width: 40px;
    min-height: 40px;
    border-radius: var(--border-radius-2r);
    color: var(--gray-6);
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-upload-picture__add .nnicon {
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-upload-picture__text {
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-upload-picture__box:hover .nn-upload-picture__text,
  .nn-upload-picture.is-hover .nn-upload-picture__text {
    color: var(--gray-4);
  }

  .nn-upload-picture.is-disabled .nn-upload-picture__text {
    color: var(--gray-6);
  }

  .nn-upload-picture__input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .nn-upload-picture__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-2r);
  }

  .nn-upload-picture__remove {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 2;
    display: none;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    padding: var(--space2);
    border: none;
    border-radius: var(--border-radius-4r);
    background: rgba(0, 0, 0, 0.5);
    color: var(--Neutral-0);
    font-size: var(--icon-size-x6);
    line-height: 1;
    cursor: pointer;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-upload-picture__remove .nnicon {
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-upload-picture.is-uploaded .nn-upload-picture__remove,
  .nn-upload-picture.is-uploading .nn-upload-picture__remove {
    display: inline-flex;
  }

  .nn-upload-picture__loading {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space6);
    background: var(--mask);
    color: var(--Neutral-0);
  }

  .nn-upload-picture.is-uploading .nn-upload-picture__loading {
    display: flex;
  }

  .nn-upload-picture__spinner {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    border: 3px solid rgba(255, 255, 255, 0.35);
    border-top-color: var(--Neutral-0);
    border-radius: 50%;
    animation: nn-upload-spin 0.9s linear infinite;
    box-sizing: border-box;
  }

  .nn-upload-picture__loading-text {
    color: var(--Neutral-0);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
  }

  @keyframes nn-upload-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const UploadSizeMap = {
  '16:9': { width: 132, height: 74 },
  '3:2': { width: 132, height: 88 },
  '1:1': { width: 88, height: 88 },
  '21:9': { width: 157, height: 68 }
};

function injectUploadStyles() {
  if (document.getElementById('nn-upload-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-upload-styles';
  style.textContent = UploadStyles;
  document.head.appendChild(style);
}

function normalizeUploadState(state, uploaded) {
  if (state === 'uploading') return 'uploading';
  if (uploaded || state === 'uploaded') return 'uploaded';
  if (state === 'hover') return 'hover';
  if (state === 'disabled') return 'disabled';
  return 'default';
}

function createUploadPicture(options = {}) {
  const {
    size = '16:9',
    state = 'default',
    uploaded = false,
    imageSrc = '../image/game1.webp',
    text = '',
    showText = false,
    accept = 'image/*',
    disabled = false,
    interactive = true,
    className = '',
    id = '',
    onChange = null,
    onRemove = null
  } = options;

  injectUploadStyles();

  let currentState = normalizeUploadState(state, uploaded);
  if (disabled) currentState = 'disabled';
  let currentImage = imageSrc;
  const sizeConfig = UploadSizeMap[size] || UploadSizeMap['16:9'];

  const root = document.createElement('div');
  root.className = [
    'nn-upload-picture',
    `nn-upload-picture--${size.replace(':', '-')}`,
    currentState === 'hover' ? 'is-hover' : '',
    currentState === 'disabled' ? 'is-disabled' : '',
    currentState === 'uploaded' ? 'is-uploaded' : '',
    currentState === 'uploading' ? 'is-uploading' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.style.setProperty('--nn-upload-width', `${sizeConfig.width}px`);
  root.style.setProperty('--nn-upload-height', `${sizeConfig.height}px`);

  const box = document.createElement('button');
  box.type = 'button';
  box.className = 'nn-upload-picture__box';
  box.disabled = currentState === 'disabled';

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.className = 'nn-upload-picture__input';
  input.disabled = currentState === 'disabled';

  const add = document.createElement('span');
  add.className = 'nn-upload-picture__add';
  add.innerHTML = '<i class="nnicon nicon-a-add-linetianjia-xianxing"></i>';
  if (showText || text) {
    const textEl = document.createElement('span');
    textEl.className = 'nn-upload-picture__text';
    textEl.textContent = text || '上传图片';
    add.appendChild(textEl);
  }

  function createImageNode() {
    const image = document.createElement('img');
    image.className = 'nn-upload-picture__image';
    image.alt = '';
    image.src = currentImage;
    return image;
  }

  function createLoadingNode() {
    const loading = document.createElement('span');
    loading.className = 'nn-upload-picture__loading';
    loading.innerHTML = '<span class="nn-upload-picture__spinner"></span><span class="nn-upload-picture__loading-text">上传中</span>';
    return loading;
  }

  function createRemoveNode() {
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'nn-upload-picture__remove';
    remove.setAttribute('aria-label', '删除图片');
    remove.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
    if (interactive) {
      remove.addEventListener('click', function(event) {
        event.stopPropagation();
        syncState('default');
        input.value = '';
        if (typeof onRemove === 'function') {
          onRemove();
        }
      });
    }
    return remove;
  }

  function renderBoxContent() {
    box.innerHTML = '';
    if (currentState === 'uploaded') {
      box.appendChild(createImageNode());
      box.appendChild(createRemoveNode());
      return;
    }
    if (currentState === 'uploading') {
      box.appendChild(createImageNode());
      box.appendChild(createLoadingNode());
      box.appendChild(createRemoveNode());
      return;
    }
    box.appendChild(add);
  }

  function syncState(nextState, nextImage) {
    currentState = normalizeUploadState(nextState, nextState === 'uploaded' || nextState === 'uploading');
    if (nextImage) {
      currentImage = nextImage;
    }
    root.classList.toggle('is-hover', currentState === 'hover');
    root.classList.toggle('is-disabled', currentState === 'disabled');
    root.classList.toggle('is-uploaded', currentState === 'uploaded');
    root.classList.toggle('is-uploading', currentState === 'uploading');
    box.disabled = currentState === 'disabled';
    input.disabled = currentState === 'disabled';
    renderBoxContent();
  }

  root.appendChild(box);
  root.appendChild(input);

  syncState(currentState, currentImage);

  if (interactive) {
    box.addEventListener('click', function() {
      if (currentState === 'disabled' || currentState === 'uploaded' || currentState === 'uploading') return;
      input.click();
    });

    input.addEventListener('change', function(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      syncState('uploading', url);
      if (typeof onChange === 'function') {
        onChange({ file, url, state: 'uploading' });
      }
      window.setTimeout(function() {
        syncState('uploaded', url);
        if (typeof onChange === 'function') {
          onChange({ file, url, state: 'uploaded' });
        }
      }, 800);
    });

  }

  return root;
}

function renderUploadPictures(container, uploads = []) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  injectUploadStyles();
  container.innerHTML = '';
  uploads.forEach(function(options) {
    container.appendChild(createUploadPicture(options));
  });
}

if (typeof window !== 'undefined') {
  window.injectUploadStyles = injectUploadStyles;
  window.createUploadPicture = createUploadPicture;
  window.renderUploadPictures = renderUploadPictures;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectUploadStyles,
    createUploadPicture,
    renderUploadPictures
  };
}
