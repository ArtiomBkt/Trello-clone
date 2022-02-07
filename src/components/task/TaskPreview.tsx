import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import TaskDetails from '../../containers/task/TaskDetails'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'

const TaskPreview = ({ task, idx, isDraggingOver }: PropTypes.TaskPreviewProps) => {
  return (
    // TODO: add dnd ui
    <Draggable draggableId={task.id} index={idx}>
      {provided => (
        <>
          <TaskPreviewContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} taskStyle={task?.style} to={`/${task?.id}`}>
            {!task?.style?.fullCover && task?.style?.background && <TaskCover taskStyle={task.style} />}
            <TaskEditIcon content="'\e928'" size="sm" />
            <TaskDetails task={task} />
          </TaskPreviewContainer>
        </>
      )}
    </Draggable>
  )
}

export default TaskPreview
