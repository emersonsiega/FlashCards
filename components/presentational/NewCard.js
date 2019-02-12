import React, { Component } from 'react'
import styled from 'styled-components'
import { KeyboardAvoidingView } from 'react-native'

import Title from './Title'
import SubTitle from './SubTitle'
import InputGroup from './InputGroup'
import MainButton from './MainButton'
import DeckCard from './DeckCard'

const NewCardContainer = styled(KeyboardAvoidingView)`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
`

const Content = styled.View`
  padding: 0px 10px 10px 10px;
`

const DeckContainer = styled(DeckCard)`
  height: 70px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;
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
        <DeckContainer>
          <Title>{title}</Title>
          <SubTitle>{questions.length} cards</SubTitle>
        </DeckContainer>
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
