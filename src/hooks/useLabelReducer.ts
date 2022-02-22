import { useReducer } from 'react'
import { PropTypes } from '../types/prop-types'

const useLabelReducer = () => {
  type LabelActions = { type: 'TOGGLE_EDIT'; payload: PropTypes.label['title'] } | { type: 'CHANGE_TITLE'; payload: string } | { type: 'SUBMIT_CHANGE' }
  type StateTypes = {
    isEditMode: boolean
    labelTitle: PropTypes.label['title']
  }

  const labelState: StateTypes = {
    isEditMode: false,
    labelTitle: ''
  }

  const labelReducer = (state: typeof labelState, action: LabelActions) => {
    switch (action.type) {
      case 'TOGGLE_EDIT':
        return {
          ...state,
          isEditMode: !state.isEditMode,
          labelTitle: action.payload
        }
      case 'CHANGE_TITLE':
        return {
          ...state,
          labelTitle: action.payload
        }
      case 'SUBMIT_CHANGE':
        return {
          ...state,
          isEditMode: false
        }
      default:
        throw new Error(`Action type not supported: ${action}`)
    }
  }

  const [state, dispatch] = useReducer(labelReducer, labelState)

  return [state, dispatch] as const
}

export default useLabelReducer
