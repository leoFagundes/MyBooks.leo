import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  h1 {
    margin-bottom: 5px;

    svg {
      position: relative;
      top: 7px;
    }
  }

  & > p {
    margin: 0;
    width: 80%;
    font-size: 20px;
    text-align: center;
  }

  @media screen and (max-width: 675px) {
    h1 {
      font-size: 180%;

      svg {
        margin-bottom: -10px;
        scale: 0.7;
      }
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 95%;

      h1 {

      svg {
        display: none;
      }
    }
  }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    row-gap: 10px;
    column-gap: 50px;
    margin-top: 20px;

    .inputSearchPage {
      display: flex;
      align-items: center;
      gap: 10px;

      svg:hover {
        cursor: pointer;
      }

      svg:active {
          scale: 0.9;
      }

    }
  
    input {
      background-color: #edf2f7;
      border: 1px solid #a0aec0;
      color: #2d3748;
      font-size: 0.875rem; /* 14px */
      border-radius: 0.375rem; /* 6px */
      width: 190px;
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
      width: 210px;
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

export const SectionContainer = styled.section<{
  width?: string
  padding?: string
}>`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: ${(props) => props.width || '85vw'};
    margin: 30px 0;
    min-height: 400px;
    background-color: #f8f9fa;
    border-radius: 15px;
    color: black;
    padding: ${(props) => props.padding || '20px'};
    box-shadow: inset 0 0 60px #00000073;

    @media screen and (max-width: 420px) {
      width: 95%;
    }
  `;

export const DivFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 320px;
    background-color: #2c2c2ca2;
    border-radius: 20px;
    box-shadow: 0 0 10px #afafaf71;
    padding: 5px;
    margin: 15px 0 0 0;
  
    h1 {
      margin: 0;
      align-self: center;
    }
  
    p {
      align-self: flex-start;
      font-size: 18px;
      padding-left: 15px;
    }

    @media screen and (max-width: 420px) {
      display: none;
    }
  `;

export const BookContainer = styled.div<{
  scale?: string
  margin?: string
}>`
    position: relative;
    perspective: 1000px;
    cursor: pointer;
    transform: scale(${(props) => props.scale || '1'});
    margin: ${(props) => props.margin || '0'}
  `;

export const Card = styled.div<{
  flipped: string
  width?: string
  height?: string
  scale?: string
}>`
    width: ${(props) => (props.width ? props.width : '300px')};
    height: ${(props) => (props.height ? props.height : '450px')};
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    /* box-shadow: 5px 5px 15px 0px #888; */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: ${(props) => (props.flipped)};
    margin: 10px 20px;
    border-radius: 10px;
  `;

export const Front = styled.div<{
  backgroundimage: string
  imageRendering?: string;
}>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url(${(props) => props.backgroundimage});
    background-size: cover;
    border-radius: 5px;
    image-rendering: ${(props) => props.imageRendering || 'auto'};
    background-position: center center;
  `;

export const Back = styled.div<{
  backgroundimage: string
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #1b1b1b;
    background-image: url(${(props) => props.backgroundimage});
    background-size: cover;
    background-position: 50% 0;
    border-radius: 5px;
    color: #fff;
    box-shadow: inset 0 0 10px #cacaca79;

    & > h1:hover {
      cursor: pointer;
    }

    p {
        margin: 0;
    }

    span {
        font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #fff;
      justify-self: flex-end;

      p {
        &:hover {
        scale: 0.95;
      }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      margin: 10px 0;
      max-width: 120px;
    }

    span {
          font-size: 14px;
          text-align: left;
          width: 90%;
        }

    &:hover {
      cursor: default;
    }

    & {
      .icon {
        position: absolute;
        top: 420px;
        left: 10px;

        &:hover {
          cursor: pointer;
        }
      }

      .bookDesc {
        width: 90%;
        height: 105px;
        word-wrap: break-word;
        overflow-y: scroll;
        padding: 5px;
        background-color: #1b1b1b52;
        box-shadow: inset 0 0 10px #75757528;
        border-radius: 10px;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          background-color: #0000002f;
          backdrop-filter: blur(5px);
          padding: 5px;
          margin-left: -5px;
          transform: translateY(85px);
          border-radius: 0 10px 0 0;

          &:hover {
            cursor: pointer;
          }

        }

        p {
          font-size: 14px;
        }

        /* Scrollbar vertical */
        &::-webkit-scrollbar {
          width: 7px; /* Largura da barra de rolagem vertical */
        }
          
        /* Alça da barra de rolagem */
        &::-webkit-scrollbar-thumb {
          background-color: #cfcfcf; /* Cor da alça da barra de rolagem */
          border-radius: 1px; /* Arredondar as bordas da alça da barra de rolagem */
        }

        /* Barra de rolagem de fundo */
        &::-webkit-scrollbar-track {
          background-color: #333333; /* Cor de fundo da barra de rolagem */
        }

        /* Estilizar a alça quando o mouse passar por cima */
        &::-webkit-scrollbar-thumb:active {
          background-color: rgb(151, 151, 151);
        }
      }

      .bodyCard {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: 150px;

        p {
          font-size: 12px;
          text-align: left;
        }

        & > section {
          height: 100%;
        }

        .leftBodySide {
          width: 120px;
        }

        .rightBodySide {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100px;
        }

        .info {
          
        }
      }
    }

    & > a > button {
        background-color: #4299e1;
        color: #fff;
        font-weight: 700;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0.25rem;
        border: none;
        margin-bottom: 20px;

        &:hover {
            background-color: #2c66b6;
            cursor: pointer;
        }
    }
  `;