import { useQuery } from "@tanstack/react-query";
import { fetchBookList } from "../../../../api/fetchReguest";
import { Loader } from "../../../../shared/components/Loader/Loader";
import { BookListView } from "./BookListView";
import { queryClient } from "../../../../api/queryClient";

export const FetchBookListView = () => {
    const postListQuery = useQuery(
        {
            queryFn: () => fetchBookList(),
            queryKey: ["books"],
            retry: false,
        }, queryClient);

    switch (postListQuery.status) {
        case "pending":
            return <Loader />;
        
        case "success":
            return <BookListView bookList={postListQuery.data.list}/>;

        case "error":
            console.log("Ошибка запроса: ", postListQuery.error)
            return (
                <div>
                    <span>Произошла ошибка</span>

                    <button onClick={() => postListQuery.refetch}>Повторить запрос</button>
                </div>
            );
    }
}