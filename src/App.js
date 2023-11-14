import EventPreviewController from './controller/EventPreviewController.js';

class App {
  constructor() {
    this.eventPreviewController = new EventPreviewController();
  }

  async run() {
    this.#handleInputError(async () => {
      await this.eventPreviewController.handleTakeOrder();
    });
  }

  async #handleInputError(action) {
    try {
      await action();
    } catch (e) {
      this.#handleInputError(action);
    }
  }
}

export default App;
