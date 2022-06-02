import '../modal-commom.css';

import React, { forwardRef } from 'react';

import { modal_close_animation } from '../modal-animation';

export const ModalMarketplace = forwardRef((props, ref) => {
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
        <h3 className="modal-commom-title">Registrar Loja/Serviço</h3>
        <div className="modal-commom-group">
          <h4>Perfil</h4>
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
        </div>
        <div className="modal-commom-group">
          <h4>Endereço</h4>
          <article>
            <label className="modal-commom-group-commom" htmlFor="street">
              Rua
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="street"
              id="street"
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="n">
              Número
            </label>
            <input className="modal-commom-group-commom" type="text" name="n" id="n" />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="destrict">
              Bairro
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="destrict"
              id="destrict"
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="city">
              Cidade
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="city"
              id="city"
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="state">
              Estado
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="state"
              id="state"
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="country">
              País
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="country"
              id="country"
            />
          </article>
        </div>
        <div className="modal-commom-group ">
          <h4>Contato</h4>
          <article>
            <label className="modal-commom-contact" htmlFor="contact-data">
              Número/Email/Insta etc...
            </label>
            <input
              className="modal-commom-contact"
              type="text"
              name="contact-data"
              id="contact-data"
            />
          </article>
          <article>
            <label className="modal-commom-contact" htmlFor="contact-type">
              Tipo do Contato: se é celular /whatsapp / email /instagram
            </label>
            <input
              className="modal-commom-contact"
              type="text"
              name="contact-type"
              id="contact-type"
            />
          </article>
        </div>
      </section>
    </main>
  );
});
