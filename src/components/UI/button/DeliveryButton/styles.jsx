import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 146px;
  padding: 12px 0;
  border-radius: 4px;
  background: ${({ active }) => (active ? 'rgba(239, 239, 239)' : 'rgba(228, 0, 43)')};
  color: ${({ active }) => (active ? 'rgba(157, 157, 157)' : 'rgba(255, 255, 255)')};
  cursor: pointer;
`
export const ButtonText = styled.span`
  font-family: 'Abel', sans-serif;
  size: 16px;
  line-height: 24px;
`
