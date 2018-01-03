import { connect } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Landing from './components/Landing/Landing';
//
test('Path should redirect to Landing', () => {
  // const wrapper = shallow(
  //   <MemoryRouter initialEntries={['/']}>
  //     <App />
  //   </MemoryRouter>
  // );
  // expect(wrapper.find(Landing)).toHaveLength(1);
});
