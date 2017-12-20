import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacters,
  fetchCharactersByLetter,
  addFavorites
} from '../actions';

import Pagination from './Pagination';
import Card from './Card/Card';

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
    return this.props.characters.map((character, index) => {
      return (
        <Card
          key={index}
          informations={character}
          title={character.name}
          onClick={() => this.props.addFavorites(character)}
          category="characters"
        />
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

export default connect(mapStateToProps, {
  fetchCharacters,
  fetchCharactersByLetter,
  addFavorites
})(Characters);
