import reducer from './favoritesReducer';
import * as types from '../actions/types';

const favorite = {
  id: '123',
  thumbnail: 'photo',
  name: 'name',
  description: 'description'
};
const arrayfavorites = [
  {
    id: '1234',
    thumbnail: 'photo',
    name: 'name',
    description: 'description'
  },
  {
    id: '12345',
    thumbnail: 'photo',
    name: 'name',
    description: 'description'
  }
];

describe('Favorite Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      favorites: [],
      showNotification: false,
      notificationContent: ''
    });
  });

  it('should add to favorite', () => {
    expect(
      reducer(
        {
          favorites: []
        },
        {
          type: types.ADD_FAVORITE,
          payload: favorite
        }
      )
    ).toEqual({
      favorites: [favorite]
    });

    expect(
      reducer(
        {
          favorites: arrayfavorites
        },
        {
          type: types.ADD_FAVORITE,
          payload: favorite
        }
      )
    ).toEqual({
      favorites: arrayfavorites.concat(favorite)
    });
  });

  it('should delete to favorite', () => {
    const newArray = arrayfavorites.filter(i => i.id !== '1234');
    expect(
      reducer(
        {
          favorites: arrayfavorites
        },
        {
          type: types.DELETE_FAVORITE,
          id: '1234'
        }
      )
    ).toEqual({
      favorites: newArray
    });
  });

  it('should show notification message', () => {
    expect(
      reducer(
        {
          favorites: [favorite],
          showNotification: false,
          notificationContent: ''
        },
        {
          type: types.SHOW_NOTIFICATION,
          text: 'Message de notification',
          state: 'success',
          id: '123'
        }
      )
    ).toEqual({
      notificationContent: 'Message de notification',
      notificationState: 'success',
      showNotification: true,
      favorites: [favorite]
    });
  });

  it('should hide notification message', () => {
    expect(
      reducer(
        {
          showNotification: true
        },
        {
          type: types.HIDE_NOTIFICATION,
          id: '123'
        }
      )
    ).toEqual({
      showNotification: false
    });
  });
});
