import React, { useState } from 'react'
import NavLink from './NavLink'
import HeaderModal from 'containers/modals/header/HeaderModal'
import { PropTypes } from 'types/prop-types'

const NavLinks = ({ windowWidth, isMenuOpen, modalPos, handleMenuToggle }: PropTypes.NavLinksProps) => {
  const [navLinks] = useState([{ text: 'Workspaces' }, { text: 'Recent' }, { text: 'Starred' }, { text: 'Templates' }])

  const Link = (link: { text: string }, isInModal?: boolean) => {
    return (
      <NavLink isInModal={isInModal || undefined} type={link.text} key={link.text}>
        {link.text}
      </NavLink>
    )
  }

  if (windowWidth <= 660) {
    return (
      <>
        <NavLink isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} type="More">
          More
        </NavLink>
        {isMenuOpen && (
          <HeaderModal title="More" modalPos={modalPos} onClose={handleMenuToggle}>
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
        <NavLink isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} type="More">
          More
        </NavLink>
        {isMenuOpen && (
          <HeaderModal title="More" modalPos={modalPos} onClose={handleMenuToggle}>
            <>{moreLinks.map(link => Link(link, true))}</>
          </HeaderModal>
        )}
      </>
    )
  }
  return <>{navLinks.map(link => Link(link))}</>
}

export default NavLinks
