import Validator from '../Validator.js';

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
}

export default Preview;
