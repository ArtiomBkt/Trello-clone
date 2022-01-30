import React from 'react'
import * as boardInterfaces from '../../interfaces/board.interface'
import TaskPreview from '../task/TaskPreview'
import ListHeader from './header/ListHeader'
import { ListContentPreview, List, ListTasksWrapper, TaskComposerWrapper } from './ListPreview.styled'

type listProps = {
  list: boardInterfaces.list
}

const ListPreview = ({ list }: listProps) => {
  return (
    <ListContentPreview>
      <List>
        <ListHeader list={list} />
        <ListTasksWrapper>
          {list.tasks?.map(task => (
            <TaskPreview key={task.id} task={task} />
          ))}
        </ListTasksWrapper>
        <TaskComposerWrapper></TaskComposerWrapper>
      </List>
    </ListContentPreview>
  )
}

export default ListPreview
