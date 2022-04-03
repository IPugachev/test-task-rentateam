import styled from 'styled-components'

export const InputTooltip = styled.div`
  ${({ tooltipWarning }) =>
    tooltipWarning[0] ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'}
  position: absolute;
  bottom: 0;
  transform: translateY(120%);
  ${({ tooltipWarning }) => (tooltipWarning[1] === 'left' ? 'left: 0;' : 'left: 320px;')}
  padding: 12px 20px;
  border-radius: 8px;
  background: #000;
  color: white;
  transition: all 0.5s ease;
  user-select: none;
  @media (max-width: 740px) {
    right: 0;
    left: 100px;
    ${({ tooltipWarning }) =>
      tooltipWarning[0] ? 'opacity: 1;  visibility: visible;' : 'opacity: 0;  visibility: hidden;'}
    ${({ tooltipWarning }) =>
      tooltipWarning[1] === 'left' ? 'transform: translateY(20%);' : 'transform: translateY(120%);'}
  }
`
export const WarningText = styled.strong`
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.35rem;
  text-align: center;
`
export const TooltipArrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 20px;
    height: 16px;
    background: inherit;
  }
  top: -2px;
  left: 50%;
  visibility: hidden;
  @media (max-width: 740px) {
    left: 80%;
  }

  &::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
`
