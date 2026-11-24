const CommunityCardStyles = `
  .nn-community-card {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 543px;
    min-width: 520px;
    padding-right: var(--space8);
    overflow: visible;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
    font-family: var(--font-family-main);
    transition: none;
  }

  .nn-community-card:hover,
  .nn-community-card.is-hover {
    background: var(--gray-10);
  }

  .nn-community-card--small {
    gap: var(--space12);
    width: 438px;
    min-width: 428px;
  }

  .nn-community-card--large {
    width: 598px;
    min-width: 598px;
    min-height: 179px;
    padding-right: var(--space12);
  }

  .nn-community-card__cover {
    position: relative;
    width: 260px;
    height: 146px;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-4r) 0 0 var(--border-radius-4r);
    background: var(--gray-9);
  }

  .nn-community-card--small .nn-community-card__cover {
    width: 210px;
    height: 118px;
  }

  .nn-community-card--large .nn-community-card__cover {
    width: 318px;
    height: 179px;
  }

  .nn-community-card__cover::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }

  .nn-community-card__cover-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  .nn-community-card:hover .nn-community-card__cover-img,
  .nn-community-card.is-hover .nn-community-card__cover-img {
    transform: scale(1.05);
  }

  .nn-community-card__body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-community-card--small .nn-community-card__body {
    gap: var(--space8);
  }

  .nn-community-card--large .nn-community-card__body {
    gap: var(--space20);
  }

  .nn-community-card__header {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 100%;
    min-width: 0;
  }

  .nn-community-card__logo {
    display: block;
    width: 48px;
    height: 48px;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-8r);
    object-fit: cover;
  }

  .nn-community-card--small .nn-community-card__logo {
    width: 42px;
    height: 42px;
  }

  .nn-community-card--large .nn-community-card__logo {
    width: 56px;
    height: 56px;
  }

  .nn-community-card__meta {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space6);
    min-width: 0;
  }

  .nn-community-card--small .nn-community-card__meta {
    gap: var(--space4);
  }

  .nn-community-card__title {
    display: block;
    width: 100%;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-community-card--small .nn-community-card__title {
    font-size: 14px;
    line-height: 20px;
  }

  .nn-community-card--large .nn-community-card__title {
    font-size: 18px;
    font-weight: var(--font-weight-semibold);
    line-height: 24px;
  }

  .nn-community-card__labels {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-community-card__official {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    overflow: visible;
  }

  .nn-community-card__desc {
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    min-width: 0;
    height: 40px;
    margin: var(--space0);
    overflow: hidden;
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }

  .nn-community-card--large .nn-community-card__desc {
    height: 40px;
    font-size: 14px;
    line-height: 20px;
  }

  .nn-community-card--small .nn-community-card__desc {
    height: 32px;
    font-size: 12px;
    line-height: 16px;
  }

  .nn-community-card__desc-line {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-community-card__desc-line:empty::before {
    content: "\\00a0";
  }

  .nn-community-card__online {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-community-card--small .nn-community-card__online {
    padding-left: var(--space4);
  }

  .nn-community-card__online-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--Green, #1bb373);
  }

  .nn-bring-play-card {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 433px;
    min-width: 433px;
    height: 156px;
    padding: var(--space0);
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-sizing: border-box;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    transition: none;
  }

  .nn-bring-play-card:hover,
  .nn-bring-play-card.is-hover {
    background: var(--gray-10);
  }

  .nn-bring-play-card--m {
    width: 460px;
    min-width: 460px;
    height: 180px;
  }

  .nn-bring-play-card__picture {
    position: relative;
    width: 156px;
    height: 156px;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
  }

  .nn-bring-play-card__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-bring-play-card__city {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 16px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-4r);
    background: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-bring-play-card__city-dot {
    width: 6px;
    height: 6px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--Green, #1bb373);
  }

  .nn-bring-play-card__city.is-offline .nn-bring-play-card__city-dot {
    background: var(--White-A50, rgba(255, 255, 255, 0.5));
  }

  .nn-bring-play-card__voice {
    position: absolute;
    bottom: 4px;
    left: 4px;
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    height: 24px;
    padding: var(--space4) var(--space6);
    border-radius: 33px;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.9);
    font: inherit;
    appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }

  .nn-bring-play-card__duration {
    font-size: 12px;
    font-weight: var(--font-weight-bold);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-bring-play-card__wave {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 12px;
  }

  .nn-bring-play-card__wave-bar {
    width: 2px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    transform-origin: center;
  }

  .nn-bring-play-card__wave-bar:nth-child(1),
  .nn-bring-play-card__wave-bar:nth-child(3) {
    height: 10px;
  }

  .nn-bring-play-card__wave-bar:nth-child(2),
  .nn-bring-play-card__wave-bar:nth-child(4) {
    height: 6px;
  }

  .nn-bring-play-card__play {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid rgba(255, 255, 255, 0.9);
  }

  .nn-bring-play-card__voice.is-playing .nn-bring-play-card__wave-bar {
    animation: bring-play-wave 720ms ease-in-out infinite;
  }

  .nn-bring-play-card__voice.is-playing .nn-bring-play-card__wave-bar:nth-child(2) {
    animation-delay: 90ms;
  }

  .nn-bring-play-card__voice.is-playing .nn-bring-play-card__wave-bar:nth-child(3) {
    animation-delay: 180ms;
  }

  .nn-bring-play-card__voice.is-playing .nn-bring-play-card__wave-bar:nth-child(4) {
    animation-delay: 270ms;
  }

  @keyframes bring-play-wave {
    0%, 100% {
      transform: scaleY(0.65);
      opacity: 0.72;
    }

    45% {
      transform: scaleY(1.25);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-bring-play-card__voice.is-playing .nn-bring-play-card__wave-bar {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }


  .nn-bring-play-card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space8);
    min-width: 0;
    padding-right: var(--space12);
  }

  .nn-bring-play-card__main {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-bring-play-card__user {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-bring-play-card__name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-semibold);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-bring-play-card__gender {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: #ff3aa7;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-bring-play-card__labels {
    display: flex;
    align-items: center;
    gap: var(--space6);
    min-width: 0;
  }

  .nn-bring-play-card__labels .nn-equity-rank {
    height: 16px;
    min-height: 16px;
    padding: var(--space0) var(--space4);
    font-size: 10px;
    line-height: 16px;
  }

  .nn-bring-play-card__desc {
    width: 100%;
    min-width: 0;
    margin: var(--space0);
    overflow: hidden;
    color: var(--gray-5);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-bring-play-card__games {
    display: flex;
    align-items: center;
    gap: var(--space4);
    padding: var(--space4) var(--space0);
  }

  .nn-bring-play-card__game-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    object-fit: cover;
  }

  .nn-bring-play-card__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space8);
    min-width: 0;
    padding-top: var(--space4);
  }

  .nn-bring-play-card__price {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: baseline;
    gap: var(--space2);
    min-width: 0;
    color: #e79f4d;
    white-space: nowrap;
  }

  .nn-bring-play-card__price-value {
    font-family: var(--font-family-din);
    font-size: 28px;
    font-weight: var(--font-weight-bold);
    line-height: 22px;
  }

  .nn-bring-play-card__price-unit {
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
  }

  .nn-bring-play-card__actions {
    display: flex;
    align-items: center;
    gap: var(--space8);
    flex: 0 0 auto;
  }

  .nn-bring-play-card__actions .nn-btn {
    min-width: 64px;
  }

  .nn-bring-play-card--m .nn-bring-play-card__picture {
    width: 180px;
    height: 180px;
  }

  .nn-bring-play-card--m .nn-bring-play-card__labels .nn-equity-rank {
    height: 20px;
    min-height: 20px;
    padding: var(--space0) var(--space4);
    font-size: 12px;
    line-height: 16px;
  }

  .nn-bring-play-card--m .nn-label--size-s {
    padding: var(--space2) var(--space6);
  }

  .nn-bring-play-card--m .nn-label--size-s .nn-label__text {
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
  }

  .nn-bring-play-card--m .nn-bring-play-card__desc {
    font-size: 14px;
    line-height: 20px;
  }

  .nn-bring-play-card--m .nn-bring-play-card__game-icon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
  }

  .nn-bring-play-card--m .nn-bring-play-card__price-value {
    font-size: 32px;
  }

  .nn-bring-play-card--m .nn-bring-play-card__actions .nn-btn {
    min-width: 86px;
  }

  .nn-game-list-card {
    display: flex;
    align-items: flex-start;
    gap: var(--space12);
    width: 260px;
    height: 85px;
    padding: var(--space6);
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: transparent;
    color: inherit;
    font-family: var(--font-family-main);
    text-align: left;
    transition: background-color 0.16s ease;
  }

  .nn-game-list-card:hover,
  .nn-game-list-card.is-hover {
    background: var(--gray-10);
  }

  .nn-game-list-card.is-clickable {
    cursor: pointer;
  }

  .nn-game-list-card:focus-visible {
    outline: 2px solid var(--Esports-Blue-LD);
    outline-offset: 2px;
  }

  .nn-game-list-card__cover {
    display: block;
    width: 130px;
    height: 73px;
    flex: 0 0 130px;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
    object-fit: cover;
  }

  .nn-game-list-card__content {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    min-width: 0;
  }

  .nn-game-list-card__copy {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
  }

  .nn-game-list-card__title {
    display: -webkit-box;
    width: 100%;
    min-width: 0;
    margin: var(--space0);
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .nn-game-list-card--two-line .nn-game-list-card__title {
    height: 44px;
    -webkit-line-clamp: 2;
  }

  .nn-game-list-card__summary {
    width: 100%;
    min-width: 0;
    margin: var(--space0);
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-game-list-card__price {
    display: inline-flex;
    align-items: stretch;
    align-self: flex-start;
    height: 20px;
    padding-right: var(--space4);
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-4);
  }

  .nn-game-list-card__content > .nn-game-list-card__price {
    margin-bottom: var(--space4);
  }

  .nn-game-list-card__discount {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space0) var(--space4);
    background: var(--gray-4);
    color: var(--gray-1);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-game-list-card__current-price {
    display: inline-flex;
    align-items: center;
    padding-left: var(--space6);
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-game-release-card,
  .nn-player-community-card {
    display: flex;
    width: 264px;
    flex-direction: column;
    gap: var(--space10);
    border: 0;
    background: transparent;
    box-sizing: border-box;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    text-align: left;
  }

  .nn-game-release-card.is-clickable,
  .nn-player-community-card.is-clickable {
    cursor: pointer;
  }

  .nn-game-release-card:focus-visible,
  .nn-player-community-card:focus-visible {
    outline: 2px solid var(--Esports-Blue-LD);
    outline-offset: 2px;
  }

  .nn-game-release-card__cover,
  .nn-player-community-card__cover {
    position: relative;
    width: 264px;
    aspect-ratio: 16 / 9;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
  }

  .nn-game-release-card--fluid {
    width: 100%;
    min-width: 0;
  }

  .nn-player-community-card--fluid {
    width: 100%;
    min-width: 0;
  }

  .nn-game-release-card--fluid .nn-game-release-card__cover,
  .nn-player-community-card--fluid .nn-player-community-card__cover {
    width: 100%;
  }

  .nn-game-release-card__cover-image,
  .nn-player-community-card__cover-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-game-release-card:hover .nn-game-release-card__cover-image,
  .nn-game-release-card.is-hover .nn-game-release-card__cover-image,
  .nn-player-community-card:hover .nn-player-community-card__cover-image,
  .nn-player-community-card.is-hover .nn-player-community-card__cover-image {
    transform: scale(1.04);
  }

  .nn-game-release-card__cover-badge {
    position: absolute;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 20px;
    padding: var(--space0) var(--space6);
    border-radius: var(--border-radius-4r);
    background: var(--Black-A60);
    box-sizing: border-box;
    color: var(--White-A80);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-game-release-card__cover-badge--platform {
    position: static;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    padding: var(--space0);
    border-radius: 0;
    background: transparent;
  }

  .nn-game-release-card__platforms {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    z-index: 1;
    display: flex;
    gap: var(--space2);
    padding: var(--space2);
    border-radius: 0 0 var(--border-radius-4r) 0;
    background: var(--Black-A50);
    color: var(--White-A80);
  }

  .nn-game-release-card__cover-badge--platform .nnicon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    font-size: var(--icon-size-x9);
    line-height: var(--icon-size-x9);
  }

  .nn-game-release-card__body,
  .nn-player-community-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space10);
    padding: var(--space0) var(--space4);
    box-sizing: border-box;
  }

  .nn-game-release-card__main,
  .nn-player-community-card__main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-game-release-card__copy,
  .nn-player-community-card__copy {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-game-release-card__main {
    gap: var(--space16);
  }

  .nn-game-release-card__title,
  .nn-player-community-card__title {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-game-release-card__description,
  .nn-player-community-card__description {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-game-release-card__rating {
    display: flex;
    width: 42px;
    flex: 0 0 42px;
    flex-direction: column;
    align-items: center;
    color: var(--gray-6);
    white-space: nowrap;
  }

  .nn-game-release-card__rating-label {
    color: var(--gray-7);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .nn-game-release-card__rating-value {
    display: inline-flex;
    align-items: baseline;
    justify-content: flex-end;
    color: inherit;
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
  }

  .nn-game-release-card__rating-number {
    font-size: var(--font-size-title);
    line-height: var(--line-height-title);
  }

  .nn-game-release-card__rating-unit {
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-release-card__meta,
  .nn-player-community-card__identity {
    display: flex;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
    min-height: 20px;
  }

  .nn-game-release-card__meta-label {
    display: flex;
    align-items: center;
    gap: var(--space2);
    min-width: 0;
  }

  .nn-game-release-card__meta-icon.nnicon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-game-release-card__meta-text,
  .nn-game-release-card__age {
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-game-release-card__meta-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nn-game-release-card__age {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    flex: 0 0 auto;
  }

  .nn-player-community-card__identity {
    gap: var(--space4);
  }

  .nn-player-community-card__identity .nn-label--certification,
  .nn-player-community-card__identity .nn-equity-community-level,
  .nn-player-community-card__identity .nn-equity {
    flex: 0 0 auto;
  }

  .nn-player-community-card__online {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    margin-left: auto;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-player-community-card__online-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--Green);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-game-list-card,
    .nn-game-release-card__cover-image,
    .nn-player-community-card__cover-image {
      transition: none;
    }
  }

`;

function injectCommunityCardStyles() {
  const existing = document.getElementById('nn-community-card-styles');
  if (existing) {
    existing.textContent = CommunityCardStyles;
    return;
  }
  const style = document.createElement('style');
  style.id = 'nn-community-card-styles';
  style.textContent = CommunityCardStyles;
  document.head.appendChild(style);
}

function normalizeCardSize(size) {
  const normalized = String(size || 'default').toLowerCase();
  if (normalized === 's' || normalized === 'small') return 'small';
  if (normalized === 'l' || normalized === 'large') return 'large';
  return 'default';
}

function resolveOfficialCertColor(src = '', fallback = 'blue') {
  const normalizedFallback = ['blue', 'orange', 'red'].includes(String(fallback).toLowerCase())
    ? String(fallback).toLowerCase()
    : 'blue';
  const source = String(src || '').toLowerCase();
  if (source.includes('corporate') || source.includes('企业')) return 'red';
  return normalizedFallback;
}

