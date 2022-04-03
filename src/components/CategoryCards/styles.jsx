import styled from 'styled-components'

export const ProductSection = styled.section`
  width: 100%;
  padding: 40px 0;
  background-color: ${({ categoryStyleProp }) => (categoryStyleProp ? 'rgb(247, 246, 245)' : 'rgb(255, 255, 255)')};
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 288px);
  gap: 30px;
  margin: 0 auto;
  width: 87%;
  justify-content: center;
  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fill, 420px);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(auto-fill, 225px);
    gap: 5px;
    width: 95%;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 155px);
    gap: 5px;
    width: 99%;
  }
`
export const CategoryName = styled.h4`
  grid-column: 1 / -1;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0px;
`
