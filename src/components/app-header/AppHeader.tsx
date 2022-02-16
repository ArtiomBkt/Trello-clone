import React, { useEffect, useState } from 'react'
import { Header, HeaderMainNav, HeaderLinksWrapper, HeaderLinksContainer, HeaderLinks, HeaderRightChunk } from './AppHeader.styled'
import AppLogo from './logo/AppLogo'
import { ReactComponent as CreateIcon } from '../../assets/images/plus.svg'
import NavLink from './links/NavLink'
import HeaderModal from '../../containers/modals/header/HeaderModal'

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

  const positionCalc = React.useCallback(
    (ev: any) => {
      if (!isMenuOpen && ev.target instanceof Element) {
        console.log(ev.target.clientLeft, ev.target.offsetWidth)
      }
    },
    [isMenuOpen]
  )

  const handleMenuToggle = (ev: any) => {
    ev.preventDefault()
    positionCalc(ev)
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  //// Can be simpler - refactor
  const NavLinks = (): JSX.Element => {
    const visibleLinks = [{ text: 'Workspaces' }, { text: 'Recent' }, { text: 'Starred' }, { text: 'Templates' }]
    if (windowWidth > 1000) {
      return (
        <>
          {visibleLinks.map(link => (
            <NavLink type={link.text} key={link.text}>
              {link.text}
            </NavLink>
          ))}
        </>
      )
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
            <HeaderModal position={{ top: 48, left: 114 }} onClose={handleMenuToggle}>
              {/* needs a container for nice layout */}
              <>
                {moreLinks.map(link => (
                  <NavLink type={link.text} key={link.text}>
                    {link.text}
                  </NavLink>
                ))}
              </>
            </HeaderModal>
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
            <HeaderModal position={{ top: 48, left: 114 }} onClose={handleMenuToggle}>
              {/* needs a container for nice layout */}
              <>
                {moreLinks.map(link => (
                  <NavLink type={link.text} key={link.text}>
                    {link.text}
                  </NavLink>
                ))}
              </>
            </HeaderModal>
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
              <NavLink type="Create">{windowWidth < 1100 ? <CreateIcon style={{ width: '20px', height: '20px' }} /> : 'Create'}</NavLink>
            </HeaderLinks>
          </HeaderLinksContainer>
        </HeaderLinksWrapper>
        <HeaderRightChunk>{/* <RightChunk /> */}</HeaderRightChunk>
      </HeaderMainNav>
    </Header>
  )
}

export default AppHeader
