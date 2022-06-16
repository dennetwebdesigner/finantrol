import { AxiosError } from 'axios';
import { MouseEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { api } from '../../config/api';

interface iSignupSubmit {
  username: string;
  email: string;
  birthday: string;
  firstName: string;
  lastName: string;
  password: string;
  navigate: NavigateFunction;
  event: MouseEvent;
}

export const SignupSubmit = async ({
  username,
  email,
  birthday,
  firstName,
  lastName,
  password,
  navigate,
  event,
}: iSignupSubmit): Promise<void> => {
  event.preventDefault();
  if (!username || !email || !birthday || !firstName || !lastName) {
    alert('Os campos devem ser preenchidos corretamente!');
    return;
  }
  try {
    const image: string = 'qualquer um';
    // eslint-disable-next-line no-unused-vars
    const user = await api.post('http://localhost:3333/users', {
      username,
      email,
      birthday,
      firstName,
      lastName,
      password,
      image,
    });
    alert('sua conta foi criada agora faça o login! ');
    navigate('/login');
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      const { status, data } = err.response;
      alert(data);
    }
  }
};
