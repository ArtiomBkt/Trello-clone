import React from 'react'
import * as taskInterfaces from '../../interfaces/task.interface'
import LabelPreview from '../labels/LabelPreview'
import TaskPreviewContainer from './TaskPreview.styled'

interface taskProps {
  task: taskInterfaces.task
}

const TaskPreview = ({ task }: taskProps) => {
  return (
    <TaskPreviewContainer>
      {task.title}
      <div style={{background: task.style?.background}}></div>
      {task.labels?.map(label => (
        <LabelPreview key={label.color} label={label} />
      ))}
    </TaskPreviewContainer>
  )
}

export default TaskPreview
