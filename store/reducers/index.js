import { combineReducers } from 'redux'

import decks from './decks'
import stats from './stats'

export default combineReducers({
    decks,
    stats,
})