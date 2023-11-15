import Menu from './Menu.js';
import Validator from '../Validator.js';
import { EVENT } from '../Constant.js';

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
    this.#date = new Date(`${EVENT.YEAR}-${EVENT.MONTH}-${date}`);
  }

  get date() {
    return this.#date;
  }

  get orderList() {
    return this.#orderList;
  }

  calcTotalAmountBeforeDiscount() {
    const INITAL_SUM = 0;
    const totalAmount = this.#orderList.reduce((acc, { menu, count }) => {
      const menuItem = Menu.find(menu);

      return acc + menuItem.price * count;
    }, INITAL_SUM);

    return totalAmount;
  }
}

export default Order;
