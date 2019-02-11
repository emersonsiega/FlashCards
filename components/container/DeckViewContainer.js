import React, { Component } from 'react'
import { connect } from 'react-redux'

import DeckView from '../presentational/DeckView'

class DeckViewContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deckTitle,
  })

  onAddCard = () => {
    const { toNewCardView, deck } = this.props
    toNewCardView(deck)
  }

  onStartQuiz = () => {
    alert('Start quiz')
  }

  render = () => (
    <DeckView
      deck={this.props.deck}
      stats={this.props.stats}
      addCard={this.onAddCard}
      startQuiz={this.onStartQuiz}
    />
  )
}

const mapStateToProps = ({ decks = {}, stats = {} }, { navigation }) => {
  const { deckTitle } = navigation.state.params

  return {
    deck: decks[deckTitle] || {},
    stats: stats[deckTitle] || {},
  }
}

const mapDispatchToProps = (_, { navigation }) => ({
  toNewCardView: deck =>
    navigation.dispatch(navigation.navigate('NewCardView', { deck })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckViewContainer)
