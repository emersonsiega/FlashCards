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

  toNextQuestion = () => {
    if (this.state.questionIndex < this.props.deck.questions.length - 1) {
      this.setState(state => ({
        questionIndex: state.questionIndex + 1,
      }))
    } else {
      alert('finished!')
    }
  }

  render = () => {
    const { deck } = this.props

    return (
      <QuizQuestion
        questionIndex={this.state.questionIndex}
        deck={deck}
        toNextQuestion={this.toNextQuestion}
      />
    )
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
