import React from 'react'
import { InputTooltip, TooltipArrow, WarningText } from './styles'

export const Tooltip = ({ tooltipWarning, warningText }) => {
  return (
    <InputTooltip tooltipWarning={tooltipWarning}>
      <WarningText>{warningText}</WarningText>
      <TooltipArrow></TooltipArrow>
    </InputTooltip>
  )
}
