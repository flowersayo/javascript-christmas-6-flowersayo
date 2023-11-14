import Validator from '../Validator.js';
import Menu from './Menu.js';

class Preview {
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
    Validator.validateDate(date);
    Validator.validateOrderList(orderList);

    this.#date = date;
    this.#orderList = orderList;
  }

  get date() {
    return this.#date;
  }

  get orderList() {
    return this.#orderList;
  }

  getTotalAmountBeforeDiscount() {
    const INITAL_SUM = 0;
    const totalAmount = this.#orderList.reduce((acc, { menu, count }) => {
      const menuItem = Menu.find(menu);

      return acc + menuItem.price * count;
    }, INITAL_SUM);

    return totalAmount;
  }
}

export default Preview;
