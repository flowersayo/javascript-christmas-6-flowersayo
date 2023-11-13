import EventPreviewController from './controller/EventPreviewController.js';

class App {
  constructor() {
    this.eventPreviewController = new EventPreviewController();
  }

  async run() {
    await this.eventPreviewController.handleTakeOrder();
  }
}

export default App;
