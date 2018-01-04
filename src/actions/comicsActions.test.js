import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './comicsActions';
import * as types from './types';
import getComics from '../mocks/getComics.json';
import getComic from '../mocks/getComic.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates RECEIVE_COMICS after successfuly fetching comics', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getComics
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_COMICS },
      { type: types.RECEIVE_COMICS, payload: getComics }
    ];

    const store = mockStore({ comics: {} });
    return store.dispatch(actions.fetchComics()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_COMIC after successfuly fetching ONE comic', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getComic
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_COMICS },
      { type: types.RECEIVE_COMIC, payload: getComic[0] }
    ];

    const store = mockStore({ comic: {} });
    return store.dispatch(actions.fetchComicById()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_COMICS after successfuly fetching comics by Letter', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            results: getComics
          }
        }
      });
    });

    const expectedActions = [
      { type: types.FETCH_COMICS },
      { type: types.RECEIVE_COMICS_BY_LETTER, payload: getComics }
    ];

    const store = mockStore({ comics: {} });
    return store.dispatch(actions.fetchComicsByLetter()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
