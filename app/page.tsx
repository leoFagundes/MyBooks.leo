"use client"
import { Title } from "@/components/Title.styled"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  h1 {
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    width: 80%;
    font-size: 20px;
    text-align: center;
  }
`

const InputContainer = styled.div`

`

const SectionContainer = styled.section`
  width: 100%;
  margin: 50px 0;
  min-width: 320px;
  min-height: 400px;
  background-color: white;
  border-radius: 15px;
`

export default async function Home() {

  return (
    <HeaderContainer>
      <Title fontSize="350%" fontFamily="'Permanent Marker', cursive;">Uma Breve Viagem Pelos Meus Livros</Title>
      <p><i>Repositório feito para armazenar e organizar os livros que já li ao longo da minha vida</i></p>
      <InputContainer>
        <input type="text" />
        <select id="select-state" placeholder="Pick a state...">
          <option value="">Select a state...</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
        </select>
      </InputContainer>
      <SectionContainer>
        teste
      </SectionContainer>
    </HeaderContainer>
  )
}
