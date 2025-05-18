import { createSlice } from "@reduxjs/toolkit";
import books from "../books";

export const BooksSlice = createSlice({
    name: 'books',
    initialState: {
        value: books
    },
    reducers: {
        
    }
})

export default BooksSlice