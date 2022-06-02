import { Dispatch as ReactDispatch, MouseEvent, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';

import { api } from '../../config/api';

// interface that received the data type
interface iLoginSubmit {
  username: string;
  password: string;
  dispatch: Dispatch<AnyAction>;
  setUsername: ReactDispatch<SetStateAction<string>>;
  setPassword: ReactDispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  event: MouseEvent;
}

// shot action submit form for user login
export const LoginSubmit = async ({
  username,
  password,
  dispatch,
  setUsername,
  setPassword,
  navigate,
  event,
}: iLoginSubmit): Promise<void> => {
  // stop the refresh action
  event.preventDefault();

  // validate if username and password are empty
  if (!username || !password) alert('Os campos devem ser preenchidos corretamente!');

  // Query api to confirm credentials
  const user = await api.post('http://localhost:3333/auth', {
    username,
    password,
  });

  // validate if exist data and if exist the token
  if (user.data && user.data.token) {
    // set new data to state auth redux
    dispatch({
      type: 'addAuth',
      payload: {
        isAuth: true,
        token: user.data.token,
        userId: user.data.user,
      },
    });

    // clear fields username and password
    setUsername('');
    setPassword('');

    // change page login for dashBoard
    navigate('/');
  }
};
