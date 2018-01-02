import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
