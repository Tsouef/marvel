// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import App from './App';
// import Landing from './components/Landing/Landing';
// //
// test('Path should redirect to Landing', () => {
//   // const wrapper = shallow(
//   //   <MemoryRouter initialEntries={['/']}>
//   //     <App />
//   //   </MemoryRouter>
//   // );
//   // expect(wrapper.find(Landing)).toHaveLength(1);
// });
//
// const mockStore = configureMockStore();
// const store = mockStore({});
//
// function setup() {
//   const props = {};
//
//   const enzymeWrapper = mount(
//     <Provider store={store}>
//       <App {...props} />
//     </Provider>
//   );
//
//   return {
//     props,
//     enzymeWrapper
//   };
// }
//
// describe('App component', () => {
//   it('shows account info and debits and credits`', () => {
//     const { enzymeWrapper } = setup();
//     console.log(enzymeWrapper);
//   });
// });
