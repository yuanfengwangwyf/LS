const AcceleratorSteamAccountManagementStyles = `
  .accelerator-steam-account-management {
    display: flex;
    width: 100%;
    max-width: 1200px;
    min-height: 100%;
    flex-direction: column;
    padding: var(--space16) var(--space24) var(--space16) var(--space16);
    box-sizing: border-box;
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .accelerator-steam-account-management__heading {
    display: flex;
    align-items: baseline;
    gap: var(--space8);
    padding-bottom: var(--space20);
  }

  .accelerator-steam-account-management__title,
  .accelerator-steam-account-management__description,
  .accelerator-steam-account-management__name,
  .accelerator-steam-account-management__steam-id {
    margin: var(--space0);
  }

  .accelerator-steam-account-management__title {
    color: var(--gray-3);
    font-size: var(--font-size-header-2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-header-2);
    white-space: nowrap;
  }

  .accelerator-steam-account-management__description {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-steam-account-management__list {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
  }

  .accelerator-steam-account-management__row {
    display: flex;
    min-height: 84px;
    align-items: center;
    justify-content: space-between;
    padding: var(--space16);
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
  }

  .accelerator-steam-account-management__row.is-current {
    border-color: var(--gray-8);
    background: var(--gray-9);
  }

  .accelerator-steam-account-management__identity {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
  }

  .accelerator-steam-account-management__copy {
    display: flex;
    width: 425px;
    min-width: 0;
    flex-direction: column;
    gap: var(--space4);
  }

  .accelerator-steam-account-management__name,
  .accelerator-steam-account-management__steam-id {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-steam-account-management__name {
    color: var(--gray-4);
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-header-3);
  }

  .accelerator-steam-account-management__steam-id {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-steam-account-management__actions {
    display: flex;
    align-items: center;
    gap: var(--space8);
  }

  .accelerator-steam-account-management__switch.nn-btn {
    min-width: 120px;
  }

  .accelerator-steam-account-management__unbind.nn-btn {
    min-width: 96px;
  }

  .accelerator-steam-account-management__add-row {
    display: flex;
    min-height: 72px;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    transition: background-color 0.16s ease;
  }

  .accelerator-steam-account-management__add-row:hover {
    background: var(--gray-9);
  }

  .accelerator-steam-account-management__add.nn-btn {
    width: 200px;
    background: transparent;
  }

  .accelerator-steam-account-management__add.nn-btn:hover,
  .accelerator-steam-account-management__add.nn-btn:active {
    background: transparent;
  }
`;

function injectAcceleratorSteamAccountManagementStyles() {
  if (document.getElementById('accelerator-steam-account-management-styles')) return;
  const style = document.createElement('style');
  style.id = 'accelerator-steam-account-management-styles';
  style.textContent = AcceleratorSteamAccountManagementStyles;
  document.head.appendChild(style);
}

