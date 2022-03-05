import useViewSize from 'hooks/useViewSize'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { PropTypes } from 'types/prop-types'
import { BadgesModalOverlay, BadgesModalContainer, BadgesModalHeader, BadgesModalHeaderCloseBtn, BadgesModalHeaderTitle, BadgesModalBody } from './BadgesModal.styled'

const BadgesModal = ({ title, children, modalPos, modalWrapperRef, onWrapperClick, onClose }: PropTypes.BadgesModalProps) => {
  const { width: windowWidth, height: windowHeight } = useViewSize()
  const [correctModalPos, setModalPos] = useState<PropTypes.modalPos>()
  const modalBodyRef = useRef<HTMLDivElement>(null!)
  // Actual modal width is 304px always, it's set to 320 for some safe space
  const MODAL_WIDTH = 320
  const modalRootId = 'app-wrapper'

  useLayoutEffect(() => {
    const modalSizes = modalBodyRef.current.getBoundingClientRect()
    console.log(modalSizes)
    console.log({ windowWidth, windowHeight })
  }, [windowHeight, windowWidth, title])

  return createPortal(
    <BadgesModalOverlay title={title} tabIndex={2} onClick={onWrapperClick} ref={modalWrapperRef}>
      <BadgesModalContainer modalPos={correctModalPos}>
        <BadgesModalHeader>
          <BadgesModalHeaderTitle>{title}</BadgesModalHeaderTitle>
          <BadgesModalHeaderCloseBtn title={`Close ${title} modal`} onClick={onClose} content="'\e91c'" size="sm" />
        </BadgesModalHeader>
        <BadgesModalBody ref={modalBodyRef}>{children}</BadgesModalBody>
      </BadgesModalContainer>
    </BadgesModalOverlay>,
    document.getElementById(modalRootId) || document.body
  )
}

export default BadgesModal
