import React from 'react'
import LoggedUserContext from './contexts/userLogin'
import Board from './containers/board/Board'
import AppHeader from './components/app-header/AppHeader'
import AppWrapper from './styled/App-wrapper.styled'
import { UserTypes } from './types/user-types'
import TaskPage from './containers/task/TaskPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [loggedUserId, setLoggedUser] = React.useState<UserTypes.User['id'] | undefined>(() => {
    const user = sessionStorage.getItem('loggedUser')
    return user ? JSON.parse(user).id : undefined
  })

  // TODO: Routing will change as soon pages like Home, Templates and others will be ready
  return (
    <AppWrapper>
      <LoggedUserContext.Provider value={{ loggedUserId, setLoggedUser }}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="t/:taskId" element={<TaskPage />} />
        </Routes>
      </LoggedUserContext.Provider>
    </AppWrapper>
  )
}

export default App
