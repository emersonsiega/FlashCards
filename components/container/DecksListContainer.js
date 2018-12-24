import React from 'react'
import { connect } from 'react-redux'

import ScrollView from '../presentational/ScrollView'
import Deck from '../presentational/Deck'
import EmptyListText from '../presentational/EmptyListText'

const DecksList = ({ decks = [] }) => {
    if ( decks.length === 0 ) {
        return <EmptyListText />
    }

    return (
        <ScrollView>
            {decks.map( deck => (
                <Deck 
                    key={deck.title}
                    title={deck.title}
                    color={deck.color}
                    questions={deck.questions}
                    onPress={ () => alert('deck pressed') }
                />
            ))}
        </ScrollView>
    )
}

const mapStateToProps = ({decks = {}}) => ({
    decks: Object.values(decks) 
})

export default connect(mapStateToProps)(DecksList)