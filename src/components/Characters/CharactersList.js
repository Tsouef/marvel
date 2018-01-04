import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacters,
  fetchCharactersByLetter,
  addFavorites,
  showNotificationWithTimeout
} from '../../actions';

import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

class Characters extends Component {
  componentDidMount() {
    if (this.props.characters.all.length <= 0) {
      this.props.fetchCharacters();
    }
  }

  handleFavorite(character) {
    const exist = this.props.favorites.favorites.some(
      item => item.id === character.id
    );

    if (exist) {
      this.props.showNotificationWithTimeout(
        'Already in our favorites.',
        'error'
      );
      return;
    }
    this.props.addFavorites(character);
    this.props.showNotificationWithTimeout('Add to favorites.', 'success');
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
          onClick={() => this.handleFavorite(character)}
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

function mapStateToProps({ favorites, characters }) {
  return { favorites, characters };
}

export default connect(mapStateToProps, {
  fetchCharacters,
  fetchCharactersByLetter,
  addFavorites,
  showNotificationWithTimeout
})(Characters);
