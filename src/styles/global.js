import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing:border-box;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`
