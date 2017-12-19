import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../../actions';
import './Character.css';

class Comic extends Component {
  componentDidMount() {
    this.props.fetchCharacterById(this.props.match.params.id);
  }

  renderCharacters(characters) {
    console.log(characters);
    return characters.map(character => {
      return <li key={character.name}>{character.name}</li>;
    });
  }

  render() {
    const { thumbnail, name, description } = this.props.character;

    if (this.props.character.length <= 0) {
      return <div>Waiting</div>;
    }

    return (
      <div className="character">
        <div className="character-cover">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} />
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
  }
}

function mapStateToProps({ character }) {
  return { character };
}

export default connect(mapStateToProps, { fetchCharacterById })(Comic);
