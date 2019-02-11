import React from 'react'

import NewCard from '../presentational/NewCard'

const NewCardContainer = ({ navigation }) => (
  <NewCard deck={navigation.state.params.deck} />
)

export default NewCardContainer
