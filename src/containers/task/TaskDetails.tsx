import React, { useLayoutEffect, useRef } from 'react'
import { BoardTypes } from '../../types/board-types'
import LabelsPreview from '../../components/labels/LabelPreview'
import TaskChecklistBadge from '../../components/task/task-badges/TaskChecklistBadge'
import TaskTitle from '../../components/task/TaskTitle'
import TaskCommentBadge from '../../components/task/task-badges/TaskCommentBadge'
import TaskDescriptionBadge from '../../components/task/task-badges/TaskDescriptionBadge'
import TaskDates from '../../components/task/task-badges/TaskDateBadge'
import { TaskDetailsContainer } from './TaskDetails.styled'
import { BadgesWrapper } from '../../components/task/task-badges/TaskBadges.styled'
import { EditorTaskTextarea } from '../modals/task/QuickEdit.styled'

type taskCmps = {
  task: BoardTypes.task
  taskRef?: React.RefObject<HTMLDivElement>
  isQuickEditOpen?: boolean
  handleTaskTitleChange?: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void
  taskTitle?: string
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

const TaskDetails = ({ taskTitle, handleTaskTitleChange, taskRef, task, isQuickEditOpen }: taskCmps) => {
  const taskTitleRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (taskTitleRef.current && isQuickEditOpen) {
      taskTitleRef.current.select()
    }
  }, [isQuickEditOpen])

  return (
    <TaskDetailsContainer ref={taskRef} isFullCover={task.style?.fullCover}>
      {task.labels && !task.style?.fullCover && <LabelsPreview labels={task.labels} />}
      {!isQuickEditOpen ? <TaskTitle task={task} /> : <EditorTaskTextarea ref={taskTitleRef} onChange={handleTaskTitleChange} value={taskTitle} />}
      <TaskBadges task={task} />
    </TaskDetailsContainer>
  )
}

export default TaskDetails
