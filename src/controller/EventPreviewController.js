import { EVENT } from '../Constant.js';
import Preview from '../domain/Preview.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPreviewController {
  #preview;

  async handleTakeOrder() {
    const date = await InputView.readDate();
    const orderList = await InputView.readOrder();

    this.#preview = new Preview(date, orderList);
  }

  async handleEventResult() {
    OutputView.printPreviewTitle(EVENT.MONTH, this.#preview.date);
    this.handlePrintMenu();
  }

  async handlePrintMenu() {
    OutputView.printMenu(this.#preview.orderList);
  }
}

export default EventPreviewController;
