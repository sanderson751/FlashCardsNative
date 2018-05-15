import { getDecksAPI, saveDeckTitle, addCardToDeck, getDeckAPI } from '../utils/api';

export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function getDeck (deck) {
  return {
    type: GET_DECK,
    deck,
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

export const fetchDeckAPI = (deckId) => {
  return (dispatch) => {
    return getDeckAPI(deckId).then((deck) => {
      dispatch(getDeck(deck));
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

export const addCardToDeckStorage = (card, deck) => {
  return (dispatch) => {
    return addCardToDeck(card, deck).then(() => {
      getDeckAPI(deck.title).then((deckResult) => {
        dispatch(getDeck(deckResult));
        dispatch(fetchDecksAPI());
      });
    });
  };
};