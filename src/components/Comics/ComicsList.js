import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics, addFavorites } from '../../actions';

import Pagination from '../Pagination';
import Card from '../Card/Card';

class Comics extends Component {
  componentDidMount() {
    this.props.fetchComics();
  }

  renderContent() {
    if (this.props.comics.all.length <= 0) {
      return <div>Waiting</div>;
    }

    return this.props.comics.all.map((comic, index) => {
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

export default connect(mapStateToProps, { fetchComics, addFavorites })(Comics);