function createAcceleratorSteamAccountManagement(options = {}) {
  if (typeof window.createButton !== 'function') throw new Error('Steam account management requires createButton.');
  if (typeof window.createAvatar !== 'function') throw new Error('Steam account management requires createAvatar.');
  injectAcceleratorSteamAccountManagementStyles();

  const maxAccounts = Math.max(1, Number(options.maxAccounts) || 3);
  const accounts = (Array.isArray(options.accounts) ? options.accounts : []).slice(0, maxAccounts);
  let activeSteamId = options.activeSteamId || (accounts[0] && accounts[0].steamId);
  const accountRows = [];
  const root = document.createElement('section');
  root.className = 'accelerator-steam-account-management';
  root.setAttribute('aria-label', 'Steam账号管理');

  const heading = document.createElement('div');
  heading.className = 'accelerator-steam-account-management__heading';
  const title = document.createElement('h2');
  title.className = 'accelerator-steam-account-management__title';
  title.textContent = 'Steam账号管理';
  const description = document.createElement('p');
  description.className = 'accelerator-steam-account-management__description';
  description.textContent = '最多可绑定 3 个 Steam 账号，切换后【首页】会展示对应账号的数据';
  heading.appendChild(title);
  heading.appendChild(description);

  const list = document.createElement('div');
  list.className = 'accelerator-steam-account-management__list';
  accounts.forEach(function(account) {
    const isCurrent = account.steamId === activeSteamId;
    const row = document.createElement('article');
    row.className = 'accelerator-steam-account-management__row' + (isCurrent ? ' is-current' : '');
    row.dataset.steamId = account.steamId;

    const identity = document.createElement('div');
    identity.className = 'accelerator-steam-account-management__identity';
    identity.appendChild(window.createAvatar({
      src: account.avatarSrc,
      text: account.userName,
      size: 48
    }));
    const copy = document.createElement('div');
    copy.className = 'accelerator-steam-account-management__copy';
    const name = document.createElement('h3');
    name.className = 'accelerator-steam-account-management__name';
    name.textContent = account.userName;
    const steamId = document.createElement('p');
    steamId.className = 'accelerator-steam-account-management__steam-id';
    steamId.textContent = 'Steam ID: ' + account.steamId;
    copy.appendChild(name);
    copy.appendChild(steamId);
    identity.appendChild(copy);

    const actions = document.createElement('div');
    actions.className = 'accelerator-steam-account-management__actions';
    const switchButton = window.createButton({
      text: isCurrent ? '当前账号' : '切换账号',
      variant: 'system',
      level: 'secondary',
      size: 'large',
      disabled: isCurrent,
      icon: isCurrent
        ? '<i class="nnicon nicon-a-check-linewancheng-xianxing" aria-hidden="true"></i>'
        : '<i class="nnicon nicon-a-Switchvertical-lineqiehuanshuxiang-xianxing-copy" aria-hidden="true"></i>',
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x10)',
      className: 'accelerator-steam-account-management__switch',
      onClick: function(event) {
        if (account.steamId !== activeSteamId && typeof options.onSwitch === 'function') options.onSwitch(account, event, root);
      }
    });
    actions.appendChild(switchButton);
    accountRows.push({ account: account, row: row, button: switchButton });
    actions.appendChild(window.createButton({
      text: '解绑',
      variant: 'warning',
      level: 'tertiary',
      size: 'large',
      className: 'accelerator-steam-account-management__unbind',
      onClick: function(event) {
        if (typeof options.onUnbind === 'function') options.onUnbind(account, event, root);
      }
    }));
    row.appendChild(identity);
    row.appendChild(actions);
    list.appendChild(row);
  });

  if (accounts.length < maxAccounts) {
    const addRow = document.createElement('div');
    addRow.className = 'accelerator-steam-account-management__add-row';
    addRow.appendChild(window.createButton({
      text: '添加账号',
      variant: 'system',
      level: 'tertiary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-add-linetianjia-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x10)',
      className: 'accelerator-steam-account-management__add',
      onClick: function(event) {
        if (typeof options.onAdd === 'function') options.onAdd(event, root);
      }
    }));
    list.appendChild(addRow);
  }

  root.appendChild(heading);
  root.appendChild(list);
  /** Update selection in place; preserve avatars, focus, scroll and row geometry. */
  root.setActiveSteamId = function(steamId) {
    if (!accounts.some(function(account) { return account.steamId === steamId; })) return;
    activeSteamId = steamId;
    accountRows.forEach(function(entry) {
      const current = entry.account.steamId === activeSteamId;
      entry.row.classList.toggle('is-current', current);
      entry.button.disabled = current;
      entry.button.querySelector('.nn-btn-text').textContent = current ? '当前账号' : '切换账号';
      entry.button.querySelector('.nn-btn-icon .nnicon').className = 'nnicon ' + (current
        ? 'nicon-a-check-linewancheng-xianxing'
        : 'nicon-a-Switchvertical-lineqiehuanshuxiang-xianxing-copy');
    });
  };
  return root;
}

window.createAcceleratorSteamAccountManagement = createAcceleratorSteamAccountManagement;
