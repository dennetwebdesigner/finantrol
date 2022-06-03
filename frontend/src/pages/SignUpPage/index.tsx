import './SignUpPage.css';

import React, { MouseEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import buttonGoogle from './google-button.png';
import { SignupSubmit } from './SignupSubmit';

export const SignUpPage = () => {
  // get data typed by user
  //credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // profile
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // change input passweord visible or invisible
  const [typePassword, setTypePassword] = useState('password');

  // responsible for  navigation between pages
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <section className="signup-form-control">
        {/* TITLE PAGE */}
        <h1 className="signup-tittle">Finantrol</h1>
        {/* SUB-TITLE PAGE */}
        <h2 className="signup-subttitle">Seja Bem-Vindo ao seu controle financeiro!</h2>
        {/* FORM  */}
        <form className="signup-group-form-control">
          {/* FIRST Name */}
          <article className="signup-group-control-double">
            <div className="signup-group-form">
              <label htmlFor="first_name">Nome:</label>
              <input
                type="text"
                id="first_name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {/* FIRST Name */}
            {/* LastName */}
            <div className="signup-group-form">
              <label htmlFor="last_name">Sobrenome</label>
              <input
                type="text"
                id="last_name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {/* LastName */}
          </article>

          <article className="signup-group-control-double">
            {/* EMAIL */}
            <div className="signup-group-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              {/* EMAIL */}
            </div>
            {/* USERNAME */}
            <div className="signup-group-form">
              <label htmlFor="username">Nome de Usuário</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>{' '}
            {/* USERNAME */}
          </article>

          <article className="signup-group-control-double">
            {/* BIRTHDAY */}
            <div className="signup-group-form">
              <label htmlFor="birthday">Data Nascimento</label>
              <input
                type="date"
                id="birthday"
                onChange={(e) => setBirthday(e.target.value)}
              />{' '}
              {/* BIRTHDAY */}
            </div>
            {/* PASSWORD */}
            <div className="signup-group-form">
              <label htmlFor="password">Senha</label>
              <input
                type={typePassword}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* PASSWORD */}

              {/* SHOW-PASSWORD */}
              <div className="signup-show-password">
                <input
                  type="checkbox"
                  id="show-password"
                  onClick={() => {
                    if (typePassword === 'password') setTypePassword('text');
                    else setTypePassword('password');
                  }}
                />
                <label htmlFor="show-password">mostrar senha</label>
                {/* SHOW-PASSWORD */}
              </div>
            </div>
          </article>

          {/* BUTTON REGISTER */}
          <article className="signup-group-form">
            <button
              type="submit"
              onClick={(e: MouseEvent) => {
                SignupSubmit({
                  event: e,
                  username,
                  email,
                  birthday,
                  firstName,
                  lastName,
                  password,
                  navigate,
                });
              }}
            >
              Cadastrar
            </button>
          </article>

          {/* Login Page */}
          <Link to="/login" className="page-login-button">
            <p>Entrar</p>
          </Link>
        </form>
        {/* FORM  */}
        {/* Login WITH GOOGLE */}
        <div className="google-button">
          <img className="google-icon" src={buttonGoogle} alt="" />
          <p>Fazer login com Google</p>
        </div>{' '}
        {/* Login WITH GOOGLE */}
      </section>
    </div>
  );
};
