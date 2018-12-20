import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { 
    Text, 
    View 
} from 'react-native'

import store from './store'

class App extends Component {
  render = () => (
    <Provider store={store}>
      <View>
        <Text>FlashCards!</Text>
      </View>
    </Provider>
  )
}

export default App