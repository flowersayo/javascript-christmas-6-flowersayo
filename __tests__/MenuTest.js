/* eslint-disable max-lines-per-function */

import { MENU } from '../src/Constant.js';
import Menu from '../src/domain/Menu.js';

describe('메뉴판 도메인 로직 테스트', () => {
  test('메뉴판에서 특정 메뉴가 존재하는지 판단할 수 있다.', () => {
    const allDessertMenuNames = Object.values(MENU.DESSERT).map(
      ({ name }) => name
    );
    const allEpetizerMenuNames = Object.values(MENU.EPETIZER).map(
      ({ name }) => name
    );
    const allMainMenuNames = Object.values(MENU.MAIN).map(({ name }) => name);
    const allDrinkMenuNames = Object.values(MENU.DRINK).map(({ name }) => name);

    const possibleMenuNames = [
      allDessertMenuNames,
      allEpetizerMenuNames,
      allMainMenuNames,
      allDrinkMenuNames,
    ].flat();

    possibleMenuNames.forEach((name) => {
      expect(Menu.has(name)).toBeTruthy();
    });

    const impossibleMenuNames = ['짜장면', '', '스프라이트'];

    impossibleMenuNames.forEach((name) => {
      expect(Menu.has(name)).toBeFalsy();
    });
  });

  test.each([
    ['샴페인', MENU.CATEGORIES.DRINK],
    ['바비큐립', MENU.CATEGORIES.MAIN],
    ['초코케이크', MENU.CATEGORIES.DESSERT],
    ['양송이수프', MENU.CATEGORIES.EPETIZER],
    ['짜장면', undefined],
  ])('특정 메뉴의 카테고리를 찾을 수 있다.', ({ menu, category }) => {
    expect(Menu.findCategory(menu)).toBe(category);
  });
});