function createOfficialCertificationLabel(options = {}) {
  const {
    officialSrc = '../image/Community Level/Official Certification.svg',
    officialCertColor = 'blue',
    officialTooltip = ''
  } = options;

  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    const certColor = resolveOfficialCertColor(officialSrc, officialCertColor);
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
  fallback.src = officialSrc;
  fallback.alt = '';
  fallback.style.display = 'block';
  fallback.style.width = 'var(--icon-size-x10)';
  fallback.style.height = 'var(--icon-size-x10)';
  fallback.style.objectFit = 'contain';
  return fallback;
}

function createCommunityCard(options = {}) {
  injectCommunityCardStyles();

  const {
    size = 'default',
    state = 'default',
    title = 'Community Name',
    description = '',
    descriptionLines = null,
    onlineText = '在线 323,344',
    coverSrc = '../image/Game logo/game1-cover.webp',
    logoSrc = '../image/Game logo/game1.webp',
    showOfficial = true,
    officialSrc = '../image/Community Level/Official Certification.svg',
    officialCertColor = 'blue',
    officialTooltip = '',
    communityLevel = { lv: 6, size: 'small' },
    id = { text: '90231', size: 'small' },
    className = ''
  } = options;

  const normalizedSize = normalizeCardSize(size);
  const root = document.createElement('article');
  root.className = [
    'nn-community-card',
    normalizedSize === 'small' ? 'nn-community-card--small' : '',
    normalizedSize === 'large' ? 'nn-community-card--large' : '',
    state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.size = normalizedSize;
  root.dataset.state = state;

  const cover = document.createElement('div');
  cover.className = 'nn-community-card__cover';
  const coverImg = document.createElement('img');
  coverImg.className = 'nn-community-card__cover-img';
  coverImg.src = coverSrc;
  coverImg.alt = '';
  cover.appendChild(coverImg);
  root.appendChild(cover);

  const body = document.createElement('div');
  body.className = 'nn-community-card__body';

  const header = document.createElement('div');
  header.className = 'nn-community-card__header';
  const logo = document.createElement('img');
  logo.className = 'nn-community-card__logo';
  logo.src = logoSrc;
  logo.alt = '';
  header.appendChild(logo);

  const meta = document.createElement('div');
  meta.className = 'nn-community-card__meta';
  const titleEl = document.createElement('span');
  titleEl.className = 'nn-community-card__title';
  titleEl.textContent = title;
  meta.appendChild(titleEl);

  const labels = document.createElement('div');
  labels.className = 'nn-community-card__labels';
  if (showOfficial) {
    const official = document.createElement('span');
    official.className = 'nn-community-card__official';
    official.appendChild(createOfficialCertificationLabel({
      officialSrc,
      officialCertColor,
      officialTooltip
    }));
    labels.appendChild(official);
  }
  if (communityLevel && typeof window.createEquityCommunityLevel === 'function') {
    labels.appendChild(window.createEquityCommunityLevel(Object.assign({
      size: 'small'
    }, communityLevel)));
  }
  if (id && typeof window.createEquity === 'function') {
    labels.appendChild(window.createEquity(Object.assign({ size: 'small' }, id)));
  }
  meta.appendChild(labels);
  header.appendChild(meta);
  body.appendChild(header);

  const desc = document.createElement('div');
  desc.className = 'nn-community-card__desc';
  const defaultDescriptionLines = ['Game community introduction content', 'Current event preview introduction'];
  const resolvedDescriptionLines = Array.isArray(descriptionLines) && descriptionLines.length
    ? descriptionLines
    : (description ? String(description).split('\n') : defaultDescriptionLines);
  resolvedDescriptionLines.slice(0, 2).forEach(function(line) {
    const lineEl = document.createElement('span');
    lineEl.className = 'nn-community-card__desc-line';
    lineEl.textContent = line;
    desc.appendChild(lineEl);
  });
  while (desc.children.length < 2) {
    const emptyLine = document.createElement('span');
    emptyLine.className = 'nn-community-card__desc-line';
    emptyLine.textContent = '';
    desc.appendChild(emptyLine);
  }
  body.appendChild(desc);

  const online = document.createElement('div');
  online.className = 'nn-community-card__online';
  const dot = document.createElement('span');
  dot.className = 'nn-community-card__online-dot';
  online.appendChild(dot);
  const onlineLabel = document.createElement('span');
  onlineLabel.textContent = onlineText;
  online.appendChild(onlineLabel);
  body.appendChild(online);

  root.appendChild(body);
  return root;
}

function createBringPlayLabel(text, options = {}) {
  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    return window.createLabel(Object.assign({
      text,
      type: 'soft',
      size: 's',
      color: 'neutral'
    }, options));
  }

  const label = document.createElement('span');
  label.className = 'nn-label nn-label--color-neutral nn-label--type-soft nn-label--size-s';
  label.textContent = text;
  return label;
}

function createBringPlayButton(options = {}) {
  if (typeof window !== 'undefined' && typeof window.nnButton === 'function') {
    return window.nnButton(options);
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `nn-btn nn-btn-${options.variant || 'system'}-${options.level || 'primary'} nn-btn-small`;
  button.textContent = options.text || 'button';
  return button;
}

function createBringPlayCard(options = {}) {
  injectCommunityCardStyles();

  const {
    size = 's',
    state = 'default',
    imageSrc = '../image/Avatar/头像1095.png',
    city,
    onlineStatus = 'online',
    statusText,
    duration = '20S',
    name = 'A0广告传媒-邓小鼎',
    genderIcon = '<i class="nnicon nicon-a-Womannv"></i>',
    rank = { lv: 6, size: 'small' },
    labels = [
      { text: '技术' },
      { text: '娱乐' },
      { text: '服务保障', customColor: '#e79f4d' }
    ],
    description = '巅峰历史2500 打野双休两个位置都call我的顺丰在C位打怪升级开来黄金时刻',
    gameIcons = [
      '../image/Game logo/game1.webp',
      '../image/Game logo/game2.webp',
      '../image/Game logo/game3.webp'
    ],
    price = '1.2',
    priceUnit = '元',
    secondaryText = '一键下单',
    primaryText = '聊一聊',
    className = ''
  } = options;

  const normalizedSize = String(size || 's').toLowerCase() === 'm' || String(size || '').toLowerCase() === 'medium'
    ? 'm'
    : 's';
  const normalizedOnlineStatus = String(onlineStatus || '').toLowerCase() === 'offline' ? 'offline' : 'online';
  const normalizedStatusText = statusText || city || (normalizedOnlineStatus === 'offline' ? '离线' : '在线');
  const actionSize = normalizedSize === 'm' ? 'default' : 'small';
  const actionIconSize = normalizedSize === 'm' ? 16 : 14;

  const root = document.createElement('article');
  root.className = [
    'nn-bring-play-card',
    normalizedSize === 'm' ? 'nn-bring-play-card--m' : 'nn-bring-play-card--s',
    state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.size = normalizedSize;
  root.dataset.state = state;

  const picture = document.createElement('div');
  picture.className = 'nn-bring-play-card__picture';
  const image = document.createElement('img');
  image.className = 'nn-bring-play-card__image';
  image.src = imageSrc;
  image.alt = '';
  picture.appendChild(image);

  const cityBadge = document.createElement('span');
  cityBadge.className = [
    'nn-bring-play-card__city',
    normalizedOnlineStatus === 'offline' ? 'is-offline' : ''
  ].filter(Boolean).join(' ');
  cityBadge.dataset.status = normalizedOnlineStatus;
  const cityDot = document.createElement('span');
  cityDot.className = 'nn-bring-play-card__city-dot';
  const cityText = document.createElement('span');
  cityText.textContent = normalizedStatusText;
  cityBadge.appendChild(cityDot);
  cityBadge.appendChild(cityText);
  picture.appendChild(cityBadge);

  const voice = document.createElement('button');
  voice.className = 'nn-bring-play-card__voice';
  voice.type = 'button';
  voice.setAttribute('aria-label', '播放语音');
  voice.setAttribute('aria-pressed', 'false');
  const durationEl = document.createElement('span');
  durationEl.className = 'nn-bring-play-card__duration';
  durationEl.textContent = duration;
  const wave = document.createElement('span');
  wave.className = 'nn-bring-play-card__wave';
  for (let index = 0; index < 4; index += 1) {
    const bar = document.createElement('span');
    bar.className = 'nn-bring-play-card__wave-bar';
    wave.appendChild(bar);
  }
  const play = document.createElement('span');
  play.className = 'nn-bring-play-card__play';
  voice.appendChild(durationEl);
  voice.appendChild(wave);
  voice.appendChild(play);
  voice.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const isPlaying = voice.classList.toggle('is-playing');
    voice.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    voice.setAttribute('aria-label', isPlaying ? '停止语音' : '播放语音');
  });
  picture.appendChild(voice);
  root.appendChild(picture);

  const content = document.createElement('div');
  content.className = 'nn-bring-play-card__content';
  const main = document.createElement('div');
  main.className = 'nn-bring-play-card__main';

  const user = document.createElement('div');
  user.className = 'nn-bring-play-card__user';
  const nameEl = document.createElement('span');
  nameEl.className = 'nn-bring-play-card__name';
  nameEl.textContent = name;
  const gender = document.createElement('span');
  gender.className = 'nn-bring-play-card__gender';
  gender.innerHTML = genderIcon;
  user.appendChild(nameEl);
  user.appendChild(gender);
  main.appendChild(user);

  const labelRow = document.createElement('div');
  labelRow.className = 'nn-bring-play-card__labels';
  if (rank && typeof window !== 'undefined' && typeof window.createEquityRank === 'function') {
    labelRow.appendChild(window.createEquityRank(Object.assign({ size: 'small' }, rank)));
  }
  labels.forEach(function(labelOptions) {
    const normalizedLabel = typeof labelOptions === 'string' ? { text: labelOptions } : labelOptions;
    labelRow.appendChild(createBringPlayLabel(normalizedLabel.text, normalizedLabel));
  });
  main.appendChild(labelRow);

  const desc = document.createElement('p');
  desc.className = 'nn-bring-play-card__desc';
  desc.textContent = description;
  main.appendChild(desc);

  const games = document.createElement('div');
  games.className = 'nn-bring-play-card__games';
  gameIcons.slice(0, 3).forEach(function(src) {
    const gameIcon = document.createElement('img');
    gameIcon.className = 'nn-bring-play-card__game-icon';
    gameIcon.src = src;
    gameIcon.alt = '';
    games.appendChild(gameIcon);
  });
  main.appendChild(games);
  content.appendChild(main);

  const footer = document.createElement('div');
  footer.className = 'nn-bring-play-card__footer';
  const priceEl = document.createElement('span');
  priceEl.className = 'nn-bring-play-card__price';
  const priceValue = document.createElement('span');
  priceValue.className = 'nn-bring-play-card__price-value';
  priceValue.textContent = price;
  const unit = document.createElement('span');
  unit.className = 'nn-bring-play-card__price-unit';
  unit.textContent = priceUnit;
  priceEl.appendChild(priceValue);
  priceEl.appendChild(unit);
  footer.appendChild(priceEl);

  const actions = document.createElement('div');
  actions.className = 'nn-bring-play-card__actions';
  actions.appendChild(createBringPlayButton({
    variant: 'system',
    level: 'secondary',
    size: actionSize,
    text: secondaryText
  }));
  actions.appendChild(createBringPlayButton({
    variant: 'system',
    level: 'primary',
    size: actionSize,
    text: primaryText,
    icon: '<i class="nnicon nicon-a-Chat-fillliaotian-mianxing"></i>',
    iconPosition: 'left',
    iconSize: actionIconSize
  }));
  footer.appendChild(actions);
  content.appendChild(footer);
  root.appendChild(content);

  return root;
}

function createGameListCard(options = {}) {
  injectCommunityCardStyles();

  const {
    variant = 'summary',
    state = 'default',
    imageSrc,
    title,
    summary = '类魂系列/在线合作/类 Rogue/多人/单人/合作/动作/开放世界',
    discount = '-20%',
    price = '¥79.00',
    ariaLabel = '',
    className = '',
    onClick = null
  } = options;

  const normalizedVariant = ['two-line', 'twoLine', 'title'].includes(String(variant))
    ? 'two-line'
    : 'summary';
  const resolvedImageSrc = imageSrc || (normalizedVariant === 'two-line'
    ? '../image/Game Store/G-coin.png'
    : '../image/Game logo/game-list-apex.png');
  const resolvedTitle = title || (normalizedVariant === 'two-line'
    ? '绝地求生白毛柴犬帮套装'
    : '艾尔登法环 黑夜君临');

  const root = document.createElement('article');
  root.className = [
    'nn-game-list-card',
    normalizedVariant === 'two-line' ? 'nn-game-list-card--two-line' : 'nn-game-list-card--summary',
    state === 'hover' ? 'is-hover' : '',
    typeof onClick === 'function' ? 'is-clickable' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.variant = normalizedVariant;
  root.dataset.state = state;
  root.setAttribute('aria-label', ariaLabel || resolvedTitle);

  if (typeof onClick === 'function') {
    root.setAttribute('role', 'button');
    root.tabIndex = 0;
    root.addEventListener('click', function(event) {
      onClick({ event, card: root });
    });
    root.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      root.click();
    });
  }

  const cover = document.createElement('img');
  cover.className = 'nn-game-list-card__cover';
  cover.src = resolvedImageSrc;
  cover.alt = '';
  root.appendChild(cover);

  const content = document.createElement('div');
  content.className = 'nn-game-list-card__content';

  const copy = document.createElement('div');
  copy.className = 'nn-game-list-card__copy';
  const titleElement = document.createElement('p');
  titleElement.className = 'nn-game-list-card__title';
  titleElement.textContent = resolvedTitle;
  copy.appendChild(titleElement);

  if (normalizedVariant === 'summary') {
    const summaryElement = document.createElement('p');
    summaryElement.className = 'nn-game-list-card__summary';
    summaryElement.textContent = summary;
    copy.appendChild(summaryElement);
  }
  content.appendChild(copy);

  const priceElement = document.createElement('span');
  priceElement.className = 'nn-game-list-card__price';
  if (discount) {
    const discountElement = document.createElement('span');
    discountElement.className = 'nn-game-list-card__discount';
    discountElement.textContent = discount;
    priceElement.appendChild(discountElement);
  }
  const currentPrice = document.createElement('span');
  currentPrice.className = 'nn-game-list-card__current-price';
  currentPrice.textContent = price;
  priceElement.appendChild(currentPrice);
  content.appendChild(priceElement);

  root.appendChild(content);
  return root;
}

function bindCardActivation(root, onClick) {
  if (typeof onClick !== 'function') return;
  root.classList.add('is-clickable');
  root.setAttribute('role', 'button');
  root.tabIndex = 0;
  root.addEventListener('click', function(event) {
    onClick({ event, card: root });
  });
  root.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    root.click();
  });
}

