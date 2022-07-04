import '../modal-commom.css';

import React, {
  FormEvent,
  forwardRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import Select from 'react-select';

import MarketplaceController from '../../../../controllers/MarketplaceController';
import { modal_close_animation } from '../modal-animation';

export const ModalMarketplace = forwardRef(
  (props: any, ref: LegacyRef<HTMLDivElement>) => {
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
    const [optionsSelect, setOptionsSelect] = useState<any[]>();

    const createNewMarketplace = async (e: FormEvent) => {
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
      if (response.error) {
        alert(response.error.message);
        return;
      }
      const newmk = [...props.marketplaces, response].sort((a: any, b: any) =>
        a.name > b.name ? 1 : -1,
      );
      props.setMarkeplaces(newmk);
      alert('Nova Loja adicionada com Sucesso!');
      modal_close_animation(buttonClosed?.current);
      return;
    };

    const closedModal = () => {
      modal_close_animation(buttonClosed?.current);
    };

    useEffect(() => {
      const convertRef = ref as MutableRefObject<HTMLDivElement>;
      setButtonClosed(convertRef);
      setOptionsSelect([
        { value: 'instagram', label: 'instagram' },
        { value: 'facebook', label: 'facebook' },
        { value: 'email', label: 'email' },
      ]);
    }, []);

    return (
      <main className="modal-commom" ref={ref}>
        <form
          className="modal-commom-form modal-commom-form-lg"
          onSubmit={createNewMarketplace}
        >
          <button
            type="button"
            className="modal-commom-close"
            onClick={closedModal}
            onKeyDown={closedModal}
          >
            X
          </button>
          <h3 className="modal-commom-title">Registrar Loja/Serviço</h3>
          <div className="modal-commom-group commom-group-xd">
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
          <div className="modal-commom-group commom-group-xd">
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
          <div className="modal-commom-group commom-group-xd">
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

              <Select
                options={optionsSelect}
                onChange={(e) => setType(e.value)}
                className="select-control "
              />
            </article>
            <article>
              <button
                className="btn-send-new"
                style={{ width: '100%', margin: '10px auto' }}
                type="submit"
              >
                Cadastrar Loja
              </button>
            </article>
          </div>
        </form>
      </main>
    );
  },
);
