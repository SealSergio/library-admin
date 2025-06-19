import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useCreateSelect } from "../../../../shared/hooks/useCreateSelect";
import { GenreList } from "../../model/Genre";
import "./GenresSelect.scss";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface GenresSelectProps {
    genres: GenreList,
    selectedGenres: string[],
    setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>
}

export const GenresSelect: React.FC<GenresSelectProps> = ({ genres, selectedGenres, setSelectedGenres}) => {
    const [filteredOptions, setFilteredOptions] = useState(genres);
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    

    const {
        selectRef: genreSelectRef,
        openSelect: openGenre,
        isOpen: isGenreSelectOpen
    } = useCreateSelect<HTMLDivElement>();

    function handleClickOnCheckbox(dataItem: string) {
        if (selectedGenres.includes(dataItem)) {
            deleteOption(dataItem);
        } else {
            setSelectedGenres([...selectedGenres, dataItem]);
        }

        if (Boolean(inputValue)) {
            setInputValue("");
            setFilteredOptions(genres);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    function deleteOption(dataItem: string) {
        setSelectedGenres(selectedGenres.filter(item => item !== dataItem));
    }

    useEffect(() => {
        localStorage.setItem("newBookData", JSON.stringify({genres: selectedGenres}));
    }, [selectedGenres]);

    function handleOnInput(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    useEffect(() => {
        const value = inputValue.toLowerCase().trim();
        if (Boolean(value)) {
            const filtredGenres = genres.filter(genre => genre.toLowerCase().includes(value));
            setFilteredOptions(filtredGenres);
        } else {
            setFilteredOptions(genres);
        }
    }, [inputValue]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.stopPropagation();

        if (event.key === 'Enter') {
            if (filteredOptions.length === 1) {
                handleClickOnCheckbox(filteredOptions[0])
            }
        }

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    function handleDragEnd(result) {
        if (!result.destination) return;

        const newItems = Array.from(selectedGenres);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);

        setSelectedGenres(newItems);
    };

    return (
        <div className="genres-input-wrapper form__input" ref={genreSelectRef} onFocus={openGenre}>
            <ul className="genres-list">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable" direction="vertical">
                        {(provided) => (
                        <ul className="genres-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {selectedGenres.map((item, index) => (
                            <Draggable key={item} draggableId={item} index={index}>
                                {(provided) => (
                                <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="genres-item"
                                >
                                    {item}
                                    <svg
                                    onClick={() => deleteOption(item)}
                                    className="closeBtn"
                                    xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                    </svg>
                                </li>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                        )}
                    </Droppable>
                </DragDropContext>
                <input
                    className="form__input book-form__input genres-input"
                    type="text"
                    placeholder="Жанры"
                    value={inputValue}
                    ref={inputRef}
                    onInput={handleOnInput}
                    onKeyDown={(event) => {
                        event.stopPropagation();
                        handleKeyDown(event);
                    }}
                />
            </ul>
            {isGenreSelectOpen && (
                <div className="optionListWrapper">
                    <ul className="optionList">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((genre) => (
                            <label key={genre} className="filter-option optionItem">
                                <input
                                    type="checkbox"
                                    name="genre"
                                    checked={selectedGenres.includes(genre)}
                                    onChange={() => handleClickOnCheckbox(genre)}/>
                                {genre}
                            </label>
                        ))
                        ) : (
                            <span className="noGenres">Жанры не найдены</span>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}
