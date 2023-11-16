import GiftEvent from './event/GiftEvent.js';
import Menu from './Menu.js';

class Calculator {
  static getBenefitAmount(eventResult) {
    const benefitAmount = eventResult.reduce((acc, { event, result }) => {
      let benefit;
      if (event instanceof GiftEvent) {
        benefit = Menu.find(result.gift.name).price * result.count;
      } else {
        benefit = result.discount;
      }

      return acc + benefit;
    }, 0);

    return benefitAmount;
  }
}

export default Calculator;
