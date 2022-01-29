import React from 'react'
import Board from './containers/board/Board'
import AppWrapper from './styled/App-wrapper.styled'
import AppHeader from './components/app-header/AppHeader'

const App = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Board />
    </AppWrapper>
  )
}

export default App
