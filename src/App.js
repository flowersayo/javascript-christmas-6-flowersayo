import EventPreviewController from './controller/EventPreviewController.js';
import OutputView from './view/OutputView.js';
import { ERROR } from './Constant.js';

class App {
  constructor() {
    this.eventPreviewController = new EventPreviewController();
  }

  async run() {
    await this.#handleError(async () => {
      await this.eventPreviewController.handleTakeOrder();
    });

    await this.eventPreviewController.handleEventResult();
  }

  async #handleError(action) {
    try {
      await action();
    } catch (error) {
      OutputView.printError(error.message);
      if (error.type === ERROR.INPUT_ERROR) {
        this.#handleError(action);
      }
    }
  }
}

export default App;
