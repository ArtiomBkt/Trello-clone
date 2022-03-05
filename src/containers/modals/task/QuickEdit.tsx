import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams } from 'react-router-dom'
import { PropTypes } from 'types/prop-types'
import { QuickEditContainer, QuickEditCloseBtn, TaskQuickEditorWrapper, TaskQuickEditor, TaskQuickEditorSave } from './QuickEdit.styled'
import QuickEditControls from './QuickEditControls'

const TaskQuickEdit = ({
  children,
  modalPos,
  task,
  handleTaskLabelChange,
  handleTaskMemberToggle,
  handleTaskStyleChange,
  handleTaskArchive,
  onChangeSubmit,
  onLabelsUpdate,
  onClose
}: PropTypes.QuickEditorProps) => {
  const modalRootId = 'app-wrapper'
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState<boolean>(false)
  const backgroundRef = React.useRef<HTMLDivElement>(null!)
  const { taskId } = useParams()

  useEffect(() => {
    backgroundRef.current.focus()
  }, [taskId])

  const handleEscKey = (ev: React.KeyboardEvent) => ev.key === 'Escape' && onClose!()

  const handleOutsideClick = (ev: React.MouseEvent) => ev.target === backgroundRef.current && onClose!(ev)

  const handleBadgeModalToggle = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    setIsBadgeModalOpen(p => !p)
  }

  return createPortal(
    <QuickEditContainer tabIndex={1} ref={backgroundRef} onClick={isBadgeModalOpen ? undefined : handleOutsideClick} onKeyUp={handleEscKey}>
      <QuickEditCloseBtn onClick={onClose} content="'\e91c'" size="lg" />
      <TaskQuickEditorWrapper onClick={ev => ev.preventDefault()} modalPos={modalPos}>
        <TaskQuickEditor>
          <>{children}</>
        </TaskQuickEditor>
        <TaskQuickEditorSave onClick={onChangeSubmit}>Save</TaskQuickEditorSave>
        <QuickEditControls
          handleBadgeModalToggle={handleBadgeModalToggle}
          handleTaskStyleChange={handleTaskStyleChange}
          handleTaskMemberToggle={handleTaskMemberToggle}
          handleTaskLabelChange={handleTaskLabelChange}
          handleTaskArchive={handleTaskArchive}
          onLabelsUpdate={onLabelsUpdate}
          task={task}
        />
      </TaskQuickEditorWrapper>
    </QuickEditContainer>,
    document.getElementById(modalRootId) || document.body
  )
}

export default TaskQuickEdit
