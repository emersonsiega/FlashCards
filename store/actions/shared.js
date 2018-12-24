import { handleFetchDecks } from './decks'
import { handleFetchStats } from './stats'

const FETCH_ALL = 'FETCH_ALL'

const handleFetchAll = () => dispatch => {
    dispatch(handleFetchDecks())
    dispatch(handleFetchStats())
}

export {
    FETCH_ALL,

    handleFetchAll,
}