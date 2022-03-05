import React from 'react'
import { BoardViewBtn, BoardViewsIconContainer, BoardViewsText } from './BoardNav.styled'
import { ReactComponent as BoardViewIcon } from 'assets/images/board-view.svg'
import { ReactComponent as ArrowSvg } from 'assets/images/arrow-down.svg'
import { ArrowIcon } from 'components/app-header/links/NavLink.styled'

const BoardViews = () => {
  return (
    <BoardViewBtn>
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
    </BoardViewBtn>
  )
}

export default BoardViews
