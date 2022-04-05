import styled from 'styled-components'

export const DeliverySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 87%;
  @media (max-width: 740px) {
    width: 95%;
  }
`
export const DeliverySectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 5px;
  }
`
export const Location = styled.h3`
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: 0px;
`
export const DeliveryButtonGroup = styled.div`
  display: flex;
  @media (min-width: 501px) and (max-width: 740px) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 500px) {
    align-self: flex-end;
  }
`
