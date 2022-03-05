import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'
import { Resets, FontStyles } from 'styled/Global.styled'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Resets />
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
