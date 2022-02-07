import React from 'react'
import { PropTypes } from '../../../types/prop-types'
import { BadgeContainer, BadgeIcon } from './TaskBadges.styled'

type TaskProps = {
  task: PropTypes.task
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
