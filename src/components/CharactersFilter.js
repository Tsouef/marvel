import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharactersByLetter, addFavorites } from '../actions';

import Pagination from './Pagination';
import Card from './Card/Card';

class CharactersFilter extends Component {
  componentDidMount() {
    this.props.fetchCharactersByLetter(this.props.match.params.letter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.letter !== this.props.match.params.letter) {
      this.props.fetchCharactersByLetter(nextProps.match.params.letter);
    }
  }

  renderContent() {
    if (this.props.characters.filter.length <= 0) {
      return <div>Waiting</div>;
    }

    return this.props.characters.filter.map((character, index) => {
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
    console.log(this.props);
    if (this.props.characters.length <= 0) {
      return <div>Waiting</div>;
    }
    return (
      <div>
        <Pagination />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ characters }) {
  console.log(characters);
  return { characters };
}

export default connect(mapStateToProps, {
  fetchCharactersByLetter,
  addFavorites
})(CharactersFilter);
