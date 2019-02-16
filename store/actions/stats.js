import { getStats, addStats, removeStats } from '../../api/stats'

const FETCH_STATS = 'FETCH_STATS'
const SET_STATS = 'SET_STATS'
const DELETE_STATS = 'DELETE_STATS'

const fetchStats = stats => ({
  type: FETCH_STATS,
  stats,
})

const handleFetchStats = () => async dispatch => {
  const stats = await getStats()
  dispatch(fetchStats(stats))
}

const handleAddStats = (deckName, result) => async dispatch => {
  const stats = await addStats(deckName, result)
  dispatch({
    type: SET_STATS,
    stats,
  })
}

const handleDeleteStats = deckName => async dispatch => {
  await removeStats(deckName)
  dispatch({
    type: DELETE_STATS,
    deckName,
  })
}

export {
  FETCH_STATS,
  SET_STATS,
  DELETE_STATS,
  fetchStats,
  handleFetchStats,
  handleAddStats,
  handleDeleteStats,
}
