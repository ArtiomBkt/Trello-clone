import React from 'react'
import { createPortal } from 'react-dom'
import { HeaderModalContainer, HeaderModalHead } from './HeaderModal.styled'

type HeaderModalProps = {
  onClose: (ev: any) => void
  children?: React.ReactNode
  position: { top: number; left: number }
}

const HeaderModal = ({ position, children, onClose }: HeaderModalProps) => {
  return createPortal(
    <HeaderModalContainer top={position.top} left={position.left}>
      <HeaderModalHead>
        <button onClick={onClose}>x</button>
      </HeaderModalHead>
      {children}
    </HeaderModalContainer>,
    document.body
  )
}

export default HeaderModal
