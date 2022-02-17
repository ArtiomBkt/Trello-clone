import React from 'react'
import { NavLinkContainer, ArrowIconContainer, ArrowIcon, HeaderCreateBtn } from './NavLink.styled'
import { ReactComponent as DownArrowSvg } from '../../../assets/images/arrow-down.svg'
import { ReactComponent as RightArrowSvg } from '../../../assets/images/arrow-right.svg'

type linkProps = {
  children?: React.ReactNode
  type?: string
  isInModal?: boolean
  handleMenuToggle?: (ev: React.MouseEvent) => void
}

const NavLink = ({ isInModal, type, handleMenuToggle, children }: linkProps) => {
  return (
    <NavLinkContainer onClickCapture={handleMenuToggle} btnType={type}>
      {type === 'Create' ? (
        <HeaderCreateBtn title="Create new board">{children}</HeaderCreateBtn>
      ) : (
        <>
          <span style={{ marginRight: '2px' }}>{children}</span>
          <ArrowIconContainer>
            <ArrowIcon>{isInModal ? <RightArrowSvg /> : <DownArrowSvg />}</ArrowIcon>
          </ArrowIconContainer>
        </>
      )}
    </NavLinkContainer>
  )
}

export default NavLink
