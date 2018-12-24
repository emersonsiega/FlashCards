import { getStats } from '../../api/stats'
const FETCH_STATS = 'FETCH_STATS'

const fetchStats = (stats) => ({
    type: FETCH_STATS,
    stats
})

const handleFetchStats = () => dispatch => {
    getStats()
        .then( stats => dispatch(fetchStats(stats)) )
}

export {
    FETCH_STATS,

    fetchStats,
    handleFetchStats,
}