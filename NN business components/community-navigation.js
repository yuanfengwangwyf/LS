const CommunityNavigationStyles = `
  .nn-community-nav {
    display: inline-flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    min-width: 276px;
    padding: var(--space8);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    font-family: var(--font-family-main);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    transition: background-color 0.16s ease;
  }

  .nn-community-nav:hover,
  .nn-community-nav.is-hover {
    background: var(--gray-10);
  }

  .nn-community-nav.is-focused .nn-community-nav__mark,
  .nn-community-nav.is-focused .nn-community-nav__title {
    color: var(--Esports-Blue-LD);
  }

  .nn-community-nav--game.is-selected,
  .nn-community-nav--plugin.is-selected {
    background: var(--gray-9);
  }

  .nn-community-nav--game.is-selected .nn-community-nav__mark,
  .nn-community-nav--game.is-selected .nn-community-nav__title,
  .nn-community-nav--plugin.is-selected .nn-community-nav__mark,
  .nn-community-nav--plugin.is-selected .nn-community-nav__title {
    color: var(--gray-3);
  }

  .nn-community-nav__main {
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    min-width: 0;
  }

  .nn-community-nav--plugin.nn-community-nav--inline-info {
    flex-direction: row;
    justify-content: center;
    min-height: 36px;
  }

  .nn-community-nav--inline-info .nn-community-nav__main {
    gap: var(--space12);
  }

  .nn-community-nav--inline-info .nn-community-nav__content {
    flex: 0 1 auto;
    gap: var(--space4);
    max-width: 300px;
  }

  .nn-community-nav--inline-info .nn-community-nav__mark {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
  }

  .nn-community-nav__content {
    display: flex;
    align-items: center;
    gap: var(--space6);
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-community-nav__mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 24px;
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: 20px;
    line-height: 1;
    transition: color 0.16s ease;
  }

  .nn-community-nav__pugc-label {
    flex: 0 0 auto;
  }

  .nn-community-nav__title {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-community-nav--game.is-selected:hover .nn-community-nav__title,
  .nn-community-nav--game.is-selected.is-hover .nn-community-nav__title,
  .nn-community-nav--game.is-selected:hover .nn-community-nav__mark,
  .nn-community-nav--game.is-selected.is-hover .nn-community-nav__mark,
  .nn-community-nav--plugin.is-selected:hover .nn-community-nav__title,
  .nn-community-nav--plugin.is-selected.is-hover .nn-community-nav__title,
  .nn-community-nav--plugin.is-selected:hover .nn-community-nav__mark,
  .nn-community-nav--plugin.is-selected.is-hover .nn-community-nav__mark {
    color: var(--gray-3);
  }

  .nn-community-nav--game,
  .nn-community-nav--plugin.nn-community-nav--single-line {
    height: 38px;
    padding-top: var(--space0);
    padding-bottom: var(--space0);
    box-sizing: border-box;
    justify-content: center;
  }

  .nn-community-nav__online {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-community-nav__more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: var(--gray-6);
    flex: 0 0 auto;
  }

  .nn-community-nav__settings {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    margin-left: calc(var(--space2) * -1);
    overflow: hidden;
    color: var(--gray-5);
    flex: 0 0 var(--icon-size-x12);
    font-size: var(--icon-size-x8);
    line-height: 1;
    animation: nn-community-nav-settings-enter 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
    transition: color 0.16s ease;
  }

  .nn-community-nav__settings:hover,
  .nn-community-nav__settings.is-hover {
    color: var(--gray-3);
  }

  .nn-community-nav__settings:hover .nnicon,
  .nn-community-nav__settings.is-hover .nnicon,
  .nn-community-nav__settings:hover .nnicon::before,
  .nn-community-nav__settings.is-hover .nnicon::before {
    color: var(--gray-3);
  }

  .nn-community-nav__settings .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  @keyframes nn-community-nav-settings-enter {
    from {
      width: 0;
      flex-basis: 0;
      margin-left: calc(var(--space6) * -1);
      opacity: 0;
    }

    to {
      width: 24px;
      flex-basis: 24px;
      margin-left: calc(var(--space2) * -1);
      opacity: 1;
    }
  }

  .nn-community-nav__info {
    display: flex;
    align-items: flex-start;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    padding-left: var(--space28);
    overflow: hidden;
  }

  .nn-community-nav--inline-info .nn-community-nav__info {
    width: auto;
    max-width: 100%;
    margin-left: auto;
    padding-left: var(--space0);
    flex: 0 1 auto;
    align-items: center;
    justify-content: flex-end;
  }

  .nn-community-nav--inline-info .nn-community-nav__info-viewport {
    flex: 0 1 auto;
    max-width: 100%;
  }

  .nn-community-nav--inline-info .nn-community-nav__info-item {
    justify-content: flex-end;
  }

  .nn-community-nav--inline-info .nn-community-nav__info-text {
    flex: 0 1 auto;
  }

  .nn-community-nav__info--rolling {
    height: 16px;
  }

  .nn-community-nav__info-viewport {
    flex: 1 1 auto;
    min-width: 0;
    height: 16px;
    overflow: hidden;
  }

  .nn-community-nav__info-track {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
    transform: translateY(0);
    transition: transform 360ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  .nn-community-nav__info-item {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    height: 16px;
    flex: 0 0 16px;
  }

  .nn-community-nav__info-item--rank .nn-community-nav__info-text {
    flex: 0 0 auto;
  }

  .nn-community-nav__info-user-level {
    display: block;
    width: auto;
    height: 16px;
    flex: 0 0 auto;
    object-fit: contain;
    pointer-events: none;
  }

  .nn-community-nav__info .nn-avatar,
  .nn-community-nav__avatar-row .nn-avatar {
    flex: 0 0 auto;
  }

  .nn-community-nav__info-text,
  .nn-community-nav__info-action,
  .nn-community-nav__time {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-community-nav__info-text {
    flex: 1 1 auto;
  }

  .nn-community-nav__info-action {
    flex: 0 0 auto;
  }

  .nn-community-nav__time {
    flex: 0 0 auto;
    color: var(--gray-7);
    font-weight: var(--font-weight-normal);
  }

  .nn-community-nav__avatar-row {
    display: flex;
    align-items: center;
    gap: var(--space4);
    flex: 0 0 auto;
    overflow: visible;
  }

  .nn-community-nav__avatar-row .nn-badge {
    flex: 0 0 auto;
  }

  .nn-community-nav__comment-count {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    padding: var(--space2) var(--space0);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-community-nav__comment-icon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-community-nav__level {
    display: flex;
    flex-direction: column;
    gap: var(--space10);
    width: 100%;
    padding-top: var(--space6);
  }

  .nn-community-nav-level {
    display: inline-flex;
    flex-direction: column;
    gap: var(--space6);
    width: 100%;
    min-width: 276px;
    min-height: 47px;
    padding: var(--space6) var(--space8) var(--space12) var(--space6);
    border-radius: var(--border-radius-2r);
    color: var(--gray-6);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-community-nav__progress {
    width: 100%;
    height: 3px;
    overflow: hidden;
    border-radius: var(--border-radius-1r);
    background: var(--gray-9);
  }

  .nn-community-nav__progress-bar {
    display: block;
    width: 0;
    height: 100%;
    border-radius: inherit;
    object-fit: fill;
    transition: width 2400ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: width;
  }

  .nn-community-nav__level-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space8);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .nn-community-nav__level-left,
  .nn-community-nav__level-right {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-community-nav__level-right {
    flex: 0 0 auto;
  }

  .nn-community-nav__level-user-label {
    white-space: nowrap;
  }

  .nn-community-nav__level-badge {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .nn-community-nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
    gap: var(--space24);
    align-items: flex-start;
    width: 100%;
  }

  .nn-community-top-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space24);
    align-items: flex-start;
  }

  .nn-community-combo {
    --community-combo-banner-height: 120px;
    --community-combo-banner-opacity: 1;
    --community-combo-banner-bottom-opacity: 1;
    --community-combo-banner-menu-opacity: 1;
    --community-combo-game-sticky-height: 50px;
    position: relative;
    display: inline-flex;
    width: 296px;
    min-width: 296px;
    max-height: 720px;
    padding-left: var(--space4);
    padding-right: var(--space16);
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  .nn-community-combo__scroller {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    min-width: 276px;
    max-height: 720px;
    overflow-x: hidden;
    overflow-y: auto;
    align-items: flex-start;
    scrollbar-width: none;
  }

  .nn-community-combo__scroller::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .nn-community-combo__top {
    position: sticky;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 120px;
    min-height: 0;
    overflow: hidden;
    flex: 0 0 120px;
    clip-path: inset(0 0 calc(120px - var(--community-combo-banner-height)) 0);
  }

  .nn-community-combo__top .nn-community-top-banner {
    height: 120px;
    min-height: 120px;
    overflow: hidden;
  }

  .nn-community-combo__top .nn-community-top-banner__image {
    top: 0;
    bottom: auto;
    height: 120px;
    opacity: var(--community-combo-banner-opacity);
    transition: none;
  }

  .nn-community-combo__top .nn-community-top-banner__bottom {
    opacity: var(--community-combo-banner-bottom-opacity);
    transition: none;
  }

  .nn-community-combo__top .nn-community-top-banner__menu {
    opacity: var(--community-combo-banner-menu-opacity);
    transition: none;
  }

  .nn-community-combo__game {
    position: sticky;
    top: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: var(--space2);
    background: var(--gray-1);
    box-sizing: border-box;
  }

  .nn-community-combo[data-community-type="game"] > .nn-community-combo__scroller > .nn-community-combo__game {
    margin-top: var(--space8);
  }

  .nn-community-combo__game .nn-community-nav__settings {
    height: 16px;
    width: 0;
    flex-basis: 0;
    margin-left: calc(var(--space6) * -1);
    opacity: 0;
    animation: none;
    transition:
      width 640ms cubic-bezier(0.16, 1, 0.3, 1),
      flex-basis 640ms cubic-bezier(0.16, 1, 0.3, 1),
      margin-left 640ms cubic-bezier(0.16, 1, 0.3, 1),
      opacity 260ms ease;
  }

  .nn-community-combo__game.is-settings-visible .nn-community-nav__settings {
    width: 16px;
    flex-basis: 16px;
    margin-left: var(--space0);
    opacity: 1;
  }

  .nn-community-combo__level {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: var(--space8);
    flex: 0 0 auto;
  }

  .nn-community-combo__plugins {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    min-width: 276px;
    margin-top: var(--space2);
    align-items: stretch;
  }

  .nn-community-combo__plugins--after-sift {
    margin-top: var(--space0);
  }

  .nn-community-combo__sift {
    position: sticky;
    top: var(--community-combo-game-sticky-height);
    z-index: 3;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    flex: 0 0 56px;
    background: var(--gray-1);
    box-sizing: border-box;
  }

  .nn-community-combo__rooms {
    width: 100%;
    padding-top: var(--space8);
  }

  .nn-community-combo__rooms .nn-community-room-grid {
    gap: var(--space2);
  }

  .nn-community-combo__banner-spacer {
    width: 100%;
    height: 0;
    flex: 0 0 0;
  }

  .nn-community-top-banner {
    position: relative;
    display: inline-flex;
    width: 100%;
    min-width: 276px;
    height: 120px;
    padding: var(--space0);
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: #fff;
    font-family: var(--font-family-main);
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .nn-community-top-banner__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-community-top-banner__mask {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 40px;
    background: var(--Black-A40);
    opacity: 0;
    transition: opacity 0.16s ease;
  }

  .nn-community-top-banner:hover .nn-community-top-banner__mask,
  .nn-community-top-banner.is-hover .nn-community-top-banner__mask {
    opacity: 1;
  }

  .nn-community-top-banner__menu {
    position: absolute;
    top: 8px;
    right: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--White-A90);
    font-size: 16px;
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-community-top-banner__menu::before {
    display: none;
  }

  .nn-community-top-banner__menu::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--border-radius-2r);
    background: var(--Black-A40);
    opacity: 1;
    transition: opacity 0.16s ease;
  }

  .nn-community-top-banner__menu .nnicon {
    position: relative;
    z-index: 1;
  }

  .nn-community-top-banner:hover .nn-community-top-banner__menu,
  .nn-community-top-banner.is-hover .nn-community-top-banner__menu {
    color: var(--White-A90);
  }

  .nn-community-top-banner:hover .nn-community-top-banner__menu::before,
  .nn-community-top-banner.is-hover .nn-community-top-banner__menu::before {
    opacity: 0;
  }

  .nn-community-top-banner:hover .nn-community-top-banner__menu::after,
  .nn-community-top-banner.is-hover .nn-community-top-banner__menu::after {
    opacity: 0;
  }

  .nn-community-top-banner__bottom {
    position: absolute;
    right: 8px;
    bottom: 8px;
    left: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-community-top-banner__left,
  .nn-community-top-banner__online {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-community-top-banner__official {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 20px;
    min-width: 0;
    padding: var(--space2) var(--space4) var(--space2) var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--Black-A40);
    color: var(--White-A90);
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
    white-space: nowrap;
    overflow: visible;
    box-sizing: border-box;
  }

  .nn-community-top-banner__official--composite {
    gap: var(--space4);
    padding: var(--space0);
    background: transparent;
  }

  .nn-community-top-banner__official--composite .nn-equity--overlay {
    background: var(--Black-A80);
  }

  .nn-community-top-banner__official--icon-only {
    padding: var(--space0);
    background: transparent;
  }

  .nn-community-top-banner:hover .nn-community-top-banner__official--composite,
  .nn-community-top-banner.is-hover .nn-community-top-banner__official--composite,
  .nn-community-top-banner:hover .nn-community-top-banner__official--icon-only,
  .nn-community-top-banner.is-hover .nn-community-top-banner__official--icon-only {
    background: transparent;
  }

  .nn-community-top-banner__verify {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    display: block;
    flex: 0 0 auto;
    object-fit: contain;
  }

  .nn-community-top-banner__online {
    height: 20px;
    padding: var(--space2) var(--space4) var(--space2) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--Black-A40);
    color: var(--White-A90);
    flex: 0 0 auto;
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .nn-community-top-banner__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--Green);
    flex: 0 0 auto;
  }

  .nn-community-room-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    min-width: 276px;
    align-items: stretch;
  }

  .nn-community-room {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    min-width: 276px;
    height: 54px;
    flex: 0 0 54px;
    max-height: 54px;
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    transition: background-color 0.16s ease, color 0.16s ease;
  }

  .nn-community-room:hover,
  .nn-community-room.is-hover {
    background: var(--gray-10);
  }

  .nn-community-room.is-focused {
    color: var(--Esports-Blue-LD);
  }

  .nn-community-room.is-selected {
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .nn-community-room__top {
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    height: 26px;
    min-width: 0;
    padding: var(--space4) var(--space8) var(--space2);
    flex: 0 0 26px;
    box-sizing: border-box;
  }

  .nn-community-room__index {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-community-room.is-focused .nn-community-room__index {
    background: var(--Esports-Blue-LD);
    color: var(--White-A90);
  }

  .nn-community-room.is-selected .nn-community-room__index {
    background: var(--gray-4);
    color: var(--gray-1);
  }

  .nn-community-room__title {
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    color: currentColor;
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-community-room:hover .nn-community-room__title.has-overflow,
  .nn-community-room.is-hover .nn-community-room__title.has-overflow {
    text-overflow: clip;
    color: transparent;
  }

  .nn-community-room:hover .nn-community-room__title.has-overflow::before,
  .nn-community-room.is-hover .nn-community-room__title.has-overflow::before {
    content: attr(data-visible-title);
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    text-overflow: clip;
    white-space: nowrap;
  }

  .nn-community-room.is-selected:hover .nn-community-room__title.has-overflow::before,
  .nn-community-room.is-selected.is-hover .nn-community-room__title.has-overflow::before {
    color: var(--gray-3);
  }

  .nn-community-room__status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-6);
    flex: 0 0 auto;
    font-weight: var(--font-weight-normal);
  }

  .nn-community-room__status--count {
    width: 46px;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
  }

  .nn-community-room__status-current,
  .nn-community-room__status-total {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  .nn-community-room__status-divider {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6px;
    height: 12px;
    color: var(--gray-7);
  }

  .nn-community-room__status--full,
  .nn-community-room__status--lock {
    gap: var(--space2);
    min-width: 34px;
    padding: var(--space2);
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    font-size: 12px;
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-community-room__status-icon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-community-room__top-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: var(--icon-size-x9);
    line-height: var(--icon-size-x9);
  }

  .nn-community-room__bottom {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    height: 28px;
    min-width: 0;
    padding: var(--space4) var(--space8) var(--space6) var(--space32);
    flex: 0 0 28px;
    box-sizing: border-box;
  }

  .nn-community-room__overflow-title {
    position: absolute;
    left: var(--community-room-title-offset, 34px);
    top: 4px;
    display: inline-flex;
    min-width: 0;
    max-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    opacity: 0;
    align-items: center;
    flex: 0 0 auto;
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    height: 18px;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    transition: max-width 320ms cubic-bezier(0.16, 1, 0.3, 1), opacity 180ms ease;
  }

  .nn-community-room:hover .nn-community-room__overflow-title:not(:empty),
  .nn-community-room.is-hover .nn-community-room__overflow-title:not(:empty) {
    max-width: var(--community-room-overflow-width, 0px);
    opacity: 1;
  }

  .nn-community-room__avatars,
  .nn-community-room__empty {
    transform: translateX(0);
    transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-community-room__avatars {
    display: flex;
    align-items: flex-start;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-community-room:hover .nn-community-room__overflow-title:not(:empty) ~ .nn-community-room__avatars,
  .nn-community-room.is-hover .nn-community-room__overflow-title:not(:empty) ~ .nn-community-room__avatars,
  .nn-community-room:hover .nn-community-room__overflow-title:not(:empty) ~ .nn-community-room__empty,
  .nn-community-room.is-hover .nn-community-room__overflow-title:not(:empty) ~ .nn-community-room__empty {
    transform: translateX(calc(var(--community-room-overflow-width, 0px) + var(--community-room-title-offset, 34px) - 30px));
  }

  .nn-community-room__avatars .nn-avatar {
    flex: 0 0 auto;
  }

  .nn-community-room__more-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding: var(--space2) var(--space4);
    border-radius: 99px;
    background: var(--gray-10);
    color: var(--gray-6);
    flex: 0 0 auto;
    font-size: 10px;
    font-weight: var(--font-weight-normal);
    line-height: 12px;
    box-sizing: border-box;
  }

  .nn-community-room__team {
    position: absolute;
    right: 8px;
    top: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    color: var(--Esports-Blue-LD);
    font-size: 18px;
    line-height: 18px;
  }

  .nn-community-room__empty {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 18px;
    border-radius: 4px;
    background: var(--gray-10);
    color: var(--gray-7);
    font-size: 14px;
    line-height: 14px;
  }

  .nn-community-sift {
    display: inline-flex;
    align-items: flex-start;
    gap: var(--space8);
    width: 100%;
    min-width: 276px;
    padding: var(--space0);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-community-sift__button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    height: 40px;
    min-height: 40px;
    border: 0;
    border-radius: var(--border-radius-2r);
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    box-sizing: border-box;
    font-family: var(--font-family-main);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
    transition: background-color 0.16s ease, color 0.16s ease, border-color 0.16s ease;
  }

  .nn-community-sift__button--primary {
    flex: 1 1 auto;
    min-width: 96px;
    padding: var(--space0) var(--space16);
    background: var(--gray-3);
    color: var(--gray-1);
  }

  .nn-community-sift__button--primary:hover {
    background: var(--gray-4);
  }

  .nn-community-sift__button--secondary {
    flex: 0 0 72px;
    width: 72px;
    padding: var(--space0) var(--space8);
    border: 1px solid var(--gray-9);
    background: var(--gray-9);
    color: var(--gray-4);
  }

  .nn-community-sift__button--secondary:hover {
    background: var(--gray-8);
    border-color: var(--gray-8);
  }

  .nn-community-sift__icon {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 auto;
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-community-sift__text {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .nn-community-sift__button--secondary .nn-community-sift__icon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .nn-community-sift__filter-wrap,
  .nn-community-sift__refresh-wrap {
    position: relative;
    flex: 0 0 auto;
  }

  .nn-community-sift__refresh-icon {
    transform-origin: center;
  }

  .nn-community-sift__refresh-icon.is-spinning {
    animation: nn-community-sift-refresh-spin 720ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes nn-community-sift-refresh-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .nn-community-sift__badge-wrap {
    position: absolute;
    right: -5px;
    top: -7px;
    display: inline-flex;
  }

  .nn-community-sift__new-wrap {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-flex;
  }

  .nn-community-sift__badge {
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    padding: var(--space0) var(--space4);
    border-radius: 10px;
    background: var(--basecolor-red, #da3639);
    color: #fff;
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-community-sift__new-wrap .nn-badge-new {
    pointer-events: none;
  }
`;

