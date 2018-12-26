import { 
    FETCH_DECKS,
    ADD_DECK,
} from '../actions/decks'

import { formatDeck } from '../../utils/DeckFormatter'

const decks = (state = {}, action) => {
    switch( action.type ) {
        case FETCH_DECKS:            
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...formatDeck(action.deck)
            }
        default:
            return state
    }
}

export default decks