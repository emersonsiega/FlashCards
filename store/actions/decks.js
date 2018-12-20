const FETCH_DECKS = 'FETCH_DECKS'

const fetchDecks = (decks) => ({
    type: FETCH_DECKS,
    decks
})

const handleFetchDecks = () => dispatch => {
    const decks = {}
    dispatch(fetchDecks(decks))
}

export {
    FETCH_DECKS,

    handleFetchDecks,
}