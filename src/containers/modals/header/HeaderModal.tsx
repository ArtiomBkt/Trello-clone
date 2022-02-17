import React from 'react'
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

type HeaderModalProps = {
  onClose: (ev: React.MouseEvent) => void
  children: React.ReactNode
  title: string
  position: { elemPosX: number; elemPosY: number }
}

const HeaderModal = ({ onClose, children, title, position }: HeaderModalProps) => {
  return createPortal(
    <HeaderModalContainer top={position.elemPosY} left={position.elemPosX}>
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
