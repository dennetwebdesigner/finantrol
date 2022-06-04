import { MutableRefObject } from 'react';

import { menu as menuIcon, menu_close } from '../../assets/img/icons';
let isActive: boolean = false;

interface iMenuOptions {
  transition: string;
  left: string;
}

interface iImagMenu {
  element: HTMLImageElement;
  icon: any;
}

// responsible for changing the menu animation
const changeCSSAnimMenu = (
  htmlElement: HTMLDivElement,
  buttonclose: HTMLButtonElement,
  imgMenu: iImagMenu,
  menuOptions: iMenuOptions,
  closPosRight: string,
  bool: boolean,
): void => {
  // set new style left and transition for the menu
  htmlElement.style.transition = menuOptions.transition;
  htmlElement.style.left = menuOptions.left;

  // set new style right and transition for the close button
  buttonclose.style.transform = `scale(0)`;
  buttonclose.style.right = closPosRight;

  // animate  image menu
  setTimeout(() => {
    // set new style transform button close and src image
    buttonclose.style.transform = `scale(100%)`;
    imgMenu.element.src = imgMenu.icon;
  }, 300);

  // return value boolean to the isActive
  isActive = bool;
};

export const menuAnimation = (
  menu: HTMLDivElement | any,
  close: HTMLButtonElement | any,
  imgMenu: any,
): void => {
  // check if the isAction is true or false
  const imgOptions = !isActive
    ? { element: imgMenu, icon: menu_close }
    : { element: imgMenu, icon: menuIcon };
  const menuOptions = !isActive
    ? { transition: '0.5s', left: '0' }
    : { transition: '0.5s', left: '-100%' };
  const closPosRight = !isActive ? '0' : '-100%';
  const active = !isActive ? true : false;

  if (window.screen.width < 1360) {
    // active animation menu
    changeCSSAnimMenu(menu, close, imgOptions, menuOptions, closPosRight, active);
  }
};

// function temporary
export const setMenuAnimation = (
  menuRefEl: MutableRefObject<HTMLDivElement | any>,
  closeMenuRefEl: MutableRefObject<HTMLButtonElement | any>,
) => {
  const menu = menuRefEl.current as HTMLDivElement;
  const close = closeMenuRefEl.current as HTMLButtonElement;

  const imgMenuEl = closeMenuRefEl.current.children[0] as HTMLImageElement;

  if (!isActive) {
    menuAnimation(menu, close, imgMenuEl);
  } else if (isActive) {
    menuAnimation(menu, close, imgMenuEl);
  }
};
