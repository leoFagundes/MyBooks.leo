import React from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  & {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  background-color: #eeeeee;
  background-image: url('images/paperBG2.jpg');
  background-size: cover;
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: inset 0 2px 20px rgba(0, 0, 0, 0.8);
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 11;
  white-space: pre-line;

  & {
    cursor: default;
  }

  /* Scrollbar vertical */
  &::-webkit-scrollbar {
    display: none;
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
        <strong>Sinopse</strong><br />
        <strong>{children}</strong>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
