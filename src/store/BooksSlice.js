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
        addBook: (state, action) => {
            state.all = [...state.all, { 
                id: state.all.length + 1,
                coverUrl: action.payload.coverUrl,
                label: action.payload.label,
                author: action.payload.author,
                year: action.payload.year,
                isFavourite: false,
                description: action.payload.description,
                isbn: action.payload.isbn 
            }]

            state.value = state.all
        },

        deleteBook: (state, action) => {
            state.value = state.value.filter(book => book.id !== action.payload)
            state.all = state.all.filter(book => book.id !== action.payload)
        },

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

        resetFavourites: (state) => {
            state.value = state.value.map(book => 
                book.isFavourite ? { ...book, isFavourite: false } : book
            );
            state.all = state.all.map(book => 
                book.isFavourite ? { ...book, isFavourite: false } : book
            );
        },

        search: (state, action) => {
            state.value = state.all.filter(book => 
                book.label.toLowerCase().includes(action.payload) || book.author.toLowerCase().includes(action.payload)
            )
        },
    }
})

export const { toggleFavourite, filterByFavourites, filterByAuthors, filterByYears, resetFilters, search, resetFavourites, addBook, deleteBook} = BooksSlice.actions;
export default BooksSlice