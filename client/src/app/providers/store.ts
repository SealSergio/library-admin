import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../../features/books/api/booksApi";
import { authorsApi } from "../../features/authors/api/authorsApi";
import { genresApi } from "../../features/books/api/genresApi";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [authorsApi.reducerPath]: authorsApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware, authorsApi.middleware, genresApi.middleware),
});
