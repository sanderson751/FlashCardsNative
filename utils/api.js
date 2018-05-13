import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatDeckResults } from './_deck'

export function getDecksAPI () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function saveDeckTitle ({title}) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: [],
      }
    }));
}

export function addCardToDeck ({title, question, answer}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: [question, answer],
      }
    }));
    // .then(formatDeckResults)
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