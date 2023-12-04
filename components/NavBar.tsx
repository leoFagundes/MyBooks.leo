"use client"

import React from 'react'
import { SiBookmyshow } from "react-icons/si"
import { styled } from 'styled-components'
import { Title } from './Title.styled'

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 70px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export default function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <SiBookmyshow size={55} />
        <Title><i>Books.leo</i></Title>
      </LogoContainer>
    </NavContainer>
  )
}