function createGameReleaseCard(options = {}) {
  injectCommunityCardStyles();

  const {
    state = 'default',
    coverSrc = '../image/Game Store/game-monster-hunter.png',
    title = 'Monster Hunter: Wilds',
    description = 'Monster Hunter: Wilds - Beyond',
    ratingLabel = '好评率',
    rating = '92.6%',
    platform = 'steam',
    platforms,
    tags,
    metaLabel = 'Game information',
    age = '6+',
    showSteam,
    ariaLabel = '',
    fluid = false,
    className = '',
    onClick = null
  } = options;

  const root = document.createElement('article');
  root.className = [
    'nn-game-release-card',
    fluid ? 'nn-game-release-card--fluid' : '',
    state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.state = state;
  root.setAttribute('aria-label', ariaLabel || title);
  bindCardActivation(root, onClick);

  const cover = document.createElement('div');
  cover.className = 'nn-game-release-card__cover';
  const image = document.createElement('img');
  image.className = 'nn-game-release-card__cover-image';
  image.src = coverSrc;
  image.alt = '';
  cover.appendChild(image);

  const platformIcons = {
    steam: {
      label: 'Steam',
      icon: 'nicon-a-STEAM-fillSTEAM-mianxing'
    },
    wg: {
      label: 'WG',
      icon: 'nicon-a-WG-lineWG-xianxing'
    },
    bn: {
      label: 'BN',
      icon: 'nicon-a-BN-lineBN-xianxing'
    },
    epic: {
      label: 'Epic',
      icon: 'nicon-a-Epic-lineEpic-xianxing'
    }
  };
  const usesPlatformArray = Array.isArray(platforms);
  const requestedPlatforms = usesPlatformArray
    ? platforms
    : (showSteam === false ? [] : [platform]);
  const visiblePlatforms = requestedPlatforms
    .map(function(item) { return String(item || '').toLowerCase(); })
    .filter(function(item, index, values) {
      return Boolean(platformIcons[item]) && values.indexOf(item) === index;
    });

  if (!usesPlatformArray && showSteam !== false && !visiblePlatforms.length) {
    visiblePlatforms.push('steam');
  }

  if (visiblePlatforms.length) {
    const platformList = document.createElement('div');
    platformList.className = 'nn-game-release-card__platforms';
    platformList.setAttribute('aria-label', '游戏平台');
    visiblePlatforms.forEach(function(platformKey) {
      const platformConfig = platformIcons[platformKey];
      const platformBadge = document.createElement('span');
      platformBadge.className = [
        'nn-game-release-card__cover-badge',
        'nn-game-release-card__cover-badge--platform',
        `nn-game-release-card__cover-badge--${platformKey}`
      ].join(' ');
      platformBadge.setAttribute('aria-label', platformConfig.label);
      platformBadge.innerHTML = `<i class="nnicon ${platformConfig.icon}" aria-hidden="true"></i>`;
      platformList.appendChild(platformBadge);
    });
    cover.appendChild(platformList);
  }

  root.appendChild(cover);

  const body = document.createElement('div');
  body.className = 'nn-game-release-card__body';
  const main = document.createElement('div');
  main.className = 'nn-game-release-card__main';
  const copy = document.createElement('div');
  copy.className = 'nn-game-release-card__copy';
  const titleElement = document.createElement('span');
  titleElement.className = 'nn-game-release-card__title';
  titleElement.textContent = title;
  const descriptionElement = document.createElement('span');
  descriptionElement.className = 'nn-game-release-card__description';
  descriptionElement.textContent = description;
  copy.appendChild(titleElement);
  copy.appendChild(descriptionElement);
  main.appendChild(copy);

  const ratingElement = document.createElement('span');
  ratingElement.className = 'nn-game-release-card__rating';
  const ratingLabelElement = document.createElement('span');
  ratingLabelElement.className = 'nn-game-release-card__rating-label';
  ratingLabelElement.textContent = ratingLabel;
  const ratingValueElement = document.createElement('span');
  ratingValueElement.className = 'nn-game-release-card__rating-value';
  const ratingText = String(rating ?? '');
  const ratingMatch = ratingText.match(/^(.*?)(%)$/);
  const ratingNumberElement = document.createElement('span');
  ratingNumberElement.className = 'nn-game-release-card__rating-number';
  ratingNumberElement.textContent = ratingMatch ? ratingMatch[1] : ratingText;
  ratingValueElement.appendChild(ratingNumberElement);
  if (ratingMatch) {
    const ratingUnitElement = document.createElement('span');
    ratingUnitElement.className = 'nn-game-release-card__rating-unit';
    ratingUnitElement.textContent = ratingMatch[2];
    ratingValueElement.appendChild(ratingUnitElement);
  }
  ratingElement.appendChild(ratingLabelElement);
  ratingElement.appendChild(ratingValueElement);
  main.appendChild(ratingElement);
  body.appendChild(main);

  const rawTags = Array.isArray(tags)
    ? tags
    : tags == null
      ? [metaLabel]
      : [tags];
  const visibleTags = rawTags
    .map(function(tag) { return String(tag ?? '').trim(); })
    .filter(Boolean)
    .slice(0, 1);
  const ageText = String(age ?? '').trim();

  if (visibleTags.length || ageText) {
    const meta = document.createElement('div');
    meta.className = 'nn-game-release-card__meta';
    if (ageText) {
      const ageElement = document.createElement('span');
      ageElement.className = 'nn-game-release-card__age';
      const ageIcon = document.createElement('i');
      ageIcon.className = 'nnicon nicon-a-Quadrangle-Linesijiaoxing-xianxing nn-game-release-card__meta-icon';
      ageIcon.setAttribute('aria-hidden', 'true');
      ageElement.appendChild(ageIcon);
      ageElement.appendChild(document.createTextNode(ageText));
      meta.appendChild(ageElement);
    }
    visibleTags.forEach(function(tag) {
      const tagElement = document.createElement('span');
      tagElement.className = 'nn-game-release-card__meta-label';
      const metaText = document.createElement('span');
      metaText.className = 'nn-game-release-card__meta-text';
      metaText.textContent = tag;
      tagElement.appendChild(metaText);
      meta.appendChild(tagElement);
    });
    body.appendChild(meta);
  }
  root.appendChild(body);

  return root;
}

function createPlayerCommunityCard(options = {}) {
  injectCommunityCardStyles();

  const {
    state = 'default',
    coverSrc = '../image/Game logo/game1-cover.webp',
    title = '绝地求生玩家社区',
    description = '欢迎加入绝地求生玩家社区',
    certification = {
      officialSrc: '../image/Community Level/Corporate Certification.svg',
      officialCertColor: 'red'
    },
    communityLevel = { lv: 6, size: 'small' },
    id = { text: '90231', size: 'small' },
    onlineText = '18.5K',
    ariaLabel = '',
    fluid = false,
    className = '',
    onClick = null
  } = options;

  const root = document.createElement('article');
  root.className = [
    'nn-player-community-card',
    fluid ? 'nn-player-community-card--fluid' : '',
    state === 'hover' ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.state = state;
  root.setAttribute('aria-label', ariaLabel || title);
  bindCardActivation(root, onClick);

  const cover = document.createElement('div');
  cover.className = 'nn-player-community-card__cover';
  const image = document.createElement('img');
  image.className = 'nn-player-community-card__cover-image';
  image.src = coverSrc;
  image.alt = '';
  cover.appendChild(image);
  root.appendChild(cover);

  const body = document.createElement('div');
  body.className = 'nn-player-community-card__body';
  const main = document.createElement('div');
  main.className = 'nn-player-community-card__main';
  const copy = document.createElement('div');
  copy.className = 'nn-player-community-card__copy';
  const titleElement = document.createElement('span');
  titleElement.className = 'nn-player-community-card__title';
  titleElement.textContent = title;
  const descriptionElement = document.createElement('span');
  descriptionElement.className = 'nn-player-community-card__description';
  descriptionElement.textContent = description;
  copy.appendChild(titleElement);
  copy.appendChild(descriptionElement);
  main.appendChild(copy);
  body.appendChild(main);

  const identity = document.createElement('div');
  identity.className = 'nn-player-community-card__identity';
  if (certification !== false) {
    identity.appendChild(createOfficialCertificationLabel(Object.assign({
      officialSrc: '../image/Community Level/Corporate Certification.svg',
      officialCertColor: 'red'
    }, certification || {})));
  }
  if (communityLevel && typeof window !== 'undefined' && typeof window.createEquityCommunityLevel === 'function') {
    identity.appendChild(window.createEquityCommunityLevel(Object.assign({
      size: 'small'
    }, communityLevel)));
  }
  if (id && typeof window !== 'undefined' && typeof window.createEquity === 'function') {
    identity.appendChild(window.createEquity(Object.assign({ size: 'small' }, id)));
  }
  const online = document.createElement('span');
  online.className = 'nn-player-community-card__online';
  const onlineDot = document.createElement('span');
  onlineDot.className = 'nn-player-community-card__online-dot';
  const onlineLabel = document.createElement('span');
  onlineLabel.textContent = onlineText;
  online.appendChild(onlineDot);
  online.appendChild(onlineLabel);
  identity.appendChild(online);
  body.appendChild(identity);
  root.appendChild(body);

  return root;
}

function renderCommunityCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createCommunityCard(options));
}

function renderBringPlayCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createBringPlayCard(options));
}

function renderGameListCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createGameListCard(options));
}

function renderGameReleaseCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createGameReleaseCard(options));
}

function renderPlayerCommunityCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createPlayerCommunityCard(options));
}

/* ========================================================================== */
/* Accelerator card components                                                */
/* ========================================================================== */

const AcceleratorWishListCardStyles = `
  .nn-wishlist-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space24);
    width: 492px;
    max-width: 100%;
    height: 67px;
    min-height: 67px;
    padding: var(--space0) var(--space16) var(--space0) var(--space0);
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: var(--gray-10);
    box-shadow: none;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    transition: background-color 0.16s ease;
  }

  .nn-wishlist-card::after {
    position: absolute;
    inset: var(--space0);
    z-index: 3;
    border-radius: inherit;
    box-shadow: var(--shadow-stroke-inset-subtle);
    content: '';
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.16s ease;
  }

  .nn-wishlist-card:hover {
    background: var(--gray-9);
  }

  .nn-wishlist-card:hover::after {
    opacity: 1;
  }

  .nn-wishlist-card.is-clickable {
    cursor: pointer;
  }

  .nn-wishlist-card__main {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
  }

  .nn-wishlist-card__cover-wrap {
    position: relative;
    width: 120px;
    height: 67px;
    flex: 0 0 120px;
    overflow: visible;
    background: var(--gray-9);
  }

  .nn-wishlist-card--cover-large {
    height: 90px;
    min-height: 90px;
  }

  .nn-wishlist-card--cover-large .nn-wishlist-card__cover-wrap {
    width: 160px;
    height: 90px;
    flex-basis: 160px;
  }

  .nn-wishlist-card__cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-wishlist-card__rank {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: var(--space0) var(--space0) var(--border-radius-4r) var(--space0);
    color: var(--Neutral-2);
    background: var(--White-A60);
    font-family: var(--font-family-din);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-bold);
    text-align: center;
    line-height: 1;
  }

  .nn-wishlist-card__rank[data-rank="1"] {
    background: var(--Leaderboard-Rank-First);
  }

  .nn-wishlist-card__rank[data-rank="2"] {
    background: var(--Leaderboard-Rank-Second);
  }

  .nn-wishlist-card__rank[data-rank="3"] {
    background: var(--Leaderboard-Rank-Third);
  }

  .nn-wishlist-card__rank[data-rank="4"] {
    background: var(--White-A60);
  }

  .nn-wishlist-card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space6);
    min-width: 0;
  }

  .nn-wishlist-card__title,
  .nn-wishlist-card__description {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-wishlist-card__title {
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
  }

  .nn-wishlist-card__description {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .nn-wishlist-card__steam.nn-btn {
    min-width: 68px;
    box-sizing: border-box;
  }

  .nn-wishlist-card__data {
    display: flex;
    height: 44px;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .nn-wishlist-card__data-value-group {
    display: flex;
    height: 23px;
    align-items: baseline;
    gap: var(--space2);
    line-height: 1;
  }

  .nn-wishlist-card__data-value {
    height: 23px;
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-header-2);
    font-weight: var(--font-weight-bold);
    line-height: normal;
    white-space: nowrap;
  }

  .nn-wishlist-card__data-unit {
    display: block;
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-wishlist-card__data-label {
    max-width: 100px;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-wishlist-card--game-profile {
    width: 100%;
    height: 110px;
    min-height: 110px;
  }

  .nn-wishlist-card--game-profile-ranked {
    display: grid;
    width: 662px;
    height: auto;
    min-height: 0;
    padding-left: calc(39.75% + var(--space16));
    aspect-ratio: 331 / 74;
    grid-template-columns: minmax(0, 1fr) max-content;
    grid-template-rows: minmax(56px, 1fr) 42px;
    align-items: stretch;
    column-gap: var(--space16);
    row-gap: var(--space8);
  }

  .nn-wishlist-card--game-profile-ranked .nn-wishlist-card__main {
    display: contents;
  }

  .nn-wishlist-card--game-profile.nn-wishlist-card--game-profile-ranked .nn-wishlist-card__cover-wrap {
    position: absolute;
    inset: var(--space0) auto var(--space0) var(--space0);
    width: 39.75%;
    height: 100%;
    aspect-ratio: 16 / 9;
    flex-basis: auto;
  }

  .nn-wishlist-card--game-profile-ranked .nn-wishlist-card__content {
    align-self: center;
    grid-column: 1;
    grid-row: 1;
  }

  .nn-wishlist-card--game-profile-ranked .nn-wishlist-card__data {
    height: auto;
    grid-column: 2;
    grid-row: 1;
  }

  .nn-wishlist-card--game-profile .nn-wishlist-card__cover-wrap {
    width: 160px;
    height: 90px;
    flex-basis: 160px;
  }

  .nn-wishlist-card--game-profile .nn-wishlist-card__content {
    gap: var(--space4);
  }

  .nn-wishlist-card__platforms {
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    gap: var(--space4);
    overflow: hidden;
  }

  .nn-wishlist-card__platform {
    display: inline-flex;
    min-width: 0;
    flex: 0 0 auto;
    align-items: center;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-wishlist-card__platform .nnicon {
    display: inline-flex;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    align-items: center;
    justify-content: center;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-wishlist-card__cover-wrap > .nn-wishlist-card__platforms {
    position: absolute;
    left: var(--space0);
    bottom: var(--space0);
    z-index: 2;
    width: auto;
    max-width: 100%;
    padding: var(--space4);
    overflow: hidden;
    border-radius: var(--space0) var(--border-radius-2r) var(--space0) var(--space0);
    box-sizing: border-box;
    background: var(--Black-A70);
  }

  .nn-wishlist-card__cover-wrap > .nn-wishlist-card__platforms .nn-wishlist-card__platform {
    color: var(--Neutral-0);
  }

  .nn-wishlist-card--game-profile .nn-wishlist-card__data {
    height: 90px;
    flex-direction: row;
    align-items: center;
    gap: var(--space20);
  }

  .nn-wishlist-card__data-metric {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  .nn-wishlist-card__data-ranks {
    display: grid;
    min-width: 140px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space8) var(--space16);
  }

  .nn-wishlist-card--game-profile-ranked .nn-wishlist-card__data-ranks {
    width: auto;
    min-width: 0;
    grid-column: 1 / 3;
    grid-row: 2;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space16);
    margin-left: var(--space0);
    transform: translateY(calc(var(--space8) * -1));
  }

  .nn-wishlist-card__data-rank {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space2);
  }

  .nn-wishlist-card__data-rank-value {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    font-variant-numeric: tabular-nums;
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    white-space: nowrap;
  }

  .nn-wishlist-card__data-rank-label {
    max-width: 100%;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 620px) {
    .nn-wishlist-card {
      gap: var(--space12);
    }

    .nn-wishlist-card__main {
      gap: var(--space12);
    }

    .nn-wishlist-card__cover-wrap {
      width: 96px;
      flex-basis: 96px;
    }

    .nn-wishlist-card--game-profile .nn-wishlist-card__cover-wrap {
      width: 120px;
      flex-basis: 120px;
    }

    .nn-wishlist-card--game-profile .nn-wishlist-card__data {
      gap: var(--space12);
    }

    .nn-wishlist-card--game-profile-ranked .nn-wishlist-card__data-ranks {
      gap: var(--space8);
    }

    .nn-wishlist-card--game-profile-ranked {
      row-gap: var(--space8);
    }

    .nn-wishlist-card__steam .nn-btn-text {
      display: none;
    }

    .nn-wishlist-card__steam.nn-btn {
      min-width: var(--icon-size-x16);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-wishlist-card,
    .nn-wishlist-card::after,
    .nn-wishlist-card__steam.nn-btn {
      transition: none;
    }
  }
`;

