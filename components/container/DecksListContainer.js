import React from 'react'
import { connect } from 'react-redux'

import ScrollView from '../presentational/ScrollView'
import Deck from '../presentational/Deck'
import EmptyListText from '../presentational/EmptyListText'

const DecksListContainer = ({ decks = [], toDeckView }) => {
    if ( decks.length === 0 ) {
        return <EmptyListText />
    }

    console.log('deckslistcontainer: ', decks)

    return (
        <ScrollView>
            {decks.map( deck => (
                <Deck 
                    key={deck.title}
                    title={deck.title}
                    color={deck.color}
                    questions={deck.questions}
                    onPress={ () => toDeckView(deck.title) }
                />
            ))}
        </ScrollView>
    )
}

const mapStateToProps = ({decks = {}}) => ({
    decks: Object.values(decks) 
})

const mapDispatchToProps = (dispatch, {navigation}) => ({
    toDeckView: (deckTitle) => navigation.navigate(
        'DeckView', {
            'deckTitle': deckTitle
        }
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(DecksListContainer)