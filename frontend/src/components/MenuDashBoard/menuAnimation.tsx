import { menu as menuIcon, menu_close } from '../../assets/img/icons';
let isActive = false;
let eTarget: any = null;
// eslint-disable-next-line import/no-anonymous-default-export
export const menuAnimation = (e) => {
  const menu = document.querySelector('#menu-dashboard');
  const close = document.querySelector('.dashboard-menu-close');
  eTarget = e;
  if (!isActive) {
    menu.style.transition = '.5s';
    menu.style.left = `0`;

    close.style.transform = 'scale(0)';
    close.style.right = '0';

    setTimeout(() => {
      close.style.transform = 'scale(100%)';
      e.target.src = menu_close;
    }, 300);

    isActive = true;
  } else if (isActive) {
    menu.style.transition = '.5s';
    menu.style.left = `-100%`;
    close.style.right = '-100%';
    close.style.transform = 'scale(0)';
    setTimeout(() => {
      close.style.transform = 'scale(100%)';
      e.target.src = menuIcon;
    }, 300);

    isActive = false;
  }
};

export const menu_closed = () => {
  if (window.screen.width <= 1360) {
    const menu = document.querySelector('#menu-dashboard');
    const close = document.querySelector('.dashboard-menu-close');
    menu.style.transition = '.5s';
    menu.style.left = '-100%';
    close.style.right = '-100%';
    close.style.transform = 'scale(0)';

    setTimeout(() => {
      close.style.transform = 'scale(100%)';
      eTarget.target.src = menuIcon;
    }, 300);

    isActive = false;
  }
};
