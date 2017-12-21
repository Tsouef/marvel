import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
} from '../../actions';

import Pagination from '../Pagination';
import Card from '../Card/Card';

class Comics extends Component {
  componentDidMount() {
    if (this.props.comics.all.length <= 0) {
      this.props.fetchComics();
    }
  }

  handleFavorite(comic) {
    this.props.addFavorites(comic);
    this.props.showNotificationWithTimeout('Add to favorites.');
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

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, {
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
})(Comics);
