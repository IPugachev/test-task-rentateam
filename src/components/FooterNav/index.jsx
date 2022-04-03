import React from 'react'
import { FooterLogo, LinksContainer, LinksWrapper, Nav } from './styles'

export const FooterNav = () => {
  const getLinks = () => {
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(
        <a href='!' key={i}>
          Подраздел
        </a>
      )
    }
    return (
      <>
        <h5>Раздел№1</h5>
        {arr}
      </>
    )
  }
  return (
    <Nav>
      <LinksWrapper>
        <LinksContainer>{getLinks()}</LinksContainer>
        <LinksContainer>{getLinks()}</LinksContainer>
      </LinksWrapper>
      <FooterLogo />
      <LinksWrapper>
        <LinksContainer>{getLinks()}</LinksContainer>
        <LinksContainer>{getLinks()}</LinksContainer>
      </LinksWrapper>
    </Nav>
  )
}
