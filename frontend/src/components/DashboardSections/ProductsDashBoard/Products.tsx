import '../MarketplaceDashBoard/MarketplaceDashboard.css';

import React, { useRef } from 'react';

import { edit, plus, see, trash } from '../../../assets/img/icons';
import { RowTh } from '../../table/Row';
import { modal_open_animation } from '../Modals/modal-animation';
import { ModalProducts } from '../Modals/ModalProducts/ModalProduct';

export const Products = () => {
  // modal element ref for create new product
  const modalProductEl = useRef<HTMLDivElement>(null);
  return (
    <div className="marketplace-container">
      {/* TOPO */}
      <header className="marketplace-section-top">
        {/* TITULO */}
        <h1>Produtos</h1>

        {/* CRIAR NOVA VENDA */}
        <button
          className="new-commerce "
          onClick={() => {
            modal_open_animation(modalProductEl);
          }}
        >
          <img src={plus} alt="" />
          <p>adicionar</p>
        </button>
      </header>
      {/* FIM TOPO */}
      <main className="marketplace-body">
        <RowTh
          Margin=""
          Width="33%"
          Background="#fff"
          Padding="10px 5px"
          Content={[
            {
              content: 'Produto',
            },
            {
              content: 'Codigo',
            },

            {
              content: 'Ações',
            },
          ]}
        />

        <RowTh
          Margin=""
          Width="33%"
          Background="#fff"
          Padding="20px 5px"
          Content={[
            {
              content: 'Mãos',
            },
            {
              content: 'A31B573DF',
            },

            {
              content: [
                <button className="btn-mkt" key={1}>
                  <img src={see} alt="" />
                </button>,
                <button className="btn-mkt" key={2}>
                  <img src={edit} alt="" />
                </button>,
                <button className="btn-mkt" key={3}>
                  <img src={trash} alt="" />
                </button>,
              ],
            },
          ]}
        />
      </main>
      <ModalProducts ref={modalProductEl} />
    </div>
  );
};
