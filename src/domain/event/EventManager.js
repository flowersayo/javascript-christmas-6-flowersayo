/* eslint-disable max-lines-per-function */
import { EVENT } from '../../Constant.js';
import D_DayDiscount from './D_DayDiscount.js';
import GiftEvent from './GiftEvent.js';
import WeekdayDiscount from './WeekdayDiscount.js';
import WeekendDiscount from './WeekendDiscounts.js';
import Menu from '../Menu.js';
import SpecialDiscount from './SpecialDiscount.js';

class EventManager {
  static EVENT_CATEGORIS = {
    GIFT_EVENT: '증정 이벤트',
    CHRISTMAS_DAY_DISCOUNT: '크리스마스 디데이 할인',
    WEEKDAY_DISCOUNT: '평일 할인',
    WEEKEND_DISCOUNT: '주말 할인',
    SPECIAL_DISCOUNT: '특별 할인',
  };

  static EVENT = {
    GiftEvent: new GiftEvent(
      EventManager.EVENT_CATEGORIS.GIFT_EVENT,
      new Date(EVENT.EVENT_START_DATE),
      new Date(EVENT.EVENT_END_DATE)
    ),
    DiscountEvent: [
      new D_DayDiscount(
        EventManager.EVENT_CATEGORIS.CHRISTMAS_DAY_DISCOUNT,
        new Date(EVENT.EVENT_START_DATE),
        new Date(EVENT.CHRISTMAS_DATE)
      ),
      new WeekdayDiscount(
        EventManager.EVENT_CATEGORIS.WEEKDAY_DISCOUNT,
        new Date(EVENT.EVENT_START_DATE),
        new Date(EVENT.EVENT_END_DATE)
      ),
      new WeekendDiscount(
        EventManager.EVENT_CATEGORIS.WEEKEND_DISCOUNT,
        new Date(EVENT.EVENT_START_DATE),
        new Date(EVENT.EVENT_END_DATE)
      ),
      new SpecialDiscount(
        EventManager.EVENT_CATEGORIS.SPECIAL_DISCOUNT,
        new Date(EVENT.EVENT_START_DATE),
        new Date(EVENT.EVENT_END_DATE)
      ),
    ],
  };

  static applyGiftEvent(order) {
    return EventManager.EVENT.GiftEvent.apply(order);
  }

  static getTotalDiscountAmount(order) {
    const discountEvents = Object.values(EventManager.EVENT.DiscountEvent);

    const totalDiscountAmount = discountEvents.reduce((acc, discountEvent) => {
      const discountAmount = discountEvent.apply(order);
      if (discountAmount === null) {
        // 할인을 적용받지 못한 경우
        return acc;
      }

      return acc + discountAmount;
    }, 0);
    return totalDiscountAmount;
  }

  static getBenefitAmount(order) {
    const eventBenefits = this.getEventBenefits(order);

    const benefitAmount = eventBenefits.reduce(
      (acc, { benefit }) => acc + benefit,
      0
    );

    return benefitAmount;
  }

  static getEventBenefits(order) {
    const events = [
      Object.values(EventManager.EVENT.DiscountEvent),
      EventManager.EVENT.GiftEvent,
    ].flat();

    const eventBenefitResult = events.reduce((acc, event) => {
      const result = event.apply(order);

      if (result !== null) {
        if (event instanceof GiftEvent) {
          acc.push({
            event,
            benefit: Menu.find(result.gift.name).price * result.count,
          });
        } else {
          acc.push({
            event,
            benefit: result,
          });
        }
      }

      return acc;
    }, []);
    return eventBenefitResult;
  }
}

export default EventManager;
