import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { PropTypes } from 'types/prop-types'
import { BadgesModalOverlay, BadgesModalContainer, BadgesModalHeader, BadgesModalHeaderCloseBtn, BadgesModalHeaderTitle, BadgesModalBody } from './BadgesModal.styled'

const BadgesModal = ({ title, children, modalPos, modalWrapperRef, onWrapperClick, onClose }: PropTypes.BadgesModalProps) => {
  const modalBodyRef = useRef<HTMLDivElement>(null!)
  const modalRootId = 'app-wrapper'

  return createPortal(
    <BadgesModalOverlay title={title} onClick={onWrapperClick} ref={modalWrapperRef}>
      <BadgesModalContainer ref={modalBodyRef} modalPos={modalPos}>
        <BadgesModalHeader>
          <BadgesModalHeaderTitle>{title}</BadgesModalHeaderTitle>
          <BadgesModalHeaderCloseBtn title={`Close ${title} modal`} onClick={onClose} content="'\e91c'" size="sm" />
        </BadgesModalHeader>
        <BadgesModalBody>{children}</BadgesModalBody>
      </BadgesModalContainer>
    </BadgesModalOverlay>,
    document.getElementById(modalRootId) || document.body
  )
}

export default BadgesModal
