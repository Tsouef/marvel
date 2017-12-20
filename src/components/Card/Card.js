import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ informations, title, onClick, category }) => {
  const { thumbnail, id, description } = informations;
  return (
    <div className="card">
      <div className="card-image">
        <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="card-action">
        <Link to={`/${category}/id/${id}`}>En voir plus</Link>
        <button onClick={onClick}>Add to my favorites</button>
      </div>
    </div>
  );
};

export default Card;
