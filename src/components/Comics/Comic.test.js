import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Comic } from './Comic';

describe('Comic Component', () => {
  it('should render Comic', () => {
    const props = {
      comics: {
        comic: [],
        isFetching: false
      }
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <Comic {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with props', () => {
    const props = {
      comics: {
        comic: {
          thumbnail: { path: 'path', extension: 'jpg' },
          title: 'comic',
          prices: [{ type: 'printPrice', price: 0 }],
          description: 'text',
          characters: {
            items: [
              {
                resourceURI:
                  'http://gateway.marvel.com/v1/public/characters/1009220',
                name: 'Captain America'
              }
            ]
          }
        },
        isFetching: false
      }
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <Comic {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
