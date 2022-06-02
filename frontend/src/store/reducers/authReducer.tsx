import { createReducer } from '@reduxjs/toolkit';
import { reactLocalStorage } from 'reactjs-localstorage';

import {
  destroyKeysAuth,
  getKeys,
  setKeys,
  validateKeys,
} from '../../helpers/KeysHelpers';
import { addAuth, destroyAuth } from '../actions/authActions';
let auth = null;

if (validateKeys()) {
  auth = getKeys();
} else {
  auth = {
    isAuth: false,
    token: null,
    userId: null,
  };
}

const initialState = {
  auth,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addAuth, (state, action) => {
      state.auth = action.payload;
      setKeys({
        token: action.payload.token,
        userId: action.payload.userId,
        isAuth: action.payload.isAuth,
      });
    })
    .addCase(destroyAuth, (state, action) => {
      state.auth = {
        token: null,
        userId: null,
        isAuth: null,
      };
    });
});

export default authReducer;
