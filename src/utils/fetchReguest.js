const URL = "../../database/"

export async function getAllBooks() {
    return await fetch(`${URL}books.json`).then((response) => response.json());
}