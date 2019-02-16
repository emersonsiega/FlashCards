import React, { Component } from 'react'
import { connect } from 'react-redux'

import { routes } from '../../routes'
import { handleAddStats } from '../../store/actions/stats'
import QuizQuestion from '../presentational/QuizQuestion'

const INITIAL_STATE = {
  questionIndex: 0,
  questionResults: [],
}

class QuizViewContainer extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  getTotalSuccess = questionResults => {
    const totalTrue = questionResults.reduce((acc, vl) => acc + (vl ? 1 : 0), 0)
    const totalQuestions = this.props.deck.questions.length

    return Number((totalTrue * 100) / totalQuestions).toFixed(0)
  }

  isLastQuestion = index => index === this.props.deck.questions.length - 1

  onLastQuestion = async questionResults => {
    const { deck, saveResult, toResultPage } = this.props
    const result = this.getTotalSuccess(questionResults)
    const deckName = deck.title

    await saveResult(deckName, result)
    toResultPage(deckName)
    this.setState(INITIAL_STATE)
  }

  toNextQuestion = (index, result) => {
    const isLastQuestion = this.isLastQuestion(index)
    const questionResults = this.state.questionResults.concat([result])

    this.setState(() => ({
      questionIndex: !isLastQuestion ? index + 1 : index,
      questionResults,
    }))

    if (isLastQuestion) {
      this.onLastQuestion(questionResults)
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

const mapDispatchToProps = (dispatch, { navigation }) => ({
  saveResult: async (deckName, result) =>
    await dispatch(handleAddStats(deckName, result)),
  toResultPage: deckName =>
    navigation.dispatch(
      navigation.navigate(routes.QuizResultView, {
        deckName,
      })
    ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizViewContainer)
