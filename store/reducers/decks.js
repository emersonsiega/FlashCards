import { FETCH_DECKS, ADD_DECK, DELETE_DECK, ADD_QUESTION_CARD } from '../actions/decks'

import { formatDeck } from '../../utils/DeckFormatter'

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...(action.decks || {}),
      }
    case ADD_QUESTION_CARD:
      return {
        ...state,
        ...formatDeck(action.deck),
      }
    case ADD_DECK:
      return {
        ...formatDeck(action.deck),
        ...state,
      }
    case DELETE_DECK:
      const newState = { ...state }
      delete newState[action.deckTitle]

      return newState
    default:
      return state
  }
}

export default decks
