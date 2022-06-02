import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducer';
import bookReducer from './reducers/bookReducer';

const store = configureStore({
  reducer: { books: bookReducer, auth: authReducer },
});

export default store;
