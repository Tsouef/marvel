import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from './charactersActions';
import * as types from './types';

const mock = new MockAdapter(axios);

describe('actions', () => {
  describe('actions Characters', () => {
    mock.onGet('/users').reply(200, {
      users: [{ id: 1, name: 'John Smith' }]
    });
    // it('should create an action to fetch Characters', () => {
    //   const mock = new MockAdapter(axios);
    //
    //   const data = { response: true };
    //   mock.onGet(`${API_URL}/characters${params}&limit=100`).reply(200, data);
    //
    //   console.log(mock);
    //   // store.dispatch(actions.fetchCharacters()).then(response => {
    //   //   expect(response).toEqual(data);
    //   //   done();
    //   // });
    // });

    // it('should execute fetch data', () => {
    //   const store = mockStore({});
    //
    //   // Return the promise
    //   return store.dispatch(fetchData()).then(() => {
    //     const actions = store.getActions();
    //     expect(actions[0]).toEqual(success());
    //   });
    // });

    it('should create an action to reset characters', () => {
      const expectedAction = {
        type: types.RESET_FILTERS
      };

      expect(actions.resetFilters()).toEqual(expectedAction);
    });
  });
});
