import React from 'react'
import { PropTypes } from '../../../../types/prop-types'
import TaskDetails from '../../../../containers/task/TaskDetails'

// TODO: Everything here will move to ArchiveMenu component
// TODO: On removal of arcived item, prompt for confirmation
const MainMenu = ({ board, onArchiveItemRemove, onUnarchiveItem }: PropTypes.SidebarMenusProps) => {
  return (
    <div>
      menu
      {board.archive.map(archiveItem => (
        <div key={archiveItem.item.id}>
          <TaskDetails task={archiveItem.item} />
          <button onClick={() => onUnarchiveItem!(archiveItem)}>Send to board</button>
          <button onClick={() => onArchiveItemRemove!(archiveItem)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default MainMenu
