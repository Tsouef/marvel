import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { ComicsFilter } from './ComicsFilter';

describe('ComicsFilter Component', () => {
  it('should render ComicsFilter correctly', () => {
    const props = {
      comics: {
        comic: [],
        isFetching: false,
        all: [],
        filter: []
      },
      fetchComics: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <ComicsFilter {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render ComicsFilter with components', () => {
    const props = {
      comics: {
        comic: [],
        isFetching: false,
        all: [],
        filter: [
          {
            thumbnail: { path: 'path', extension: 'jpg' },
            name: 'comic',
            description: 'text'
          }
        ]
      },
      fetchComics: jest.fn()
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <ComicsFilter {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
