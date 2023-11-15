import Event from './Event.js';

class SpecialDiscount extends Event {
  #applyDate = [3, 10, 17, 24, 25, 31];

  #discount = 1_000;

  #canApply(order) {
    return (
      super.canApply(order) && this.#applyDate.includes(order.date.getDate())
    );
  }

  #getDiscount() {
    return this.#discount;
  }

  apply(order) {
    if (this.#canApply(order)) {
      return this.#getDiscount(order);
    }

    return null;
  }
}
export default SpecialDiscount;
