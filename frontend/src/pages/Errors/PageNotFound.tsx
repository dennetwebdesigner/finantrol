import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <>
    <h1 style={{ margin: '200px auto 20px', textAlign: 'center' }}>
      Pagina Não encontrada
    </h1>
    <Link
      to="/"
      style={{
        margin: '0 auto',
        display: 'block',
        textAlign: 'center',
      }}
    >
      <button
        style={{
          padding: '14px 50px',
          background: 'transparent',
          border: '2px solid black',
          fontSize: '20px',
          fontWeight: 'bolder',
          cursor: 'pointer',
        }}
      >
        Voltar para o Painel de Controle
      </button>
    </Link>
  </>
);
