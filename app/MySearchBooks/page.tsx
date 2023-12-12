
'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Back, BookContainer, Card, Front, InputContainer, SectionContainer } from '../styled';
import { TfiBackLeft } from "react-icons/tfi";
import { BiExpand } from "react-icons/bi";
import { Title } from '@/components/styledComponents/Title.styled';
import Modal from '@/components/Modal/Modal';
import { FaSearch } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

export default function MySearchBooks() {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [search, setSearch] = useState('')
  const [booksData, setData] = useState([])
  const [isModalOpen, setModalOpen] = useState(false);
  const [descToModal, setDescToModal] = useState('')

  const openModal = (e: string) => {
    setDescToModal(e)
    setModalOpen(true);
  };

  const searchBook = () => {
    if (search != '') {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDccH6F_6QcnNbJlNbKzEEpiS4b60WO-a4' + '&maxResults=40')
        .then(res => {
          setData(res.data.items)
        })
        .catch(err => console.log(err))
    } else {
      setData([]);
    }
  }

  const handleBookClick = (bookId: string) => {
    setFlippedCards((prevFlippedCards) => {
      if (prevFlippedCards.includes(bookId)) {
        return prevFlippedCards.filter((id) => id !== bookId);
      } else {
        return [...prevFlippedCards, bookId];
      }
    });
  };

  // função para evitar a propagação do clique
  const handleDownloadClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    // Impede a propagação do clique para evitar que chegue ao handleBookClick
    event.stopPropagation();
  };

  return (
    <section>
      <InputContainer>
        <div>
          <label htmlFor="text">Pesquise um livro</label>
          <div className='inputSearchPage'>
            <input
              id="text"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchBook();
                }
              }}
            />
            <GiArchiveResearch size={40} onClick={() => searchBook()} />
          </div>
        </div>
      </InputContainer>
      <SectionContainer width='95vw' padding='5px'>
        {booksData.length > 0 ? booksData.map((item: any) => {
          const volumeInfo = item.volumeInfo
          const categories = volumeInfo.categories
          const authors = volumeInfo.authors
          return (
            <React.Fragment key={item.id}>
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  {/* Conteúdo do modal, como a descrição do livro */}
                  {descToModal}
                </Modal>
              )}
              {(volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail) ? (
                <BookContainer onClick={() => handleBookClick(item.id)} >
                  <Card
                    flipped={
                      flippedCards.includes(item.id)
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)"
                    }
                  >
                    <Front
                      backgroundimage={volumeInfo.imageLinks.smallThumbnail}
                      imageRendering={'pixelated'}
                    />
                    <Back backgroundimage={`images/bg-card.png`}>
                      <div className="icon">
                        <TfiBackLeft size={20} color={"#fff"} />
                      </div>
                      <Title
                        fontSize="110%"
                        fontFamily="'Hedvig Letters Serif', serif;"
                      >
                        {volumeInfo.title}
                      </Title>
                      <span>Descrição:</span>
                      <div
                        className="bookDesc"
                        onClick={(e) => handleDownloadClick(e)}
                      >
                        <div onClick={() => openModal(volumeInfo.description)}>
                          <BiExpand color={'#fff'} size={15} />
                        </div>
                        {volumeInfo.description}
                      </div>

                      <section
                        className="bodyCard"
                        onClick={(e) => handleDownloadClick(e)}
                      >
                        <section className="leftBodySide" style={{ margin: "0" }}>
                          <span>Gênero:</span>
                          <ul className="info">
                            {categories?.map((e: string, index: React.Key) => (
                              <li key={index}>
                                <p>- {e}</p>
                              </li>
                            ))}
                          </ul>
                        </section>
                        <section className="rightBodySide">
                          <div className="info">
                            <span>Autor: </span>
                            {authors?.map((author: string, index: React.Key) => (
                              <a
                                href={`https://www.google.com/search?q=${author}`}
                                target="_blank"
                                key={index}
                              >
                                <p>{author}</p>
                              </a>
                            ))}

                          </div>
                          <div className="info">
                            <span>Nota Geral:</span>
                            <p>{volumeInfo.averageRating ? volumeInfo.averageRating : '-'} / 5</p>
                          </div>
                        </section>
                      </section>

                      <a
                        href={volumeInfo.previewLink}
                        onClick={(e) => handleDownloadClick(e)}
                        target="_blank"
                      >
                        <button>{volumeInfo.previewLink ? 'PDF online' : 'Indisponível'}</button>
                      </a>
                    </Back>
                  </Card>
                </BookContainer>
              ) : ''}
            </React.Fragment>
          )
        }) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '400px',
          }}>
            <h4>Faça uma pesquisa para encontrar o livro desejado</h4>
          </div>
        )}

      </SectionContainer>
    </section>
  )
}
