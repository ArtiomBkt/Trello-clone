import React, { useEffect, useRef, useState } from 'react'
import { TaskQuickEditorControls, TaskQuickEditorControlBtn, QuickEditorTaskLink, EditorControlBtnIcon, EditorControlText } from './QuickEdit.styled'
import { PropTypes } from '../../../types/prop-types'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import BadgesModal from './badges/BadgesModal'
import LabelsModal from './badges/labels/LabelsModal'
import DatesModal from './badges/dates/DatesModal'
import MemberModal from './badges/members/MemberModal'
import CoverModal from './cover-color/CoverModal'

const QuickEditControls = ({
  handleBadgeModalToggle,
  handleTaskLabelChange,
  handleTaskMemberToggle,
  handleTaskStyleChange,
  handleTaskArchive,
  onLabelsUpdate,
  task
}: PropTypes.QuickEditorProps) => {
  const [quickControls] = useState([
    { title: 'Edit labels', type: 'labels', icon: `'\\e93f'` },
    { title: 'Change members', type: 'members', icon: `'\\e946'` },
    { title: 'Change Cover', type: 'cover', icon: `'\\e914'` },
    { title: 'Edit dates', type: 'dates', icon: `'\\e91b'` }
  ])
  const [currModal, setCurrModal] = useState<string | undefined>(undefined)
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 })
  const modalNameRef = useRef<string | undefined>(undefined)
  const modalWrapperRef = useRef<HTMLDivElement>(null)
  const outsideAlerter = useOutsideAlerter(modalWrapperRef)

  useEffect(() => {
    if (outsideAlerter) {
      setCurrModal(undefined)
    }
  }, [outsideAlerter])

  const toggleCurrModal = (ev: React.MouseEvent) => {
    const modalName = ev.currentTarget.getAttribute('data-type')

    if (!modalName || modalName === modalNameRef.current) {
      modalNameRef.current = undefined
      setCurrModal(undefined)
      return handleBadgeModalToggle!(ev)
    }

    const { y: top, x: left, height } = ev.currentTarget.getBoundingClientRect()
    setModalPos({ top: top + height + 5, left })

    modalNameRef.current = modalName
    setCurrModal(modalName!)
    handleBadgeModalToggle!(ev)
  }

  const handleOutsideWrapperClick = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    ev.target === modalWrapperRef.current && toggleCurrModal(ev)
  }

  const getModalChild = () => {
    switch (currModal) {
      case 'labels':
        return <LabelsModal onLabelsUpdate={onLabelsUpdate} task={task} handleTaskLabelChange={handleTaskLabelChange} />
      case 'members':
        return <MemberModal handleTaskMemberToggle={handleTaskMemberToggle} task={task} />
      case 'cover':
        return <CoverModal handleTaskStyleChange={handleTaskStyleChange} task={task} />
      case 'dates':
        // TODO: add calendar and handle dates
        return <DatesModal task={task} />
      default:
        return
    }
  }

  return (
    <TaskQuickEditorControls>
      <QuickEditorTaskLink to={`t/${task.id}`}>
        <EditorControlBtnIcon content="'\e912'" size="sm" />
        <EditorControlText>Open card</EditorControlText>
      </QuickEditorTaskLink>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn data-type={control.type} onClick={toggleCurrModal} key={control.icon}>
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
      <TaskQuickEditorControlBtn onClick={ev => handleTaskArchive!(ev, task)}>
        <EditorControlBtnIcon content="'\e907'" size="sm" />
        <EditorControlText>Archive</EditorControlText>
      </TaskQuickEditorControlBtn>
      <BadgesModal modalWrapperRef={modalWrapperRef} onWrapperClick={handleOutsideWrapperClick} modalPos={modalPos} title={currModal!} onClose={toggleCurrModal}>
        {getModalChild()}
      </BadgesModal>
    </TaskQuickEditorControls>
  )
}

export default QuickEditControls
