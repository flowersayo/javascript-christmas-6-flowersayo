import AppError from '../AppError.js';
import { ERROR, EVENT } from '../Constant.js';

class Preview {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    const REGEX_NUMERIC = /^\d+$/;
    if (!REGEX_NUMERIC.test(date)) {
      throw new AppError(ERROR.DATE_NOT_A_NUMBER);
    }

    if (date < EVENT.DAY_MIN || date > EVENT.DAY_MAX) {
      throw new AppError(ERROR.DATE_NOT_IN_RANGE);
    }
  }
}

export default Preview;
