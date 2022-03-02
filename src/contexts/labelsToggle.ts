import { createContext } from 'react'
import { LabelState, LabelAction } from '../reducers/useLabelReducer'

type ILabelContext = {
  labelState: LabelState
  labelsDispatch: React.Dispatch<LabelAction>
}

const LabelsContext = createContext<ILabelContext>({
  labelState: { labelTitle: '', isEditMode: false, isLabelsExpanded: false },
  labelsDispatch: () => {}
})

LabelsContext.displayName = 'LabelsContext'

export default LabelsContext
