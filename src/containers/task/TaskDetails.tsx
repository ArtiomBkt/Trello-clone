import React from 'react'
import LabelsPreview from '../../components/labels/LabelPreview'
import TaskChecklistBadge from '../../components/task/task-badges/TaskChecklistBadge'
import TaskTitle from '../../components/task/TaskTitle'
import * as taskInterfaces from '../../interfaces/task.interface'
import { TaskDetailsContainer } from './TaskDetails.styled'
import { BadgesWrapper } from '../../components/task/task-badges/TaskBadges.styled'
import TaskCommentBadge from '../../components/task/task-badges/TaskCommentBadge'
import TaskDescriptionBadge from '../../components/task/task-badges/TaskDescriptionBadge'
import TaskDates from '../../components/task/task-badges/TaskDateBadge'

type TaskProps = {
  task: taskInterfaces.task
}

const TaskBadges = ({ task }: TaskProps) => {
  if (!task.checklists && !task.comments && !task.description && !task.startDate) return null

  const props = { id: task?.id, title: task?.title }

  return (
    <BadgesWrapper>
      <TaskDates task={task} />
      <TaskDescriptionBadge description={task?.description} {...props} />
      <TaskCommentBadge comments={task?.comments} {...props} />
      <TaskChecklistBadge checklists={task?.checklists} {...props} />
    </BadgesWrapper>
  )
}

const TaskDetails = ({ task }: TaskProps) => {
  return (
    <TaskDetailsContainer isFullCover={task.style?.fullCover}>
      {task.labels && !task.style?.fullCover && <LabelsPreview labels={task.labels} />}
      <TaskTitle task={task} />
      <TaskBadges task={task} />
    </TaskDetailsContainer>
  )
}

export default TaskDetails
