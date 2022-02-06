import React, { useLayoutEffect, useState } from 'react'
import { TaskComposerContainer, ComposingTask, ComposingTaskDetails, ComposingTaskTextarea, AddTaskBtn, DiscardTaskIcon } from './TaskComposer.styled'

type props = {
  handleComposerToggle: () => void
  handleTaskAdd: (cardTitle: string | null) => void
}

const TaskComposer = ({ handleComposerToggle, handleTaskAdd }: props) => {
  const [cardTitle, setCardTitle] = useState<string>('')

  useLayoutEffect(() => {}, [cardTitle])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCardTitle(target.value)
  }

  const handleTaskSubmit = (e: any) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    handleTaskAdd(cardTitle)
    setCardTitle('')
  }

  const handleDiscardTask = () => {
    setCardTitle('')
    handleComposerToggle()
  }

  return (
    <TaskComposerContainer>
      <ComposingTask>
        <ComposingTaskDetails>
          <ComposingTaskTextarea value={cardTitle} onBlur={handleComposerToggle} onKeyDown={handleTaskSubmit} onChange={handleInputChange} placeholder="Enter a title for this card..." />
        </ComposingTaskDetails>
      </ComposingTask>
      <div>
        <AddTaskBtn onClick={handleTaskSubmit}>Add card</AddTaskBtn>
        <DiscardTaskIcon onClick={handleDiscardTask} content="'\e91c'" size="lg" />
      </div>
    </TaskComposerContainer>
  )
}

export default TaskComposer
