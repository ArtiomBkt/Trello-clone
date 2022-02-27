import { useReducer } from 'react'

type StateTypes = {
  boardTitle: string
  isEditing: boolean
  titleWidth: string | number
}

type ActionTypes = { type: 'UPDATE_TITLE'; payload: string } | { type: 'TOGGLE_EDITOR' } | { type: 'CALC_WIDTH'; payload: string | number }

const useTitleEditReducer = (initialState: StateTypes) => {
  const titleEditReducer = (state: typeof initialState, action: ActionTypes) => {
    switch (action.type) {
      case 'UPDATE_TITLE':
        return {
          ...state,
          boardTitle: action.payload
        }
      case 'CALC_WIDTH':
        return {
          ...state,
          titleWidth: action.payload
        }
      case 'TOGGLE_EDITOR':
        return {
          ...state,
          isEditing: !state.isEditing
        }
      default:
        throw new Error(`Unknown action type ${action}`)
    }
  }

  const [state, dispatch] = useReducer(titleEditReducer, initialState)

  return [state, dispatch] as const
}

export default useTitleEditReducer
