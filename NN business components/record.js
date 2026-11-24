const RecordStyles = `
  .nn-record-power-profile {
    --nn-record-rank-rgb: 177, 58, 96;
    --nn-record-surface-rgb: 255, 255, 255;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 280px;
    min-width: 280px;
    max-width: 320px;
    height: 224px;
    padding: var(--space12) var(--space12) var(--space16);
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
    color: var(--gray-4);
    font-family: var(--font-family-main);
  }

  .nn-record-power-profile::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    box-shadow: var(--shadow-stroke-inset-subtle);
    background:
      linear-gradient(180deg, rgba(var(--nn-record-surface-rgb), 0) 0%, var(--gray-1) 60%),
      linear-gradient(180deg, rgba(var(--nn-record-rank-rgb), 0.2) 0%, rgba(var(--nn-record-rank-rgb), 0) 73.213%);
    pointer-events: none;
  }

  .nn-record-power-profile > * {
    position: relative;
    z-index: 1;
  }

  .nn-record-power-profile--rank-lv-1 { --nn-record-rank-rgb: 96, 96, 96; }
  .nn-record-power-profile--rank-lv-2 { --nn-record-rank-rgb: 122, 98, 88; }
  .nn-record-power-profile--rank-lv-3 { --nn-record-rank-rgb: 87, 97, 132; }
  .nn-record-power-profile--rank-lv-4 { --nn-record-rank-rgb: 119, 102, 65; }
  .nn-record-power-profile--rank-lv-5 { --nn-record-rank-rgb: 95, 128, 126; }
  .nn-record-power-profile--rank-lv-6 { --nn-record-rank-rgb: 28, 137, 122; }
  .nn-record-power-profile--rank-lv-7 { --nn-record-rank-rgb: 25, 80, 118; }
  .nn-record-power-profile--rank-lv-8 { --nn-record-rank-rgb: 94, 68, 131; }
  .nn-record-power-profile--rank-lv-9 { --nn-record-rank-rgb: 120, 58, 59; }
  .nn-record-power-profile--rank-lv-10 { --nn-record-rank-rgb: 177, 58, 96; }

  .dark-mode .nn-record-power-profile {
    --nn-record-surface-rgb: 16, 16, 19;
  }

  .dark-mode .nn-record-power-profile--rank-lv-1 { --nn-record-rank-rgb: 161, 159, 159; }
  .dark-mode .nn-record-power-profile--rank-lv-2 { --nn-record-rank-rgb: 157, 127, 114; }
  .dark-mode .nn-record-power-profile--rank-lv-3 { --nn-record-rank-rgb: 118, 128, 163; }
  .dark-mode .nn-record-power-profile--rank-lv-4 { --nn-record-rank-rgb: 144, 126, 87; }
  .dark-mode .nn-record-power-profile--rank-lv-5 { --nn-record-rank-rgb: 121, 167, 159; }
  .dark-mode .nn-record-power-profile--rank-lv-6 { --nn-record-rank-rgb: 45, 165, 149; }
  .dark-mode .nn-record-power-profile--rank-lv-7 { --nn-record-rank-rgb: 63, 137, 189; }
  .dark-mode .nn-record-power-profile--rank-lv-8 { --nn-record-rank-rgb: 153, 114, 209; }
  .dark-mode .nn-record-power-profile--rank-lv-9 { --nn-record-rank-rgb: 175, 85, 87; }
  .dark-mode .nn-record-power-profile--rank-lv-10 { --nn-record-rank-rgb: 233, 68, 120; }

  .nn-record-power-profile__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
  }

  .nn-record-power-profile__identity {
    display: flex;
    align-items: center;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-record-power-profile__player {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-record-power-profile__name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    font-size: 16px;
    font-weight: var(--font-weight-semibold);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-record-power-profile__refresh {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    flex: 0 0 auto;
    border: 0;
    padding: var(--space0);
    background: transparent;
    color: var(--gray-6);
    font: inherit;
    cursor: pointer;
  }

  .nn-record-power-profile__refresh-text,
  .nn-record-power-profile__rank-text {
    color: currentColor;
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-record-power-profile__rank-link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
    border: 0;
    padding: var(--space0);
    background: transparent;
    color: var(--gray-6);
    font: inherit;
    cursor: pointer;
  }

  .nn-record-power-profile__refresh:hover,
  .nn-record-power-profile__rank-link:hover {
    color: var(--gray-4);
  }

  .nn-record-power-profile__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: currentColor;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-record-power-profile__icon--dropdown {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    color: var(--gray-5);
  }

  .nn-record-power-profile__icon::before {
    color: currentColor;
  }

  .nn-record-power-profile__refresh-icon {
    transform-origin: 50% 50%;
  }

  .nn-record-power-profile__refresh.is-refreshing {
    pointer-events: none;
  }

  .nn-record-power-profile__refresh.is-refreshing .nn-record-power-profile__refresh-icon {
    animation: nn-record-refresh-spin 0.7s linear;
  }

  @keyframes nn-record-refresh-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .nn-record-power-profile__player .nn-record-power-profile__icon,
  .nn-record-power-profile__player .nn-record-power-profile__icon::before,
  .nn-record-power-profile__select-icon,
  .nn-record-power-profile__select-icon::before,
  .nn-record-power-profile__dropdown .nn-dropdown-arrow,
  .nn-record-power-profile__dropdown .nn-dropdown-arrow::before {
    color: var(--gray-5);
  }

  .nn-record-power-profile__filters {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    min-width: 0;
    height: 32px;
  }

  .nn-record-power-profile__select {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    height: 32px;
    flex: 0 0 auto;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    box-sizing: border-box;
    color: var(--gray-3);
    cursor: pointer;
  }

  .nn-record-power-profile__select:hover {
    background: var(--gray-8);
  }

  .nn-record-power-profile__select--season {
    width: auto;
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-record-power-profile__select--mode {
    width: 70px;
  }

  .nn-record-power-profile__select--perspective {
    width: 70px;
  }

  .nn-record-power-profile__select-text {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    padding-left: var(--space8);
    color: var(--gray-3);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-record-power-profile__select--mode .nn-record-power-profile__select-text,
  .nn-record-power-profile__select--perspective .nn-record-power-profile__select-text {
    padding-left: var(--space6);
  }

  .nn-record-power-profile__select-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x14);
    height: calc(var(--icon-size-x14) + var(--space2));
    flex: 0 0 auto;
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .nn-record-power-profile__dropdown {
    position: relative;
    z-index: 1;
    flex: 0 0 auto;
  }

  .nn-record-power-profile__dropdown.nn-dropdown-open {
    z-index: 4;
  }

  .nn-record-power-profile__dropdown.nn-record-power-profile__dropdown--season.nn-dropdown {
    width: auto;
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-record-power-profile__dropdown.nn-record-power-profile__dropdown--mode.nn-dropdown {
    width: 70px;
  }

  .nn-record-power-profile__dropdown.nn-record-power-profile__dropdown--perspective.nn-dropdown {
    width: 70px;
  }

  .nn-record-power-profile__dropdown.nn-dropdown {
    gap: var(--space0);
  }

  .nn-record-power-profile__dropdown .nn-dropdown-trigger {
    width: 100%;
    min-height: 32px;
    height: 32px;
    border-color: var(--gray-8);
    background: var(--gray-9);
  }

  .nn-record-power-profile__dropdown .nn-dropdown-trigger:hover {
    background: var(--gray-8);
  }

  .nn-record-power-profile__dropdown.nn-dropdown .nn-dropdown-contents {
    gap: var(--space6);
    height: 30px;
    min-height: 30px;
  }

  .nn-record-power-profile__dropdown.nn-dropdown .nn-dropdown-text-stack {
    padding-left: var(--space8);
  }

  .nn-record-power-profile__dropdown--season.nn-dropdown .nn-dropdown-text-stack {
    flex: 1 1 auto;
  }

  .nn-record-power-profile__dropdown--mode.nn-dropdown .nn-dropdown-text-stack,
  .nn-record-power-profile__dropdown--perspective.nn-dropdown .nn-dropdown-text-stack {
    padding-left: var(--space6);
  }

  .nn-record-power-profile__dropdown .nn-dropdown-text {
    min-height: 30px;
    padding: var(--space6) var(--space0);
  }

  .nn-record-power-profile__dropdown--season .nn-dropdown-text {
    flex: 1 1 auto;
  }

  .nn-record-power-profile__dropdown .nn-dropdown-value {
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-record-power-profile__dropdown.nn-dropdown .nn-dropdown-icon-end {
    width: var(--icon-size-x14);
    min-width: var(--icon-size-x14);
    padding: var(--space6) var(--space6) var(--space6) var(--space0);
  }

  .nn-record-power-profile__dropdown .nn-dropdown-arrow {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  .nn-record-power-profile__body {
    display: grid;
    grid-template-columns: 96px clamp(20px, calc(32.5% - 59.95px), 33px) minmax(132px, 1fr);
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    padding: var(--space4) var(--space0) var(--space0) var(--space8);
    box-sizing: border-box;
  }

  .nn-record-power-profile__badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space10);
    width: 96px;
    height: 110px;
    flex: 0 0 auto;
  }

  .nn-record-power-profile__badge-img {
    display: block;
    width: 96px;
    height: 70px;
    object-fit: contain;
  }

  .nn-record-power-profile__power-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 96px;
    height: 74px;
    box-sizing: border-box;
    padding: var(--space12) var(--space8) var(--space8);
    background: url('../image/Community/record-power-bg-light.png') center bottom / 88px 62px no-repeat;
  }

  .dark-mode .nn-record-power-profile__power-score {
    background-image: url('../image/Community/record-power-bg-dark.png');
  }

  .nn-record-power-profile__power-label {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    color: var(--gray-6);
    font-size: var(--font-size-badge);
    line-height: var(--line-height-caption);
  }

  .nn-record-power-profile__power-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: inherit;
    font-size: var(--icon-size-x6);
    cursor: help;
  }

  .nn-record-power-profile__power-value {
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-header-1);
    font-weight: var(--font-weight-bold);
    line-height: 1;
  }

  .nn-record-power-profile__power-info .nnicon {
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-record-power-profile__national-rank {
    color: var(--gray-3);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-record-power-profile__national-rank strong {
    color: var(--Record-Power-Rank);
    font-weight: var(--font-weight-semibold);
  }

  .nn-record-power-profile__stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 55px;
    min-width: 132px;
    max-width: 168px;
    width: 100%;
    height: 110px;
    grid-column: 3;
  }

  .nn-record-power-profile__stat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    padding: var(--space10) var(--space16) var(--space2) var(--space10);
    box-sizing: border-box;
    text-align: left;
  }

  .nn-record-power-profile__stat-label {
    color: var(--gray-6);
    font-size: 11px;
    font-weight: var(--font-weight-normal);
    line-height: 15px;
    white-space: nowrap;
  }

  .nn-record-power-profile__stat-value {
    color: var(--gray-4);
    font-family: var(--font-family-din);
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    white-space: nowrap;
  }

  .nn-record-power-profile-unbound.nn-empty--popup {
    position: relative;
    width: 280px;
    height: 224px;
    padding: var(--space0);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
  }

  .nn-record-power-profile-unbound__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    height: 210px;
    margin: var(--space0) auto;
    gap: var(--space10);
    box-sizing: border-box;
  }

  .nn-record-power-profile-unbound.nn-empty--popup .nn-empty__image-wrap {
    width: 182.875px;
    height: 110px;
  }

  .nn-record-power-profile-unbound.nn-empty--popup .nn-empty__actions {
    width: 116px;
    margin-top: var(--space0);
  }

  .nn-record-power-profile-unbound.nn-empty--popup .nn-empty__actions--single {
    padding: var(--space0);
  }

  .nn-record-power-profile-unbound.nn-empty--popup .nn-empty__actions .nn-btn {
    width: 116px;
    min-width: 116px;
  }

  .nn-record-power-profile-unbound.nn-empty--popup .nn-empty__description {
    margin-bottom: var(--space0);
  }

  .nn-record-game-id {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    width: 208px;
    height: auto;
    min-width: 0;
    overflow: hidden;
    box-sizing: border-box;
    color: var(--gray-4);
    font-family: var(--font-family-main);
  }

  .nn-record-game-id.is-expanded {
    gap: var(--space12);
    height: 180px;
    justify-content: flex-end;
  }

  .nn-record-game-id__title-row {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    min-height: 24px;
    padding: var(--space0) var(--space0) var(--space4) var(--space2);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
  }

  .nn-record-game-id__title-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    height: 20px;
  }

  .nn-record-game-id__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: var(--space2);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    box-sizing: border-box;
    color: var(--gray-5);
    cursor: pointer;
  }

  .nn-record-game-id__toggle:hover {
    color: var(--gray-3);
    background: var(--gray-10);
  }

  .nn-record-game-id__toggle .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-record-game-id__flyout {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    min-width: 0;
    flex: 0 0 auto;
  }

  .nn-record-game-id__compact {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
  }

  .nn-record-game-id__row {
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    min-width: 0;
    height: 24px;
    padding: var(--space0) var(--space2);
    flex: 0 0 auto;
    box-sizing: border-box;
  }

  .nn-record-game-id__row--list {
    padding: var(--space0) var(--space2);
  }

  .nn-record-game-id__row--list:hover .nn-record-game-id__name {
    font-weight: var(--font-weight-semibold);
  }

  .nn-record-game-id__row--list:hover .nn-record-game-id__hover-action,
  .nn-record-game-id__row--submitted:hover .nn-record-game-id__hover-action {
    display: inline-flex;
  }

  .nn-record-game-id__row--placeholder {
    cursor: pointer;
  }

  .nn-record-game-id__logo {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    overflow: hidden;
    border-radius: 3px;
    object-fit: cover;
  }

  .nn-record-game-id__logo-stack {
    position: relative;
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    overflow: hidden;
    border-radius: 3px;
  }

  .nn-record-game-id__logo-stack .nn-record-game-id__logo {
    position: absolute;
    inset: 0;
  }

  .nn-record-game-id__text-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space2);
    height: 20px;
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-record-game-id__row--submitted .nn-record-game-id__text-wrap {
    gap: var(--space4);
  }

  .nn-record-game-id__row--editing .nn-record-game-id__text-wrap::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: var(--gray-3);
    transform-origin: left center;
    animation: nn-record-game-id-underline-grow 180ms ease-out both;
  }

  .nn-record-game-id__row--placeholder:not(.nn-record-game-id__row--editing) .nn-record-game-id__text-wrap::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 64%;
    height: 1px;
    background: var(--gray-6);
    transform-origin: left center;
    transition: background-color 160ms ease;
  }

  .nn-record-game-id__row--submitted .nn-record-game-id__text-wrap::after {
    display: none;
  }

  .nn-record-game-id__row--placeholder:not(.nn-record-game-id__row--editing):hover .nn-record-game-id__text-wrap::after {
    background: var(--gray-4);
  }

  .nn-record-game-id__row--editing.is-leaving .nn-record-game-id__text-wrap::after {
    animation: nn-record-game-id-underline-shrink 160ms ease-in both;
  }

  @keyframes nn-record-game-id-underline-grow {
    from {
      transform: scaleX(0.64);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes nn-record-game-id-underline-shrink {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0.64);
    }
  }

  .nn-record-game-id__name {
    display: block;
    height: 20px;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-record-game-id__name--placeholder {
    color: var(--gray-6);
  }

  .nn-record-game-id__input-field {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    min-width: 0;
    height: 20px;
    margin: var(--space0);
    padding: var(--space0);
    border: 0;
    outline: 0;
    background: transparent;
    appearance: none;
    -webkit-appearance: none;
    color: var(--gray-3);
    caret-color: var(--gray-3);
    font: inherit;
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-record-game-id__input-field::placeholder {
    color: var(--gray-6);
    opacity: 1;
  }

  .nn-record-game-id__row--placeholder:hover .nn-record-game-id__name--placeholder {
    color: var(--gray-4);
  }

  .nn-record-game-id__name--current {
    font-weight: var(--font-weight-semibold);
  }

  .nn-record-game-id__button.nn-btn {
    width: 56px;
    min-width: 56px;
    min-height: 24px;
    height: 24px;
    flex: 0 0 56px;
    padding: var(--space4) var(--space8);
  }

  .nn-record-game-id__button--wide.nn-btn {
    width: 64px;
    min-width: 64px;
    flex-basis: 64px;
  }

  .nn-record-game-id__verify-button.nn-btn {
    width: auto;
    min-width: 52px;
    height: 24px;
    min-height: 24px;
    flex: 0 0 auto;
    padding: var(--space4) var(--space8);
  }

  .nn-record-game-id__hover-action.nn-btn {
    display: none;
  }

  .nn-record-game-id__settings {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
    padding: var(--space10) var(--space4) var(--space10) var(--space2);
    box-sizing: border-box;
  }

  .nn-record-game-id__settings-title {
    display: flex;
    align-items: center;
    gap: var(--space6);
    min-width: 0;
    flex: 0 0 auto;
  }

  .nn-record-game-id__settings-title .nn-checkbox {
    gap: var(--space6);
  }

  .nn-record-game-id__settings-title .nn-checkbox__label {
    color: var(--gray-3);
    font-weight: var(--font-weight-normal);
  }

  .nn-record-game-id__settings-title .nn-checkbox.is-checked .nn-checkbox__mark {
    border-color: var(--Esports-Blue-LD);
    background: var(--Esports-Blue-LD);
  }

  .nn-record-game-id__settings-title .nn-checkbox.is-checked .nn-checkbox__icon {
    color: var(--Neutral-0);
  }

  .nn-record-game-id__settings-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-record-game-id__list {
    display: flex;
    flex-direction: column;
    gap: var(--space12);
    width: 100%;
    height: 96px;
    min-width: 0;
    padding: var(--space0);
    overflow: hidden;
    box-sizing: border-box;
  }

  .nn-record-game-id__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: var(--space4);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    cursor: pointer;
  }

  .nn-record-game-id__close:hover {
    color: var(--gray-3);
    background: var(--gray-10);
  }

  .nn-record-game-id__close .nnicon {
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }
`;

