import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
  state = {
    letters: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
  };

  renderContent() {
    return this.state.letters.map(letter => {
      return (
        <li key={letter}>
          <Link to={`/characters/letter/${letter}`}>{letter}</Link>
        </li>
      );
    });
  }

  render() {
    return <ul className="pagination center-align">{this.renderContent()}</ul>;
  }
}

export default Pagination;
