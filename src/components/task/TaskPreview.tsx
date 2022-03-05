import React, { useRef, useState } from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { PropTypes } from '../../types/prop-types'
import TaskDetails from '../../containers/task/TaskDetails'
import { TaskPreviewContainer, TaskCover, TaskEditIcon } from './TaskPreview.styled'
import TaskQuickEdit from '../../containers/modals/task/QuickEdit'
import { BoardTypes } from '../../types/board-types'

const TaskPreview = ({ task, index, handleTaskEdit, handleTaskArchive, onLabelsUpdate }: PropTypes.TaskPreviewProps) => {
  const [isQuickEditOpen, setIsQuickEditOpen] = useState(false)
  const [taskEditorPos, setTaskEditorPos] = useState({ top: 0, left: 0 })
  const [taskTitle, setTaskTitle] = useState<string>(task.title)
  const taskRef = useRef<HTMLDivElement>(null)

  const handleQuickEditToggle = (ev?: React.MouseEvent): void => {
    ev?.preventDefault()

    if (ev && taskRef.current) {
      const { x, y } = taskRef.current.getBoundingClientRect()
      setTaskEditorPos({ top: y, left: x })
    }
    setIsQuickEditOpen(prevState => !prevState)
  }

  const handleTaskTitleChange = (ev: React.ChangeEvent<HTMLTextAreaElement> | React.KeyboardEvent): void => {
    if ((ev as React.KeyboardEvent).key === 'Enter' || (ev as React.KeyboardEvent).key === 'Escape') {
      ev.preventDefault()
      return handleTaskEditSubmit(ev as React.KeyboardEvent)
    }
    setTaskTitle((ev as React.ChangeEvent<HTMLTextAreaElement>).target.value)
  }

  // TODO: Refactor to use dispatch
  const handleTaskLabelChange = (ev: React.MouseEvent, chosenLabel: PropTypes.label): void => {
    ev.preventDefault()

    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    const idx = task.labels!.findIndex(label => label.id === chosenLabel.id)

    if (idx === -1) {
      newTask.labels!.push(chosenLabel)
    } else {
      newTask.labels!.splice(idx, 1)
    }

    handleTaskEdit(newTask)
  }

  const handleTaskMemberToggle = (ev: React.MouseEvent, member: BoardTypes.member): void => {
    ev.preventDefault()

    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    const idx = task.members!.findIndex(taskMember => taskMember.id === member.id)

    if (idx === -1) {
      newTask.members!.push(member)
    } else {
      newTask.members!.splice(idx, 1)
    }

    handleTaskEdit(newTask)
  }

  const handleTaskStyleChange = (newStyle: BoardTypes.task['style']): void => {
    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))

    if (newStyle) {
      newTask.style = { ...newStyle }
    }

    handleTaskEdit(newTask)
  }

  const handleTaskDueToggle = (ev: React.MouseEvent): void => {
    ev.preventDefault()

    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    if (newTask.dueDate?.isDone) {
      newTask.dueDate!.isDone = false
    } else {
      newTask.dueDate!.isDone = true
    }

    handleTaskEdit(newTask)
  }

  const handleTaskEditSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'click') || !taskTitle) return
    ev.preventDefault()

    const newTask: PropTypes.task = JSON.parse(JSON.stringify(task))
    newTask.title = taskTitle

    handleTaskEdit(newTask)
    handleQuickEditToggle(ev as React.MouseEvent)
  }

  const taskQuickEditProps = {
    task,
    modalPos: taskEditorPos,
    onLabelsUpdate,
    handleTaskLabelChange,
    handleTaskMemberToggle,
    handleTaskStyleChange,
    handleTaskArchive,
    onChangeSubmit: handleTaskEditSubmit,
    onClose: handleQuickEditToggle
  }

  const quickTaskDetailsProps = {
    taskTitle,
    isQuickEditOpen,
    taskRef,
    task,
    handleTaskDueToggle,
    handleTaskTitleChange
  }

  // TODO: figure out react router Link cmp - click self/capture
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <TaskPreviewContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          to={`t/${task.id}`}
          onContextMenu={handleQuickEditToggle}
          $taskPreviewStyling={{
            isDragging: snapshot.isDragging,
            draggingTransform: provided.draggableProps.style?.transform,
            cover: task.style
          }}
        >
          {!task.style?.fullCover && task.style?.background && <TaskCover styling={task.style} />}
          <TaskEditIcon onClickCapture={handleQuickEditToggle} content="'\e928'" size="sm" />
          {isQuickEditOpen && (
            <TaskQuickEdit {...taskQuickEditProps}>
              <TaskDetails {...quickTaskDetailsProps} />
            </TaskQuickEdit>
          )}
          <TaskDetails handleTaskDueToggle={handleTaskDueToggle} taskRef={taskRef} task={task} />
        </TaskPreviewContainer>
      )}
    </Draggable>
  )
}

export default TaskPreview
