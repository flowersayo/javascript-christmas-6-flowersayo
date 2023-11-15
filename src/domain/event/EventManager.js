import { EVENT } from '../../Constant.js';
import GiftEvent from './GiftEvent.js';

class EventManager {
  static EVENT = {
    GiftEvent: new GiftEvent(
      '증정 이벤트',
      new Date(`${EVENT.YEAR}-${EVENT.MONTH}-${EVENT.DAY_MIN}`),
      new Date(`${EVENT.YEAR}-${EVENT.MONTH}-${EVENT.DAY_MAX}`)
    ),
  };

  static applyGiftEvent(order) {
    return EventManager.EVENT.GiftEvent.apply(order);
  }
}

export default EventManager;
