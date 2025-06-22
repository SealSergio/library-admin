import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../../features/books/api/books.ts";
import { authorsApi } from "../../features/authors/api/authors.js";
import { genresApi } from "../../features/books/api/genres.js";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [authorsApi.reducerPath]: authorsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware, authorsApi.middleware, genresApi.middleware),
});
