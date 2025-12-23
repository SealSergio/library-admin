interface NewGenre {
    genreTitle: string | null;
}

export function getNewGenre() {
    const newGenreData = localStorage.getItem("newGenre");

    return newGenreData ? JSON.parse(newGenreData) : null;
}

export function setNewGenre(newGenre: NewGenre) {
    localStorage.setItem("newGenre", JSON.stringify(newGenre));
}
