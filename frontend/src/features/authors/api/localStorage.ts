interface NewAuthor {
    id: string | null;
    surname: string | null;
    name: string | null;
    secondName: string | null;
    fullname: string | null;
    abbreviatedName: string | null;
}

export function getNewAuthor() {
    const newAuthorData = localStorage.getItem("newAuthor");

    return newAuthorData ? JSON.parse(newAuthorData) : null;
}

export function setNewAuthor(newAuthor: NewAuthor) {
    localStorage.setItem("newAuthor", JSON.stringify(newAuthor));
}
