import React from 'react'
import * as taskInterfaces from '../../interfaces/task.interface'
import TaskPreviewContainer from './TaskPreview.styled'

interface taskProps {
  task: taskInterfaces.task
}

const TaskPreview = ({ task }: taskProps) => {
  return (
    <TaskPreviewContainer>
      {task.title}
    </TaskPreviewContainer>
  )
}

export default TaskPreview
