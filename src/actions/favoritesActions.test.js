import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import expect from 'expect'; // You can use any testing library

import * as actions from './favoritesActions';
import * as types from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Favorites actions', () => {
  // afterEach(() => {
  //   fetchMock.reset();
  //   fetchMock.restore();
  // });
  it('should create an action to add a favorite', () => {
    const favorite = {
      id: 123,
      thumbnail: 'photo',
      name: 'name',
      description: 'description'
    };

    const expectedAction = {
      type: types.ADD_FAVORITE,
      payload: favorite
    };

    expect(actions.addFavorites(favorite)).toEqual(expectedAction);
  });

  it('should create an action to delete a favorite', () => {
    const id = 123;

    const expectedAction = {
      type: types.DELETE_FAVORITE,
      id
    };

    expect(actions.deleteFavorite(id)).toEqual(expectedAction);
  });

  it('should create an action to show notification', () => {
    const id = 123;
    const text = 'notification';
    const state = 'success';

    const expectedAction = {
      type: types.SHOW_NOTIFICATION,
      id,
      text,
      state
    };

    expect(actions.showNotification(id, text, state)).toEqual(expectedAction);
  });

  it('should create an action to hide notification', () => {
    const id = 123;

    const expectedAction = {
      type: types.HIDE_NOTIFICATION,
      id
    };

    expect(actions.hideNotification(id)).toEqual(expectedAction);
  });

  it('creates actions showNotificationWithTimeout who trigger showNotification and hideNotification', () => {
    jest.useFakeTimers();

    const id = 0;
    const text = 'notification';
    const state = 'success';

    const expectedActions = [
      { type: types.SHOW_NOTIFICATION, id, text, state },
      { type: types.HIDE_NOTIFICATION, id }
    ];
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(actions.showNotificationWithTimeout(text, state));
    jest.runAllTimers();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
