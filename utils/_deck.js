import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'FlashCardsNative:decks'

export function formatDeckResults (results) {
  return results === null
    ? []
    : JSON.parse(results)
}