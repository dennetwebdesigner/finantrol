import { createReducer } from '@reduxjs/toolkit';

import { getKeys, setKeys, validateKeys } from '../../lib/helpers/KeysHelpers';
import { addAuth, destroyAuth } from '../actions/authActions';
let auth: any = {};

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
      setKeys(action.payload);
    })
    .addCase(destroyAuth, (state, action) => {
      state.auth = {
        token: action.payload,
        userId: action.payload,
        isAuth: false,
      };
    });
});

export default authReducer;
