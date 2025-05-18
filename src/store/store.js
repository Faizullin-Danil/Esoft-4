import { configureStore } from "@reduxjs/toolkit";
import { BooksSlice } from "./BooksSlice";

export const store = configureStore({
  reducer: {
    books: BooksSlice.reducer,
  },
});

export default store
