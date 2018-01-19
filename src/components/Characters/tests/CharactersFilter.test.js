import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { CharactersFilter } from './CharactersFilter';

describe('CharactersFilter Component', () => {
  it('should render CharactersFilter correctly', () => {
    const props = {
      characters: {
        character: [],
        isFetching: false,
        all: [],
        filter: []
      },
      fetchCharacters: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <CharactersFilter {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CharactersFilter with components', () => {
    const props = {
      characters: {
        character: [],
        isFetching: false,
        all: [],
        filter: [
          {
            thumbnail: { path: 'path', extension: 'jpg' },
            name: 'character',
            description: 'text'
          }
        ]
      },
      fetchCharacters: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <CharactersFilter {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
