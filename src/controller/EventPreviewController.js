import EventManager from '../domain/event/EventManager.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Order from '../domain/Order.js';
import BadgeManager from '../domain/BadgeManager.js';

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
    this.handlePrintGiftResult();
    this.handlePrintEventResult();
    this.handlePrintBeneiftAmount();
    this.handlePrintFinalAmount();
    this.handlePrintEventBadge();
  }

  async handlePrintMenu() {
    OutputView.printMenu(this.#order.orderList);
  }

  async handlePrintTotalAmountBeforeDiscount() {
    const totalAmount = this.#order.calcOriginalAmount();
    OutputView.printAmountBeforeDiscount(totalAmount);
  }

  async handlePrintGiftResult() {
    const giftEventResults = EventManager.applyTypeEvents(
      this.#order,
      EventManager.EVENT_TYPE.GiftEvent
    );

    OutputView.printGiftMenu(giftEventResults);
  }

  async handlePrintEventResult() {
    const eventResult = EventManager.applyAllEvents(this.#order);
    OutputView.printEventBenefitResult(eventResult);
  }

  async handlePrintBeneiftAmount() {
    const benefitAmount = this.#order.calcBenefitAmount();
    OutputView.printBenefitAmount(benefitAmount);
  }

  async handlePrintFinalAmount() {
    const finalAmount = this.#order.calcFinalAmount();
    OutputView.printFinalAmount(finalAmount);
  }

  async handlePrintEventBadge() {
    const receivedBadge = BadgeManager.assign(this.#order);
    OutputView.printEventBadge(this.#order.date, receivedBadge);
  }
}

export default EventPreviewController;
