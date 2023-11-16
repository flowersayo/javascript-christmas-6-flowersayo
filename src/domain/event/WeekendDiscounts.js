import { isWeekend } from '../../utils/Date.js';
import Menu from '../Menu.js';
import { MENU } from '../../Constant.js';
import Event from './Event.js';

class WeekendDiscount extends Event {
  #canApply(order) {
    return super.canApply(order) && isWeekend(order.date);
  }

  #getDiscount({ orderList }) {
    const DISCOUNT_PER_DISH = 2_023;
    const categoryCount = Menu.countCategory(orderList);
    const dessertMenuCount = categoryCount[MENU.CATEGORIES.DESSERT];

    if (dessertMenuCount === 0) {
      return null;
    }
    return dessertMenuCount * DISCOUNT_PER_DISH;
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

export default WeekendDiscount;
