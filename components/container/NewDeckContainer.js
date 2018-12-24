import React from 'react'
import { connect } from 'react-redux'

import NewDeck from '../presentational/NewDeck'
import { handleAddDeck } from '../../store/actions/decks'

const NewDeckContainer = ({addDeck, toDecks}) => {
    const onAddDeck = ( deck ) => {
        addDeck( deck )
        toDecks()
    }
    
    return (
        <NewDeck 
            onAddDeck={onAddDeck}
        />
    )
}

const mapStateToProps = props => props

const mapDispatchToProps = (_, {navigation}) => dispatch => ({
    addDeck: (deck) => dispatch(handleAddDeck(deck)),
    toDecks: () => navigation.navigate('Decks')
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckContainer)