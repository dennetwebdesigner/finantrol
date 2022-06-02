import { reactLocalStorage as localStorage } from 'reactjs-localstorage';
export const destroyKeysAuth = () => {
  if (localStorage.get('token')) localStorage.remove('token');
  if (localStorage.get('userId')) localStorage.remove('userId');
  if (localStorage.get('isAuth')) localStorage.remove('isAuth');
};

export const getKeys = () => {
  return {
    token: localStorage.get('token'),
    isAuth: localStorage.get('isAuth'),
    userId: localStorage.get('userId'),
  };
};

export const setKeys = (values = null) => {
  if (values.token) localStorage.set('token', values.token);
  if (values.isAuth) localStorage.set('isAuth', values.isAuth);
  if (values.userId) localStorage.set('userId', values.userId);

  return getKeys();
};

export const validateKeys = () => {
  if (
    localStorage.get('isAuth') &&
    localStorage.get('token') &&
    localStorage.get('userId')
  )
    return true;
  else return false;
};
