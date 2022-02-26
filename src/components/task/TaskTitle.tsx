import React from 'react'
import { PropTypes } from '../../types/prop-types'
import { TaskTitleContainer } from './TaskTitle.styled'

const TaskTitle = ({ task }: PropTypes.ContainersProps) => {
  if (!task) {
    return null
  }

  return <TaskTitleContainer isFullCover={task.style?.fullCover}>{task.title}</TaskTitleContainer>
}

export default TaskTitle
