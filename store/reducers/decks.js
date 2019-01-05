import { FETCH_DECKS, ADD_DECK, DELETE_DECK } from '../actions/decks'

import { formatDeck } from '../../utils/DeckFormatter'

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...(action.decks || {}),
      }
    case ADD_DECK:
      return {
        ...state,
        ...formatDeck(action.deck),
      }
    case DELETE_DECK:
      const newState = { ...state }
      delete newState[action.deckTitle]

      console.log(newState)

      return newState
    default:
      return state
  }
}

export default decks