function injectCommunityNavigationStyles() {
  if (document.getElementById('nn-community-navigation-styles')) return;

  const style = document.createElement('style');
  style.id = 'nn-community-navigation-styles';
  style.textContent = CommunityNavigationStyles;
  document.head.appendChild(style);
}

function getRequiredBasicComponent(name) {
  if (typeof window !== 'undefined' && typeof window[name] === 'function') {
    return window[name];
  }

  throw new Error(`Community Navigation requires basic component ${name}.`);
}

function resolveCommunityNavActiveIcon(icon, activeIcon) {
  if (activeIcon) return activeIcon;

  const activeIconMap = {
    'nicon-a-Lounge-Linexianliaodating-xianxing': 'nicon-a-GossipHall-fillxianliaodating-mianxing'
  };

  return activeIconMap[icon] || icon;
}

function resolveCommunityCertificationColor(src = '', fallback = 'blue') {
  const normalizedFallback = ['blue', 'orange', 'red'].includes(String(fallback).toLowerCase())
    ? String(fallback).toLowerCase()
    : 'blue';
  const source = String(src || '').toLowerCase();
  if (source.includes('corporate') || source.includes('企业')) return 'red';
  return normalizedFallback;
}

function createCommunityCertificationLabel(options = {}) {
  const {
    officialSrc = '../image/Community Level/Official Certification.svg',
    officialCertColor = 'blue',
    officialTooltip = ''
  } = options;

  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    const certColor = resolveCommunityCertificationColor(officialSrc, officialCertColor);
    return window.createLabel({
      type: 'certification',
      certColor,
      certIconSrc: certColor === 'red' && officialSrc === '../image/Community Level/Official Certification.svg'
        ? ''
        : officialSrc,
      certTooltip: officialTooltip
    });
  }

  const fallback = document.createElement('img');
  fallback.className = 'nn-community-top-banner__verify';
  fallback.src = officialSrc;
  fallback.alt = '';
  return fallback;
}

