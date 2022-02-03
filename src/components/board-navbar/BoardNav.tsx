import React from 'react'
import { BoardNavContainer, BoardViewsContainer, BoardViewsIconContainer, BoardViewsText } from './BoardNav.styled'
import { NavLinkContainer } from '../app-header/links/NavLink.styled'
import { ReactComponent as BoardViewIcon } from '../../assets/images/board-view.svg'
import { ReactComponent as ArrowSvg } from '../../assets/images/arrow-down.svg'
import { ArrowIcon } from '../app-header/links/NavLink.styled'

const BoardNav = () => {
  return (
    <BoardNavContainer>
      <BoardViewsContainer>
        <NavLinkContainer type="board-views">
          <BoardViewsIconContainer>
            <ArrowIcon>
              <BoardViewIcon />
            </ArrowIcon>
          </BoardViewsIconContainer>
          <BoardViewsText>Board</BoardViewsText>
          <BoardViewsIconContainer>
            <ArrowIcon>
              <ArrowSvg />
            </ArrowIcon>
          </BoardViewsIconContainer>
        </NavLinkContainer>
      </BoardViewsContainer>
    </BoardNavContainer>
  )
}

export default BoardNav
