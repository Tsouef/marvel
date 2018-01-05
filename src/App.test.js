import App from './App';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<App />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
