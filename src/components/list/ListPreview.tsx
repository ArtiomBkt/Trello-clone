import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import * as boardInterfaces from '../../interfaces/board.interface'
import TaskPreview from '../task/TaskPreview'
import ListHeader from './header/ListHeader'
import { ListContentPreview, List, ListTasksWrapper, TaskComposerWrapper } from './ListPreview.styled'

type listProps = {
  list: boardInterfaces.list
  idx: number
}

const ListPreview = ({ list, idx }: listProps) => {
  return (
    <Draggable key={list.id} draggableId={list.id} index={idx}>
      {(provided, snapshot) => (
        <ListContentPreview {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
      )}
    </Draggable>
  )
}

export default ListPreview
