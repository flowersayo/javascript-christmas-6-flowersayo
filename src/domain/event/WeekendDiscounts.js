import { isWeekend } from '../../utils/Date.js';
import Menu from '../Menu.js';
import { MENU } from '../../Constant.js';
import Event from './Event.js';

class WeekendDiscount extends Event {
  #discountPerDish = 2_023;

  #canApply(order) {
    return super.canApply(order) && isWeekend(order.date);
  }

  #getDiscount({ orderList }) {
    const categoryCount = Menu.countCategory(orderList);
    const dessertMenuCount = categoryCount[MENU.CATEGORIES.DESSERT];
    console.log(categoryCount);

    if (dessertMenuCount === 0) {
      return null;
    }
    return dessertMenuCount * this.#discountPerDish;
  }

  apply(order) {
    if (this.canApply(order)) {
      return this.#getDiscount(order);
    }

    return null;
  }
}

export default WeekendDiscount;
