import { FETCH_STATS } from '../actions/stats'

const stats = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STATS:
            return {
                ...state,
                ...action.stats
            }
        default:
            return state
    }
}

export default stats