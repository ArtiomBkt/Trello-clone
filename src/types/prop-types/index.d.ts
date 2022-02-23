import { BoardTypes } from '../board-types'
import { DraggableProvided } from 'react-beautiful-dnd'

export declare module PropTypes {
  type StyledProps = {
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
    modalPos?: modalPos
    isQuickEdit?: boolean
    labelColor?: string
    isLabelExpanded?: boolean
  }

  type DndTypes = {
    isDragging?: boolean
    isDraggingOver?: boolean
  }

  interface modalPos {
    top: number
    left: number
  }

  interface ChildrenProp {
    children: React.ReactNode
  }

  type ListPreviewProps = {
    list: BoardTypes.list
    idx: number
    isDraggingOver: boolean
    onListUpdate: (list: BoardTypes.list) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
  }

  type ListHeaderProps = {
    list: BoardTypes.list
    dragHandleProps?: DraggableProvided['dragHandleProps']
    onListUpdate: (list: BoardTypes.list) => void
  }

  type TaskPreviewProps = {
    task: task
    idx: number
    handleTaskEdit: (task: BoardTypes.task) => void
    onLabelsUpdate: (labels: BoardTypes.label[]) => void
  }

  type BoardNavCmp = {
    board: BoardTypes.board
    onBoardUpdate: (board: BoardTypes.board) => void
    onSidenavOpen: () => void
  }

  type MemberListProps = {
    members: BoardTypes.member[] | undefined
  }

  interface ContainersProps {
    board?: board
    list?: list
    task?: task
    labels?: label[]
  }

  type board = BoardTypes.board
  type list = BoardTypes.list
  type task = BoardTypes.task
  type label = BoardTypes.label

  type TaskComposerProps = {
    handleComposerToggle: () => void
    handleTaskAdd: (taskTitle: task['title']) => void
  }

  type ListComposerProps = {
    onAddList: (listTitle: list['title']) => void
  }

  type QuickEditorProps = {
    children?: React.ReactNode
    modalPos?: modalPos
    task: PropTypes.task
    handleTaskLabelChange: (label: PropTypes.label) => void
    onChangeSubmit?: (ev: React.MouseEvent) => void
    onClose?: (ev?: React.MouseEvent) => void
    onLabelsUpdate: (labels: PropTypes.label[]) => void
  }

  type BadgesModalProps = {
    title: string
    children?: React.ReactNode
    modalPos?: modalPos
    modalWrapperRef?: React.RefObject<HTMLDivElement>
    onClose?: () => void
  }

  type LabelProps = {
    label?: PropTypes.label
    task: PropTypes.task
    handleTaskLabelChange: (label: PropTypes.label) => void
    onLabelsUpdate?: (labels: PropTypes.label[]) => void
    handleLabelChange?: (label: PropTypes.label) => void
  }

  type HeaderModalProps = {
    onClose: (ev?: React.MouseEvent) => void
    children: React.ReactNode
    title: string
    modalPos: modalPos
  }

  type LinkProps = {
    children: React.ReactNode
    type: string
    isInModal?: boolean
    handleMenuToggle?: (ev: React.MouseEvent) => void
  }

  type NavLinksProps = {
    windowWidth: number
    isMenuOpen: boolean
    modalPos: modalPos
    handleMenuToggle: (ev?: React.MouseEvent) => void
  }

  type TaskCmps = {
    task: BoardTypes.task
    taskRef?: React.RefObject<HTMLDivElement>
    isQuickEditOpen?: boolean
    handleTaskTitleChange?: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void
    taskTitle?: string
  }

  interface LabelsInterface {
    [key: string]: { static: string; hover: string }
  }

  type SidenavProps = {
    isSidenavOpen: boolean
    onSidenavClose: () => void
  }
}
