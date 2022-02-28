import React, { useLayoutEffect, useRef } from 'react'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import { AddComposedListBtn, DiscardListBtn, ListComposerControls, ListComposerInput } from './ListComposer.styled'
import { PropTypes } from '../../../types/prop-types'

const Composer = ({ listTitle, isListAdd, handleInputChange, handleListSubmit, handleDiscardList }: PropTypes.ComposerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const outsideClick = useOutsideAlerter(wrapperRef)

  useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.focus()
    if (outsideClick) {
      handleDiscardList()
    }
  }, [handleDiscardList, outsideClick])

  const inputProps = {
    onKeyDown: handleListSubmit,
    onChange: handleInputChange,
    ref: inputRef,
    isListAdd,
    value: listTitle,
    type: 'text',
    placeholder: 'Enter list title...'
  }

  return (
    <div ref={wrapperRef}>
      <ListComposerInput {...inputProps} />
      <ListComposerControls isListAdd={isListAdd}>
        <AddComposedListBtn onMouseDown={handleListSubmit}>Add list</AddComposedListBtn>
        <DiscardListBtn onClick={handleDiscardList} content="'\e91c'" size="lg" />
      </ListComposerControls>
    </div>
  )
}

export default Composer
