import { createReducer } from '@reduxjs/toolkit';

import { addAllProduct } from '../actions/ProductActions';

interface iState {
  product: Object[];
}

const initialState: iState = {
  product: [],
};

const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(addAllProduct, (state, action) => {
    state.product = action.payload as unknown as Object[];
  });
});

export default productReducer;
