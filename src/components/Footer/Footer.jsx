import React from 'react'
import {
  FooterIcon,
  FooterLogo,
  FooterNav,
  FooterSocials,
  IconContainer,
  LinksContainer,
  LinksWrapper,
  SocialsContainer,
  Wrapper,
} from './styles'
import { ReactComponent as VkIcon } from '../../assets/icons/vk-social.svg'
import { ReactComponent as FbIcon } from '../../assets/icons/fb-social.svg'
import { ReactComponent as TwIcon } from '../../assets/icons/tw-social.svg'
import { ReactComponent as OkIcon } from '../../assets/icons/ok-social.svg'
import { ReactComponent as GpIcon } from '../../assets/icons/appstore.svg'
import { ReactComponent as AsIcon } from '../../assets/icons/googleplay.svg'

export const Footer = () => {
  return (
    <Wrapper>
      <IconContainer>
        <FooterIcon />
      </IconContainer>
      <FooterNav>
        <LinksWrapper>
          <LinksContainer>
            <h5>Раздел1</h5>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
          </LinksContainer>
          <LinksContainer>
            <h5>Раздел1</h5>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
          </LinksContainer>
        </LinksWrapper>
        <FooterLogo />
        <LinksWrapper>
          <LinksContainer>
            <h5>Раздел1</h5>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
          </LinksContainer>
          <LinksContainer>
            <h5>Раздел1</h5>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
            <a href='#!'>Подраздел</a>
          </LinksContainer>
        </LinksWrapper>
      </FooterNav>
      <FooterSocials>
        <SocialsContainer>
          <GpIcon />
          <AsIcon />
        </SocialsContainer>
        <SocialsContainer>
          <VkIcon />
          <FbIcon />
          <TwIcon />
          <OkIcon />
        </SocialsContainer>
        <SocialsContainer>
          <GpIcon />
          <AsIcon />
        </SocialsContainer>
      </FooterSocials>
    </Wrapper>
  )
}
