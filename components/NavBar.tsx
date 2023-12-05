"use client"

import React from 'react'
import { SiBookmyshow } from "react-icons/si"
import { styled } from 'styled-components'
import { Title } from './Title.styled'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background-color: rgba(30, 30, 30, 0.5);
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const NavItemContainer = styled.ul`
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;

    li {
      font-size: 120%;
      text-align: center;
      font-weight: 600;
      color: ${(props) => props.color || '#fff'};
      font-family: 'Montserrat', sans-serif;
    }
  }
`

export default function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <SiBookmyshow size={55} />
        <Title><i>Books.leo</i></Title>
      </LogoContainer>
      <NavItemContainer>
        <a href=""><li>MyBookLine</li></a>
        <a href=""><li>BlaBla</li></a>
      </NavItemContainer>
    </NavContainer>
  )
}
