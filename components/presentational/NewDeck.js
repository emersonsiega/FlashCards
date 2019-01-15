import React, { Component } from 'react'
import styled from 'styled-components/native'

import MainButton from './MainButton'

const View = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-start;
  padding: 20px;
  background: ${props => props.theme.background};
  align-items: center;
`

const Title = styled.Text`
  font-size: 25px;
  color: ${props => props.theme.text};
`

const Input = styled.TextInput`
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.inactiveBorder};
  font-size: 22px;
  padding: 5px;
  margin: 5px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  margin-bottom: 20px;
`

const InputGroup = styled.View`
  width: 100%;
`

const CenteredButton = styled(MainButton)``

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
    const { title, color } = this.state

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
    <View>
      <InputGroup>
        <Title>Deck title</Title>
        <Input
          autoFocus={true}
          placeholder=""
          value={this.state.title}
          onChangeText={this.handleTitleChange}
        />
      </InputGroup>
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
