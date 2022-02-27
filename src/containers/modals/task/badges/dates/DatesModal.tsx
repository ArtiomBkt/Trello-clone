import React from 'react'
import { PropTypes } from '../../../../../types/prop-types'

const DatesModal = ({ task }: PropTypes.DateProps) => {
  const handleDateSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={handleDateSubmit}>
      <div>dsfdf</div>
      <div>dsfdf</div>
      <div>dsfdf</div>
    </form>
  )
}

export default DatesModal
