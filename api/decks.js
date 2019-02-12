/**
 *  {
 *      "deck1": {
 *          title: 'deck1',
 *          color: '#xxx',
 *          questions: [
 *              {
 *                  question: "?",
 *                  answer: "!"
 *              },
 *          ]
 *      },
 *      "deck2": {
 *          ...
 *      }
 *  }
 */
import { AsyncStorage } from 'react-native'

import { formatDeck } from '../utils/DeckFormatter'

const DECKS_STORAGE_KEY = 'FlashCards:decks'

const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const converted = JSON.parse(decks)
    return converted
  })
}

const setDecks = decks => {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
}

const addDeck = deck => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(formatDeck(deck)))
}

const removeDeck = async deckName => {
  const decks = await getDecks()
  delete decks[deckName]

  return setDecks(decks)
}

const removeDecks = () => {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

const addQuestion = async (deckName, question) => {
  const decks = await getDecks()
  const newDecks = {
    ...decks,
    [deckName]: {
      ...decks[deckName],
      questions: [...decks[deckName].questions, question],
    },
  }

  await setDecks(newDecks)

  return newDecks[deckName]
}

//remove card

//etc

export { getDecks, setDecks, addDeck, addQuestion, removeDeck, removeDecks }
