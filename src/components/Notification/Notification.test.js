import React from 'react';
import renderer from 'react-test-renderer';

import { Notification } from './Notification';

describe('Notification Component', () => {
  it('should render message success correctly', () => {
    const props = {
      favorites: {
        showNotification: true,
        notificationState: 'success',
        notificationContent: 'Message success'
      }
    };
    const tree = renderer.create(<Notification {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render message error correctly', () => {
    const props = {
      favorites: {
        showNotification: true,
        notificationState: 'error',
        notificationContent: 'Already use'
      }
    };
    const tree = renderer.create(<Notification {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should no render message', () => {
    const props = {
      favorites: {
        showNotification: false,
        notificationState: 'error',
        notificationContent: 'Already use'
      }
    };
    const tree = renderer.create(<Notification {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
