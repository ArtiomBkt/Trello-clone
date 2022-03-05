import React from 'react'
import { PropTypes } from 'types/prop-types'
import { BadgeContainer, BadgeIcon, BadgeText, BadgeDueUnchecked, BadgeDueChecked } from './TaskBadges.styled'

const formatDate = (timestamp: number): string => {
  let formattedDate = new Date(timestamp).toDateString().slice(4, 10)
  if (formattedDate[4] === '0') {
    return formattedDate.replace('0', '')
  }
  return formattedDate
}

const TaskDates = ({ task, handleTaskDueToggle }: PropTypes.TaskCmps) => {
  const calcDueDate = () => {
    if (!task.dueDate?.timestamp) {
      return
    }
    if (task.dueDate?.timestamp - Date.now() <= 0) {
      return 'overdue'
    }
    if (task.dueDate?.timestamp - Date.now() < 125861050) {
      return 'duesoon'
    }
  }

  const DisplayDates = (): React.ReactNode => {
    if (task.startDate?.timestamp && !task.dueDate?.timestamp) {
      return formatDate(task.startDate.timestamp)
    } else if (!task.startDate?.timestamp && task.dueDate?.timestamp) {
      return formatDate(task.dueDate.timestamp)
    } else if (task.startDate?.timestamp && task.dueDate?.timestamp) {
      return `${formatDate(task.startDate.timestamp)} - ${formatDate(task.dueDate.timestamp)}`
    }
  }

  if (!task.startDate?.timestamp && !task.dueDate?.timestamp) return null
  return (
    <BadgeContainer onClick={handleTaskDueToggle} dueStatus={calcDueDate()} isDone={task.dueDate?.isDone} isDateBadge>
      <BadgeDueUnchecked content="'\e919'" size="sm" />
      <BadgeDueChecked content="'\e918'" size="sm" />
      <BadgeIcon content="'\e91b'" size="sm" />
      <BadgeText>{DisplayDates()}</BadgeText>
    </BadgeContainer>
  )
}

export default TaskDates
