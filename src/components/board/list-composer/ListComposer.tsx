import React, { useState, useRef, useLayoutEffect } from 'react'
import {
  ListComposerContainer,
  ListComposerPlaceholder,
  DiscardListBtn,
  AddListIcon,
  ListComposerInput,
  ListComposerControls,
  AddComposedListBtn,
  ListComposerAnchor
} from './ListComposer.styled'
import { PropTypes } from '../../../types/prop-types'

const ListComposer = ({ onAddList }: PropTypes.ListComposerProps) => {
  const [isListAdd, setIsListAdd] = useState(false)
  const [listTitle, setListTitle] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    if (isListAdd && inputRef.current) inputRef.current.focus()
  }, [isListAdd])

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setListTitle(target.value)
  }

  const handleListSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'mousedown') || !listTitle) return
    ev.preventDefault()
    onAddList(listTitle)
    setListTitle('')
  }

  const handleDiscardList = (): void => {
    setListTitle('')
    setIsListAdd(false)
  }

  return (
    <ListComposerContainer isListAdd={isListAdd}>
      <ListComposerAnchor onClick={_ => setIsListAdd(true)}>
        <ListComposerPlaceholder isListAdd={isListAdd}>
          <AddListIcon content="'\e901'" size="sm" />
          Add another list
        </ListComposerPlaceholder>
      </ListComposerAnchor>
      <ListComposerInput
        ref={inputRef}
        value={listTitle}
        onKeyDown={handleListSubmit}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter list title..."
        isListAdd={isListAdd}
      />
      <ListComposerControls isListAdd={isListAdd}>
        <AddComposedListBtn onMouseDown={handleListSubmit}>Add list</AddComposedListBtn>
        <DiscardListBtn onClick={handleDiscardList} content="'\e91c'" size="lg" />
      </ListComposerControls>
    </ListComposerContainer>
  )
}

export default ListComposer
