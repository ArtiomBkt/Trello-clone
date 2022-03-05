import React, { useState } from 'react'
import { ListComposerContainer, ListComposerPlaceholder, AddListIcon, ListComposerAnchor } from './ListComposer.styled'
import { PropTypes } from 'types/prop-types'
import Composer from './Composer'

const ListComposer = ({ onAddList }: PropTypes.ListComposerProps) => {
  const [isListAdd, setIsListAdd] = useState(false)
  const [listTitle, setListTitle] = useState('')

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setListTitle(target.value)
  }

  const handleListSubmit = (ev: React.MouseEvent | React.KeyboardEvent): void => {
    if (((ev as React.KeyboardEvent).key !== 'Enter' && ev.type !== 'mousedown') || !listTitle) return
    ev.preventDefault()
    onAddList!(listTitle)
    setListTitle('')
  }

  const handleDiscardList = (): void => {
    setListTitle('')
    setIsListAdd(false)
  }

  const composerProps = {
    isListAdd,
    listTitle,
    handleInputChange,
    handleListSubmit,
    handleDiscardList
  }

  return (
    <ListComposerContainer isListAdd={isListAdd}>
      <ListComposerAnchor onClick={_ => setIsListAdd(true)}>
        <ListComposerPlaceholder isListAdd={isListAdd}>
          <AddListIcon content="'\e901'" size="sm" />
          Add another list
        </ListComposerPlaceholder>
      </ListComposerAnchor>
      {isListAdd && <Composer {...composerProps} />}
    </ListComposerContainer>
  )
}

export default ListComposer
