import { getDecks, addDeck as addDeckApi } from '../../api/decks'

const FETCH_DECKS = 'FETCH_DECKS'
const ADD_DECK = 'ADD_DECK'

const fetchDecks = (decks) => ({
    type: FETCH_DECKS,
    decks
})

const handleFetchDecks = () => dispatch => {
    getDecks()
        .then( decks => dispatch(fetchDecks(decks)) )
}

const addDeck = (deck) => ({
    type: ADD_DECK,
    deck
})

const handleAddDeck = (deck) => dispatch => {
    addDeckApi( deck )
        .then( dispatch(addDeck(deck)) )
}

export {
    FETCH_DECKS,
    ADD_DECK,

    handleFetchDecks,
    handleAddDeck,
}