import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Character } from './Character';

describe('Character Component', () => {
  it('should render Character', () => {
    const props = {
      characters: {
        character: [],
        isFetching: false
      }
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <Character {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with props', () => {
    // const props = {
    //
    // };
  });

  // it('should render Character with elements', () => {
  //   const props = {
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
  //
  //   const tree = renderer.create(<Character {...props} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
