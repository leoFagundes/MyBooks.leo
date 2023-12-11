"use client"

import React from 'react'
import { SiBookmyshow } from "react-icons/si"
import styled from 'styled-components'
import { Title } from '../styledComponents/Title.styled'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background-color: rgba(30, 30, 30, 0);
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <SiBookmyshow size={45} color={'#fff'}/>
        <Title fontSize='180%' fontFamily="'Hedvig Letters Serif', serif;"><i>Books.leo</i></Title>
      </LogoContainer>
    </NavContainer>
  )
}
