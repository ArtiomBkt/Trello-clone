import React, { useState } from 'react'
import NavLink from './NavLink'
import HeaderModal from '../../../containers/modals/header/HeaderModal'

type NavLinksProps = {
  windowWidth: number
  isMenuOpen: boolean
  modalPos: { elemPosX: number; elemPosY: number }
  handleMenuToggle: (ev?: React.MouseEvent) => void
}
type Link = { text: string }
type NavLinksState = Link[]

const NavLinks = ({ windowWidth, isMenuOpen, modalPos, handleMenuToggle }: NavLinksProps) => {
  const [navLinks] = useState<NavLinksState>([
    { text: 'Workspaces' },
    { text: 'Recent' },
    { text: 'Starred' },
    { text: 'Templates' }
  ])

  // useRef - when navlink is clicked ref = target, position modal always according to target

  const Link = (link: Link, isInModal?: boolean) => {
    return (
      <NavLink isInModal={isInModal || undefined} type={link.text} key={link.text}>
        {link.text}
      </NavLink>
    )
  }

  if (windowWidth <= 660) {
    return (
      <>
        <NavLink handleMenuToggle={handleMenuToggle} type="More">
          More
        </NavLink>
        {isMenuOpen && (
          <HeaderModal title="More" position={modalPos} onClose={handleMenuToggle}>
            <>{navLinks.map(link => Link(link, true))}</>
          </HeaderModal>
        )}
      </>
    )
  }
  if (windowWidth > 660 && windowWidth < 1000) {
    const moreLinks = navLinks.slice(2, 4)
    return (
      <>
        {navLinks.map((link, idx) => (idx < 2 ? Link(link) : null))}
        <NavLink handleMenuToggle={handleMenuToggle} type="More">
          More
        </NavLink>
        {isMenuOpen && (
          <HeaderModal title="More" position={modalPos} onClose={handleMenuToggle}>
            <>{moreLinks.map(link => Link(link, true))}</>
          </HeaderModal>
        )}
      </>
    )
  }
  return <>{navLinks.map(link => Link(link))}</>
}

export default NavLinks
