import { InputContainer } from '@/app/styled'
import React from 'react'

interface FilterIntarface {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    selectedGenre: string;
    setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
    uniqueGenres: string[];
}

export default function InputFilter({ inputValue, setInputValue, selectedGenre, setSelectedGenre, uniqueGenres }: FilterIntarface) {
    // Ordena os gêneros alfabeticamente
    const sortedGenres = [...uniqueGenres].sort((a, b) => a.localeCompare(b));
    
    return (
        <InputContainer>
            <div>
                <label htmlFor="text">Nome do livro</label>
                <input
                    id="text"
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="genre">Gênero</label>
                <select
                    id="genre"
                    value={selectedGenre}
                    onChange={(event) => setSelectedGenre(event.target.value)}
                >
                    <option value="">Todos</option>
                    {sortedGenres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
        </InputContainer>
    )
}
