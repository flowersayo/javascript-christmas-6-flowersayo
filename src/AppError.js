import { ERROR } from './Constant.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}

export default AppError;
