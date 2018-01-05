import React from 'react';
import renderer from 'react-test-renderer';

import { Favorites } from './Favorites';

describe('Favorites Component', () => {
  it('should render Favorites', () => {
    const props = {
      favorites: {
        favorites: []
      }
    };

    const tree = renderer.create(<Favorites {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Favorites with elements', () => {
    const props = {
      favorites: {
        favorites: [
          {
            thumbnail: 'thumbnail',
            name: 'name',
            description: 'description',
            id: 1
          }
        ]
      }
    };

    const tree = renderer.create(<Favorites {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should delete a favorite', () => {
  //   const deleteFavorite = jest.fn();
  //   const props = {
  //     deleteFavorite: jest.fn(),
  //     favorites: {
  //       favorites: [
  //         {
  //           thumbnail: 'thumbnail',
  //           name: 'name',
  //           description: 'description',
  //           id: 1
  //         }
  //       ]
  //     }
  //   };
  //   const wrapper = shallow(<Favorites {...props} />);
  //   const instance = wrapper.dive().instance();
  //
  //   console.log(instance);
  //   instance().deleteFavorite(1);
  // });
});
