import React from 'react'
import { NavLinkContainer, ArrowIconContainer, ArrowIcon, HeaderCreateBtn } from './NavLink.styled'
import { ReactComponent as DownArrowSvg } from 'assets/images/arrow-down.svg'
import { ReactComponent as RightArrowSvg } from 'assets/images/arrow-right.svg'
import { PropTypes } from 'types/prop-types'

const NavLink = ({ isInModal, type, isMenuOpen, children, handleMenuToggle }: PropTypes.LinkProps) => {
  const disabledBtn = type === 'More' ? false : true

  return (
    <NavLinkContainer
      disabled={disabledBtn}
      className={isMenuOpen ? 'modal-open' : ''}
      style={{ cursor: disabledBtn ? 'not-allowed' : 'pointer' }}
      onClickCapture={handleMenuToggle}
      btnType={type}
    >
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
