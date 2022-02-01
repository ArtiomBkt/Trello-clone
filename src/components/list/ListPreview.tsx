import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
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
    <Draggable draggableId={list.id} index={idx}>
      {provided => (
        <ListContentPreview {...provided.draggableProps} ref={provided.innerRef}>
          <List>
            <ListHeader dragHandleProps={provided.dragHandleProps} list={list} />
            <Droppable droppableId={list.id} type="TASK">
              {(provided, { isDraggingOver }) => (
                <>
                  <ListTasksWrapper {...provided.droppableProps} ref={provided.innerRef}>
                    {list.tasks?.map((task, idx) => (
                      <TaskPreview isDraggingOver={isDraggingOver} key={task.id} task={task} idx={idx} />
                    ))}
                    {provided.placeholder}
                  </ListTasksWrapper>
                </>
              )}
            </Droppable>
          </List>
          <TaskComposerWrapper></TaskComposerWrapper>
        </ListContentPreview>
      )}
    </Draggable>
  )
}

export default ListPreview
