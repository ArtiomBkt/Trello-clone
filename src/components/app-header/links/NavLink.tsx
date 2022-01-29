import React from 'react'
import { NavLinkContainer, ArrowIconContainer, ArrowIcon } from './NavLink.styled'
import { ReactComponent as ArrowSvg } from '../../../assets/images/arrow-down.svg'

type linkProps = {
  children?: JSX.Element | string
  type?: string
  handleMenuToggle?: () => void
}

const NavLink = ({ type, handleMenuToggle, children }: linkProps) => {
  return (
    <NavLinkContainer onClick={handleMenuToggle} type={type}>
      <span style={{ marginRight: '2px' }}>{children}</span>
      {type !== 'Create' && (
        <ArrowIconContainer>
          <ArrowIcon>
            <ArrowSvg />
          </ArrowIcon>
        </ArrowIconContainer>
      )}
    </NavLinkContainer>
  )
}

export default NavLink
