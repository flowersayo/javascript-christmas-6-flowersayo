import InputView from '../view/InputView.js';

class EventPreviewController {
  async handleTakeOrder() {
    const date = await InputView.readDate();
  }
}

export default EventPreviewController;
