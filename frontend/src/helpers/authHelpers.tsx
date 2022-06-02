import { api } from '../config/api';

export const authValidate = async () => {
  let response = await api.get('/auth');
  return response;
};
