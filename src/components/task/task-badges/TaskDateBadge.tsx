import React from 'react'
import { PropTypes } from '../../../types/prop-types'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

const formatDate = (timestamp: number): string => {
  let formattedDate = new Date(timestamp).toDateString().slice(4, 10)
  if (formattedDate[4] === '0') {
    return formattedDate.replace('0', '')
  }
  return formattedDate
}

const TaskDates = ({ task }: PropTypes.ContainersProps) => {
  if (!task || (!task.startDate?.timestamp && !task.dueDate?.timestamp)) return null

  return (
    <BadgeContainer isDateBadge>
      <BadgeIcon content="'\e91b'" size="sm" />
      <BadgeText>
        {task.startDate?.timestamp ? formatDate(task.startDate.timestamp) : null}
        {task.dueDate?.timestamp ? ` - ${formatDate(task.dueDate.timestamp)}` : null}
      </BadgeText>
    </BadgeContainer>
  )
}

export default TaskDates
