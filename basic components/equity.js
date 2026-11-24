const EquityStyles = `
.nn-equity {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space2);
  height: 20px;
  padding: var(--space2) var(--space4);
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2r);
  background: var(--Black-A30);
  color: var(--Neutral-0);
  font-family: var(--font-family-main);
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  line-height: 16px;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity--normal {
  height: 22px;
  padding: var(--space3) var(--space4);
  border-color: var(--gray-8);
  background: transparent;
  color: var(--gray-5);
  font-size: var(--font-size-equity-id);
  line-height: var(--line-height-label);
}

.nn-equity--normal::before {
  content: "";
  position: absolute;
  left: -31px;
  top: -20px;
  width: 37px;
  height: 55px;
  background: url("../image/Equity/id-normal-shine.svg") center / 37px 55px no-repeat;
  mix-blend-mode: color-dodge;
  z-index: 1;
  pointer-events: none;
}

.nn-equity--premium {
  --nn-equity-premium-bg: #e3234f;
  --nn-equity-premium-border-base: #fd3e6b;
  --nn-equity-premium-border-start: #f7bb7a;
  --nn-equity-premium-border-end: #e6515a;
  overflow: hidden;
  background:
    linear-gradient(var(--nn-equity-premium-bg), var(--nn-equity-premium-bg)) padding-box,
    radial-gradient(
      transparent,
      transparent,
      var(--nn-equity-premium-border-start),
      var(--nn-equity-premium-border-end),
      transparent,
      transparent
    ) border-box,
    linear-gradient(
      var(--nn-equity-premium-border-base),
      var(--nn-equity-premium-border-base)
    ) border-box;
  background-size: auto, 300% 300%, auto;
  background-position: 0 0, 50% 0%, 0 0;
  border: 1px solid transparent;
  animation: nn-equity-premium-border 5.6s linear infinite;
}

.nn-equity--premium::before {
  content: none;
}

.nn-equity--premium::after {
  content: none;
}

@keyframes nn-equity-premium-border {
  0% { background-position: 0 0, 50% 0%, 0 0; }
  6.25% { background-position: 0 0, 70% 4%, 0 0; }
  12.5% { background-position: 0 0, 85% 15%, 0 0; }
  18.75% { background-position: 0 0, 96% 30%, 0 0; }
  25% { background-position: 0 0, 100% 50%, 0 0; }
  31.25% { background-position: 0 0, 96% 70%, 0 0; }
  37.5% { background-position: 0 0, 85% 85%, 0 0; }
  43.75% { background-position: 0 0, 70% 96%, 0 0; }
  50% { background-position: 0 0, 50% 100%, 0 0; }
  56.25% { background-position: 0 0, 30% 96%, 0 0; }
  62.5% { background-position: 0 0, 15% 85%, 0 0; }
  68.75% { background-position: 0 0, 4% 70%, 0 0; }
  75% { background-position: 0 0, 0% 50%, 0 0; }
  81.25% { background-position: 0 0, 4% 30%, 0 0; }
  87.5% { background-position: 0 0, 15% 15%, 0 0; }
  93.75% { background-position: 0 0, 30% 4%, 0 0; }
  100% { background-position: 0 0, 50% 0%, 0 0; }
}

.nn-equity__premium-sweep-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}

.nn-equity__premium-sweep {
  position: absolute;
  top: -8px;
  bottom: -8px;
  left: -28px;
  width: 12px;
  background: linear-gradient(
    100deg,
    transparent 0%,
    var(--Neutral-0) 18%,
    var(--Neutral-0) 82%,
    transparent 100%
  );
  mix-blend-mode: screen;
  opacity: 0;
  transform: translateX(0) skewX(-18deg);
  animation: nn-equity-premium-sweep 5s ease-in-out infinite;
  pointer-events: none;
}

.nn-equity__premium-sweep--second {
  left: -26px;
  width: 12px;
  animation-delay: 0.06s;
}

.nn-equity__premium-sweep--repeat {
  animation-delay: 0.42s;
}

.nn-equity__premium-sweep--repeat.nn-equity__premium-sweep--second {
  animation-delay: 0.48s;
}

@keyframes nn-equity-premium-sweep {
  0%,
  2% {
    opacity: 0;
    transform: translateX(0) skewX(-18deg);
  }

  5% {
    opacity: 0.12;
  }

  13% {
    opacity: 0.5;
  }

  20% {
    opacity: 0.12;
  }

  23% {
    opacity: 0;
    transform: translateX(178px) skewX(-18deg);
  }

  24%,
  100% {
    opacity: 0;
    transform: translateX(178px) skewX(-18deg);
  }
}

.nn-equity--small {
  height: 16px;
  padding: var(--space2) var(--space4);
  font-size: 13px;
  line-height: 12px;
}

.nn-equity--normal.nn-equity--small {
  padding-block: var(--space0);
}

.nn-equity__icon,
.nn-equity__text {
  position: relative;
  z-index: 3;
}

.nn-equity__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  flex: 0 0 auto;
}

.nn-equity--small .nn-equity__icon {
  width: var(--icon-size-x7);
  height: var(--icon-size-x7);
}

.nn-equity--normal .nn-equity__icon {
  width: var(--icon-size-x7);
  height: var(--icon-size-x7);
  color: var(--gray-6);
}

.nn-equity--overlay::before {
  content: "";
  position: absolute;
  left: -30px;
  top: -19px;
  z-index: 1;
  width: 37px;
  height: 55px;
  background: url("../image/Equity/id-overlay-shine.svg") center / 37px 55px no-repeat;
  mix-blend-mode: color-dodge;
  pointer-events: none;
}

.nn-equity--overlay.nn-equity--small .nn-equity__icon {
  width: var(--icon-size-x6);
  height: var(--icon-size-x6);
}

.nn-equity__icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.nn-equity-rank {
  --nn-equity-rank-color: #606060;
  --nn-equity-rank-border: rgba(96, 96, 96, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  padding: var(--space0) var(--space4);
  border: 1px solid var(--nn-equity-rank-border);
  border-radius: var(--border-radius-2r);
  color: var(--nn-equity-rank-color);
  background: transparent;
  font-family: var(--font-family-main);
  font-size: 12px;
  font-weight: var(--font-weight-normal);
  line-height: 16px;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-rank--small {
  height: 16px;
  padding: var(--space0) var(--space4);
  font-size: 11px;
  line-height: 16px;
}

.nn-equity-rank--large {
  height: 24px;
  padding: var(--space2) var(--space6);
  font-size: 16px;
  line-height: 22px;
}

.nn-equity-rank--lv-1 { --nn-equity-rank-color: #606060; --nn-equity-rank-border: rgba(96, 96, 96, 0.2); }
.nn-equity-rank--lv-2 { --nn-equity-rank-color: #7a6258; --nn-equity-rank-border: rgba(122, 98, 88, 0.2); }
.nn-equity-rank--lv-3 { --nn-equity-rank-color: #576184; --nn-equity-rank-border: rgba(87, 97, 132, 0.2); }
.nn-equity-rank--lv-4 { --nn-equity-rank-color: #776641; --nn-equity-rank-border: rgba(119, 102, 65, 0.2); }
.nn-equity-rank--lv-5 { --nn-equity-rank-color: #5f807e; --nn-equity-rank-border: rgba(95, 128, 126, 0.2); }
.nn-equity-rank--lv-6 { --nn-equity-rank-color: #1c897a; --nn-equity-rank-border: rgba(28, 137, 122, 0.2); }
.nn-equity-rank--lv-7 { --nn-equity-rank-color: #195076; --nn-equity-rank-border: rgba(25, 80, 118, 0.2); }
.nn-equity-rank--lv-8 { --nn-equity-rank-color: #5e4483; --nn-equity-rank-border: rgba(94, 68, 131, 0.2); }
.nn-equity-rank--lv-9 { --nn-equity-rank-color: #783a3b; --nn-equity-rank-border: rgba(120, 58, 59, 0.2); }
.nn-equity-rank--lv-10 { --nn-equity-rank-color: #b13a60; --nn-equity-rank-border: rgba(177, 58, 96, 0.2); }

.dark-mode .nn-equity-rank--lv-1 { --nn-equity-rank-color: #a19f9f; --nn-equity-rank-border: rgba(161, 159, 159, 0.2); }
.dark-mode .nn-equity-rank--lv-2 { --nn-equity-rank-color: #9d7f72; --nn-equity-rank-border: rgba(157, 127, 114, 0.2); }
.dark-mode .nn-equity-rank--lv-3 { --nn-equity-rank-color: #7680a3; --nn-equity-rank-border: rgba(118, 128, 163, 0.2); }
.dark-mode .nn-equity-rank--lv-4 { --nn-equity-rank-color: #907e57; --nn-equity-rank-border: rgba(144, 126, 87, 0.2); }
.dark-mode .nn-equity-rank--lv-5 { --nn-equity-rank-color: #79a79f; --nn-equity-rank-border: rgba(121, 167, 159, 0.2); }
.dark-mode .nn-equity-rank--lv-6 { --nn-equity-rank-color: #2da595; --nn-equity-rank-border: rgba(45, 165, 149, 0.2); }
.dark-mode .nn-equity-rank--lv-7 { --nn-equity-rank-color: #3f89bd; --nn-equity-rank-border: rgba(63, 137, 189, 0.2); }
.dark-mode .nn-equity-rank--lv-8 { --nn-equity-rank-color: #9972d1; --nn-equity-rank-border: rgba(153, 114, 209, 0.2); }
.dark-mode .nn-equity-rank--lv-9 { --nn-equity-rank-color: #af5557; --nn-equity-rank-border: rgba(175, 85, 87, 0.2); }
.dark-mode .nn-equity-rank--lv-10 { --nn-equity-rank-color: #e94478; --nn-equity-rank-border: rgba(233, 68, 120, 0.2); }

.nn-equity-community-level {
  --nn-equity-community-level-bg: #6b6f73;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 20px;
  overflow: visible;
  border-radius: var(--border-radius-2r);
  background: var(--nn-equity-community-level-bg);
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-community-level--small {
  width: 34px;
  height: 16px;
}

.nn-equity-community-level--compact {
  width: 30.6px;
  height: 14.4px;
}

.nn-equity-community-level--lv-10 {
  width: 44px;
}

.nn-equity-community-level--lv-10.nn-equity-community-level--small {
  width: 36px;
}

.nn-equity-community-level--lv-10.nn-equity-community-level--compact {
  width: 32.4px;
}

.nn-equity-community-level--lv-8,
.nn-equity-community-level--lv-9,
.nn-equity-community-level--lv-10 {
  --nn-equity-community-level-border-start: #f6bd8a;
  --nn-equity-community-level-border-end: #e55689;
  --nn-equity-community-level-border-glow: rgba(229, 86, 137, 0.34);
}

.nn-equity-community-level--lv-9 {
  --nn-equity-community-level-border-start: #f7bb7a;
  --nn-equity-community-level-border-end: #e6515a;
  --nn-equity-community-level-border-glow: rgba(230, 81, 90, 0.34);
}

.nn-equity-community-level--lv-10 {
  --nn-equity-community-level-border-start: #fbe37f;
  --nn-equity-community-level-border-end: #f1c867;
  --nn-equity-community-level-border-glow: rgba(241, 200, 103, 0.34);
}

.nn-equity-community-level--lv-8::after,
.nn-equity-community-level--lv-9::after,
.nn-equity-community-level--lv-10::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: var(--space2);
  border-radius: inherit;
  background-image:
    radial-gradient(
      transparent,
      transparent,
      var(--nn-equity-community-level-border-start),
      var(--nn-equity-community-level-border-end),
      transparent,
      transparent
    );
  background-size: 300% 300%;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  pointer-events: none;
  animation: nn-equity-community-level-border 5.6s linear infinite;
  filter: drop-shadow(0 0 4px var(--nn-equity-community-level-border-glow));
  will-change: background-position;
}

@keyframes nn-equity-community-level-border {
  0% { background-position: 50% 0%; }
  6.25% { background-position: 70% 4%; }
  12.5% { background-position: 85% 15%; }
  18.75% { background-position: 96% 30%; }
  25% { background-position: 100% 50%; }
  31.25% { background-position: 96% 70%; }
  37.5% { background-position: 85% 85%; }
  43.75% { background-position: 70% 96%; }
  50% { background-position: 50% 100%; }
  56.25% { background-position: 30% 96%; }
  62.5% { background-position: 15% 85%; }
  68.75% { background-position: 4% 70%; }
  75% { background-position: 0% 50%; }
  81.25% { background-position: 4% 30%; }
  87.5% { background-position: 15% 15%; }
  93.75% { background-position: 30% 4%; }
  100% { background-position: 50% 0%; }
}

.nn-equity-community-level__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}

.nn-equity-community-level__sweep {
  position: absolute;
  top: -8px;
  bottom: -8px;
  left: -84px;
  width: 60px;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.16) 18%,
    rgba(255, 255, 255, 0.48) 34%,
    rgba(255, 255, 255, 0.72) 50%,
    rgba(255, 255, 255, 0.48) 66%,
    rgba(255, 255, 255, 0.16) 82%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: blur(2px);
  opacity: 0;
  transform: translateX(0) skewX(-18deg);
  animation: nn-equity-premium-sweep 5s ease-in-out infinite;
  pointer-events: none;
}

.nn-equity-community-level__sweep--second {
  animation-delay: 0.42s;
}

.nn-equity-community-level__asset {
  position: relative;
  z-index: 2;
  display: block;
  width: 38px;
  height: 20px;
  pointer-events: none;
}

.nn-equity-community-level--small .nn-equity-community-level__asset {
  width: 30.4px;
  height: 16px;
}

.nn-equity-community-level--compact .nn-equity-community-level__asset {
  width: 27.36px;
  height: 14.4px;
}

.nn-equity-community-level__crown {
  position: absolute;
  z-index: 3;
  width: 11px;
  height: 11px;
  top: -7px;
  pointer-events: none;
}

.nn-equity-community-level--small .nn-equity-community-level__crown {
  width: 9px;
  height: 9px;
  top: -6px;
}

.nn-equity-community-level--compact .nn-equity-community-level__crown {
  width: 8.1px;
  height: 8.1px;
  top: -5.4px;
}

.nn-equity-community-level--lv-8 .nn-equity-community-level__crown { left: 24.5px; }
.nn-equity-community-level--lv-9 .nn-equity-community-level__crown { left: 24px; }
.nn-equity-community-level--lv-10 .nn-equity-community-level__crown { left: 29px; }
.nn-equity-community-level--small.nn-equity-community-level--lv-8 .nn-equity-community-level__crown { left: 21.5px; }
.nn-equity-community-level--small.nn-equity-community-level--lv-9 .nn-equity-community-level__crown { left: 21px; }
.nn-equity-community-level--small.nn-equity-community-level--lv-10 .nn-equity-community-level__crown { left: 24px; }
.nn-equity-community-level--compact.nn-equity-community-level--lv-8 .nn-equity-community-level__crown { left: 19.35px; }
.nn-equity-community-level--compact.nn-equity-community-level--lv-9 .nn-equity-community-level__crown { left: 18.9px; }
.nn-equity-community-level--compact.nn-equity-community-level--lv-10 .nn-equity-community-level__crown { left: 21.6px; }

.nn-equity-community-level--lv-1 { --nn-equity-community-level-bg: #6b6f73; }
.nn-equity-community-level--lv-2 { --nn-equity-community-level-bg: #496174; }
.nn-equity-community-level--lv-3 { --nn-equity-community-level-bg: #308294; }
.nn-equity-community-level--lv-4 { --nn-equity-community-level-bg: #439e5d; }
.nn-equity-community-level--lv-5 { --nn-equity-community-level-bg: #336ff2; }
.nn-equity-community-level--lv-6 { --nn-equity-community-level-bg: #6c41f1; }
.nn-equity-community-level--lv-7 { --nn-equity-community-level-bg: #9829a0; }
.nn-equity-community-level--lv-8 { --nn-equity-community-level-bg: #ca418c; }
.nn-equity-community-level--lv-9 { --nn-equity-community-level-bg: #cd362f; }
.nn-equity-community-level--lv-10 { --nn-equity-community-level-bg: #e3a91c; }

.nn-equity-community-role {
  --nn-equity-community-role-bg: var(--Community-Role-Super-Admin);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space2);
  height: 16px;
  padding: var(--space0) var(--space3);
  border-radius: var(--border-radius-2r);
  background: var(--nn-equity-community-role-bg);
  color: var(--White-A90);
  font-family: var(--font-family-main);
  font-size: var(--font-size-badge);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-caption);
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-community-role--super-admin {
  --nn-equity-community-role-bg: var(--Community-Role-Super-Admin);
}

.nn-equity-community-role--senior-admin {
  --nn-equity-community-role-bg: var(--Community-Role-Senior-Admin);
}

.nn-equity-community-role--admin {
  --nn-equity-community-role-bg: var(--Community-Role-Admin);
}

.nn-equity-community-role--core {
  --nn-equity-community-role-bg: var(--Community-Role-Core);
}

.nn-equity-member-level {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-member-level__asset {
  display: block;
  width: auto;
  height: 100%;
  pointer-events: none;
}

.nn-equity-pubg-national-power-rank {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-pubg-national-power-rank__asset {
  display: block;
  width: auto;
  height: 100%;
  pointer-events: none;
}

.nn-equity-medal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  vertical-align: middle;
  box-sizing: border-box;
}

.nn-equity-medal__asset {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}
`;

