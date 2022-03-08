import { CardDetailsAddItem, CardDetailsAddItemIcon, TaskDetailsLabel } from 'containers/task/TaskPage.styled'
import React from 'react'
import { BoardTypes } from 'types/board-types'

type Props = {
  children: React.ReactNode
  labels?: BoardTypes.label[]
}

const TaskPageLabels = ({ labels, children }: Props) => {
  return (
    <>
      {children}
      <div style={{ display: 'flex' }}>
        {labels &&
          labels.map(label => (
            <TaskDetailsLabel key={label.id} labelColor={label.color}>
              {label.title}
            </TaskDetailsLabel>
          ))}
        <CardDetailsAddItem>
          <CardDetailsAddItemIcon content="'\e901'" size="sm" />
        </CardDetailsAddItem>
      </div>
    </>
  )
}

export default TaskPageLabels
