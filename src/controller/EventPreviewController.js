import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Order from '../domain/Order.js';

class EventPreviewController {
  #order;

  async handleTakeOrder() {
    const date = await InputView.readDate();
    const orderList = await InputView.readOrder();

    this.#order = new Order(date, orderList);
  }

  async handleEventResult() {
    OutputView.printPreviewTitle(this.#order.date);
    this.handlePrintMenu();
    this.handlePrintTotalAmountBeforeDiscount();
  }

  async handlePrintMenu() {
    OutputView.printMenu(this.#order.orderList);
  }

  async handlePrintTotalAmountBeforeDiscount() {
    const totalAmount = this.#order.calcTotalAmountBeforeDiscount();
    OutputView.printAmountBeforeDiscount(totalAmount);
  }
}

export default EventPreviewController;
