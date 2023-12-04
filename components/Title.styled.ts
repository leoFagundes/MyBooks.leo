import { styled } from 'styled-components'

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

    font-size: 200%;
    text-align: center;
    font-weight: 400;
    color: ${(props) => props.color || '#fff'};
    font-family: 'Montserrat', sans-serif;
`