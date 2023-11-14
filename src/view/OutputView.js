import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPreviewTitle(month, date) {
    Console.print(
      `${month}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
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

  // ...
};

export default OutputView;
