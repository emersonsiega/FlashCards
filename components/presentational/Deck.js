import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'
import DeleteSwipeable from './DeleteSwipeable'

const DeckContainer = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
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

const Deck = ({ title, color, questions = [], onPress, onDelete }) => (
  <DeckContainer color={color}>
    <DeleteSwipeable id={title} onComplete={onDelete}>
      <TouchableDeck onPress={onPress}>
        <>
          <Title>{title}</Title>
          <SubTitle>{questions.length} cards</SubTitle>
        </>
      </TouchableDeck>
    </DeleteSwipeable>
  </DeckContainer>
)

export default Deck
