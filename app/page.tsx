"use client";

import { Title } from "@/components/styledComponents/Title.styled";
import { dataBooks } from "@/utils/data/dataBooks";
import { useEffect, useState } from "react";
import { FilterSection, HeaderContainer } from "./styled";
import InputFilter from "@/components/filterComponent/InputFilter";
import OutPutFilter from "@/components/filterComponent/OutPutFilter";
import BooksDisplay from "@/components/BooksDisplay/BooksDisplay";
import ScrollUp from "@/components/ScrollUp/ScrollUp";

type FilterValueType = {
  name: string;
  genre: string;
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filterValue, setFilterValue] = useState<FilterValueType>({
    name: "",
    genre: "",
  });
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
    setFilterValue({
      name: inputValue,
      genre: selectedGenre,
    });
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
          Bem-vindo à minha biblioteca, onde eu guardo os livros que um dia já
          li <br />
          <span style={{ fontSize: "14px" }}>
            (pelo menos os que eu não esqueci)
          </span>
          .
        </i>
      </p>
      <FilterSection>
        <div>
          <InputFilter
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            uniqueGenres={uniqueGenres}
          />
          <div
            onClick={() => {
              setInputValue("");
              setSelectedGenre("");
            }}
          >
            <OutPutFilter filterValue={filterValue} />
          </div>
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
      <ScrollUp />
    </HeaderContainer>
  );
}
