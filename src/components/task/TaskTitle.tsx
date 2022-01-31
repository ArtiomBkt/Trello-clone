import React from 'react'
import { task } from '../../interfaces/task.interface'
import { TaskTitleContainer } from './TaskTitle.styled'

type TaskProps = {
  task: task
}

const TaskTitle = ({ task }: TaskProps) => {
  return (
    <TaskTitleContainer isFullCover={task.style?.fullCover}>
      {task.title}
    </TaskTitleContainer>
  )
}

export default TaskTitle
