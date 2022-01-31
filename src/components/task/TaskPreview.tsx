import React from 'react'
import TaskDetails from '../../containers/task/TaskDetails'
import * as taskInterfaces from '../../interfaces/task.interface'
import LabelPreview from '../labels/LabelPreview'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'

type TaskProps = {
  task: taskInterfaces.task
}

const TaskPreview = ({ task }: TaskProps) => {
  return (
    <TaskPreviewContainer taskStyle={task?.style} to={`/${task?.id}`}>
      {!task?.style?.fullCover && task?.style?.background && <TaskCover taskStyle={task.style} />}
      <TaskEditIcon content="'\e928'" size="sm" />
      <TaskDetails task={task} />
    </TaskPreviewContainer>
  )
}

export default TaskPreview
