class Badge {
  #name;

  #minBenefitAmount;

  constructor(name, minBenefitAmount) {
    this.#name = name;
    this.#minBenefitAmount = minBenefitAmount;
  }

  get name() {
    return this.#name;
  }

  isEligible(order) {
    return order.calcBenefitAmount() >= this.#minBenefitAmount;
  }
}

export default Badge;
