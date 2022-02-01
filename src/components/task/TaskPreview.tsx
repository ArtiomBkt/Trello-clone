import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskDetails from '../../containers/task/TaskDetails'
import * as taskInterfaces from '../../interfaces/task.interface'
import LabelPreview from '../labels/LabelPreview'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'

type TaskProps = {
  task: taskInterfaces.task
  idx: number
  isDraggingOver: boolean
}

const TaskPreview = ({ task, idx, isDraggingOver }: TaskProps) => {
  return (
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
