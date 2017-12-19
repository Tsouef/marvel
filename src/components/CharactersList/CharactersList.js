import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacters, fetchCharactersByLetter, addFavorites } from '../../actions';

import Pagination from '../../components/Pagination/Pagination';
import './CharactersList.css';

class Characters extends Component {
  componentDidMount() {
    if (this.props.match.params.letter) {
      this.props.fetchCharactersByLetter(this.props.match.params.letter);
    } else {
      this.props.fetchCharacters();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.letter !== this.props.match.params.letter) {
      this.props.fetchCharactersByLetter(nextProps.match.params.letter);
    }
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
            <Link to={`/characters/id/${id}`}>En voir plus</Link>
            <button onClick={() => this.props.addFavorites({ id, thumbnail, name, description })}>
              Add to my favorites
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Pagination />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ characters }) {
  return { characters };
}

export default connect(mapStateToProps, { fetchCharacters, fetchCharactersByLetter, addFavorites })(Characters);
