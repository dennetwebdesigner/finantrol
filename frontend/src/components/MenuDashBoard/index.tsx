import './MenuDashboard.css';

import { Link } from 'react-router-dom';

import {
  employees,
  marketplace,
  menu,
  product,
  profile,
  sale,
} from '../../assets/img/icons';
import { menu_closed, menuAnimation } from './menuAnimation';

export const MenuDashboard = () => {
  return (
    <>
      <div className="menu-dashboard" id="menu-dashboard">
        {/* TITULO */}
        <h1 className="dashboard-menu-tittle">Finantrol</h1>
        {/* SUBTITULO */}
        <h2 className="dashboard-menu-subtittle">Controle Financeiro</h2>
        {/*  MENU */}
        <div className="dashboard-menu-close" onClick={menuAnimation}>
          <img src={menu} alt="" />
        </div>

        {/* LISTA DE LINKS */}
        <ul className="dashboard-list-menu">
          {/* ITEM MENU */}
          <li className="dashboard-menu-item" onClick={menu_closed}>
            <div className="icon-container-menu-item">
              <img src={sale} alt="" />
            </div>

            <Link to="/">Início</Link>
          </li>

          {/* ITEM MENU */}
          <li className="dashboard-menu-item" onClick={menu_closed}>
            <div className="icon-container-menu-item">
              <img src={marketplace} alt="" />
            </div>
            <Link to="/marketplace">Loja/Serviço</Link>
          </li>

          {/* ITEM MENU */}
          <li className="dashboard-menu-item" onClick={menu_closed}>
            <div className="icon-container-menu-item">
              <Link to="/products">
                {' '}
                <img src={product} alt="" />
              </Link>
            </div>
            <Link to="/products">Produtos</Link>
          </li>

          {/* ITEM MENU */}
          <li className="dashboard-menu-item">
            <div className="icon-container-menu-item">
              <img src={employees} alt="" />
            </div>
            Funcionarios
          </li>

          {/* ITEM MENU */}
          <li className="dashboard-menu-item">
            <div className="icon-container-menu-item">
              <img src={profile} alt="" />
            </div>
            Perfil
          </li>
        </ul>
      </div>
    </>
  );
};
