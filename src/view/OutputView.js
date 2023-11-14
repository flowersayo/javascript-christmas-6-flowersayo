import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPreviewTitle() {},
  printError(message) {
    Console.print(message);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...

    //     '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  },
  // ...
};

export default OutputView;
