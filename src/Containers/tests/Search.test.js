import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search Component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      characters: [],
      comics: [],
      fetchCharactersByLetter: jest.fn(),
      fetchComicsByLetter: jest.fn(),
      resetFilters: jest.fn()
    };

    wrapper = shallow(<Search {...props} />);
  });

  it('should render Search correctly', () => {
    const tree = renderer.create(<Search {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change the state', () => {
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'My new value' } });
    expect(wrapper.state().valueInput).toEqual('My new value');

    wrapper.find('select').simulate('change', { target: { value: 'comics' } });
    expect(wrapper.state().valueSelect).toEqual('comics');

    wrapper
      .find('select')
      .simulate('change', { target: { value: 'characters' } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(wrapper.state()).toEqual({
      valueSelect: 'characters',
      valueInput: 'My new value'
    });
  });
});
