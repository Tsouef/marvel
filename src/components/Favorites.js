import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteFavorite } from '../actions';

class Favorites extends Component {
  renderContent() {
    return this.props.favorites.map((favorite, index) => {
      const { thumbnail, name, description, id } = favorite;
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
            <span className="card-title">{name}</span>
            <p>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.favorites.length <= 0) {
      return <div>Veuillez selectionner des favoris</div>;
    }
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, { deleteFavorite })(Favorites);
