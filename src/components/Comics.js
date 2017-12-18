import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';

class Comics extends Component {
  componentDidMount() {
    this.props.fetchComics();
  }

  renderContent() {
    return this.props.comics.map(comic => {
      console.log(comic);
      return (
        <div key={comic.id} className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
              </div>
              <span className="card-title">{comic.title}</span>
              <div className="card-content">
                <p>{comic.description}</p>
              </div>
              <div className="card-action">
                <a href="#">En voir plus</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, { fetchComics })(Comics);
