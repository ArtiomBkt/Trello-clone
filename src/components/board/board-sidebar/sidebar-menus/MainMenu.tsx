import React from 'react'
import { PropTypes } from '../../../../types/prop-types'
import { BoardTypes } from '../../../../types/board-types'
import TaskPreview from '../../../task/TaskPreview'

// TODO: check type of archived item and render accordingly

const MainMenu = ({ board }: PropTypes.SidebarMenusProps) => {
  return (
    <div>
      menu
      {board.archive.map(archiveItem => (
        <div key={archiveItem.item.id}>s</div>
      ))}
    </div>
  )
}

export default MainMenu
