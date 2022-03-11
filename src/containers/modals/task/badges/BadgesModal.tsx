import React from 'react'
import { createPortal } from 'react-dom'
import { CSSProperties } from 'styled-components'
import { PropTypes } from 'types/prop-types'
import { BadgesModalOverlay, BadgesModalContainer, BadgesModalHeader, BadgesModalHeaderCloseBtn, BadgesModalHeaderTitle, BadgesModalBody } from './BadgesModal.styled'

const BadgesModal = ({ rootEl = 'app-wrapper', title, children, modalPos, modalWrapperRef, onWrapperClick, onClose }: PropTypes.BadgesModalProps) => {
  // const modalBodyRef = useRef<HTMLDivElement>(null!)

  const getStyles = (): CSSProperties => {
    return rootEl === 'task-details-root'
      ? {
          position: 'absolute',
          inset: 'initial',
          top: modalPos?.top,
          left: modalPos?.left
        }
      : {}
  }

  // ref={modalBodyRef}
  // TODO: Fix onwrapperclick
  return createPortal(
    <BadgesModalOverlay style={getStyles()} title={title} onClick={onWrapperClick} ref={modalWrapperRef}>
      <BadgesModalContainer modalPos={modalPos}>
        <BadgesModalHeader>
          <BadgesModalHeaderTitle>{title}</BadgesModalHeaderTitle>
          <BadgesModalHeaderCloseBtn title={`Close ${title} modal`} onClick={onClose} content="'\e91c'" size="sm" />
        </BadgesModalHeader>
        <BadgesModalBody>{children}</BadgesModalBody>
      </BadgesModalContainer>
    </BadgesModalOverlay>,
    document.getElementById(rootEl) || document.body
  )
}

export default BadgesModal
