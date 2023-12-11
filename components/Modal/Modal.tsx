import React from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 11;

  & {
    cursor: default;
  }

  /* Scrollbar vertical */
  &::-webkit-scrollbar {
    width: 7px; /* Largura da barra de rolagem vertical */
  }
    
  /* Alça da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 1px; 
  }

  /* Barra de rolagem de fundo */
  &::-webkit-scrollbar-track {
    background-color: #cfcfcf;
  }

  /* Estilizar a alça quando o mouse passar por cima */
  &::-webkit-scrollbar-thumb:active {
    background-color: rgb(151, 151, 151);
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Modal = ({ children, onClose }: any) => {
  // função para evitar a propagação do clique
  const handleDownloadClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    // Impede a propagação do clique para evitar que chegue ao handleBookClick
    event.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleDownloadClick}>
        <CloseButton onClick={onClose}><IoCloseCircleOutline size={30} color={'#fff'} /></CloseButton>
        <strong>Sinopse</strong>
        <strong>{children}</strong>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
