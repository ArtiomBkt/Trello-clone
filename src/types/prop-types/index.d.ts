import { BoardTypes } from '../board-types'
import { DraggableProvided } from 'react-beautiful-dnd'

export declare module PropTypes {
  export type StyledProps = {
    btnType?: string
    task?: task
    style?: task['style']
    size?: string
    content?: string
    isDone?: boolean
    isDateBadge?: boolean
    isFullCover?: boolean
    isListAdd?: boolean
    isEditBoardTitle?: boolean
    isSidenavOpen?: boolean
    modalPos?: { top: number; left: number }
    isQuickEdit?: boolean
    labelColor?: string
  }

  export type DndTypes = {
    isDragging: boolean
    isDraggingOver: boolean
  }

  export type ListPreviewProps = {
    list: BoardTypes.list
    idx: number
    isDraggingOver: boolean
    onListUpdate: (list: BoardTypes.list) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
  }

  export type ListHeaderProps = {
    list: BoardTypes.list
    dragHandleProps?: DraggableProvided['dragHandleProps']
    onListUpdate: (list: BoardTypes.list) => void
  }

  export type TaskPreviewProps = {
    task: task
    idx: number
    handleTaskEdit: (task: BoardTypes.task) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
  }

  export type BoardNavCmp = {
    board: BoardTypes.board
    onBoardUpdate: (board: BoardTypes.board) => void
    onSidenavOpen: () => void
  }

  export type MemberListProps = {
    members: BoardTypes.member[] | undefined
  }

  export type board = BoardTypes.board
  export type list = BoardTypes.list
  export type task = BoardTypes.task
  export type label = BoardTypes.label

  export type TaskComposerProps = {
    handleComposerToggle: () => void
    handleTaskAdd: (taskTitle: task['title']) => void
  }

  export type ListComposerProps = {
    onAddList: (listTitle: list['title']) => void
  }
}
