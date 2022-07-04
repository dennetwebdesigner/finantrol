import { createReducer } from '@reduxjs/toolkit';

import { addAllMarketplace } from '../actions/MarketplaceActions';

interface iState {
  marketplace: Array<object>;
}

const initialState: iState = {
  marketplace: [],
};

const marketplaceReducer = createReducer(initialState, (builder) => {
  builder.addCase(addAllMarketplace, (state, action) => {
    state.marketplace = action.payload as unknown as Array<object>;
  });
});

export default marketplaceReducer;
