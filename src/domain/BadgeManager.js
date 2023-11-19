import Badge from './Badge.js';

class BadgeManager {
  static #BADGE = {
    TYPES: {
      STAR: '별',
      TREE: '트리',
      SANTA: '산타',
    },

    STAR: {
      MIN_BENEFIT_AMOUNT: 5_000,
    },
    TREE: {
      MIN_BENEFIT_AMOUNT: 10_000,
    },
    SANTA: {
      MIN_BENEFIT_AMOUNT: 20_000,
    },
  };

  static #badges = [
    new Badge(
      BadgeManager.#BADGE.TYPES.STAR,
      BadgeManager.#BADGE.STAR.MIN_BENEFIT_AMOUNT
    ),
    new Badge(
      BadgeManager.#BADGE.TYPES.TREE,
      BadgeManager.#BADGE.TREE.MIN_BENEFIT_AMOUNT
    ),
    new Badge(
      BadgeManager.#BADGE.TYPES.SANTA,
      BadgeManager.#BADGE.SANTA.MIN_BENEFIT_AMOUNT
    ),
  ];

  static assign(order) {
    const badge = this.#badges
      .reverse()
      .find((badge) => badge.isEligible(order));

    return badge;
  }
}

export default BadgeManager;
