import { createContext } from 'react'
import { PropTypes } from '../types/prop-types'

const LabelsContext = createContext<PropTypes.LabelsContext>({
  isLabelsExpanded: false,
  setIsLabelsExpanded: () => {}
})

export default LabelsContext
