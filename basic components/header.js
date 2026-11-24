const HeaderStyles = `
  .nn-header {
    --nn-header-height: 50px;
    --nn-header-gap-1: 4px;
    --nn-header-gap-2: 6px;
    --nn-header-gap-3: 8px;
    --nn-header-gap-4: 10px;
    --nn-header-gap-5: 12px;
    --nn-header-gap-6: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 1280px;
    min-height: var(--nn-header-height);
    height: var(--nn-header-height);
    background: var(--gray-1);
    font-family: "MiSans VF", var(--font-family-main);
    color: var(--gray-3);
    overflow: hidden;
  }

  .nn-header__left,
  .nn-header__center,
  .nn-header__right {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .nn-header__left {
    gap: var(--space0);
    flex: 0 0 auto;
  }

  .nn-header__center {
    gap: var(--space16);
    flex: 1 1 auto;
    justify-content: flex-start;
    padding: var(--space0) var(--space0) var(--space0) var(--space10);
    min-width: 0;
  }

  .nn-header__right {
    gap: var(--space24);
    flex: 0 0 auto;
    justify-content: flex-end;
  }

  .nn-header__brand {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space0) var(--space16);
    height: 100%;
    color: inherit;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    order: 1;
    box-sizing: border-box;
  }

  .nn-header__brand:hover {
    color: inherit;
  }

  .nn-header__brand-logo {
    display: block;
    height: 24px;
    width: auto;
    flex-shrink: 0;
  }

  .nn-header__brand-logo--dark {
    display: none;
  }

  body.dark-mode .nn-header__brand-logo--light {
    display: none;
  }

  body.dark-mode .nn-header__brand-logo--dark {
    display: block;
  }

  .nn-header__back {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space4);
    width: 62px;
    min-width: 62px;
    height: 24px;
    color: var(--gray-7);
    font-size: 14px;
    line-height: 1;
    background: transparent;
    flex-shrink: 0;
    text-decoration: none;
    order: 2;
  }

  .nn-header__back .nnicon {
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-header__back-text {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
  }

  .nn-header__back--inactive {
    pointer-events: none;
    cursor: default;
  }

  .nn-header__back--active {
    cursor: pointer;
  }

  .nn-header__back--active:hover {
    color: var(--gray-3);
  }

  .nn-header__search {
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 200px;
    height: 30px;
    padding: var(--space0) var(--space10) var(--space0) var(--space32);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-1);
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: visible;
    isolation: isolate;
    transition: border-color 0.2s ease;
  }

  .nn-header__search-star-border {
    position: absolute;
    z-index: 0;
    pointer-events: none;
  }

  @keyframes nn-header-compass-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

  .nn-header__search-input {
    width: 100%;
    height: 20px;
    margin: var(--space0);
    padding: var(--space0);
    border: none;
    outline: none;
    background: transparent;
    color: var(--gray-3);
    font-family: "MiSans VF", var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: 330;
    letter-spacing: 0;
    caret-color: var(--gray-3);
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
  }

  .nn-header__search-input::placeholder {
    color: transparent;
    opacity: 1;
  }

  .nn-header__search-placeholder {
    position: absolute;
    left: 30px;
    right: 10px;
    top: 50%;
    height: 20px;
    overflow: hidden;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--gray-6);
    font-family: "MiSans VF", var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    font-weight: 330;
    z-index: 1;
  }

  .nn-header__search-placeholder-track {
    display: block;
    transform: translateY(0);
  }

  .nn-header__search-placeholder-item {
    height: 20px;
    white-space: nowrap;
  }

  .nn-header__search--typing .nn-header__search-placeholder,
  .nn-header__search:focus-within .nn-header__search-placeholder {
    opacity: 0;
  }

  .nn-header__search-icon {
    position: absolute;
    left: 6px;
    top: 50%;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    margin-top: calc(var(--space12) * -1);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: 1;
    pointer-events: none;
    transform-origin: center;
    animation: nn-header-compass-spin 5s cubic-bezier(0.34, 0, 0.2, 1) both;
  }

  .nn-header__search-icon img {
    display: block;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    object-fit: contain;
  }

  .nn-header__notice {
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 195px;
    height: 24px;
    padding: var(--space0) var(--space8) var(--space0) var(--space8);
    border-radius: var(--border-radius-4r);
    background: rgba(97, 114, 243, 0.10);
    color: var(--Link);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    box-sizing: border-box;
  }

  .nn-header__notice-text {
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nn-header__dot {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  .nn-header__avatar-list {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
  }

  .nn-header__avatar-list .nn-avatar-wrapper {
    flex-shrink: 0;
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  .nn-header__avatar-list .nn-avatar {
    border-radius: var(--border-radius-4r);
  }

  .nn-header__avatar-list .nn-avatar-badge {
    transform: translate(35%, -30%);
  }

  .nn-header__avatar-list .nn-avatar-wrapper:hover {
    transform: scale(1.1);
  }

  .nn-header__right > .nn-header__avatar-list {
    margin-right: calc(var(--space16) * -1);
  }

  .nn-header__icon-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    border-radius: var(--border-radius-4r);
    border: none;
    background: transparent;
    color: var(--gray-5);
    font-size: var(--icon-size-x7);
    line-height: 1;
    cursor: pointer;
    flex-shrink: 0;
  }

  .nn-header__icon-btn:hover {
    background: var(--gray-10);
    color: var(--gray-4);
  }

  .nn-header__icon-btn .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-header__icon-btn--message {
    color: var(--Esports-Blue);
    font-size: var(--icon-size-x12);
    width: auto;
    min-width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    padding: var(--space0);
    border-radius: 0;
  }

  .nn-header__icon-btn--more {
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    width: auto;
    min-width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    padding: var(--space0);
    border-radius: 0;
  }

  .nn-header__icon-btn--has-hover-icon .nn-header__icon-stack {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    transform: scaleX(-1);
  }

  .nn-header__icon-btn--has-hover-icon .nn-header__icon-default,
  .nn-header__icon-btn--has-hover-icon .nn-header__icon-hover {
    position: absolute;
    inset: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nn-header__icon-btn--has-hover-icon .nn-header__icon-hover {
    opacity: 0;
  }

  .nn-header__icon-btn--has-hover-icon:hover .nn-header__icon-default {
    opacity: 0;
  }

  .nn-header__icon-btn--has-hover-icon:hover .nn-header__icon-hover {
    opacity: 1;
  }

  .nn-header__icon-btn--message:hover {
    background: transparent;
    color: var(--Esports-Blue);
  }

  .nn-header__icon-btn--more:hover {
    background: transparent;
    color: var(--gray-5);
  }

  .nn-header__icon-btn .nn-badge {
    position: absolute;
    top: var(--space0);
    right: var(--space0);
    transform: translate(50%, -50%);
  }

  .nn-header__window {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    padding: var(--space0) var(--space16);
    box-sizing: border-box;
  }

  .nn-header__window-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: 1;
    background: transparent;
    cursor: pointer;
  }

  .nn-header__window-icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-header__window-icon:hover {
    color: var(--gray-3);
  }

  /* Default Header · Figma 44203:133648 */
  .nn-header--default {
    box-sizing: border-box;
    justify-content: flex-start;
    padding-left: 74px;
  }

  .nn-header--default .nn-header__left {
    flex: 0 0 276px;
    width: 276px;
    justify-content: space-between;
    gap: var(--space0);
  }

  .nn-header--default .nn-header__brand {
    position: relative;
    order: initial;
    width: 94px;
    height: 22px;
    padding: var(--space0);
    overflow: hidden;
  }

  .nn-header--default .nn-header__brand-logo {
    width: 94px;
    height: 22px;
    object-fit: contain;
  }

  .nn-header--default .nn-header__brand--single-logo .nn-header__brand-logo--dark {
    position: absolute;
    inset: 0;
    clip-path: inset(0 0 0 28px);
    filter: grayscale(1) brightness(0) invert(1);
    pointer-events: none;
  }

  body.dark-mode .nn-header--default .nn-header__brand--single-logo .nn-header__brand-logo--light {
    display: block;
  }

  body.dark-mode .nn-header--default .nn-header__brand--single-logo .nn-header__brand-logo--dark {
    display: block;
  }

  .nn-header--default .nn-header__back {
    order: initial;
    width: auto;
    min-width: 0;
    height: 22px;
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
  }

  .nn-header--default .nn-header__back--active:hover {
    color: var(--gray-3);
  }

  .nn-header--default .nn-header__back-text {
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
    font-weight: var(--font-weight-normal);
  }

  .nn-header--default .nn-header__center {
    flex: 1 1 auto;
    gap: var(--space24);
    padding: var(--space0) var(--space0) var(--space0) var(--nn-header-search-inline-start, var(--space24));
  }

  .nn-header--default .nn-header__search,
  .nn-header__search--default {
    width: 300px;
    height: 32px;
    padding: var(--space0) 30px var(--space0) 30px;
    border-color: var(--gray-8);
    background: var(--White-A4);
    overflow: visible;
    isolation: isolate;
  }

  .nn-header--default .nn-header__search::before,
  .nn-header__search--default::before {
    display: block;
  }

  .nn-header--default .nn-header__search::after,
  .nn-header__search--default::after {
    background: var(--White-A4);
  }

  .nn-header--default .nn-header__search-icon,
  .nn-header__search--default .nn-header__search-icon {
    left: var(--space6);
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    margin-top: calc(var(--space12) * -1);
  }

  .nn-header--default .nn-header__search-placeholder,
  .nn-header__search--default .nn-header__search-placeholder {
    left: 30px;
    right: 30px;
  }

  .nn-header__search-submit {
    position: absolute;
    right: var(--space6);
    top: 50%;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    color: var(--gray-6);
    font-size: 18px;
    line-height: 1;
    pointer-events: none;
  }

  .nn-header__search--typing .nn-header__search-submit {
    cursor: pointer;
    pointer-events: auto;
  }

  .nn-header--default .nn-header__im {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
  }

  .nn-header--default .nn-header__icon-btn--message {
    width: 28px;
    min-width: 28px;
    height: 28px;
    font-size: 28px;
  }

  .nn-header--default .nn-header__icon-btn--message .nn-badge {
    top: var(--space2);
    right: var(--space0);
    transform: translate(50%, -50%);
  }

  .nn-header--default .nn-header__avatar-list {
    gap: var(--space8);
  }

  .nn-header--default .nn-header__icon-btn--avatar-more {
    width: var(--icon-size-x12);
    min-width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    border-radius: var(--border-radius-6r);
    background: var(--gray-10);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
  }

  .nn-header--default .nn-header__icon-btn--avatar-more:hover {
    background: var(--gray-9);
    color: var(--gray-4);
  }

  .nn-header--default .nn-header__right {
    gap: var(--space24);
    margin-left: auto;
  }

  .nn-header--default .nn-header__game-report {
    width: 108px;
    min-width: 108px;
    height: 30px;
    padding-right: var(--space10);
    padding-left: var(--space10);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-header--default .nn-header__game-report .nn-btn-icon {
    margin-right: var(--space4);
  }

  .nn-header--default .nn-header__icon-btn--more {
    width: var(--icon-size-x12);
    min-width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
  }

  .nn-header-global-search-modal {
    position: absolute;
    inset: 0;
    z-index: 119;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: var(--space24);
    background: transparent;
    box-sizing: border-box;
    transition: background-color 180ms ease;
  }

  .nn-header-global-search-modal--masked {
    background: rgba(0, 0, 0, 0.45);
  }

  .nn-header-global-search-modal--page {
    position: fixed;
    z-index: 10000;
    overflow: auto;
  }

  .nn-header-global-search-modal__content {
    flex: 0 0 1280px;
    width: 1280px;
    height: 900px;
    opacity: 0;
    transform: translateY(12px) scale(0.96);
    transform-origin: center;
  }

  .nn-header-global-search-modal.is-ready .nn-header-global-search-modal__content {
    animation: nn-header-global-search-enter 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .nn-header-global-search-modal__content .nn-global-search {
    width: 1280px;
    min-width: 1280px;
    height: 900px;
    min-height: 900px;
    max-width: none;
    max-height: none;
  }

  .nn-header-global-search-modal--flush .nn-global-search {
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .nn-header-global-search-modal--flush {
    background: transparent;
  }

  .nn-header-global-search-modal.is-closing {
    background: transparent;
    pointer-events: none;
  }

  .nn-header-global-search-modal.is-closing .nn-header-global-search-modal__content {
    animation: nn-header-global-search-exit 260ms cubic-bezier(0.4, 0, 1, 1) both;
  }

  @keyframes nn-header-global-search-enter {
    0% {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes nn-header-global-search-exit {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(8px) scale(0.97);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-header-global-search-modal__content,
    .nn-header-global-search-modal.is-ready .nn-header-global-search-modal__content,
    .nn-header-global-search-modal.is-closing .nn-header-global-search-modal__content {
      opacity: 1;
      transform: none;
      animation: none;
    }
  }

  .nn-header--room-header-im {
    justify-content: flex-start;
    min-width: 970px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-im .nn-header__left,
  .nn-header--room-header-im .nn-header__center,
  .nn-header--room-header-im .nn-header__right {
    display: none;
  }

  .nn-room-header-im {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-width: 0;
    height: 32px;
    padding: var(--space4) var(--space0);
  }

  .nn-room-header-im__user {
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    flex: 0 0 auto;
    min-width: 0;
    line-height: 20px;
    white-space: nowrap;
  }

  .nn-room-header-im__name {
    color: var(--gray-3);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-room-header-im__meta {
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-room-header-im__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    flex: 0 0 auto;
  }

  .nn-room-header-im__button {
    min-width: 64px;
    min-height: 24px;
  }

  .nn-room-header-im__spacer {
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-room-header-im__icons {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space8);
    flex: 0 0 auto;
  }

  .nn-room-header-im__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    padding: var(--space2);
    border-radius: var(--border-radius-2r);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: 1;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
  }

  .nn-room-header-im__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-im__icon:hover {
    color: var(--gray-3);
  }

  .nn-header--room-header-voice {
    justify-content: flex-start;
    min-width: 642px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-voice .nn-header__left,
  .nn-header--room-header-voice .nn-header__center,
  .nn-header--room-header-voice .nn-header__right {
    display: none;
  }

  .nn-room-header-voice {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 100%;
    min-width: 0;
    height: 32px;
    padding: var(--space4) var(--space0);
  }

  .nn-room-header-voice__left {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 1 auto;
    min-width: 0;
  }

  .nn-room-header-voice__info {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 24px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-4r);
    overflow: hidden;
    flex: 0 1 auto;
    min-width: 0;
  }

  .nn-room-header-voice__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .nn-room-header-voice__title {
    max-width: 96px;
    min-width: 0;
    color: var(--gray-5);
    font-size: 16px;
    line-height: 22px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }

  .nn-room-header-voice__edit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: 1;
    flex-shrink: 0;
  }

  .nn-room-header-voice__edit .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-voice__stats {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 20px;
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    flex-shrink: 0;
  }

  .nn-room-header-voice__stats-number {
    width: 20px;
    text-align: center;
  }

  .nn-room-header-voice__stats-divider {
    width: 6px;
    text-align: center;
  }

  .nn-room-header-voice__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space0);
    flex: 0 0 auto;
  }

  .nn-room-header-voice__button {
    min-width: 64px;
    min-height: 24px;
  }

  .nn-room-header-voice__password {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }

  .nn-room-header-voice__spacer {
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-room-header-voice__right-buttons {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space4);
    flex: 0 0 auto;
  }

  .nn-room-header-voice__right-button {
    min-height: 24px;
  }

  .nn-room-header-voice__icons {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space0);
    flex: 0 0 auto;
  }

  .nn-room-header-voice__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
    line-height: 1;
    background: transparent;
    cursor: pointer;
    flex-shrink: 0;
  }

  .nn-room-header-voice__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-voice__icon:hover {
    color: var(--gray-3);
  }

  .nn-header--room-header-exclusive-room {
    justify-content: flex-start;
    min-width: 642px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-exclusive-room .nn-header__left,
  .nn-header--room-header-exclusive-room .nn-header__center,
  .nn-header--room-header-exclusive-room .nn-header__right {
    display: none;
  }

  .nn-room-header-exclusive-room {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    height: 32px;
    padding: var(--space4) var(--space0);
  }

  .nn-room-header-exclusive-room__left {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    flex: 0 1 auto;
  }

  .nn-room-header-exclusive-room__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
    line-height: 1;
    flex: 0 0 auto;
  }

  .nn-room-header-exclusive-room__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-exclusive-room__title {
    overflow: hidden;
    color: var(--gray-4);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-room-header-exclusive-room__spacer {
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-room-header-exclusive-room__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    flex: 0 0 auto;
  }

  .nn-input.nn-room-header-exclusive-room__search {
    width: 250px;
  }

  .nn-header--room-header-community-hall {
    justify-content: flex-start;
    min-width: 642px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-community-hall .nn-header__left,
  .nn-header--room-header-community-hall .nn-header__center,
  .nn-header--room-header-community-hall .nn-header__right {
    display: none;
  }

  .nn-room-header-community-hall {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-width: 0;
    height: 32px;
    padding: var(--space4) var(--space0);
  }

  .nn-room-header-community-hall__left {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-room-header-community-hall__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    color: var(--gray-3);
    font-size: var(--icon-size-x12);
    line-height: 1;
    flex-shrink: 0;
  }

  .nn-room-header-community-hall__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-community-hall__title {
    color: var(--gray-3);
    font-size: 16px;
    line-height: 22px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-room-header-community-hall__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space0);
    flex: 0 0 auto;
  }

  .nn-room-header-community-hall__button {
    min-width: 64px;
    min-height: 24px;
  }

  .nn-room-header-community-hall__notice {
    width: 260px;
    flex: 0 1 260px;
  }

  .nn-room-header-community-hall__notice-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    margin-right: var(--space4);
    font-size: var(--icon-size-x8);
    line-height: 1;
    flex: 0 0 auto;
  }

  .nn-room-header-community-hall__spacer {
    flex: 1 1 auto;
    min-width: 0;
    height: 24px;
  }

  .nn-room-header-announcement {
    position: relative;
    z-index: 0;
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    max-width: 248px;
    height: 24px;
    padding: var(--space0) var(--space8);
    border-radius: var(--border-radius-4r);
    color: var(--Link);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    box-sizing: border-box;
    flex: 0 1 auto;
    isolation: isolate;
  }

  .nn-room-header-announcement::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: inherit;
    background: var(--Link);
    content: '';
    opacity: 0.1;
  }

  .nn-room-header-announcement__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
    flex: 0 0 auto;
  }

  .nn-room-header-announcement__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-announcement__text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-room-header-announcement__dot {
    position: absolute;
    top: var(--space0);
    right: var(--space0);
    transform: translate(50%, -50%);
  }

  .nn-room-header-order-activity {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    max-width: 260px;
    height: 24px;
    padding: var(--space0) var(--space8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    box-sizing: border-box;
    flex: 0 1 auto;
  }

  .nn-room-header-order-activity__name,
  .nn-room-header-order-activity__service {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-room-header-order-activity__name {
    color: var(--gray-3);
    flex: 0 1 auto;
  }

  .nn-room-header-order-activity__text {
    white-space: nowrap;
    flex: 0 0 auto;
  }

  .nn-room-header-order-activity__service {
    color: var(--Link);
    flex: 0 1 auto;
  }

  .nn-header--room-header-under-community {
    justify-content: flex-start;
    min-width: 642px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-under-community .nn-header__left,
  .nn-header--room-header-under-community .nn-header__center,
  .nn-header--room-header-under-community .nn-header__right {
    display: none;
  }

  .nn-room-header-under-community {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-width: 0;
    height: 32px;
  }

  .nn-room-header-under-community__left {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    flex: 0 1 auto;
  }

  .nn-room-header-under-community__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 auto;
    color: var(--gray-3);
    font-size: var(--icon-size-x12);
    line-height: 1;
  }

  .nn-room-header-under-community__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-under-community__title {
    overflow: hidden;
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-room-header-under-community__spacer {
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-room-header-under-community__actions {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
  }

  .nn-room-header-under-community__button {
    min-width: 86px;
    min-height: 32px;
  }

  .nn-header--room-header-play-with {
    justify-content: flex-start;
    min-width: 882px;
    min-height: 44px;
    height: 44px;
    padding: var(--space4) var(--space0) var(--space8);
    overflow: visible;
  }

  .nn-header--room-header-play-with .nn-header__left,
  .nn-header--room-header-play-with .nn-header__center,
  .nn-header--room-header-play-with .nn-header__right {
    display: none;
  }

  .nn-room-header-play-with {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-width: 0;
    height: 32px;
  }

  .nn-room-header-play-with__left {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    flex: 0 1 auto;
  }

  .nn-room-header-play-with__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 auto;
    color: var(--gray-3);
    font-size: var(--icon-size-x12);
    line-height: 1;
  }

  .nn-room-header-play-with__icon .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-room-header-play-with__title {
    overflow: hidden;
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-room-header-play-with__spacer {
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-room-header-play-with__actions {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space10);
    flex: 0 0 auto;
  }

  .nn-room-header-play-with__button {
    min-width: 86px;
    min-height: 32px;
  }

`;

