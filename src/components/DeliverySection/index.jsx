import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDeliveryState } from '../../store/actions/basketActions'
import { AddressForm } from '../AddressForm'
import { DeliveryButton } from '../UI/button/DeliveryButton'
import { DeliveryButtonGroup, DeliveryInfoSection, DeliverySectionContainer, Location } from './styles'

export const DeliverySection = ({ tooltipWarning, city }) => {
  const [activeDileveryButton, setActiveDileveryButton] = useState(true)

  const dispatch = useDispatch()
  const dileveryHandler = (type) => {
    if (type !== activeDileveryButton) {
      setActiveDileveryButton((prev) => !prev)
      dispatch(setDeliveryState(type))
    }
  }

  return (
    <DeliverySectionContainer>
      <DeliveryInfoSection>
        <Location>{`Доставка г.${city}`}</Location>
        <DeliveryButtonGroup>
          <DeliveryButton
            activeDileveryButton={activeDileveryButton}
            onClick={() => dileveryHandler(true)}
            text='Доставка'
          />
          <DeliveryButton
            activeDileveryButton={!activeDileveryButton}
            onClick={() => dileveryHandler(false)}
            text='Самовывоз'
          />
        </DeliveryButtonGroup>
      </DeliveryInfoSection>

      <AddressForm activeDileveryButton={activeDileveryButton} tooltipWarning={tooltipWarning} />
    </DeliverySectionContainer>
  )
}
