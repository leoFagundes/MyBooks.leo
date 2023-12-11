import styled from 'styled-components'

interface TitleProps {
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    color?: string;
  }

export const Title = styled.h1<TitleProps>`
  font-size: 200%;
  font-size: ${(props) => props.fontSize || '200%'};
  text-align: center;
  font-weight: ${(props) => props.fontWeight || 'bold'};
  color: ${(props) => props.color || '#fff'};
  font-family: ${(props) => props.fontFamily || "'Montserrat', sans-serif"};
`