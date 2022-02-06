import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import * as boardInterfaces from '../../../interfaces/board.interface'
import { ListTitle, ListHeaderTarget, ListHeaderNameAssist, ListHeaderNameInput, ListHeaderOpts, HeaderOptsBtn } from './ListHeader.styled'

type Props = {
  list: boardInterfaces.list
  dragHandleProps?: any
}

const ListHeader = ({ list, dragHandleProps }: Props) => {

  const [listTitle, setListTitle] = useState(list.title)
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isOpen, inputRef])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(target);
    
    setListTitle(target.value)
  }

  const toggleTitleEditor = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <ListTitle {...dragHandleProps}>
      {isOpen ? (
        <ListHeaderNameInput ref={inputRef} onBlur={toggleTitleEditor} onChange={handleInputChange} value={listTitle} 
          onKeyPress={ev => (ev.nativeEvent.key === 'Enter' ? handleInputChange : null)} />
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
