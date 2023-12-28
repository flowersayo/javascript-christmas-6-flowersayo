import { isWeekend } from '../../utils/Date.js';
import Menu from '../Menu.js';
import { MENU } from '../../Constant.js';
import Event from './Event.js';

class WeekdayDiscount extends Event {
  #canApply(order) {
    return super.canApply(order) && !isWeekend(order.date);
  }

  #getDiscount({ orderList }) {
    const DISCOUNT_PER_DISH = 2_023;
    const categoryCount = Menu.countCategory(orderList);

    const mainMenuCount = categoryCount[MENU.CATEGORIES.MAIN];

    if (mainMenuCount === 0) {
      return null;
    }

    return mainMenuCount * DISCOUNT_PER_DISH;
  }

  apply(order) {
    if (this.#canApply(order)) {
      return {
        discount: this.#getDiscount(order),
      };
    }

    return null;
  }
}

export default WeekdayDiscount;
