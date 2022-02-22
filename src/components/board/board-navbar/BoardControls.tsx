import React from 'react'
import { BoardWatcherBtn, BoardWatcherIcon, BoardNavDivider } from './BoardNav.styled'
import { PropTypes } from '../../../types/prop-types'

const BoardControls = ({ children }: PropTypes.ChildrenProp) => {
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
