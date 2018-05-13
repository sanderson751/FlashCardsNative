import { getDecksAPI, saveDeckTitle, addCardToDeck } from '../utils/api';

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const fetchDecksAPI = () => {
  return (dispatch) => {
    return getDecksAPI().then((decks) => {
      dispatch(getDecks(decks));
    });
  };
};

export const addDeckToStorage = (deck) => {
  return (dispatch) => {
    return saveDeckTitle(deck).then(() => {
      dispatch(fetchDecksAPI());
    });
  };
};

export const addCardToDeckStorage = (card) => {
  return (dispatch) => {
    return addCardToDeck(card).then(() => {
      dispatch(fetchDecksAPI());
    });
  };
};