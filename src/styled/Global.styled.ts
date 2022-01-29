import { createGlobalStyle } from 'styled-components'
import icomoon from '../assets/fonts/icomoon.ttf'
import sourceSans from '../assets/fonts/SourceSansPro-SemiBold.ttf'

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
  }

  html, body, button, input, select, textarea {
    color: #172b4d;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
      Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  a {
    all: unset;

    &:hover {
      cursor: pointer;
    }
  }
  /*
  p {
    all: unset;
  }

  button {
    all: unset;
  } */
`

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'trellicons';
    src: url(${icomoon}) format('truetype');
  }
  @font-face {
    font-family: 'sourceSans';
    src: url(${sourceSans}) format('truetype');
    font-style: normal;
  }
`

export { Resets, FontStyles }
