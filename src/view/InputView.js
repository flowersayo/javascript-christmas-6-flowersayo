import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(`${MESSAGE.GET_DATE}\n`);

    return Number(input);
  },

  async readOrder() {
    const input = await Console.readLineAsync(`${MESSAGE.GET_MENU_TO_ORDER}\n`);

    const orderList = input.split(',').map((menuSet) => {
      const [menu, count] = menuSet.split('-');

      return { menu: menu.trim(), count: Number(count) };
    });
    console.log(orderList);
    return orderList;
  },
};

export default InputView;
