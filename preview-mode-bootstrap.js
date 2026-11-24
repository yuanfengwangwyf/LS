(function bootstrapPagePreviewMode() {
  const storageKey = 'nn-page-preview-mode';
  const windowNameToken = 'nn-page-preview-mode=true';
  window.NN_PAGE_PREVIEW_STORAGE_KEY = storageKey;
  window.NN_PAGE_PREVIEW_WINDOW_NAME_TOKEN = windowNameToken;

  let shouldRestorePreview = window.name.split('|').includes(windowNameToken);
  try {
    shouldRestorePreview = window.sessionStorage.getItem(storageKey) === 'true' || shouldRestorePreview;
  } catch (error) {
    // Local file previews can block sessionStorage; window.name persists in the same tab.
  }

  if (shouldRestorePreview) {
    document.documentElement.classList.add('page-preview-mode-pending');
  }
})();
