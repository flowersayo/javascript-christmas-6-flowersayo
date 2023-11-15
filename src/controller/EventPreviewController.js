import EventManager from '../domain/event/EventManager.js';
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
    this.handlePrintGiftMenu();
    this.handlePrintEventResult();
  }

  async handlePrintMenu() {
    OutputView.printMenu(this.#order.orderList);
  }

  async handlePrintTotalAmountBeforeDiscount() {
    const totalAmount = this.#order.calcTotalAmountBeforeDiscount();
    OutputView.printAmountBeforeDiscount(totalAmount);
  }

  async handlePrintGiftMenu() {
    const giftInfo = EventManager.applyGiftEvent(this.#order);
    OutputView.printGiftMenu(giftInfo);
  }

  async handlePrintEventResult() {
    const eventBenefits = EventManager.getEventBenefits(this.#order);
    OutputView.printEventResult(eventBenefits);
  }
}

export default EventPreviewController;
