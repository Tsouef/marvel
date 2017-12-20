import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComicById } from '../../actions';
import './Comic.css';

class Comic extends Component {
  componentDidMount() {
    this.props.fetchComicById(this.props.match.params.id);
  }

  renderCharacters(characters) {
    return characters.map(character => {
      return <li key={character.name}>{character.name}</li>;
    });
  }

  render() {
    const {
      thumbnail,
      title,
      description,
      prices,
      characters
    } = this.props.comic;

    if (this.props.comic.length <= 0) {
      return <div>Waiting</div>;
    }

    return (
      <div className="comic">
        <div className="comic-cover">
          <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
        </div>
        <div className="comic-description">
          <p>
            <span className="meta">Title: </span> {title}
          </p>
          <p>
            <span className="meta">Description: </span>
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <p>
            <span className="meta">Price: </span> {prices[0].price}$
          </p>
          <p>
            <span className="meta">Characters: </span>
            <ul className="comic-characters">
              {this.renderCharacters(characters.items)}
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comic }) {
  return { comic };
}

export default connect(mapStateToProps, { fetchComicById })(Comic);
