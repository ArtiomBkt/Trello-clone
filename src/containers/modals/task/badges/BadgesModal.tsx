import React from 'react'
import { createPortal } from 'react-dom'

type BadgesModalProps = {
  title: string
  children?: React.ReactNode
  onClose?: () => void
  // onHandleChange?: () => void
}

const BadgesModal = ({ title, children, onClose }: BadgesModalProps) => {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        zIndex: 70,
        width: '304px',
        left: '305px',
        top: '242px',
        height: '300px',
        background: '#fff'
      }}
    >
      {title}
      {children}
      <span onClick={onClose}>X</span>
    </div>,
    document.body
  )
}

export default BadgesModal
