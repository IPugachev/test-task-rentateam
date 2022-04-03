import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/footer-logo.svg'

export const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin: 80px 0 130px;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 50px 0 100px;
    gap: 15px;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: 100px;
  @media (max-width: 1200px) {
    gap: 50px;
  }
  @media (max-width: 1080px) {
    gap: 20px;
    width: 100%;
    justify-content: space-around;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  font-family: 'Barlow Condensed', sans-serif;
  & h5 {
    margin-bottom: 8px;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0px;
  }
  & a {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0px;
    color: #000;
  }
  @media (max-width: 1080px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`
export const FooterLogo = styled(Logo)`
  width: 227px;
  height: 227px;
  flex-shrink: 0;
  @media (max-width: 1080px) {
    order: -1;
  }
`
