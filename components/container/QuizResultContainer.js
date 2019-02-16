import React from 'react'
import { connect } from 'react-redux'

import { routes } from '../../routes'
import QuizResult from '../presentational/QuizResult'

const QuizResultContainer = ({ deck, lastResult, toDeckView, toQuizView }) => (
  <QuizResult
    deck={deck}
    lastResult={lastResult}
    toDeckView={toDeckView}
    toQuizView={toQuizView}
  />
)

const mapStateToProps = ({ decks = {}, stats = {} }, { navigation }) => {
  const { deckName } = navigation.state.params
  const deck = decks[deckName] || {}
  const deckStats = stats[deckName] || {}
  const lastResult = deckStats.results[0]

  return {
    deck,
    lastResult,
  }
}

const mapDispatchToProps = (_, { navigation }) => ({
  toDeckView: deckName =>
    navigation.dispatch(
      navigation.navigate(routes.DeckView, {
        deckTitle: deckName,
      })
    ),
  toQuizView: deckName =>
    navigation.dispatch(
      navigation.navigate(routes.QuizView, {
        deckTitle: deckName,
      })
    ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizResultContainer)
