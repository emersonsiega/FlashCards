import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import ThemeProvider from './components/presentational/ThemeProvider'
import BottomNavigator from './components/presentational/BottomNavigator'

class App extends Component {
  render = () => (
    <Provider store={store}>
      <ThemeProvider>
        <BottomNavigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App