import { ERROR } from './Constant.js';
import OutputView from './view/OutputView.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
    OutputView.printError(this.message);
  }
}

export default AppError;
