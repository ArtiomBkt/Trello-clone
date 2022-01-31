import React from 'react'
import * as taskInterfaces from '../../../interfaces/task.interface'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

type TaskProps = {
  task: taskInterfaces.task
}

const TaskCommentBadge = ({ comments }: TaskProps['task']) => {
  if (!comments || !comments.length) return null
  return (
    <BadgeContainer>
      <BadgeIcon content="'\e91e'" size="sm" />
      <BadgeText>{comments?.length}</BadgeText>
    </BadgeContainer>
  )
}

export default TaskCommentBadge
