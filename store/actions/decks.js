import { getDecks, addDeck, removeDeck } from '../../api/decks'

const FETCH_DECKS = 'FETCH_DECKS'
const ADD_DECK = 'ADD_DECK'
const DELETE_DECK = 'DELETE_DECK'

const handleFetchDecks = () => dispatch => {
  getDecks().then(decks =>
    dispatch({
      type: FETCH_DECKS,
      decks,
    })
  )
}

const handleAddDeck = deck => dispatch => {
  addDeck(deck).then(
    dispatch({
      type: ADD_DECK,
      deck,
    })
  )
}

const handleRemoveDeck = deckTitle => dispatch => {
  removeDeck(deckTitle).then(
    dispatch({
      type: DELETE_DECK,
      deckTitle,
    })
  )
}

export {
  FETCH_DECKS,
  ADD_DECK,
  DELETE_DECK,
  handleFetchDecks,
  handleAddDeck,
  handleRemoveDeck,
}
