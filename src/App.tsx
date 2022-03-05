import React from 'react'
import { Link, Outlet, Route, Routes, useRoutes } from 'react-router-dom'

import { UserTypes } from './types/user-types'
import LoggedUserContext from './contexts/userLogin'
import routes from './routes'

import AppWrapper from './styled/App-wrapper.styled'
import Board from './containers/board/Board'
import TaskPage from './containers/task/TaskPage'
import AppHeader from './components/app-header/AppHeader'

const App = () => {
  const [loggedUserId, setLoggedUser] = React.useState<UserTypes.User['id'] | undefined>(() => {
    const user = sessionStorage.getItem('loggedUser')
    return user ? JSON.parse(user).id : undefined
  })
  const element = useRoutes(routes)

  // TODO: Routing will change as soon pages like Home, Templates and others will be ready
  return (
    <AppWrapper id="app-wrapper">
      <LoggedUserContext.Provider value={{ loggedUserId, setLoggedUser }}>
        {element}
        {/* <Routes>
          <Route path="/" element={<Board />} />
          <Route path="t/:taskId" element={<TaskPage />} />
        </Routes> */}
      </LoggedUserContext.Provider>
    </AppWrapper>
  )
}

export default App
