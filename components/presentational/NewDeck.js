import React, { Component } from 'react'
import styled from 'styled-components/native'

import MainButton from './MainButton'
import InputGroup from './InputGroup'

const View = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-start;
  padding: 20px;
  background: ${props => props.theme.background};
  align-items: center;
`

const CenteredButton = styled(MainButton)`
  margin-top: auto;
  margin-bottom: 10px;
  align-self: center;
  margin-bottom: 10px;
`

class NewDeck extends Component {
  state = {
    title: '',
  }

  handleTitleChange = text => {
    this.setState(() => ({
      title: text,
    }))
  }

  handleAddDeck = () => {
    const { onAddDeck } = this.props
    const { title } = this.state

    onAddDeck({
      title,
      questions: [],
    })

    this.setState(() => ({
      title: '',
    }))
  }

  canAddDeck = () => this.state.title.length > 0

  render = () => (
    <View behavior="padding">
      <InputGroup
        title="Deck title"
        value={this.state.title}
        onChange={this.handleTitleChange}
      />
      <CenteredButton
        disabled={!this.canAddDeck()}
        text="ADD DECK"
        onPress={this.handleAddDeck}
        width={200}
      />
    </View>
  )
}

export default NewDeck
