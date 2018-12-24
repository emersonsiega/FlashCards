import { getDecks } from '../../api/decks'
const FETCH_DECKS = 'FETCH_DECKS'

const fetchDecks = (decks) => ({
    type: FETCH_DECKS,
    decks
})

const handleFetchDecks = () => dispatch => {
    getDecks()
        .then( decks => dispatch(fetchDecks(decks)) )
}

export {
    FETCH_DECKS,

    fetchDecks,
    handleFetchDecks,
}