function injectAcceleratorWishListCardStyles() {
  if (document.getElementById('nn-wishlist-card-styles')) return;

  const style = document.createElement('style');
  style.id = 'nn-wishlist-card-styles';
  style.textContent = AcceleratorWishListCardStyles;
  document.head.appendChild(style);
}

function createAcceleratorWishListCard(options = {}) {
  injectAcceleratorWishListCardStyles();
  if (typeof injectButtonStyles === 'function') injectButtonStyles();

  const isGameProfile = options.variant === 'game-profile';
  const requestedRank = Number(options.rank);
  const rank = Number.isFinite(requestedRank) ? Math.max(0, Math.floor(requestedRank)) : 0;
  const rightType = options.rightType === 'data' ? 'data' : 'button';
  const isRankedGameProfile = isGameProfile
    && rightType === 'data'
    && options.hideData !== true
    && options.hideDataRank !== true;
  const showSteam = rightType === 'button' && options.steam !== false;
  const gameTitle = options.gameTitle || '《巫师3：狂猎》- 重制版';
  const descriptionText = options.description == null
    ? '可配置描述内容'
    : String(options.description);

  const root = document.createElement('article');
  root.className = [
    'nn-wishlist-card',
    options.coverSize === 'large' ? 'nn-wishlist-card--cover-large' : '',
    isGameProfile ? 'nn-wishlist-card--game-profile' : '',
    isRankedGameProfile ? 'nn-wishlist-card--game-profile-ranked' : '',
    typeof options.onClick === 'function' ? 'is-clickable' : '',
    options.className || ''
  ].filter(Boolean).join(' ');

  const main = document.createElement('div');
  main.className = 'nn-wishlist-card__main';

  const coverWrap = document.createElement('div');
  coverWrap.className = 'nn-wishlist-card__cover-wrap';

  const cover = document.createElement('img');
  cover.className = 'nn-wishlist-card__cover';
  cover.src = options.imageSrc || '../image/Steam achievements/witcher3/game-cover-16x9.jpg';
  cover.alt = options.imageAlt || gameTitle;
  coverWrap.appendChild(cover);

  if (rank > 0) {
    const rankBadge = document.createElement('span');
    rankBadge.className = 'nn-wishlist-card__rank';
    rankBadge.dataset.rank = String(rank);
    rankBadge.textContent = String(rank);
    rankBadge.setAttribute('aria-label', `排名第 ${rank} 名`);
    coverWrap.appendChild(rankBadge);
  }

  const content = document.createElement('div');
  content.className = 'nn-wishlist-card__content';

  const title = document.createElement('div');
  title.className = 'nn-wishlist-card__title';
  title.textContent = gameTitle;
  title.title = title.textContent;

  const description = document.createElement('div');
  description.className = 'nn-wishlist-card__description';
  description.textContent = descriptionText;
  description.title = description.textContent;

  content.appendChild(title);
  content.appendChild(description);

  const hasRequestedPlatforms = Array.isArray(options.platforms) && options.platforms.length > 0;
  if (isGameProfile || hasRequestedPlatforms) {
    const platformMap = {
      steam: { label: 'Steam', iconClass: 'nicon-a-STEAM-lineSTEAM-xianxing' },
      epic: { label: 'Epic', iconClass: 'nicon-a-Epic-lineEpic-xianxing' },
      wg: { label: 'WeGame', iconClass: 'nicon-a-WG-lineWG-xianxing' },
      wegame: { label: 'WeGame', iconClass: 'nicon-a-WG-lineWG-xianxing' }
    };
    const requestedPlatforms = Array.isArray(options.platforms) && options.platforms.length
      ? options.platforms
      : ['steam'];
    const platforms = requestedPlatforms.map(function(platform) {
      if (typeof platform === 'string') return platformMap[platform.toLowerCase()] || null;
      if (!platform || typeof platform !== 'object') return null;
      return {
        label: platform.label || platform.name || '',
        iconClass: platform.iconClass || platform.icon || ''
      };
    }).filter(function(platform) {
      return platform && platform.label && platform.iconClass;
    });

    if (platforms.length) {
      const platformList = document.createElement('div');
      platformList.className = 'nn-wishlist-card__platforms';
      platformList.setAttribute('aria-label', '游戏平台：' + platforms.map(function(platform) {
        return platform.label;
      }).join('、'));
      platforms.forEach(function(platform) {
        const platformItem = document.createElement('span');
        platformItem.className = 'nn-wishlist-card__platform';
        platformItem.setAttribute('aria-hidden', 'true');
        const platformIcon = document.createElement('i');
        platformIcon.className = 'nnicon ' + platform.iconClass;
        platformItem.appendChild(platformIcon);
        platformList.appendChild(platformItem);
      });
      if (isRankedGameProfile || !isGameProfile) {
        coverWrap.appendChild(platformList);
      } else {
        content.appendChild(platformList);
      }
    }
  }

  main.appendChild(coverWrap);
  main.appendChild(content);
  root.appendChild(main);

  if (showSteam) {
    const isPrimarySteamButton = options.steamVariant === 'primary';
    const steamButton = createButton({
      text: options.steamText || '前往Steam',
      variant: 'system',
      level: isPrimarySteamButton ? 'primary' : 'secondary',
      size: 'default',
      icon: options.steamIcon === false
        ? null
        : `<i class="${options.steamIconClass || 'nnicon nicon-a-STEAM-lineSTEAM-xianxing'}" aria-hidden="true"></i>`,
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x9)',
      className: 'nn-wishlist-card__steam',
      onClick: function(event) {
        event.stopPropagation();
        if (typeof options.onSteamClick === 'function') options.onSteamClick(event, root);
      }
    });
    steamButton.setAttribute('aria-label', options.steamText || '前往Steam');
    root.appendChild(steamButton);
  }

  if (rightType === 'data' && options.hideData !== true) {
    const data = document.createElement('div');
    data.className = 'nn-wishlist-card__data';
    let profileDataRanks = null;

    const valueGroup = document.createElement('div');
    valueGroup.className = 'nn-wishlist-card__data-value-group';

    const dataValue = document.createElement('span');
    dataValue.className = 'nn-wishlist-card__data-value';
    dataValue.textContent = options.dataValue == null ? '36.7' : String(options.dataValue);

    const dataUnit = document.createElement('span');
    dataUnit.className = 'nn-wishlist-card__data-unit';
    dataUnit.textContent = options.dataUnit == null ? 'h' : String(options.dataUnit);

    const dataLabel = document.createElement('span');
    dataLabel.className = 'nn-wishlist-card__data-label';
    dataLabel.textContent = options.dataLabel == null ? '总时长' : String(options.dataLabel);
    dataLabel.title = dataLabel.textContent;

    valueGroup.appendChild(dataValue);
    if (dataUnit.textContent) valueGroup.appendChild(dataUnit);

    if (isGameProfile) {
      const dataMetric = document.createElement('div');
      dataMetric.className = 'nn-wishlist-card__data-metric';
      dataMetric.appendChild(valueGroup);
      dataMetric.appendChild(dataLabel);
      data.appendChild(dataMetric);

      if (options.hideDataRank !== true) {
        const requestedDataRanks = Array.isArray(options.dataRanks)
          ? options.dataRanks.slice(0, 4)
          : [{
              value: options.dataRank == null ? '1' : options.dataRank,
              label: options.dataRankLabel || '全站排名'
            }];
        const normalizedDataRanks = requestedDataRanks.map(function(rankItem) {
          if (rankItem == null) return null;
          if (typeof rankItem !== 'object') {
            return { value: String(rankItem).replace(/^#/, ''), label: '' };
          }
          return {
            value: String(rankItem.value == null ? '' : rankItem.value).replace(/^#/, ''),
            label: String(rankItem.label || rankItem.scope || '')
          };
        }).filter(function(rankItem) {
          return rankItem && (rankItem.value || rankItem.label);
        });

        if (normalizedDataRanks.length) {
          const dataRanks = document.createElement('div');
          dataRanks.className = 'nn-wishlist-card__data-ranks';
          normalizedDataRanks.forEach(function(rankItem) {
            const dataRank = document.createElement('div');
            dataRank.className = 'nn-wishlist-card__data-rank';
            const dataRankLabel = document.createElement('span');
            dataRankLabel.className = 'nn-wishlist-card__data-rank-label';
            dataRankLabel.textContent = rankItem.label;
            const dataRankValue = document.createElement('span');
            dataRankValue.className = 'nn-wishlist-card__data-rank-value';
            dataRankValue.textContent = rankItem.value;
            dataRank.appendChild(dataRankLabel);
            dataRank.appendChild(dataRankValue);
            dataRanks.appendChild(dataRank);
          });
          profileDataRanks = dataRanks;
        }
      }
    } else {
      data.appendChild(valueGroup);
      data.appendChild(dataLabel);
    }
    root.appendChild(data);
    if (profileDataRanks) root.appendChild(profileDataRanks);
  }

  if (typeof options.onClick === 'function') {
    root.addEventListener('click', function(event) {
      options.onClick(event, root);
    });
  }

  return root;
}

if (typeof window !== 'undefined') window.createAcceleratorWishListCard = createAcceleratorWishListCard;

const AcceleratorAchievementCardStyles = `
  .nn-achievement-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space28);
    width: 920px;
    max-width: 100%;
    min-height: 62px;
    padding: var(--space0) var(--space10) var(--space0) var(--space0);
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    transition: background-color 0.16s ease;
  }

  .nn-achievement-card::after {
    position: absolute;
    inset: var(--space0);
    z-index: 3;
    border-radius: inherit;
    box-shadow: var(--shadow-stroke-inset-subtle);
    content: '';
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.16s ease;
  }

  .nn-achievement-card:hover {
    background: var(--gray-9);
  }

  .nn-achievement-card:hover::after {
    opacity: 1;
  }

  .nn-achievement-card__game {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 400px;
    flex: 0 0 400px;
    min-width: 0;
  }

  .nn-achievement-card__cover {
    display: block;
    width: 110px;
    height: 62px;
    flex: 0 0 110px;
    object-fit: cover;
  }

  .nn-achievement-card__game-info {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space10);
    min-width: 0;
  }

  .nn-achievement-card__title {
    width: 100%;
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-achievement-card__progress-row {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
  }

  .nn-achievement-card__progress-label {
    width: 40px;
    flex: 0 0 40px;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-achievement-card__progress-track {
    position: relative;
    display: block;
    flex: 1 1 auto;
    height: 6px;
    min-width: 0;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
  }

  .nn-achievement-card__progress-fill {
    display: block;
    height: 100%;
    background: var(--Esports-Blue);
  }

  .nn-achievement-card__achievements {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    overflow: hidden;
  }

  .nn-achievement-card__icon-list {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--space10);
    height: 32px;
    min-width: 0;
    overflow: hidden;
  }

  .nn-achievement-card__icon {
    display: block;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
    object-fit: cover;
  }

  .nn-achievement-card__icon.is-locked {
    filter: grayscale(1);
    opacity: 0.2;
  }

  .nn-achievement-card__arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 var(--icon-size-x12);
    color: var(--gray-6);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-achievement-card__arrow .nnicon {
    display: block;
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  @media (max-width: 920px) {
    .nn-achievement-card {
      gap: var(--space16);
    }

    .nn-achievement-card__game {
      width: 320px;
      flex-basis: 320px;
    }

    .nn-achievement-card__cover {
      width: 96px;
      flex-basis: 96px;
    }
  }

  @media (max-width: 680px) {
    .nn-achievement-card__game {
      width: 240px;
      flex-basis: 240px;
    }

    .nn-achievement-card__cover {
      width: 80px;
      height: 62px;
      flex-basis: 80px;
    }

    .nn-achievement-card__icon-list {
      gap: var(--space4);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-achievement-card,
    .nn-achievement-card::after {
      transition: none;
    }
  }
`;

const AcceleratorAchievementCardDefaultIcons = [
  '../image/Steam achievements/witcher3/01-6078587189483353f06f48d0eefdaaa0791e9e13.jpg',
  '../image/Steam achievements/witcher3/02-07bae88f1ee9b856ddfc1d8e28ae7eedd4bcde95.jpg',
  '../image/Steam achievements/witcher3/03-652e39d4e750183a390a4e9f2f99018c1b335a20.jpg',
  '../image/Steam achievements/witcher3/04-883f82ffa933d6d12da3e8733f340b082a08c325.jpg',
  '../image/Steam achievements/witcher3/05-97246533609245ba270e7a8eb39a64d319ce5011.jpg',
  '../image/Steam achievements/witcher3/06-46b0b574e6334d81211e0c3db1539d3a76364144.jpg',
  '../image/Steam achievements/witcher3/07-67f5b9e4908b0f9dc3e4d49832977e79b874d632.jpg',
  '../image/Steam achievements/witcher3/08-244c4f4a34a6b52fa21fdbe5d063fe03f67ab690.jpg',
  '../image/Steam achievements/witcher3/09-11d3dfdd398ce5f603b2aafb8f25abbebe253251.jpg',
  '../image/Steam achievements/witcher3/10-498953796558d3efb8cac2ba88ff6d3106a0b2d1.jpg',
  '../image/Steam achievements/witcher3/11-de338575f9e854352f4fc2704e0c0c76f005d2f0.jpg',
  '../image/Steam achievements/witcher3/12-369497d2df3dc73a08f7e7ec865b0a2dd7ff13ad.jpg',
  '../image/Steam achievements/witcher3/13-be7678e1d2705ee2b966525d5ffa483f37cfad63.jpg',
  '../image/Steam achievements/witcher3/14-d0dd0e6d399623a32de59646aa1a300704b7a7df.jpg',
  '../image/Steam achievements/witcher3/15-ff1d6abba9cc160bca253bf104cee24f3729bbb4.jpg',
  '../image/Steam achievements/witcher3/16-93ae2c276206d0996af7642447937edfb61b72d5.jpg',
  '../image/Steam achievements/witcher3/17-7c8411f39dbfcf908cb91135d9afda99d26ea368.jpg',
  '../image/Steam achievements/witcher3/18-aa0d6d81bfbbfab13015906222ac7c0e5f1fe75e.jpg',
  '../image/Steam achievements/witcher3/19-b43873e64dd6b7af2a3fc3a486a9f383608316db.jpg',
  '../image/Steam achievements/witcher3/20-8c7b4a1025ac8b333501b6908a0ecf623dbdabef.jpg',
  '../image/Steam achievements/witcher3/21-641d653a10a2e36148b18f3ff211fc4fbf6cce56.jpg',
  '../image/Steam achievements/witcher3/22-c00ab1464735830839ff81fd2c1123022d4ebd6c.jpg',
  '../image/Steam achievements/witcher3/23-9f00025ca51d74d3929bd492d57b921f1bea96bc.jpg',
  '../image/Steam achievements/witcher3/24-5c617bc94010e4bb7d23eb0db50108a5f2cf233e.jpg',
  '../image/Steam achievements/witcher3/25-a597bfce83b9a58db9a1cd93cf11568c8e279d51.jpg',
  '../image/Steam achievements/witcher3/26-6076b7237efe8831282a7af7943465d75552c081.jpg',
  '../image/Steam achievements/witcher3/27-b0af41218dd97974bb79e52d8da74f41e0e67c6d.jpg',
  '../image/Steam achievements/witcher3/28-118edd0f24facb990a4ee0b50c357aa1ea58de5e.jpg',
  '../image/Steam achievements/witcher3/29-dc8c41341f28d47be7fa4295866f552878d20694.jpg',
  '../image/Steam achievements/witcher3/30-b33cd0fcb3bab390513b5128c0ba911cbcc280a9.jpg',
  '../image/Steam achievements/witcher3/31-9e93a5012fa1c520d934f5f4836985291284646a.jpg',
  '../image/Steam achievements/witcher3/32-97a340c08bc669b8e6a19c427ee6e700b27064b9.jpg',
  '../image/Steam achievements/witcher3/33-30f4cbf87029b9a5620a8d3c6a08743ccd660342.jpg',
  '../image/Steam achievements/witcher3/34-17236a84094cb1a622ffa3ba26fd13a5080aa966.jpg',
  '../image/Steam achievements/witcher3/35-47c15cc475e18c34d369d531a9abfb6bfbd99cc1.jpg'
];

function injectAcceleratorAchievementCardStyles() {
  if (document.getElementById('nn-achievement-card-styles')) return;

  const style = document.createElement('style');
  style.id = 'nn-achievement-card-styles';
  style.textContent = AcceleratorAchievementCardStyles;
  document.head.appendChild(style);
}

function createAcceleratorAchievementCard(options = {}) {
  injectAcceleratorAchievementCardStyles();

  const icons = Array.isArray(options.achievements) && options.achievements.length
    ? options.achievements
    : AcceleratorAchievementCardDefaultIcons;
  const completedCount = Math.max(
    0,
    options.completedCount == null ? 14 : Number(options.completedCount)
  );
  const totalCount = Math.max(
    completedCount,
    options.totalCount == null ? 37 : Number(options.totalCount)
  );
  const highlightedCount = Math.max(
    0,
    Math.min(
      icons.length,
      options.highlightedCount == null ? 6 : Number(options.highlightedCount)
    )
  );
  const progress = Math.min(100, (completedCount / totalCount) * 100);

  const root = document.createElement('article');
  root.className = ['nn-achievement-card', options.className || ''].filter(Boolean).join(' ');
  root.setAttribute('aria-label', options.ariaLabel || '游戏成就卡');

  const game = document.createElement('div');
  game.className = 'nn-achievement-card__game';

  const cover = document.createElement('img');
  cover.className = 'nn-achievement-card__cover';
  cover.src = options.imageSrc || '../image/Steam achievements/witcher3/game-cover-16x9.jpg';
  cover.alt = options.imageAlt || options.gameTitle || '游戏封面';

  const gameInfo = document.createElement('div');
  gameInfo.className = 'nn-achievement-card__game-info';

  const title = document.createElement('div');
  title.className = 'nn-achievement-card__title';
  title.textContent = options.gameTitle || '《巫师3：狂猎》- 重制版';
  title.title = title.textContent;

  const progressRow = document.createElement('div');
  progressRow.className = 'nn-achievement-card__progress-row';

  const progressLabel = document.createElement('span');
  progressLabel.className = 'nn-achievement-card__progress-label';
  progressLabel.textContent = `${completedCount}/${totalCount}`;

  const progressTrack = document.createElement('span');
  progressTrack.className = 'nn-achievement-card__progress-track';

  const progressFill = document.createElement('span');
  progressFill.className = 'nn-achievement-card__progress-fill';
  progressFill.style.width = `${progress}%`;
  progressTrack.appendChild(progressFill);
  progressRow.appendChild(progressLabel);
  progressRow.appendChild(progressTrack);
  gameInfo.appendChild(title);
  gameInfo.appendChild(progressRow);
  game.appendChild(cover);
  game.appendChild(gameInfo);
  root.appendChild(game);

  const achievementArea = document.createElement('div');
  achievementArea.className = 'nn-achievement-card__achievements';

  const iconList = document.createElement('div');
  iconList.className = 'nn-achievement-card__icon-list';
  icons.forEach(function(iconSource, index) {
    const icon = document.createElement('img');
    const source = typeof iconSource === 'string' ? iconSource : iconSource.icon;
    const label = typeof iconSource === 'string' ? `Steam 成就 ${index + 1}` : (iconSource.name || `Steam 成就 ${index + 1}`);
    icon.className = 'nn-achievement-card__icon';
    if (index >= highlightedCount) icon.classList.add('is-locked');
    icon.src = source;
    icon.alt = label;
    icon.title = label;
    iconList.appendChild(icon);
  });

  const arrow = document.createElement('span');
  arrow.className = 'nn-achievement-card__arrow';
  const arrowIcon = document.createElement('span');
  arrowIcon.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing';
  arrowIcon.setAttribute('aria-hidden', 'true');
  arrow.appendChild(arrowIcon);

  achievementArea.appendChild(iconList);
  achievementArea.appendChild(arrow);
  root.appendChild(achievementArea);

  if (typeof options.onClick === 'function') {
    root.addEventListener('click', function(event) {
      options.onClick(event, root);
    });
  }

  return root;
}

if (typeof window !== 'undefined') window.createAcceleratorAchievementCard = createAcceleratorAchievementCard;


const AcceleratorSteamInformationCardStyles = `
  .nn-steam-information-card {
    --gray-3: var(--White-A90);
    --gray-4: var(--White-A80);
    --gray-5: var(--White-A70);
    --gray-6: var(--White-A50);
    --gray-8: var(--White-A10);
    --gray-9: var(--White-A6);
    --gray-10: var(--White-A4);
    --gray-12: var(--White-A4);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    max-width: 100%;
    height: 114px;
    padding: var(--space16);
    overflow: visible;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: radial-gradient(ellipse 500px 57px at 500px 57px, var(--steam-card-bg-center) 0%, var(--steam-card-bg-middle) 50%, var(--steam-card-bg-edge) 100%);
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .nn-steam-information-card__content {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: var(--space16);
    flex-shrink: 0;
    min-width: 0;
  }

  .nn-steam-information-card.is-bound {
    z-index: 10;
  }

  .nn-steam-information-card__avatar-component {
    flex: 0 0 80px;
  }

  .nn-steam-information-card.is-not-bound
    .nn-steam-information-card__avatar-component {
    overflow: hidden;
    border-radius: var(--border-radius-round);
  }

  .nn-steam-information-card.is-not-bound
    .nn-steam-information-card__avatar-component img {
    border-radius: var(--border-radius-round) !important;
  }

  .nn-steam-information-card__details {
    display: flex;
    width: 425px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space10);
    min-width: 0;
  }

  .nn-steam-information-card__identity,
  .nn-steam-information-card__meta,
  .nn-steam-information-card__name-group,
  .nn-steam-information-card__steam-id,
  .nn-steam-information-card__friends,
  .nn-steam-information-card__friend-avatars {
    display: flex;
    align-items: center;
  }

  .nn-steam-information-card__identity {
    gap: var(--space10);
    min-width: 0;
  }

  .nn-steam-information-card__name-group {
    gap: var(--space2);
    min-width: 0;
  }

  .nn-steam-information-card__account-dropdown.nn-dropdown {
    width: auto;
    flex: 0 0 auto;
  }

  .nn-steam-information-card__account-dropdown .nn-dropdown-panel {
    top: calc(100% + var(--space8));
    width: 300px;
  }

  .nn-steam-information-card__account-dropdown .nn-dropdown-list {
    gap: var(--space2);
  }

  .nn-steam-information-card__account-dropdown .nn-dropdown-item {
    height: 62px;
    min-height: 62px;
    padding: var(--space12) var(--space8);
  }

  .nn-steam-information-card__account-dropdown .nn-dropdown-item.is-selected {
    background: var(--gray-10);
  }

  .nn-steam-information-card__account-option {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-steam-information-card__account-option-copy {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
  }

  .nn-steam-information-card__account-option-name,
  .nn-steam-information-card__account-option-id {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-steam-information-card__account-option-name {
    color: var(--gray-5);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-steam-information-card__account-option-id {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-steam-information-card__account-option-check {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 var(--icon-size-x12);
    color: var(--gray-4);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-steam-information-card__name {
    max-width: 180px;
    overflow: hidden;
    color: var(--gray-4);
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-header-3);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-steam-information-card.is-not-bound .nn-steam-information-card__name {
    max-width: none;
  }

  .nn-steam-information-card__name-arrow.nn-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    min-width: 18px;
    padding: var(--space0);
    flex: 0 0 18px;
  }

  .nn-steam-information-card__level {
    padding: var(--space2) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-steam-information-card__updated {
    padding-left: var(--space8);
    border-left: 1px solid var(--gray-8);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-steam-information-card__meta {
    gap: var(--space24);
    width: 100%;
    min-width: 0;
  }

  .nn-steam-information-card__steam-id {
    gap: var(--space4);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-steam-information-card__copy {
    flex: 0 0 auto;
  }

  .nn-steam-information-card__friends {
    flex: 0 0 auto;
    gap: var(--space4);
    height: 24px;
    padding: var(--space0) var(--space4) var(--space0) var(--space8);
    overflow: hidden;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    white-space: nowrap;
    cursor: pointer;
  }

  .nn-steam-information-card__friends:hover {
    background: var(--gray-9);
  }

  .nn-steam-information-card__friends:focus-visible {
    outline: 1px solid var(--Esports-Blue-LD);
    outline-offset: var(--space2);
  }

  .nn-steam-information-card__friend-avatars {
    flex: 0 0 auto;
    gap: var(--space4);
  }

  .nn-steam-information-card__friend-avatar.nn-avatar,
  .nn-steam-information-card__friend-more {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
  }

  .nn-steam-information-card__friend-more {
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
  }

  .nn-steam-information-card__friend-more .nnicon {
    color: var(--gray-4);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-steam-information-card__action.nn-btn {
    position: relative;
    z-index: 3;
    height: 40px;
    flex: 0 0 auto;
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
  }

  .nn-steam-information-card.is-bound .nn-steam-information-card__action.nn-btn {
    width: 167px;
  }

  .nn-steam-information-card__watermark {
    position: absolute;
    top: -17px;
    right: 208px;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 227px;
    height: 227px;
    color: var(--Neutral-0);
    font-size: 227px;
    line-height: 227px;
    opacity: 0.04;
    pointer-events: none;
  }

  .nn-steam-information-card__watermark-clip {
    position: absolute;
    top: var(--space0);
    right: var(--space0);
    bottom: var(--space0);
    width: 455px;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    z-index: 1;
  }

  .nn-steam-friends-modal {
    position: absolute;
    inset: var(--space0);
    z-index: 100;
    display: grid;
    place-items: center;
    background: var(--Black-A60);
    font-family: var(--font-family-main);
  }

  .nn-steam-friends-modal__dialog.nn-toast {
    position: relative;
    width: 600px;
    max-width: calc(100% - var(--space48));
    height: 520px;
    max-height: calc(100% - var(--space48));
    overflow: hidden;
    border: 0;
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    color: var(--gray-3);
  }

  .nn-steam-friends-modal__dialog::before {
    content: '';
    position: absolute;
    inset: var(--space0);
    z-index: 3;
    border: 1px solid var(--gray-8);
    border-radius: inherit;
    box-sizing: border-box;
    pointer-events: none;
  }

  .nn-steam-friends-modal__dialog .nn-toast__body {
    height: 100%;
  }

  .nn-steam-friends-modal__dialog .nn-toast__header {
    flex: 0 0 auto;
  }

  .nn-steam-friends-modal__dialog .nn-toast__title {
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-header-3);
  }

  .nn-steam-friends-modal__dialog .nn-toast__content {
    flex: 1 1 auto;
    min-height: 0;
    padding: var(--space0) var(--space24) var(--space24);
    overflow: hidden;
  }

  .nn-steam-friends-modal__list-wrap {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }

  .nn-steam-friends-modal__list {
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
    gap: var(--space2);
    box-sizing: border-box;
  }

  .nn-steam-friends-modal__row {
    display: flex;
    width: 100%;
    min-height: 52px;
    padding: var(--space10) var(--space8);
    align-items: center;
    gap: var(--space10);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
  }

  .nn-steam-friends-modal__row:hover {
    background: var(--gray-10);
  }

  .nn-steam-friends-modal__identity {
    display: flex;
    width: 170px;
    min-width: 170px;
    align-items: center;
    gap: var(--space8);
  }

  .nn-steam-friends-modal__avatar {
    flex: 0 0 auto;
  }

  .nn-steam-friends-modal__name,
  .nn-steam-friends-modal__nn-name,
  .nn-steam-friends-modal__unregistered {
    overflow: hidden;
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-steam-friends-modal__name {
    width: 130px;
    color: var(--gray-4);
  }

  .nn-steam-friends-modal__mapping {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    align-items: center;
    gap: var(--space8);
  }

  .nn-steam-friends-modal__nn-name {
    flex: 1 1 auto;
    min-width: 0;
    color: var(--gray-5);
  }

  .nn-steam-friends-modal__unregistered {
    color: var(--gray-7);
  }

  .nn-steam-friends-modal__action.nn-btn {
    width: 110px;
    flex: 0 0 110px;
  }

  .nn-steam-friends-modal__scrollbar.nn-scrollbar {
    --nn-scrollbar-thumb-color: var(--gray-7);
    --nn-scrollbar-thumb-hover-color: var(--gray-6);
  }

  .nn-steam-information-card__art {
    position: absolute;
    top: -1px;
    right: -1px;
    z-index: 1;
    display: block;
    width: 380px;
    height: 114px;
    object-fit: cover;
    pointer-events: none;
  }

  @media (max-width: 820px) {
    .nn-steam-information-card {
      height: auto;
      min-height: 114px;
      align-items: flex-start;
      flex-direction: column;
      gap: var(--space16);
    }

    .nn-steam-information-card__action.nn-btn {
      align-self: flex-end;
    }

    .nn-steam-information-card__art {
      opacity: 0.4;
    }
  }
`;

const AcceleratorSteamInformationCardFriends = [
  '../image/Avatar/头像748.png',
  '../image/Avatar/头像562.png',
  '../image/Avatar/头像827.png',
  '../image/Avatar/头像1098.png'
];

const AcceleratorSteamFriendList = [
  { steamName: 'ArtMagic', nnName: '邪恶萨摩耶', avatarSrc: '../image/Avatar/头像706.png', status: 'on', action: 'message' },
  { steamName: 'CreamK', nnName: '李', avatarSrc: '../image/Avatar/头像716.png', status: 'on', action: 'add' },
  { steamName: 'Felix Y', nnName: 'Dn', avatarSrc: '../image/Avatar/头像717.png', status: 'on', action: 'add' },
  { steamName: 'Dosence', nnName: '', avatarSrc: '../image/Avatar/头像719.png', status: 'gray', action: null },
  { steamName: 'zis', nnName: 'Mi J', avatarSrc: '../image/Avatar/头像746.png', status: 'dnd', action: 'add' },
  { steamName: 'Miracle', nnName: '', avatarSrc: '../image/Avatar/头像748.png', status: 'inv', action: null },
  { steamName: 'Hello_姚冰', nnName: '莫莫', avatarSrc: '../image/Avatar/头像800.png', status: 'on', action: 'message' },
  { steamName: '万家卉', nnName: 'Hello_姚冰', avatarSrc: '../image/Avatar/头像809.png', status: 'on', action: 'add' }
];

function createAcceleratorSteamFriendsModal(options = {}) {
  injectAcceleratorSteamInformationCardStyles();
  if (typeof window.createToast !== 'function') {
    throw new Error('createAcceleratorSteamFriendsModal requires the Toast basic component.');
  }
  if (typeof window.createAvatar !== 'function') {
    throw new Error('createAcceleratorSteamFriendsModal requires the Avatar basic component.');
  }
  if (typeof window.createButton !== 'function') {
    throw new Error('createAcceleratorSteamFriendsModal requires the Button basic component.');
  }
  if (typeof window.createLabel !== 'function') {
    throw new Error('createAcceleratorSteamFriendsModal requires the Label basic component.');
  }
  if (typeof window.createScrollbar !== 'function') {
    throw new Error('createAcceleratorSteamFriendsModal requires the Scrollbar basic component.');
  }

  const friends = Array.isArray(options.friends) && options.friends.length
    ? options.friends
    : AcceleratorSteamFriendList;
  const overlay = document.createElement('div');
  overlay.className = 'nn-steam-friends-modal';

  const listWrap = document.createElement('div');
  listWrap.className = 'nn-steam-friends-modal__list-wrap';
  const list = document.createElement('div');
  list.className = 'nn-steam-friends-modal__list';

  friends.forEach(function(friend) {
    const row = document.createElement('div');
    row.className = 'nn-steam-friends-modal__row';

    const identity = document.createElement('div');
    identity.className = 'nn-steam-friends-modal__identity';
    const avatar = createAvatar({
      src: friend.avatarSrc,
      text: friend.steamName,
      size: 32,
      status: friend.status || null
    });
    avatar.classList.add('nn-steam-friends-modal__avatar');
    identity.appendChild(avatar);

    const steamName = document.createElement('span');
    steamName.className = 'nn-steam-friends-modal__name';
    steamName.textContent = friend.steamName;
    steamName.title = friend.steamName;
    identity.appendChild(steamName);
    row.appendChild(identity);

    const mapping = document.createElement('div');
    mapping.className = 'nn-steam-friends-modal__mapping';
    if (friend.nnName) {
      mapping.appendChild(createLabel({
        text: 'NN ID',
        color: 'neutral',
        type: 'soft',
        size: 'd'
      }));
      const nnName = document.createElement('span');
      nnName.className = 'nn-steam-friends-modal__nn-name';
      nnName.textContent = friend.nnName;
      nnName.title = friend.nnName;
      mapping.appendChild(nnName);
    } else {
      const unregistered = document.createElement('span');
      unregistered.className = 'nn-steam-friends-modal__unregistered';
      unregistered.textContent = '暂未注册NN';
      mapping.appendChild(unregistered);
    }
    row.appendChild(mapping);

    if (friend.action) {
      const isMessage = friend.action === 'message';
      row.appendChild(createButton({
        text: isMessage ? '发消息' : '加NN好友',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        icon: '<i class="nnicon ' + (isMessage ? 'nicon-a-Chat-lineliaotian-xianxing' : 'nicon-a-add-linetianjia-xianxing') + '" aria-hidden="true"></i>',
        iconPosition: 'left',
        iconSize: 'var(--icon-size-x9)',
        className: 'nn-steam-friends-modal__action',
        onClick: function(event) {
          if (typeof options.onFriendAction === 'function') {
            options.onFriendAction(friend, event, row);
          }
        }
      }));
    }

    list.appendChild(row);
  });

  const mountTarget = options.mountTarget
    || (options.trigger && options.trigger.closest('.accelerator-home-frame'))
    || document.body;
  const previousFocus = document.activeElement;
  let scrollbar = null;
  let dialog = null;
  let closeButton = null;

  function closeModal() {
    document.removeEventListener('keydown', handleKeydown);
    if (scrollbar && typeof scrollbar.destroy === 'function') scrollbar.destroy();
    overlay.remove();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    if (typeof options.onClose === 'function') options.onClose();
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }

  listWrap.appendChild(list);
  dialog = createToast({
    title: 'Steam好友（' + friends.length + '）',
    content: listWrap,
    showFooter: false,
    showClose: true,
    scrollableContent: true,
    className: 'nn-steam-friends-modal__dialog',
    onClose: closeModal
  });
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'nn-steam-friends-modal-title');
  const title = dialog.querySelector('.nn-toast__title');
  if (title) title.id = 'nn-steam-friends-modal-title';
  closeButton = dialog.querySelector('.nn-toast__close');
  if (closeButton) closeButton.setAttribute('aria-label', '关闭 Steam 好友弹窗');
  overlay.appendChild(dialog);

  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener('keydown', handleKeydown);
  mountTarget.appendChild(overlay);

  scrollbar = createScrollbar({
    target: list,
    container: dialog,
    hoverTarget: listWrap,
    variant: 'page',
    right: 0,
    top: 94,
    bottom: 0,
    minThumbSize: 60,
    thumbSize: 60,
    alwaysVisible: true,
    className: 'nn-steam-friends-modal__scrollbar'
  });
  requestAnimationFrame(function() {
    if (scrollbar && typeof scrollbar.update === 'function') scrollbar.update();
    closeButton.focus();
  });

  overlay.close = closeModal;
  overlay.dialog = dialog;
  return overlay;
}

function injectAcceleratorSteamInformationCardStyles() {
  const previous = document.getElementById('nn-steam-information-card-styles');
  if (previous) previous.remove();
  const style = document.createElement('style');
  style.id = 'nn-steam-information-card-styles';
  style.textContent = AcceleratorSteamInformationCardStyles;
  document.head.appendChild(style);
}

function createAcceleratorSteamInformationCard(options = {}) {
  injectAcceleratorSteamInformationCardStyles();
  if (typeof injectButtonStyles === 'function') injectButtonStyles();
  if (typeof injectDropdownMenuStyles === 'function') injectDropdownMenuStyles();

  const isBound = options.state !== 'not-bound';
  const root = document.createElement('article');
  root.className = `nn-steam-information-card ${isBound ? 'is-bound' : 'is-not-bound'}`;
  root.setAttribute('aria-label', isBound ? '已绑定 Steam 资料卡' : '未绑定 Steam 资料卡');

  const content = document.createElement('div');
  content.className = 'nn-steam-information-card__content';

  const avatar = createAvatar({
    src: isBound
      ? (options.avatarSrc || '../image/Avatar/头像1095.png')
      : (options.avatarSrc || '../image/Steam achievements/steam-logo.jpg'),
    text: isBound ? (options.userName || '邪恶萨摩耶') : 'Steam',
    size: 80,
    status: isBound ? 'on' : null
  });
  avatar.classList.add('nn-steam-information-card__avatar-component');

  const details = document.createElement('div');
  details.className = 'nn-steam-information-card__details';

  const identity = document.createElement('div');
  identity.className = 'nn-steam-information-card__identity';
  const nameGroup = document.createElement('span');
  nameGroup.className = 'nn-steam-information-card__name-group';
  const name = document.createElement('span');
  name.className = 'nn-steam-information-card__name';
  name.textContent = isBound ? (options.userName || '邪恶萨摩耶') : (options.unboundTitle || '绑定Steam账号，参与活动抽奖，100%中奖率');
  nameGroup.appendChild(name);

  if (isBound && typeof createDropdownMenu === 'function') {
    const accountItems = Array.isArray(options.accounts) && options.accounts.length
      ? options.accounts.slice(0, 3)
      : [{
          userName: options.userName || '邪恶萨摩耶',
          steamId: options.steamId || '76561198805355097',
          avatarSrc: options.avatarSrc || '../image/Avatar/头像1095.png'
        }];
    const activeSteamId = options.activeSteamId || options.steamId || accountItems[0].steamId;
    const selectedIndex = Math.max(0, accountItems.findIndex(function(account) {
      return account.steamId === activeSteamId;
    }));
    const nameArrow = createButton({
      text: '',
      variant: 'system',
      level: 'tertiary',
      size: 'small',
      icon: '<i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing" aria-hidden="true"></i>',
      iconPosition: 'only',
      iconSize: 'var(--icon-size-x9)',
      className: 'nn-steam-information-card__name-arrow'
    });
    nameArrow.setAttribute('aria-label', '切换 Steam 账号');
    nameArrow.setAttribute('aria-haspopup', 'listbox');
    nameGroup.appendChild(nameArrow);

    const accountDropdown = createDropdownMenu({
      appearance: 'no-padding',
      size: 'medium',
      triggerElement: nameGroup,
      items: accountItems,
      selectedIndex: selectedIndex,
      className: 'nn-steam-information-card__account-dropdown',
      itemRenderer: function(context) {
        const account = context.item;
        const option = document.createElement('div');
        option.className = 'nn-steam-information-card__account-option';
        option.appendChild(createAvatar({
          src: account.avatarSrc,
          text: account.userName,
          size: 36,
          status: account.online === false ? null : 'on'
        }));
        const copy = document.createElement('span');
        copy.className = 'nn-steam-information-card__account-option-copy';
        const optionName = document.createElement('span');
        optionName.className = 'nn-steam-information-card__account-option-name';
        optionName.textContent = account.userName;
        const optionId = document.createElement('span');
        optionId.className = 'nn-steam-information-card__account-option-id';
        optionId.textContent = account.steamId;
        copy.appendChild(optionName);
        copy.appendChild(optionId);
        option.appendChild(copy);
        if (context.selected) {
          const check = document.createElement('i');
          check.className = 'nnicon nicon-a-check-linewancheng-xianxing nn-steam-information-card__account-option-check';
          check.setAttribute('aria-label', '当前账号');
          option.appendChild(check);
        }
        return option;
      },
      onChange: function(payload) {
        const account = payload && payload.item;
        if (account && typeof options.onAccountChange === 'function') {
          options.onAccountChange(account, payload, root);
        }
      },
      onOpenChange: function(open) {
        const arrowIcon = nameArrow.querySelector('.nn-btn-icon i');
        if (arrowIcon) {
          arrowIcon.className = open
            ? 'nnicon nicon-a-Arrowup-linejiantoushang-xianxing'
            : 'nnicon nicon-a-Arrow-down-linejiantouxia-xianxing';
        }
        nameArrow.setAttribute('aria-expanded', String(open));
      }
    });
    nameArrow.addEventListener('click', function(event) {
      event.stopPropagation();
      accountDropdown._dropdownMenu.setOpen(!accountDropdown.classList.contains('nn-dropdown-open'));
    });
    identity.appendChild(accountDropdown);
  } else {
    identity.appendChild(nameGroup);
  }

  if (isBound) {
    const level = document.createElement('span');
    level.className = 'nn-steam-information-card__level';
    level.textContent = `Steam等级：${options.level || 6}`;
    identity.appendChild(level);

    const updated = document.createElement('span');
    updated.className = 'nn-steam-information-card__updated';
    updated.textContent = options.updatedText || '上次更新：10.28 10:25';
    identity.appendChild(updated);
  }
  details.appendChild(identity);

  if (isBound) {
    const meta = document.createElement('div');
    meta.className = 'nn-steam-information-card__meta';
    const steamId = document.createElement('span');
    steamId.className = 'nn-steam-information-card__steam-id';
    steamId.appendChild(document.createTextNode(`Steam ID: ${options.steamId || '76561198805355097'}`));
    const copy = createButton({
      text: '',
      variant: 'system',
      level: 'tertiary',
      size: 'small',
      icon: '<i class="nnicon nicon-a-Copytext-linefuzhiwenben-xianxing" aria-hidden="true"></i>',
      iconPosition: 'only',
      iconSize: 'var(--icon-size-x8)',
      className: 'nn-steam-information-card__copy',
      onClick: async function(event) {
        event.stopPropagation();
        const value = String(options.steamId || '76561198805355097');
        try {
          try {
            if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(value);
          } catch (error) {
            const selection = window.getSelection();
            const previousRanges = [];
            for (let index = 0; index < selection.rangeCount; index++) previousRanges.push(selection.getRangeAt(index).cloneRange());
            const range = document.createRange();
            range.selectNodeContents(steamId.firstChild);
            const writeCopy = function(copyEvent) {
              if (!copyEvent.clipboardData) return;
              copyEvent.clipboardData.setData('text/plain', value);
              copyEvent.preventDefault();
            };
            document.addEventListener('copy', writeCopy);
            try {
              selection.removeAllRanges();
              selection.addRange(range);
              if (!document.execCommand('copy')) throw new Error('Copy failed');
            } finally {
              document.removeEventListener('copy', writeCopy);
              selection.removeAllRanges();
              previousRanges.forEach(function(previous) { selection.addRange(previous); });
            }
          }
          window.showMessage({ state: 'success', text: '已复制到剪切板', duration: 2000, mountTarget: root.closest('.accelerator-home-frame') || undefined });
        } catch (error) {
          window.showMessage({ state: 'error', text: '复制失败，请重试', duration: 2000, mountTarget: root.closest('.accelerator-home-frame') || undefined });
        }
      }
    });
    copy.setAttribute('aria-label', '复制 Steam ID');
    steamId.appendChild(copy);
    meta.appendChild(steamId);

    const friends = document.createElement('span');
    friends.className = 'nn-steam-information-card__friends';
    friends.setAttribute('role', 'button');
    friends.setAttribute('tabindex', '0');
    friends.setAttribute('aria-label', '查看 Steam 好友');
    friends.appendChild(document.createTextNode('Steam好友'));
    const friendAvatars = document.createElement('span');
    friendAvatars.className = 'nn-steam-information-card__friend-avatars';
    AcceleratorSteamInformationCardFriends.forEach(function(source, index) {
      const friend = createAvatar({ src: source, text: `Steam好友${index + 1}`, size: 16 });
      friend.classList.add('nn-steam-information-card__friend-avatar');
      friendAvatars.appendChild(friend);
    });
    const more = document.createElement('span');
    more.className = 'nn-steam-information-card__friend-more';
    const moreIcon = document.createElement('span');
    moreIcon.className = 'nnicon nicon-a-more-fillgengduo-mianxing';
    moreIcon.setAttribute('aria-label', '更多 Steam 好友');
    more.appendChild(moreIcon);
    friendAvatars.appendChild(more);
    friends.appendChild(friendAvatars);
    function openFriendsModal(event) {
      event.stopPropagation();
      if (typeof options.onFriendsClick === 'function') {
        options.onFriendsClick(event, root, friends);
        return;
      }
      createAcceleratorSteamFriendsModal({
        trigger: friends,
        friends: options.friends,
        onFriendAction: options.onFriendAction
      });
    }
    friends.addEventListener('click', openFriendsModal);
    friends.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFriendsModal(event);
      }
    });
    meta.appendChild(friends);
    details.appendChild(meta);
  } else {
    const action = createButton({
      text: options.bindText || '立即绑定并参与抽奖',
      variant: 'primary',
      level: 'primary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-link-linefujianlianjie-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      iconSize: 20,
      className: 'nn-steam-information-card__action nn-steam-information-card__action--bind',
      onClick: function(event) {
        if (typeof options.onBindClick === 'function') options.onBindClick(event, root);
      }
    });
    details.appendChild(action);
  }

  content.appendChild(avatar);
  content.appendChild(details);
  root.appendChild(content);

  if (isBound) {
    const action = createButton({
      text: options.actionText || '管理账号',
      variant: 'system',
      level: 'secondary',
      size: 'large',
      icon: '<i class="nnicon nicon-a-settings-lineshezhi-xianxing" aria-hidden="true"></i>',
      iconPosition: 'left',
      iconSize: 20,
      className: 'nn-steam-information-card__action',
      onClick: function(event) {
        if (typeof options.onActionClick === 'function') options.onActionClick(event, root);
      }
    });
    root.appendChild(action);

    const watermarkClip = document.createElement('span');
    watermarkClip.className = 'nn-steam-information-card__watermark-clip';
    const watermark = document.createElement('span');
    watermark.className = 'nnicon nicon-a-STEAM-lineSTEAM-xianxing nn-steam-information-card__watermark';
    watermark.setAttribute('aria-hidden', 'true');
    watermarkClip.appendChild(watermark);
    root.appendChild(watermarkClip);
  } else {
    const art = document.createElement('img');
    art.className = 'nn-steam-information-card__art';
    art.src = options.artSrc || '../image/Steam achievements/steamgame.png';
    art.alt = '';
    root.appendChild(art);
  }

  return root;
}

