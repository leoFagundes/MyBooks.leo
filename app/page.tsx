"use client";

import { Title } from "@/components/Title.styled";
import styled from "styled-components";
import { dataBooks } from "@/components/dataBooks";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  h1 {
    margin-bottom: 5px;
  }

  p {
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
  width: 100%;
  margin: 30px 0;
  min-width: 320px;
  min-height: 400px;
  background-color: white;
  border-radius: 15px;
  color: black;
  padding: 20px;
`;

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    console.log(inputValue);
    // Aqui você pode realizar a lógica de filtro com base nos dois valores
  }, [inputValue]);

  // Extrai gêneros únicos dos dados dos livros
  const uniqueGenres = Array.from(
    new Set(dataBooks.map((livro) => livro.genero))
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
      <SectionContainer>
        {dataBooks.map((livro) => (
          <div key={livro.nome}>
            {livro.nome.toLowerCase().includes(inputValue.toLowerCase()) &&
            (selectedGenre === "" || selectedGenre === livro.genero) ? (
              <p>{livro.nome}</p>
            ) : (
              ""
            )}
          </div>
        ))}
      </SectionContainer>
    </HeaderContainer>
  );
}
