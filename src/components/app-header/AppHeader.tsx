import React, { useEffect, useState } from 'react'
import { Header, HeaderMainNav, HeaderLinksWrapper, HeaderLinksContainer, HeaderLinks, HeaderRightChunk } from './AppHeader.styled'
import AppLogo from './logo/AppLogo'
import useModalPos from '../../hooks/useModalPos'
import { ReactComponent as CreateIcon } from '../../assets/images/plus.svg'
import NavLink from './links/NavLink'
import HeaderModal from '../../containers/modals/header/HeaderModal'

type modalPos = {
  elemPosX: number
  elemPosY: number
}

const AppHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalPos, setModalPos] = useState<modalPos>({ elemPosX: 0, elemPosY: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  const positionCalc = React.useCallback(
    (ev: React.MouseEvent) => {
      if (!isMenuOpen && ev.target instanceof Element) {
        const { x: elemPosX, y: elemPosY, height: elemHeight } = ev.currentTarget.getBoundingClientRect()
        setModalPos({ elemPosX, elemPosY: elemPosY + elemHeight + 10 })
      }
    },
    [isMenuOpen]
  )

  const handleMenuToggle = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    positionCalc(ev)
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  //// Can be simpler - refactor
  const NavLinks = (): any => {
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
            <HeaderModal position={modalPos} onClose={handleMenuToggle}>
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
            <HeaderModal position={modalPos} onClose={handleMenuToggle}>
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
