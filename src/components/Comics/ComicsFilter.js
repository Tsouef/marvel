import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchComicsByLetter,
  addFavorites,
  showNotificationWithTimeout
} from '../../actions';

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

  handleFavorite(comic) {
    const exist = this.props.favorites.favorites.some(
      item => item.id === comic.id
    );

    if (exist) {
      this.props.showNotificationWithTimeout(
        'Already in our favorites.',
        'error'
      );
      return;
    }
    this.props.addFavorites(comic);
    this.props.showNotificationWithTimeout('Add to favorites.', 'success');
  }

  renderContent() {
    return this.props.comics.filter.map((comic, index) => {
      return (
        <Card
          key={index}
          informations={comic}
          title={comic.title}
          onClick={() => this.handleFavorite(comic)}
          category="comics"
        />
      );
    });
  }

  render() {
    if (this.props.comics.isFetching) {
      return <div>Loading...</div>;
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
  addFavorites,
  showNotificationWithTimeout
})(ComicsFilter);
