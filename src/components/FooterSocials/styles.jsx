import styled from 'styled-components'

export const Socials = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  & div:nth-child(1) {
    visibility: hidden;
  }
  & :nth-child(2) {
    gap: 40px;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    & :nth-child(2) {
      order: -1;
    }
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
