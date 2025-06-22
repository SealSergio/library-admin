interface NewBook {
    id: string | null;
    title: string | null;
    // authorId: string | null;
    description: string | null;
    genres: string[] | null;
    quantity: number;
    cycle: {
        isPartOfCycle: boolean,
        cycleName?: string,
        newCycleData?: string[],
    } | null
}

export function getNewBook() {
    const newBookData = localStorage.getItem("newBook");

    return newBookData ? JSON.parse(newBookData) : null;
}

export function setNewBook(newBook: NewBook) {
    localStorage.setItem("newBook", JSON.stringify(newBook));
}
