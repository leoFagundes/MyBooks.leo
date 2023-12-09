import {
  Back,
  BookContainer,
  Card,
  Front,
  SectionContainer,
} from "@/app/styled";
import { Title } from "../styledComponents/Title.styled";
import React, { useState } from "react";
import { BookData } from "../data/dataBooks";
import { TfiBackLeft } from "react-icons/tfi";
import Modal from "../Modal/Modal";
import { BiExpand } from "react-icons/bi";

interface BooksDisplayInterface {
  dataBooks: BookData[];
  inputValue: string;
  selectedGenre: string;
  handleBookClick: (bookId: string) => void;
  flippedCards: string[];
}

export default function BooksDisplay({
  dataBooks,
  inputValue,
  selectedGenre,
  handleBookClick,
  flippedCards,
}: BooksDisplayInterface) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [descToModal, setDescToModal] = useState('')

  const openModal = (e: string) => {
    setDescToModal(e)
    setModalOpen(true);
  };

  const sortedBooks = [...dataBooks].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // função para evitar a propagação do clique
  const handleDownloadClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    // Impede a propagação do clique para evitar que chegue ao handleBookClick
    event.stopPropagation();
  };

  return (
    <SectionContainer>
      {sortedBooks.map((livro) => (
        <div key={livro.name}>
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              {/* Conteúdo do modal, como a descrição do livro */}
              <p dangerouslySetInnerHTML={{ __html: descToModal }} />
            </Modal>
          )}
          {livro.name.toLowerCase().includes(inputValue.toLowerCase()) &&
            (selectedGenre.length === 0 ||
              livro.genre.includes(selectedGenre)) ? (
            <BookContainer onClick={() => handleBookClick(livro.name)}>
              <Card
                flipped={
                  flippedCards.includes(livro.name)
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)"
                }
              >
                <Front backgroundimage={`images/books/${livro.img}`} />
                <Back backgroundimage={`images/bg-card.png`}>
                  <div className="icon">
                    <TfiBackLeft size={20} color={"#fff"} />
                  </div>
                  <Title
                    fontSize="150%"
                    fontFamily="'Hedvig Letters Serif', serif;"
                  >
                    {livro.name}
                  </Title>
                  <span>Descrição:</span>
                  <div
                    className="bookDesc"
                    onClick={(e) => handleDownloadClick(e)}
                  >
                    <div onClick={() => openModal(livro.desc)}>
                      <BiExpand color={'#fff'} size={15} />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: livro.desc }} />
                  </div>

                  <section
                    className="bodyCard"
                    onClick={(e) => handleDownloadClick(e)}
                  >
                    <section className="leftBodySide" style={{ margin: "0" }}>
                      <span>Gênero:</span>
                      <ul className="info">
                        {livro.genre.map((e, index) => (
                          <li key={index}>
                            <p>- {e}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section className="rightBodySide">
                      <div className="info">
                        <span>Autor: </span>
                        <a
                          href={`https://www.google.com/search?q=${livro.author}`}
                          target="_blank"
                        >
                          <p>{livro.author}</p>
                        </a>
                      </div>
                      <div className="info">
                        <span>Minha Nota:</span>
                        <p>{livro.rate}/10</p>
                      </div>
                    </section>
                  </section>

                  <a
                    href={`pdf/books/${livro.pdf}`}
                    onClick={(e) => handleDownloadClick(e)}
                    target="_blank"
                  >
                    <button>{livro.pdf ? 'Download' : 'Indisponível'}</button>
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
  );
}
