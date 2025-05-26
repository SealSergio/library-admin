import { BookList, FetchBookListSchema, FetchBookListResponse } from "../types/Book";
import { validateResponse } from "./validateResponse";
import { useState, useEffect } from "react";

const URL = "../database/";

export async function fetchBookList(): Promise<FetchBookListResponse> {
    return await fetch(`${URL}books.json`)
        .then(validateResponse)
        .then((response) => response.json())
        .then((data) => FetchBookListSchema.parse(data));

//     try {

//     const response = await fetch(`${URL}books.json`);

//     if (!response.ok) {

//       const errorText = await response.text();

//       console.error('Ошибка сервера:', errorText);

//       throw new Error(`Ошибка HTTP: ${response.status}`);

//     }

//     const data = await response.json();

//     return data;

//   } catch (error) {

//     console.error('Ошибка при загрузке данных:', error);

//   }
}

interface IdleRequestState {
    status: "idle";
}

interface LoadRequestState {
    status: "pending";
}

interface SuccessRequestState {
    status: "success";
    data: BookList;
}

interface ErrorRequestState {
    status: "error";
    error: unknown;
}

type RequestState =
    | IdleRequestState
    | LoadRequestState
    | SuccessRequestState
    | ErrorRequestState;

export function usePostList() {
    const [state, setState] = useState<RequestState>({status: "idle"});


    useEffect(() => {
        if (state.status === "pending") {
            fetchBookList()
                .then((data) => {
                    setState({ status: "success", data: data.list });
                })
                .catch((error) => {
                    setState({ status: "error", error });
                });
        }
    }, [state]);

    useEffect(() => {
        setState({ status: "pending" });
    }, []);

    const refetch = () => {
        setState({ status: "pending" });
    };

    return {
        state,
        refetch,
    };
}