import React from 'react'
import { PropTypes } from '../../../types/prop-types'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

type TaskProps = {
  task: PropTypes.task
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
