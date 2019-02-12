import React from 'react'
import { connect } from 'react-redux'

import { handleAddQuestionCard } from '../../store/actions/decks'
import NewCard from '../presentational/NewCard'

const NewCardContainer = ({ navigation, addQuestion }) => (
  <NewCard deck={navigation.state.params.deck} onAddQuestion={addQuestion} />
)

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch, { navigation }) => ({
  addQuestion: async (deck, question) => {
    await dispatch(handleAddQuestionCard(deck, question))
    navigation.dispatch(
      navigation.navigate('DeckView', {
        deckTitle: deck.title,
      })
    )
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardContainer)
