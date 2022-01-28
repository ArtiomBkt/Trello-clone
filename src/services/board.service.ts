import * as boardInterfaces from '../interfaces/board.interface'
import * as taskInterfaces from '../interfaces/task.interface'

type valueArgs = boardInterfaces.list | taskInterfaces.task | boardInterfaces.board
type typeArgs = 'task' | 'list' | 'board'

interface saveArgs {
  value: valueArgs,
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

function _update(value: valueArgs, type: typeArgs) {
  
}


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
      { id: 'l100', title: 'done', color: '#50ff80' },
      { id: 'l101', title: 'bug', color: '#ff5050' },
      { id: 'l102', title: 'urgent', color: '#80ffff' },
      { id: 'l103', title: '', color: '#309fff' }
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
            labels: [{ id: 'l100', title: 'done', color: '#50ff80' }],
            startDate: { timestamp: 1242101225068 },
            dueDate: { timestamp: 1242101225068, status: 'due soon' },
            comments: [],
            checklists: []
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
              { id: 'l100', title: 'done', color: '#50ff80' },
              { id: 'l101', title: 'bug', color: '#ff5050' }
            ],
            startDate: { timestamp: 1642101255068 },
            dueDate: { timestamp: 1642101255069, status: 'done' },
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
            ]
          }
        ]
      },
      {
        id: 'g102',
        title: 'group 1',
        tasks: [
          {
            id: 't100',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l100', title: 'done', color: '#50ff80' }],
            startDate: { timestamp: 1242101225068 },
            dueDate: { timestamp: 1242101225068, status: 'due soon' },
            comments: [],
            checklists: []
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
              { id: 'l100', title: 'done', color: '#50ff80' },
              { id: 'l101', title: 'bug', color: '#ff5050' }
            ],
            startDate: { timestamp: 1642101255068 },
            dueDate: { timestamp: 1642101255069, status: 'done' },
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
            ]
          }
        ]
      },
      {
        id: 'g103',
        title: 'group 1',
        tasks: [
          {
            id: 't100',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l100', title: 'done', color: '#50ff80' }],
            startDate: { timestamp: 1242101225068 },
            dueDate: { timestamp: 1242101225068, status: 'due soon' },
            comments: [],
            checklists: []
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
              { id: 'l100', title: 'done', color: '#50ff80' },
              { id: 'l101', title: 'bug', color: '#ff5050' }
            ],
            startDate: { timestamp: 1642101255068 },
            dueDate: { timestamp: 1642101255069, status: 'done' },
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
            ]
          }
        ]
      },
      {
        id: 'g104',
        title: 'group 1',
        tasks: [
          {
            id: 't100',
            title: 'task one',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l100', title: 'done', color: '#50ff80' }],
            startDate: { timestamp: 1242101225068 },
            dueDate: { timestamp: 1242101225068, status: 'due soon' },
            comments: [],
            checklists: []
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
              { id: 'l100', title: 'done', color: '#50ff80' },
              { id: 'l101', title: 'bug', color: '#ff5050' }
            ],
            startDate: { timestamp: 1642101255068 },
            dueDate: { timestamp: 1642101255069, status: 'done' },
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
            ]
          }
        ]
      },
      {
        id: 'g101',
        title: 'group 2',
        tasks: [
          {
            id: 't103',
            title: 'task one group two',
            description: '',
            style: { background: '', fullCover: false },
            members: [],
            labels: [{ id: 'l100', title: 'done', color: '#50ff80' }],
            startDate: { timestamp: Date.now() },
            dueDate: { timestamp: Date.now(), status: '' },
            comments: [],
            checklists: []
          },
          {
            id: 't104',
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
              { id: 'l100', title: 'done', color: '#50ff80' },
              { id: 'l101', title: 'bug', color: '#ff5050' }
            ],
            startDate: { timestamp: 1642101255068 },
            dueDate: { timestamp: 1642101255069, status: 'done' },
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
            ]
          }
        ]
      }
    ]
  }
}
