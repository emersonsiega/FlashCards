import React, { Component } from 'react'
import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import SubTitle from './SubTitle'
import DeckCard from './DeckCard'
import MainButton from './MainButton'
import { theme } from './ThemeProvider'

const QuizQuestionContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  padding: 10px;
`

const DeckTitle = styled(DeckCard)`
  height: 70px;
  flex-direction: row;
  border: solid 0.25px ${props => props.theme.inactiveBorder};
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
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
  questionResults: [],
}

class QuizQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  toggleShowAnswer = () => this.setState(state => ({ showAnswer: !state.showAnswer }))

  addQuestionAnswer = (index, result) => {
    this.setState(state => ({
      questionResults: [...state.questionResults, { [index]: result }],
    }))
    this.toggleShowAnswer()

    //TODO: Need to send answers array every time. Improve this!
    this.props.toNextQuestion()
  }

  render = () => {
    const { deck, questionIndex } = this.props
    const { title, questions = [] } = deck
    const { question, answer } = questions[questionIndex]
    const { showAnswer } = this.state

    return (
      <QuizQuestionContainer>
        <DeckTitle>
          <Title>{title}</Title>
          <SubTitle>{questionIndex + 1 + '/' + questions.length}</SubTitle>
        </DeckTitle>
        <Question showAnswer={showAnswer}>{question}</Question>
        {showAnswer && <Answer>{answer}</Answer>}
        {showAnswer ? (
          <ButtonGroup>
            <CenteredButton
              text="CORRECT"
              border={theme.successBorder}
              onPress={() => this.addQuestionAnswer(questionIndex, true)}
              width={130}
            />
            <CenteredButton
              text="INCORRECT"
              onPress={() => this.addQuestionAnswer(questionIndex, false)}
              width={130}
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
