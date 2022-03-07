import TaskPageMembers from 'components/task/task-page/TaskPageMembers'
import React from 'react'
import { BoardTypes } from 'types/board-types'
import { CardDetailsData, CardDetailsItem } from './TaskPage.styled'

type Props = {
  task: BoardTypes.task
}

const TaskPageDetails = ({ task }: Props) => {
  return (
    <CardDetailsData>
      <CardDetailsItem>
        <TaskPageMembers members={task.members}>
          <h3>Members</h3>
        </TaskPageMembers>
      </CardDetailsItem>
      <CardDetailsItem>
        <h3>Labels</h3>
      </CardDetailsItem>
      <CardDetailsItem>
        <h3>Start date</h3>
      </CardDetailsItem>
      <CardDetailsItem>
        <h3>Due date</h3>
      </CardDetailsItem>
    </CardDetailsData>
  )
}

export default TaskPageDetails
