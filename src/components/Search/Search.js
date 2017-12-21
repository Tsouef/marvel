import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharactersByLetter } from '../../actions';
import Card from '../Card/Card';

class Search extends Component {
  state = { value: '' };

  onInputChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchCharactersByLetter(this.state.value);
  };

  renderContent() {
    console.log(this.props.filter);
    if (this.props.filter.length < 1) {
      console.log('exist non?');
      return;
    }
    return this.props.filter.map((character, index) => {
      return (
        <Card
          key={index}
          informations={character}
          title={character.name}
          // onClick={() => this.handleFavorite(character)}
          category="characters"
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h5>What do you want to search?</h5>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.value}
          />
          <button type="submit">Search</button>
        </form>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ characters }) {
  return characters;
}

export default connect(mapStateToProps, { fetchCharactersByLetter })(Search);