function injectHeaderStyles() {
  if (document.getElementById('nn-header-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-header-styles';
  style.textContent = HeaderStyles;
  document.head.appendChild(style);
}

function getHeaderAssetPrefix() {
  const script = document.currentScript;
  if (script && script.src) {
    return new URL('../', script.src).href;
  }
  const headerScript = Array.from(document.scripts).find(function(item) {
    return item.src && item.src.indexOf('basic%20components/header.js') !== -1;
  });
  if (headerScript && headerScript.src) {
    return new URL('../', headerScript.src).href;
  }
  return '../';
}

function loadHeaderScriptOnce(src, globalName) {
  if (globalName && typeof window[globalName] === 'function') {
    return Promise.resolve();
  }
  return new Promise(function(resolve, reject) {
    const existing = Array.from(document.scripts).find(function(script) {
      return script.src === src;
    });
    if (existing) {
      existing.addEventListener('load', function() { resolve(); }, { once: true });
      existing.addEventListener('error', reject, { once: true });
      if (!globalName || typeof window[globalName] === 'function') resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = function() { resolve(); };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function ensureHeaderGlobalSearchDependencies() {
  const prefix = getHeaderAssetPrefix();
  const dependencies = [
    ['basic%20components/button.js', 'nnButton', true],
    ['basic%20components/input.js', 'createInput', true],
    ['basic%20components/label.js', 'createLabel'],
    ['basic%20components/tabs.js', 'createTabs'],
    ['basic%20components/avatar.js', 'createAvatar', true],
    ['basic%20components/badge.js', 'createBadge'],
    ['basic%20components/scrollbar.js', 'createScrollbar'],
    ['basic%20components/tooltips.js', 'createTooltip'],
    ['basic%20components/equity.js', 'createEquity'],
    ['NN%20business%20components/card.js', 'createCommunityCard', true],
    ['NN%20business%20components/global-search.js', 'createGlobalSearch', true, '20261118-global-search-height50-content18']
  ];
  return dependencies.reduce(function(chain, item) {
    return chain.then(function() {
      const version = item[3] || '20261114-existing-assets-remap';
      return loadHeaderScriptOnce(`${prefix}${item[0]}?v=${version}`, item[1]);
    });
  }, Promise.resolve());
}

function findHeaderGlobalSearchHost(anchor) {
  if (anchor && anchor.closest) {
    const framework = anchor.closest('.community-framework');
    if (framework) return framework;
  }
  return document.body;
}

function openHeaderGlobalSearchModal(options = {}) {
  injectHeaderStyles();
  const host = findHeaderGlobalSearchHost(options.anchor || null);
  const existing = host.querySelector('.nn-header-global-search-modal');
  if (existing) {
    existing.remove();
  }

  const overlay = document.createElement('div');
  overlay.className = 'nn-header-global-search-modal';
  if (host === document.body) {
    overlay.classList.add('nn-header-global-search-modal--page');
    overlay.classList.add('nn-header-global-search-modal--masked');
  }
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Global Search 全局搜索');

  const content = document.createElement('div');
  content.className = 'nn-header-global-search-modal__content';
  overlay.appendChild(content);
  host.appendChild(overlay);
  let resizeObserver = null;
  let isWindowResizeBound = false;
  let isClosing = false;

  function syncFlushState() {
    if (host === document.body) {
      overlay.classList.remove('nn-header-global-search-modal--flush');
      overlay.classList.add('nn-header-global-search-modal--masked');
      return;
    }
    const rect = host.getBoundingClientRect();
    const shouldFlush = Math.round(rect.width) <= 1280 && Math.round(rect.height) <= 900;
    overlay.classList.toggle('nn-header-global-search-modal--flush', shouldFlush);
    overlay.classList.toggle('nn-header-global-search-modal--masked', !shouldFlush);
  }

  function closeModal() {
    if (isClosing) return;
    isClosing = true;
    overlay.classList.add('is-closing');
    document.removeEventListener('keydown', handleKeydown);
    if (resizeObserver) resizeObserver.disconnect();
    if (isWindowResizeBound) window.removeEventListener('resize', syncFlushState);
    window.setTimeout(function() {
      overlay.remove();
    }, 280);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }

  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener('keydown', handleKeydown);
  syncFlushState();
  if (typeof ResizeObserver !== 'undefined' && host !== document.body) {
    resizeObserver = new ResizeObserver(syncFlushState);
    resizeObserver.observe(host);
  } else {
    window.addEventListener('resize', syncFlushState);
    isWindowResizeBound = true;
  }

  function mountGlobalSearch() {
    if (isClosing || !overlay.isConnected || typeof window.createGlobalSearch !== 'function') return;
    content.innerHTML = '';
    const globalSearchNode = window.createGlobalSearch(Object.assign({}, options, {
      onClose: closeModal
    }));
    content.appendChild(globalSearchNode);
    syncFlushState();
    let didUserChooseAnotherTarget = false;

    function focusMountedSearch() {
      const input = overlay.querySelector('.nn-global-search__search-input');
      if (!input || !overlay.isConnected || overlay.classList.contains('is-closing')) return;
      try {
        input.focus({ preventScroll: true });
      } catch (error) {
        input.focus();
      }
      const cursorPosition = input.value.length;
      if (typeof input.setSelectionRange === 'function') {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }
    }

    overlay.classList.add('is-ready');
    if (globalSearchNode._globalSearch && typeof globalSearchNode._globalSearch.enter === 'function') {
      globalSearchNode._globalSearch.enter();
    }
    focusMountedSearch();
    overlay.addEventListener('pointerdown', function(event) {
      if (!event.target.closest || !event.target.closest('.nn-global-search__search-input')) {
        didUserChooseAnotherTarget = true;
      }
    }, true);
    overlay.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') didUserChooseAnotherTarget = true;
    }, true);
    content.addEventListener('animationend', function handleEntryAnimationEnd(event) {
      if (event.target !== content || event.animationName !== 'nn-header-global-search-enter') return;
      content.removeEventListener('animationend', handleEntryAnimationEnd);
      if (!didUserChooseAnotherTarget) focusMountedSearch();
    });
    requestAnimationFrame(function() {
      focusMountedSearch();
      requestAnimationFrame(function() {
        focusMountedSearch();
        window.setTimeout(function() {
          if (!didUserChooseAnotherTarget) focusMountedSearch();
        }, 400);
      });
    });
  }

  if (typeof window.createGlobalSearch === 'function') {
    mountGlobalSearch();
  } else {
    ensureHeaderGlobalSearchDependencies().then(mountGlobalSearch).catch(function(error) {
      console.error('Failed to load global search', error);
      closeModal();
    });
  }

  return overlay;
}

function createHeaderIconButton(options = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = [
    'nn-header__icon-btn',
    options.variant ? `nn-header__icon-btn--${options.variant}` : '',
    options.hoverIcon ? 'nn-header__icon-btn--has-hover-icon' : '',
    options.className || ''
  ].filter(Boolean).join(' ');
  button.setAttribute('aria-label', options.label || '');

  if (options.hoverIcon) {
    button.innerHTML = `
      <span class="nn-header__icon-stack" aria-hidden="true">
        <span class="nn-header__icon-default">${options.icon || ''}</span>
        <span class="nn-header__icon-hover">${options.hoverIcon}</span>
      </span>
    `;
  } else {
    button.innerHTML = options.icon || '';
  }

  if (typeof options.onClick === 'function') {
    button.addEventListener('click', options.onClick);
  }

  if (options.badge) {
    const badge = typeof createBadge === 'function'
      ? createBadge({ text: options.badge, variant: options.badgeVariant || 'blue', size: 'small' })
      : document.createElement('span');
    if (!badge.classList.contains('nn-badge')) {
      badge.className = 'nn-badge nn-badge-blue nn-badge-small';
      badge.textContent = options.badge;
    }
    button.appendChild(badge);
  }

  return button;
}

function createHeaderAvatar(item = {}) {
  if (typeof createAvatarWithBadge === 'function') {
    return createAvatarWithBadge(
      {
        src: item.src || '',
        text: item.text || '',
        size: item.size || 24
      },
      item.badge
        ? { text: item.badge, variant: item.badgeVariant || 'red', size: 'small', stroke: { size: 1, color: 'gray-1' } }
        : {}
    );
  }

  if (typeof createAvatar === 'function') {
    return createAvatar({
      src: item.src || '',
      text: item.text || '',
      size: item.size || 24
    });
  }

  const fallback = document.createElement('span');
  fallback.textContent = item.text || '';
  return fallback;
}

const headerAvatarPool = [
  'default.png',
  '头像10.png',
  '头像311.png',
  '头像441.png',
  '头像480.png',
  '头像496.png',
  '头像511.png',
  '头像542.png',
  '头像556.png',
  '头像619.png',
  '头像676.png',
  '头像706.png',
  '头像746.png',
  '头像797.png',
  '头像824.png',
  '头像902.png',
  '头像954.png',
  '头像985.png'
].map(function(fileName) {
  return `../image/Avatar/${fileName}`;
});

function createRandomHeaderAvatarItems(count = 3) {
  const badges = ['12', '8', '99'];
  const pool = headerAvatarPool.slice();
  return Array.from({ length: count }, function(_, index) {
    if (!pool.length) {
      pool.push.apply(pool, headerAvatarPool);
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    const src = pool.splice(randomIndex, 1)[0];
    return {
      src,
      size: 24,
      badge: badges[index] || '',
      badgeVariant: 'blue'
    };
  });
}

function createHeaderGameReportButton(options = {}) {
  const icon = '<i class="nnicon nicon-a-Declaration-fillshenbao-mianxing" aria-hidden="true"></i>';
  let button;

  if (typeof injectButtonStyles === 'function') {
    injectButtonStyles();
  }

  if (typeof createButton === 'function') {
    button = createButton({
      text: options.text || '游戏申报',
      variant: 'primary',
      level: 'primary',
      size: 'small',
      icon,
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x8)',
      onClick: options.onClick,
      className: 'nn-header__game-report'
    });
  } else {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-btn nn-btn-primary-primary nn-btn-small nn-btn-icon-left nn-header__game-report';
    button.innerHTML = `<span class="nn-btn-icon" style="width:var(--icon-size-x8);height:var(--icon-size-x8);font-size:var(--icon-size-x8)">${icon}</span><span class="nn-btn-text">${options.text || '游戏申报'}</span>`;
    if (typeof options.onClick === 'function') button.addEventListener('click', options.onClick);
  }

  return button;
}

function createWindowIcon(iconClass) {
  const icon = document.createElement('span');
  icon.className = 'nn-header__window-icon';
  icon.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
  return icon;
}

function createHeaderWindowControls(options = {}) {
  injectHeaderStyles();

  const controls = document.createElement('div');
  controls.className = ['nn-header__window', options.className || ''].filter(Boolean).join(' ');
  if (options.id) controls.id = options.id;
  controls.setAttribute('aria-label', options.ariaLabel || '窗口控制');

  const controlItems = [
    {
      key: 'minimize',
      label: options.minimizeLabel || '最小化',
      iconClass: 'nicon-a-delete-lineshanchu-xianxing',
      onClick: options.onMinimize
    },
    {
      key: 'maximize',
      label: options.maximizeLabel || '最大化',
      iconClass: 'nicon-a-Windowoff-linedachuangkou-xianxing',
      onClick: options.onMaximize
    }
  ];

  if (options.showClose !== false) {
    controlItems.push({
      key: 'close',
      label: options.closeLabel || '关闭',
      iconClass: 'nicon-a-close-lineguanbi-xianxing',
      onClick: options.onClose
    });
  }

  controlItems.forEach(function(item) {
    const control = createWindowIcon(item.iconClass);
    control.dataset.control = item.key;
    control.setAttribute('role', 'button');
    control.setAttribute('tabindex', '0');
    control.setAttribute('aria-label', item.label);
    control.title = item.label;

    function activate(event) {
      if (typeof item.onClick === 'function') item.onClick(event, control, controls);
    }

    control.addEventListener('click', activate);
    control.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activate(event);
    });
    controls.appendChild(control);
  });

  return controls;
}

function createHeaderBack(options = {}) {
  const isActive = Boolean(options.text || options.href || typeof options.onClick === 'function');
  const back = document.createElement(isActive && options.href ? 'a' : 'span');
  back.className = [
    'nn-header__back',
    isActive ? 'nn-header__back--active' : 'nn-header__back--inactive'
  ].join(' ');

  if (isActive && options.href) {
    back.href = options.href;
  }

  back.innerHTML = '<i class="nnicon nicon-a-Arrowleft-linejiantouzuo-xianxing" aria-hidden="true"></i>';

  if (options.text) {
    const text = document.createElement('span');
    text.className = 'nn-header__back-text';
    text.textContent = options.text;
    back.appendChild(text);
  }

  if (isActive && typeof options.onClick === 'function') {
    back.addEventListener('click', options.onClick);
  }

  return back;
}

function createRoomHeaderImIcon(iconClass, label) {
  const icon = document.createElement('span');
  icon.className = 'nn-room-header-im__icon';
  if (label) {
    icon.setAttribute('aria-label', label);
    icon.setAttribute('title', label);
  }
  icon.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
  if (label && typeof createTooltip === 'function') {
    return createTooltip({
      content: label,
      direction: 'bottom',
      trigger: icon
    });
  }
  return icon;
}

function createRoomHeaderAnnouncement(options = {}) {
  const {
    text = '新用户进入群时默认访问的频道已设置',
    showDot = true
  } = options;

  if (!text) return null;

  const announcement = document.createElement('div');
  announcement.className = 'nn-room-header-announcement';

  const icon = document.createElement('span');
  icon.className = 'nn-room-header-announcement__icon';
  icon.innerHTML = '<i class="nnicon nicon-a-Announcement-Fillgonggao-mianxing"></i>';
  announcement.appendChild(icon);

  const label = document.createElement('span');
  label.className = 'nn-room-header-announcement__text';
  label.textContent = text;
  announcement.appendChild(label);

  if (showDot) {
    const dot = typeof createBadge === 'function'
      ? createBadge({ variant: 'red', dot: true })
      : document.createElement('span');
    if (!dot.classList.contains('nn-badge')) {
      dot.className = 'nn-badge nn-badge-dot-red';
    }
    dot.classList.add('nn-room-header-announcement__dot');
    announcement.appendChild(dot);
  }

  return announcement;
}

function createRoomHeaderOrderActivity(options = {}) {
  const {
    name = 'Candice',
    text = '刚刚下单了',
    service = 'TR阳光彩虹'
  } = options;

  if (!name && !text && !service) return null;

  const activity = document.createElement('div');
  activity.className = 'nn-room-header-order-activity';

  if (name) {
    const nameLabel = document.createElement('span');
    nameLabel.className = 'nn-room-header-order-activity__name';
    nameLabel.textContent = name;
    activity.appendChild(nameLabel);
  }

  if (text) {
    const textLabel = document.createElement('span');
    textLabel.className = 'nn-room-header-order-activity__text';
    textLabel.textContent = text;
    activity.appendChild(textLabel);
  }

  if (service) {
    const serviceLabel = document.createElement('span');
    serviceLabel.className = 'nn-room-header-order-activity__service';
    serviceLabel.textContent = service;
    activity.appendChild(serviceLabel);
  }

  return activity;
}

function createRoomHeaderIm(options = {}) {
  const {
    width = '100%',
    className = '',
    nickname = "User's nickname",
    metaText = '临时会话',
    actions = [
      { text: '添加好友', variant: 'system', level: 'secondary', size: 'small' },
      { text: '邀请进房', variant: 'system', level: 'secondary', size: 'small' },
      { text: '创建订单', variant: 'system', level: 'primary', size: 'small' }
    ],
    iconActions = [
      { iconClass: 'nicon-a-Human-Lineren-xianxing', label: '用户' },
      { iconClass: 'nicon-a-report-linejubao-xianxing', label: '举报' }
    ]
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-im', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-im';

  const user = document.createElement('div');
  user.className = 'nn-room-header-im__user';

  const name = document.createElement('span');
  name.className = 'nn-room-header-im__name';
  name.textContent = nickname;
  user.appendChild(name);

  if (metaText) {
    const meta = document.createElement('span');
    meta.className = 'nn-room-header-im__meta';
    meta.textContent = metaText;
    user.appendChild(meta);
  }

  body.appendChild(user);

  if (actions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'nn-room-header-im__actions';
    actions.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'secondary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          className: ['nn-room-header-im__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'secondary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          className: ['nn-room-header-im__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-im__button';
        button.textContent = action.text || '';
      }
      actionsWrap.appendChild(button);
    });
    body.appendChild(actionsWrap);
  }

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-im__spacer';
  body.appendChild(spacer);

  if (iconActions.length) {
    const iconWrap = document.createElement('div');
    iconWrap.className = 'nn-room-header-im__icons';
    iconActions.forEach(function(item) {
      iconWrap.appendChild(createRoomHeaderImIcon(item.iconClass, item.label));
    });
    body.appendChild(iconWrap);
  }

  root.appendChild(body);
  return root;
}

