import React from 'react'
import { Header, HeaderLinks, HeaderLogo } from './AppHeader.styled'

const AppHeader = () => {
  return (
    <Header>
      <HeaderLinks>
        <HeaderLogo>
          <p>Trackero</p>
        </HeaderLogo>
      </HeaderLinks>
    </Header>
  )
}

export default AppHeader
