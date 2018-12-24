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

const DECKS_STORAGE_KEY = 'FlashCards:decks'

const getDecks = () => {
    return AsyncStorage.getItem( DECKS_STORAGE_KEY )
        .then( decks => {
            const converted = JSON.parse(decks)
            console.log('DECKS FROM STORAGE: ', converted)
            return converted
        })
}

const setDecks = ( decks ) => {
    const toSave = JSON.stringify(decks)
    return AsyncStorage.setItem( DECKS_STORAGE_KEY, toSave )
}

const addDeck = ( deck ) => {
    return AsyncStorage.mergeItem( 
        DECKS_STORAGE_KEY, 
        JSON.stringify( deck ) 
    )
}

const removeDeck = ( deckName ) => {
    const decks = getDecks()
    delete decks[deckName]
    decks[deckName] = undefined

    return setDecks( decks )
}

const removeDecks = () => {
    AsyncStorage.removeItem( DECKS_STORAGE_KEY )
        .then( console.log('decks removed') )
}

// I think it's not necessary
// const addQuestion = ( deckName, question ) => {
//     return AsyncStorage.getItem( DECKS_STORAGE_KEY )
//         .then( JSON.parse )
//         .then( decks => ({
//             ...decks,
//             [deckName]: {
//                 ...decks[deckName],
//                 questions: {
//                     ...decks[deckName].questions,
//                     question
//                 }
//             }
//         }) )
// }

//remove card


//etc

export {
    getDecks,
    setDecks,
    addDeck,
    // addQuestion,
    removeDeck,
    removeDecks,
}