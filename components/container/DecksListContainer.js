import React from 'react'
import { connect } from 'react-redux'

import ScrollView from '../presentational/ScrollView'
import Deck from '../presentational/Deck'

const DecksList = ({ decks = [] }) => (
    <ScrollView>
        {decks.map( deck => (
            <Deck 
                key={deck.title}
                {...deck}
                onPress={ () => alert('deck pressed') }
            />
        ))}
    </ScrollView>
)

const mapStateToProps = ({decks = {}}) => ({
    decks: Object.values(decks) 
})

export default connect(mapStateToProps)(DecksList)