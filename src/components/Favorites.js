import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
  renderContent() {
    return this.props.favorites.map((favorite, index) => {
      const { thumbnail, name, description } = favorite;
      return (
        <div className="character">
          <div className="character-cover">
            <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
          </div>
          <div className="character-description">
            <p>
              <span className="meta">Name: </span> {name}
            </p>
            <p>
              <span className="meta">Description: </span>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, null)(Favorites);
