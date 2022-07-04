import '../css/commom-sections.css';
import './Sales.css';

import React, { useRef } from 'react';

import { money } from '../../../assets/img/icons';
import { modal_open_animation } from '../Modals/modal-animation';
import { ModalSale } from '../Modals/ModalSales/ModalSale';

export const Sales = () => {
  // modal ref for create new sales - incomplet
  const modalSaleEl = useRef<HTMLDivElement>(null);
  return (
    <div className="dsh-container">
      {/* TOPO */}
      <header className="sale-section-top">
        {/* TITULO */}
        <h1 className="dsh-section-title">Resumo</h1>

        {/* CRIAR NOVA VENDA */}
        <button
          className="new-item-button"
          onClick={() => {
            modal_open_animation(modalSaleEl);
          }}
        >
          <p>+</p>
          <p>Nova venda</p>
        </button>
      </header>
      {/* FIM TOPO */}

      {/* RESUMO DO BALANCETE */}
      <ul className="show-finance">
        {/* BALANCETE HOJE */}
        <li>
          <div className="show-finance-info">
            <h3>Hoje</h3>
            <p>R$20,00</p>
          </div>
          <div className="show-finance-img">
            <img src={money} alt="" />
          </div>
        </li>
        {/* FIM BALANCETE HOJE */}
        {/* BALANCETE DO MÊS */}
        <li>
          <div className="show-finance-info">
            <h3>Mensal</h3>
            <p>R$180,00</p>
          </div>
          <div className="show-finance-img">
            <img src={money} alt="" />
          </div>
        </li>
        {/* FIM BALANCETE DO MÊS */}
        {/* BALANCETE TOTAL */}
        <li>
          <div className="show-finance-info">
            <h3>Total</h3>
            <p>R$200,00</p>
          </div>
          <div className="show-finance-img">
            <img src={money} alt="" />
          </div>
        </li>
        {/* FIM BALANCETE TOTAL */}
      </ul>

      {/* HISTORICO VENDAS */}
      <main className="historic-sales">
        <div className="table-hs">
          <div className="table-hs-header">
            <div className="table-hs-row">
              <div className="table-hs-col table-hs-client">Cliente</div>
              <div className="table-hs-col table-hs-Date">Data</div>
              <div className="table-hs-col table-hs-code">Codigo</div>
              <div className="table-hs-col table-hs-value">Valor</div>
            </div>
          </div>
          <div className="table-hs-body">
            <div className="table-hs-row">
              <div className="table-hs-col table-hs-client">Time Flies XD</div>
              <div className="table-hs-col table-hs-Date">18:28:30 - 25/05/2022</div>
              <div className="table-hs-col table-hs-code">5C6B85</div>
              <div className="table-hs-col  table-hs-value">R$45,00</div>
            </div>

            <div className="table-hs-row">
              <div className="table-hs-col table-hs-client ">Bckai Night</div>
              <div className="table-hs-col table-hs-Date">18:24:30 - 25/05/2022</div>
              <div className="table-hs-col table-hs-code">5C6B84</div>
              <div className="table-hs-col  table-hs-value">R$100</div>
            </div>
          </div>
        </div>
      </main>
      {/*FIM HISTORICO VENDAS */}
      <ModalSale ref={modalSaleEl} />
    </div>
  );
};
