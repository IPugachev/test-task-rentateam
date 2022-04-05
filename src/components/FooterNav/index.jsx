import React from 'react'
import { FooterLogo, LinksContainer, LinksWrapper, Nav } from './styles'

export const FooterNav = () => {
  const getLinks = () => {
    return (
      <>
        <h5>Раздел№1</h5>
        {[...new Array(5)].map((_, index) => (
          <a href='!' key={index}>
            Подраздел
          </a>
        ))}
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
