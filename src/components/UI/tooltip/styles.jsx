import styled from 'styled-components'

export const InputTooltip = styled.div`
  ${({ tooltipWarning }) => (tooltipWarning[0] ? 'opacity: 1;' : 'opacity: 0;')}
  position: absolute;
  bottom: 0;
  transform: translateY(120%);
  ${({ tooltipWarning }) => (tooltipWarning[1] === 'left' ? 'left: 0;' : 'left: 320px;')}

  padding: 12px 20px;
  border-radius: 8px;
  background: #000;
  color: white;
  transition: opacity 0.5s ease;
  user-select: none;
`
export const WarningText = styled.strong`
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
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

  &::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
`
