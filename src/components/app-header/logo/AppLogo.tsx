import React from 'react'
import { LogoLink, HeaderLogo, LogoContainer, LogoText } from './Logo.styled'

const AppLogo = () => {
  return (
    <LogoLink to="/">
      <HeaderLogo>
        <LogoContainer>
          <LogoText>Trello</LogoText>
        </LogoContainer>
      </HeaderLogo>
    </LogoLink>
  )
}

export default AppLogo
