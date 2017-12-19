import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComics } from '../../actions';
import './Comics.css';

class Comics extends Component {
  componentDidMount() {
    this.props.fetchComics();
  }

  renderContent() {
    return this.props.comics.map(({ id, thumbnail, title, description }, index) => {
      return (
        <div key={id} className="card">
          <div className="card-image">
            <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
          </div>
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="card-action">
            <Link to={`/comics/${id}`}>En voir plus</Link>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="row card-container">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ comics }) {
  return { comics };
}

export default connect(mapStateToProps, { fetchComics })(Comics);
