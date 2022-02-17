import React from 'react'
import { createPortal } from 'react-dom'
import { HeaderModalContainer, HeaderModalHead } from './HeaderModal.styled'

type HeaderModalProps = {
  onClose: (ev: React.MouseEvent) => void
  children: React.ReactNode
  position: { elemPosX: number; elemPosY: number }
}

const HeaderModal = ({ position, children, onClose }: HeaderModalProps) => {
  return createPortal(
    <HeaderModalContainer top={position.elemPosY} left={position.elemPosX}>
      <HeaderModalHead>
        <button onClick={onClose}>x</button>
      </HeaderModalHead>
      {children}
    </HeaderModalContainer>,
    document.body
  )
}

export default HeaderModal
