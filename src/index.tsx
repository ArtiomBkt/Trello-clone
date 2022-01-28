import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Resets, FontStyles } from './styled/Global.styled'

ReactDOM.render(
  <React.StrictMode>
    <Resets />
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
