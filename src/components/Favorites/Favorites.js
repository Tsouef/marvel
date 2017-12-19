import React, { Component } from 'react';
import { connect } from 'react-redux';
class Favorites extends Component {
  render() {
    console.log(this.props.favorites);
    return <div>Favorites</div>;
  }
}

function mapStateToProps({ favorites }) {
  return {
    favorites
  };
}

export default connect(mapStateToProps, null)(Favorites);
