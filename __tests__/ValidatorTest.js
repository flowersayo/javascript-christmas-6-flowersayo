/* eslint-disable max-lines-per-function */

import Validator from '../src/Validator.js';
import { ERROR, EVENT, MENU } from '../src/Constant.js';

const INVALID_DATE_ERROR_MESSAGE = ERROR.PREFIX + ' ' + ERROR.INVALID_DATE;
const INVALID_ORDER_ERROR_MESSAGE = ERROR.PREFIX + ' ' + ERROR.INVALID_ORDER;

describe('사용자 입력값 유효성 검사 테스트', () => {
  test.each([0, 12.15, '0'])(
    '방문 날짜가 0 ~ 9 사이 수로 이루어져 있지 않으면 예외가 발생한다.',
    (date) => {
      expect(() => {
        Validator.validateDate(date);
      }).toThrow(INVALID_DATE_ERROR_MESSAGE);
    }
  );

  test.each([0, 32])(
    '방문 날짜가 1일 ~ 31일 사이가 아니라면 예외가 발생한다.',
    (date) => {
      expect(() => {
        Validator.validateDate(date);
      }).toThrow(INVALID_DATE_ERROR_MESSAGE);
    }
  );

  test.each([[[{ menu: '짜장면', count: 1 }]], [[{ menu: '생수', count: 1 }]]])(
    '메뉴판에 없는 메뉴를 입력하는 경우 예외가 발생한다.',
    (orderList) => {
      console.log(orderList);
      expect(() => {
        Validator.validateOrderList(orderList);
      }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
    }
  );

  test.each([
    [[{ menu: '타파스', count: 0 }]],
    [[{ menu: '바비큐립', count: -1 }]],
  ])('메뉴 수량이 1 이상이 아닌경우 예외가 발생한다.', (orderList) => {
    expect(() => {
      Validator.validateOrderList(orderList);
    }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
  });

  test('최대 주문 수량을 초과할 경우 예외가 발생한다.', () => {
    const orderList = [
      { menu: '타파스', count: EVENT.MAXIMUM_SERVE },
      { menu: '바비큐립', count: EVENT.MAXIMUM_SERVE },
    ];

    expect(() => {
      Validator.validateOrderList(orderList);
    }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
  });

  test('메뉴가 중복될 경우 예외가 발생한다.', () => {
    const orderList = [
      { menu: '타파스', count: 1 },
      { menu: '타파스', count: 2 },
    ];

    expect(() => {
      Validator.validateOrderList(orderList);
    }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
  });

  test('음료만 주문한 경우 예외가 발생한다.', () => {
    const orderList = [
      { menu: '제로콜라', count: 1 },
      { menu: '샴페인', count: 1 },
    ];

    expect(() => {
      Validator.validateOrderList(orderList);
    }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
  });

  test.each([
    [
      // input : "해산물파스타,레드와인,초코케이크" ( -가 생략되거나 수량이 Number로 변환될 수 있는 값이 아닌 경우 )
      [
        { menu: '해산물파스타', count: NaN },
        { menu: '레드와인', count: NaN },
        { menu: '초코케이크', count: NaN },
      ],
    ],
    [
      // input : "해산물파스타-,-1" (메뉴나 수량이 비어있는 경우)
      [
        { menu: '해산물파스타', count: 0 },
        { menu: '', count: 1 },
      ],
    ],
    [
      // input : "해산물파스타-1 레드와인-2 초코케이크-1" (, 가 생략된 경우)
      [{ menu: '해산물파스타', count: NaN }],
    ],
  ])(
    '주문 메뉴 입력값 형식이 유효하지 않으면 예외가 발생한다.',
    (orderList) => {
      expect(() => {
        Validator.validateOrderList(orderList);
      }).toThrow(INVALID_ORDER_ERROR_MESSAGE);
    }
  );
});
