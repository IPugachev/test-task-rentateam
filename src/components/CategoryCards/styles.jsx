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

  & h3 {
    grid-column: 1 / -1;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
  }
`
