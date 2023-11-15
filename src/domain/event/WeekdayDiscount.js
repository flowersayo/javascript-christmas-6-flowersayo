import { isWeekend } from '../../utils/Date.js';
import Menu from '../Menu.js';
import { MENU } from '../../Constant.js';
import Event from './Event.js';

class WeekdayDiscount extends Event {
  #discountPerDish = 2_023;

  #canApply(order) {
    return super.canApply(order) && !isWeekend(order.date);
  }

  #getDiscount({ orderList }) {
    const categoryCount = Menu.countCategory(orderList);
    console.log(categoryCount);

    const mainMenuCount = categoryCount[MENU.CATEGORIES.MAIN];

    if (mainMenuCount === 0) {
      return null;
    }

    return mainMenuCount * this.#discountPerDish;
  }

  apply(order) {
    if (this.#canApply(order)) {
      return this.#getDiscount(order);
    }

    return null;
  }
}

export default WeekdayDiscount;