function injectEquityStyles() {
  if (document.getElementById('nn-equity-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-equity-styles';
  style.textContent = EquityStyles;
  document.head.appendChild(style);
}

function normalizeEquitySize(size) {
  const value = String(size || 'default').toLowerCase();
  return value === 'small' ? 'small' : 'default';
}

function normalizeEquityVariant(variant) {
  const value = String(variant || 'normal').toLowerCase();
  if (
    value === 'overlay' ||
    value === 'cover' ||
    value === 'id-overlay'
  ) return 'overlay';
  if (
    value === 'premium' ||
    value === 'advanced' ||
    value === 'id-advanced' ||
    value === 'id 高级'
  ) return 'premium';
  return 'normal';
}

function normalizeEquityRankSize(size) {
  const value = String(size || 'default').toLowerCase();
  if (value === 'small') return 'small';
  if (value === 'big' || value === 'large') return 'large';
  return 'default';
}

function normalizeEquityRankLevel(lv) {
  const numberValue = parseInt(lv, 10);
  if (Number.isNaN(numberValue)) return 1;
  return Math.min(10, Math.max(1, numberValue));
}

function normalizeEquityCommunityLevelSize(size) {
  const value = String(size || 'default').toLowerCase();
  if (value === 'small') return 'small';
  if (value === 'compact') return 'compact';
  return 'default';
}

function normalizeEquityCommunityRole(role) {
  const value = String(role || 'super-admin').toLowerCase();
  if (value === 'super-admin' || value === 'super' || value === 'owner' || value === '超管') return 'super-admin';
  if (value === 'senior-admin' || value === 'senior' || value === 'executive' || value === '高管') return 'senior-admin';
  if (value === 'admin' || value === 'manager' || value === '管理') return 'admin';
  if (value === 'core' || value === '核心') return 'core';
  return 'super-admin';
}

function normalizeEquityMemberLevel(lv) {
  const value = Number.parseInt(lv, 10);
  if (!Number.isFinite(value)) return 1;
  return Math.min(100, Math.max(1, value));
}

function normalizeEquityPubgNationalPowerRank(rank) {
  const value = Number.parseInt(rank, 10);
  if (!Number.isFinite(value)) return 1;
  return Math.min(50, Math.max(1, value));
}

const equityMedalCatalog = {
  achievement: {
    firepower: {
      label: '火力全开',
      levels: [1, 2, 3, 4, 5],
      asset: function(level) {
        return `../image/Medal/achievement/firepower-lv${level}.png`;
      }
    },
    survivor: {
      label: '绝地生存家',
      levels: [1, 2, 3, 4, 5],
      asset: function(level) {
        return `../image/Medal/achievement/survivor-lv${level}.png`;
      }
    },
    ace: {
      label: '绝地王牌',
      levels: [1, 2, 3, 4, 5],
      asset: function(level) {
        return `../image/Medal/achievement/ace-lv${level}.png`;
      }
    },
    colonel: {
      label: '吃鸡上校',
      levels: [1, 2, 3, 4, 5],
      asset: function(level) {
        return `../image/Medal/achievement/colonel-lv${level}.png`;
      }
    },
    'pubg-player': {
      label: 'PUBG玩家',
      levels: [],
      asset: function() {
        return '../image/Medal/achievement/pubg-player.png';
      }
    }
  },
  community: {
    'best-cp': {
      label: '最佳CP',
      levels: [],
      asset: function() {
        return '../image/Medal/community/best-cp.png';
      }
    },
    'nn-dragon': {
      label: 'NN龙王',
      levels: [2, 3, 4, 5, 21],
      asset: function(level) {
        return `../image/Medal/community/nn-dragon-lv${level}.png`;
      }
    }
  },
  tournament: {
    champion: {
      label: '赛事冠军',
      levels: [],
      asset: function() {
        return '../image/Medal/tournament/champion.png';
      }
    },
    'runner-up': {
      label: '赛事亚军',
      levels: [],
      asset: function() {
        return '../image/Medal/tournament/runner-up.png';
      }
    },
    third: {
      label: '赛事季军',
      levels: [],
      asset: function() {
        return '../image/Medal/tournament/third.png';
      }
    }
  }
};

function normalizeEquityMedalCategory(category) {
  const value = String(category || 'achievement').toLowerCase();
  if (value === 'community' || value === '社区') return 'community';
  if (value === 'tournament' || value === '赛事') return 'tournament';
  return 'achievement';
}

function normalizeEquityMedalType(category, medal) {
  const value = String(medal || '').toLowerCase();
  let normalized = 'firepower';
  if (category === 'community') {
    normalized = value === 'best-cp' || value === 'bestcp' || value === '最佳cp' ? 'best-cp' : 'nn-dragon';
  } else if (category === 'tournament') {
    normalized = value === 'runner-up' || value === 'third' ? value : 'champion';
  } else if (Object.prototype.hasOwnProperty.call(equityMedalCatalog.achievement, value)) {
    normalized = value;
  }
  return equityMedalCatalog[category][normalized] ? normalized : Object.keys(equityMedalCatalog[category])[0];
}

function normalizeEquityMedalLevel(medal, level) {
  if (!medal.levels.length) return null;
  const value = Number.parseInt(level, 10);
  return medal.levels.includes(value) ? value : medal.levels[0];
}

const equityRankLabels = {
  1: '黑铁',
  2: '青铜',
  3: '白银',
  4: '黄金',
  5: '铂金',
  6: '翡翠',
  7: '钻石',
  8: '大师',
  9: '宗师',
  10: '王者'
};

const equityCommunityRoleLabels = {
  'super-admin': '超管',
  'senior-admin': '高管',
  admin: '管理',
  core: '核心'
};

function createEquityIdIcon() {
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('viewBox', '0 0 15 15');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(namespace, 'path');
  path.setAttribute('d', 'M2.50256 13H0.0020752V2H2.50256V13ZM9.37647 2C12.4832 2.00001 15.0021 4.46287 15.0021 7.50047C15.0018 10.5378 12.483 13 9.37647 13H5.00111V2H9.37647ZM7.50159 10.5561H9.37647C11.1022 10.5561 12.5013 9.18776 12.5016 7.50047C12.5016 5.81292 11.1024 4.44487 9.37647 4.44487H7.50159V10.5561Z');
  svg.appendChild(path);
  return svg;
}

function createEquity(options = {}) {
  const {
    text = '90231',
    size = 'default',
    variant = 'normal',
    state = '',
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedSize = normalizeEquitySize(size);
  const normalizedVariant = normalizeEquityVariant(state || variant);
  const root = document.createElement('span');
  root.className = [
    'nn-equity',
    normalizedSize === 'small' ? 'nn-equity--small' : '',
    normalizedVariant === 'normal' ? 'nn-equity--normal' : '',
    normalizedVariant === 'overlay' ? 'nn-equity--overlay' : '',
    normalizedVariant === 'premium' ? 'nn-equity--premium' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-size', normalizedSize);
  root.setAttribute('data-variant', normalizedVariant);

  if (normalizedVariant === 'premium') {
    const sweepBg = document.createElement('span');
    sweepBg.className = 'nn-equity__premium-sweep-bg';
    sweepBg.setAttribute('aria-hidden', 'true');
    const firstSweep = document.createElement('span');
    firstSweep.className = 'nn-equity__premium-sweep';
    const secondSweep = document.createElement('span');
    secondSweep.className = 'nn-equity__premium-sweep nn-equity__premium-sweep--second';
    const repeatFirstSweep = document.createElement('span');
    repeatFirstSweep.className = 'nn-equity__premium-sweep nn-equity__premium-sweep--repeat';
    const repeatSecondSweep = document.createElement('span');
    repeatSecondSweep.className = 'nn-equity__premium-sweep nn-equity__premium-sweep--second nn-equity__premium-sweep--repeat';
    sweepBg.appendChild(firstSweep);
    sweepBg.appendChild(secondSweep);
    sweepBg.appendChild(repeatFirstSweep);
    sweepBg.appendChild(repeatSecondSweep);
    root.appendChild(sweepBg);
  }

  const icon = document.createElement('span');
  icon.className = 'nn-equity__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.appendChild(createEquityIdIcon());

  const label = document.createElement('span');
  label.className = 'nn-equity__text';
  label.textContent = String(text);

  root.appendChild(icon);
  root.appendChild(label);
  return root;
}

function createEquityRank(options = {}) {
  const {
    lv = 1,
    size = 'default',
    text = '',
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedLv = normalizeEquityRankLevel(lv);
  const normalizedSize = normalizeEquityRankSize(size);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-rank',
    `nn-equity-rank--lv-${normalizedLv}`,
    normalizedSize === 'small' ? 'nn-equity-rank--small' : '',
    normalizedSize === 'large' ? 'nn-equity-rank--large' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-lv', String(normalizedLv));
  root.setAttribute('data-size', normalizedSize);
  root.textContent = text || equityRankLabels[normalizedLv];

  return root;
}

function createEquityCommunityLevel(options = {}) {
  const {
    lv = 1,
    size = 'default',
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedLv = normalizeEquityRankLevel(lv);
  const normalizedSize = normalizeEquityCommunityLevelSize(size);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-community-level',
    `nn-equity-community-level--lv-${normalizedLv}`,
    normalizedSize === 'small' ? 'nn-equity-community-level--small' : '',
    normalizedSize === 'compact' ? 'nn-equity-community-level--compact' : '',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-lv', String(normalizedLv));
  root.setAttribute('data-size', normalizedSize);

  const bg = document.createElement('span');
  bg.className = 'nn-equity-community-level__bg';
  if (normalizedLv >= 8) {
    const sweepFirst = document.createElement('span');
    sweepFirst.className = 'nn-equity-community-level__sweep nn-equity-community-level__sweep--first';
    const sweepSecond = document.createElement('span');
    sweepSecond.className = 'nn-equity-community-level__sweep nn-equity-community-level__sweep--second';
    bg.appendChild(sweepFirst);
    bg.appendChild(sweepSecond);
  }
  root.appendChild(bg);

  const asset = document.createElement('img');
  asset.className = 'nn-equity-community-level__asset';
  asset.src = `../image/Community Level/lv${normalizedLv}.svg`;
  asset.alt = '';
  root.appendChild(asset);

  if (normalizedLv >= 8) {
    const crown = document.createElement('img');
    crown.className = 'nn-equity-community-level__crown';
    crown.src = `../image/Community Level/lv${normalizedLv}-crown.png`;
    crown.alt = '';
    root.appendChild(crown);
  }

  return root;
}

function createEquityCommunityRole(options = {}) {
  const {
    role = 'super-admin',
    text = '',
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedRole = normalizeEquityCommunityRole(role);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-community-role',
    `nn-equity-community-role--${normalizedRole}`,
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-role', normalizedRole);
  root.textContent = text || equityCommunityRoleLabels[normalizedRole];

  return root;
}

function createEquityMemberLevel(options = {}) {
  const {
    lv = 1,
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedLv = normalizeEquityMemberLevel(lv);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-member-level',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-lv', String(normalizedLv));
  root.setAttribute('data-size', 'default');

  const asset = document.createElement('img');
  asset.className = 'nn-equity-member-level__asset';
  asset.src = `../image/User Level/Digital badge/ULVN${normalizedLv}.svg`;
  asset.alt = `成员等级 ${normalizedLv}`;
  root.appendChild(asset);

  return root;
}

function createEquityPubgNationalPowerRank(options = {}) {
  const {
    rank = 1,
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedRank = normalizeEquityPubgNationalPowerRank(rank);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-pubg-national-power-rank',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-rank', String(normalizedRank));

  const asset = document.createElement('img');
  asset.className = 'nn-equity-pubg-national-power-rank__asset';
  asset.src = `../image/PUBG National Power Rank/${normalizedRank}.svg`;
  asset.alt = `PUBG 全国战力排行 ${normalizedRank}`;
  root.appendChild(asset);

  return root;
}

function createEquityMedal(options = {}) {
  const {
    category = 'achievement',
    medal = 'firepower',
    level = 2,
    className = '',
    id = '',
  } = options;

  injectEquityStyles();

  const normalizedCategory = normalizeEquityMedalCategory(category);
  const normalizedType = normalizeEquityMedalType(normalizedCategory, medal);
  const medalDefinition = equityMedalCatalog[normalizedCategory][normalizedType];
  const normalizedLevel = normalizeEquityMedalLevel(medalDefinition, level);
  const root = document.createElement('span');
  root.className = [
    'nn-equity-medal',
    className
  ].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('data-category', normalizedCategory);
  root.setAttribute('data-medal', normalizedType);
  if (normalizedLevel !== null) root.setAttribute('data-lv', String(normalizedLevel));

  const asset = document.createElement('img');
  asset.className = 'nn-equity-medal__asset';
  asset.src = medalDefinition.asset(normalizedLevel);
  asset.alt = `${medalDefinition.label}${normalizedLevel === null ? '' : ` LV.${normalizedLevel}`}`;
  root.appendChild(asset);

  return root;
}

function renderEquities(container, items = []) {
  if (!container) return;
  injectEquityStyles();
  container.innerHTML = '';
  items.forEach(function(options) {
    container.appendChild(createEquity(options));
  });
}

if (typeof window !== 'undefined') {
  window.injectEquityStyles = injectEquityStyles;
  window.createEquity = createEquity;
  window.createEquityRank = createEquityRank;
  window.createEquityCommunityLevel = createEquityCommunityLevel;
  window.createEquityCommunityRole = createEquityCommunityRole;
  window.createEquityMemberLevel = createEquityMemberLevel;
  window.createEquityPubgNationalPowerRank = createEquityPubgNationalPowerRank;
  window.createEquityMedal = createEquityMedal;
  window.renderEquities = renderEquities;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectEquityStyles,
    createEquity,
    createEquityRank,
    createEquityCommunityLevel,
    createEquityCommunityRole,
    createEquityMemberLevel,
    createEquityPubgNationalPowerRank,
    createEquityMedal,
    renderEquities
  };
}
