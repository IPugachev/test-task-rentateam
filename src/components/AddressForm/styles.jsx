import styled from 'styled-components'

export const Form = styled.form`
  display: ${({ activeDileveryButton }) => (activeDileveryButton ? 'flex' : 'none')};
  align-items: center;
  width: 100%;
  margin: 47px 0 63px;
  gap: 43px;
  position: relative;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    margin: 20px 0 30px;
  }
`