if (typeof window !== 'undefined') window.createAcceleratorSteamInformationCard = createAcceleratorSteamInformationCard;
if (typeof window !== 'undefined') window.createAcceleratorSteamFriendsModal = createAcceleratorSteamFriendsModal;

const AcceleratorUserDataCardStyles = `
  .nn-user-data-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space6);
    width: 238px;
    height: 110px;
    padding: var(--space16);
    overflow: hidden;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    transition: background-color 0.16s ease, border-color 0.16s ease;
  }

  .nn-user-data-card:hover {
    border-color: var(--gray-9);
    background: var(--gray-9);
  }

  .nn-user-data-card.is-clickable {
    cursor: pointer;
  }

  .nn-user-data-card__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space10);
    min-width: 0;
  }

  .nn-user-data-card__title,
  .nn-user-data-card__rank-label,
  .nn-user-data-card__rank-value,
  .nn-user-data-card__unit {
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-user-data-card__title,
  .nn-user-data-card__rank-label {
    color: var(--gray-6);
    font-weight: var(--font-weight-normal);
  }

  .nn-user-data-card__rank-label,
  .nn-user-data-card__rank-value,
  .nn-user-data-card__rank-arrow {
    transition: color 0.16s ease;
  }

  .nn-user-data-card__title {
    display: flex;
    align-items: center;
  }

  .nn-user-data-card__title-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    margin-left: var(--space2);
    color: var(--gray-6);
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-user-data-card__title-tooltip {
    margin-left: var(--space2);
  }

  .nn-user-data-card__title-tooltip .nn-user-data-card__title-icon {
    margin-left: var(--space0);
    cursor: help;
  }

  .nn-user-data-card__value-group {
    display: flex;
    align-items: baseline;
    gap: var(--space2);
  }

  .nn-user-data-card__value-arrows {
    display: inline-flex;
    height: 30px;
    align-items: flex-end;
    padding-bottom: var(--space2);
    padding-left: var(--space4);
    overflow: hidden;
    pointer-events: none;
  }

  .nn-user-data-card__value-arrow {
    width: var(--icon-size-x5);
    height: var(--icon-size-x9);
    flex: 0 0 var(--icon-size-x5);
    background: var(--gray-10);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18'%3E%3Cpath d='M0 0H6.25L10 9L6.25 18H0L3.75 9L0 0Z' fill='black'/%3E%3C/svg%3E") center / contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 18'%3E%3Cpath d='M0 0H6.25L10 9L6.25 18H0L3.75 9L0 0Z' fill='black'/%3E%3C/svg%3E") center / contain no-repeat;
    opacity: 0;
    transform: translateX(calc(var(--space4) * -1));
    transition:
      background-color 0.18s ease,
      opacity 0.18s ease,
      transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-user-data-card__value-arrow:nth-child(2) {
    background: var(--gray-9);
    transition-delay: 0.05s;
  }

  .nn-user-data-card__value-arrow:nth-child(3) {
    background: var(--gray-8);
    transition-delay: 0.1s;
  }

  .nn-user-data-card:hover .nn-user-data-card__value-arrow,
  .nn-user-data-card:focus-visible .nn-user-data-card__value-arrow {
    opacity: 1;
    transform: translateX(var(--space0));
  }

  .nn-user-data-card__value {
    flex: 0 0 auto;
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-data-number);
    font-weight: var(--font-weight-bold);
    line-height: normal;
    white-space: nowrap;
  }

  .nn-user-data-card__unit {
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-weight: var(--font-weight-normal);
  }

  .nn-user-data-card__rank {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  a.nn-user-data-card__rank {
    text-decoration: none;
  }

  .nn-user-data-card__rank.is-clickable {
    cursor: pointer;
  }

  .nn-user-data-card__rank:hover .nn-user-data-card__rank-label,
  .nn-user-data-card__rank:hover .nn-user-data-card__rank-value,
  .nn-user-data-card__rank:hover .nn-user-data-card__rank-arrow,
  .nn-user-data-card__rank.is-clickable:focus-visible .nn-user-data-card__rank-label,
  .nn-user-data-card__rank.is-clickable:focus-visible .nn-user-data-card__rank-value,
  .nn-user-data-card__rank.is-clickable:focus-visible .nn-user-data-card__rank-arrow {
    color: var(--gray-4);
  }

  .nn-user-data-card__rank-value {
    color: var(--gray-5);
    font-weight: var(--font-weight-semibold);
  }

  .nn-user-data-card__rank-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-user-data-card__art {
    position: absolute;
    top: calc(var(--space0) - 1px);
    right: calc(var(--space0) - 1px);
    z-index: 0;
    display: block;
    width: 110px;
    height: 110px;
    object-fit: cover;
    opacity: 0.8;
    pointer-events: none;
    transform-origin: center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
  }

  .dark-mode .nn-user-data-card__art {
    -webkit-mask-image: linear-gradient(to left, var(--Neutral-0) 0%, transparent 100%);
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 110px 110px;
    mask-image: linear-gradient(to left, var(--Neutral-0) 0%, transparent 100%);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 110px 110px;
    opacity: 1;
  }

  .nn-user-data-card.is-empty .nn-user-data-card__art {
    filter: saturate(0);
  }

  .nn-user-data-card:hover .nn-user-data-card__art {
    transform: translateX(calc(var(--space8) * -1)) scale(1.05) rotate(-8deg);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-user-data-card__art,
    .nn-user-data-card__value-arrow,
    .nn-user-data-card__rank-label,
    .nn-user-data-card__rank-value,
    .nn-user-data-card__rank-arrow {
      transition: none;
    }
  }
`;

