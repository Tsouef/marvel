import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Characters } from './CharactersList';

describe('CharactersList Component', () => {
  it('should render CharactersList correctly', () => {
    const props = {
      characters: {
        character: [],
        isFetching: false,
        all: []
      },
      fetchCharacters: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <Characters {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CharactersList with components', () => {
    const props = {
      characters: {
        character: {},
        all: [
          {
            thumbnail: { path: 'path', extension: 'jpg' },
            name: 'character',
            description: 'text'
          }
        ],
        isFetching: false
      },
      fetchCharacters: jest.fn()
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <Characters {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
