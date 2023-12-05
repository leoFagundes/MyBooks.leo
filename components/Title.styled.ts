import { styled } from 'styled-components'

export const Title = styled.h1`
    font-size: 200%;
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.color || '#fff'};
    font-family: 'Montserrat', sans-serif;
`