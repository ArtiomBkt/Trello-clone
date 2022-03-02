import { useReducer } from 'react'
import { boardService } from '../services/board.service'
import { BoardTypes } from '../types/board-types'

export enum BoardActionType {
  BOARD_UPDATE = 'BOARD_UPDATE',
  BOARD_ADD = 'BOARD_ADD',
  BOARD_DELETE = 'BOARD_DELETE'
}

type BoardState = BoardTypes.board

type BoardAction =
  | { type: BoardActionType.BOARD_ADD; payload: BoardTypes.board }
  | { type: BoardActionType.BOARD_UPDATE; payload: BoardTypes.board }
  | { type: BoardActionType.BOARD_DELETE }

const useBoardReducer = () => {
  // TODO: When there are multiple boards available, the initial state will be an empty board
  // Initializer will call the board from the api
  const initialState = boardService.getBoardById()

  const initializer = (initialValue = initialState) => {
    const board = localStorage.getItem('board')
    return board ? JSON.parse(board) : initialValue
  }

  const boardReducer: React.Reducer<BoardState, BoardAction> = (state, action): BoardState => {
    switch (action.type) {
      case BoardActionType.BOARD_ADD:
        return action.payload
      case BoardActionType.BOARD_UPDATE:
        return action.payload
      case BoardActionType.BOARD_DELETE:
        return state
      default:
        throw new Error('Invalid action type')
    }
  }

  const [board, dispatch] = useReducer(boardReducer, initialState, initializer)

  return [board, dispatch] as const
}

export default useBoardReducer
