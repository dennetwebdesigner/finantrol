import './MarketplaceDashBoard.css';

import React, { useRef } from 'react';

import { edit, plus, see, trash } from '../../../assets/img/icons';
import { RowTh } from '../../table/Row';
import { modal_open_animation } from '../Modals/modal-animation';
// Component Modal
import { ModalMarketplace } from '../Modals/ModalMarketplace/ModalMarketplace';

export const Marketplace = (): JSX.Element => {
  //  modal element create new marketplace
  const modalEl = useRef(null);

  return (
    <div className="marketplace-container">
      {/* TOPO */}
      <header className="marketplace-section-top">
        {/* TITULO */}
        <h1>Lojas/Serviços</h1>

        {/* CRIAR NOVA VENDA */}
        <button
          className="new-commerce"
          onClick={() => {
            modal_open_animation(modalEl);
          }}
        >
          <img src={plus} alt="" />
          <p className="create-new-marketplace">adicionar</p>
        </button>
      </header>
      {/* FIM TOPO */}
      <main className="marketplace-body">
        <RowTh
          Width="33%"
          Background="#fff"
          Padding="10px 5px"
          Margin=""
          Content={[
            {
              content: 'Loja',
            },
            {
              content: 'Endereço',
            },

            {
              content: 'ações',
            },
          ]}
        />

        <RowTh
          Width="33%"
          Background="#fff"
          Padding="20px 5px"
          Margin=""
          Content={[
            {
              content: "Esmalteria D' Luxo",
            },
            {
              content: 'Vicência - PE',
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
      <ModalMarketplace ref={modalEl} />
    </div>
  );
};
