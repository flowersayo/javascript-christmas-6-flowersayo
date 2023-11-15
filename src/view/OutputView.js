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

  printGiftMenu({ gift, count }) {
    Console.print('\n<증정 메뉴>');
    Console.print(`${gift.name} ${count}`);
  },
  // ...
};

export default OutputView;
