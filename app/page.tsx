"use client";

import { Title } from "@/components/Title.styled";
import styled from "styled-components";
import { dataBooks } from "@/components/dataBooks";
import { useEffect, useState } from "react";

interface BookProps {
  backGroundImage: string;
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  h1 {
    margin-bottom: 5px;
  }

  & > p {
    margin: 0;
    width: 80%;
    font-size: 20px;
    text-align: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  row-gap: 10px;
  column-gap: 50px;
  min-width: 320px;
  margin-top: 20px;

  input {
    background-color: #edf2f7;
    border: 1px solid #a0aec0;
    color: #2d3748;
    font-size: 0.875rem; /* 14px */
    border-radius: 0.375rem; /* 6px */
    width: 100%;
    padding: 0.625rem; /* 10px */

    &::placeholder {
      color: #cbd5e0;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #4299e1;
    }
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem; /* 14px */
    font-weight: 500;
  }

  select {
    background-color: #edf2f7;
    border: 1px solid #a0aec0;
    color: #2d3748;
    font-size: 0.875rem; /* 14px */
    border-radius: 0.375rem; /* 6px */
    width: 100%;
    padding: 0.625rem; /* 10px */

    &::placeholder {
      color: #cbd5e0;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: #4299e1;
    }
  }
`;

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;
  min-width: 320px;
  min-height: 400px;
  background-color: #f8f9fa;
  border-radius: 15px;
  color: black;
  padding: 20px;
`;

const DivFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  background-color: #55555529;
  border-radius: 20px;
  box-shadow: 0 0 10px #afafaf36;
  padding: 5px;
  margin: 5px;

  h1 {
    margin: 0;
    align-self: center;
  }

  p {
    align-self: flex-start;
    font-size: 18px;
  }
`;

const BookContainer = styled.div`
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const Card = styled.div<{ flipped: boolean }>`
  width: 300px;
  height: 450px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  margin: 10px 20px;
`;

const Front = styled.div<BookProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${(props) => props.backGroundImage});
  background-size: cover;
  border-radius: 5px;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #000000;
  border-radius: 5px;
`;

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

  console.log(flippedCards)

  useEffect(() => {
    console.log(inputValue, selectedGenre);

    setFilterValue(
      `<strong>Contém:</strong> ${
        inputValue ? inputValue : "Empty Value"
      }</br><strong>Gênero:</strong> ${
        selectedGenre ? selectedGenre : "Empty Value"
      }`
    );
  }, [inputValue, selectedGenre]);

  // Extrai gêneros únicos dos dados dos livros
  const uniqueGenres = Array.from(
    new Set(dataBooks.flatMap((livro) => livro.genre))
  );

  return (
    <HeaderContainer>
      <Title fontSize="350%" fontFamily="'Permanent Marker', cursive;">
        Uma Breve Viagem Pelos Meus Livros
      </Title>
      <p>
        <i>
          Repositório feito para armazenar e organizar os livros que já li ao
          longo da minha vida
        </i>
      </p>
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
            {uniqueGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </InputContainer>
      <DivFilterContainer>
        <Title
          fontFamily="'Hedvig Letters Serif', serif;"
          fontSize="150%"
          color="#fff"
        >
          Filtros
        </Title>
        <p dangerouslySetInnerHTML={{ __html: filterValue }} />
      </DivFilterContainer>
      <SectionContainer>
      {dataBooks.map((livro) => (
        <div key={livro.name}>
          {livro.name.toLowerCase().includes(inputValue.toLowerCase()) &&
          (selectedGenre.length === 0 || livro.genre.includes(selectedGenre)) ? (
            <BookContainer onClick={() => handleBookClick(livro.name)}>
              <Card flipped={flippedCards.includes(livro.name)}>
                <Front backGroundImage="images/books/verity.png" />
                <Back>
                  teste
                </Back>
              </Card>
            </BookContainer>
          ) : (
            ""
          )}
        </div>
      ))}
    </SectionContainer>
    </HeaderContainer>
  );
}
