import { ERROR } from './Constant.js';

class AppError extends Error {
  constructor(type, message) {
    super(`${ERROR.PREFIX} ${message}`);
    this.type = type;
  }
}

export default AppError;