function injectRecordStyles() {
  if (document.getElementById('nn-record-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-record-styles';
  style.textContent = RecordStyles;
  document.head.appendChild(style);
}

function createRecordDropdown(options = {}) {
  const {
    text = '第25赛季',
    widthClass = 'nn-record-power-profile__select--season',
    dropdownClass = 'nn-record-power-profile__dropdown--season'
  } = options;

  if (typeof window !== 'undefined' && typeof window.createDropdownMenu === 'function') {
    return window.createDropdownMenu({
      appearance: 'filled',
      size: 'medium',
      value: text,
      items: [{ label: text, value: text }],
      clearable: false,
      className: `nn-record-power-profile__dropdown ${dropdownClass}`
    });
  }

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = `nn-record-power-profile__select ${widthClass}`;
  trigger.innerHTML = `
    <span class="nn-record-power-profile__select-text">${text}</span>
    <i class="nn-record-power-profile__select-icon nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>
  `;
  return trigger;
}

function createRecordStat(options = {}) {
  const { label = 'K/D值', value = '20' } = options;
  const stat = document.createElement('span');
  stat.className = 'nn-record-power-profile__stat';
  stat.innerHTML = `
    <span class="nn-record-power-profile__stat-label">${label}</span>
    <span class="nn-record-power-profile__stat-value">${value}</span>
  `;
  return stat;
}

const RecordRefreshStats = [
  [
    { label: 'K/D值', value: '18' },
    { label: '赛季场次', value: '126' },
    { label: '吃鸡数', value: '59' },
    { label: '击杀数', value: '1588' }
  ],
  [
    { label: 'K/D值', value: '21' },
    { label: '赛季场次', value: '131' },
    { label: '吃鸡数', value: '62' },
    { label: '击杀数', value: '1640' }
  ],
  [
    { label: 'K/D值', value: '20' },
    { label: '赛季场次', value: '123' },
    { label: '吃鸡数', value: '58' },
    { label: '击杀数', value: '1542' }
  ]
];

function updateRecordStats(card, stats) {
  const statNodes = card.querySelectorAll('.nn-record-power-profile__stat');
  statNodes.forEach(function(statNode, index) {
    const stat = stats[index];
    if (!stat) return;
    const labelNode = statNode.querySelector('.nn-record-power-profile__stat-label');
    const valueNode = statNode.querySelector('.nn-record-power-profile__stat-value');
    if (labelNode) labelNode.textContent = stat.label;
    if (valueNode) valueNode.textContent = stat.value;
  });
}

function bindRecordRefresh(card) {
  const refreshButton = card.querySelector('.nn-record-power-profile__refresh');
  if (!refreshButton) return;

  refreshButton.addEventListener('click', function() {
    if (refreshButton.classList.contains('is-refreshing')) return;
    const nextIndex = Number(card.dataset.refreshIndex || 0) % RecordRefreshStats.length;
    card.dataset.refreshIndex = String(nextIndex + 1);

    refreshButton.classList.add('is-refreshing');
    refreshButton.setAttribute('aria-busy', 'true');

    window.setTimeout(function() {
      updateRecordStats(card, RecordRefreshStats[nextIndex]);
      refreshButton.classList.remove('is-refreshing');
      refreshButton.removeAttribute('aria-busy');
    }, 700);
  });
}

function createRecordRankLabel(options = {}) {
  const {
    rankText = '生存者',
    rankLevel = 10,
    rankSize = 'large'
  } = options;

  if (typeof window !== 'undefined' && typeof window.createEquityRank === 'function') {
    return window.createEquityRank({
      lv: rankLevel,
      size: rankSize,
      text: rankText,
      className: 'nn-record-power-profile__rank-label'
    });
  }

  const label = document.createElement('span');
  label.className = 'nn-record-power-profile__rank-label';
  label.textContent = rankText;
  return label;
}

function normalizeRecordRankLevel(level) {
  const numericLevel = Number(level);
  if (!Number.isFinite(numericLevel)) return 10;
  return Math.min(10, Math.max(1, Math.round(numericLevel)));
}

function createRecordPowerProfile(options = {}) {
  injectRecordStyles();

  const {
    playerName = 'Mahail',
    summary = 'power',
    powerValue = 5923,
    nationalRank = 200,
    powerDescription = '战力值由赛季表现综合计算',
    rankText = '生存者',
    rankLevel = 10,
    rankSize = 'large',
    rankImageSrc = '../image/pubg rank/生存者.png',
    season = '第25赛季',
    mode = '竞技',
    perspective = 'TPP',
    stats = [
      { label: 'K/D值', value: '20' },
      { label: '赛季场次', value: '123' },
      { label: '吃鸡数', value: '58' },
      { label: '击杀数', value: '1542' }
    ],
    rankLinkText = '我的战绩'
  } = options;

  const normalizedRankLevel = normalizeRecordRankLevel(rankLevel);
  const card = document.createElement('article');
  card.className = `nn-record-power-profile nn-record-power-profile--rank-lv-${normalizedRankLevel}`;

  const top = document.createElement('div');
  top.className = 'nn-record-power-profile__top';
  top.innerHTML = `
    <div class="nn-record-power-profile__identity">
      <span class="nn-record-power-profile__player">
        <span class="nn-record-power-profile__name">${playerName}</span>
        <i class="nn-record-power-profile__icon nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>
      </span>
      <button class="nn-record-power-profile__refresh" type="button">
        <i class="nn-record-power-profile__icon nn-record-power-profile__refresh-icon nnicon nicon-a-refresh-fillshuaxin-xianxing"></i>
        <span class="nn-record-power-profile__refresh-text">刷新</span>
      </button>
    </div>
    <button class="nn-record-power-profile__rank-link" type="button">
      <span class="nn-record-power-profile__rank-text">${rankLinkText}</span>
      <i class="nn-record-power-profile__icon nnicon nicon-a-Arrowright-linejiantouyou-xianxing"></i>
    </button>
  `;
  card.appendChild(top);

  const filters = document.createElement('div');
  filters.className = 'nn-record-power-profile__filters';
  filters.appendChild(createRecordDropdown({
    text: season,
    widthClass: 'nn-record-power-profile__select--season',
    dropdownClass: 'nn-record-power-profile__dropdown--season'
  }));
  filters.appendChild(createRecordDropdown({
    text: mode,
    widthClass: 'nn-record-power-profile__select--mode',
    dropdownClass: 'nn-record-power-profile__dropdown--mode'
  }));
  filters.appendChild(createRecordDropdown({
    text: perspective,
    widthClass: 'nn-record-power-profile__select--perspective',
    dropdownClass: 'nn-record-power-profile__dropdown--perspective'
  }));
  card.appendChild(filters);

  const body = document.createElement('div');
  body.className = 'nn-record-power-profile__body';

  const badge = document.createElement('div');
  badge.className = 'nn-record-power-profile__badge';
  if (summary === 'rank') {
    const badgeImage = document.createElement('img');
    badgeImage.className = 'nn-record-power-profile__badge-img';
    badgeImage.src = rankImageSrc;
    badgeImage.alt = rankText;
    badge.appendChild(badgeImage);
    badge.appendChild(createRecordRankLabel({ rankText, rankLevel: normalizedRankLevel, rankSize }));
  } else {
    const score = document.createElement('div');
    score.className = 'nn-record-power-profile__power-score';
    const label = document.createElement('span');
    label.className = 'nn-record-power-profile__power-label';
    label.textContent = '战力值';
    const info = document.createElement('button');
    info.type = 'button';
    info.className = 'nn-record-power-profile__power-info';
    info.setAttribute('aria-label', '战力值说明');
    info.innerHTML = '<i class="nnicon nicon-a-query-lineyiwen-xianxing" aria-hidden="true"></i>';
    if (typeof window.createTooltip === 'function') {
      label.appendChild(window.createTooltip({ content: powerDescription, direction: 'top', trigger: info }));
    } else {
      info.title = powerDescription;
      label.appendChild(info);
    }
    const value = document.createElement('strong');
    value.className = 'nn-record-power-profile__power-value';
    value.textContent = String(powerValue);
    score.append(label, value);
    const ranking = document.createElement('span');
    ranking.className = 'nn-record-power-profile__national-rank';
    if (nationalRank === null) {
      ranking.textContent = '未上榜';
    } else {
      ranking.textContent = '全国排名第';
      const rankValue = document.createElement('strong');
      rankValue.textContent = String(nationalRank);
      ranking.appendChild(rankValue);
    }
    badge.append(score, ranking);
  }
  body.appendChild(badge);

  const statsWrap = document.createElement('div');
  statsWrap.className = 'nn-record-power-profile__stats';
  stats.forEach(function(stat) {
    statsWrap.appendChild(createRecordStat(stat));
  });
  body.appendChild(statsWrap);
  card.appendChild(body);
  bindRecordRefresh(card);

  return card;
}

function createRecordPowerProfileUnbound(options = {}) {
  injectRecordStyles();

  const {
    imageSrc = '../image/Empty/类型=6,状态=通用.png',
    title = '未绑定游戏账号',
    description = '同步游玩数据，掌握对局表现',
    buttonText = '授权绑定',
    onBind = null,
    className = '',
    id = ''
  } = options;

  if (typeof window !== 'undefined' && typeof window.createEmptyPopup === 'function') {
    if (typeof window.injectButtonStyles === 'function') {
      window.injectButtonStyles();
    }
    const empty = window.createEmptyPopup({
      imageSrc,
      title,
      description,
      actions: [{
        text: buttonText,
        variant: 'system',
        level: 'primary',
        onClick: onBind
      }],
      className: ['nn-record-power-profile-unbound', className].filter(Boolean).join(' '),
      id
    });
    const content = document.createElement('div');
    content.className = 'nn-record-power-profile-unbound__content';
    while (empty.firstChild) {
      content.appendChild(empty.firstChild);
    }
    empty.appendChild(content);
    return empty;
  }

  const card = document.createElement('article');
  card.className = ['nn-record-power-profile-unbound', className].filter(Boolean).join(' ');
  if (id) card.id = id;
  card.innerHTML = `
    <img class="nn-empty__image" src="${imageSrc}" alt="${title}">
    <p>${title}</p>
    <p>${description}</p>
    <button type="button">${buttonText}</button>
  `;
  return card;
}

function createRecordActionButton(options = {}) {
  const {
    text = '保存',
    variant = 'system',
    level = 'secondary',
    className = '',
    disabled = false,
    onClick = null
  } = options;

  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton({
      text,
      variant,
      level,
      size: 'small',
      disabled,
      onClick,
      className: ['nn-record-game-id__button', className].filter(Boolean).join(' ')
    });
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = ['nn-record-game-id__button', className].filter(Boolean).join(' ');
  button.disabled = disabled;
  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }
  button.textContent = text;
  return button;
}

function createRecordGameIdLogo(game) {
  if (Array.isArray(game.logoSrcList) && game.logoSrcList.length > 1) {
    const stack = document.createElement('span');
    stack.className = 'nn-record-game-id__logo-stack';
    game.logoSrcList.slice(0, 2).forEach(function(src, index) {
      const img = document.createElement('img');
      img.className = 'nn-record-game-id__logo';
      img.src = src;
      img.alt = index === 0 ? game.name : '';
      stack.appendChild(img);
    });
    return stack;
  }

  const logo = document.createElement('img');
  logo.className = 'nn-record-game-id__logo';
  logo.src = game.logoSrc || '../image/Game logo/game1.webp';
  logo.alt = game.name || '游戏图';
  return logo;
}

function createRecordGameIdVerifiedBadge() {
  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    return window.createLabel({
      type: 'certification',
      certColor: 'orange'
    });
  }
  return null;
}

