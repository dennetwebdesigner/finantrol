import '../modal-commom.css';

import React, { forwardRef } from 'react';

import { modal_close_animation } from '../modal-animation';

export const ModalSale = forwardRef((props, ref) => {
  return (
    <main className="modal-commom" ref={ref}>
      <section className="modal-commom-form">
        <p
          className="modal-commom-close"
          onClick={(e) => {
            modal_close_animation(e, ref);
          }}
        >
          X
        </p>
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
    </main>
  );
});
