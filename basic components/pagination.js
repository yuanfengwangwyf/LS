const PaginationStyles = `
  .nn-pagination {
    display: inline-flex;
    align-items: center;
    gap: var(--space12);
    font-family: var(--font-family-main);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-pagination__total {
    color: var(--gray-5);
    white-space: nowrap;
  }

  .nn-pagination__main {
    display: inline-flex;
    align-items: center;
    gap: var(--space16);
  }

  .nn-pagination__pages {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
  }

  .nn-pagination__button,
  .nn-pagination__page {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: var(--space0);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .nn-pagination__button {
    font-size: 12px;
    line-height: 1;
  }

  .nn-pagination__button .nnicon {
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-pagination__button:hover,
  .nn-pagination__page:hover {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-pagination__page.is-active {
    background: var(--gray-8);
    color: var(--gray-3);
    font-weight: var(--font-weight-semibold);
  }

  .nn-pagination__button:disabled,
  .nn-pagination__page:disabled {
    color: var(--gray-7);
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-pagination__jump {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
  }

  .nn-pagination__size-wrap {
    position: relative;
    display: inline-flex;
  }

  .nn-pagination__size {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    height: 28px;
    padding: var(--space4) var(--space8) var(--space4) var(--space10);
    border: none;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-pagination__size:hover,
  .nn-pagination__size-wrap.is-open .nn-pagination__size {
    background: var(--gray-9);
  }

  .nn-pagination__size .nnicon {
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-pagination__size-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 20;
    display: none;
    min-width: 100%;
    padding: var(--space4);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
  }

  .nn-pagination__size-wrap.is-open .nn-pagination__size-menu {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
  }

  .nn-pagination__size-option {
    display: flex;
    align-items: center;
    height: 28px;
    padding: var(--space4) var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    cursor: pointer;
  }

  .nn-pagination__size-option:hover,
  .nn-pagination__size-option.is-active {
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .nn-pagination__jump-text {
    color: var(--gray-6);
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-pagination__input {
    width: 40px;
    height: 28px;
    padding: var(--space4) var(--space12);
    border: none;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    text-align: center;
    appearance: textfield;
    -moz-appearance: textfield;
    box-sizing: border-box;
  }

  .nn-pagination__input::-webkit-outer-spin-button,
  .nn-pagination__input::-webkit-inner-spin-button {
    margin: var(--space0);
    -webkit-appearance: none;
  }

  .nn-pagination__input:focus {
    outline: none;
    background: var(--gray-9);
  }
`;

