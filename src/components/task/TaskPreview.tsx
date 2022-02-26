import React, { useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import TaskDetails from '../../containers/task/TaskDetails'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'
import TaskQuickEdit from '../../containers/modals/task/QuickEdit'

const TaskPreview = ({ task, index, handleTaskEdit, onLabelsUpdate }: PropTypes.TaskPreviewProps) => {
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false)
  const [taskEditorPos, setTaskEditorPos] = useState({ top: 0, left: 0 })
  const [taskTitle, setTaskTitle] = useState<string>(task.title)
  const taskRef = useRef<HTMLDivElement>(null)

  const handleQuickEditToggle = (ev?: React.MouseEvent): void => {
    if (ev) {
      ev.stopPropagation()
      ev.preventDefault()
    }
    if (ev && taskRef.current) {
      const { x, y } = taskRef.current.getBoundingClientRect()
      setTaskEditorPos({ top: y, left: x })
    }
    setIsQuickEditOpen(prevState => !prevState)
  }

  const handleTaskTitleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskTitle(target.value)
  }

  const handleTaskLabelChange = (chosenLabel: PropTypes.label): void => {
    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    const idx = task.labels!.findIndex(label => label.id === chosenLabel.id)

    if (idx === -1) {
      newTask.labels!.push(chosenLabel)
    } else {
      newTask.labels!.splice(idx, 1)
    }

    handleTaskEdit(newTask)
  }

  const handleTaskEditSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'click') || !taskTitle) return
    ev.preventDefault()

    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    newTask.title = taskTitle

    handleTaskEdit(newTask)
    handleQuickEditToggle()
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <TaskPreviewContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          to={`/${task.id}`}
          onContextMenuCapture={handleQuickEditToggle}
          styling={task.style}
        >
          {!task.style?.fullCover && task.style?.background && <TaskCover style={task.style} />}
          <TaskEditIcon onClickCapture={handleQuickEditToggle} content="'\e928'" size="sm" />
          {isQuickEditOpen && (
            <TaskQuickEdit
              task={task}
              modalPos={taskEditorPos}
              onLabelsUpdate={onLabelsUpdate}
              handleTaskLabelChange={handleTaskLabelChange}
              onChangeSubmit={handleTaskEditSubmit}
              onClose={handleQuickEditToggle}
            >
              <TaskDetails taskTitle={taskTitle} handleTaskTitleChange={handleTaskTitleChange} isQuickEditOpen={isQuickEditOpen} taskRef={taskRef} task={task} />
            </TaskQuickEdit>
          )}
          <TaskDetails taskRef={taskRef} task={task} />
        </TaskPreviewContainer>
      )}
    </Draggable>
  )
}

export default TaskPreview
