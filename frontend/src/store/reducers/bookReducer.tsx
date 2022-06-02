import { createReducer } from '@reduxjs/toolkit';

import { addBook, deleteBook } from '../actions/bookActions';

const initialState = {
  books: [{ id: 1, name: 'As Conicas de Narnia' }],
};

const bookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    });
});

export default bookReducer;