function injectPaginationStyles() {
  if (document.getElementById('nn-pagination-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-pagination-styles';
  style.textContent = PaginationStyles;
  document.head.appendChild(style);
}

function createPagination(options = {}) {
  const {
    totalPages = 50,
    currentPage = 1,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50],
    showTotal = true,
    showSizeChanger = true,
    showQuickJumper = true,
    disabled = false,
    onChange = null,
    className = '',
    id = ''
  } = options;

  injectPaginationStyles();

  let statePage = Math.min(totalPages, Math.max(1, Number(currentPage) || 1));
  let statePageSize = Number(pageSize) || 10;
  let sizeMenuOpen = false;

  const root = document.createElement('div');
  root.className = ['nn-pagination', className].filter(Boolean).join(' ');
  if (id) root.id = id;

  const totalEl = document.createElement('span');
  totalEl.className = 'nn-pagination__total';
  root.appendChild(totalEl);

  const main = document.createElement('div');
  main.className = 'nn-pagination__main';

  const pages = document.createElement('div');
  pages.className = 'nn-pagination__pages';
  main.appendChild(pages);

  const jump = document.createElement('div');
  jump.className = 'nn-pagination__jump';
  main.appendChild(jump);

  root.appendChild(main);

  function emitChange() {
    if (typeof onChange === 'function') {
      onChange({
        currentPage: statePage,
        pageSize: statePageSize,
        totalPages
      });
    }
  }

  function setPage(nextPage, shouldEmit = true) {
    const safePage = Math.min(totalPages, Math.max(1, Number(nextPage) || 1));
    if (safePage === statePage && shouldEmit) return;
    statePage = safePage;
    render();
    if (shouldEmit) emitChange();
  }

  function setPageSize(nextSize) {
    statePageSize = Number(nextSize) || statePageSize;
    sizeMenuOpen = false;
    render();
    emitChange();
  }

  function createIconButton(iconClass, label, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-pagination__button';
    button.setAttribute('aria-label', label);
    button.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
    button.disabled = disabled;
    button.addEventListener('click', onClick);
    return button;
  }

  function renderPages() {
    pages.innerHTML = '';

    const prev = createIconButton('nicon-a-Arrowleft-linejiantouzuo-xianxing', '上一页', function() {
      setPage(statePage - 1);
    });
    prev.disabled = disabled || statePage <= 1;
    pages.appendChild(prev);

    const visibleCount = Math.min(totalPages, 5);
    for (let page = 1; page <= visibleCount; page += 1) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `nn-pagination__page${page === statePage ? ' is-active' : ''}`;
      button.textContent = String(page);
      button.disabled = disabled;
      button.addEventListener('click', function() {
        setPage(page);
      });
      pages.appendChild(button);
    }

    const next = createIconButton('nicon-a-Arrowright-linejiantouyou-xianxing', '下一页', function() {
      setPage(statePage + 1);
    });
    next.disabled = disabled || statePage >= totalPages;
    pages.appendChild(next);
  }

  function renderJump() {
    jump.innerHTML = '';

    if (showSizeChanger) {
      const sizeWrap = document.createElement('span');
      sizeWrap.className = `nn-pagination__size-wrap${sizeMenuOpen ? ' is-open' : ''}`;

      const sizeButton = document.createElement('button');
      sizeButton.type = 'button';
      sizeButton.className = 'nn-pagination__size';
      sizeButton.innerHTML = `<span>${statePageSize} / 页</span><i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>`;
      sizeButton.disabled = disabled;
      sizeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        sizeMenuOpen = !sizeMenuOpen;
        render();
      });

      const menu = document.createElement('div');
      menu.className = 'nn-pagination__size-menu';
      pageSizeOptions.forEach(function(size) {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = `nn-pagination__size-option${Number(size) === statePageSize ? ' is-active' : ''}`;
        option.textContent = `${size} / 页`;
        option.addEventListener('click', function(event) {
          event.stopPropagation();
          setPageSize(size);
        });
        menu.appendChild(option);
      });

      sizeWrap.appendChild(sizeButton);
      sizeWrap.appendChild(menu);
      jump.appendChild(sizeWrap);
    }

    if (showQuickJumper) {
      const prefix = document.createElement('span');
      prefix.className = 'nn-pagination__jump-text';
      prefix.textContent = '跳至';

      const input = document.createElement('input');
      input.className = 'nn-pagination__input';
      input.type = 'number';
      input.min = '1';
      input.max = String(totalPages);
      input.value = String(statePage);
      input.disabled = disabled;

      function commitInput() {
        setPage(input.value);
      }

      input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          commitInput();
          input.blur();
        }
      });
      input.addEventListener('blur', commitInput);

      const suffix = document.createElement('span');
      suffix.className = 'nn-pagination__jump-text';
      suffix.textContent = '页';

      jump.appendChild(prefix);
      jump.appendChild(input);
      jump.appendChild(suffix);
    }
  }

  function render() {
    totalEl.textContent = showTotal ? `共 ${totalPages} 页` : '';
    totalEl.style.display = showTotal ? 'inline-flex' : 'none';
    renderPages();
    renderJump();
  }

  document.addEventListener('click', function(event) {
    if (!root.contains(event.target) && sizeMenuOpen) {
      sizeMenuOpen = false;
      render();
    }
  });

  render();
  return root;
}

if (typeof window !== 'undefined') {
  window.injectPaginationStyles = injectPaginationStyles;
  window.createPagination = createPagination;
}