function createRoomHeaderVoice(options = {}) {
  const {
    width = '100%',
    className = '',
    roomCount = '52',
    roomTitle = '语音房名称多少度',
    roomStats = { current: '8', total: '10' },
    infoTooltip = '编辑招募信息',
    actions = [
      { text: '邀请/分享', variant: 'system', level: 'primary', size: 'small' }
    ],
    passwordSwitch = {
      state: 'password',
      passwordState: 'filled',
      passwordCode: '8538',
      hiddenCode: '••••'
    },
    rightButtons = [
      {
        text: '语音房设置',
        variant: 'system',
        level: 'tertiary',
        size: 'small',
        icon: '<i class="nnicon nicon-a-settings-lineshezhi-xianxing"></i>',
        iconPosition: 'left'
      }
    ],
    iconActions = [
      { iconClass: 'nicon-a-moregengduo', label: '更多' }
    ]
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-voice', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-voice';

  const left = document.createElement('div');
  left.className = 'nn-room-header-voice__left';

  const info = document.createElement('div');
  info.className = 'nn-room-header-voice__info';

  const count = document.createElement('span');
  count.className = 'nn-room-header-voice__count';
  count.textContent = roomCount;
  info.appendChild(count);

  const title = document.createElement('span');
  title.className = 'nn-room-header-voice__title';
  title.textContent = roomTitle;
  info.appendChild(title);

  const edit = document.createElement('span');
  edit.className = 'nn-room-header-voice__edit';
  edit.innerHTML = '<i class="nnicon nicon-a-Publishcontent-linefabuneirong-xianxing"></i>';
  info.appendChild(edit);

  const stats = document.createElement('span');
  stats.className = 'nn-room-header-voice__stats';
  stats.innerHTML = `
    <span class="nn-room-header-voice__stats-number">${roomStats.current || '8'}</span>
    <span class="nn-room-header-voice__stats-divider">/</span>
    <span class="nn-room-header-voice__stats-number">${roomStats.total || '10'}</span>
  `;
  info.appendChild(stats);

  if (infoTooltip && typeof createTooltip === 'function') {
    left.appendChild(createTooltip({
      content: infoTooltip,
      direction: 'bottom',
      trigger: info
    }));
  } else {
    left.appendChild(info);
  }
  body.appendChild(left);

  if (actions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'nn-room-header-voice__actions';
    actions.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          className: ['nn-room-header-voice__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          className: ['nn-room-header-voice__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-voice__button';
        button.textContent = action.text || '';
      }
      actionsWrap.appendChild(button);
    });
    body.appendChild(actionsWrap);
  }

  if (passwordSwitch && typeof createSwitch === 'function') {
    const passwordWrap = document.createElement('div');
    passwordWrap.className = 'nn-room-header-voice__password';
    passwordWrap.appendChild(createSwitch({
      state: 'password',
      passwordState: passwordSwitch.passwordState || 'filled',
      passwordCode: passwordSwitch.passwordCode || '8538',
      hiddenCode: passwordSwitch.hiddenCode || '••••'
    }));
    body.appendChild(passwordWrap);
  }

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-voice__spacer';
  body.appendChild(spacer);

  if (rightButtons.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const rightButtonsWrap = document.createElement('div');
    rightButtonsWrap.className = 'nn-room-header-voice__right-buttons';
    rightButtons.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'tertiary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-voice__right-button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'tertiary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-voice__right-button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-voice__right-button';
        button.textContent = action.text || '';
      }
      rightButtonsWrap.appendChild(button);
    });
    body.appendChild(rightButtonsWrap);
  }

  if (iconActions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const iconWrap = document.createElement('div');
    iconWrap.className = 'nn-room-header-voice__icons';
    iconActions.forEach(function(item) {
      const iconMarkup = `<i class="nnicon ${item.iconClass}"></i>`;
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: '',
          variant: item.variant || 'system',
          level: item.level || 'tertiary',
          size: item.size || 'small',
          icon: iconMarkup,
          iconPosition: 'only',
          iconSize: item.iconSize || 'var(--icon-size-x12)',
          className: ['nn-room-header-voice__icon', item.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: '',
          variant: item.variant || 'system',
          level: item.level || 'tertiary',
          size: item.size || 'small',
          icon: iconMarkup,
          iconPosition: 'only',
          iconSize: item.iconSize || 'var(--icon-size-x12)',
          className: ['nn-room-header-voice__icon', item.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-voice__icon';
        button.innerHTML = iconMarkup;
      }
      if (item.label) {
        button.setAttribute('aria-label', item.label);
        button.setAttribute('title', item.label);
      }
      iconWrap.appendChild(button);
    });
    body.appendChild(iconWrap);
  }

  root.appendChild(body);
  return root;
}

