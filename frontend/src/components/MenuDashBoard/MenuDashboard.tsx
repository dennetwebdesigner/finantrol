import './MenuDashboard.css';

import React, { useRef } from 'react';

// import icons images
import {
  // employees,
  marketplace,
  menu,
  product,
  // profile,
  sale,
} from '../../assets/img/icons';
// import animatyions menu
import { menuAnimation } from './menuAnimation';
import { MenuDashboardLink } from './MenuDashboardLink';

export const MenuDashboard = (): JSX.Element => {
  // ref of element menu jsx
  const menuDashBoardEl = useRef(null);
  // ref of element button close or open menu jsx
  const closeButtonMenuDashBoardEl = useRef(null);
  // ref of element image icon menu jsx
  const imageMenu = useRef(null);

  const handleMenuButtonClick = () => {
    menuAnimation(
      menuDashBoardEl.current,
      closeButtonMenuDashBoardEl.current,
      imageMenu.current,
    );
  };

  return (
    <div className="menu-dashboard" ref={menuDashBoardEl}>
      {/* TITULO */}
      <h1 className="dashboard-menu-tittle">Finantrol</h1>
      {/* SUBTITULO */}
      <h2 className="dashboard-menu-subtittle">Controle Financeiro</h2>
      {/*  MENU */}
      <button
        className="dashboard-menu-close"
        ref={closeButtonMenuDashBoardEl}
        onClick={handleMenuButtonClick}
        onKeyDown={handleMenuButtonClick}
      >
        <img src={menu} alt="" ref={imageMenu} />
      </button>

      {/* LISTA DE LINKS */}
      <nav>
        {/* ITEM MENU */}
        <MenuDashboardLink
          value={{ name: 'Vendas', link: '' }}
          icon={sale}
          refs={{
            menu: menuDashBoardEl,
            closeButton: closeButtonMenuDashBoardEl,
            MenuIcon: imageMenu,
          }}
        />

        {/* ITEM MENU */}
        <MenuDashboardLink
          value={{ name: 'Lojas', link: 'marketplaces' }}
          icon={marketplace}
          refs={{
            menu: menuDashBoardEl,
            closeButton: closeButtonMenuDashBoardEl,
            MenuIcon: imageMenu,
          }}
        />

        {/* ITEM MENU */}
        <MenuDashboardLink
          value={{ name: 'Produtos', link: 'products' }}
          icon={product}
          refs={{
            menu: menuDashBoardEl,
            closeButton: closeButtonMenuDashBoardEl,
            MenuIcon: imageMenu,
          }}
        />
      </nav>
    </div>
  );
};
