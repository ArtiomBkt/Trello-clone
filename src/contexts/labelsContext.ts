import { createContext } from 'react'
import { PropTypes } from '../types/prop-types'

const labelsContext = createContext<PropTypes.LabelsContext>({
  isLabelsExpanded: false,
  setIsLabelsExpanded: () => {}
})

export default labelsContext
