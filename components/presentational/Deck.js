import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import DeleteSwipeable from './DeleteSwipeable'
import DeckCard from './DeckCard'

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
