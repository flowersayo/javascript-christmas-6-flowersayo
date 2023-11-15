import { EVENT } from '../../Constant.js';
import Menu from '../Menu.js';

class GiftEvent extends Event {
  #gift = Menu.find(EVENT.GIFT_MENU);

  #canReceive(totalAmountBeforeDiscount) {
    return totalAmountBeforeDiscount >= EVENT.MIN_AMOUNT_FOR_GIFT_EVENT;
  }

  apply(order) {
    if (this.#canReceive(order.calcTotalAmountBeforeDiscount())) {
      return { gift: this.#gift, count: EVENT.GIFT_AMOUNT };
    }

    return null;
  }
}

export default GiftEvent;
