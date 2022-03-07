import React from 'react'
import { ServiceTypes } from 'types/service-types'
import { BoardTypes } from 'types/board-types'

export const boardService = {
  getBoardById,
  handleListMove,
  handleTaskMove,
  getEmptyTask,
  getBoardStyle,
  getEmptyList,
  save
}

const gBoard: BoardTypes.board = getDummyBoard()

function getBoardById(boardId?: Parameters<ServiceTypes.getBoardById>): ReturnType<ServiceTypes.getBoardById> {
  // const board = getDummyBoard()

  // return board
  return gBoard
}

function handleListMove({ board, draggableId, source, destination }: ServiceTypes.dragAndDropArgs): BoardTypes.list[] {
  if (!board || !board.lists) {
    // Should not happen
    throw new Error('Dragged a list while there are no lists')
  }

  const draggedList = board.lists.find(list => list.id === draggableId)
  if (!draggedList) {
    // Should not happen
    throw new Error('No list was dragged')
  }

  const newLists = [...board.lists]
  newLists.splice(source.index, 1)
  newLists.splice(destination.index, 0, draggedList)

  return newLists
}

function handleTaskMove({ board, draggableId, source, destination }: ServiceTypes.dragAndDropArgs): BoardTypes.list[] {
  if (!board || !board.lists) {
    // Should not happen
    throw new Error('Dragged a task while there are no lists')
  }

  const startList = board.lists.find(list => list.id === source.droppableId)
  const endList = board.lists.find(list => list.id === destination.droppableId)

  const draggedTask = startList!.tasks.find(task => task.id === draggableId)
  if (!draggedTask) {
    // Should not happen
    throw new Error('No task was dragged')
  }

  if (startList!.id === endList!.id) {
    const newTasks = [...startList!.tasks]
    newTasks.splice(source.index, 1)
    newTasks.splice(destination.index, 0, draggedTask)

    const newList = {
      ...startList!,
      tasks: newTasks
    }

    const newLists = [...board.lists]
    const idx = newLists.findIndex(list => list.id === source.droppableId)
    newLists.splice(idx, 1, newList)

    return newLists
  }

  // TODO: Test edge cases here to see if returning early is more effective than using 'else'

  const newStartTasks = [...startList!.tasks]
  newStartTasks.splice(source.index, 1)
  const newStartList = {
    ...startList!,
    tasks: newStartTasks
  }

  const newEndTasks = [...endList!.tasks]
  newEndTasks.splice(destination.index, 0, draggedTask)
  const newEndList = {
    ...endList!,
    tasks: newEndTasks
  }

  const newLists = [...board.lists]
  const startListIdx = newLists.findIndex(list => list.id === startList!.id)
  newLists.splice(startListIdx, 1, newStartList)
  const endListIdx = newLists.findIndex(list => list.id === endList!.id)
  newLists.splice(endListIdx, 1, newEndList)

  return newLists
}

