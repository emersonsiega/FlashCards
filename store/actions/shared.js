import { handleFetchDecks } from './decks'
import { handleFetchStats } from './stats'

const FETCH_ALL = 'FETCH_ALL'

const handleFetchAll = () => dispatch => {
  return Promise.all([dispatch(handleFetchDecks()), dispatch(handleFetchStats())])
}

export { FETCH_ALL, handleFetchAll }
