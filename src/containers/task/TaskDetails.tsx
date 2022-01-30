import React from 'react'
import LabelsPreview from '../../components/labels/LabelPreview'
import TaskTitle from '../../components/task/TaskTitle'
import * as taskInterfaces from '../../interfaces/task.interface'
import { TaskDetailsContainer } from './TaskDetails.styled'

type taskProps = {
  task: taskInterfaces.task
}

const TaskDetails = ({ task }: taskProps) => {
  return (
    <TaskDetailsContainer>
      {task.labels && <LabelsPreview labels={task.labels} />}
      <TaskTitle task={task} />
    </TaskDetailsContainer>
  )
}

export default TaskDetails
