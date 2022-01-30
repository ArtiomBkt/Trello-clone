import React from 'react'
import TaskDetails from '../../containers/task/TaskDetails'
import * as taskInterfaces from '../../interfaces/task.interface'
import LabelPreview from '../labels/LabelPreview'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'

type taskProps = {
  task: taskInterfaces.task
}

const TaskPreview = ({ task }: taskProps) => {
  return (
    <TaskPreviewContainer taskStyle={task.style} to={`/${task.id}`}>
      {!task.style?.fullCover && task.style?.background && <TaskCover taskStyle={task.style} />}
      <TaskEditIcon content="'\e928'" size="sm" />
      <TaskDetails task={task} />
        {/* {task.title}
        <div style={{ background: task.style?.background }}></div>
        {task.labels?.map(label => (
          <LabelPreview key={label.color} label={label} />
        ))} */}
    </TaskPreviewContainer>
  )
}

export default TaskPreview
