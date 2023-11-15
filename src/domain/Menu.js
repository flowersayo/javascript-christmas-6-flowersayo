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
}

export default Menu;
