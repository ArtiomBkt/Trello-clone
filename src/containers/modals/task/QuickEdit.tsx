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
import BadgeModal from './badges/BadgesModal'

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

  const toggleBadgeModal = (modalName?: string) => {
    if (typeof modalName !== 'string') return setBadgeModalOpen('')
    setBadgeModalOpen(modalName)
  }

  return (
    <TaskQuickEditorControls isQuickEdit={isEditorOpen}>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn
          onClick={() => toggleBadgeModal(control.type)}
          href={control.href}
          key={control.icon}
        >
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
      {badgeModalOpen && <BadgeModal title={badgeModalOpen} onClose={toggleBadgeModal}></BadgeModal>}
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
