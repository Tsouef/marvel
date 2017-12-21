import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComicsByLetter, addFavorites } from '../../actions';

import Pagination from '../Pagination';
import Card from '../Card/Card';

class ComicsFilter extends Component {
  componentDidMount() {
    this.props.fetchComicsByLetter(this.props.match.params.letter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.letter !== this.props.match.params.letter) {
      this.props.fetchComicsByLetter(nextProps.match.params.letter);
    }
  }

  renderContent() {
    return this.props.comics.filter.map((comic, index) => {
      return (
        <Card
          key={index}
          informations={comic}
          title={comic.title}
          onClick={() => this.props.addFavorites(comic)}
          category="comics"
        />
      );
    });
  }

  render() {
    if (this.props.comics.filter.length <= 0) {
      return <div>Waiting</div>;
    }

    return (
      <div>
        <Pagination category="comics" />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, {
  fetchComicsByLetter,
  addFavorites
})(ComicsFilter);
