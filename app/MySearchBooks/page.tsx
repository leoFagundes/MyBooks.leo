
'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Back, BookContainer, Card, Front, SectionContainer } from '../styled';
import { TfiBackLeft } from "react-icons/tfi";
import { BiExpand } from "react-icons/bi";
import { Title } from '@/components/styledComponents/Title.styled';
import Modal from '@/components/Modal/Modal';

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

  const searchBook = (evt: { key: string }) => {
    if (evt.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDccH6F_6QcnNbJlNbKzEEpiS4b60WO-a4' + '&maxResults=40')
        .then(res => {
          setData(res.data.items)
          console.log(res.data.items)
        })
        .catch(err => console.log(err))
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
      <div>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={searchBook}
          placeholder='Escreva o nome do seu livro'
        />
        <button>Teste</button>
      </div>
      <SectionContainer>
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
                <BookContainer onClick={() => handleBookClick(item.id)} scale='0.8' margin='-40px -30px;'>
                  <Card
                    flipped={
                      flippedCards.includes(item.id)
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)"
                    }
                    scale='0.7'
                  >
                    <Front backgroundimage={volumeInfo.imageLinks.smallThumbnail} />
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
                            {authors?.map((author: string) => (
                              <a
                                href={`https://www.google.com/search?q=${author}`}
                                target="_blank"
                              >
                                <p>{author}</p>
                              </a>
                            ))}

                          </div>
                          <div className="info">
                            <span>Nota Geral:</span>
                            <p>{volumeInfo.averageRating ? volumeInfo.averageRating : '-'}/5</p>
                          </div>
                        </section>
                      </section>

                      <a
                        href={volumeInfo.previewLink}
                        onClick={(e) => handleDownloadClick(e)}
                        target="_blank"
                      >
                        <button>{volumeInfo.previewLink ? 'Download' : 'Indisponível'}</button>
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


/*
<div>
{booksData.map((item: any) => (
  <React.Fragment key={item.id}>
    {item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail && (
      <>
        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
        TESTE<br />
      </>
    )}
  </React.Fragment>
))}
</div>
*/ 