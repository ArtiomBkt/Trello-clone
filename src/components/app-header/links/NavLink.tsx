import React, { MouseEvent, ReactNode } from 'react'
import { NavLinkContainer, ArrowIconContainer, ArrowIcon } from './NavLink.styled'
import { ReactComponent as ArrowSvg } from '../../../assets/images/arrow-down.svg'

type linkProps = {
  children?: React.ReactNode
  type?: string
  handleMenuToggle?: (ev: any) => void
}

const createBtnStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '32px', margin: 0 }

const NavLink = ({ type, handleMenuToggle, children }: linkProps) => {
  return (
    <NavLinkContainer onClickCapture={handleMenuToggle} type={type}>
      {type === 'Create' ? (
        <span style={createBtnStyle}>{children}</span>
      ) : (
        <>
          <span style={{ marginRight: '2px' }}>{children}</span>
          <ArrowIconContainer>
            <ArrowIcon>
              <ArrowSvg />
            </ArrowIcon>
          </ArrowIconContainer>
        </>
      )}
    </NavLinkContainer>
  )
}

export default NavLink
