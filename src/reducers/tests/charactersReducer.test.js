import reducer from './charactersReducer';
import * as types from '../actions/types';
import getCharacter from '../mocks/getCharacter.json';
import getCharacters from '../mocks/getCharacters.json';

describe('Characters Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      filter: [],
      all: [],
      character: []
    });
  });

  it('shoud fetch characters', () => {
    expect(
      reducer([], {
        type: types.FETCH_CHARACTERS
      })
    ).toEqual({
      isFetching: true
    });
  });

  it('should receive ONE character', () => {
    expect(
      reducer(
        {
          character: []
        },
        {
          type: types.RECEIVE_CHARACTER,
          payload: getCharacter
        }
      )
    ).toEqual({
      character: getCharacter,
      isFetching: false
    });
  });

  it('should receive MULTIPLE characters', () => {
    expect(
      reducer(
        {
          filter: getCharacters
        },
        {
          type: types.RESET_FILTERS
        }
      )
    ).toEqual({
      filter: [],
      isFetching: false
    });
  });

  it('should receive characters by letter', () => {
    expect(
      reducer(
        {
          filter: [],
          all: [],
          character: []
        },
        {
          type: types.RECEIVE_CHARACTERS_BY_LETTER,
          payload: getCharacters
        }
      )
    ).toEqual({
      filter: getCharacters,
      all: [],
      character: [],
      isFetching: false
    });
  });

  it('should reset filter', () => {
    expect(
      reducer(
        {
          filter: getCharacters
        },
        {
          type: types.RESET_FILTERS
        }
      )
    ).toEqual({
      filter: [],
      isFetching: false
    });
  });
});
