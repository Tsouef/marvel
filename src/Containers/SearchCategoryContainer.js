import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacters,
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
} from '../actions';

import Pagination from '../components/Pagination/Pagination';
import Card from '../components/Card/Card';

class SearchCategory extends Component {
  componentDidMount() {
    const { category } = this.props;
    if (category === 'characters') {
      this.props.fetchCharacters();
    } else {
      this.props.fetchComics();
    }
  }

  handleFavorite(elem) {
    const exist = this.props.favorites.favorites.some(
      item => item.id === elem.id
    );

    if (exist) {
      this.props.showNotificationWithTimeout(
        'Already in our favorites.',
        'error'
      );
      return;
    }
    this.props.addFavorites(elem);
    this.props.showNotificationWithTimeout('Add to favorites.', 'success');
  }

  renderContent() {
    const { category } = this.props;
    if (this.props[category].isFetching) {
      return <div>Loading...</div>;
    }

    return this.props[category].all.map((elem, index) => {
      return (
        <Card
          key={index}
          informations={elem}
          title={elem.title}
          onClick={() => this.handleFavorite(elem)}
          category={category}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Pagination category={this.props.category} />
        <div className="row card-container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ comics, characters, favorites }) {
  return { comics, characters, favorites };
}

export default connect(mapStateToProps, {
  fetchCharacters,
  fetchComics,
  addFavorites,
  showNotificationWithTimeout
})(SearchCategory);
