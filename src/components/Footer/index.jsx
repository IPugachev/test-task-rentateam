import React from 'react'

import { FooterNav } from '../FooterNav'
import { FooterSocials } from '../FooterSocials'
import { FooterIcon, IconContainer, Wrapper } from './styles'

export const Footer = () => {
  return (
    <Wrapper>
      <IconContainer>
        <FooterIcon />
      </IconContainer>
      <FooterNav />
      <FooterSocials />
    </Wrapper>
  )
}
