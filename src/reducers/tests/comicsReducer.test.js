import reducer from './comicsReducer';
import * as types from '../actions/types';
import getCharacter from '../mocks/getCharacter.json';
import getCharacters from '../mocks/getCharacters.json';

describe('Comic Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      filter: [],
      all: [],
      comic: []
    });
  });

  it('shoud fetch comics', () => {
    expect(
      reducer([], {
        type: types.FETCH_COMICS
      })
    ).toEqual({
      isFetching: true
    });
  });

  it('should receive ONE comic', () => {
    expect(
      reducer(
        {
          comic: []
        },
        {
          type: types.RECEIVE_COMIC,
          payload: getCharacter
        }
      )
    ).toEqual({
      comic: getCharacter,
      isFetching: false
    });
  });

  it('should receive MULTIPLE comics', () => {
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

  it('should receive comics by letter', () => {
    expect(
      reducer(
        {
          filter: [],
          all: [],
          comic: []
        },
        {
          type: types.RECEIVE_COMICS_BY_LETTER,
          payload: getCharacters
        }
      )
    ).toEqual({
      filter: getCharacters,
      all: [],
      comic: [],
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
