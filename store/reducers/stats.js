import { FETCH_STATS, SET_STATS, DELETE_STATS } from '../actions/stats'

const stats = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STATS:
      return {
        ...state,
        ...action.stats,
      }
    case SET_STATS: {
      return {
        ...action.stats,
      }
    }
    case DELETE_STATS: {
      const newState = { ...state }
      delete newState[action.deckName]

      return newState
    }
    default:
      return state
  }
}

export default stats
