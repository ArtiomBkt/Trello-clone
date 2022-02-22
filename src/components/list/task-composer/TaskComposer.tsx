import React, { useState, useRef, useLayoutEffect } from 'react'
import { TaskComposerContainer, ComposingTask, ComposingTaskDetails, ComposingTaskTextarea, AddTaskBtn, DiscardTaskIcon } from './TaskComposer.styled'
import { PropTypes } from '../../../types/prop-types'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'

const TaskComposer = ({ handleComposerToggle, handleTaskAdd }: PropTypes.TaskComposerProps) => {
  const [taskTitle, setTaskTitle] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const outsideClick = useOutsideAlerter(wrapperRef)

  useLayoutEffect(() => {
    if (textAreaRef.current) textAreaRef.current.focus()
    if (outsideClick) {
      handleComposerToggle()
    }
  }, [handleComposerToggle, outsideClick])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskTitle(target.value)
  }

  const handleTaskSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'mousedown') || !taskTitle) return
    ev.preventDefault()
    handleTaskAdd(taskTitle)
    setTaskTitle('')
  }

  const handleDiscardTask = (): void => {
    setTaskTitle('')
    handleComposerToggle()
  }

  return (
    <TaskComposerContainer ref={wrapperRef}>
      <ComposingTask>
        <ComposingTaskDetails>
          <ComposingTaskTextarea ref={textAreaRef} value={taskTitle} onKeyDown={handleTaskSubmit} onChange={handleInputChange} placeholder="Enter a title for this card..." />
        </ComposingTaskDetails>
      </ComposingTask>
      <div>
        <AddTaskBtn onMouseDown={handleTaskSubmit}>Add card</AddTaskBtn>
        <DiscardTaskIcon onClick={handleDiscardTask} content="'\e91c'" size="lg" />
      </div>
    </TaskComposerContainer>
  )
}

export default TaskComposer
