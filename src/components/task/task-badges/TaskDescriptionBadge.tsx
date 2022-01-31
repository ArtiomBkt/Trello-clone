import React from 'react'
import * as taskInterfaces from '../../../interfaces/task.interface'
import { BadgeContainer, BadgeIcon } from './TaskBadges.styled'

type TaskProps = {
  task: taskInterfaces.task
}

const TaskDescriptionBadge = ({ description }: TaskProps['task']) => {
  if (!description || !description.length) return null
  return (
    <BadgeContainer>
      <BadgeIcon content="'\e922'" size="sm" />
    </BadgeContainer>
  )
}

export default TaskDescriptionBadge
