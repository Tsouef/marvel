import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite, fetchFavorites } from '../../actions';

export class Favorites extends Component {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  renderContent() {
    return this.props.favorites.favorites.map((favorite, index) => {
      console.log(favorite);
      const { thumbnail, title, description, id } = favorite;
      return (
        <div key={id} className="card">
          <div className="card-image">
            <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
            <a
              onClick={() => this.props.deleteFavorite(id)}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">delete</i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
          </div>
        </div>
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
