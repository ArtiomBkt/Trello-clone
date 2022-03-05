import React, { useState, useRef, useLayoutEffect } from 'react'
import { PropTypes } from 'types/prop-types'
import { ListTitle, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

const ListHeader = ({ list, dragHandleProps, onListUpdate }: PropTypes.ListHeaderProps) => {
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

  const handleTitleChange = (ev: React.FocusEvent | React.KeyboardEvent): void => {
    if ((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'blur') return

    ev.preventDefault()
    setIsOpen(false)

    const newList = JSON.parse(JSON.stringify(list))
    newList.title = listTitle
    onListUpdate(newList)
  }

  const toggleTitleEditor = () => {
    setIsOpen(prev => !prev)
  }

  // TODO: add list options
  // TODO: handle list archive

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
