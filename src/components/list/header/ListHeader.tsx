import React, { useState } from 'react'
import * as boardInterfaces from '../../../interfaces/board.interface'
import { ListTitle, ListHeaderTarget, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

type Props = {
  list: boardInterfaces.list
  dragHandleProps?: any
}

const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
  console.log(target.value)
}

const ListHeader = ({ list, dragHandleProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openTitleEditor = () => {
    console.log(isOpen)

    setIsOpen(open => !open)
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
