import { EVENT } from '../../Constant.js';
import Menu from '../Menu.js';
import Event from './Event.js';

class GiftEvent extends Event {
  #gift = Menu.find(EVENT.GIFT_MENU);

  #canApply(order) {
    const totalAmountBeforeDiscount = order.calcTotalAmountBeforeDiscount();
    return (
      super.canApply(order) &&
      totalAmountBeforeDiscount >= EVENT.MIN_AMOUNT_FOR_GIFT_EVENT
    );
  }

  apply(order) {
    if (this.#canApply(order)) {
      return { gift: this.#gift, count: EVENT.GIFT_AMOUNT };
    }

    return null;
  }
}

export default GiftEvent;
