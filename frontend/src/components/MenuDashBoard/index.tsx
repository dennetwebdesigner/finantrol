import './MenuDashboard.css';

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// import icons images
import {
  employees,
  marketplace,
  menu,
  product,
  profile,
  sale,
} from '../../assets/img/icons';
// import animatyions menu
import { menuAnimation } from './menuAnimation';

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
      <ul className="dashboard-list-menu">
        {/* ITEM MENU */}
        <li className="dashboard-menu-item">
          <div
            onClick={handleMenuButtonClick}
            onKeyDown={handleMenuButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className="icon-container-menu-item">
              <img src={sale} alt="" />
            </div>

            <Link to="/">Início</Link>
          </div>
        </li>

        {/* ITEM MENU */}
        <li className="dashboard-menu-item">
          <div
            onClick={handleMenuButtonClick}
            onKeyDown={handleMenuButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className="icon-container-menu-item">
              <img src={marketplace} alt="" />
            </div>
            <Link to="/marketplace">Loja/Serviço</Link>
          </div>
        </li>

        {/* ITEM MENU */}
        <li className="dashboard-menu-item">
          <div
            onClick={handleMenuButtonClick}
            onKeyDown={handleMenuButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className="icon-container-menu-item">
              <Link to="/products">
                <img src={product} alt="" />
              </Link>
            </div>
            <Link to="/products">Produtos</Link>
          </div>
        </li>

        {/* ITEM MENU */}
        <li className="dashboard-menu-item">
          <div
            onClick={handleMenuButtonClick}
            onKeyDown={handleMenuButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className="icon-container-menu-item">
              <img src={employees} alt="" />
            </div>
            Funcionarios
          </div>
        </li>

        {/* ITEM MENU */}
        <li className="dashboard-menu-item">
          {' '}
          <div
            onClick={handleMenuButtonClick}
            onKeyDown={handleMenuButtonClick}
            role="button"
            tabIndex={0}
          >
            <div className="icon-container-menu-item">
              <img src={profile} alt="" />
            </div>
            Perfil
          </div>
        </li>
      </ul>
    </div>
  );
};
