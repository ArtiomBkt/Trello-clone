import React from 'react'
import { BoardWatcherBtn, BoardWatcherIcon, BoardNavDivider } from './BoardNav.styled'

type BoardControlsProps = {
  children: React.ReactNode
}

const BoardControls = ({ children }: BoardControlsProps) => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <BoardWatcherBtn>
        <BoardWatcherIcon content="'\e969'" size="sm" />
        <span>Watching</span>
      </BoardWatcherBtn>
      <BoardNavDivider />
      {children}
    </div>
  )
}

export default BoardControls
