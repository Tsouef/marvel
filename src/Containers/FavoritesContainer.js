import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite, fetchFavorites } from '../actions';

import Card from '../components/Card/Card';

export class Favorites extends Component {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderContent() {
    return this.props.favorites.favorites.map((favorite, index) => {
      const { thumbnail, title, description, id } = favorite;
      return (
        <Card
          key={index}
          informations={favorite}
          title={favorite.title}
          onDelete={() => this.props.deleteFavorite(id)}
        />
      );
    });
  }

  render() {
    if (this.props.favorites.favorites.length <= 0) {
      return (
        <div>
          Choose some favorites or <Link to="/add">ADD</Link>
        </div>
      );
    }
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, { deleteFavorite, fetchFavorites })(
  Favorites
);
