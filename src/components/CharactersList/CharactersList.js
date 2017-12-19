import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../../actions';
import './CharactersList.css';

class Characters extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  renderContent() {
    return this.props.characters.map(({ id, thumbnail, name, description }, index) => {
      return (
        <div key={id} className="card">
          <div className="card-image">
            <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="card-action">
            <Link to={`/characters/${id}`}>En voir plus</Link>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="row card-container">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ characters }) {
  return { characters };
}

export default connect(mapStateToProps, { fetchCharacters })(Characters);
