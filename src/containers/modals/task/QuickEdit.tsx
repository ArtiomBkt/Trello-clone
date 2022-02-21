import React, { useState } from 'react'
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
  EditorControlText,
  EditorTaskDetails
} from './QuickEdit.styled'
import BadgesModal from './badges/BadgesModal'
import LabelsModal from './badges/labels/LabelsModal'

type QuickEditorProps = {
  children?: React.ReactNode
  isEditorOpen?: boolean
  modalPos?: { top: number; left: number }
  taskId?: string
  onChangeSubmit?: (ev: React.MouseEvent) => void
  onClose?: (ev: React.MouseEvent) => void
}

const QuickEditControls = ({ isEditorOpen, taskId }: QuickEditorProps) => {
  const [quickControls] = useState([
    { title: 'Open card', type: 'openCard', icon: `'\\e912'`, href: `/${taskId}` },
    { title: 'Edit labels', type: 'labels', icon: `'\\e93f'` },
    { title: 'Change members', type: 'members', icon: `'\\e946'` },
    { title: 'Edit dates', type: 'dates', icon: `'\\e91b'` }
  ])
  const [badgeModalOpen, setBadgeModalOpen] = useState<string>('')
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 })

  const toggleBadgeModal = (modalName?: string, ev?: React.MouseEvent) => {
    if (typeof modalName !== 'string' || modalName === badgeModalOpen) return setBadgeModalOpen('')
    if (ev) {
      const { y: top, x: left, height } = ev.currentTarget.getBoundingClientRect()
      setModalPos({ top: top + height + 5, left })
    }
    setBadgeModalOpen(modalName)
  }

  const getModalChild = () => {
    switch (badgeModalOpen) {
      case 'labels':
        return <LabelsModal />
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
    <TaskQuickEditorControls isQuickEdit={isEditorOpen}>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn
          onClick={ev => toggleBadgeModal(control.type, ev)}
          href={control.href}
          key={control.icon}
        >
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
      {badgeModalOpen && (
        <BadgesModal modalPos={modalPos} title={badgeModalOpen} onClose={toggleBadgeModal}>
          {getModalChild()}
        </BadgesModal>
      )}
    </TaskQuickEditorControls>
  )
}

const TaskQuickEdit = ({ children, isEditorOpen, modalPos, taskId, onChangeSubmit, onClose }: QuickEditorProps) => {
  return createPortal(
    <QuickEditContainer>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <TaskQuickEditorWrapper modalPos={modalPos}>
        <TaskQuickEditor>
          <EditorTaskDetails>{children}</EditorTaskDetails>
        </TaskQuickEditor>
        <TaskQuickEditorSave onClick={onChangeSubmit}>Save</TaskQuickEditorSave>
        <QuickEditControls taskId={taskId} isEditorOpen={isEditorOpen} />
      </TaskQuickEditorWrapper>
    </QuickEditContainer>,
    document.body
  )
}

export default TaskQuickEdit
