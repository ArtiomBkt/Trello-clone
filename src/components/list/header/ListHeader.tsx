import React, { useState, useRef, useLayoutEffect } from 'react'
import * as boardInterfaces from '../../../interfaces/board.interface'
import { ListTitle, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

type Props = {
  list: boardInterfaces.list
  dragHandleProps?: any
  onListUpdate: (list: Props['list']) => void
}

const ListHeader = ({ list, dragHandleProps, onListUpdate }: Props) => {
  const [listTitle, setListTitle] = useState<string>(list.title)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isOpen, inputRef])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setListTitle(target.value)
  }

  const handleTitleChange = (e?: any) => {
    if (e.key !== 'Enter' && e.type !== 'blur') return

    e.preventDefault()
    setIsOpen(false)

    const newList = JSON.parse(JSON.stringify(list))
    newList.title = listTitle
    onListUpdate(newList)
  }

  const toggleTitleEditor = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <ListTitle {...dragHandleProps}>
      {isOpen ? (
        <ListHeaderNameInput ref={inputRef} onBlur={handleTitleChange} onChange={handleInputChange} value={listTitle} onKeyDown={handleTitleChange} />
      ) : (
        <ListHeaderNameAssist onClick={toggleTitleEditor}>{list.title}</ListHeaderNameAssist>
      )}
      <ListHeaderOpts>
        <HeaderOptsBtn content="'\e952'" size="sm" />
      </ListHeaderOpts>
    </ListTitle>
  )
}

export default ListHeader
