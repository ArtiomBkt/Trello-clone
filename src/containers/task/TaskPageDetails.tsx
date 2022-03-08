import React, { useRef, useState } from 'react'
import {
  CardDetailsAddItem,
  CardDetailsAddItemIcon,
  CardDetailsData,
  CardDetailsItem,
  TaskDatePickerBtn,
  TaskDatesBox,
  TaskDetailsDates,
  TaskDetailsLabel
} from './TaskPage.styled'

import { BoardTypes } from 'types/board-types'

import { ArrowIcon } from 'components/app-header/links/NavLink.styled'
import { BadgeContainer } from 'components/task/task-badges/TaskBadges.styled'
import { ReactComponent as DownArrowSvg } from 'assets/images/arrow-down.svg'

import { formatDate } from 'components/task/task-badges/TaskDateBadge'
import MemberProfile from 'components/member/MemberProfile'
import BadgesModal from 'containers/modals/task/badges/BadgesModal'
import DatesModal from 'containers/modals/task/badges/dates/DatesModal'
import LabelsModal from 'containers/modals/task/badges/labels/LabelsModal'
import MemberModal from 'containers/modals/task/badges/members/MemberModal'
import CoverModal from 'containers/modals/task/cover-color/CoverModal'

type Props = {
  task: BoardTypes.task
}

type ModalState = {
  isEdit: boolean
  modal: string | null
  position: { top: number; left: number }
}

const initialState: ModalState = {
  isEdit: false,
  modal: null,
  position: { top: 0, left: 0 }
}

type ModalProps = Props & {
  modal: ModalState['modal']
}

const ModalChild = ({ modal, task }: ModalProps) => {
  switch (modal) {
    case 'labels':
      //  onLabelsUpdate={onLabelsUpdate} handleTaskLabelChange={handleTaskLabelChange}
      return <LabelsModal task={task} />
    case 'members':
      // handleTaskMemberToggle={handleTaskMemberToggle}
      return <MemberModal task={task} />
    case 'cover':
      // handleTaskStyleChange={handleTaskStyleChange}
      return <CoverModal task={task} />
    case 'dates':
      // TODO: add calendar and handle dates
      return <DatesModal task={task} />
    default:
      return <div>fail</div>
  }
}

const formatTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const getDueStatus = (timestamp: number) => {
  if (!timestamp) {
    return
  }
  if (timestamp - Date.now() <= 0) {
    return 'overdue'
  }
  if (timestamp - Date.now() < 125861050) {
    return 'duesoon'
  }
}

const TaskPageDetails = ({ task }: Props) => {
  const [{ isEdit, modal, position }, setEditMode] = useState<ModalState>(initialState)
  const modalWrapperRef = useRef<HTMLDivElement>(null)

  // useLayoutEffect(() => {})

  const openModal = (ev: React.MouseEvent) => {
    const { x, y, height } = ev.currentTarget.getBoundingClientRect()
    const modal = ev.currentTarget.getAttribute('data-modhandler')

    modal && setEditMode({ position: { top: y + height + 5, left: x }, isEdit: true, modal })
  }

  const closeModal = (ev: React.MouseEvent) => {
    console.log(ev)
    // setEditMode(initialState)
  }

  const handleOutsideWrapperClick = (ev: React.MouseEvent) => {
    console.log(ev)
  }

  // TODO: Shrink this cmp down and reuse

  return (
    <>
      <CardDetailsData>
        <CardDetailsItem>
          <h3>Members</h3>
          <div style={{ display: 'flex' }}>
            {task.members && task.members.map(member => MemberProfile(member, '32'))}
            <CardDetailsAddItem style={{ borderRadius: '100%', marginLeft: '4px' }}>
              <CardDetailsAddItemIcon data-modhandler="members" onClick={openModal} content="'\e901'" size="sm" />
            </CardDetailsAddItem>
          </div>
        </CardDetailsItem>
        <CardDetailsItem>
          <h3>Labels</h3>
          <div style={{ display: 'flex' }}>
            {task.labels &&
              task.labels.map(label => (
                <TaskDetailsLabel key={label.id} labelColor={label.color}>
                  {label.title}
                </TaskDetailsLabel>
              ))}
            <CardDetailsAddItem>
              <CardDetailsAddItemIcon data-modhandler="labels" onClick={openModal} content="'\e901'" size="sm" />
            </CardDetailsAddItem>
          </div>
        </CardDetailsItem>
        {task.startDate?.timestamp && (
          <CardDetailsItem>
            <h3>Start date</h3>
            <TaskDetailsDates>
              <TaskDatesBox isDone={task.startDate.isDone}>
                <span />
              </TaskDatesBox>
              <TaskDatePickerBtn>
                <span>
                  {formatDate(task.startDate.timestamp)} at {formatTime(task.startDate.timestamp)}
                </span>
                <BadgeContainer
                  style={{ color: '#fff', fontSize: '12px', lineHeight: '16px', padding: '0 4px', margin: 'auto 0 auto 8px', borderRadius: '2px', minHeight: 'initial' }}
                  dueStatus={getDueStatus(task.startDate.timestamp)}
                  isDone={task.startDate.isDone}
                  isDateBadge
                >
                  {task.startDate.isDone ? 'complete' : getDueStatus(task.startDate.timestamp)}
                </BadgeContainer>
                <span style={{ marginLeft: '4px', display: 'inline-block', lineHeight: 1 }}>
                  <ArrowIcon style={{ color: 'rgb(66, 82, 110)' }}>
                    <DownArrowSvg />
                  </ArrowIcon>
                </span>
              </TaskDatePickerBtn>
            </TaskDetailsDates>
          </CardDetailsItem>
        )}
        {task.dueDate?.timestamp && (
          <CardDetailsItem>
            <h3>Due date</h3>
            <TaskDetailsDates>
              <TaskDatesBox isDone={task.dueDate.isDone}>
                <span />
              </TaskDatesBox>
              <TaskDatePickerBtn>
                <span>
                  {formatDate(task.dueDate.timestamp)} at {formatTime(task.dueDate.timestamp)}
                </span>
                <BadgeContainer
                  style={{ color: '#fff', fontSize: '12px', lineHeight: '16px', padding: '0 4px', margin: 'auto 0 auto 8px', borderRadius: '2px', minHeight: 'initial' }}
                  dueStatus={getDueStatus(task.dueDate.timestamp)}
                  isDone={task.dueDate.isDone}
                  isDateBadge
                >
                  {task.dueDate.isDone ? 'complete' : getDueStatus(task.dueDate.timestamp)}
                </BadgeContainer>
                <span style={{ marginLeft: '4px', display: 'inline-block', lineHeight: 1 }}>
                  <ArrowIcon style={{ color: 'rgb(66, 82, 110)' }}>
                    <DownArrowSvg />
                  </ArrowIcon>
                </span>
              </TaskDatePickerBtn>
            </TaskDetailsDates>
          </CardDetailsItem>
        )}
        {/* // TODO: Description, Checklists, Activity, Comments go here */}
        {/* // TODO: Rewrite the logic and break down this component */}
      </CardDetailsData>
      {isEdit && (
        <BadgesModal
          modalPos={position}
          modalWrapperRef={modalWrapperRef}
          onClose={closeModal}
          onWrapperClick={handleOutsideWrapperClick}
          rootEl={'task-details-root'}
          title={modal!}
        >
          <ModalChild modal={modal!} task={task} />
        </BadgesModal>
      )}
    </>
  )
}

export default TaskPageDetails
