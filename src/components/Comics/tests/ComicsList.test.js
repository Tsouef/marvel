import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Comics } from './ComicsList';

describe('ComicsList Component', () => {
  it('should render ComicsList correctly', () => {
    const props = {
      comics: {
        comic: [],
        isFetching: false,
        all: []
      },
      fetchComics: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <Comics {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render ComicsList with components', () => {
    const props = {
      comics: {
        comic: {},
        all: [
          {
            thumbnail: { path: 'path', extension: 'jpg' },
            title: 'comic',
            description: 'text'
          }
        ],
        isFetching: false
      },
      fetchComics: jest.fn()
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <Comics {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
