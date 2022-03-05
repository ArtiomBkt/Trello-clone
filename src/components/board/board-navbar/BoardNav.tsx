import React, { useLayoutEffect, useRef } from 'react'
import {
  BoardNavContainer,
  BoardNameContainer,
  BoardNamePlaceholder,
  BoardNameInput,
  BoardStarredContainer,
  BoardStarredIcon,
  BoardNavDivider,
  BoardNavRightChunkContainer,
  BoardSidebarBtn,
  BoardSidebarIcon
} from './BoardNav.styled'
import { PropTypes } from 'types/prop-types'
import useTitleEditReducer from 'reducers/useBoardTitleEditReducer'
import BoardViews from './BoardViews'
import BoardOrg from './BoardOrg'
import BoardMembers from './BoardMembers'
import BoardControls from './BoardControls'

const BoardNav = ({ board, onBoardUpdate, onSidenavOpen, onUserToggleStar }: PropTypes.BoardNavCmp) => {
  const [state, dispatch] = useTitleEditReducer({
    boardTitle: board.title,
    isEditing: false,
    titleWidth: 0
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const titlePlaceholderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (titlePlaceholderRef.current) {
      const width = window.getComputedStyle(titlePlaceholderRef.current).width
      dispatch({ type: 'CALC_WIDTH', payload: width })
    }
    if (state.isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [dispatch, inputRef, state.isEditing])

  useLayoutEffect(() => {
    if (state.isEditing && titlePlaceholderRef.current) {
      const { width } = titlePlaceholderRef.current.getBoundingClientRect()
      dispatch({ type: 'CALC_WIDTH', payload: width })
    }
  }, [dispatch, state.isEditing, state.boardTitle])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'UPDATE_TITLE', payload: target.value })
  }

  const handleTitleChange = (ev: React.FocusEvent | React.KeyboardEvent): void => {
    if ((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'blur') return
    ev.preventDefault()
    dispatch({ type: 'TOGGLE_EDITOR' })

    const newBoard = {
      ...board,
      title: state.boardTitle
    }
    onBoardUpdate(newBoard)
  }

  // TODO: enable option to star/unstar board

  return (
    <BoardNavContainer>
      <div>
        <BoardViews />
      </div>
      <BoardNameContainer>
        <BoardNamePlaceholder ref={titlePlaceholderRef} onClick={() => dispatch({ type: 'TOGGLE_EDITOR' })}>
          {state.boardTitle}
        </BoardNamePlaceholder>
        {state.isEditing && (
          <BoardNameInput
            ref={inputRef}
            type="text"
            onBlur={handleTitleChange}
            onKeyDown={handleTitleChange}
            onChange={handleInputChange}
            value={state.boardTitle}
            style={{ width: state.titleWidth }}
          />
        )}
      </BoardNameContainer>
      <BoardStarredContainer>
        <BoardStarredIcon onClick={onUserToggleStar} content="'\e967'" size="sm" />
      </BoardStarredContainer>
      <BoardOrg />
      <BoardNavDivider />
      <BoardNavRightChunkContainer>
        <BoardMembers members={board.members} />
        <BoardControls>
          <BoardSidebarBtn onClick={onSidenavOpen}>
            <BoardSidebarIcon content="'\e952'" size="sm" />
            <span>Show menu</span>
          </BoardSidebarBtn>
        </BoardControls>
      </BoardNavRightChunkContainer>
    </BoardNavContainer>
  )
}

export default BoardNav
