import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import { formatDate } from '../../utils/DateFormatter'
import { theme } from './ThemeProvider'
import MainButton from './MainButton'

const DeckViewContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${props => props.theme.background};
`

const Title = styled(Text)`
  margin: 10px 10px 0px 10px;
  text-align: center;
  font-size: 35px;
`

const SubTitle = styled.Text`
  color: ${props => props.theme.subText};
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`

const LastResults = styled(Text)`
  font-size: 30px;
  text-align: center;
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
  const { title, color, questions = [] } = deck
  const timestamp = new Date()

  //TODO: Remove fake data
  const {
    results = [
      {
        timestamp: timestamp.setMinutes(20),
        result: 70,
      },
      {
        timestamp: timestamp.setMinutes(10),
        result: 65,
      },
    ],
  } = stats

  return (
    <DeckViewContainer>
      <Title>{title}</Title>
      <SubTitle>{questions.length} cards</SubTitle>
      <LastResults>
        {results.length === 0 ? 'No results found 🌵' : 'Last results 🚀'}
      </LastResults>
      <LastResultsView>
        {results.map(res => (
          <LastResultsRow key={res.timestamp}>
            <ResultText>{formatDate(res.timestamp)}</ResultText>
            <ResultValue>{Number(res.result).toFixed(2)}%</ResultValue>
          </LastResultsRow>
        ))}
      </LastResultsView>
      <Bottom>
        <MainButton
          text="START QUIZ"
          onPress={startQuiz}
          border={theme.successBorder}
          disabled={questions.length === 0}
          width={140}
        />
        <MainButton
          text="ADD CARD"
          onPress={addCard}
          border={theme.defaultBorder}
          width={140}
        />
      </Bottom>
    </DeckViewContainer>
  )
}

export default DeckView
