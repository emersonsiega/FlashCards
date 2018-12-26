/**
 *  {
 *      "deckTitle": {
 *          deck: 'deckTitle',
 *          results: [
 *              timestamp: 'xxx',
 *              result: x
 *          ],
 *          lastResult: xxx
 *      },
 *      "deckTitle2": {
 *          ...
 *      }
 *  }
 */
import { AsyncStorage } from 'react-native'

const STATS_STORAGE_KEY = 'FlashCards:stats'

const getStats = () => {
    return AsyncStorage.getItem( STATS_STORAGE_KEY )
        .then( JSON.parse )
}

export {
    getStats,
}