function createCommunityTopBanner(options = {}) {
  injectCommunityNavigationStyles();

  const {
    state = 'default',
    imageSrc = '../image/Game logo/game1-cover.webp',
    officialText = '',
    officialSrc = '../image/Community Level/Official Certification.svg',
    officialCertColor = 'blue',
    officialTooltip = '',
    communityLevel = null,
    communityId = '',
    onlineText = '18.5K',
    showOfficial = true,
    showOnline = true,
    showMenu = true,
    className = ''
  } = options;
  const root = document.createElement('button');
  root.type = 'button';
  root.className = [
    'nn-community-top-banner',
    state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');

  const image = document.createElement('img');
  image.className = 'nn-community-top-banner__image';
  image.src = imageSrc;
  image.alt = '';
  root.appendChild(image);

  const mask = document.createElement('span');
  mask.className = 'nn-community-top-banner__mask';
  root.appendChild(mask);

  if (showMenu) {
    const menu = document.createElement('span');
    menu.className = 'nn-community-top-banner__menu';
    menu.innerHTML = '<i class="nnicon nicon-a-menu-linecaidan-xianxing"></i>';
    menu.setAttribute('aria-hidden', 'true');
    root.appendChild(menu);
  }

  const bottom = document.createElement('span');
  bottom.className = 'nn-community-top-banner__bottom';

  const left = document.createElement('span');
  left.className = 'nn-community-top-banner__left';
  if (showOfficial) {
    const official = document.createElement('span');
    const isOfficialIconOnly = !communityLevel && !communityId && !officialText;
    official.className = [
      'nn-community-top-banner__official',
      communityLevel || communityId ? 'nn-community-top-banner__official--composite' : '',
      isOfficialIconOnly ? 'nn-community-top-banner__official--icon-only' : ''
    ].filter(Boolean).join(' ');
    official.appendChild(createCommunityCertificationLabel({
      officialSrc,
      officialCertColor,
      officialTooltip
    }));
    if (communityLevel && typeof window.createEquityCommunityLevel === 'function') {
      official.appendChild(window.createEquityCommunityLevel(communityLevel));
    }
    if (communityId && typeof window.createEquity === 'function') {
      official.appendChild(window.createEquity({
        text: communityId,
        size: 'small',
        variant: 'overlay'
      }));
    }
    if (!communityLevel && !communityId && officialText) {
      const officialLabel = document.createElement('span');
      officialLabel.textContent = officialText;
      official.appendChild(officialLabel);
    }
    left.appendChild(official);
  }
  bottom.appendChild(left);

  if (showOnline) {
    const online = document.createElement('span');
    online.className = 'nn-community-top-banner__online';
    online.innerHTML = `<span class="nn-community-top-banner__dot"></span><span>${onlineText}</span>`;
    bottom.appendChild(online);
  }
  root.appendChild(bottom);

  return root;
}

function createCommunityNavigationItem(options = {}) {
  injectCommunityNavigationStyles();
  const createAvatar = getRequiredBasicComponent('createAvatar');
  const createBadge = getRequiredBasicComponent('createBadge');

  const {
    type = 'plugin',
    state = 'default',
    selected = false,
    title = type === 'game' ? '首页' : 'Plug-in unit',
    info = 'Community Notice Description',
    showInfo = true,
    inlineInfo = Array.isArray(options.infoItems) && options.infoItems.length > 0,
    showBadge = true,
    badge = '12',
    showCommentCount = false,
    commentCount = 12,
    showMore = false,
    showSettings = false,
    showOnline = false,
    onlineText = '18.5K',
    showAvatar = true,
    infoItems = null,
    showAvatarGroup = false,
    avatarSrc = '../image/Avatar/default.png',
    gameIconSrc = '',
    pugcLabel = '',
    pugcLabelColor = '',
    icon = type === 'game' ? 'nicon-a-Communityhalls-Lineshequshouye-xianxing' : 'nicon-a-Lounge-Linexianliaodating-xianxing',
    activeIcon = '',
    avatars = [
      '../image/Avatar/头像10.png',
      '../image/Avatar/头像311.png',
      '../image/Avatar/头像441.png',
      '../image/Avatar/头像480.png'
    ],
    className = '',
    onClick = null
  } = options;
  const resolvedActiveIcon = resolveCommunityNavActiveIcon(icon, activeIcon);

  const root = document.createElement('button');
  root.type = 'button';
  root.className = [
    'nn-community-nav',
    `nn-community-nav--${type}`,
    type === 'plugin' && !showInfo ? 'nn-community-nav--single-line' : '',
    type === 'plugin' && showInfo && inlineInfo ? 'nn-community-nav--inline-info' : '',
    state === 'hover' ? 'is-hover' : '',
    state === 'focused' ? 'is-focused' : '',
    selected ? 'is-selected' : '',
    className
  ].filter(Boolean).join(' ');

  root.addEventListener('click', function(event) {
    const group = root.closest('.nn-community-nav-grid, .nn-community-combo__plugins');
    if (group) {
      group.querySelectorAll('.nn-community-nav.is-selected').forEach(function(item) {
        item.classList.remove('is-selected');
        const iconEl = item.querySelector('[data-default-icon][data-active-icon]');
        if (iconEl) {
          iconEl.className = `nn-community-nav__mark nnicon ${iconEl.dataset.defaultIcon}`;
        }
      });
    }
    root.classList.add('is-selected');
    const iconEl = root.querySelector('[data-default-icon][data-active-icon]');
    if (iconEl) {
      iconEl.className = `nn-community-nav__mark nnicon ${iconEl.dataset.activeIcon}`;
    }
    if (typeof onClick === 'function') onClick(event, root);
  });

  const main = document.createElement('div');
  main.className = 'nn-community-nav__main';

  const content = document.createElement('div');
  content.className = 'nn-community-nav__content';

  if (type === 'plugin' && pugcLabel && typeof window !== 'undefined' && typeof window.createPugcListLabel === 'function') {
    const labelEl = window.createPugcListLabel({
      label: pugcLabel,
      labelColor: pugcLabelColor
    });
    labelEl.classList.add('nn-community-nav__pugc-label');
    content.appendChild(labelEl);
  } else if (type === 'game' && gameIconSrc) {
    content.appendChild(createAvatar({
      src: gameIconSrc,
      size: 24
    }));
  } else {
    const mark = document.createElement('i');
    const isActive = selected || state === 'focused';
    mark.className = `nn-community-nav__mark nnicon ${isActive ? resolvedActiveIcon : icon}`;
    mark.dataset.defaultIcon = icon;
    mark.dataset.activeIcon = resolvedActiveIcon;
    mark.setAttribute('aria-hidden', 'true');
    content.appendChild(mark);
  }

  if (showOnline) {
    const online = document.createElement('span');
    online.className = 'nn-community-nav__online';
    online.appendChild(createBadge({
      dot: true,
      variant: 'on',
      size: 8
    }));
    const onlineLabel = document.createElement('span');
    onlineLabel.textContent = onlineText;
    online.appendChild(onlineLabel);
    content.appendChild(online);
  }

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-community-nav__title';
  titleEl.textContent = title;
  content.appendChild(titleEl);

  main.appendChild(content);

  if (showAvatarGroup) {
    const row = document.createElement('div');
    row.className = 'nn-community-nav__avatar-row';
    avatars.slice(0, 3).forEach(function(src) {
      row.appendChild(createAvatar({
        src,
        size: 16
      }));
    });

    row.appendChild(createBadge({
      text: '99+',
      variant: 'red'
    }));
    main.appendChild(row);
  }

  if (showBadge) {
    main.appendChild(createBadge({
      text: badge,
      variant: 'red'
    }));
  }

  if (showCommentCount) {
    const comment = document.createElement('span');
    comment.className = 'nn-community-nav__comment-count';
    comment.innerHTML = `<i class="nn-community-nav__comment-icon nnicon nicon-a-Commenton-linepinglun-xianxing"></i><span>${commentCount}</span>`;
    main.appendChild(comment);
  }

  if (showSettings) {
    const settings = document.createElement('span');
    settings.className = 'nn-community-nav__settings';
    settings.innerHTML = '<i class="nnicon nicon-a-menu-linecaidan-xianxing"></i>';
    settings.setAttribute('aria-hidden', 'true');
    main.appendChild(settings);
  }

  if (showMore) {
    const more = document.createElement('span');
    more.className = 'nn-community-nav__more';
    more.innerHTML = '<i class="nnicon nicon-a-More-linegengduo-xianxing"></i>';
    main.appendChild(more);
  }

  root.appendChild(main);

  if (showInfo) {
    const infoRow = document.createElement('div');
    infoRow.className = 'nn-community-nav__info';
    const rollingItems = Array.isArray(infoItems) ? infoItems.filter(Boolean) : [];

    if (rollingItems.length > 0) {
      infoRow.className += ' nn-community-nav__info--rolling';
      const viewport = document.createElement('span');
      viewport.className = 'nn-community-nav__info-viewport';
      const track = document.createElement('span');
      track.className = 'nn-community-nav__info-track';
      const itemsForRender = rollingItems.length > 1 ? rollingItems.concat(rollingItems[0]) : rollingItems;

      itemsForRender.forEach(function(item) {
        const normalized = typeof item === 'string' ? { text: item } : item;
        const row = document.createElement('span');
        row.className = 'nn-community-nav__info-item';
        if (normalized.rank && typeof window.createEquityRank === 'function') {
          row.className += ' nn-community-nav__info-item--rank';
        }
        if (type !== 'plugin' && normalized.showAvatar !== false) {
          row.appendChild(createAvatar({
            src: normalized.avatarSrc || avatarSrc,
            size: 16
          }));
        }
        if (type === 'plugin') {
          const text = document.createElement('span');
          text.className = 'nn-community-nav__info-text';
          text.textContent = normalized.nickname || normalized.text || info;
          row.appendChild(text);

          if (normalized.actionText) {
            const action = document.createElement('span');
            action.className = 'nn-community-nav__info-action';
            action.textContent = normalized.actionText;
            row.appendChild(action);
          }

          if (normalized.time) {
            const time = document.createElement('span');
            time.className = 'nn-community-nav__time';
            time.textContent = normalized.time;
            row.appendChild(time);
          }
        } else if (normalized.rank && typeof window.createEquityRank === 'function') {
          const nickname = document.createElement('span');
          nickname.className = 'nn-community-nav__info-text';
          nickname.textContent = normalized.nickname || '昵称';
          row.appendChild(nickname);

          row.appendChild(window.createEquityRank(Object.assign({
            size: 'small'
          }, normalized.rank)));

          if (normalized.userLevel) {
            const userLevel = document.createElement('img');
            const userLevelValue = typeof normalized.userLevel === 'object'
              ? normalized.userLevel.lv
              : normalized.userLevel;
            const userLevelSrc = typeof normalized.userLevel === 'object'
              ? normalized.userLevel.src
              : '';
            userLevel.className = 'nn-community-nav__info-user-level';
            userLevel.src = userLevelSrc || `../image/User Level/Digital badge/ULVN${userLevelValue || 60}.svg`;
            userLevel.alt = '';
            row.appendChild(userLevel);
          }

          const action = document.createElement('span');
          action.className = 'nn-community-nav__info-text';
          action.textContent = normalized.actionText || '吃鸡了！';
          row.appendChild(action);
        } else {
          const text = document.createElement('span');
          text.className = 'nn-community-nav__info-text';
          text.textContent = normalized.text || info;
          row.appendChild(text);
        }
        track.appendChild(row);
      });

      viewport.appendChild(track);
      infoRow.appendChild(viewport);

      if (rollingItems.length > 1) {
        let activeIndex = 0;
        const rollingStep = 20;
        window.setInterval(function() {
          activeIndex += 1;
          track.style.transition = 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1)';
          track.style.transform = `translateY(-${activeIndex * rollingStep}px)`;

          if (activeIndex === rollingItems.length) {
            window.setTimeout(function() {
              track.style.transition = 'none';
              track.style.transform = 'translateY(0)';
              activeIndex = 0;
            }, 380);
          }
        }, 2400);
      }
    } else {
      if (type !== 'plugin' && showAvatar) {
        infoRow.appendChild(createAvatar({
          src: avatarSrc,
          size: 16
        }));
      }

      const infoText = document.createElement('span');
      infoText.className = 'nn-community-nav__info-text';
      infoText.textContent = info;
      infoRow.appendChild(infoText);
    }

    if (type === 'plugin' && inlineInfo) {
      main.insertBefore(infoRow, content.nextSibling);
    } else {
      root.appendChild(infoRow);
    }
  }

  return root;
}

