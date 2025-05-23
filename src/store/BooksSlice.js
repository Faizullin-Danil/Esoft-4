import { createSlice } from "@reduxjs/toolkit";
import books from "../books";

export const BooksSlice = createSlice({
    name: 'books',
    initialState: {
        all: books,
        value: books,
        showFavouritesOnly: false
    },
    reducers: {
        toggleFavourite: (state, action) => {
            state.value = state.value.map(book => {
                if (book.id === action.payload) {
                    return {...book, isFavourite: !book.isFavourite}
                }
                return book
            })

            state.all = state.all.map(book => {
                if (book.id === action.payload) {
                    return {...book, isFavourite: !book.isFavourite}
                }
                return book
            })
        },

        filterByFavourites: (state) => {
            if (!state.showFavouritesOnly) {
                state.value = state.all.filter(book => book.isFavourite === true)
            } else {
                state.value = state.all
            }
            state.showFavouritesOnly = !state.showFavouritesOnly
        },

        filterByAuthors: (state, action) => {
            const authors = action.payload
            state.value = state.all.filter(book => authors.includes(book.author))
        },

        filterByYears: (state, action) => {
            state.value = state.all.filter(book => book.year >= action.payload.valueFrom && book.year <= action.payload.valueTo)
        },

        resetFilters: (state) => {
            state.value = state.all
            state.showFavouritesOnly = false
        },
    }
})

export const { toggleFavourite, filterByFavourites, filterByAuthors, filterByYears, resetFilters } = BooksSlice.actions;
export default BooksSlice