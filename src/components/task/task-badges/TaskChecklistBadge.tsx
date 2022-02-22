import React from 'react'
import { PropTypes } from '../../../types/prop-types'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

const TaskChecklistBadge = ({ checklists }: PropTypes.task) => {
  let count = 0

  if (!checklists || !checklists.length) return null
  return (
    <BadgeContainer>
      <BadgeIcon content="'\e91a'" size="sm" />
      <BadgeText>
        {checklists.map(checklist => {
          checklist.todos?.map(todo => (todo.isDone ? count++ : null))
          return `${count}/${checklist.todos?.length}`
        })}
      </BadgeText>
    </BadgeContainer>
  )
}

export default TaskChecklistBadge
