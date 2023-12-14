"use client";

import { Title } from "@/components/styledComponents/Title.styled";
import { dataBooks } from "@/utils/data/dataBooks";
import { useEffect, useState } from "react";
import { FilterSection, HeaderContainer } from "./styled";
import InputFilter from "@/components/filterComponent/InputFilter";
import OutPutFilter from "@/components/filterComponent/OutPutFilter";
import BooksDisplay from "@/components/BooksDisplay/BooksDisplay";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const handleBookClick = (bookId: string) => {
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(bookId)) {
        return prevFlippedCards.filter((id) => id !== bookId);
      } else {
        return [...prevFlippedCards, bookId];
      }
    });
  };

  useEffect(() => {
    setFilterValue(
      `<strong>Contém:</strong> ${inputValue ? inputValue : "Empty Value"
      }</br><strong>Gênero:</strong> ${selectedGenre ? selectedGenre : "Empty Value"
      }`
    );
  }, [inputValue, selectedGenre]);

  // Extrai gêneros únicos dos dados dos livros
  const uniqueGenres = Array.from(
    new Set(dataBooks.flatMap((livro) => livro.genre))
  );

  return (
    <HeaderContainer>
      <Title fontSize="310%" fontFamily="'Permanent Marker', cursive;">
        Uma Breve Viagem Pelos Meus Livros
      </Title>
      <p>
        <i>
          Repositório feito para armazenar e organizar os livros que já li ao
          longo da minha vida
        </i>
      </p>
      <FilterSection>
        <div>
          <InputFilter
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            uniqueGenres={uniqueGenres} />
          <OutPutFilter filterValue={filterValue} />
        </div>
      </FilterSection>
      <BooksDisplay
        dataBooks={dataBooks}
        inputValue={inputValue}
        selectedGenre={selectedGenre}
        handleBookClick={handleBookClick}
        flippedCards={flippedCards} 
        setSelectedGenre={setSelectedGenre}
      />
    </HeaderContainer>
  );
}
