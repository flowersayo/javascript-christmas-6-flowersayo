import InputView from '../view/InputView.js';

class EventPreviewController {
  async handleTakeOrder() {
    const date = await InputView.readDate();
    const menus = await InputView.readMenus();
  }
}

export default EventPreviewController;
