import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  QuickEditContainer,
  QuickEditCloseBtn,
  TaskQuickEditorWrapper,
  TaskQuickEditor,
  TaskQuickEditorSave,
  TaskQuickEditorControls,
  TaskQuickEditorControlBtn,
  EditorControlBtnIcon,
  EditorControlText
} from './QuickEdit.styled'
import BadgesModal from './badges/BadgesModal'
import LabelsModal from './badges/labels/LabelsModal'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import { PropTypes } from '../../../types/prop-types'

type QuickEditorProps = {
  children?: React.ReactNode
  modalPos?: { top: number; left: number }
  task: PropTypes.task
  handleTaskLabelChange: (label: PropTypes.label) => void
  onChangeSubmit?: (ev: React.MouseEvent) => void
  onClose?: (ev?: React.MouseEvent) => void
}

const QuickEditControls = ({ handleTaskLabelChange, task }: QuickEditorProps) => {
  const [quickControls] = useState([
    { title: 'Open card', type: 'openCard', icon: `'\\e912'`, href: `/${task.id}` },
    { title: 'Edit labels', type: 'labels', icon: `'\\e93f'` },
    { title: 'Change members', type: 'members', icon: `'\\e946'` },
    { title: 'Edit dates', type: 'dates', icon: `'\\e91b'` }
  ])
  const [badgeModal, setBadgeModal] = useState<string | null>(null)
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 })
  const modalWrapperRef = useRef<HTMLDivElement>(null)
  const outsideAlerter = useOutsideAlerter(modalWrapperRef)

  const toggleBadgeModal = useCallback(
    (modalName?: string, ev?: React.MouseEvent) => {
      if (typeof modalName !== 'string' || modalName === badgeModal) {
        return setBadgeModal(null)
      }
      if (ev && modalName) {
        const { y: top, x: left, height } = ev.currentTarget.getBoundingClientRect()
        setModalPos({ top: top + height + 5, left })
        setBadgeModal(modalName)
      }
    },
    [badgeModal]
  )

  useLayoutEffect(() => {
    if (outsideAlerter) {
      setBadgeModal(null)
    }
  }, [outsideAlerter])

  const getModalChild = () => {
    switch (badgeModal) {
      case 'labels':
        return <LabelsModal task={task} handleTaskLabelChange={handleTaskLabelChange} />
      case 'members':
        return <>members</>
      case 'dates':
        return <>dates</>
      default:
        return
    }
  }

  // handle task badges updates. update all or individual badges

  return (
    <TaskQuickEditorControls>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn onClick={ev => toggleBadgeModal(control.type, ev)} href={control.href} key={control.icon}>
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
      {badgeModal && (
        <BadgesModal modalWrapperRef={modalWrapperRef} modalPos={modalPos} title={badgeModal} onClose={toggleBadgeModal}>
          {getModalChild()}
        </BadgesModal>
      )}
    </TaskQuickEditorControls>
  )
}

const TaskQuickEdit = ({ children, modalPos, task, handleTaskLabelChange, onChangeSubmit, onClose }: QuickEditorProps) => {
  return createPortal(
    <QuickEditContainer>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <TaskQuickEditorWrapper modalPos={modalPos}>
        <TaskQuickEditor>
          <>{children}</>
        </TaskQuickEditor>
        <TaskQuickEditorSave onClick={onChangeSubmit}>Save</TaskQuickEditorSave>
        <QuickEditControls handleTaskLabelChange={handleTaskLabelChange} task={task} />
      </TaskQuickEditorWrapper>
    </QuickEditContainer>,
    document.body
  )
}

export default TaskQuickEdit
