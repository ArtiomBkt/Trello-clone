import { useReducer } from 'react'
import { BoardTypes } from '../types/board-types'

export enum LabelActionType {
  TOGGLE_EDIT = 'TOGGLE_EDIT',
  CHANGE_TITLE = 'CHANGE_TITLE',
  SUBMIT_CHANGE = 'SUBMIT_CHANGE',
  TOGGLE_LABEL_VIEW = 'TOGGLE_LABEL_VIEW'
}

export type LabelState = {
  labelTitle: BoardTypes.label['title']
  isEditMode: boolean
  isLabelsExpanded: boolean
}

export type LabelAction =
  | { type: LabelActionType.TOGGLE_EDIT; payload: LabelState['labelTitle'] }
  | { type: LabelActionType.CHANGE_TITLE; payload: LabelState['labelTitle'] }
  | { type: LabelActionType.SUBMIT_CHANGE }
  | { type: LabelActionType.TOGGLE_LABEL_VIEW }

const useLabelReducer = () => {
  const initialState: LabelState = {
    labelTitle: '',
    isEditMode: false,
    isLabelsExpanded: false
  }

  const labelReducer: React.Reducer<LabelState, LabelAction> = (state, action): LabelState => {
    switch (action.type) {
      case LabelActionType.TOGGLE_EDIT:
        return {
          ...state,
          isEditMode: !state.isEditMode,
          labelTitle: action.payload
        }
      case LabelActionType.CHANGE_TITLE:
        return {
          ...state,
          labelTitle: action.payload
        }
      case LabelActionType.SUBMIT_CHANGE:
        return {
          ...state,
          isEditMode: false
        }
      case LabelActionType.TOGGLE_LABEL_VIEW:
        return {
          ...state,
          isLabelsExpanded: !state.isLabelsExpanded
        }
      default:
        throw new Error('Action type not supported')
    }
  }

  const [state, dispatch] = useReducer(labelReducer, initialState)

  return [state, dispatch] as const
}

export default useLabelReducer
