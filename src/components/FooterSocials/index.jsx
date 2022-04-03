import React from 'react'
import { Socials, SocialsContainer } from './styles'
import { ReactComponent as VkIcon } from '../../assets/icons/vk-social.svg'
import { ReactComponent as FbIcon } from '../../assets/icons/fb-social.svg'
import { ReactComponent as TwIcon } from '../../assets/icons/tw-social.svg'
import { ReactComponent as OkIcon } from '../../assets/icons/ok-social.svg'
import { ReactComponent as GpIcon } from '../../assets/icons/appstore.svg'
import { ReactComponent as AsIcon } from '../../assets/icons/googleplay.svg'

export const FooterSocials = () => {
  return (
    <Socials>
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
    </Socials>
  )
}
