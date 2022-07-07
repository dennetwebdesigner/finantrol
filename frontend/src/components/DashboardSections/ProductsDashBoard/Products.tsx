import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import { edit, see, trash } from '../../../assets/img/icons';
import ProductsController from '../../../lib/controllers/ProductsController';
import { RowTh } from '../../table/Row';
import { modal_open_animation } from '../Modals/modal-animation';
import { ModalProducts } from '../Modals/ModalProducts/ModalProduct';

export const Products = () => {
  // modal element ref for create new product
  const modalProductEl = useRef<HTMLDivElement>(null);
  const [marketplaceId, setMarketplaceId] = useState<number | null>(30);
  const [optionsSelectNarketplaces, setOptionsSelectNarketplaces] = useState<any[]>([]);

  const marketplaceState = useSelector((state: any) => state.marketplace.marketplace);

  useEffect(() => {
    const options = marketplaceState.map((item: any) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

    setOptionsSelectNarketplaces(options);
  }, [marketplaceState]);
  return (
    <div className="dsh-container">
      {/* TOPO */}
      <header className="dsh-section-top">
        {/* TITULO */}
        <h1 className="dsh-section-title">Produtos</h1>

        {/* CRIAR NOVA VENDA */}
        <button
          className="new-item-button"
          onClick={() => {
            modal_open_animation(modalProductEl);
          }}
        >
          <p>+</p>
          <p>Novo Produto</p>
        </button>
      </header>
      {/* FIM TOPO */}
      <main className="dsh-section-body">
        <section>
          <label className="modal-commom-group-commom" htmlFor="a">
            Selecione a loja
          </label>
          <Select
            className="modal-commom-group-commom select-control"
            options={optionsSelectNarketplaces}
            onChange={(e: any) => {
              setMarketplaceId(e.value);
              ProductsController.show(marketplaceId as number);
            }}
          />
        </section>
        <RowTh
          Margin=""
          Width="33%"
          Background="transparent"
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
          Background="transparent"
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
                <button className="btn-action-item" key={1}>
                  <img src={see} alt="" />
                </button>,
                <button className="btn-action-item" key={2}>
                  <img src={edit} alt="" />
                </button>,
                <button className="btn-action-item" key={3}>
                  <img src={trash} alt="" />
                </button>,
              ],
            },
          ]}
        />
      </main>
      <ModalProducts ref={modalProductEl} marketplaceId={marketplaceId} />
    </div>
  );
};
