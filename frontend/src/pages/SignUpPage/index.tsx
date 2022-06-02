import './SignUpPage.css';

import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import buttonGoogle from './google-button.png';

export const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [typePassword, setTypePassword] = useState('password');

  const handleSubmit = async () => {
    if (!username || !email || !birthday || !firstName || !lastName) {
      alert('Os campos devem ser preenchidos corretamente!');
    }

    const newUser = await axios.post('http://localhost:3333/users', {
      username,
      email,
      birthday,
      firstName,
      lastName,
      password,
      image: 'qualquer um',
    });

    console.log(newUser);
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form-control">
          {/* TITLE PAGE */}
          <h1 className="signup-tittle">Finantrol</h1>
          {/* SUB-TITLE PAGE */}
          <h2 className="signup-subttitle">Seja Bem-Vindo ao seu controle financeiro!</h2>
          {/* FORM  */}
          <div className="signup-group-form-control">
            {/* FIRST Name */}
            <div className="signup-group-control-double">
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
            </div>

            <div className="signup-group-control-double">
              {/* EMAIL */}
              <div className="signup-group-form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
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
            </div>

            <div className="signup-group-control-double">
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
            </div>

            {/* BUTTON REGISTER */}
            <div className="signup-group-form">
              <button onClick={handleSubmit}>Cadastrar</button>
            </div>

            {/* Login Page */}
            <Link to="/login" className="page-login-button">
              <p>Entrar</p>
            </Link>
          </div>
          {/* FORM  */}
          {/* Login WITH GOOGLE */}
          <div className="google-button">
            <img className="google-icon" src={buttonGoogle} alt="" />
            <p>Fazer login com Google</p>
          </div>{' '}
          {/* Login WITH GOOGLE */}
        </div>
      </div>
    </>
  );
};
