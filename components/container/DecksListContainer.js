import React from 'react'
import { connect } from 'react-redux'

import { routes } from '../../routes'
import ScrollView from '../presentational/ScrollView'
import Deck from '../presentational/Deck'
import EmptyListText from '../presentational/EmptyListText'
import { handleRemoveDeck } from '../../store/actions/decks'

const DecksListContainer = ({ decks = [], toDeckView, deleteDeck }) => {
  if (decks.length === 0) {
    return <EmptyListText />
  }

  return (
    <ScrollView>
      {decks.map(deck => (
        <Deck
          key={deck.title}
          title={deck.title}
          color={deck.color}
          questions={deck.questions}
          onPress={() => toDeckView(deck.title)}
          onDelete={deleteDeck}
        />
      ))}
    </ScrollView>
  )
}

const mapStateToProps = ({ decks = {} }) => ({
  decks: Object.values(decks),
})

const mapDispatchToProps = (dispatch, { navigation }) => ({
  toDeckView: deckTitle =>
    navigation.dispatch(
      navigation.navigate(routes.DeckView, {
        deckTitle: deckTitle,
      })
    ),
  deleteDeck: deckTitle => dispatch(handleRemoveDeck(deckTitle)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksListContainer)
