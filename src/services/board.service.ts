import * as boardInterfaces from '../interfaces/board.interface'
import * as taskInterfaces from '../interfaces/task.interface'

type valueArgs = boardInterfaces.list | taskInterfaces.task | boardInterfaces.board
type typeArgs = 'task' | 'list' | 'board'
type dndTypes = {
  droppableId: string
  index: number
}

interface saveArgs {
  value: valueArgs
  type: typeArgs
}

interface dragAndDropArgs {
  board: boardInterfaces.board
  draggableId: string
  destination: dndTypes
  source: dndTypes
}

export const boardService = {
  getBoardById,
  handleListMove,
  handleTaskMove,
  getEmptyTask
}

const gBoard: boardInterfaces.board = getDummyBoard()

function getBoardById(boardId?: string): boardInterfaces.board {
  // const board = getDummyBoard()

  // return board
  return gBoard
}

function handleListMove({ board, draggableId, source, destination }: dragAndDropArgs): boardInterfaces.list[] | undefined {
  if (!board || !board.lists) return

  const draggedList = board.lists.find(list => list.id === draggableId)
  if (!draggedList) return

  const newLists = [...board.lists]
  newLists.splice(source.index, 1)
  newLists.splice(destination.index, 0, draggedList)

  return newLists
}

function handleTaskMove({ board, draggableId, source, destination }: dragAndDropArgs): boardInterfaces.list[] | undefined {
  if (!board || !board.lists) return

  const startList = board.lists.find(list => list.id === source.droppableId)
  const endList = board.lists.find(list => list.id === destination.droppableId)
  if (!startList || !endList) return

  const draggedTask = startList.tasks.find(task => task.id === draggableId)
  if (!draggedTask) return

  if (startList.id === endList.id) {
    const newTasks = [...startList.tasks]
    newTasks.splice(source.index, 1)
    newTasks.splice(destination.index, 0, draggedTask)

    const newList = {
      ...startList,
      tasks: newTasks
    }

    const newLists = [...board.lists]
    const idx = newLists.findIndex(list => list.id === source.droppableId)
    newLists.splice(idx, 1, newList)

    return newLists
  } else {
    const newStartTasks = [...startList.tasks]
    newStartTasks.splice(source.index, 1)
    const newStartList = {
      ...startList,
      tasks: newStartTasks
    }

    const newEndTasks = [...endList.tasks]
    newEndTasks.splice(destination.index, 0, draggedTask)
    const newEndList = {
      ...endList,
      tasks: newEndTasks
    }

    const newLists = [...board.lists]
    const startListIdx = newLists.findIndex(list => list.id === startList.id)
    newLists.splice(startListIdx, 1, newStartList)
    const endListIdx = newLists.findIndex(list => list.id === endList.id)
    newLists.splice(endListIdx, 1, newEndList)

    return newLists
  }
}

function getEmptyTask() {
  return {
    id: _makeId(),
    title: '',
    description: '',
    style: { background: '', fullCover: false },
    members: [],
    labels: [],
    startDate: { timestamp: undefined, isDone: false },
    dueDate: { timestamp: undefined, isDone: false },
    comments: [],
    checklists: [],
    isArchived: false
  }
}

function save({ value, type }: saveArgs) {
  return value.id ? _update(value, type) : _add(value, type)
}

function _add(value: valueArgs, type: typeArgs) {
  value.id = _makeId()
  if (type === 'task') return gBoard.lists
  // gBoard.lists?.push(value)
  // return gBoard
}

function _update(value: valueArgs, type: typeArgs) {}