function createCommunityNavigationLevel(options = {}) {
  injectCommunityNavigationStyles();
  const createEquityCommunityLevel = getRequiredBasicComponent('createEquityCommunityLevel');
  const createEquityMemberLevel = getRequiredBasicComponent('createEquityMemberLevel');

  const {
    progress = 0.788,
    progressAssetSrc = '../image/Community Level/lv6-progress.svg',
    communityLevelLabel = '社区等级',
    communityLevel = { lv: 6, size: 'compact' },
    userLevelLabel = '我的等级',
    userLevel = { lv: 13 }
  } = options;

  const level = document.createElement('div');
  level.className = 'nn-community-nav-level';
  level.innerHTML = `
    <div class="nn-community-nav__progress"><img class="nn-community-nav__progress-bar" alt=""></div>
    <div class="nn-community-nav__level-meta">
      <span class="nn-community-nav__level-left"><span class="nn-community-nav__level-community-label"></span><span class="nn-community-nav__level-badge nn-community-nav__level-community-badge"></span></span>
      <span class="nn-community-nav__level-right"><span class="nn-community-nav__level-user-label"></span><span class="nn-community-nav__level-badge nn-community-nav__level-user-badge"></span></span>
    </div>
  `;

  const progressBar = level.querySelector('.nn-community-nav__progress-bar');
  const communityLevelLabelEl = level.querySelector('.nn-community-nav__level-community-label');
  const communityLevelBadge = level.querySelector('.nn-community-nav__level-community-badge');
  const userLevelLabelEl = level.querySelector('.nn-community-nav__level-user-label');
  const userLevelBadge = level.querySelector('.nn-community-nav__level-user-badge');
  const progressValue = Math.max(0, Math.min(1, progress));
  progressBar.src = progressAssetSrc;
  communityLevelLabelEl.textContent = communityLevelLabel;
  if (communityLevel) communityLevelBadge.appendChild(createEquityCommunityLevel(communityLevel));
  userLevelLabelEl.textContent = userLevelLabel;
  if (userLevel) userLevelBadge.appendChild(createEquityMemberLevel(userLevel));
  progressBar.style.width = '0%';
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      progressBar.style.width = `${progressValue * 100}%`;
    });
  });

  return level;
}