function injectAcceleratorUserDataCardStyles() {
  if (document.getElementById('nn-user-data-card-styles')) return;

  const style = document.createElement('style');
  style.id = 'nn-user-data-card-styles';
  style.textContent = AcceleratorUserDataCardStyles;
  document.head.appendChild(style);
}

function createAcceleratorUserDataCard(options = {}) {
  injectAcceleratorUserDataCardStyles();

  const isEmpty = options.state === 'empty';
  const root = document.createElement('article');
  root.className = [
    'nn-user-data-card',
    isEmpty ? 'is-empty' : '',
    typeof options.onClick === 'function' ? 'is-clickable' : '',
    options.className || ''
  ].filter(Boolean).join(' ');
  root.setAttribute('aria-label', options.ariaLabel || '用户数据卡');

  const content = document.createElement('div');
  content.className = 'nn-user-data-card__content';

  const title = document.createElement('div');
  title.className = 'nn-user-data-card__title';

  const titleText = document.createElement('span');
  titleText.textContent = options.text || '总游戏时长';
  title.appendChild(titleText);

  if (options.tooltipContent && typeof createTooltip === 'function') {
    const titleIcon = document.createElement('span');
    titleIcon.className = `${options.titleIconClass || 'nnicon nicon-a-query-lineyiwen-xianxing'} nn-user-data-card__title-icon`;
    titleIcon.setAttribute('tabindex', '0');
    titleIcon.setAttribute('aria-label', `${options.text || '数据'}说明`);
    titleIcon.addEventListener('click', function(event) { event.stopPropagation(); });
    titleIcon.addEventListener('keydown', function(event) { event.stopPropagation(); });
    const titleTooltip = createTooltip({
      content: String(options.tooltipContent),
      direction: options.tooltipDirection || 'top',
      trigger: titleIcon,
      type: 'rich',
      width: options.tooltipWidth || 280,
      portal: true
    });
    titleTooltip.classList.add('nn-user-data-card__title-tooltip');
    title.appendChild(titleTooltip);
  } else if (options.titleIconClass) {
    const titleIcon = document.createElement('span');
    titleIcon.className = `${options.titleIconClass} nn-user-data-card__title-icon`;
    titleIcon.setAttribute('aria-hidden', 'true');
    title.appendChild(titleIcon);
  }
  content.appendChild(title);

  const valueGroup = document.createElement('div');
  valueGroup.className = 'nn-user-data-card__value-group';

  const value = document.createElement('span');
  value.className = 'nn-user-data-card__value';
  value.textContent = options.value == null ? '606' : String(options.value);
  valueGroup.appendChild(value);

  if (options.numericDescription !== false) {
    const unit = document.createElement('span');
    unit.className = 'nn-user-data-card__unit';
    unit.textContent = options.description == null ? 'h' : String(options.description);
    valueGroup.appendChild(unit);
  }

  const valueArrows = document.createElement('span');
  valueArrows.className = 'nn-user-data-card__value-arrows';
  valueArrows.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 3; index += 1) {
    const valueArrow = document.createElement('span');
    valueArrow.className = 'nn-user-data-card__value-arrow';
    valueArrows.appendChild(valueArrow);
  }
  valueGroup.appendChild(valueArrows);
  content.appendChild(valueGroup);

  const rank = document.createElement(options.rankHref ? 'a' : 'div');
  rank.className = 'nn-user-data-card__rank';
  if (options.rankHref) {
    rank.classList.add('is-clickable');
    rank.href = options.rankHref;
    rank.setAttribute('aria-label', options.rankAriaLabel || `${options.text || '数据'}，查看排行榜`);
    rank.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    rank.addEventListener('keydown', function(event) {
      event.stopPropagation();
    });
  }

  const rankLabel = document.createElement('span');
  rankLabel.className = 'nn-user-data-card__rank-label';
  rankLabel.textContent = options.rankLabel || '当前排名：';

  const rankValue = document.createElement('span');
  rankValue.className = 'nn-user-data-card__rank-value';
  rankValue.textContent = options.rank == null ? '1906' : String(options.rank);

  const rankArrow = document.createElement('span');
  rankArrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing nn-user-data-card__rank-arrow';
  rankArrow.setAttribute('aria-hidden', 'true');

  rank.appendChild(rankLabel);
  rank.appendChild(rankValue);
  rank.appendChild(rankArrow);
  content.appendChild(rank);
  root.appendChild(content);

  const art = document.createElement('img');
  art.className = 'nn-user-data-card__art';
  art.src = options.imageSrc || '../image/Steam achievements/time.png';
  art.alt = '';
  art.width = 110;
  art.height = 110;
  art.setAttribute('aria-hidden', 'true');
  root.appendChild(art);

  if (typeof options.onClick === 'function') {
    root.setAttribute('tabindex', '0');
    root.setAttribute('role', 'button');
    root.addEventListener('click', function(event) {
      if (event.target.closest('.nn-user-data-card__rank')) return;
      options.onClick(event, root);
    });
    root.addEventListener('keydown', function(event) {
      if (event.target.closest('.nn-user-data-card__rank')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        options.onClick(event, root);
      }
    });
  }

  return root;
}

