import React from 'react'
import { createPortal } from 'react-dom'
import {
  BadgesModalContainer,
  BadgesModalHeader,
  BadgesModalHeaderCloseBtn,
  BadgesModalHeaderTitle,
  BadgesModalBody
} from './BadgesModal.styled'

type BadgesModalProps = {
  title: string
  children?: React.ReactNode
  modalPos?: { top: number; left: number }
  modalWrapperRef?: React.RefObject<HTMLDivElement>
  onClose?: () => void
}

const BadgesModal = ({ title, children, modalPos, modalWrapperRef, onClose }: BadgesModalProps) => {
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
