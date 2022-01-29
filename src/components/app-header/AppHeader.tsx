import React, { useEffect, useState } from 'react'
import { Header, HeaderMainNav, HeaderLinksWrapper, HeaderLinksContainer, HeaderLinks, HeaderRightChunk } from './AppHeader.styled'
import AppLogo from './logo/AppLogo'
import { ReactComponent as CreateIcon } from '../../assets/images/plus.svg'
import NavLink from './links/NavLink'
import RightChunk from './right-chunk/RightChunk'

const AppHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  const handleMenuToggle = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  //// Can be simpler - refactor
  const NavLinks = (): any => {
    const visibleLinks = [{ text: 'Workspaces' }, { text: 'Recent' }, { text: 'Starred' }, { text: 'Templates' }]
    if (windowWidth > 1000) {
      return visibleLinks.map(link => (
        <NavLink type={link.text} key={link.text}>
          {link.text}
        </NavLink>
      ))
    } else if (windowWidth < 1000 && windowWidth > 660) {
      const moreLinks = visibleLinks.splice(2, 2)
      return (
        <>
          {visibleLinks.map(link => (
            <NavLink type={link.text} key={link.text}>
              {link.text}
            </NavLink>
          ))}
          <NavLink handleMenuToggle={handleMenuToggle} type="More">
            More
          </NavLink>
          {isMenuOpen && (
            <div>
              {moreLinks.map(link => (
                <NavLink type={link.text} key={link.text}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          )}
        </>
      )
    } else {
      const moreLinks = visibleLinks.splice(0, 4)
      return (
        <>
          <NavLink handleMenuToggle={handleMenuToggle} type="More">
            More
          </NavLink>
          {isMenuOpen && (
            <div>
              {moreLinks.map(link => (
                <NavLink type={link.text} key={link.text}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          )}
        </>
      )
    }
  }
  //// refactor

  return (
    <Header>
      <HeaderMainNav>
        <AppLogo />
        <HeaderLinksWrapper>
          <HeaderLinksContainer>
            <HeaderLinks>
              <NavLinks />
            </HeaderLinks>
            <HeaderLinks>
              <NavLink type="Create">
                {windowWidth < 1100 ? <CreateIcon style={{width: '20px', height: '20px'}} /> : 'Create'}
              </NavLink>
            </HeaderLinks>
          </HeaderLinksContainer>
        </HeaderLinksWrapper>
        <HeaderRightChunk>{/* <RightChunk /> */}</HeaderRightChunk>
      </HeaderMainNav>
    </Header>
  )
}

export default AppHeader
