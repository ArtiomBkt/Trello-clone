import React from 'react'
import * as taskInterfaces from '../../../interfaces/task.interface'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

type TaskProps = {
  task: taskInterfaces.task
}

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toDateString().slice(4, 10)
}

const TaskDates = ({ task }: TaskProps) => {
  if (!task.startDate && !task.dueDate) return null

  return (
    <BadgeContainer isDateBadge>
      <BadgeIcon content="'\e91b'" size="sm" />
      <BadgeText>
        {task.startDate ? formatDate(task.startDate.timestamp) : null}
        {task.dueDate ? ` - ${formatDate(task.dueDate.timestamp)}` : null}
      </BadgeText>
    </BadgeContainer>
  )
}

export default TaskDates
