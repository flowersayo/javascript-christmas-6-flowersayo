import MenuItem from './MenuItem.js';
import { MENU } from '../Constant.js';

class Menu {
  static #MENU = {
    EPETIZER: MENU.EPETIZER.map(
      ({ name, price }) => new MenuItem(name, MENU.CATEGORIES.EPETIZER, price)
    ),

    MAIN: MENU.MAIN.map(
      ({ name, price }) => new MenuItem(name, MENU.CATEGORIES.MAIN, price)
    ),

    DESSERT: MENU.DESSERT.map(
      ({ name, price }) => new MenuItem(name, MENU.CATEGORIES.DESSERT, price)
    ),

    DRINK: MENU.DRINK.map(
      ({ name, price }) => new MenuItem(name, MENU.CATEGORIES.DRINK, price)
    ),
  };

  static has(searchName) {
    const menuNames = Object.values(Menu.#MENU)
      .flat()
      .map(({ name }) => name);

    return menuNames.includes(searchName);
  }

  static find(menuName) {
    const menuItems = Object.values(Menu.#MENU).flat();

    return menuItems.find(({ name }) => name === menuName);
  }

  static findCategory(menuName) {
    const menuItems = Object.values(Menu.#MENU).flat();

    return menuItems.find(({ name }) => name === menuName)?.category;
  }

  static countCategory(orderList) {
    const result = Object.values(MENU.CATEGORIES).reduce((acc, category) => {
      const totalCount = orderList.reduce((total, { menu, count }) => {
        if (this.find(menu).category === category) {
          return total + count;
        }
        return total;
      }, 0);

      acc[category] = totalCount;
      return acc;
    }, {});

    return result;
  }
}

export default Menu;