function createCommunityRoomStatus(options = {}) {
  const {
    state = 'default',
    current = 5,
    total = 10
  } = options;

  const status = document.createElement('span');
  status.className = `nn-community-room__status nn-community-room__status--${state}`;

  if (state === 'full' || state === 'lock') {
    const icon = document.createElement('i');
    icon.className = `nn-community-room__status-icon nnicon ${state === 'lock' ? 'nicon-a-lock-linesuo-xianxing' : 'nicon-a-exclusion-linejinzhijiaru-xianxing'}`;
    icon.setAttribute('aria-hidden', 'true');
    status.appendChild(icon);

    const text = document.createElement('span');
    text.textContent = state === 'lock' ? '已锁' : '已满';
    status.appendChild(text);
    return status;
  }

  const currentEl = document.createElement('span');
  currentEl.className = 'nn-community-room__status-current';
  currentEl.textContent = current;
  status.appendChild(currentEl);

  const divider = document.createElement('span');
  divider.className = 'nn-community-room__status-divider';
  divider.textContent = '/';
  status.appendChild(divider);

  const totalEl = document.createElement('span');
  totalEl.className = 'nn-community-room__status-total';
  totalEl.textContent = total;
  status.appendChild(totalEl);

  return status;
}

function resolveCommunityRoomCurrent(options = {}) {
  const {
    showAvatarGroup = true,
    showEmpty = false,
    avatars = [],
    moreCount = '',
    total = 10,
    maxAvatarCount = 9
  } = options;

  if (showEmpty || !showAvatarGroup) return 0;

  const visibleCount = Array.isArray(avatars) ? avatars.length : 0;
  return Math.min(total, visibleCount);
}

