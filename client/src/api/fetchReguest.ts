import { useEffect, useState } from "react";
import { BookList, FetchBookListResponse, FetchBookListSchema } from "../features/books/model/Book";
import { validateResponse } from "./validateResponse";

export async function fetchBookList(): Promise<FetchBookListResponse> {
    return await fetch("api/books")
        .then(validateResponse)
        .then((response) => response.json())
        .then((data) => FetchBookListSchema.parse(data));
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