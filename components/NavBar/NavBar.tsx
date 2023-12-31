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

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 420px) {
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavItemContainer = styled.ul`
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;

    li {
      font-size: 100%;
      text-align: center;
      font-weight: 600;
      color: ${(props) => props.color || '#fff'};
    }
  }
`

export default function NavBar() {
  return (
    <NavContainer>
      <a href="/">
      <LogoContainer>
        <SiBookmyshow size={45} color={'#fff'}/>
        <Title fontSize='180%' fontFamily="'Hedvig Letters Serif', serif;"><i>Books.leo</i></Title>
      </LogoContainer>
      </a>
      <NavItemContainer>
        <a href="/MySearchBooks"><li>MySearchBooks</li></a>
      </NavItemContainer>
    </NavContainer>
  )
}
