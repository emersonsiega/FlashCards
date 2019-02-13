import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuizQuestion from '../presentational/QuizQuestion'

const INITIAL_STATE = {
  questionIndex: 0,
}

class QuizViewContainer extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  render = () => {
    const { deck } = this.props

    return <QuizQuestion questionIndex={this.state.questionIndex} deck={deck} />
  }
}

const mapStateToProps = ({ decks = {} }, { navigation }) => ({
  deck: decks[navigation.state.params.deckTitle],
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizViewContainer)
