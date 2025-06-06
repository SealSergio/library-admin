import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../../features/books/api/booksApi";
import { authorsApi } from "../../features/authors/api/authorsApi";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [authorsApi.reducerPath]: authorsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware, authorsApi.middleware),
});
