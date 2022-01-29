import React from 'react'
import * as boardInterfaces from '../../interfaces/board.interface'
import TaskPreview from '../task/TaskPreview'
import { ListContentPreview } from './ListPreview.styled'

type listProps = {
  list: boardInterfaces.list
}

const ListPreview = ({ list }: listProps) => {
  return (
    <ListContentPreview>
      <div>
        {list.title} | {list.id}
      </div>
      {list.tasks?.map(task => (
        <TaskPreview key={task.id} task={task} />
      ))}
    </ListContentPreview>
  )
}

export default ListPreview
