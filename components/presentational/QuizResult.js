import React from 'react'
import styled from 'styled-components'

import Text from './Text'
import DeckCard from './DeckCard'
import MainButton from './MainButton'
import { theme } from './ThemeProvider'

const QuizResultContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  padding: 10px;
`

const TopMessage = styled(Text)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 48px;
  text-align: center;
`

const ResultGroup = styled.View`
  margin-bottom: auto;
  margin-top: auto;
`

const ResultText = styled(Text)`
  font-size: 24px;
  text-align: center;
`

const ResultValue = styled(Text)`
  font-size: 48px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`

const CenteredButton = styled(MainButton)`
  align-self: center;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const getFinalMessage = (result = 0) => {
  if (result >= 70) {
    return <TopMessage>Nice!! 🚀</TopMessage>
  } else if (result >= 40 && result < 70) {
    return <TopMessage>You're almost there! 🤓</TopMessage>
  } else {
    return <TopMessage>Oh no! 😢</TopMessage>
  }
}

const QuizResult = ({ deck = {}, lastResult = {}, toDeckView, toQuizView }) => {
  const { title, questions = [] } = deck

  return (
    <QuizResultContainer>
      <DeckCard title={title} cards={questions.length} />
      <TopMessage>{getFinalMessage(lastResult.result)}</TopMessage>
      <ResultGroup>
        <ResultText>You achieved</ResultText>
        <ResultValue>{lastResult.result} %</ResultValue>
        <ResultText>of right answers!</ResultText>
      </ResultGroup>
      <ButtonGroup>
        <CenteredButton
          text="FINISH"
          border={theme.successBorder}
          onPress={() => toDeckView(title)}
        />
        <CenteredButton text="TRY AGAIN" onPress={() => toQuizView(title)} />
      </ButtonGroup>
    </QuizResultContainer>
  )
}

export default QuizResult
