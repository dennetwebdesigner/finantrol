import { AxiosResponse } from 'axios';
import { Dispatch as ReactDispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';

import { api } from '../../config/api';

interface iLoginSubmit {
  username: string;
  password: string;
  dispatch: Dispatch<AnyAction>;
  setUsername: ReactDispatch<SetStateAction<string>>;
  setPassword: ReactDispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
}

export const LoginSubmit = async ({
  username,
  password,
  dispatch,
  setUsername,
  setPassword,
  navigate,
}: iLoginSubmit): Promise<void> => {
  if (!username || !password) alert('Os campos devem ser preenchidos corretamente!');

  const user = await api.post('http://localhost:3333/auth', {
    username,
    password,
  });

  if (user.data && user.data.token) {
    console.log(user.data.token);
    dispatch({
      type: 'addAuth',
      payload: {
        isAuth: true,
        token: user.data.token,
        userId: user.data.user,
      },
    });

    setUsername('');
    setPassword('');
    navigate('/');
  }
};
