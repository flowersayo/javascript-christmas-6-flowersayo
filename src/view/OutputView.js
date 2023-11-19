import { Console } from '@woowacourse/mission-utils';
import GiftEvent from '../domain/event/GiftEvent.js';
import Menu from '../domain/Menu.js';

const OutputView = {
  printPreviewTitle(date) {
    Console.print(
      `${
        date.getMonth() + 1
      }월 ${date.getDate()}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printError(message) {
    Console.print(message);
  },

  printMenu(orderList) {
    Console.print('\n<주문 메뉴>');

    orderList.forEach(({ menu, count }) => {
      Console.print(`${menu} ${count}개`);
    });
  },

  printAmountBeforeDiscount(totalAmount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${totalAmount.toLocaleString()}원`);
  },

  printGiftMenu(giftEventResults) {
    Console.print('\n<증정 메뉴>');

    if (giftEventResults.length === 0) {
      Console.print('없음');
      return;
    }

    giftEventResults.forEach(({ event, result }) => {
      const { gift, count } = result;
      Console.print(`${gift.name} ${count}개`);
    });
  },

  printEventBenefitResult(eventResult) {
    Console.print('\n<혜택 내역>');
    if (eventResult.length === 0) {
      Console.print('없음');
      return;
    }
    eventResult.forEach(({ event, result }) => {
      if (event instanceof GiftEvent) {
        Console.print(
          `${event.name}: -${(
            Menu.find(result.gift.name).price * result.count
          ).toLocaleString()}원`
        );
      } else {
        Console.print(`${event.name}: -${result.discount.toLocaleString()}원`);
      }
    });
  },

  printBenefitAmount(amount) {
    Console.print('\n<총혜택 금액>');
    Console.print(`${amount === 0 ? '' : '-'}${amount.toLocaleString()}원`);
  },

  printFinalAmount(amount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${amount.toLocaleString()}원`);
  },

  printEventBadge(date, badge) {
    Console.print('\n<12월 이벤트 배지>');

    if (badge === undefined) {
      Console.print('없음');
      return;
    }

    Console.print(badge.name);
  },

  // ...
};

export default OutputView;
