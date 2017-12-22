import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharactersByLetter,
  fetchComicsByLetter,
  resetFilters
} from '../../actions';
import Card from '../Card/Card';

class Search extends Component {
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
    if (this.props[this.state.valueSelect].filter.length < 1) {
      return;
    }
    return this.props[this.state.valueSelect].filter.map((item, index) => {
      return (
        <Card
          key={index}
          informations={item}
          title={item.name}
          // onClick={() => this.handleFavorite(item)}
          category={this.state.valueSelect}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h5>What do you want to search?</h5>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Choose your category</label>
            <select className="browser-default" onChange={this.onSelectChange}>
              <option value="characters">characters</option>
              <option value="comics">comics</option>
            </select>
          </div>
          <div className="input-field">
            <input
              id="name"
              type="text"
              placeholder="Enter a name"
              onChange={this.onInputChange}
              value={this.state.valueInput}
            />
          </div>
          <button
            disabled={!this.state.valueInput}
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
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
})(Search);
