import { getDecks, addDeck, removeDeck, addQuestion } from '../../api/decks'

const FETCH_DECKS = 'FETCH_DECKS'
const ADD_DECK = 'ADD_DECK'
const DELETE_DECK = 'DELETE_DECK'
const ADD_QUESTION_CARD = 'ADD_QUESTION_CARD'

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

const handleAddQuestionCard = (deck, question) => dispatch => {
  addQuestion(deck.title, question).then(deck =>
    dispatch({
      type: ADD_QUESTION_CARD,
      deck,
    })
  )
}

export {
  FETCH_DECKS,
  ADD_DECK,
  DELETE_DECK,
  ADD_QUESTION_CARD,
  handleFetchDecks,
  handleAddDeck,
  handleRemoveDeck,
  handleAddQuestionCard,
}
