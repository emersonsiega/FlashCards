import React from 'react'
import styled from 'styled-components/native'

import DeleteSwipeable from './DeleteSwipeable'
import DeckCard from './DeckCard'
import Title from './Title'
import SubTitle from './SubTitle'

const TouchableDeck = styled.TouchableOpacity`
  margin: 10px;
  justify-content: space-between;
`

const Deck = ({ title, questions = [], onPress, onDelete }) => (
  <DeckCard>
    <DeleteSwipeable id={title} onComplete={onDelete}>
      <TouchableDeck onPress={onPress}>
        <>
          <Title>{title}</Title>
          <SubTitle>{questions.length} cards</SubTitle>
        </>
      </TouchableDeck>
    </DeleteSwipeable>
  </DeckCard>
)

export default Deck
