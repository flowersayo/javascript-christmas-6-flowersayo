import InputView from '../view/InputView.js';
import Preview from '../domain/Preview.js';

class EventPreviewController {
  #preview;

  async handleTakeOrder() {
    const date = await InputView.readDate();
    const menus = await InputView.readMenus();

    this.#preview = new Preview(date);
  }
}

export default EventPreviewController;
