import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDeckResults } from './_deck'

export function getDecksAPI () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function saveDeckTitle ({title}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: [],
      }
    }));
}

export function addCardToDeck ({title, questions}, deck) {
    
    if (deck.questions) {
      questions = questions.concat(deck.questions);
    }
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions,
        }
    })); 
    
    //
    // .then(formatDeckResults)
}

export function getDeckAPI (title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      return JSON.parse(results)[title];
    })
}


// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }