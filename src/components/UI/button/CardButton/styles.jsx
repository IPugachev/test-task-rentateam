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
  &:active {
    transition: background-color 0.15s ease-out;
    ${({ isDisable }) => !isDisable && 'background: rgba(255, 255, 255, 0.15);'};
  }
  border-radius: 50%;
`
export const AddIcon = styled(Add)``

export const DeleteIcon = styled(Delete)``
