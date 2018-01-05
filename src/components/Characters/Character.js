import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../../actions';
import './Character.css';

export class Character extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.fetchCharacterById(this.props.match.params.id);
    }
  }

  render() {
    if (
      this.props.characters.isFetching ||
      this.props.characters.character.length <= 0
    ) {
      return <div>Loading...</div>;
    }

    const { thumbnail, name, description } = this.props.characters.character;

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
  }
}

function mapStateToProps({ characters }) {
  return { characters };
}

export default connect(mapStateToProps, { fetchCharacterById })(Character);
