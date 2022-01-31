import * as boardInterfaces from '../interfaces/board.interface'
import * as taskInterfaces from '../interfaces/task.interface'

type valueArgs = boardInterfaces.list | taskInterfaces.task | boardInterfaces.board
type typeArgs = 'task' | 'list' | 'board'

interface saveArgs {
  value: valueArgs
  type: typeArgs
}

export const boardService = {
  getBoardById
}

const gBoard: boardInterfaces.board = getDummyBoard()

function getBoardById(boardId?: string): boardInterfaces.board {
  // const board = getDummyBoard()

  // return board
  return gBoard
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
            dueDate: { timestamp: 1242101225068, isDone: false },
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't101',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ff3030', fullCover: true },
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
            startDate: { timestamp: 1642101255068, isDone: true},
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
            style: { background: '#ff3030', fullCover: true },
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
            startDate: { timestamp: 1242101225068, isDone: false},
            dueDate: { timestamp: 1242101225068, isDone: false},
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't106',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ff3030', fullCover: true },
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
            startDate: { timestamp: 1242101225068, isDone: false},
            dueDate: { timestamp: 1242101225068, isDone: false},
            comments: [],
            checklists: [],
            isArchived: false
          },
          {
            id: 't108',
            title: 'task two',
            description: 'task two description',
            style: { background: '#ff3030', fullCover: true },
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
            style: { background: '#ff3030', fullCover: true },
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
      }
    ]
  }
}
