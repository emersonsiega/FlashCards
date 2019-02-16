import { getDecks, addDeck, removeDeck, addQuestion } from '../../api/decks'

import { handleDeleteStats } from './stats'

const FETCH_DECKS = 'FETCH_DECKS'
const ADD_DECK = 'ADD_DECK'
const DELETE_DECK = 'DELETE_DECK'
const ADD_QUESTION_CARD = 'ADD_QUESTION_CARD'

const handleFetchDecks = () => async dispatch => {
  const decks = await getDecks()
  dispatch({
    type: FETCH_DECKS,
    decks,
  })
}

const handleAddDeck = deck => async dispatch => {
  await addDeck(deck)
  dispatch({
    type: ADD_DECK,
    deck,
  })
}

const handleRemoveDeck = deckTitle => async dispatch => {
  await dispatch(handleDeleteStats(deckTitle))
  await removeDeck(deckTitle)
  dispatch({
    type: DELETE_DECK,
    deckTitle,
  })
}

const handleAddQuestionCard = (deck, question) => async dispatch => {
  const newDeck = await addQuestion(deck.title, question)
  dispatch({
    type: ADD_QUESTION_CARD,
    deck: newDeck,
  })
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
