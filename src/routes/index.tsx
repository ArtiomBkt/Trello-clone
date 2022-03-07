import React from 'react'
import type { RouteObject } from 'react-router-dom'

const Board = React.lazy(() => import('containers/board/Board'))
const TaskPage = React.lazy(() => import('containers/task/TaskPage'))

// TODO: Create a no match component
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Board />,
    children: [
      {
        path: '/t/:taskId',
        element: <TaskPage />
      },
      { path: '*', element: <div>No match</div> }
    ]
  }
]

export default routes
