import React, { Component } from 'react'
import styled from 'styled-components'
import { KeyboardAvoidingView } from 'react-native'

import InputGroup from './InputGroup'
import MainButton from './MainButton'
import DeckCard from './DeckCard'

const NewCardContainer = styled(KeyboardAvoidingView)`
  background-color: ${props => props.theme.background};
  flex: 1;
  padding: 10px;
  justify-content: center;
`

const Content = styled.View`
  margin-top: auto;
  padding: 0px 10px 10px 10px;
`

const DeckCardContainer = styled(DeckCard)`
  margin-bottom: 10px;
`

const CenteredButton = styled(MainButton)`
  margin-top: auto;
  align-self: center;
  margin-bottom: 10px;
`

const INITIAL_STATE = {
  question: undefined,
  answer: undefined,
}

class NewCard extends Component {
  state = INITIAL_STATE

  handleChange = (text, field) => {
    this.setState(() => ({
      [field]: text,
    }))
  }

  onPress = e => {
    e.preventDefault()
    const { question, answer } = this.state
    const { deck } = this.props

    this.props.onAddQuestion(deck, {
      question,
      answer,
    })

    this.setState(() => INITIAL_STATE)
  }

  isDisabled = () => !this.state.question || !this.state.answer

  render = () => {
    const { title, questions } = this.props.deck

    return (
      <NewCardContainer behavior="padding">
        <DeckCardContainer title={title} cards={questions.length} />
        <Content>
          <InputGroup
            title="Question"
            value={this.state.question}
            onChange={text => this.handleChange(text, 'question')}
          />
          <InputGroup
            title="Answer"
            value={this.state.answer}
            onChange={text => this.handleChange(text, 'answer')}
          />
        </Content>
        <CenteredButton
          text="ADD CARD"
          onPress={this.onPress}
          disabled={this.isDisabled()}
          width={200}
        />
      </NewCardContainer>
    )
  }
}

export default NewCard
