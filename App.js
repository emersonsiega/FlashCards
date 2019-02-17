import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import ThemeProvider from './components/presentational/ThemeProvider'
import BottomNavigatorContainer from './components/container/BottomNavigatorContainer'
import StatusBar from './components/presentational/StatusBar'

import { setLocalNotification } from './utils/NotificationHelper'

class App extends Component {
  async componentDidMount() {
    setLocalNotification()
  }

  render = () => (
    <Provider store={store}>
      <ThemeProvider>
        <>
          <StatusBar />
          <BottomNavigatorContainer />
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
