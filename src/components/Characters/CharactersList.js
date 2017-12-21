import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacters,
  fetchCharactersByLetter,
  addFavorites
} from '../../actions';

import Pagination from '../Pagination';
import Card from '../Card/Card';

class Characters extends Component {
  componentDidMount() {
    if (this.props.characters.all.length <= 0) {
      this.props.fetchCharacters();
    }
  }

  renderContent() {
    if (this.props.characters.isFetching) {
      return <div>Loading...</div>;
    }

    return this.props.characters.all.map((character, index) => {
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
        <Pagination category="characters" />
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