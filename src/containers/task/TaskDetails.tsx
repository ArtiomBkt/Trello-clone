import React from 'react'
import { BoardTypes } from '../../types/board-types'
import LabelsPreview from '../../components/labels/LabelPreview'
import TaskChecklistBadge from '../../components/task/task-badges/TaskChecklistBadge'
import TaskTitle from '../../components/task/TaskTitle'
import TaskCommentBadge from '../../components/task/task-badges/TaskCommentBadge'
import TaskDescriptionBadge from '../../components/task/task-badges/TaskDescriptionBadge'
import TaskDates from '../../components/task/task-badges/TaskDateBadge'
import { TaskDetailsContainer } from './TaskDetails.styled'
import { BadgesWrapper } from '../../components/task/task-badges/TaskBadges.styled'

type taskCmps = {
  task: BoardTypes.task
  taskRef?: React.RefObject<HTMLDivElement>
}

const TaskBadges = ({ task }: taskCmps) => {
  if (!task.checklists && !task.comments && !task.description && !task.startDate) return null

  const props = { id: task?.id, title: task?.title }

  return (
    <BadgesWrapper isFullCover={task.style?.fullCover}>
      <TaskDates task={task} />
      <TaskDescriptionBadge description={task?.description} {...props} />
      <TaskCommentBadge comments={task?.comments} {...props} />
      <TaskChecklistBadge checklists={task?.checklists} {...props} />
    </BadgesWrapper>
  )
}

const TaskDetails = ({ taskRef, task }: taskCmps) => {
  return (
    <TaskDetailsContainer ref={taskRef} isFullCover={task.style?.fullCover}>
      {task.labels && !task.style?.fullCover && <LabelsPreview labels={task.labels} />}
      <TaskTitle task={task} />
      <TaskBadges task={task} />
    </TaskDetailsContainer>
  )
}

export default TaskDetails
