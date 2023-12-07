import styled from "styled-components";

interface BookProps {
    backGroundImage: string;
}

export const HeaderContainer = styled.header`
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

export const InputContainer = styled.div`
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

export const SectionContainer = styled.section`
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

export const DivFilterContainer = styled.div`
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

export const BookContainer = styled.div`
    position: relative;
    perspective: 1000px;
    cursor: pointer;
  `;

export const Card = styled.div<{ flipped: boolean }>`
    width: 300px;
    height: 450px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    box-shadow: 5px 5px 15px 0px #888;
    transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
    margin: 10px 20px;
    border-radius: 10px;
  `;

export const Front = styled.div<BookProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url(${(props) => props.backGroundImage});
    background-size: cover;
    border-radius: 5px;
  `;

export const Back = styled.div`
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
    border-radius: 5px;
    color: #fff;
    box-shadow: inset 0 0 10px #cacaca79;

    p {
        text-align: center;
        margin: 0;
    }

    span {
        font-weight: bold;
    }

    a {
        justify-self: flex-end;
    }

    & {
        .bookDesc {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
            max-width: 90%;
            height: 20px;
            background-color: #2c66b6;
        }

        .bodyCard {
            display: flex;
            justify-content: center;
            align-items: center;

            .genero {

                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding-top: 30px;
                height: 100%;
                row-gap: 30px;

                p {
                    text-align: left;
                }
            }
        }
    }

    button {
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