if (typeof window !== 'undefined') window.createAcceleratorUserDataCard = createAcceleratorUserDataCard;

const AcceleratorProductCardStyles = `
  .nn-product-card {
    position: relative;
    display: flex;
    width: 238px;
    height: 272px;
    flex: 0 0 238px;
    flex-direction: column;
    overflow: visible;
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .nn-product-card::after {
    position: absolute;
    inset: var(--space0);
    z-index: 4;
    border-radius: var(--border-radius-4r);
    box-shadow: var(--shadow-stroke-inset);
    content: '';
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s cubic-bezier(0.29, 0, 0, 1);
  }

  .nn-product-card:hover::after {
    opacity: 1;
  }

  .nn-product-card__media {
    position: relative;
    width: 100%;
    aspect-ratio: 238 / 134;
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: var(--border-radius-4r) var(--border-radius-4r) var(--space0) var(--space0);
    background: var(--gray-9);
  }

  .nn-product-card.is-clickable {
    cursor: pointer;
  }

  .nn-product-card.is-clickable:focus-visible {
    outline: 2px solid var(--Esports-Blue-LD);
    outline-offset: 2px;
  }

  .nn-product-card__cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: center;
    will-change: transform;
    transition: transform 0.35s cubic-bezier(0.29, 0, 0, 1);
  }

  .nn-product-card:hover .nn-product-card__cover {
    transform: scale(1.05);
  }

  .nn-product-card__platforms {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-height: 26px;
    padding: var(--space4);
    border-radius: var(--border-radius-4r) var(--space0) var(--border-radius-8r) var(--space0);
    background: var(--Black-A50);
    color: var(--White-A80);
  }

  .nn-product-card__platform-icon {
    display: inline-flex;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    align-items: center;
    justify-content: center;
    font-size: var(--icon-size-x9);
    line-height: 1;
  }

  .nn-product-card .nn-product-card__wishlist-tooltip {
    position: absolute;
    top: var(--space4);
    right: var(--space4);
    z-index: 2;
  }

  .nn-product-card__wishlist-tooltip .nn-tooltip-bottom-right .nn-tooltip-beak {
    right: calc(var(--space8) - 1px) !important;
  }

  .nn-product-card__wishlist.nn-btn {
    position: relative;
    overflow: visible;
    background: var(--Black-A60);
    color: var(--White-A50);
  }

  .nn-product-card__wishlist.nn-btn:hover {
    background: var(--Black-A60);
    color: var(--White-A50);
  }

  .nn-product-card__wishlist.is-wishlisted.nn-btn {
    color: var(--Pink);
  }

  .nn-product-card__wishlist.is-wishlisted.nn-btn:hover {
    color: var(--Pink);
  }

  .nn-product-card__owned {
    position: absolute;
    top: var(--space4);
    right: var(--space4);
    z-index: 2;
    display: inline-flex;
    width: 56px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-2r);
    background: var(--Black-A60);
    color: var(--White-A80);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-product-card__owned-icon {
    display: inline-flex;
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    align-items: center;
    justify-content: center;
    font-size: var(--icon-size-x7);
    line-height: 1;
  }

  .nn-product-card__spark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: var(--border-radius-round);
    background: var(--Pink);
    opacity: 0;
    pointer-events: none;
  }

  .nn-product-card__wishlist.is-celebrating .nn-btn-icon {
    animation: nn-product-heart-pop 0.42s ease both;
  }

  .nn-product-card__wishlist.is-celebrating .nn-product-card__spark {
    animation: nn-product-spark 0.56s ease-out both;
  }

  .nn-product-card__spark:nth-child(2) { --spark-x: 0px; --spark-y: -24px; }
  .nn-product-card__spark:nth-child(3) { --spark-x: 17px; --spark-y: -17px; animation-delay: 0.02s; }
  .nn-product-card__spark:nth-child(4) { --spark-x: 24px; --spark-y: 0px; animation-delay: 0.04s; }
  .nn-product-card__spark:nth-child(5) { --spark-x: 17px; --spark-y: 17px; animation-delay: 0.06s; }
  .nn-product-card__spark:nth-child(6) { --spark-x: 0px; --spark-y: 24px; animation-delay: 0.08s; }
  .nn-product-card__spark:nth-child(7) { --spark-x: -17px; --spark-y: 17px; animation-delay: 0.1s; }
  .nn-product-card__spark:nth-child(8) { --spark-x: -24px; --spark-y: 0px; animation-delay: 0.12s; }
  .nn-product-card__spark:nth-child(9) { --spark-x: -17px; --spark-y: -17px; animation-delay: 0.14s; }

  @keyframes nn-product-heart-pop {
    0% { transform: scale(1); }
    38% { transform: scale(0.62); }
    72% { transform: scale(1.12); }
    100% { transform: scale(1); }
  }

  @keyframes nn-product-spark {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.25); }
    24% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
    100% { opacity: 0; transform: translate(calc(-50% + var(--spark-x)), calc(-50% + var(--spark-y))) scale(0.65); }
  }

  .nn-product-card__body {
    position: relative;
    display: flex;
    height: 138px;
    flex: 0 0 138px;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space16);
    overflow: hidden;
    border-radius: var(--space0) var(--space0) var(--border-radius-4r) var(--border-radius-4r);
    box-sizing: border-box;
    background: linear-gradient(var(--gray-10), var(--gray-10)), var(--gray-1);
    transition: height 0.2s ease, flex-basis 0.2s ease;
  }

  .nn-product-card__title {
    width: 100%;
    padding-bottom: var(--space8);
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-product-card__meta {
    padding-bottom: var(--space16);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-product-card--purchase .nn-product-card__meta {
    padding-bottom: var(--space28);
  }

  .nn-product-card__price {
    display: flex;
    align-items: center;
    gap: var(--space0);
    height: 28px;
    flex: 0 0 auto;
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    white-space: nowrap;
  }

  .nn-product-card__current-price {
    padding-left: var(--space6);
    color: var(--gray-3);
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-header-3);
  }

  .nn-product-card__original-price {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    text-decoration: line-through;
  }

  .nn-product-card__original-price-group {
    display: inline-flex;
    align-items: center;
    margin-left: var(--space6);
    color: var(--gray-6);
  }

  .nn-product-card__original-price-platform {
    display: inline-flex;
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    flex: 0 0 var(--icon-size-x7);
    align-items: center;
    justify-content: center;
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-product-card__price-label {
    margin-left: var(--space6);
    color: var(--gray-3);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-product-card__discount {
    margin-left: var(--space2);
    padding: var(--space4) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--gray-3);
    color: var(--gray-2);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-caption);
  }

  .nn-product-card__action-wrap {
    position: absolute;
    right: var(--space16);
    bottom: var(--space16);
    left: var(--space16);
    will-change: opacity, transform;
    transition:
      opacity 0.26s cubic-bezier(0.29, 0, 0, 1),
      transform 0.32s cubic-bezier(0.29, 0, 0, 1);
  }

  .nn-product-card__action.nn-btn {
    width: 100%;
  }

  .nn-product-card--purchase .nn-product-card__action-wrap {
    opacity: 0;
    pointer-events: none;
    transform: translateY(var(--space8));
  }

  .nn-product-card--purchase:hover .nn-product-card__action-wrap {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(var(--space0));
  }

  .nn-product-card--purchase:hover .nn-product-card__body {
    height: 194px;
    flex-basis: 194px;
    transform: translateY(-56px);
  }

  body.is-product-card-hover-suspended .nn-product-card {
    pointer-events: none;
  }

  body.is-product-card-hover-suspended .nn-product-card::after {
    opacity: 0;
  }

  body.is-product-card-hover-suspended .nn-product-card__cover {
    transform: none;
  }

  body.is-product-card-hover-suspended .nn-product-card--purchase .nn-product-card__action-wrap {
    opacity: 0;
    pointer-events: none;
    transform: translateY(var(--space8));
  }

  body.is-product-card-hover-suspended .nn-product-card--purchase .nn-product-card__body {
    height: 138px;
    flex-basis: 138px;
    transform: translateY(var(--space0));
  }

  .nn-product-card--purchase .nn-product-card__body {
    z-index: 1;
    will-change: height, flex-basis, transform;
    transition:
      height 0.32s cubic-bezier(0.29, 0, 0, 1),
      flex-basis 0.32s cubic-bezier(0.29, 0, 0, 1),
      transform 0.32s cubic-bezier(0.29, 0, 0, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-product-card,
    .nn-product-card__cover,
    .nn-product-card__body,
    .nn-product-card__action-wrap,
    .nn-product-card__wishlist.is-celebrating .nn-btn-icon,
    .nn-product-card__wishlist.is-celebrating .nn-product-card__spark {
      animation: none;
      transition: none;
    }
  }
`;