function createCommunityRoom(options = {}) {
  injectCommunityNavigationStyles();
  const createAvatar = getRequiredBasicComponent('createAvatar');

  const {
    type = 'default',
    state = 'default',
    index = '1',
    title = '亚服1=1找个固定的女搭子速来秒上车',
    status = 'default',
    total = 10,
    showAvatarGroup = true,
    showTeam = true,
    showEmpty = false,
    avatars = [
      '../image/Avatar/头像480.png',
      '../image/Avatar/头像441.png',
      '../image/Avatar/头像496.png',
      '../image/Avatar/头像655.png'
    ],
    moreCount = '5+',
    maxAvatarCount = 9
  } = options;
  const current = resolveCommunityRoomCurrent({
    showAvatarGroup,
    showEmpty,
    avatars,
    moreCount,
    total,
    maxAvatarCount
  });

  const root = document.createElement('button');
  root.type = 'button';
  root.className = [
    'nn-community-room',
    type === 'interactive' ? 'nn-community-room--interactive' : '',
    state === 'hover' ? 'is-hover' : '',
    state === 'focused' ? 'is-focused' : '',
    state === 'selected' ? 'is-selected' : ''
  ].filter(Boolean).join(' ');

  root.addEventListener('click', function() {
    const group = root.closest('.nn-community-room-grid');
    if (group) {
      group.querySelectorAll('.nn-community-room.is-selected').forEach(function(item) {
        item.classList.remove('is-selected');
      });
    }
    root.classList.add('is-selected');
  });

  const top = document.createElement('div');
  top.className = 'nn-community-room__top';

  const indexEl = document.createElement('span');
  indexEl.className = 'nn-community-room__index';
  indexEl.textContent = index;
  top.appendChild(indexEl);

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-community-room__title';
  titleEl.textContent = title;
  top.appendChild(titleEl);

  if (type === 'interactive') {
    const mic = document.createElement('span');
    mic.className = 'nn-community-room__top-icon';
    mic.innerHTML = '<i class="nnicon nicon-a-ConnectMiclianmai-xianxing"></i>';
    mic.setAttribute('aria-hidden', 'true');
    top.appendChild(mic);
  } else {
    top.appendChild(createCommunityRoomStatus({ state: status, current, total }));
  }
  root.appendChild(top);

  const bottom = document.createElement('div');
  bottom.className = 'nn-community-room__bottom';

  const overflowTitle = document.createElement('span');
  overflowTitle.className = 'nn-community-room__overflow-title';
  bottom.appendChild(overflowTitle);

  if (showEmpty) {
    const empty = document.createElement('span');
    empty.className = 'nn-community-room__empty';
    empty.textContent = '+';
    bottom.appendChild(empty);
  }

  if (showAvatarGroup) {
    const avatarRow = document.createElement('span');
    avatarRow.className = 'nn-community-room__avatars';
    const visibleAvatars = avatars.slice(0, maxAvatarCount);
    visibleAvatars.forEach(function(src) {
      avatarRow.appendChild(createAvatar({ src, size: 18 }));
    });
    if (avatars.length > maxAvatarCount) {
      const more = document.createElement('span');
      more.className = 'nn-community-room__more-count';
      more.textContent = moreCount || `${avatars.length - maxAvatarCount}+`;
      avatarRow.appendChild(more);
    }
    bottom.appendChild(avatarRow);
  }

  if (showTeam && !showEmpty) {
    const team = document.createElement('span');
    team.className = 'nn-community-room__team';
    team.innerHTML = '<i class="nnicon nicon-a-Multiplayer2-Linezudui2-xianxing"></i>';
    team.setAttribute('aria-hidden', 'true');
    bottom.appendChild(team);
  }

  root.appendChild(bottom);
  requestAnimationFrame(function() {
    const rootRect = root.getBoundingClientRect();
    const titleRect = titleEl.getBoundingClientRect();
    const titleStyle = getComputedStyle(titleEl);
    const measure = document.createElement('span');
    measure.style.position = 'fixed';
    measure.style.left = '-9999px';
    measure.style.top = '-9999px';
    measure.style.visibility = 'hidden';
    measure.style.whiteSpace = 'nowrap';
    measure.style.fontFamily = titleStyle.fontFamily;
    measure.style.fontSize = titleStyle.fontSize;
    measure.style.fontWeight = titleStyle.fontWeight;
    measure.style.letterSpacing = titleStyle.letterSpacing;
    document.body.appendChild(measure);

    let visibleLength = title.length;
    for (let i = 1; i <= title.length; i += 1) {
      measure.textContent = title.slice(0, i);
      if (measure.offsetWidth > titleEl.clientWidth) {
        visibleLength = Math.max(0, i - 2);
        break;
      }
    }

    measure.remove();
    const visibleText = title.slice(0, visibleLength);
    const overflowText = title.slice(visibleLength).trim();
    if (overflowText) {
      titleEl.dataset.fullTitle = title;
      titleEl.dataset.visibleTitle = visibleText;
      titleEl.className += ' has-overflow';
    }
    overflowTitle.textContent = overflowText;

    measure.textContent = overflowText;
    document.body.appendChild(measure);
    root.style.setProperty('--community-room-title-offset', `${Math.max(0, titleRect.left - rootRect.left)}px`);
    root.style.setProperty('--community-room-overflow-width', `${measure.offsetWidth}px`);
    measure.remove();
  });
  return root;
}

function createCommunityRooms(options = {}) {
  const container = document.createElement('div');
  container.className = 'nn-community-room-grid';

  const items = options.items || [
    { status: 'default' },
    { status: 'full' },
    { status: 'lock' },
    { showEmpty: true, showAvatarGroup: false, showTeam: false, title: '游戏语音房' }
  ];

  items.forEach(function(item) {
    container.appendChild(createCommunityRoom(item));
  });

  return container;
}

