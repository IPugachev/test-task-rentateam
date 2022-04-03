import styled from 'styled-components'
import { ReactComponent as Add } from '../../../../assets/icons/add-icon.svg'
import { ReactComponent as Delete } from '../../../../assets/icons/delete-icon.svg'

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${({ isDisable }) => (isDisable ? '#fff' : '#000')};
  border-radius: 50%;
  &:active {
    transition: background-color 0.15s ease-out;
    ${({ isDisable }) => !isDisable && 'background: rgba(255, 255, 255, 0.15);'};
  }

  @media (min-width: 1920px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`
export const AddIcon = styled(Add)`
  @media (min-width: 1920px) {
    width: 32px;
    height: 32px;
  }
`

export const DeleteIcon = styled(Delete)`
  @media (min-width: 1920px) {
    width: 32px;
    height: 32px;
  }
`
