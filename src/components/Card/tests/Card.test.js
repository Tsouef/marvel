import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import React from 'react';
import Card from './Card';

describe('component <Card />', () => {
  it('should render Card component', () => {
    const props = {
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c4e014aa3086',
        extions: 'jpg'
      },
      id: '1',
      description: 'This is a description'
    };
    const tree = renderer
      .create(
        <MemoryRouter>
          <Card key="1" informations={props} title="Title" category="comics" />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
