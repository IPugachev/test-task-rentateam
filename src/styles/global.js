import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing:border-box;
    font-size: 16px;
    @media (min-width: 1920px) {
      font-size: 24px;
  }
    @media (max-width: 500px) {
      font-size: 12px;
  }
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`
