import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComicById } from '../../actions';
import './Comic.css';

export class Comic extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.fetchComicById(this.props.match.params.id);
    }
  }

  renderCharacters(characters) {
    return characters.items.map(character => {
      return <li key={character.name}>{character.name}</li>;
    });
  }

  render() {
    if (this.props.comics.isFetching || this.props.comics.comic.length <= 0) {
      return <div>Loading...</div>;
    }
    const {
      thumbnail,
      title,
      description,
      prices,
      characters
    } = this.props.comics.comic;

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
            <ul className="comic-comics">
              {this.renderCharacters(characters)}
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, { fetchComicById })(Comic);
