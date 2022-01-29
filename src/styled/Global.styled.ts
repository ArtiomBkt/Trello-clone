import { createGlobalStyle } from 'styled-components'

const Resets = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
      Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #172b4d;
    background-color: red;
  }

  a {
    all: unset;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    all: unset;
  }

  button {
    all: unset;
  }
`

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: trellicons;
    src: url('../assets/fonts/icomoon.ttf') format('truetype')
  }
  @font-face {
    font-family: source-sans;
    src: url('../assets/fonts/source-sans.ttf') format('truetype')
  }
`

export { Resets, FontStyles }
