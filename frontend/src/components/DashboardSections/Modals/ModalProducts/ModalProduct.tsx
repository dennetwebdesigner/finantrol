import '../modal-commom.css';

import React, {
  forwardRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

import { modal_close_animation } from '../modal-animation';

export const ModalProducts = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  // checa se o codigo será inserido manualmente ou auto
  const [randomCodeActive, setRandomCodeActive] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [newCode, setNewCode] = useState<string>('');
  const [buttonClosed, setButtonClosed] =
    useState<MutableRefObject<HTMLDivElement> | null>(null);
  const [optionsSelectNarketplaces, setOptionsSelectNarketplaces] = useState<any[]>([]);

  const marketplaceState = useSelector((state: any) => state.marketplace.marketplace);

  useEffect(() => {
    const convertRef = ref as MutableRefObject<HTMLDivElement>;
    setButtonClosed(convertRef);
  }, []);

  useEffect(() => {
    if (randomCodeActive) setCode(newCode);
    else setCode('');
  }, [randomCodeActive]);

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
    <main className="modal-commom" ref={ref}>
      <section className="modal-commom-form">
        <button
          className="modal-commom-close"
          onClick={() => {
            modal_close_animation(buttonClosed?.current);
          }}
          onKeyDown={() => {
            modal_close_animation(buttonClosed?.current);
          }}
        >
          X
        </button>
        <h3 className="modal-commom-title">Registrar Produtos</h3>
        <div className="modal-commom-group">
          <article>
            <label htmlFor="a">Selecione a loja</label>
            <Select
              className="modal-commom-group-commom"
              options={optionsSelectNarketplaces}
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="name">
              Nome
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="name"
              id="name"
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="code">
              Código
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="code"
              id="code"
              disabled={randomCodeActive}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="random-code">
              Gerar Código
            </label>
            <input
              className="modal-commom-group-commom"
              type="checkbox"
              name="random-code"
              id="random-code"
              onChange={() => {
                setRandomCodeActive(!randomCodeActive);
                if (newCode === '') setNewCode(uuidv4());
              }}
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="value">
              Valor
            </label>
            <input className="modal-commom-group-commom" type="text" name="value" />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="tags">
              tags: separe por virgula
            </label>
            <input className="modal-commom-group-commom" type="text" name="tags" />
          </article>
        </div>
      </section>
    </main>
  );
});
