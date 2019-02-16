import React, { Component } from 'react'
import styled from 'styled-components'

import Text from './Text'
import DeckCard from './DeckCard'
import MainButton from './MainButton'
import { theme } from './ThemeProvider'

const QuizQuestionContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  padding: 10px;
`

const Question = styled(Text)`
  margin-top: ${props => (props.showAnswer ? '20px' : 'auto')};
  color: ${props => (props.showAnswer ? props.theme.subText : props.theme.text)};
  margin-bottom: auto;
  font-size: 30px;
  text-align: center;
`

const Answer = styled(Text)`
  font-size: 35px;
  text-align: center;
  margin-bottom: auto;
`

const CenteredButton = styled(MainButton)`
  align-self: center;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const INITIAL_STATE = {
  showAnswer: false,
}

class QuizQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  toggleShowAnswer = () => this.setState(state => ({ showAnswer: !state.showAnswer }))

  answerQuestion = (index, result) => {
    this.toggleShowAnswer()

    this.props.toNextQuestion(index, result)
  }

  render = () => {
    const { deck, questionIndex } = this.props
    const { title, questions = [] } = deck
    const { question, answer } = questions[questionIndex]
    const { showAnswer } = this.state

    return (
      <QuizQuestionContainer>
        <DeckCard title={title} cards={questions.length} step={questionIndex + 1} />
        <Question showAnswer={showAnswer}>{question}</Question>
        {showAnswer && <Answer>{answer}</Answer>}
        {showAnswer ? (
          <ButtonGroup>
            <CenteredButton
              text="CORRECT"
              border={theme.successBorder}
              onPress={() => this.answerQuestion(questionIndex, true)}
            />
            <CenteredButton
              text="INCORRECT"
              onPress={() => this.answerQuestion(questionIndex, false)}
            />
          </ButtonGroup>
        ) : (
          <CenteredButton text="ANSWER" onPress={this.toggleShowAnswer} width={200} />
        )}
      </QuizQuestionContainer>
    )
  }
}

export default QuizQuestion
