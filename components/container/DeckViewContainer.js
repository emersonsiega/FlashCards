import React, { Component } from 'react'
import { connect } from 'react-redux'

import DeckView from '../presentational/DeckView'

class DeckViewContainer extends Component { 
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.deckTitle
    })

    onAddCard = () => {
        alert('Add card')
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

const mapStateToProps = ({decks = {}, stats = {}}, {navigation}) => {
    const { deckTitle } = navigation.state.params

    return {
        deck: decks[deckTitle] || {},
        stats: stats[deckTitle] || {}
    }
}

export default connect(mapStateToProps)(DeckViewContainer)