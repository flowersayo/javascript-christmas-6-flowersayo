export const EVENT = {
  MONTH: 12,
  DAY_MIN: 1,
  DAY_MAX: 31,
};

export const MENU = {
  CATEGORIES: {
    EPETIZER: '애피타이저',
    MAIN: '메인',
    DESSERT: '디저트',
    DRINK: '음료',
  },

  EPETIZER: [
    {
      name: '양송이수프',
      price: 6_000,
    },
    {
      name: '타파스',
      price: 5_500,
    },
    {
      name: '시저샐러드',
      price: 8_000,
    },
  ],
  MAIN: [
    {
      name: '티본스테이크',
      price: 55_000,
    },
    {
      name: '바비큐립',
      price: 54_000,
    },
    {
      name: '해산물파스타',
      price: 35_000,
    },
    {
      name: '크리스마스파스타',
      price: 25_000,
    },
  ],
  DESSERT: [
    {
      name: '초코케이크',
      price: 15_000,
    },
    {
      name: '아이스크림',
      price: 5_000,
    },
  ],
  DRINK: [
    {
      name: '제로콜라',
      price: 3_000,
    },
    {
      name: '레드와인',
      price: 60_000,
    },
    {
      name: '샴페인',
      price: 25_000,
    },
  ],
};

export const MESSAGE = {
  GET_DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  GET_MENU_TO_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
};

export const ERROR = {
  PREFIX: '[ERROR]',
  INVALID_DATE: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  DATE_NOT_A_NUMBER: '날짜는 0 ~ 9 사이 숫자로 이루어져야 합니다.',
  DATE_NOT_IN_RANGE: `날짜는 ${EVENT.DAY_MIN}일 ~ ${EVENT.DAY_MAX} 사이여야 합니다.`,
};
