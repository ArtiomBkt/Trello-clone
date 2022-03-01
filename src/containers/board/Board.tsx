import React, { useLayoutEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { boardService } from '../../services/board.service'
import { userService } from '../../services/user.service'
import useLocalStorageState from '../../hooks/useLocalStorageState'
import { BoardTypes } from '../../types/board-types/index'

import { BoardContainer, BoardContentWrapper, BoardWrapper, AppWrapper } from './Board.styled'
import { ListPreviewContainer } from '../../components/list/ListPreview.styled'

import LabelsContext from '../../contexts/labelsToggle'
import BoardNav from '../../components/board/board-navbar/BoardNav'
import BoardSidebar from '../../components/board/board-sidebar/Sidebar'
import ListPreview from '../../components/list/ListPreview'
import ListComposer from '../../components/board/list-composer/ListComposer'

const Board = () => {
  const [board, setBoard] = useLocalStorageState('board', boardService.getBoardById())
  const [isSidenavOpen, setIsSidenavOpen] = useState(false)
  const [isLabelsExpanded, setIsLabelsExpanded] = useState(false)

  useLayoutEffect(() => {
    const elRoot = document.getElementById('root')
    if (elRoot) elRoot.style.background = board.style.background
  }, [board.style.background])

  const onDragEnd = (result: DropResult): void => {
    const { destination, source, type, draggableId } = result

    if (!board || !board.lists || !destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const args = { board, destination, draggableId, source }
    const newLists = type === 'LIST' ? boardService.handleListMove(args) : boardService.handleTaskMove(args)

    const newBoard = {
      ...board,
      lists: newLists
    }

    onBoardUpdate(newBoard)
  }

  // TODO: move to utils or somewhere more appropriate =>
  const getUpdatedLists = (updatingList: BoardTypes.list): BoardTypes.list[] => {
    const idx = board.lists!.findIndex(list => list.id === updatingList.id)
    const newLists = [...board.lists!]

    if (idx !== -1) {
      newLists.splice(idx, 1, updatingList)
    } else {
      newLists.push(updatingList)
    }

    return newLists
  }

  const onAddList = (listTitle: string): void => {
    const newList = boardService.getEmptyList()
    newList.title = listTitle

    onListUpdate(newList)
  }

  const onListUpdate = (newList: BoardTypes.list): void => {
    const newLists = getUpdatedLists(newList)

    const newBoard = {
      ...board,
      lists: newLists
    }

    onBoardUpdate(newBoard)
  }

  const onLabelsUpdate = (newLabels: BoardTypes.label[]): void => {
    const newBoard = {
      ...board,
      labels: newLabels
    }

    onBoardUpdate(newBoard)
  }

  const onArchiveItem = (archivedItem: BoardTypes.archivedItem, updatingList?: BoardTypes.list): void => {
    const newLists = updatingList ? getUpdatedLists(updatingList) : [...board.lists!]

    const archive = [...board.archive]
    archive.push(archivedItem)

    const newBoard = {
      ...board,
      lists: newLists,
      archive
    }

    onBoardUpdate(newBoard)
  }

  const onUnarchiveItem = ({ fromList, index, item }: BoardTypes.archivedItem): void => {
    const listToUpdate = JSON.parse(JSON.stringify(board.lists?.find(list => list.id === fromList)))
    if (listToUpdate) {
      listToUpdate.tasks.splice(index, 0, item)
    }
    const newLists = getUpdatedLists(listToUpdate)

    const newArchive = [...board.archive]
    const archivedItemIdx = newArchive.findIndex(archiveItem => archiveItem.item.id === item.id)
    if (archivedItemIdx !== -1) {
      newArchive.splice(archivedItemIdx, 1)
    }

    const newBoard = {
      ...board,
      lists: newLists,
      archive: newArchive
    }

    onBoardUpdate(newBoard)
  }

  const onArchiveItemRemove = ({ item }: BoardTypes.archivedItem): void => {
    const newArchive = [...board.archive]
    const archivedItemIdx = newArchive.findIndex(archiveItem => archiveItem.item.id === item.id)
    if (archivedItemIdx !== -1) {
      newArchive.splice(archivedItemIdx, 1)
    }

    const newBoard = {
      ...board,
      archive: newArchive
    }

    onBoardUpdate(newBoard)
  }

  const onUserToggleStar = (ev: React.MouseEvent) => {
    ev.preventDefault()

    const loggedUserId = JSON.parse(sessionStorage.getItem('loggedUser') || '')?.id
    const user = userService.getUserById(loggedUserId)
    if (!user) {
      throw new Error('User not found')
    }

    const newStarredBoards = [...user.starredBoardsIds]
    const boardIdx = newStarredBoards.findIndex(starred => starred === board.id)

    if (boardIdx === -1) {
      newStarredBoards.push(board.id)
    } else {
      newStarredBoards.splice(boardIdx, 1)
    }

    const newUser = {
      ...user,
      starredBoardsIds: newStarredBoards
    }

    // TODO: Build user reducer for user associated actions
    console.log(newUser)
  }

  const onBoardUpdate = (newBoard: BoardTypes.board): void => {
    // dispatch({ type: 'BOARD_UPDATE', payload: newBoard })
    setBoard(newBoard)
  }

  const toggleSidenav = (): void => {
    setIsSidenavOpen(prev => !prev)
  }

  if (!board) return <div>loading...</div>
  return (
    <BoardContainer>
      <BoardContentWrapper>
        <AppWrapper>
          <div style={{ position: 'absolute', inset: '0' }}>
            <BoardWrapper isSidenavOpen={isSidenavOpen}>
              <BoardNav onUserToggleStar={onUserToggleStar} onSidenavOpen={toggleSidenav} onBoardUpdate={onBoardUpdate} board={board} />
              <div style={{ flexGrow: 1, position: 'relative' }}>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable direction="horizontal" droppableId="board" type="LIST">
                    {provided => (
                      <ListPreviewContainer {...provided.droppableProps} ref={provided.innerRef}>
                        <LabelsContext.Provider value={{ isLabelsExpanded, setIsLabelsExpanded }}>
                          {board.lists?.map((list, index) => {
                            const listPreviewProps = {
                              key: list.id,
                              list,
                              index,
                              onArchiveItem,
                              onLabelsUpdate,
                              onListUpdate
                            }
                            return <ListPreview {...listPreviewProps} />
                          })}
                          {provided.placeholder}
                          <ListComposer onAddList={onAddList} />
                        </LabelsContext.Provider>
                      </ListPreviewContainer>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </BoardWrapper>
            {isSidenavOpen && (
              <BoardSidebar
                board={board}
                onArchiveItemRemove={onArchiveItemRemove}
                onUnarchiveItem={onUnarchiveItem}
                isSidenavOpen={isSidenavOpen}
                onSidenavClose={toggleSidenav}
              />
            )}
          </div>
        </AppWrapper>
      </BoardContentWrapper>
    </BoardContainer>
  )
}

export default Board
