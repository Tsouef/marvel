import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharactersByLetter,
  addFavorites,
  showNotification,
  showNotificationWithTimeout,
  hideNotification
} from '../../actions';

import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

class CharactersFilter extends Component {
  componentDidMount() {
    this.props.fetchCharactersByLetter(this.props.match.params.letter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.letter !== this.props.match.params.letter) {
      this.props.fetchCharactersByLetter(nextProps.match.params.letter);
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
    return this.props.characters.filter.map((character, index) => {
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
    if (this.props.characters.isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Pagination category="characters" />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ characters, favorites }) {
  return { characters, favorites };
}

export default connect(mapStateToProps, {
  fetchCharactersByLetter,
  addFavorites,
  showNotification,
  hideNotification,
  showNotificationWithTimeout
})(CharactersFilter);
