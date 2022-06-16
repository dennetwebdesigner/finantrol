import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducer';
import bookReducer from './reducers/bookReducer';
import marketplaceReducer from './reducers/marketplaceReducer';

const store = configureStore({
  reducer: { books: bookReducer, auth: authReducer, marketplace: marketplaceReducer },
});

export default store;
