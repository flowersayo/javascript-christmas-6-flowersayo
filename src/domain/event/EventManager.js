/* eslint-disable max-lines-per-function */
import { EVENT } from '../../Constant.js';
import D_DayDiscount from './D_DayDiscount.js';
import GiftEvent from './GiftEvent.js';
import WeekdayDiscount from './WeekdayDiscount.js';
import WeekendDiscount from './WeekendDiscounts.js';
import Menu from '../Menu.js';
import SpecialDiscount from './SpecialDiscount.js';

class EventManager {
  static EVENT_TYPE = {
    GiftEvent: 'GiftEvent',
    DiscountEvent: 'DiscountEvent',
  };

  static EVENT_CATEGORIS = {
    GIFT_EVENT: '증정 이벤트',
    CHRISTMAS_DAY_DISCOUNT: '크리스마스 디데이 할인',
    WEEKDAY_DISCOUNT: '평일 할인',
    WEEKEND_DISCOUNT: '주말 할인',
    SPECIAL_DISCOUNT: '특별 할인',
  };

  static EVENT = {
    GiftEvent: [
      new GiftEvent(
        EventManager.EVENT_CATEGORIS.GIFT_EVENT,
        new Date(EVENT.EVENT_START_DATE),
        new Date(EVENT.EVENT_END_DATE)
      ),
    ],
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

  static applyTypeEvents(order, eventType) {
    const events = Object.values(EventManager.EVENT[eventType]);

    const eventResult = events.reduce((acc, event) => {
      const result = event.apply(order);

      if (result !== null) {
        acc.push({
          event,
          result,
        });
      }

      return acc;
    }, []);

    return eventResult;
  }

  static applyAllEvents(order) {
    const events = [
      Object.values(EventManager.EVENT.DiscountEvent),
      EventManager.EVENT.GiftEvent,
    ].flat();

    const eventResult = events.reduce((acc, event) => {
      const result = event.apply(order);

      if (result !== null) {
        acc.push({
          event,
          result,
        });
      }

      return acc;
    }, []);
    return eventResult;
  }
}

export default EventManager;