function injectAcceleratorProductCardStyles() {
  if (document.getElementById('nn-product-card-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-product-card-styles';
  style.textContent = AcceleratorProductCardStyles;
  document.head.appendChild(style);
}

function createAcceleratorProductCard(options = {}) {
  injectAcceleratorProductCardStyles();
  if (typeof injectButtonStyles === 'function') injectButtonStyles();
  if (typeof injectTooltipStyles === 'function') injectTooltipStyles();

  const type = options.type === 'reservation' ? 'reservation' : 'purchase';
  const titleText = options.title || '怪物猎人：荒野-凌越';
  const platforms = Array.isArray(options.platforms) && options.platforms.length
    ? options.platforms
    : ['nicon-a-STEAM-fillSTEAM-mianxing'];
  const cornerState = options.cornerState === 'owned' ? 'owned' : 'wishlist';
  let wishlisted = options.wishlisted === true;

  const root = document.createElement('article');
  root.className = ['nn-product-card', `nn-product-card--${type}`, options.className || ''].filter(Boolean).join(' ');
  const activateCard = typeof options.onClick === 'function' ? options.onClick : null;
  if (activateCard) {
    root.classList.add('is-clickable');
    root.setAttribute('role', 'link');
    root.tabIndex = 0;
  }

  const media = document.createElement('div');
  media.className = 'nn-product-card__media';

  const cover = document.createElement('img');
  cover.className = 'nn-product-card__cover';
  cover.src = options.imageSrc || '../image/Game Store/game-monster-hunter.png';
  cover.alt = options.imageAlt || titleText;
  media.appendChild(cover);

  const platformList = document.createElement('div');
  platformList.className = 'nn-product-card__platforms';
  platformList.setAttribute('aria-label', '游戏平台');
  platforms.forEach(function(platformClass) {
    const platform = document.createElement('i');
    platform.className = `nnicon ${platformClass} nn-product-card__platform-icon`;
    platform.setAttribute('aria-hidden', 'true');
    platformList.appendChild(platform);
  });
  media.appendChild(platformList);

  if (cornerState === 'owned') {
    const owned = document.createElement('span');
    owned.className = 'nn-product-card__owned';
    owned.setAttribute('aria-label', options.ownedText || '已入库');
    const ownedIcon = document.createElement('i');
    ownedIcon.className = 'nnicon nicon-a-check-linewancheng-xianxing nn-product-card__owned-icon';
    ownedIcon.setAttribute('aria-hidden', 'true');
    const ownedText = document.createElement('span');
    ownedText.textContent = options.ownedText || '已入库';
    owned.appendChild(ownedIcon);
    owned.appendChild(ownedText);
    media.appendChild(owned);
  } else {
    const wishlistButton = createButton({
      text: '',
      variant: 'overlay',
      level: 'primary',
      size: 'small',
      icon: '<i class="nnicon nicon-a-Heart-Fillxin-mianxing" aria-hidden="true"></i>',
      iconPosition: 'only',
      iconSize: 'var(--icon-size-x9)',
      className: 'nn-product-card__wishlist'
    });

    let wishlistTooltipText = null;
    function renderWishlistState() {
      wishlistButton.classList.toggle('is-wishlisted', wishlisted);
      wishlistButton.setAttribute('aria-pressed', String(wishlisted));
      wishlistButton.setAttribute('aria-label', wishlisted ? '取消心愿单' : '添加心愿单');
      if (wishlistTooltipText) wishlistTooltipText.textContent = wishlisted ? '取消心愿单' : '添加心愿单';
    }

    for (let index = 0; index < 8; index += 1) {
      const spark = document.createElement('span');
      spark.className = 'nn-product-card__spark';
      wishlistButton.appendChild(spark);
    }

    const wishlistTooltip = createTooltip({
      content: wishlisted ? '取消心愿单' : '添加心愿单',
      direction: 'bottom-right',
      trigger: wishlistButton
    });
    wishlistTooltip.classList.add('nn-product-card__wishlist-tooltip');
    wishlistTooltipText = wishlistTooltip.querySelector('.nn-tooltip-text');
    wishlistButton.addEventListener('click', function(event) {
      event.stopPropagation();
      wishlisted = !wishlisted;
      renderWishlistState();
      wishlistButton.classList.remove('is-celebrating');
      void wishlistButton.offsetWidth;
      wishlistButton.classList.add('is-celebrating');
      window.setTimeout(function() { wishlistButton.classList.remove('is-celebrating'); }, 760);
      if (typeof options.onWishlistChange === 'function') options.onWishlistChange(wishlisted, root);
    });
    renderWishlistState();
    root.appendChild(wishlistTooltip);
  }
  root.appendChild(media);

  const body = document.createElement('div');
  body.className = 'nn-product-card__body';

  const title = document.createElement('div');
  title.className = 'nn-product-card__title';
  title.textContent = titleText;
  title.title = titleText;
  body.appendChild(title);

  const meta = document.createElement('div');
  meta.className = 'nn-product-card__meta';
  meta.textContent = options.meta || (type === 'reservation' ? '2027年3月上线' : '热销·游戏CDK');
  body.appendChild(meta);

  if (type === 'purchase') {
    const price = document.createElement('div');
    price.className = 'nn-product-card__price';
    const currentPrice = document.createElement('strong');
    currentPrice.className = 'nn-product-card__current-price';
    currentPrice.textContent = options.currentPrice || '¥90';
    const originalPrice = document.createElement('span');
    originalPrice.className = 'nn-product-card__original-price';
    originalPrice.textContent = options.originalPrice || '¥168';
    const originalPriceGroup = document.createElement('span');
    originalPriceGroup.className = 'nn-product-card__original-price-group';
    const originalPricePlatform = document.createElement('i');
    originalPricePlatform.className = 'nnicon nicon-a-STEAM-fillSTEAM-mianxing nn-product-card__original-price-platform';
    originalPricePlatform.setAttribute('aria-hidden', 'true');
    originalPriceGroup.appendChild(originalPricePlatform);
    originalPriceGroup.appendChild(originalPrice);
    const priceLabel = document.createElement('span');
    priceLabel.className = 'nn-product-card__price-label';
    priceLabel.textContent = options.priceLabel || '优惠价';
    const discount = document.createElement('span');
    discount.className = 'nn-product-card__discount';
    discount.textContent = options.discount || '-30%';
    price.appendChild(currentPrice);
    price.appendChild(originalPriceGroup);
    price.appendChild(priceLabel);
    price.appendChild(discount);
    body.appendChild(price);
  }

  const actionWrap = document.createElement('div');
  actionWrap.className = 'nn-product-card__action-wrap';
  actionWrap.appendChild(createButton({
    text: options.actionText || (type === 'reservation' ? '预约游戏' : '立即购买'),
    variant: 'system',
    level: 'primary',
    size: 'large',
    className: 'nn-product-card__action',
    onClick: function(event) {
      event.stopPropagation();
      if (typeof options.onActionClick === 'function') {
        options.onActionClick(event, root);
      } else if (activateCard) {
        activateCard(event, root);
      }
    }
  }));
  body.appendChild(actionWrap);
  root.appendChild(body);

  if (activateCard) {
    root.addEventListener('click', function(event) {
      activateCard(event, root);
    });
    root.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activateCard(event, root);
    });
  }
  return root;
}

if (typeof window !== 'undefined') window.createAcceleratorProductCard = createAcceleratorProductCard;

const injectCardStyles = injectCommunityCardStyles;
const createCard = createCommunityCard;
const renderCard = renderCommunityCard;

if (typeof window !== 'undefined') {
  window.injectCommunityCardStyles = injectCommunityCardStyles;
  window.createCommunityCard = createCommunityCard;
  window.createBringPlayCard = createBringPlayCard;
  window.createGameListCard = createGameListCard;
  window.createGameReleaseCard = createGameReleaseCard;
  window.createPlayerCommunityCard = createPlayerCommunityCard;
  window.renderCommunityCard = renderCommunityCard;
  window.renderBringPlayCard = renderBringPlayCard;
  window.renderGameListCard = renderGameListCard;
  window.renderGameReleaseCard = renderGameReleaseCard;
  window.renderPlayerCommunityCard = renderPlayerCommunityCard;
  window.injectCardStyles = injectCommunityCardStyles;
  window.createCard = createCommunityCard;
  window.renderCard = renderCommunityCard;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectCommunityCardStyles,
    createCommunityCard,
    createBringPlayCard,
    createGameListCard,
    createGameReleaseCard,
    createPlayerCommunityCard,
    renderCommunityCard,
    renderBringPlayCard,
    renderGameListCard,
    renderGameReleaseCard,
    renderPlayerCommunityCard,
    injectAcceleratorWishListCardStyles,
    createAcceleratorWishListCard,
    injectAcceleratorAchievementCardStyles,
    createAcceleratorAchievementCard,
    createAcceleratorSteamFriendsModal,
    injectAcceleratorSteamInformationCardStyles,
    createAcceleratorSteamInformationCard,
    injectAcceleratorUserDataCardStyles,
    createAcceleratorUserDataCard,
    injectAcceleratorProductCardStyles,
    createAcceleratorProductCard,
    injectCardStyles,
    createCard,
    renderCard
  };
}
