import React, { useLayoutEffect, useRef } from 'react'
import { PropTypes } from 'types/prop-types'

import { TaskDetailsContainer, TaskMembersContainer } from './TaskDetails.styled'
import { BadgesWrapper } from 'components/task/task-badges/TaskBadges.styled'
import { EditorTaskTextarea } from 'containers/modals/task/QuickEdit.styled'

import LabelsPreview from 'components/labels/LabelPreview'
import TaskChecklistBadge from 'components/task/task-badges/TaskChecklistBadge'
import TaskTitle from 'components/task/TaskTitle'
import TaskCommentBadge from 'components/task/task-badges/TaskCommentBadge'
import TaskDescriptionBadge from 'components/task/task-badges/TaskDescriptionBadge'
import TaskDates from 'components/task/task-badges/TaskDateBadge'
import MemberProfile from 'components/member/MemberProfile'

const TaskBadges = ({ task, isQuickEditOpen, handleTaskDueToggle }: PropTypes.TaskCmps) => {
  if (!task.checklists && !task.comments && !task.description && !task.startDate) return null

  const isFullCover: boolean = task.style.fullCover && !isQuickEditOpen
  const props = { id: task.id, title: task.title, style: task.style }

  return (
    <BadgesWrapper isFullCover={isFullCover}>
      <TaskDates handleTaskDueToggle={handleTaskDueToggle} task={task} />
      <TaskDescriptionBadge description={task.description} {...props} />
      <TaskCommentBadge comments={task.comments} {...props} />
      <TaskChecklistBadge checklists={task.checklists} {...props} />
    </BadgesWrapper>
  )
}

const TaskMembers = ({ task, members }: PropTypes.MemberProps) => {
  return <TaskMembersContainer isFullCover={task.style?.fullCover}>{members?.map(member => MemberProfile(member))}</TaskMembersContainer>
}

const TaskDetails = ({ taskTitle, taskRef, task, isQuickEditOpen, handleTaskDueToggle, handleTaskTitleChange }: PropTypes.TaskCmps) => {
  const taskTitleRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (taskTitleRef.current && isQuickEditOpen) {
      return taskTitleRef.current.select()
    }
  }, [isQuickEditOpen])

  const handleTextareaFocus = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    ev.target === taskTitleRef.current && taskTitleRef.current.focus()
  }

  // TODO: Quick edit text area does not respond to click, clicking anywhere outside of it triggers task page

  return (
    <TaskDetailsContainer ref={taskRef} isFullCover={task.style?.fullCover}>
      {!isQuickEditOpen ? (
        <>
          {task.labels && !task.style?.fullCover && <LabelsPreview labels={task.labels} />}
          <TaskTitle task={task} />
        </>
      ) : (
        <>
          {task.labels && <LabelsPreview isQuickEditOpen={isQuickEditOpen} labels={task.labels} />}
          <EditorTaskTextarea ref={taskTitleRef} onClick={handleTextareaFocus} onKeyUp={handleTaskTitleChange} onChange={handleTaskTitleChange} value={taskTitle} />
        </>
      )}
      <TaskBadges isQuickEditOpen={isQuickEditOpen} handleTaskDueToggle={handleTaskDueToggle} task={task} />
      {task.members!.length > 0 && <TaskMembers task={task} members={task.members} />}
    </TaskDetailsContainer>
  )
}

export default TaskDetails
