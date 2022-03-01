import { useReducer } from 'react'
import { boardService } from '../services/board.service'
import { BoardTypes } from '../types/board-types'

export type BoardActions = { type: 'BOARD_UPDATE'; payload: BoardTypes.board } | { type: 'LIST_UPDATE' } | { type: 'TASK_UPDATE' }

const useBoardReducer = () => {
  const initialState = { board: boardService.getBoardById() }

  const boardReducer = (state: typeof initialState, action: BoardActions) => {
    switch (action.type) {
      case 'BOARD_UPDATE':
        return {
          board: action.payload
        }
      case 'LIST_UPDATE':
        console.log(state)
        return state
      default:
        throw new Error(`Invalid action type ${action.type}`)
    }
  }

  const [{ board }, dispatch] = useReducer(boardReducer, initialState)

  return [board, dispatch] as const
}

export default useBoardReducer
