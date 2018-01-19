import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComicById } from '../actions';
import Details from '../components/Details/Details';
// import './Comic.css';

export class Comic extends Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.fetchComicById(this.props.match.params.id);
    }
  }

  render() {
    if (this.props.comics.isFetching || this.props.comics.comic.length <= 0) {
      return <div>Loading...</div>;
    }

    return <Details {...this.props.comics.comic} category="comics" />;
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, { fetchComicById })(Comic);
