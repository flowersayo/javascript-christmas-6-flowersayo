import Menu from './Menu.js';
import Validator from '../Validator.js';
import { EVENT } from '../Constant.js';
import EventManager from './event/EventManager.js';
import GiftEvent from './event/GiftEvent.js';

class Order {
  #date;
  /**
   * @typedef {Object} OrderItem
   * @property {string} name - 메뉴의 이름
   * @property {number} count - 주문 수량
   */

  /**
   * @type {Array<OrderItem>}
   */
  #orderList;

  constructor(date, orderList) {
    Validator.validateOrderList(orderList);
    Validator.validateDate(date);

    this.#orderList = orderList;

    this.#date = new Date(EVENT.YEAR, EVENT.MONTH - 1, date);
  }

  get date() {
    return this.#date;
  }

  get orderList() {
    return this.#orderList;
  }

  calcOriginalAmount() {
    const INITAL_SUM = 0;
    const totalAmount = this.#orderList.reduce((acc, { menu, count }) => {
      const menuItem = Menu.find(menu);

      return acc + menuItem.price * count;
    }, INITAL_SUM);

    return totalAmount;
  }

  calcBenefitAmount() {
    const eventResult = EventManager.applyAllEvents(this);
    const benefitAmount = eventResult.reduce((acc, { event, result }) => {
      let benefit;
      if (event instanceof GiftEvent) {
        benefit = Menu.find(result.gift.name).price * result.count;
      } else {
        benefit = result.discount;
      }

      return acc + benefit;
    }, 0);

    return benefitAmount;
  }

  calcDiscountedAmount() {
    const eventResult = EventManager.applyTypeEvents(
      this,
      EventManager.EVENT_TYPE.DiscountEvent
    );

    const discountedAmount = eventResult.reduce(
      (acc, { result }) => acc + result.discount,
      0
    );

    return discountedAmount;
  }

  calcFinalAmount() {
    return this.calcOriginalAmount() - this.calcDiscountedAmount();
  }
}

export default Order;
