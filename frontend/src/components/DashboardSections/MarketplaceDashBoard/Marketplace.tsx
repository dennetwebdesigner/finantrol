import './MarketplaceDashBoard.css';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { edit, plus, see, trash } from '../../../assets/img/icons';
import { iMarketplaceList } from '../../../controllers/MarketplaceController';
import { RowTh } from '../../table/Row';
import { modal_open_animation } from '../Modals/modal-animation';
// componente modal
import { ModalMarketplace } from '../Modals/ModalMarketplace/ModalMarketplace';

export const Marketplace = (): JSX.Element => {
  //  refenrecia elemento modal criação de lojas
  const modalEl = useRef(null);
  // recebe a lista de lojas
  const [marketplaces, setMarkeplaces] = useState<Array<iMarketplaceList | any>>([]);
  // caputra a lista  de lojas global
  const marketplaceState = useSelector((state: any) => state.marketplace.marketplace);

  useEffect(() => {
    setMarkeplaces(marketplaceState);
  }, [marketplaceState]);

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

        {marketplaces.map((marketplace) => (
          <RowTh
            key={marketplace.id}
            Width="33%"
            Background="#fff"
            Padding="20px 5px"
            Margin=""
            Content={[
              {
                content: marketplace.name,
              },
              {
                content: `${marketplace.addresses.city} - ${marketplace.addresses.state}`,
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
        ))}
      </main>
      <ModalMarketplace ref={modalEl} />
    </div>
  );
};
