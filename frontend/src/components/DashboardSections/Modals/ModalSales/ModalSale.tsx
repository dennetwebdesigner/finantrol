import '../modal-commom.css';

import React, {
  forwardRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';

import { modal_close_animation } from '../modal-animation';

// eslint-disable-next-line react/display-name
export const ModalSale = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const [buttonClosed, setButtonClosed] =
    useState<MutableRefObject<HTMLDivElement> | null>(null);

  useEffect(() => {
    const convertRef = ref as MutableRefObject<HTMLDivElement>;
    setButtonClosed(convertRef);
  }, []);

  return (
    <div className="modal-commom" ref={ref}>
      <section className="modal-commom-form">
        <button
          className="modal-commom-close"
          onClick={() => {
            modal_close_animation(buttonClosed?.current);
          }}
          onKeyDown={() => modal_close_animation(buttonClosed?.current)}
        >
          X
        </button>
        <h3 className="modal-commom-title">Registrar Venda</h3>
        <div className="modal-commom-group">
          <article>
            <label className="modal-commom-group-commom" htmlFor="name">
              Nome do Client
            </label>

            <input className="modal-commom-group-commom" type="text" name="name" />
          </article>
        </div>
      </section>
    </div>
  );
});
