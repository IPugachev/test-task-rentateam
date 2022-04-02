import styled from 'styled-components'

export const Form = styled.form`
  display: ${({ activeDileveryButton }) => (activeDileveryButton ? 'none' : 'flex')};
  align-items: center;
  width: 100%;
  margin: 47px 0 63px;
  gap: 43px;
  position: relative;
`
