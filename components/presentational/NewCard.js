import React from 'react'
import styled from 'styled-components'

import DeckCard from './DeckCard'

const NewCardContainer = styled.View`
  background-color: ${props => props.theme.background};
  flex: 1;
`

const NewCard = ({ deck }) => {
  alert(deck.title)
  return (
    <NewCardContainer>
      <DeckCard />
    </NewCardContainer>
  )
}

export default NewCard
