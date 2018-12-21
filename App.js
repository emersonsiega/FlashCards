import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import ThemeProvider from './components/presentational/ThemeProvider'
import DecksList from './components/container/DecksList'

class App extends Component {
  render = () => (
    <Provider store={store}>
      <ThemeProvider>
        <DecksList />
      </ThemeProvider>
    </Provider>
  )
}

export default App