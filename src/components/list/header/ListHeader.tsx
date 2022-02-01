import React, { useState, useRef } from 'react'
import * as boardInterfaces from '../../../interfaces/board.interface'
import { ListTitle, ListHeaderTarget, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

type Props = {
  list: boardInterfaces.list
  dragHandleProps?: any
}

const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
  // TODO: handle list title input
}

const ListHeader = ({ list, dragHandleProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  
  // TODO: useref for auto focus on textarea
  const inputRef = useRef()

  const openTitleEditor = () => {
    setIsOpen(true)
  }

  return (
    <ListTitle {...dragHandleProps}>
      {isOpen ? (
        <ListHeaderNameInput onChange={handleInputChange} value={list.title} />
      ) : (
        <ListHeaderNameAssist onClick={openTitleEditor}>
          {list.title}
        </ListHeaderNameAssist>
      )}
      <ListHeaderOpts>
        <HeaderOptsBtn content="'\e952'" size="sm" />
      </ListHeaderOpts>
    </ListTitle>
  )
}

export default ListHeader
