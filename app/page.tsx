"use client";

import { Title } from "@/components/Title.styled";
import styled from "styled-components";
import { dataBooks } from "@/components/dataBooks";
import { useEffect, useState } from "react";
import {
  HeaderContainer,
  InputContainer,
  SectionContainer,
  DivFilterContainer,
  BookContainer,
  Card,
  Front,
  Back,
} from "./styled";

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

  console.log(flippedCards);

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
            (selectedGenre.length === 0 ||
              livro.genre.includes(selectedGenre)) ? (
              <BookContainer onClick={() => handleBookClick(livro.name)}>
                <Card flipped={flippedCards.includes(livro.name)}>
                  <Front backGroundImage={`images/books/${livro.img}`} />
                  <Back>
                    <Title fontSize="150%" fontFamily="'Hedvig Letters Serif', serif;">
                      {livro.name}
                    </Title>
                    <div className="bookDesc">
                      <p dangerouslySetInnerHTML={{ __html: livro.desc }} />
                    </div>

                    <section className="bodyCard">
                      <div>
                        <span>Gênero:</span>
                        <ul>
                          {livro.genre.map((e, index) => (
                            <li key={index}>
                              <p>- {e}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span>Autor: </span>
                        <p>{livro.author}</p>
                      </div>
                      <div>
                        <span>Minha Nota:</span>
                        <p>{livro.rate}/10</p>
                      </div>
                    </section>

                    <a href={`pdf/books/${livro.pdf}`}>
                      <button>Download</button>
                    </a>
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
