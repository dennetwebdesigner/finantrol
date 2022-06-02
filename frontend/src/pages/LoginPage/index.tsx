import './LoginPage.css';

import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import buttonGoogle from './google-button.png';
import { LoginSubmit } from './LoginSubmit';

export const LoginPage = (): JSX.Element => {
  // Nome de usuário e senha
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState('');
  // type input text or password
  const [typePassword, setTypePassword] = useState('password');

  // case auth allowed  move for DashBoard
  const navigate = useNavigate();

  // dispatach redux used for auth
  const dispatch = useDispatch();

  return (
    <main className="login-container">
      <section className="login-form-control">
        <h1 className="login-tittle">Finantrol</h1>
        <h2 className="login-subttitle">Seja Bem-Vindo ao seu controle financeiro!</h2>

        <form className="login-group-form-control">
          <article className="login-group-form">
            <label htmlFor="username">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </article>
          <article className="login-group-form">
            <label htmlFor="password">Senha</label>
            <input
              type={typePassword}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-show-password">
              <input
                type="checkbox"
                id="show-password"
                onClick={() => {
                  if (typePassword === 'password') setTypePassword('text');
                  else setTypePassword('password');
                }}
              />
              <label htmlFor="show-password">mostrar senha</label>
            </div>
          </article>
          <article className="login-group-form">
            <button
              type="submit"
              onClick={(e: MouseEvent) => {
                LoginSubmit({
                  event: e,
                  username,
                  password,
                  dispatch,
                  setUsername,
                  setPassword,
                  navigate,
                });
              }}
            >
              Entrar
            </button>
          </article>
          <Link to="/signup" className="page-signup-button">
            <p>cadastrar</p>
          </Link>
        </form>

        <div className="google-button">
          <img className="google-icon" src={buttonGoogle} alt="" />
          <p>Fazer login com Google</p>
        </div>
      </section>
    </main>
  );
};
