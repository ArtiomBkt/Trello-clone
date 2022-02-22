import React from 'react'
import { createPortal } from 'react-dom'
import { PropTypes } from '../../../../types/prop-types'
import { BadgesModalContainer, BadgesModalHeader, BadgesModalHeaderCloseBtn, BadgesModalHeaderTitle, BadgesModalBody } from './BadgesModal.styled'

const BadgesModal = ({ title, children, modalPos, modalWrapperRef, onClose }: PropTypes.BadgesModalProps) => {
  return createPortal(
    <BadgesModalContainer title={title} ref={modalWrapperRef} modalPos={modalPos}>
      <BadgesModalHeader>
        <BadgesModalHeaderTitle>{title}</BadgesModalHeaderTitle>
        <BadgesModalHeaderCloseBtn onClick={onClose} content="'\e91c'" size="sm" />
      </BadgesModalHeader>
      <BadgesModalBody>{children}</BadgesModalBody>
    </BadgesModalContainer>,
    document.body
  )
}

export default BadgesModal