function getCommunityNavigationPreset(communityType = 'game') {
  const sharedRooms = [
    { index: '33', type: 'interactive', title: '互动语音房', showTeam: false, avatars: ['../image/Avatar/头像10.png', '../image/Avatar/头像311.png', '../image/Avatar/头像441.png', '../image/Avatar/头像480.png', '../image/Avatar/头像496.png', '../image/Avatar/头像498.png', '../image/Avatar/头像511.png', '../image/Avatar/头像542.png', '../image/Avatar/头像556.png', '../image/Avatar/头像558.png'], moreCount: '99+' },
    { index: '87', title: '港服白银黄金=1 RR1100…', showTeam: true, avatars: ['../image/Avatar/头像656.png', '../image/Avatar/头像643.png', '../image/Avatar/头像686.png'] },
    { index: '1', title: '德玛西亚灵活铂金', status: 'lock', showTeam: true, avatars: ['../image/Avatar/头像691.png', '../image/Avatar/头像849.png'] },
    { index: '2', title: '班得尔双排来任意', status: 'full', showTeam: true, avatars: ['../image/Avatar/头像706.png', '../image/Avatar/头像511.png', '../image/Avatar/头像934.png'] },
    { index: '3', title: '黄金四等一超凡神话带队', showTeam: false, avatars: ['../image/Avatar/头像719.png', '../image/Avatar/头像902.png', '../image/Avatar/头像634.png'] },
    { index: '4', title: '港服下三段分差心态好不压…', showTeam: false, avatars: ['../image/Avatar/头像542.png', '../image/Avatar/头像556.png'] }
  ];

  const gameRooms = sharedRooms.concat([
    { index: '5', title: '双排娱乐局来个话多队友', showTeam: false, avatars: ['../image/Avatar/头像934.png', '../image/Avatar/头像902.png'] },
    { index: '6', title: '海岛钢枪冲分小队', showTeam: false, avatars: ['../image/Avatar/头像849.png', '../image/Avatar/头像719.png', '../image/Avatar/头像634.png'] },
    { index: '7', title: '新手友好休闲四排', status: 'full', showTeam: false, avatars: ['../image/Avatar/头像911.png', '../image/Avatar/头像706.png', '../image/Avatar/头像511.png', '../image/Avatar/头像542.png'] },
    { index: '8', title: '夜猫子通宵上分车队', showTeam: false, avatars: ['../image/Avatar/头像664.png', '../image/Avatar/头像659.png', '../image/Avatar/头像498.png'] },
    { index: '12', title: '港服三排补一位听指挥', status: 'lock', showTeam: false, avatars: ['../image/Avatar/头像716.png', '../image/Avatar/头像662.png', '../image/Avatar/头像676.png'] },
    { index: '18', title: '空闲语音房', showEmpty: true, showAvatarGroup: false, showTeam: false }
  ]);

  if (communityType === 'player') {
    return {
      type: 'player',
      top: {
        imageSrc: '../image/Game logo/game15-cover.webp',
        officialText: '',
        officialCertColor: 'red',
        communityId: '90231'
      },
      showLevel: true,
      level: {
        progress: 0.788,
        communityLevelLabel: '社区等级',
        communityLevel: { lv: 6, size: 'compact' },
        userLevelLabel: '我的等级',
        userLevel: { lv: 13 }
      },
      game: {
        title: 'BEST-S战队首页',
        showBadge: false
      },
      plugins: [
        {
          title: '战绩·排名',
          icon: 'nicon-a-Grouping-Linezudui-xianxing',
          activeIcon: 'nicon-a-Grouping-Fillzudui-mianxing',
          showBadge: false,
          infoItems: [
            { nickname: '那瑟摩萨', actionText: '吃鸡了！', time: '1分钟前' },
            { nickname: '星河不眠', actionText: '吃鸡了！', time: '3分钟前' },
            { nickname: '普莱士袋熊', actionText: '吃鸡了！', time: '5分钟前' }
          ]
        },
        { title: '专属房间', icon: 'nicon-a-Statusprivilege-lineshenfentequan-xianxing', showInfo: false, showBadge: false },
        { title: '商用游戏引擎的优化问题…', pugcLabel: '公告', pugcLabelColor: '#8C8C8C', showInfo: false, showBadge: false, showCommentCount: true, commentCount: 12 }
      ],
      pluginsAfterSift: [
        { title: '游戏交流', icon: 'nicon-a-Lounge-Linexianliaodating-xianxing', info: '欢迎来到英雄联盟社区，请先查看社区公告', showBadge: true, badge: '8', showAvatar: true }
      ],
      rooms: sharedRooms
    };
  }

  return {
    type: 'game',
    top: {
      imageSrc: '../image/Game logo/game1-cover.webp',
      officialText: '',
      officialCertColor: 'blue'
    },
    showLevel: false,
    level: {},
    game: {
      title: '绝地求生首页',
      showBadge: false
    },
    plugins: [
      {
        title: '战绩·排名',
        icon: 'nicon-a-Grouping-Linezudui-xianxing',
        activeIcon: 'nicon-a-Grouping-Fillzudui-mianxing',
        showBadge: false,
        infoItems: [
          { nickname: '那瑟摩萨', actionText: '吃鸡了！', time: '1分钟前' },
          { nickname: '星河不眠', actionText: '吃鸡了！', time: '3分钟前' },
          { nickname: '普莱士袋熊', actionText: '吃鸡了！', time: '5分钟前' }
        ]
      },
      { title: 'PUBG工具', icon: 'nicon-a-Gametools-lineyouxigongju-xianxing', showInfo: false, showBadge: false },
      {
        title: 'UGC地图工坊',
        icon: 'nicon-a-MapWorkshop-Lineditugongfang-xianxing',
        showInfo: false,
        showBadge: false
      },
        { title: 'PNCL 大吉大利杯预约', pugcLabel: '活动', pugcLabelColor: '#E44097', showInfo: false, showBadge: false }
      ],
      pluginsAfterSift: [
        { title: '游戏交流', icon: 'nicon-a-Lounge-Linexianliaodating-xianxing', info: '欢迎来到PUBG社区，请先查看社区规范手册', showBadge: true, badge: '8', showAvatar: true },
        { title: '玩家社区', icon: 'nicon-a-BattleTeam-Linezhandui-xianxing', showInfo: false, showBadge: false, showAvatarGroup: true }
    ],
    rooms: gameRooms
  };
}

