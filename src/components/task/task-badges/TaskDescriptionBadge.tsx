import React from 'react'
import { PropTypes } from 'types/prop-types'
import { BadgeContainer, BadgeIcon } from './TaskBadges.styled'

const TaskDescriptionBadge = ({ description }: PropTypes.task) => {
  if (!description || !description.length) return null
  return (
    <BadgeContainer>
      <BadgeIcon content="'\e922'" size="sm" />
    </BadgeContainer>
  )
}

export default TaskDescriptionBadge
