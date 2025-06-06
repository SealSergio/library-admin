import { useEffect, useState } from "react";
import { GenreList } from "../../model/Genre";

interface GenresSelectProps {
    genres: GenreList,
    selectedGenres: string[],
    setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>
}

export const GenresSelect: React.FC<GenresSelectProps> = ({ genres, selectedGenres, setSelectedGenres}) => {
    const [listDisplay, setListDisplay] = useState("none");

    function handleClickOnCheckbox(dataItem: string) {
        if (selectedGenres.includes(dataItem)) {
            deleteOption(dataItem);
        } else {
            setSelectedGenres([...selectedGenres, dataItem]);
        }
    };

    function deleteOption(dataItem: string) {
        setSelectedGenres(selectedGenres.filter(item => item !== dataItem));
    }

    // function closeList(event) {
    //     if (event.currentTarget !== ) {
    //     }
    //     setListDisplay("none")
    // }

    useEffect(() => {
        localStorage.setItem("newBookData", JSON.stringify({genres: selectedGenres}));
    }, [selectedGenres]);

    return (
        <div className="genres-input-wrapper form__input">
            <ul className="genres-list">
                {selectedGenres &&
                    selectedGenres.map((item) => (
                        <li key={item} className="genres-item">
                            {item}
                            <svg onClick={() => deleteOption(item)} className="closeBtn" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </li>
                    ))
                }
                <input className="form__input book-form__input genres-input"type="text" placeholder="Жанры" onFocus={() => setListDisplay("block")}/>
            </ul>
            <ul className="optionList" style={{display: listDisplay}} /*onBlur={(event) => {closeList(event)}}*/>
                {genres.map((genre) => (
                    <label key={genre} className="filter-option optionItem" onChange={() => handleClickOnCheckbox(genre)}>
                        <input type="checkbox" name="genre" defaultChecked={selectedGenres.includes(genre)}/>
                        {genre}
                    </label>
                ))}
            </ul>
        </div>
    )
}