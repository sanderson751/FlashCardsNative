import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'FlashCardsNative:decks'

// function setDummyData () {
//   const { run, bike, swim, sleep, eat } = getMetricMetaInfo()

//   let dummyData = {}
//   const timestamp = Date.now()

//   for (let i = -183; i < 0; i++) {
//     const time = timestamp + i * 24 * 60 * 60 * 1000
//     const strTime = timeToString(time)
//     dummyData[strTime] = getRandomNumber(3) % 2 === 0
//       ? {
//           run: getRandomNumber(run.max),
//           bike: getRandomNumber(bike.max),
//           swim: getRandomNumber(swim.max),
//           sleep: getRandomNumber(sleep.max),
//           eat: getRandomNumber(eat.max),
//         }
//       : null
//   }

//   AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))

//   return dummyData
// }

export function formatDeckResults (results) {
  return results === null
    ? []
    : JSON.parse(results)
}