function createRoomHeaderExclusiveRoom(options = {}) {
  const {
    width = '100%',
    className = '',
    exclusiveTitle = '专属房间',
    exclusiveIconClass = 'nicon-a-Exclusiveroom-Linezhuanshufangjian-xianxing',
    searchPlaceholder = '搜索房间内容/房间号',
    searchValue = '',
    onSearch = null,
    createAction = {
      text: '创建房间',
      variant: 'system',
      level: 'primary',
      size: 'default'
    }
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-exclusive-room', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-exclusive-room';

  const left = document.createElement('div');
  left.className = 'nn-room-header-exclusive-room__left';

  const icon = document.createElement('span');
  icon.className = 'nn-room-header-exclusive-room__icon';
  icon.innerHTML = `<i class="nnicon ${exclusiveIconClass}"></i>`;
  left.appendChild(icon);

  const title = document.createElement('span');
  title.className = 'nn-room-header-exclusive-room__title';
  title.textContent = exclusiveTitle;
  left.appendChild(title);
  body.appendChild(left);

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-exclusive-room__spacer';
  body.appendChild(spacer);

  const actions = document.createElement('div');
  actions.className = 'nn-room-header-exclusive-room__actions';

  let search;
  if (typeof nnInput === 'function') {
    search = nnInput({
      placeholder: searchPlaceholder,
      value: searchValue,
      size: 'default',
      showSearch: true,
      onSearch,
      className: 'nn-room-header-exclusive-room__search'
    });
  } else if (typeof createInput === 'function') {
    search = createInput({
      placeholder: searchPlaceholder,
      value: searchValue,
      size: 'default',
      showSearch: true,
      onSearch,
      className: 'nn-room-header-exclusive-room__search'
    });
  } else {
    search = document.createElement('input');
    search.type = 'search';
    search.className = 'nn-room-header-exclusive-room__search';
    search.placeholder = searchPlaceholder;
    search.value = searchValue;
  }
  actions.appendChild(search);

  if (typeof injectButtonStyles === 'function') {
    injectButtonStyles();
  }
  let button;
  if (typeof nnButton === 'function') {
    button = nnButton({
      text: createAction.text || '',
      variant: createAction.variant || 'system',
      level: createAction.level || 'primary',
      size: createAction.size || 'default',
      icon: createAction.icon || null,
      iconPosition: createAction.iconPosition || 'left',
      className: ['nn-room-header-exclusive-room__button', createAction.className || ''].filter(Boolean).join(' ')
    });
  } else if (typeof createButton === 'function') {
    button = createButton({
      text: createAction.text || '',
      variant: createAction.variant || 'system',
      level: createAction.level || 'primary',
      size: createAction.size || 'default',
      icon: createAction.icon || null,
      iconPosition: createAction.iconPosition || 'left',
      className: ['nn-room-header-exclusive-room__button', createAction.className || ''].filter(Boolean).join(' ')
    });
  } else {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-room-header-exclusive-room__button';
    button.textContent = createAction.text || '';
  }
  actions.appendChild(button);

  body.appendChild(actions);
  root.appendChild(body);
  return root;
}

function createRoomHeaderCommunityHall(options = {}) {
  const {
    width = '100%',
    className = '',
    hallTitle = '英雄联盟社区',
    hallIconClass = 'nicon-a-Lounge-Linexianliaodating-xianxing',
    noticeText = '',
    showNoticeDot = true,
    actions = [
      { text: '邀请/分享', variant: 'system', level: 'primary', size: 'small' }
    ],
    announcement = '新用户进入群时默认访问的频道已设置',
    showAnnouncementDot = true
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-community-hall', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-community-hall';

  const left = document.createElement('div');
  left.className = 'nn-room-header-community-hall__left';

  const icon = document.createElement('span');
  icon.className = 'nn-room-header-community-hall__icon';
  icon.innerHTML = `<i class="nnicon ${hallIconClass}"></i>`;
  left.appendChild(icon);

  const title = document.createElement('span');
  title.className = 'nn-room-header-community-hall__title';
  title.textContent = hallTitle;
  left.appendChild(title);

  body.appendChild(left);

  if (actions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'nn-room-header-community-hall__actions';
    actions.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          onClick: action.onClick || null,
          className: ['nn-room-header-community-hall__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'small',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          onClick: action.onClick || null,
          className: ['nn-room-header-community-hall__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-community-hall__button';
        button.textContent = action.text || '';
      }
      actionsWrap.appendChild(button);
    });
    body.appendChild(actionsWrap);
  }

  if (noticeText) {
    const notice = document.createElement('div');
    notice.className = 'nn-header__notice nn-room-header-community-hall__notice';

    const noticeIcon = document.createElement('i');
    noticeIcon.className = 'nnicon nicon-a-massage-linexiaoxi-xianxing nn-room-header-community-hall__notice-icon';
    noticeIcon.setAttribute('aria-hidden', 'true');
    notice.appendChild(noticeIcon);

    const noticeLabel = document.createElement('span');
    noticeLabel.className = 'nn-header__notice-text';
    noticeLabel.textContent = noticeText;
    notice.appendChild(noticeLabel);

    if (showNoticeDot) {
      const dot = typeof createBadge === 'function'
        ? createBadge({ variant: 'red', dot: true })
        : document.createElement('span');
      if (!dot.classList.contains('nn-badge')) {
        dot.className = 'nn-badge nn-badge-dot-red';
      }
      dot.classList.add('nn-header__dot');
      notice.appendChild(dot);
    }

    body.appendChild(notice);
  } else {
    const announcementBar = createRoomHeaderAnnouncement({
      text: announcement,
      showDot: showAnnouncementDot
    });
    if (announcementBar) {
      body.appendChild(announcementBar);
    }
  }

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-community-hall__spacer';
  body.appendChild(spacer);

  root.appendChild(body);
  return root;
}

function createRoomHeaderUnderCommunity(options = {}) {
  const {
    width = '100%',
    className = '',
    underTitle = '旗下社区',
    underIconClass = 'nicon-a-BattleTeam-Linezhandui-xianxing',
    actions = [
      {
        text: '创建战队社区',
        variant: 'system',
        level: 'primary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-add-linetianjia-xianxing"></i>',
        iconPosition: 'left'
      }
    ]
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-under-community', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-under-community';

  const left = document.createElement('div');
  left.className = 'nn-room-header-under-community__left';

  const icon = document.createElement('span');
  icon.className = 'nn-room-header-under-community__icon';
  icon.innerHTML = `<i class="nnicon ${underIconClass}"></i>`;
  left.appendChild(icon);

  const title = document.createElement('span');
  title.className = 'nn-room-header-under-community__title';
  title.textContent = underTitle;
  left.appendChild(title);
  body.appendChild(left);

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-under-community__spacer';
  body.appendChild(spacer);

  if (actions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'nn-room-header-under-community__actions';
    actions.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'default',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-under-community__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'default',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-under-community__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-under-community__button';
        button.textContent = action.text || '';
      }
      actionsWrap.appendChild(button);
    });
    body.appendChild(actionsWrap);
  }

  root.appendChild(body);
  return root;
}