function _makeId(length = 10) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let txt = ''
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getDummyBoard(): boardInterfaces.board {
  return {
    id: 'b100',
    title: 'board one',
    createdBy: {
      id: 'u100',
      username: 'ArtiomB',
      fullname: 'Artiom bkt',
      image: '',
      starredBoards: [],
      watchList: []
    },
    style: { background: '#0079bf' },
    members: [
      {
        id: 'u100',
        username: 'ArtiomB',
        fullname: 'Artiom bkt',
        image: '',
        starredBoards: [],
        watchList: []
      }
    ],
    labels: [
      {
        id: 'l101',
        title: '',
        color: 'green'
      },
      {
        id: 'l102',
        title: '',
        color: 'yellow'
      },
      {
        id: 'l103',
        title: '',
        color: 'orange'
      },
      {
        id: 'l104',
        title: '',
        color: 'red'
      },
      {
        id: 'l105',
        title: '',
        color: 'purple'
      },
      {
        id: 'l106',
        title: '',
        color: 'blue'
      },
      {
        id: 'l107',
        title: '',
        color: 'navy'
      }
    ],
    description: '',
    archive: [],
    lists: [
      {
        id: 'g100',
        title: 'group 1',
        tasks: [
          {
            id: 't100',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [
              { id: 'l101', title: 'done', color: 'green' },
              { id: 'l102', title: '', color: 'yellow' },
              { id: 'l107', title: '', color: 'navy' }
            ],
            startDate: { timestamp: 1242101225068, isDone: false },
            dueDate: { timestamp: undefined, isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't101',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ef7564', fullCover: true },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoards: [],
                watchList: []
              }
            ],
            labels: [
              { id: 'l101', title: '', color: 'green' },
              { id: 'l103', title: '', color: 'orange' }
            ],
            startDate: { timestamp: 1642101255068, isDone: true },
            dueDate: { timestamp: 1642101255069, isDone: true },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoards: [],
                  watchList: []
                },
                content: 'comment test',
                createdAt: 1642101255068
              }
            ],
            checklists: [
              {
                id: 'check100',
                title: 'checklist one',
                todos: [
                  {
                    id: 'todo100',
                    title: 'todo one',
                    isDone: false
                  },
                  {
                    id: 'todo101',
                    title: 'todo two',
                    isDone: true
                  }
                ]
              }
            ],
            isArchived: false
          }
        ]
      },
      {
        id: 'g102',
        title: 'group 1',
        tasks: [
          {
            id: 't103',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l101', title: 'done', color: 'green' }],
            startDate: { timestamp: 1242101225068, isDone: false },
            dueDate: { timestamp: 1242101225068, isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't104',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ef7564', fullCover: true },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoards: [],
                watchList: []
              }
            ],
            labels: [
              { id: 'l101', title: 'done', color: 'green' },
              { id: 'l105', title: 'bug', color: 'purple' }
            ],
            startDate: { timestamp: 1642101255068, isDone: true },
            dueDate: { timestamp: 1642101255069, isDone: true },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoards: [],
                  watchList: []
                },
                content: 'comment test',
                createdAt: 1642101255068
              }
            ],
            checklists: [
              {
                id: 'check100',
                title: 'checklist one',
                todos: [
                  {
                    id: 'todo100',
                    title: 'todo one',
                    isDone: false
                  },
                  {
                    id: 'todo101',
                    title: 'todo two',
                    isDone: true
                  }
                ]
              }
            ],
            isArchived: false
          }
        ]
      },
      {
        id: 'g103',
        title: 'group 1',
        tasks: [
          {
            id: 't105',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l101', title: 'done', color: 'green' }],
            startDate: { timestamp: 1242101225068, isDone: false },
            dueDate: { timestamp: undefined, isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't106',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ef7564', fullCover: true },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoards: [],
                watchList: []
              }
            ],
            labels: [
              { id: 'l101', title: 'done', color: 'green' },
              { id: 'l103', title: 'bug', color: 'orange' }
            ],
            startDate: { timestamp: 1642101255068, isDone: false },
            dueDate: { timestamp: 1642101255069, isDone: false },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoards: [],
                  watchList: []
                },
                content: 'comment test',
                createdAt: 1642101255068
              }
            ],
            checklists: [
              {
                id: 'check100',
                title: 'checklist one',
                todos: [
                  {
                    id: 'todo100',
                    title: 'todo one',
                    isDone: false
                  },
                  {
                    id: 'todo101',
                    title: 'todo two',
                    isDone: true
                  }
                ]
              }
            ],
            isArchived: false
          }
        ]
      },
      {
        id: 'g104',
        title: 'group 1',
        tasks: [
          {
            id: 't107',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l101', title: 'done', color: 'green' }],
            startDate: { timestamp: 1242101225068, isDone: false },
            dueDate: { timestamp: 1242101225068, isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't108',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ef7564', fullCover: true },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoards: [],
                watchList: []
              }
            ],
            labels: [
              { id: 'l101', title: 'done', color: 'green' },
              { id: 'l102', title: 'bug', color: 'yellow' }
            ],
            startDate: { timestamp: 1642101255068, isDone: false },
            dueDate: { timestamp: 1642101255069, isDone: false },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoards: [],
                  watchList: []
                },
                content: 'comment test',
                createdAt: 1642101255068
              }
            ],
            checklists: [
              {
                id: 'check100',
                title: 'checklist one',
                todos: [
                  {
                    id: 'todo100',
                    title: 'todo one',
                    isDone: false
                  },
                  {
                    id: 'todo101',
                    title: 'todo two',
                    isDone: true
                  }
                ]
              }
            ],
            isArchived: false
          }
        ]
      },
      {
        id: 'g101',
        title: 'group 2',
        tasks: [
          {
            id: 't109',
            title: 'task one group two',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l101', title: 'done', color: 'green' }],
            startDate: { timestamp: Date.now(), isDone: false },
            dueDate: { timestamp: Date.now(), isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't110',
            title: 'task two group two',
            description: 'task two description',
            style: { background: '#ef7564', fullCover: true },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoards: [],
                watchList: []
              }
            ],
            labels: [
              { id: 'l101', title: 'done', color: 'green' },
              { id: 'l102', title: 'bug', color: 'yellow' }
            ],
            startDate: { timestamp: 1642101255068, isDone: false },
            dueDate: { timestamp: undefined, isDone: false },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoards: [],
                  watchList: []
                },
                content: 'comment test',
                createdAt: 1642101255068
              }
            ],
            checklists: [
              {
                id: 'check100',
                title: 'checklist one',
                todos: [
                  {
                    id: 'todo100',
                    title: 'todo one',
                    isDone: false
                  },
                  {
                    id: 'todo101',
                    title: 'todo two',
                    isDone: true
                  }
                ]
              }
            ],
            isArchived: false
          }
        ]
      }
    ]
  }
}
