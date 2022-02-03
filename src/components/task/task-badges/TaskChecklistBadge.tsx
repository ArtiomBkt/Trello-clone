import React from 'react'
import * as taskInterfaces from '../../../interfaces/task.interface'
import { checklist } from '../../../interfaces/board.interface'
import { BadgeContainer, BadgeIcon, BadgeText } from './TaskBadges.styled'

type TaskProps = {
  task: taskInterfaces.task
}

const TaskChecklistBadge = ({ checklists }: TaskProps['task']) => {
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
