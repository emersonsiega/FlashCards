import React from 'react'
import styled from 'styled-components/native'
import { LayoutAnimation } from 'react-native'

import DeleteSwipeable from './DeleteSwipeable'
import Title from './Title'
import SubTitle from './SubTitle'

const TouchableDeck = styled.TouchableOpacity`
  margin: 10px;
  justify-content: space-between;
`

const DeckContainer = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-bottom-width: 0.25px;
  border-bottom-color: ${props => props.theme.inactiveBorder};
`

const Deck = ({ title, questions = [], onPress, onDelete }) => (
  <DeckContainer>
    <DeleteSwipeable id={title} onComplete={onDelete}>
      <TouchableDeck
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
          onPress()
        }}>
        <>
          <Title>{title}</Title>
          <SubTitle>{questions.length} cards</SubTitle>
        </>
      </TouchableDeck>
    </DeleteSwipeable>
  </DeckContainer>
)

export default Deck
