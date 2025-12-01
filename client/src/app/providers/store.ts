import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../../features/books/api/books";
import { authorsApi } from "../../features/authors/api/authors.js";
import { genresApi } from "../../features/books/api/genres.js";
import { cyclesApi } from "../../features/books/api/cycles";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [authorsApi.reducerPath]: authorsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        [cyclesApi.reducerPath]: cyclesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            booksApi.middleware,
            authorsApi.middleware,
            genresApi.middleware,
            cyclesApi.middleware
        ),
});
