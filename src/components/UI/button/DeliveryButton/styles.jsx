import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 146px;
  padding: 12px 0;
  border-radius: 4px;
  background: ${({ active }) => (active ? 'rgba(228, 0, 43)' : 'rgba(239, 239, 239)')};
  color: ${({ active }) => (active ? 'rgba(255, 255, 255)' : 'rgba(157, 157, 157)')};
  cursor: pointer;
`
export const ButtonText = styled.span`
  font-family: 'Abel', sans-serif;
  size: 16px;
  line-height: 24px;
`
