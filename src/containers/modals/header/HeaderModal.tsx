import React, { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg'
import {
  HeaderModalContainer,
  HeaderModalHead,
  HeaderModalTitle,
  HeaderModalCloseBtn,
  ModalCloseBtnIconContainer,
  HeaderModalBodyContainer,
  HeaderModalBody
} from './HeaderModal.styled'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import { PropTypes } from '../../../types/prop-types'

const HeaderModal = ({ onClose, children, title, modalPos }: PropTypes.HeaderModalProps) => {
  const modalContainerRef = useRef<HTMLDivElement>(null)
  const outsideClick = useOutsideAlerter(modalContainerRef)

  useLayoutEffect(() => {
    if (outsideClick) {
      onClose()
    }
  }, [outsideClick, onClose])

  return createPortal(
    <HeaderModalContainer ref={modalContainerRef} modalPos={modalPos}>
      <HeaderModalHead>
        <HeaderModalTitle>{title}</HeaderModalTitle>
        <HeaderModalCloseBtn onClick={onClose}>
          <ModalCloseBtnIconContainer>
            <CloseIcon />
          </ModalCloseBtnIconContainer>
        </HeaderModalCloseBtn>
      </HeaderModalHead>
      <HeaderModalBodyContainer>
        <HeaderModalBody>{children}</HeaderModalBody>
      </HeaderModalBodyContainer>
    </HeaderModalContainer>,
    document.body
  )
}

export default HeaderModal