function createRecordGameIdRow(options = {}) {
  const {
    game = {},
    current = false,
    placeholder = false,
    editing = false,
    submitted = false,
    value = '',
    hoverAction = false,
    buttonText = '',
    buttonLevel = 'secondary',
    rowClass = '',
    onInputClick = null,
    onSave = null
  } = options;

  const row = document.createElement('div');
  row.className = [
    'nn-record-game-id__row',
    placeholder ? 'nn-record-game-id__row--placeholder' : '',
    editing ? 'nn-record-game-id__row--editing' : '',
    submitted ? 'nn-record-game-id__row--submitted' : '',
    rowClass
  ].filter(Boolean).join(' ');
  if (placeholder && typeof onInputClick === 'function') {
    row.addEventListener('click', onInputClick);
  }
  row.appendChild(createRecordGameIdLogo(game));

  const textWrap = document.createElement('span');
  textWrap.className = 'nn-record-game-id__text-wrap';
  if (placeholder && editing) {
    const input = document.createElement('input');
    input.className = 'nn-record-game-id__input-field';
    input.type = 'text';
    input.placeholder = '输入游戏ID';
    input.value = value;
    input.setAttribute('aria-label', '输入游戏ID');
    textWrap.appendChild(input);
  } else {
    const name = document.createElement('span');
    name.className = [
      'nn-record-game-id__name',
      placeholder && !submitted ? 'nn-record-game-id__name--placeholder' : '',
      current ? 'nn-record-game-id__name--current' : ''
    ].filter(Boolean).join(' ');
    name.textContent = placeholder ? (submitted ? value : '输入游戏ID') : (game.name || '爱笑的颜汐');
    textWrap.appendChild(name);
  }

  if (placeholder && submitted) {
    const verifyButton = createRecordActionButton({
      text: '未认证',
      variant: 'primary',
      level: 'secondary',
      className: 'nn-record-game-id__verify-button'
    });
    const setVerifyText = function(text) {
      const textEl = verifyButton.querySelector('.nn-btn-text');
      if (textEl) {
        textEl.textContent = text;
      } else {
        verifyButton.textContent = text;
      }
    };
    verifyButton.addEventListener('mouseenter', function() {
      setVerifyText('认证');
    });
    verifyButton.addEventListener('mouseleave', function() {
      setVerifyText('未认证');
    });
    textWrap.appendChild(verifyButton);
  }

  if (game.verified) {
    const verifiedBadge = createRecordGameIdVerifiedBadge();
    if (verifiedBadge) {
      textWrap.appendChild(verifiedBadge);
    }
  }

  row.appendChild(textWrap);

  if (buttonText || hoverAction) {
    const actionButton = createRecordActionButton({
      text: buttonText || '发送',
      level: buttonLevel,
      className: hoverAction ? 'nn-record-game-id__hover-action' : '',
      disabled: placeholder && !hoverAction && !submitted && !(editing && value.trim().length > 0),
      onClick: function(event) {
        if (typeof onSave === 'function') {
          onSave(event);
        }
      }
    });
    row.appendChild(actionButton);
    if (placeholder && editing) {
      const input = textWrap.querySelector('.nn-record-game-id__input-field');
      if (input) {
        input.addEventListener('input', function() {
          actionButton.disabled = input.value.trim().length === 0;
        });
      }
    }
  }

  return row;
}

