import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import ThemeProvider from './components/presentational/ThemeProvider'
import BottomNavigatorContainer from './components/container/BottomNavigatorContainer'
import StatusBar from './components/presentational/StatusBar'

import { getDecks, setDecks, removeDecks } from './api/decks'

class App extends Component {
  componentDidMount() {
    //TODO: Remove
    // removeDecks()
    // setDecks({
    //   'Math': {
    //     title: 'Math',
    //     color: theme.cardColors[0],
    //     questions: [
    //       {
    //         question: 'Question one?',
    //         answer: "Answer one"
    //       },
    //       {
    //         question: 'Question two?',
    //         answer: "Answer two"
    //       }
    //     ]
    //   },
    //   'History': {
    //     title: 'History',
    //     color: theme.cardColors[1],
    //     questions: [
    //       {
    //         question: 'Question one?',
    //         answer: "Answer one"
    //       },
    //       {
    //         question: 'Question two?',
    //         answer: "Answer two"
    //       }
    //     ]
    //   }
    // }).then(console.log('Default decks saved'))
    
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