import React from 'react'
import styled from 'styled-components'

import Text from './Text'

const DeckCardContainer = styled.View`
  height: 70px;
  flex-direction: row;
  border: solid 0.25px ${props => props.theme.inactiveBorder};
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const Title = styled(Text)`
  text-align: center;
  font-size: 35px;
`

const SubTitle = styled.Text`
  color: ${props => props.theme.subText};
  font-size: 25px;
  text-align: center;
`

const DeckCard = ({ title, cards = 0, step }) => (
  <DeckCardContainer>
    <Title>{title}</Title>
    <SubTitle>{step ? `${step}/${cards}` : `${cards} cards`}</SubTitle>
  </DeckCardContainer>
)

export default DeckCard
