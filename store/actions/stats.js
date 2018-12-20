const FETCH_STATS = 'FETCH_STATS'

const fetchStats = (stats) => ({
    type: FETCH_STATS,
    stats
})

const handleFetchStats = () => dispatch => {
    const stats = {}
    dispatch(fetchStats(stats))
}

export {
    FETCH_STATS,

    handleFetchStats,
}