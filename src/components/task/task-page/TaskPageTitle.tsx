import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

import { ListIdentifierText, WindowTaskHeader, WindowTaskHeaderIcon, WindowTaskListIdentifier, WindowTaskTitle } from 'containers/task/TaskPage.styled'
import { BoardTypes } from 'types/board-types'

const TaskPageTitlePlaceholder = styled.h2`
  visibility: hidden;

  margin: 0 4px 0 8px;
  height: 0;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`

type TaskPageTitleProps = {
  taskTitle: string
  list?: BoardTypes.list
}

const TaskPageTitle = ({ taskTitle, list }: TaskPageTitleProps) => {
  const [title, setTaskTitle] = useState<string>(taskTitle)
  const inputRef = useRef<HTMLTextAreaElement>(null!)
  const placeholderRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (placeholderRef.current) {
      const { width } = window.getComputedStyle(placeholderRef.current)
      inputRef.current.style.minWidth = width
    }
  }, [])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => setTaskTitle(target.value)

  // ! Must build reducers for efficieny
  const handleTitleChange = (ev: React.FocusEvent<HTMLTextAreaElement> | React.KeyboardEvent) => {
    ev.stopPropagation()
    if ((ev as React.FocusEvent<HTMLTextAreaElement>).type !== 'blur' && (ev as React.KeyboardEvent).key !== 'Enter' && (ev as React.KeyboardEvent).key !== 'Escape') {
      return
    }

    // TODO: Handle title change submit
  }

  return (
    <WindowTaskHeader>
      <WindowTaskHeaderIcon content="'\e912'" size="lg" />
      <WindowTaskTitle>
        <TaskPageTitlePlaceholder ref={placeholderRef}>{title}</TaskPageTitlePlaceholder>
        <Textarea className="task_details-textarea" ref={inputRef} value={title} onKeyUp={handleTitleChange} onBlur={handleTitleChange} onChange={handleInputChange} />
      </WindowTaskTitle>
      <WindowTaskListIdentifier>
        <ListIdentifierText>
          in list <u>{list?.title}</u>
        </ListIdentifierText>
      </WindowTaskListIdentifier>
    </WindowTaskHeader>
  )
}

export default TaskPageTitle
