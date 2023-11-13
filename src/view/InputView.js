import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.GET_DATE);

    return Number(input);
  },
};

export default InputView;
