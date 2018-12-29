import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import TwoOptionsButton from './TwoOptionsButton'
import { formatDate } from '../../utils/DateFormatter'

const DeckViewContainer = styled.View`
  margin: 10px;
  flex: 1;
`

const View = styled.View`
  flex: 1;
  background-color: ${props => props.color};
  width: auto;
  border-radius: 5px;
  box-shadow: 0px 2px 6px ${props => props.theme.border};
  padding: 10px;
  margin-bottom: 10px;
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
      <View color={color}>
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
      </View>
      <TwoOptionsButton
        textLeft="START QUIZ"
        onPressLeft={startQuiz}
        disabledLeft={questions.length === 0}
        textRight="ADD CARD"
        onPressRight={addCard}
      />
    </DeckViewContainer>
  )
}

export default DeckView
