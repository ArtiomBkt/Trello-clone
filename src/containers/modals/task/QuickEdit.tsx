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

type QuickEditorProps = {
  children?: React.ReactNode
  isEditorOpen?: boolean
  onClose?: (ev: React.MouseEvent) => void
  modalPos?: { top: number; left: number }
}

const QuickEditControls = ({ isEditorOpen }: QuickEditorProps) => {
  const [quickControls] = useState([
    { title: 'Open card', icon: "'\\e912'" },
    { title: 'Edit labels', icon: "'\\e93f'" },
    { title: 'Change members', icon: "'\\e946'" },
    { title: 'Edit dates', icon: "'\\e91b'" }
  ])

  return (
    <TaskQuickEditorControls isQuickEdit={isEditorOpen}>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn key={control.icon}>
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
    </TaskQuickEditorControls>
  )
}

const TaskQuickEdit = ({ children, isEditorOpen, modalPos, onClose }: QuickEditorProps) => {
  return createPortal(
    <QuickEditContainer>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <TaskQuickEditorWrapper modalPos={modalPos}>
        <TaskQuickEditor>
          <EditorTaskDetails>{children}</EditorTaskDetails>
        </TaskQuickEditor>
        <TaskQuickEditorSave>Save</TaskQuickEditorSave>
        <QuickEditControls isEditorOpen={isEditorOpen} />
      </TaskQuickEditorWrapper>
    </QuickEditContainer>,
    document.body
  )
}

export default TaskQuickEdit
