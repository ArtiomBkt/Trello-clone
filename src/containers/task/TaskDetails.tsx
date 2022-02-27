import React, { useLayoutEffect, useRef } from 'react'
import { PropTypes } from '../../types/prop-types'

import { TaskDetailsContainer } from './TaskDetails.styled'
import { BadgesWrapper } from '../../components/task/task-badges/TaskBadges.styled'
import { EditorTaskTextarea } from '../modals/task/QuickEdit.styled'

import LabelsPreview from '../../components/labels/LabelPreview'
import TaskChecklistBadge from '../../components/task/task-badges/TaskChecklistBadge'
import TaskTitle from '../../components/task/TaskTitle'
import TaskCommentBadge from '../../components/task/task-badges/TaskCommentBadge'
import TaskDescriptionBadge from '../../components/task/task-badges/TaskDescriptionBadge'
import TaskDates from '../../components/task/task-badges/TaskDateBadge'

const TaskBadges = ({ task, handleTaskDueToggle }: PropTypes.TaskCmps) => {
  if (!task.checklists && !task.comments && !task.description && !task.startDate) return null

  const props = { id: task?.id, title: task?.title }

  return (
    <BadgesWrapper isFullCover={task.style?.fullCover}>
      <TaskDates handleTaskDueToggle={handleTaskDueToggle} task={task} />
      <TaskDescriptionBadge description={task?.description} {...props} />
      <TaskCommentBadge comments={task?.comments} {...props} />
      <TaskChecklistBadge checklists={task?.checklists} {...props} />
    </BadgesWrapper>
  )
}

const TaskDetails = ({ taskTitle, taskRef, task, isQuickEditOpen, handleTaskDueToggle, handleTaskTitleChange }: PropTypes.TaskCmps) => {
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
      <TaskBadges handleTaskDueToggle={handleTaskDueToggle} task={task} />
    </TaskDetailsContainer>
  )
}

export default TaskDetails
