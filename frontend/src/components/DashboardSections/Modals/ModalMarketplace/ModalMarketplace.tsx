import '../modal-commom.css';

import React, {
  FormEvent,
  forwardRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';

import MarketplaceController from '../../../../controllers/MarketplaceController';
import { modal_close_animation } from '../modal-animation';

export const ModalMarketplace = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [destrict, setDestrict] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [buttonClosed, setButtonClosed] =
    useState<MutableRefObject<HTMLDivElement> | null>(null);

  useEffect(() => {
    const convertRef = ref as MutableRefObject<HTMLDivElement>;
    setButtonClosed(convertRef);
  }, []);

  return (
    <main className="modal-commom" ref={ref}>
      <form
        className="modal-commom-form"
        onSubmit={async (e: FormEvent) => {
          e.preventDefault();
          const mkdata = {
            name,
            number,
            street,
            destrict,
            city,
            state,
            country,
            data,
            type,
          };
          const response = await MarketplaceController.store(mkdata);
          console.log(response.data);
        }}
      >
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
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            />
          </article>
          <article>
            <label className="modal-commom-group-commom" htmlFor="number">
              Número
            </label>
            <input
              className="modal-commom-group-commom"
              type="text"
              name="number"
              id="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
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
              onChange={(e) => setDestrict(e.target.value)}
              value={destrict}
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
              onChange={(e) => setCity(e.target.value)}
              value={city}
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
              onChange={(e) => setState(e.target.value)}
              value={state}
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
              onChange={(e) => setCountry(e.target.value)}
              value={country}
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
              onChange={(e) => setData(e.target.value)}
              value={data}
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
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </article>
          <article>
            <button type="submit">Cadastrar Loja</button>
          </article>
        </div>
      </form>
    </main>
  );
});
