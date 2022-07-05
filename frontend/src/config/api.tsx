import axios from 'axios';

import { getKeys, validateKeys } from '../lib/helpers/KeysHelpers';

const baseURL = 'http://localhost:3333';
let token = validateKeys() && getKeys().token != '' ? getKeys().token : null;

const Authorization = !token ? '' : `bearer ${token}`;
const timeout = 2000;
const headers = {
  Accept: 'application/json',
  Authorization,
};

export const api = axios.create({
  baseURL,
  timeout,
  headers,
});