function createRecordGameIdTitle(onToggle) {
  const titleRow = document.createElement('div');
  titleRow.className = 'nn-record-game-id__title-row';
  const titleInner = document.createElement('div');
  titleInner.className = 'nn-record-game-id__title-inner';
  const icon = document.createElement('button');
  icon.type = 'button';
  icon.className = 'nn-record-game-id__toggle';
  icon.setAttribute('aria-label', '向上展开游戏ID列表');
  icon.innerHTML = '<i class="nnicon nicon-a-Arrowup-linejiantoushang-xianxing"></i>';
  if (typeof onToggle === 'function') {
    icon.addEventListener('click', onToggle);
  }
  titleInner.appendChild(icon);
  titleRow.appendChild(titleInner);
  return titleRow;
}

function createRecordGameIdSettings(onClose) {
  const settings = document.createElement('div');
  settings.className = 'nn-record-game-id__settings';

  const title = document.createElement('div');
  title.className = 'nn-record-game-id__settings-title';
  if (typeof window !== 'undefined' && typeof window.createCheckbox === 'function') {
    title.appendChild(window.createCheckbox({
      text: '战绩信息',
      checked: true,
      interactive: true
    }));
  } else {
    title.innerHTML = '<span>战绩信息</span>';
  }
  settings.appendChild(title);

  const action = document.createElement('div');
  action.className = 'nn-record-game-id__settings-action';
  action.appendChild(createRecordActionButton({
    text: '添加设置',
    level: 'secondary',
    className: 'nn-record-game-id__button--wide'
  }));

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'nn-record-game-id__close';
  close.setAttribute('aria-label', '关闭战绩信息列表');
  close.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
  if (typeof onClose === 'function') {
    close.addEventListener('click', onClose);
  }
  action.appendChild(close);
  settings.appendChild(action);

  return settings;
}