function getEmptyTask(): ReturnType<ServiceTypes.getEmptyTask> {
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

function getEmptyList(): ReturnType<ServiceTypes.getEmptyList> {
  return {
    id: _makeId(),
    title: '',
    tasks: []
  }
}

function getBoardStyle() {
  const board = getBoardById()
  return board.style.background
}

function save({ value, type }: ServiceTypes.saveArgs) {
  return value.id ? _update(value, type) : _add(value, type)
}

function _add(value: ServiceTypes.valueArgs, type: ServiceTypes.typeArgs) {
  value.id = _makeId()
  if (type === 'task') return gBoard.lists
  // gBoard.lists?.push(value)
  // return gBoard
}

function _update(value: ServiceTypes.valueArgs, type: ServiceTypes.typeArgs) {}

function _makeId(length = 10) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let txt = ''
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getDummyBoard(): BoardTypes.board {
  return {
    id: 'b100',
    title: 'Project tracking',
    createdBy: {
      id: 'u100',
      username: 'ArtiomB',
      fullname: 'Artiom bkt',
      image: '',
      starredBoardsIds: [],
      watchList: []
    },
    style: {
      background: '#0079bf'
    },
    members: [
      {
        id: 'u100',
        username: 'ArtiomB',
        fullname: 'Artiom bkt',
        image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
        starredBoardsIds: [],
        watchList: []
      }
    ],
    labels: [
      {
        id: 'l101',
        title: 'done',
        color: 'green'
      },
      {
        id: 'l102',
        title: 'attention',
        color: 'yellow'
      },
      {
        id: 'l103',
        title: 'urgent',
        color: 'orange'
      },
      {
        id: 'l104',
        title: 'bug',
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
        title: 'idea',
        color: 'navy'
      }
    ],
    description: '',
    archive: [],
    lists: [
      {
        id: 'g100',
        title: 'Backlog',
        tasks: [
          {
            id: 't100',
            title: 'Set up external log in options.\nApple Id, google, facebook',
            description: '',
            style: {
              background: 'blue',
              fullCover: true
            },
            members: [],
            labels: [],
            startDate: {
              isDone: false
            },
            dueDate: {
              timestamp: 1646087624876,
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'u2i2R5YfHi',
            title: "Header links should work when there's user auth",
            description: '',
            style: {
              background: 'blue',
              fullCover: true
            },
            members: [],
            labels: [],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't101',
            title: "Some forms don't behave as expected",
            description: 'task two description',
            style: {
              background: 'blue',
              fullCover: true
            },
            members: [],
            labels: [
              {
                id: 'l104',
                title: 'bug',
                color: 'red'
              },
              {
                id: 'l103',
                title: 'urgent',
                color: 'orange'
              }
            ],
            startDate: {
              timestamp: 1545959831361,
              isDone: false
            },
            dueDate: {
              timestamp: 1545989831361,
              isDone: false
            },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoardsIds: [],
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
          },
          {
            id: '8v4846hxDN',
            title: 'Users should be able to upload their own images as covers besides Unsplash',
            description: '',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l107',
                title: 'idea',
                color: 'navy'
              },
              {
                id: 'l106',
                title: '',
                color: 'blue'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'WGeTBAh2hg',
            title: 'Web sockets optimization required',
            description: '',
            style: {
              background: 'red',
              fullCover: false
            },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoardsIds: [],
                watchList: []
              }
            ],
            labels: [
              {
                id: 'l102',
                title: 'attention',
                color: 'yellow'
              },
              {
                id: 'l103',
                title: 'urgent',
                color: 'orange'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: '4UNvzIxfkU',
            title: 'Sidemenu needs to be worked on',
            description: '',
            style: {
              background: 'navy',
              fullCover: false
            },
            members: [],
            labels: [],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          }
        ]
      },
      {
        id: 'g102',
        title: 'Current sprint',
        tasks: [
          {
            id: 't105',
            title: 'Task view route',
            description: '',
            style: {
              background: 'yellow',
              fullCover: false
            },
            members: [
              {
                id: 'u100',
                username: 'ArtiomB',
                fullname: 'Artiom bkt',
                image: '',
                starredBoardsIds: [],
                watchList: []
              }
            ],
            labels: [],
            startDate: {
              timestamp: 1242101225068,
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'bRlR4CfyPR',
            title: 'Side menu',
            description: '',
            style: {
              background: 'red',
              fullCover: true
            },
            members: [],
            labels: [
              {
                id: 'l102',
                title: 'attention',
                color: 'yellow'
              },
              {
                id: 'l103',
                title: 'urgent',
                color: 'orange'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't103',
            title: 'Edit dates on tasks',
            description: '',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l102',
                title: 'attention',
                color: 'yellow'
              },
              {
                id: 'l103',
                title: 'urgent',
                color: 'orange'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              timestamp: 1945959831361,
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'cCb6dEat1y',
            title: 'Task & list archive',
            description: '',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l102',
                title: 'attention',
                color: 'yellow'
              },
              {
                id: 'l105',
                title: '',
                color: 'purple'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          }
        ]
      },
      {
        id: 'g103',
        title: 'Ideas',
        tasks: [
          {
            id: 'FicqlKszNO',
            title: 'More board view. Board, calendar, dashboard, timeline, map',
            description: '',
            style: {
              background: 'cyan',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l107',
                title: 'idea',
                color: 'navy'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'aUFQMw3EJj',
            title: "User subscription to specific task or whole board's notifications",
            description: '',
            style: {
              background: 'cyan',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l107',
                title: 'idea',
                color: 'navy'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 'w8H2UbWfSX',
            title: 'Filter tasks',
            description: '',
            style: {
              background: 'cyan',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l107',
                title: 'idea',
                color: 'navy'
              }
            ],
            startDate: {
              isDone: false
            },
            dueDate: {
              isDone: false
            },
            comments: [],
            checklists: [],
            isArchived: false
          }
        ]
      },
      {
        id: 'g101',
        title: 'Done',
        tasks: [
          {
            id: 't104',
            title: "Edit task's cover\n",
            description: 'task two description',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l101',
                title: 'done',
                color: 'green'
              }
            ],
            startDate: {
              timestamp: 1642101255068,
              isDone: true
            },
            dueDate: {
              timestamp: 1642101255069,
              isDone: true
            },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoardsIds: [],
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
          },
          {
            id: 't109',
            title: "Edit task's labels",
            description: '',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l101',
                title: 'done',
                color: 'green'
              }
            ],
            startDate: {
              timestamp: 1646061915290,
              isDone: false
            },
            dueDate: {
              timestamp: 1646061915290,
              isDone: true
            },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't110',
            title: "Edit board's title",
            description: 'task two description',
            style: {
              background: '',
              fullCover: false
            },
            members: [],
            labels: [
              {
                id: 'l101',
                title: 'done',
                color: 'green'
              }
            ],
            startDate: {
              timestamp: 1642101255068,
              isDone: false
            },
            dueDate: {
              isDone: true
            },
            comments: [
              {
                id: 'c100',
                byMember: {
                  id: 'u100',
                  username: 'ArtiomB',
                  fullname: 'Artiom bkt',
                  image: '',
                  starredBoardsIds: [],
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
