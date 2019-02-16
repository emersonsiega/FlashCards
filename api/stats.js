/**
 *  {
 *      "deckName": {
 *          deck: 'deckName',
 *          results: [
 *              {
 *                  timestamp: 'xxx',
 *                  result: x
 *              }
 *          ],
 *      },
 *      "deckName2": {
 *          ...
 *      }
 *  }
 */
import { AsyncStorage } from 'react-native'

const STATS_STORAGE_KEY = 'FlashCards:stats'

const getStats = () => AsyncStorage.getItem(STATS_STORAGE_KEY).then(JSON.parse)

const setStats = stats => AsyncStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats))

const removeStats = async deckName => {
  const stats = await getStats()
  delete stats[deckName]

  return setStats(stats)
}

const addStats = async (deckName, result) => {
  const stats = (await getStats()) || {}
  const newStats = {
    ...stats,
    [deckName]: {
      deck: deckName,
      results: [
        {
          timestamp: new Date().getTime(),
          result,
        },
        ...((stats[deckName] ? stats[deckName].results : []) || []),
      ],
    },
  }

  await setStats(newStats)

  return newStats
}

export { getStats, setStats, addStats, removeStats }
