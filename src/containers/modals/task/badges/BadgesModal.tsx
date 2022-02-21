import React, { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import useOutsideAlerter from '../../../../hooks/useOutsideAlerter'
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
  onClose?: () => void
}

const BadgesModal = ({ title, children, modalPos, onClose }: BadgesModalProps) => {
  const badgedModalRef = useRef<HTMLDivElement>(null)
  const outsideAlerter = useOutsideAlerter(badgedModalRef)

  useLayoutEffect(() => {
    if (outsideAlerter && onClose) {
      onClose()
    }
  }, [onClose, outsideAlerter])

  return createPortal(
    <BadgesModalContainer ref={badgedModalRef} modalPos={modalPos}>
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
