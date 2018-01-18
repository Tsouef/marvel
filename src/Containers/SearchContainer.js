import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharactersByLetter,
  fetchComicsByLetter,
  resetFilters
} from '../actions';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';

export class SearchContainer extends Component {
  state = { valueInput: '', valueSelect: 'characters' };

  onInputChange = event => {
    this.setState({ valueInput: event.target.value });
  };

  onSelectChange = event => {
    this.props.resetFilters();
    this.setState({ valueSelect: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.valueSelect === 'characters') {
      this.props.fetchCharactersByLetter(this.state.valueInput);
    } else {
      this.props.fetchComicsByLetter(this.state.valueInput);
    }
  };

  renderContent() {
    if (
      this.props[this.state.valueSelect] <= 0 ||
      this.props[this.state.valueSelect].filter.length <= 0
    ) {
      return;
    }
    return this.props[this.state.valueSelect].filter.map((item, index) => {
      return (
        <Card
          key={index}
          informations={item}
          title={item.name}
          category={this.state.valueSelect}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Search
          valueInput={this.state.valueInput}
          valueSelect={this.state.valueSelect}
          onSubmit={this.onSubmit}
          onSelectChange={this.onSelectChange}
          onInputChange={this.onInputChange}
        />
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ characters, comics }) {
  return { characters, comics };
}

export default connect(mapStateToProps, {
  fetchCharactersByLetter,
  fetchComicsByLetter,
  resetFilters
})(SearchContainer);
