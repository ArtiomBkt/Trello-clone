import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  BoardNavContainer,
  BoardNameContainer,
  BoardNamePlaceholder,
  BoardNameInput,
  BoardStarredContainer,
  BoardStarredIcon,
  BoardNavDivider,
  BoardNavRightChunkContainer
} from './BoardNav.styled'
import { PropTypes } from '../../../types/prop-types'
import BoardViews from './BoardViews'
import BoardOrg from './BoardOrg'
import BoardMembers from './BoardMembers'
import BoardControls from './BoardControls'

const BoardNav = ({ board, onBoardUpdate }: PropTypes.BoardNavCmp) => {
  const [boardTitle, setBoardTitle] = useState(board.title)
  const [isEditBoardTitle, setIsEditBoardTitle] = useState(false)
  // const [titleContainerWidth, setTitlePlaceholderWidth] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const titlePlaceholderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // if (titlePlaceholderRef.current) {
    //   setTitlePlaceholderWidth(window.getComputedStyle(titlePlaceholderRef.current).width)
    // }
    if (isEditBoardTitle && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditBoardTitle, inputRef])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    if (inputRef.current) {
      inputRef.current.size = target.value.length
    }
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
      <div>
        <BoardViews />
      </div>
      <BoardNameContainer>
        {!isEditBoardTitle ? (
          <BoardNamePlaceholder ref={titlePlaceholderRef} onClick={() => setIsEditBoardTitle(true)}>
            {board.title}
          </BoardNamePlaceholder>
        ) : (
          <BoardNameInput
            ref={inputRef}
            type="text"
            onBlur={handleTitleChange}
            onKeyDown={handleTitleChange}
            onChange={handleInputChange}
            value={boardTitle}
            // style={{ width: titleContainerWidth }}
          />
        )}
      </BoardNameContainer>
      <BoardStarredContainer>
        <BoardStarredIcon content="'\e967'" size="sm" />
      </BoardStarredContainer>
      <BoardOrg />
      <BoardNavDivider />
      <BoardNavRightChunkContainer>
        <BoardMembers members={board.members} />
        <BoardControls />
      </BoardNavRightChunkContainer>
    </BoardNavContainer>
  )
}

export default BoardNav