function createRecordGameIdPanel(options = {}) {
  injectRecordStyles();
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectCheckboxStyles === 'function') {
    window.injectCheckboxStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectLabelStyles === 'function') {
    window.injectLabelStyles();
  }

  const {
    state = 'empty',
    inputMode = '',
    inputValue = '',
    showTitle = true,
    showSettings = true,
    games = [
      { name: '爱笑的颜汐', logoSrc: '../image/Game logo/game1.webp' },
      { name: '爱笑的天平座', logoSrc: '../image/Game logo/game2.webp' },
      { name: '英雄联盟', logoSrc: '../image/Game logo/game3.webp', verified: true },
      { name: '暗喻幻想', logoSrc: '../image/Game logo/game4.webp' },
      { name: '重要的水母', logoSrc: '../image/Game logo/game5.webp' },
      { name: '地平线：西之绝境', logoSrc: '../image/Game logo/game6.webp' },
      { name: '可达鸭', logoSrc: '../image/Game logo/game7.webp' },
      { name: '魔兽世界：地心之战', logoSrc: '../image/Game logo/game8.webp' }
    ]
  } = options;

  const panel = document.createElement('section');
  panel.className = ['nn-record-game-id', state === 'expanded' ? 'is-expanded' : ''].filter(Boolean).join(' ');
  panel.dataset.state = state;

  function getCurrentInputSnapshot() {
    const submittedRow = panel.querySelector('.nn-record-game-id__row--submitted');
    if (submittedRow) {
      const submittedName = submittedRow.querySelector('.nn-record-game-id__name');
      return {
        inputMode: 'submitted',
        inputValue: submittedName ? submittedName.textContent.trim() : ''
      };
    }

    const input = panel.querySelector('.nn-record-game-id__input-field');
    if (input) {
      return {
        inputMode: 'input',
        inputValue: input.value
      };
    }

    return {
      inputMode: '',
      inputValue: ''
    };
  }

  function switchState(nextState, extraOptions = {}) {
    const nextPanel = createRecordGameIdPanel(Object.assign({}, options, getCurrentInputSnapshot(), extraOptions, { state: nextState }));
    panel.replaceWith(nextPanel);
  }

  function openList(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    switchState('expanded');
  }

  function focusInput(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    switchState('input');
  }

  function closeList(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    switchState('empty');
  }

  function createDefaultInputRow(stayInExpanded) {
    let row = null;
    row = createRecordGameIdRow({
      game: games[0],
      placeholder: true,
      editing: false,
      buttonText: '保存',
      buttonLevel: 'secondary',
      onInputClick: stayInExpanded ? function(event) {
        focusInputInPlace(row, event, stayInExpanded);
      } : focusInput
    });
    return row;
  }

  function createSubmittedInputRow(text) {
    return createRecordGameIdRow({
      game: games[0],
      placeholder: true,
      submitted: true,
      value: text,
      buttonText: '发送',
      buttonLevel: 'secondary',
      hoverAction: true
    });
  }

  function cancelInputInPlace(row, stayInExpanded) {
    if (!row || row.classList.contains('is-leaving')) return;
    row.classList.add('is-leaving');
    setTimeout(function() {
      if (!row.isConnected) return;
      row.replaceWith(createDefaultInputRow(stayInExpanded));
    }, 160);
  }

  function focusInputInPlace(row, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!row || row.classList.contains('nn-record-game-id__row--editing')) return;
    const nextRow = createRecordGameIdRow({
      game: games[0],
      placeholder: true,
      editing: true,
      buttonText: '保存',
      buttonLevel: 'secondary',
      onSave: function(saveEvent) {
        if (saveEvent) {
          saveEvent.preventDefault();
          saveEvent.stopPropagation();
        }
        const input = nextRow.querySelector('.nn-record-game-id__input-field');
        const text = input ? input.value.trim() : '';
        if (!text) return;
        nextRow.replaceWith(createSubmittedInputRow(text));
      }
    });
    row.replaceWith(nextRow);
    setTimeout(function() {
      const input = nextRow.querySelector('.nn-record-game-id__input-field');
      if (input) {
        input.focus();
        input.setSelectionRange(0, 0);
      }

      function cancelOnOutsideClick(nextEvent) {
        if (nextRow.contains(nextEvent.target)) return;
        document.removeEventListener('pointerdown', cancelOnOutsideClick, true);
        if (!nextRow.isConnected || !nextRow.querySelector('.nn-record-game-id__input-field')) return;
        cancelInputInPlace(nextRow, true);
      }

      document.addEventListener('pointerdown', cancelOnOutsideClick, true);
    }, 0);
  }

  function appendInputRow(target, editing, stayInExpanded) {
    if (inputMode === 'submitted' && inputValue) {
      const submittedRow = createSubmittedInputRow(inputValue);
      target.appendChild(submittedRow);
      return submittedRow;
    }

    const row = editing ? createRecordGameIdRow({
      game: games[0],
      placeholder: true,
      editing: true,
      value: inputValue,
      buttonText: '保存',
      buttonLevel: 'secondary',
      onSave: function(saveEvent) {
        if (saveEvent) {
          saveEvent.preventDefault();
          saveEvent.stopPropagation();
        }
        const input = row.querySelector('.nn-record-game-id__input-field');
        const text = input ? input.value.trim() : '';
        if (!text) return;
        row.replaceWith(createSubmittedInputRow(text));
      }
    }) : createDefaultInputRow(stayInExpanded);
    target.appendChild(row);
    return row;
  }

  if (state === 'expanded') {
    const flyout = document.createElement('div');
    flyout.className = 'nn-record-game-id__flyout';
    if (showSettings) {
      flyout.appendChild(createRecordGameIdSettings(closeList));
    }
    const list = document.createElement('div');
    list.className = 'nn-record-game-id__list';
    games.slice(1).forEach(function(game) {
      list.appendChild(createRecordGameIdRow({
        game,
        rowClass: 'nn-record-game-id__row--list',
        hoverAction: true
      }));
    });
    flyout.appendChild(list);
    panel.appendChild(flyout);
    appendInputRow(panel, false, true);
    return panel;
  }

  if (state === 'input') {
    const compact = document.createElement('div');
    compact.className = 'nn-record-game-id__compact';
    if (showTitle) {
      compact.appendChild(createRecordGameIdTitle(openList));
    }
    const inputRow = appendInputRow(compact, true);
    panel.appendChild(compact);
    setTimeout(function() {
      const input = panel.querySelector('.nn-record-game-id__input-field');
      if (input) {
        input.focus();
        input.setSelectionRange(0, 0);
      }

      function cancelInputOnOutsideClick(event) {
        if (panel.contains(event.target)) return;
        if (!inputRow.isConnected || !inputRow.querySelector('.nn-record-game-id__input-field')) {
          document.removeEventListener('pointerdown', cancelInputOnOutsideClick, true);
          return;
        }
        document.removeEventListener('pointerdown', cancelInputOnOutsideClick, true);
        if (inputRow) inputRow.classList.add('is-leaving');
        setTimeout(function() {
          switchState('empty');
        }, 160);
      }

      document.addEventListener('pointerdown', cancelInputOnOutsideClick, true);
    }, 0);
    return panel;
  }

  if (showTitle) {
    panel.appendChild(createRecordGameIdTitle(openList));
  }
  appendInputRow(panel, false);
  return panel;
}

if (typeof window !== 'undefined') {
  window.injectRecordStyles = injectRecordStyles;
  window.createRecordRankLabel = createRecordRankLabel;
  window.createRecordPowerProfile = createRecordPowerProfile;
  window.createRecordPowerProfileUnbound = createRecordPowerProfileUnbound;
  window.createRecordGameIdPanel = createRecordGameIdPanel;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectRecordStyles,
    createRecordRankLabel,
    createRecordPowerProfile,
    createRecordPowerProfileUnbound,
    createRecordGameIdPanel
  };
}
