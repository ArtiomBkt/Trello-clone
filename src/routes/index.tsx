import React from 'react'
import type { RouteObject } from 'react-router-dom'

import Board from 'containers/board/Board'
import TaskPage from 'containers/task/TaskPage'

const routes: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <App />,
  //   children: [
  //     // { index: true, element: <Home /> }
  //     {
  //       path: '/b',
  //       // element: <BoardTemplates />
  //       element: <Board />,
  //       children: [{ path: '/t/:taskId', element: <TaskPage /> }]
  //     },
  //     { path: '*', element: <div>No match</div> }
  //   ]
  // }
  {
    path: '/',
    element: <Board />,
    children: [
      // { index: true, element: <Home /> }
      {
        path: '/t/:taskId',
        // element: <BoardTemplates />
        element: <TaskPage />
        // children: [{ path: '/t/:taskId', element: <TaskPage /> }]
      },
      { path: '*', element: <div>No match</div> }
    ]
  }
]

export default routes
