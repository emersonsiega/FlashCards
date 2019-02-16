import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import { formatDate } from '../../utils/DateFormatter'
import { theme } from './ThemeProvider'
import MainButton from './MainButton'
import DeckCard from './DeckCard'

const DeckViewContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.theme.background};
`

const LastResults = styled(Text)`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`

const LastResultsView = styled.View`
  margin: 20px;
  flex: 1;
  margin-bottom: auto;
`

const LastResultsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
`

const ResultText = styled(Text)`
  font-size: 20px;
`

const ResultValue = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`
const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const DeckView = ({ deck, stats, addCard, startQuiz }) => {
  const { title, questions = [] } = deck
  const { results = [] } = stats

  return (
    <DeckViewContainer>
      <DeckCard title={title} cards={questions.length} />
      <LastResults>
        {results.length === 0 ? 'No results found 🌵' : 'Last results'}
      </LastResults>
      <LastResultsView>
        {results.slice(0, 7).map(res => (
          <LastResultsRow key={res.timestamp}>
            <ResultText>{formatDate(res.timestamp)}</ResultText>
            <ResultValue>{res.result} %</ResultValue>
          </LastResultsRow>
        ))}
      </LastResultsView>
      <Bottom>
        <MainButton
          text="START QUIZ"
          onPress={startQuiz}
          border={theme.successBorder}
          disabled={questions.length === 0}
        />
        <MainButton text="ADD CARD" onPress={addCard} border={theme.defaultBorder} />
      </Bottom>
    </DeckViewContainer>
  )
}

export default DeckView
