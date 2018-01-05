import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
} from '../../actions';

import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

export class Comics extends Component {
  componentDidMount() {
    if (this.props.comics.all.length <= 0) {
      this.props.fetchComics();
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
    if (this.props.comics.isFetching) {
      return <div>Loading...</div>;
    }

    return this.props.comics.all.map((comic, index) => {
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
    return (
      <div>
        <Pagination category="comics" />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ comics, favorites }) {
  return { comics, favorites };
}

export default connect(mapStateToProps, {
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
})(Comics);
