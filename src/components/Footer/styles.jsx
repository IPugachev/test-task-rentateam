import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/icons/footer-icon.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  @media (max-width: 740px) {
    width: 95%;
  }
`
export const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(247, 246, 245, 1);
`
export const FooterIcon = styled(Icon)`
  height: 72px;
`
