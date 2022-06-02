import './LoginPage.css';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import buttonGoogle from './google-button.png';
import { LoginSubmit } from './LoginSubmit';

export const LoginPage = (): JSX.Element => {
  // Nome de usuário e senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [typePassword, setTypePassword] = useState('password');
  const navigate = useNavigate();

  // const auth = useSelector((state: any) => state.auth.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className="login-container">
        <div className="login-form-control">
          <h1 className="login-tittle">Finantrol</h1>
          <h2 className="login-subttitle">Seja Bem-Vindo ao seu controle financeiro!</h2>

          <div className="login-group-form-control">
            <div className="login-group-form">
              <label htmlFor="username">Nome de Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-group-form">
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
            </div>
            <div className="login-group-form">
              <button
                onClick={(e) => {
                  LoginSubmit({
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
            </div>
            <Link to="/signup" className="page-signup-button">
              <p>cadastrar</p>
            </Link>
          </div>
          <div className="google-button">
            <img className="google-icon" src={buttonGoogle} alt="" />
            <p>Fazer login com Google</p>
          </div>
        </div>
      </div>
    </>
  );
};
