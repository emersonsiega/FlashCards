import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'

const DeckContainer = styled.View`
    height: 90px;
    width: 100%;
    border-radius: 5px;
    background-color: ${props => props.color};
    box-shadow: 0px 2px 6px ${props => props.theme.border};
    margin-top: 10px;
    justify-content: center;
`

const TouchableDeck = styled.TouchableOpacity`
    margin: 10px;
    justify-content: space-between;
`

const Title = styled(Text)`
    font-size: 35px;
`

const SubTitle = styled(Text)`
    font-size: 20px;
    color: ${props => props.theme.subText};
`

const Deck = ({ title, color, questions = [], onPress }) => (
    <DeckContainer color={color}>
        <TouchableDeck onPress={onPress}>
            <>
                <Title>{title}</Title>
                <SubTitle>{questions.length} cards</SubTitle>
            </>
        </TouchableDeck>
    </DeckContainer>
)

export default Deck