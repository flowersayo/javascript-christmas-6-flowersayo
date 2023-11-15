import { getDateDiff } from '../../utils/Date.js';
import Event from './Event.js';

class D_DayDiscount extends Event {
  #INITIAL_AMOUNT = 1_000;

  #INCREMENT_PER_DAY = 100;

  #canApply(order) {
    return super.canApply(order);
  }

  #getDiscount({ date }) {
    return (
      this.#INITIAL_AMOUNT +
      getDateDiff(date, this.startDate) * this.#INCREMENT_PER_DAY
    );
  }

  apply(order) {
    if (this.#canApply(order)) {
      return this.#getDiscount(order);
    }

    return null;
  }
}

export default D_DayDiscount;
