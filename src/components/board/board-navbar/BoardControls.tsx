import React from 'react'
import { BoardWatcherBtn, BoardWatcherIcon, BoardNavDivider, BoardSidebarBtn, BoardSidebarIcon } from './BoardNav.styled'

const BoardControls = () => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <BoardWatcherBtn>
        <BoardWatcherIcon content="'\e969'" size="sm" />
        <span>Watching</span>
      </BoardWatcherBtn>
      <BoardNavDivider />
      <BoardSidebarBtn>
        <BoardSidebarIcon content="'\e952'" size="sm" />
        <span>Show menu</span>
      </BoardSidebarBtn>
    </div>
  )
}

export default BoardControls
