import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import TwoOptionsButton from './TwoOptionsButton'

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
    width: 100%;
`

const LastResultsRow = styled.View`
    flex-direction: row;
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.border};
`

const ResultText = styled(Text)`
    font-size: 25px;
`

const ResultValue = styled(Text)`
    font-size: 28px;
`

const DeckView = ({ deck, stats, addCard, startQuiz }) => {
    const { title, color, questions = [] } = deck
    const { results = [] } = stats

    return (
        <DeckViewContainer>
            <View color={color}>
                <Title>{title}</Title>
                <SubTitle>{questions.length} cards</SubTitle>
                <LastResults>
                    {results.length === 0 
                        ? 'No results found 🌵'
                        : 'Last results 🚀'}
                </LastResults>
                <LastResultsView>
                    {results.map(res => (
                        <LastResultsRow key={res.timestamp}>
                            <ResultText>{res.timestamp}</ResultText>
                            <ResultValue>{res.result}%</ResultValue>
                        </LastResultsRow>
                    ))}
                </LastResultsView>
            </View>
            <TwoOptionsButton 
                textLeft='START QUIZ'
                onPressLeft={startQuiz}
                disabledLeft={questions.length === 0}

                textRight='ADD CARD'
                onPressRight={addCard}
            />
        </DeckViewContainer>
    )
}

export default DeckView