export const EVENT = {
  MONTH: 12,
  DAY_MIN: 1,
  DAY_MAX: 31,
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
