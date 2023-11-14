import AppError from './AppError.js';
import { ERROR, MENU, EVENT } from './Constant.js';
import Menu from './domain/Menu.js';
import inRange from './utils/inRange.js';

const Validator = {
  validateDate(date) {
    const REGEX_NUMERIC = /^\d+$/;
    if (
      !REGEX_NUMERIC.test(date) ||
      !inRange(date, EVENT.DAY_MIN, EVENT.DAY_MAX)
    ) {
      throw new AppError(ERROR.INVALID_DATE);
    }
  },

  validateOrderList(orderList) {
    if (
      !this.matchSpecifiedFormat(orderList) ||
      this.isDuplicate(orderList) ||
      !orderList.every(this.isValidOrder)
    ) {
      throw new AppError(ERROR.INVALID_ORDER);
    }
  },

  isValidOrder(order) {
    const { menu, count } = order;

    if (count < EVENT.MININUM_SERVE) {
      return false;
    }
    if (count > EVENT.MAXIMUM_SERVE) {
      return false;
    }
    if (!Menu.has(menu)) {
      return false;
    }

    return true;
  },

  isDuplicate(orderList) {
    const menuNames = orderList.map(({ menu }) => menu);
    return new Set(menuNames).size !== orderList.length;
  },

  matchSpecifiedFormat(orderList) {
    return orderList.every(({ menu, count }) => menu && count);
  },
};

export default Validator;
