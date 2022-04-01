import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/icons/footer-icon.svg'
import { ReactComponent as Logo } from '../../assets/icons/footer-logo.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
`
export const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(247, 246, 245, 1);
`
export const FooterIcon = styled(Icon)`
  height: 72px;
`
export const FooterNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin: 80px 0 130px;
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: 100px;
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  & h5 {
    margin-bottom: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
  }
  & a {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: #000;
  }
`
export const FooterLogo = styled(Logo)`
  width: 227px;
  height: 227px;
`
export const FooterSocials = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  & div:nth-child(1) {
    visibility: hidden;
  }
  & :nth-child(2) {
    gap: 40px;
  }
`
export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  & svg {
    cursor: pointer;
  }
`
