import { Console } from '@woowacourse/mission-utils';

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

  printGiftMenu(giftInfo) {
    Console.print('\n<증정 메뉴>');

    if (giftInfo == null) {
      Console.print('없음');
      return;
    }

    const { gift, count } = giftInfo;
    Console.print(`${gift.name} ${count}개`);
  },

  printEventResult(eventResult) {
    Console.print('\n<혜택 내역>');

    if (eventResult.length === 0) {
      Console.print('없음');
      return;
    }

    eventResult.forEach(({ event, benefit }) => {
      Console.print(`${event.name}: -${benefit.toLocaleString()}원`);
    });
  },
  printBenefitAmount(amount) {
    Console.print('\n<총 혜택 금액');
    Console.print(`-${amount.toLocaleString()}원`);
  },
  printAmountToPay(amount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(amount);
  },
  // ...
};

export default OutputView;
