import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.GET_DATE);

    return Number(input);
  },

  async readMenus() {
    const input = await Console.readLineAsync(MESSAGE.GET_MENU_TO_ORDER);

    const menus = input.split(',').map((menuSet) => {
      const [name, count] = menuSet.split('-');

      return { name, count: Number(count) };
    });

    return menus;
  },
};

export default InputView;
