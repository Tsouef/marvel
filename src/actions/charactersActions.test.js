import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './charactersActions';
import * as types from './types';
import getCharacters from '../mocks/getCharacters.json';
import getCharacter from '../mocks/getCharacter.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates RECEIVE_CHARACTERS after successfuly fetching characters', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getCharacters
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_CHARACTERS },
      { type: types.RECEIVE_CHARACTERS, payload: getCharacters }
    ];

    const store = mockStore({ characters: {} });
    return store.dispatch(actions.fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_CHARACTER after successfuly fetching ONE character', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getCharacter
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_CHARACTERS },
      { type: types.RECEIVE_CHARACTER, payload: getCharacter[0] }
    ];

    const store = mockStore({ character: {} });
    return store.dispatch(actions.fetchCharacterById()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_CHARACTERS after successfuly fetching characters', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getCharacters
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_CHARACTERS },
      { type: types.RECEIVE_CHARACTERS_BY_LETTER, payload: getCharacters }
    ];

    const store = mockStore({ characters: {} });
    return store.dispatch(actions.fetchCharactersByLetter()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
