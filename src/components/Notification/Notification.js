import React from 'react';
import { connect } from 'react-redux';
import './Notification.css';

const Notification = ({ favorites }) => {
  if (favorites.showNotification) {
    return (
      <div className="notification">
        <p>{favorites.notificationContent}</p>
      </div>
    );
  }

  return null;
};

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, null)(Notification);
