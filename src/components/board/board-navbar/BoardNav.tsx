import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  BoardNavContainer,
  BoardViewsContainer,
  BoardViewBtn,
  BoardViewsIconContainer,
  BoardViewsText,
  BoardNameContainer,
  BoardNamePlaceholder,
  BoardNameInput,
  BoardStarredContainer
} from './BoardNav.styled'
import { ReactComponent as BoardViewIcon } from '../../../assets/images/board-view.svg'
import { ReactComponent as ArrowSvg } from '../../../assets/images/arrow-down.svg'
import { ArrowIcon } from '../../app-header/links/NavLink.styled'
import { PropTypes } from '../../../types/prop-types'

const BoardNav = ({ board, onBoardUpdate }: PropTypes.BoardNavCmp) => {
  const [boardTitle, setBoardTitle] = useState(board.title)
  const [isEditBoardTitle, setIsEditBoardTitle] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    if (isEditBoardTitle && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditBoardTitle, inputRef])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setBoardTitle(target.value)
  }

  const handleTitleChange = (ev: React.FocusEvent | React.KeyboardEvent): void => {
    if ((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'blur') return
    ev.preventDefault()
    setIsEditBoardTitle(false)

    const newBoard = {
      ...board,
      title: boardTitle
    }
    onBoardUpdate(newBoard)
  }

  return (
    <BoardNavContainer>
      <BoardViewsContainer>
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
      </BoardViewsContainer>
      <BoardNameContainer>
        {!isEditBoardTitle ? (
          <BoardNamePlaceholder onClick={() => setIsEditBoardTitle(true)}>{board.title}</BoardNamePlaceholder>
        ) : (
          <BoardNameInput
            ref={inputRef}
            type="text"
            onBlur={handleTitleChange}
            onKeyDown={handleTitleChange}
            onChange={handleInputChange}
            value={boardTitle}
          />
        )}
      </BoardNameContainer>
      <BoardStarredContainer>star</BoardStarredContainer>
    </BoardNavContainer>
  )
}

export default BoardNav

// get computed style of board name placeholder h1 and set it to the input's width
