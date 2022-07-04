import '../modal-commom.css';

import React, {
  forwardRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import ProductsController from '../../../../controllers/ProductsController';
import { modal_close_animation } from '../modal-animation';

export const ModalProducts = forwardRef(
  (props: { marketplaceId: number | null }, ref: LegacyRef<HTMLDivElement>) => {
    // checa se o codigo será inserido manualmente ou auto
    const [randomCodeActive, setRandomCodeActive] = useState<boolean>(false);
    const [nameProduct, setNameProduct] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [newCode, setNewCode] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [stock, setStock] = useState<number>(0);
    const [tags, setTags] = useState<string>('');

    const [buttonClosed, setButtonClosed] =
      useState<MutableRefObject<HTMLDivElement> | null>(null);

    const handleSubmitProduct = async (e: any): Promise<any> => {
      e.preventDefault();

      const products = await ProductsController.store({
        marketplace_id: props.marketplaceId as unknown as number,
        name: nameProduct,
        code,
        value: price,
        tags,
        description,
        stock,
      });

      if (products.error) {
        alert(products.error.message);
        return;
      }

      if (products.response && products.response.status == 400) {
        alert(`CodeError: ${products.response.status}, Error: ${products.response.data}`);
        return;
      }
      alert(`Produto: ${products.data.name} criado com sucesso!`);

      setNameProduct('');
      setDescription('');
      setCode('');
      setNewCode('');
      setPrice(0);
      setStock(0);
      setTags('');
      setRandomCodeActive(false);
    };

    useEffect(() => {
      const convertRef = ref as MutableRefObject<HTMLDivElement>;
      setButtonClosed(convertRef);
    }, []);

    useEffect(() => {
      if (randomCodeActive) setCode(newCode);
      else setCode('');
    }, [randomCodeActive]);

    return (
      <main className="modal-commom" ref={ref}>
        <form className="modal-commom-form" onSubmit={handleSubmitProduct}>
          <button
            type="button"
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
              <label className="modal-commom-group-commom" htmlFor="name">
                Nome
              </label>
              <input
                className="modal-commom-group-commom"
                type="text"
                name="products"
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
              />
            </article>
            <article>
              <label className="modal-commom-group-commom" htmlFor="value">
                Descrição
              </label>
              <textarea
                className="modal-commom-group-commom"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
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
                checked={randomCodeActive}
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
              <input
                className="modal-commom-group-commom"
                type="number"
                name="value"
                onChange={(e) => setPrice(parseInt(e.target.value))}
                value={price}
              />
            </article>
            <article>
              <label className="modal-commom-group-commom" htmlFor="value">
                Número de Produtos
              </label>
              <input
                className="modal-commom-group-commom"
                type="number"
                name="stock"
                onChange={(e) => setStock(parseInt(e.target.value))}
                value={stock}
              />
            </article>
            <article>
              <label className="modal-commom-group-commom" htmlFor="tags">
                tags: separe por virgula
              </label>
              <input
                className="modal-commom-group-commom"
                type="text"
                name="tags"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </article>
          </div>
          <article>
            <button className="btn-send-new" type="submit">
              Cadastrar Loja
            </button>
          </article>
        </form>
      </main>
    );
  },
);
