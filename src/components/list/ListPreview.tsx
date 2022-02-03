import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import * as boardInterfaces from '../../interfaces/board.interface'
import TaskPreview from '../task/TaskPreview'
import ListHeader from './header/ListHeader'
import TaskComposer from './task-composer/TaskComposer'
import { ListContentPreview, List, ListTasksWrapper } from './ListPreview.styled'

type listProps = {
  list: boardInterfaces.list
  idx: number
  isDraggingOver: boolean
  placeholder: any
}

const ListPreview = ({ list, idx, isDraggingOver, placeholder }: listProps) => {
  return (
    // TODO: add dnd ui
    <Draggable draggableId={list.id} index={idx}>
      {(provided, snapshot) => (
        <ListContentPreview {...provided.draggableProps} ref={provided.innerRef}>
          <List isDraggingOver={isDraggingOver} isDragging={snapshot.isDragging}>
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
            <TaskComposer />
          </List>
        </ListContentPreview>
      )}
    </Draggable>
  )
}

export default ListPreview

// {/* <TaskComposerWrapper>// TODO: add task compose functionality</TaskComposerWrapper> */}