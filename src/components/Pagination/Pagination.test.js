import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import React from 'react';
import Pagination from './Pagination';

describe('component <Pagination />', () => {
  it('should render Pagination component', () => {
    const props = {
      category: 'comics'
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <Pagination {...props} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