function createRoomHeaderPlayWith(options = {}) {
  const {
    width = '100%',
    className = '',
    playTitle = '游戏服务',
    playIconClass = 'nicon-a-GameswithPlay-Lineyouxidaiwan-xianxing',
    announcement = '新用户进入群时默认访问的频道已设置',
    showAnnouncementDot = true,
    orderActivity = {
      name: 'Candice',
      text: '刚刚下单了',
      service: 'TR阳光彩虹'
    },
    actions = [
      {
        text: '成为陪玩',
        variant: 'system',
        level: 'primary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-Issuedtoplaywith-Linefageidaiwan-xianxing"></i>',
        iconPosition: 'left'
      },
      {
        text: '联系客服',
        variant: 'system',
        level: 'tertiary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-customer-service-linekefu-xianxing"></i>',
        iconPosition: 'left'
      }
    ]
  } = options;

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--room-header-play-with', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const body = document.createElement('div');
  body.className = 'nn-room-header-play-with';

  const left = document.createElement('div');
  left.className = 'nn-room-header-play-with__left';

  const icon = document.createElement('span');
  icon.className = 'nn-room-header-play-with__icon';
  icon.innerHTML = `<i class="nnicon ${playIconClass}"></i>`;
  left.appendChild(icon);

  const title = document.createElement('span');
  title.className = 'nn-room-header-play-with__title';
  title.textContent = playTitle;
  left.appendChild(title);
  body.appendChild(left);

  const announcementBar = createRoomHeaderAnnouncement({
    text: announcement,
    showDot: showAnnouncementDot
  });
  if (announcementBar) {
    body.appendChild(announcementBar);
  }

  const orderActivityBar = orderActivity ? createRoomHeaderOrderActivity(orderActivity) : null;
  if (orderActivityBar) {
    body.appendChild(orderActivityBar);
  }

  const spacer = document.createElement('div');
  spacer.className = 'nn-room-header-play-with__spacer';
  body.appendChild(spacer);

  if (actions.length) {
    if (typeof injectButtonStyles === 'function') {
      injectButtonStyles();
    }
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'nn-room-header-play-with__actions';
    actions.forEach(function(action) {
      let button;
      if (typeof nnButton === 'function') {
        button = nnButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'default',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-play-with__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else if (typeof createButton === 'function') {
        button = createButton({
          text: action.text || '',
          variant: action.variant || 'system',
          level: action.level || 'primary',
          size: action.size || 'default',
          icon: action.icon || null,
          iconPosition: action.iconPosition || 'left',
          iconSize: action.iconSize || null,
          className: ['nn-room-header-play-with__button', action.className || ''].filter(Boolean).join(' ')
        });
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'nn-room-header-play-with__button';
        button.textContent = action.text || '';
      }
      actionsWrap.appendChild(button);
    });
    body.appendChild(actionsWrap);
  }

  root.appendChild(body);
  return root;
}

function startHeaderSearchStarBorder(search, canvas) {
  const context = canvas.getContext('2d');
  if (!context) return;

  const settings = {
    duration: 1.2,
    stars: 2,
    trailCoverage: 1.5,
    trailFloor: 0.08,
    thickness: 2,
    glow: 0
  };
  const bleed = 48;
  const effectDuration = 5.6;
  const fadeStart = effectDuration * 0.89;
  const tau = Math.PI * 2;
  const point = { x: 0, y: 0 };
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let shape = null;
  let phase = 0;
  let reveal = prefersReducedMotion ? 1 : 0;
  let effectOpacity = 1;
  let effectStartedAt = -1;
  let lastFrame = performance.now();
  let frameId = 0;
  let visible = true;
  let connectedOnce = false;
  let disposed = false;
  let color = [36, 94, 255];

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function wrap(value, total) {
    return ((value % total) + total) % total;
  }

  function ease(value) {
    return value < 0.5
      ? 4 * value * value * value
      : 1 - Math.pow(2 - 2 * value, 3) / 2;
  }

  function rgba(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${clamp(alpha, 0, 1).toFixed(3)})`;
  }

  function resolveColor() {
    const token = getComputedStyle(search).getPropertyValue('--Esports-Blue').trim();
    if (!token) return;
    const previous = context.fillStyle;
    context.fillStyle = token;
    const normalized = String(context.fillStyle);
    context.fillStyle = previous;
    if (normalized.charAt(0) === '#') {
      const hex = normalized.slice(1);
      if (hex.length === 6) {
        color = [
          parseInt(hex.slice(0, 2), 16),
          parseInt(hex.slice(2, 4), 16),
          parseInt(hex.slice(4, 6), 16)
        ];
      }
      return;
    }
    const channels = normalized.match(/[\d.]+/g)?.map(Number);
    if (channels && channels.length >= 3) color = channels.slice(0, 3);
  }

  function createOutline(outlineWidth, outlineHeight, radius) {
    const resolvedRadius = Math.max(0, Math.min(radius, outlineWidth / 2, outlineHeight / 2));
    const arcLength = Math.PI * resolvedRadius / 2;
    const across = Math.max(0, outlineWidth - 2 * resolvedRadius);
    const down = Math.max(0, outlineHeight - 2 * resolvedRadius);
    const segments = [
      { length: across, x: resolvedRadius, y: 0, dx: 1, dy: 0, angle: null },
      { length: arcLength, x: outlineWidth - resolvedRadius, y: resolvedRadius, angle: -Math.PI / 2 },
      { length: down, x: outlineWidth, y: resolvedRadius, dx: 0, dy: 1, angle: null },
      { length: arcLength, x: outlineWidth - resolvedRadius, y: outlineHeight - resolvedRadius, angle: 0 },
      { length: across, x: outlineWidth - resolvedRadius, y: outlineHeight, dx: -1, dy: 0, angle: null },
      { length: arcLength, x: resolvedRadius, y: outlineHeight - resolvedRadius, angle: Math.PI / 2 },
      { length: down, x: 0, y: outlineHeight - resolvedRadius, dx: 0, dy: -1, angle: null },
      { length: arcLength, x: resolvedRadius, y: resolvedRadius, angle: Math.PI }
    ];
    return {
      radius: resolvedRadius,
      segments,
      total: Math.max(1, segments.reduce(function(sum, segment) { return sum + segment.length; }, 0))
    };
  }

  function pointAt(distance) {
    let remaining = wrap(distance, shape.total);
    for (const segment of shape.segments) {
      if (segment.length > 0 && remaining <= segment.length) {
        if (segment.angle === null) {
          point.x = segment.x + segment.dx * remaining;
          point.y = segment.y + segment.dy * remaining;
        } else {
          const angle = segment.angle + remaining / shape.radius;
          point.x = segment.x + Math.cos(angle) * shape.radius;
          point.y = segment.y + Math.sin(angle) * shape.radius;
        }
        return point;
      }
      remaining -= segment.length;
    }
    return point;
  }

  function stroke(x1, y1, x2, y2, lineWidth, strokeStyle, lineCap) {
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
    context.lineCap = lineCap;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  function drawTrail(head, length, intensity) {
    const steps = clamp(Math.ceil(length), 2, 1024);
    pointAt(head);
    let previousX = point.x;
    let previousY = point.y;
    for (let index = 1; index <= steps; index++) {
      pointAt(head - length * (index / steps));
      const strength = 1 - (index - 0.5) / steps;
      const fade = (
        settings.trailFloor
        + (1 - settings.trailFloor) * Math.pow(strength, 0.9)
      ) * intensity;
      const cap = index === 1 ? 'round' : 'butt';
      if (settings.glow > 0) {
        stroke(
          previousX,
          previousY,
          point.x,
          point.y,
          2 + 6 * settings.glow,
          rgba(color, fade * 0.2 * settings.glow),
          cap
        );
      }
      stroke(previousX, previousY, point.x, point.y, settings.thickness, rgba(color, fade), cap);
      previousX = point.x;
      previousY = point.y;
    }
  }

  function drawHead(head, intensity) {
    if (settings.glow <= 0) return;
    pointAt(head);
    const reach = 12 + 40 * settings.glow;
    const bloom = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, reach);
    const strength = 0.4 * settings.glow * intensity;
    bloom.addColorStop(0, rgba(color, strength));
    bloom.addColorStop(0.2, rgba(color, strength * 0.4));
    bloom.addColorStop(0.5, rgba(color, strength * 0.1));
    bloom.addColorStop(1, rgba(color, 0));
    context.fillStyle = bloom;
    context.fillRect(point.x - reach, point.y - reach, reach * 2, reach * 2);
  }

  function draw() {
    if (!shape || width < 2 || height < 2) return;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    const offset = (bleed + settings.thickness / 2) * dpr;
    context.setTransform(dpr, 0, 0, dpr, offset, offset);
    context.globalCompositeOperation = 'lighter';
    const spacing = shape.total / settings.stars;
    const speed = shape.total / settings.duration;
    const trail = spacing * settings.trailCoverage;
    for (let index = 0; index < settings.stars; index++) {
      const head = phase + index * spacing;
      const intensity = reveal * effectOpacity;
      drawTrail(head, trail, intensity);
      drawHead(head, intensity);
    }
    context.globalCompositeOperation = 'source-over';
  }

  function measure() {
    width = search.offsetWidth;
    height = search.offsetHeight;
    if (!width || !height) return false;
    const searchStyle = getComputedStyle(search);
    const borderLeft = parseFloat(searchStyle.borderLeftWidth) || 0;
    const borderTop = parseFloat(searchStyle.borderTopWidth) || 0;
    canvas.style.left = `${-bleed - borderLeft}px`;
    canvas.style.top = `${-bleed - borderTop}px`;
    canvas.style.width = `${width + bleed * 2}px`;
    canvas.style.height = `${height + bleed * 2}px`;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round((width + bleed * 2) * dpr));
    canvas.height = Math.max(1, Math.round((height + bleed * 2) * dpr));
    const radius = parseFloat(searchStyle.borderTopLeftRadius) || 0;
    shape = createOutline(
      Math.max(1, width - settings.thickness),
      Math.max(1, height - settings.thickness),
      Math.max(0, radius - settings.thickness / 2)
    );
    resolveColor();
    return true;
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
  }

  function frame(now) {
    frameId = 0;
    if (!search.isConnected) {
      if (connectedOnce) dispose();
      else frameId = requestAnimationFrame(frame);
      return;
    }
    connectedOnce = true;
    if (!visible || disposed) return;
    if (effectStartedAt < 0) effectStartedAt = now;
    if (!shape && !measure()) {
      frameId = requestAnimationFrame(frame);
      return;
    }
    const effectElapsed = (now - effectStartedAt) / 1000;
    if (effectElapsed >= effectDuration) {
      effectOpacity = 0;
      draw();
      dispose();
      return;
    }
    const delta = Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000));
    lastFrame = now;
    reveal += (1 - reveal) * (1 - Math.exp(-delta / 0.16));
    if (!prefersReducedMotion) {
      phase = wrap(phase + shape.total * delta / settings.duration, shape.total);
    }
    const fadeProgress = clamp((effectElapsed - fadeStart) / (effectDuration - fadeStart), 0, 1);
    effectOpacity = 1 - ease(fadeProgress);
    draw();
    frameId = requestAnimationFrame(frame);
  }

  function wake() {
    if (!frameId && !disposed && visible) {
      lastFrame = performance.now();
      frameId = requestAnimationFrame(frame);
    }
  }

  const resizeObserver = new ResizeObserver(function() {
    if (measure()) {
      draw();
      wake();
    }
  });
  const visibilityObserver = new IntersectionObserver(function(entries) {
    visible = entries.some(function(entry) { return entry.isIntersecting; });
    if (visible) wake();
  });

  resizeObserver.observe(search);
  visibilityObserver.observe(search);
  wake();
}

function createHeaderSearch(options = {}) {
  injectHeaderStyles();

  const {
    placeholder = '搜索社区、用户名称/ID',
    value = '',
    readOnly = false,
    enableGlobalSearchModal = false,
    modalAnchor = null,
    onClick = null,
    onInput = null,
    onSearch = null,
    showSubmitIcon = false,
    className = ''
  } = options;

  const search = document.createElement('label');
  search.className = ['nn-header__search', className].filter(Boolean).join(' ');

  const searchStarBorder = document.createElement('canvas');
  searchStarBorder.className = 'nn-header__search-star-border';
  searchStarBorder.setAttribute('aria-hidden', 'true');
  search.appendChild(searchStarBorder);
  startHeaderSearchStarBorder(search, searchStarBorder);

  const searchInput = document.createElement('input');
  searchInput.className = 'nn-header__search-input';
  searchInput.type = 'text';
  searchInput.readOnly = Boolean(readOnly || enableGlobalSearchModal);
  searchInput.placeholder = placeholder;
  searchInput.value = value;
  search.appendChild(searchInput);

  const searchPlaceholderWrap = document.createElement('span');
  searchPlaceholderWrap.className = 'nn-header__search-placeholder';

  const searchPlaceholderTrack = document.createElement('span');
  searchPlaceholderTrack.className = 'nn-header__search-placeholder-track';

  const searchPlaceholderItem = document.createElement('span');
  searchPlaceholderItem.className = 'nn-header__search-placeholder-item';
  searchPlaceholderItem.textContent = placeholder;
  searchPlaceholderTrack.appendChild(searchPlaceholderItem);

  searchPlaceholderWrap.appendChild(searchPlaceholderTrack);
  search.appendChild(searchPlaceholderWrap);

  const searchIcon = document.createElement('span');
  searchIcon.className = 'nn-header__search-icon';
  const searchCompass = document.createElement('img');
  searchCompass.src = '../image/Header/Compass.svg';
  searchCompass.alt = '';
  searchIcon.appendChild(searchCompass);
  search.appendChild(searchIcon);

  let submitIcon = null;
  if (showSubmitIcon) {
    submitIcon = document.createElement('span');
    submitIcon.className = 'nn-header__search-submit';
    submitIcon.innerHTML = '<i class="nnicon nicon-a-search-linesousuo-xianxing" aria-hidden="true"></i>';
    submitIcon.setAttribute('role', 'button');
    submitIcon.setAttribute('aria-label', '搜索');
    submitIcon.tabIndex = -1;
    search.appendChild(submitIcon);
  }

  function syncSearchTypingState() {
    const hasValue = Boolean(searchInput.value);
    search.classList.toggle('nn-header__search--typing', hasValue);
    if (submitIcon) {
      submitIcon.innerHTML = hasValue
        ? '<i class="nnicon nicon-a-close-lineguanbi-xianxing" aria-hidden="true"></i>'
        : '<i class="nnicon nicon-a-search-linesousuo-xianxing" aria-hidden="true"></i>';
      submitIcon.setAttribute('aria-label', hasValue ? '清空搜索内容' : '搜索');
      submitIcon.tabIndex = hasValue ? 0 : -1;
    }
  }

  function clearSearch(event) {
    if (!searchInput.value) return;
    event.preventDefault();
    event.stopPropagation();
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    searchInput.focus();
  }

  if (submitIcon) {
    submitIcon.addEventListener('pointerdown', function(event) {
      if (!searchInput.value) return;
      event.preventDefault();
      event.stopPropagation();
    });
    submitIcon.addEventListener('click', clearSearch);
    submitIcon.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      clearSearch(event);
    });
  }

  searchInput.addEventListener('input', function(event) {
    syncSearchTypingState();
    if (typeof onInput === 'function') {
      onInput({ event, target: search, input: searchInput, value: searchInput.value });
    }
  });
  searchInput.addEventListener('blur', syncSearchTypingState);
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && typeof onSearch === 'function') {
      onSearch({ event, target: search, input: searchInput, value: searchInput.value });
    }
  });
  search.addEventListener('click', function(event) {
    if (typeof onClick === 'function') {
      onClick({ event, target: search, input: searchInput, value: searchInput.value });
      return;
    }
    if (enableGlobalSearchModal) {
      event.preventDefault();
      searchInput.blur();
      openHeaderGlobalSearchModal({
        anchor: modalAnchor || search,
        placeholder
      });
    }
  });
  syncSearchTypingState();

  search._inputEl = searchInput;
  return search;
}

function startHeaderContentAlignment(root, center) {
  if (typeof window === 'undefined') return;

  let scope = null;
  let defaultPadding = 0;
  let frame = 0;
  let connectionAttempts = 0;
  let observedTarget = null;
  let transitionUntil = 0;
  let destroyed = false;
  let resizeObserver = null;
  let mutationObserver = null;

  function isVisibleAlignmentTarget(target) {
    if (!target || !target.isConnected) return false;
    const rect = target.getBoundingClientRect();
    const styles = window.getComputedStyle(target);
    return rect.width > 0
      && rect.height > 0
      && styles.display !== 'none'
      && styles.visibility !== 'hidden';
  }

  function findAlignmentTarget() {
    return Array.from(scope.querySelectorAll('[data-nn-header-align]'))
      .find(isVisibleAlignmentTarget) || null;
  }

  function watchTarget(target) {
    if (!resizeObserver || target === observedTarget) return;
    if (observedTarget) resizeObserver.unobserve(observedTarget);
    observedTarget = target;
    if (observedTarget) resizeObserver.observe(observedTarget);
  }

  function measureVisibleChildrenWidth() {
    const children = Array.from(center.children).filter(function(child) {
      const styles = window.getComputedStyle(child);
      return styles.display !== 'none' && child.getBoundingClientRect().width > 0;
    });
    const gap = Number.parseFloat(window.getComputedStyle(center).columnGap) || 0;
    return children.reduce(function(total, child) {
      return total + child.getBoundingClientRect().width;
    }, 0) + Math.max(0, children.length - 1) * gap;
  }

  function alignSearchToContent() {
    frame = 0;
    if (destroyed) return;
    if (!root.isConnected) {
      cleanup();
      return;
    }

    const target = findAlignmentTarget();
    watchTarget(target);
    if (!target) {
      root.style.removeProperty('--nn-header-search-inline-start');
      return;
    }

    const centerRect = center.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (!centerRect.width || !targetRect.width) return;

    const centerStyles = window.getComputedStyle(center);
    const paddingRight = Number.parseFloat(centerStyles.paddingRight) || 0;
    const maximumPadding = Math.max(
      0,
      centerRect.width - paddingRight - measureVisibleChildrenWidth()
    );
    const desiredPadding = Math.round(targetRect.left - centerRect.left);
    const resolvedPadding = Math.min(
      Math.max(defaultPadding, desiredPadding),
      maximumPadding
    );
    const nextPadding = `${resolvedPadding}px`;
    if (root.style.getPropertyValue('--nn-header-search-inline-start') !== nextPadding) {
      root.style.setProperty('--nn-header-search-inline-start', nextPadding);
    }

    if (window.performance.now() < transitionUntil) {
      frame = window.requestAnimationFrame(alignSearchToContent);
    }
  }

  function scheduleAlignment() {
    if (destroyed || frame) return;
    frame = window.requestAnimationFrame(alignSearchToContent);
  }

  function handleTransitionRun(event) {
    if (!['left', 'width', 'transform'].includes(event.propertyName)) return;
    if (
      event.target !== scope
      && !event.target.classList.contains('community-framework__content')
      && !event.target.hasAttribute('data-nn-header-align')
    ) return;
    transitionUntil = window.performance.now() + 1000;
    scheduleAlignment();
  }

  function handleTransitionFinish(event) {
    if (!['left', 'width', 'transform'].includes(event.propertyName)) return;
    if (
      event.target !== scope
      && !event.target.classList.contains('community-framework__content')
      && !event.target.hasAttribute('data-nn-header-align')
    ) return;
    transitionUntil = window.performance.now() + 34;
    scheduleAlignment();
  }

  function cleanup() {
    if (destroyed) return;
    destroyed = true;
    if (frame) window.cancelAnimationFrame(frame);
    if (mutationObserver) mutationObserver.disconnect();
    if (resizeObserver) resizeObserver.disconnect();
    if (scope) {
      scope.removeEventListener('transitionrun', handleTransitionRun, true);
      scope.removeEventListener('transitionend', handleTransitionFinish, true);
      scope.removeEventListener('transitioncancel', handleTransitionFinish, true);
    }
    window.removeEventListener('resize', scheduleAlignment);
  }

  function initializeAlignment() {
    frame = 0;
    if (destroyed) return;
    if (!root.isConnected) {
      connectionAttempts += 1;
      if (connectionAttempts < 120) {
        frame = window.requestAnimationFrame(initializeAlignment);
      }
      return;
    }

    scope = root.closest('.community-framework');
    if (!scope) return;
    defaultPadding = Number.parseFloat(window.getComputedStyle(center).paddingLeft) || 0;
    mutationObserver = new MutationObserver(scheduleAlignment);
    mutationObserver.observe(scope, {
      attributes: true,
      attributeFilter: ['class', 'hidden'],
      childList: true,
      subtree: true
    });
    if (typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(scheduleAlignment);
      resizeObserver.observe(root);
      resizeObserver.observe(scope);
      resizeObserver.observe(center);
    }
    scope.addEventListener('transitionrun', handleTransitionRun, true);
    scope.addEventListener('transitionend', handleTransitionFinish, true);
    scope.addEventListener('transitioncancel', handleTransitionFinish, true);
    window.addEventListener('resize', scheduleAlignment);
    scheduleAlignment();
  }

  root._nnHeaderAlignmentCleanup = cleanup;
  frame = window.requestAnimationFrame(initializeAlignment);
}

function createHeader(options = {}) {
  injectHeaderStyles();

  const {
    variant = 'default',
    width = '100%',
    brandName = 'NN.COM',
    logoSrc = '../image/Header/NN-logo.svg',
    logoLightSrc = '',
    logoDarkSrc = '',
    showBack = true,
    backText = '返回',
    backHref = '',
    onBackClick = null,
    searchPlaceholder = '搜索游戏、社区、用户名称/ID',
    searchKeywords = ['搜索游戏、社区、用户名称/ID'],
    onSearchClick = null,
    enableGlobalSearchModal = true,
    noticeText = '',
    showNoticeDot = false,
    avatarItems = createRandomHeaderAvatarItems(3),
    rightIcons = [
      { label: '消息', icon: '<i class="nnicon nicon-a-Chat-fillliaotian-mianxing"></i>', badge: '9', badgeVariant: 'blue', variant: 'message' },
      { label: '菜单', icon: '<i class="nnicon nicon-a-menu-linecaidan-xianxing"></i>', hoverIcon: '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>', variant: 'more' }
    ],
    showAvatarMore = true,
    avatarMoreLabel = '更多账号',
    showGameReport = true,
    gameReportText = '游戏申报',
    onGameReportClick = null,
    showWindowControls = true,
    className = ''
  } = options;

  if (variant === 'room-header-im') {
    return createRoomHeaderIm(options);
  }

  if (variant === 'room-header-voice') {
    return createRoomHeaderVoice(options);
  }

  if (variant === 'room-header-exclusive-room') {
    return createRoomHeaderExclusiveRoom(options);
  }

  if (variant === 'room-header-community-hall') {
    return createRoomHeaderCommunityHall(options);
  }

  if (variant === 'room-header-under-community') {
    return createRoomHeaderUnderCommunity(options);
  }

  if (variant === 'room-header-play-with') {
    return createRoomHeaderPlayWith(options);
  }

  const root = document.createElement('header');
  root.className = ['nn-header', 'nn-header--default', className].filter(Boolean).join(' ');
  root.style.width = typeof width === 'number' ? `${width}px` : width;

  const left = document.createElement('div');
  left.className = 'nn-header__left';

  const brand = document.createElement('a');
  brand.className = 'nn-header__brand';
  brand.href = '#';

  const resolvedLogoLightSrc = logoLightSrc || logoSrc;
  const resolvedLogoDarkSrc = logoDarkSrc || logoSrc;
  if (resolvedLogoLightSrc === resolvedLogoDarkSrc) {
    brand.classList.add('nn-header__brand--single-logo');
  }

  const brandLogoLight = document.createElement('img');
  brandLogoLight.className = 'nn-header__brand-logo nn-header__brand-logo--light';
  brandLogoLight.src = resolvedLogoLightSrc;
  brandLogoLight.alt = brandName;
  brand.appendChild(brandLogoLight);

  const brandLogoDark = document.createElement('img');
  brandLogoDark.className = 'nn-header__brand-logo nn-header__brand-logo--dark';
  brandLogoDark.src = resolvedLogoDarkSrc;
  brandLogoDark.alt = '';
  brandLogoDark.setAttribute('aria-hidden', 'true');
  brand.appendChild(brandLogoDark);

  left.appendChild(brand);

  if (showBack) {
    left.appendChild(createHeaderBack({
      text: backText,
      href: backHref,
      onClick: onBackClick
    }));
  }

  const center = document.createElement('div');
  center.className = 'nn-header__center';

  const search = createHeaderSearch({
    placeholder: searchPlaceholder,
    readOnly: enableGlobalSearchModal,
    enableGlobalSearchModal,
    modalAnchor: root,
    onClick: onSearchClick,
    showSubmitIcon: true
  });

  center.appendChild(search);

  if (noticeText) {
    const notice = document.createElement('div');
    notice.className = 'nn-header__notice';

    const noticeLabel = document.createElement('span');
    noticeLabel.className = 'nn-header__notice-text';
    noticeLabel.textContent = noticeText;
    notice.appendChild(noticeLabel);

    if (showNoticeDot) {
      const dot = typeof createBadge === 'function'
        ? createBadge({ variant: 'red', dot: true })
        : document.createElement('span');
      if (!dot.classList.contains('nn-badge')) {
        dot.className = 'nn-badge nn-badge-dot-red';
      }
      dot.classList.add('nn-header__dot');
      notice.appendChild(dot);
    }

    center.appendChild(notice);
  }

  const iconItems = Array.isArray(rightIcons) ? rightIcons : [];
  const messageIcon = iconItems.find(function(item) {
    return item && item.variant === 'message';
  });
  const systemIcons = iconItems.filter(function(item) {
    return item && item !== messageIcon;
  });
  const safeAvatarItems = Array.isArray(avatarItems) ? avatarItems : [];

  if (messageIcon || safeAvatarItems.length || showAvatarMore) {
    const imGroup = document.createElement('div');
    imGroup.className = 'nn-header__im';

    if (messageIcon) {
      imGroup.appendChild(createHeaderIconButton(messageIcon));
    }

    if (safeAvatarItems.length) {
      const avatarList = document.createElement('div');
      avatarList.className = 'nn-header__avatar-list';
      safeAvatarItems.forEach(function(item) {
        avatarList.appendChild(createHeaderAvatar(item));
      });
      imGroup.appendChild(avatarList);
    }

    if (showAvatarMore) {
      imGroup.appendChild(createHeaderIconButton({
        label: avatarMoreLabel,
        icon: '<i class="nnicon nicon-a-moregengduo" aria-hidden="true"></i>',
        variant: 'avatar-more'
      }));
    }

    center.appendChild(imGroup);
  }

  const right = document.createElement('div');
  right.className = 'nn-header__right';

  if (showGameReport) {
    right.appendChild(createHeaderGameReportButton({
      text: gameReportText,
      onClick: onGameReportClick
    }));
  }

  systemIcons.forEach(function(item) {
    right.appendChild(createHeaderIconButton(item));
  });

  if (showWindowControls) {
    right.appendChild(createHeaderWindowControls());
  }

  root.appendChild(left);
  root.appendChild(center);
  root.appendChild(right);
  startHeaderContentAlignment(root, center);

  return root;
}

function nnHeader(options) {
  return createHeader(options);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createHeader, createHeaderSearch, createHeaderWindowControls, createRandomHeaderAvatarItems, nnHeader, injectHeaderStyles, openHeaderGlobalSearchModal };
}

if (typeof window !== 'undefined') {
  window.createHeaderSearch = createHeaderSearch;
  window.createHeaderWindowControls = createHeaderWindowControls;
}