function createCommunityNavigationCombo(options = {}) {
  injectCommunityNavigationStyles();

  const communityType = options.communityType === 'player' ? 'player' : 'game';
  const preset = getCommunityNavigationPreset(communityType);
  const {
    top = {},
    plugins = null,
    pluginsAfterSift = null,
    game = {},
    level = {},
    rooms = null,
    activePluginTitle = '',
    onPluginClick = null,
    enablePageNavigation = true
  } = options;
  const showLevel = typeof options.showLevel === 'boolean' ? options.showLevel : preset.showLevel;
  const showSift = typeof options.showSift === 'boolean' ? options.showSift : true;
  const resolvedTop = Object.assign({}, preset.top, top);
  const resolvedLevel = Object.assign({}, preset.level, level);
  const resolvedPlugins = plugins || preset.plugins;
  const resolvedPluginsAfterSift = pluginsAfterSift || preset.pluginsAfterSift || [];
  const resolvedRooms = rooms || preset.rooms;

  const pageRoutes = {
    '全员大厅': 'MemberHall.html',
    '游戏交流': 'MemberHall.html',
    '战绩·排名': 'RecordStandings.html',
    '发现': 'discover.html',
    '旗下社区': 'UnderCommunity.html',
    '玩家社区': 'UnderCommunity.html'
  };

  function navigateToPage(fileName) {
    const href = `../page/${fileName}`;
    try {
      if (window.top && window.top !== window) {
        window.top.location.href = href;
        return;
      }
    } catch (error) {
      // Fall back to navigating the current document when top-level access is restricted.
    }
    window.location.href = href;
  }

  const root = document.createElement('div');
  root.className = 'nn-community-combo';
  root.dataset.communityType = communityType;

  const scroller = document.createElement('div');
  scroller.className = 'nn-community-combo__scroller';
  root.appendChild(scroller);

  const topWrap = document.createElement('div');
  topWrap.className = 'nn-community-combo__top';
  topWrap.appendChild(createCommunityTopBanner(resolvedTop));
  scroller.appendChild(topWrap);

  const bannerSpacer = document.createElement('div');
  bannerSpacer.className = 'nn-community-combo__banner-spacer';
  scroller.appendChild(bannerSpacer);

  if (showLevel) {
    const levelWrap = document.createElement('div');
    levelWrap.className = 'nn-community-combo__level';
    levelWrap.appendChild(createCommunityNavigationLevel(resolvedLevel));
    scroller.appendChild(levelWrap);
  }

  const gameWrap = document.createElement('div');
  gameWrap.className = 'nn-community-combo__game';
  const gameOptions = Object.assign({
    type: 'game',
    title: '首页',
    showInfo: false,
    showBadge: true,
    badge: '12',
    selected: !activePluginTitle,
    showSettings: true,
    gameIconSrc: ''
  }, preset.game, game);
  const gameOnClick = gameOptions.onClick;
  gameOptions.onClick = function(event, navItem) {
    if (typeof gameOnClick === 'function') gameOnClick(event, navItem);
    if (enablePageNavigation && !event.defaultPrevented) navigateToPage('Home.html');
  };
  gameWrap.appendChild(createCommunityNavigationItem(gameOptions));
  scroller.appendChild(gameWrap);

  function createPluginList(items, className = '') {
    const list = document.createElement('div');
    list.className = ['nn-community-combo__plugins', className].filter(Boolean).join(' ');
    items.forEach(function(item) {
      const itemOnClick = item.onClick;
      list.appendChild(createCommunityNavigationItem(Object.assign({}, item, {
        selected: item.selected || (activePluginTitle && item.title === activePluginTitle),
        onClick: function(event, navItem) {
          if (typeof itemOnClick === 'function') itemOnClick(event, navItem);
          if (typeof onPluginClick === 'function') onPluginClick(item, event, navItem);
          if (enablePageNavigation && !event.defaultPrevented && pageRoutes[item.title]) {
            navigateToPage(pageRoutes[item.title]);
          }
        }
      })));
    });
    return list;
  }

  scroller.appendChild(createPluginList(resolvedPlugins));

  if (showSift) {
    const siftWrap = document.createElement('div');
    siftWrap.className = 'nn-community-combo__sift';
    siftWrap.appendChild(createCommunitySift());
    scroller.appendChild(siftWrap);
  }

  if (resolvedPluginsAfterSift.length) {
    scroller.appendChild(createPluginList(resolvedPluginsAfterSift, 'nn-community-combo__plugins--after-sift'));
  }

  const roomsWrap = document.createElement('div');
  roomsWrap.className = 'nn-community-combo__rooms';
  roomsWrap.appendChild(createCommunityRooms({
    items: resolvedRooms
  }));
  scroller.appendChild(roomsWrap);

  let scrollbarTop = 120;
  const comboScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: scroller,
      container: root,
      hoverTarget: root,
      variant: 'thin',
      top: function() { return scrollbarTop; },
      right: 4,
      minThumbSize: 24,
      className: 'nn-community-combo__scrollbar'
    })
    : null;

  function updateComboScroll() {
    const scrollTop = scroller.scrollTop;
    const bannerHeight = Math.max(0, 120 - scrollTop);
    const bannerOpacity = Math.max(0, Math.min(1, bannerHeight / 120));
    const bannerBottomOpacity = scrollTop > 0 ? 0 : 1;
    const gameStickyHeight = 40;
    const viewportHeight = scroller.clientHeight;
    const scrollHeight = scroller.scrollHeight;
    root.style.setProperty('--community-combo-banner-height', `${bannerHeight}px`);
    root.style.setProperty('--community-combo-banner-opacity', bannerOpacity.toFixed(3));
    root.style.setProperty('--community-combo-banner-bottom-opacity', bannerBottomOpacity.toFixed(3));
    root.style.setProperty('--community-combo-banner-menu-opacity', bannerHeight < 40 ? '0' : '1');
    root.style.setProperty('--community-combo-game-sticky-height', `${gameStickyHeight}px`);
    scrollbarTop = bannerHeight;
    root.classList.toggle('is-scrollable', scrollHeight > viewportHeight);
    gameWrap.classList.toggle('is-settings-visible', bannerHeight < 40);
    if (comboScrollbar) comboScrollbar.update();
  }

  scroller.addEventListener('scroll', function() {
    updateComboScroll();
  }, { passive: true });
  requestAnimationFrame(updateComboScroll);

  return root;
}

function createCommunitySift(options = {}) {
  injectCommunityNavigationStyles();
  const createBadge = getRequiredBasicComponent('createBadge');
  const createButton = getRequiredBasicComponent('createButton');
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }

  const {
    recruitText = '招募队友',
    filterText = '筛选',
    filterCount = 9,
    showFilterBadge = true,
    showRefreshNew = true
  } = options;

  const root = document.createElement('div');
  root.className = 'nn-community-sift';

  const filterWrap = document.createElement('div');
  filterWrap.className = 'nn-community-sift__filter-wrap';
  const filter = document.createElement('button');
  filter.type = 'button';
  filter.className = 'nn-community-sift__button nn-community-sift__button--secondary';
  filter.innerHTML = `<span class="nn-community-sift__text">${filterText}</span><i class="nn-community-sift__icon nnicon nicon-a-search-linesousuo-xianxing"></i>`;
  filterWrap.appendChild(filter);
  if (showFilterBadge) {
    const badgeWrap = document.createElement('span');
    badgeWrap.className = 'nn-community-sift__badge-wrap';
    badgeWrap.appendChild(createBadge({
      text: String(filterCount),
      variant: 'red'
    }));
    filterWrap.appendChild(badgeWrap);
  }
  root.appendChild(filterWrap);

  const recruit = document.createElement('button');
  recruit.type = 'button';
  recruit.className = 'nn-community-sift__button nn-community-sift__button--primary';
  recruit.innerHTML = `<i class="nn-community-sift__icon nnicon nicon-a-Multiplayer2-Linezhaomu2-xianxing"></i><span class="nn-community-sift__text">${recruitText}</span>`;
  root.appendChild(recruit);

  const refreshWrap = document.createElement('div');
  refreshWrap.className = 'nn-community-sift__refresh-wrap';
  const refresh = createButton({
    text: '',
    type: 'button',
    variant: 'system',
    level: 'secondary',
    size: 'large',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x10)',
    className: 'nn-community-sift__refresh',
    icon: '<i class="nn-community-sift__refresh-icon nnicon nicon-a-refresh-fillshuaxin-xianxing"></i>'
  });
  const refreshIcon = refresh.querySelector('.nn-community-sift__refresh-icon');
  refresh.addEventListener('click', function() {
    refreshIcon.classList.remove('is-spinning');
    void refreshIcon.offsetWidth;
    refreshIcon.classList.add('is-spinning');
  });
  refreshIcon.addEventListener('animationend', function() {
    refreshIcon.classList.remove('is-spinning');
  });
  refreshWrap.appendChild(refresh);
  if (showRefreshNew) {
    const newWrap = document.createElement('span');
    newWrap.className = 'nn-community-sift__new-wrap';
    newWrap.appendChild(createBadge({
      text: 'NEW',
      variant: 'new'
    }));
    refreshWrap.appendChild(newWrap);
  }
  root.appendChild(refreshWrap);

  return root;
}

function createCommunityNavigation(options = {}) {
  const container = document.createElement('div');
  container.className = 'nn-community-nav-grid';
  const items = options.items || [
    { state: 'default' },
    { state: 'hover' },
    { state: 'focused' }
  ];

  items.forEach(function(item) {
    container.appendChild(createCommunityNavigationItem(item));
  });

  return container;
}

if (typeof window !== 'undefined') {
  window.injectCommunityNavigationStyles = injectCommunityNavigationStyles;
  window.createCommunityTopBanner = createCommunityTopBanner;
  window.createCommunityNavigationItem = createCommunityNavigationItem;
  window.createCommunityNavigationLevel = createCommunityNavigationLevel;
  window.createCommunityRoom = createCommunityRoom;
  window.createCommunityRooms = createCommunityRooms;
  window.createCommunityNavigationCombo = createCommunityNavigationCombo;
  window.createCommunitySift = createCommunitySift;
  window.createCommunityNavigation = createCommunityNavigation;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectCommunityNavigationStyles,
    createCommunityTopBanner,
    createCommunityNavigationItem,
    createCommunityNavigationLevel,
    createCommunityRoom,
    createCommunityRooms,
    createCommunityNavigationCombo,
    createCommunitySift,
    createCommunityNavigation
  };
}
