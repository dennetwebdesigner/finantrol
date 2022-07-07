import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { edit, see } from '../../../assets/img/icons';
import { iMarketplaceList } from '../../../lib/controllers/MarketplaceController';
import MarketplaceController from '../../../lib/controllers/MarketplaceController';
import { RowTh } from '../../table/Row';
import { modal_open_animation } from '../Modals/modal-animation';
// componente modal
import { ModalMarketplace } from '../Modals/ModalMarketplace/ModalMarketplace';
import { ButtonRemove } from '../Utils/ButtonRemove';
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
    <div className="dsh-container">
      {/* TOPO */}
      <header className="dsh-section-top">
        {/* TITULO */}
        <h1 className="dsh-section-title">Lojas/Serviços</h1>

        {/* CRIAR NOVA VENDA */}
        <button
          className="new-item-button"
          onClick={() => {
            modal_open_animation(modalEl);
          }}
        >
          <p>+</p>
          <p className="create-new-marketplace">Nova Loja</p>
        </button>
      </header>
      {/* FIM TOPO */}
      <main className="dsh-section-body">
        <RowTh
          Width="33%"
          Background="transparent"
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

        {marketplaces.map((marketplace, index) => (
          <RowTh
            key={index}
            Width="33%"
            Background="transparent"
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
                  <button className="btn-action-item" key={1}>
                    <img src={see} alt="" />
                  </button>,
                  <button className="btn-action-item" key={2}>
                    <img src={edit} alt="" />
                  </button>,
                  <ButtonRemove
                    key={3}
                    where="marketplaces"
                    identification={marketplace.id}
                    controller={MarketplaceController.destroy}
                  />,
                ],
              },
            ]}
          />
        ))}
      </main>
      <ModalMarketplace
        ref={modalEl}
        setMarkeplaces={setMarkeplaces}
        marketplaces={marketplaces}
      />
    </div>
  );
};
