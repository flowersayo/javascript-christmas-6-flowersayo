import Preview from '../domain/Preview.js';
import InputView from '../view/InputView.js';

class EventPreviewController {
  #preview;

  async handleTakeOrder() {
    const date = await InputView.readDate();
    const orderList = await InputView.readOrder();

    this.#preview = new Preview(date, orderList);
  }
}

export default EventPreviewController;
