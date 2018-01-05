import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';
import { Landing } from './Landing';

describe('Landing Component', () => {
  it('renders without crashing', () => {
    const tree = shallow(<Landing />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
