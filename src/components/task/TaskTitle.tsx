import React from 'react'
import { PropTypes } from '../../types/prop-types'
import { TaskTitleContainer } from './TaskTitle.styled'

type TaskProps = {
  task: PropTypes.task
}

const TaskTitle = ({ task }: TaskProps) => {
  return (
    <TaskTitleContainer isFullCover={task.style?.fullCover}>
      {task.title}
    </TaskTitleContainer>
  )
}

export default TaskTitle
