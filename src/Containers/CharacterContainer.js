import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../actions';
import Details from '../components/Details/Details';

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

    return (
      <Details {...this.props.characters.character} category="characters" />
    );
  }
}

function mapStateToProps({ characters }) {
  return { characters };
}

export default connect(mapStateToProps, { fetchCharacterById })(Character);
