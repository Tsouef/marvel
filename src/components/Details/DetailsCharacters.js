import React from 'react';

const DetailsCharacters = ({ thumbnail, name, description, category }) => {
  return (
    <div className="details">
      <div className="details-cover">
        <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <div className="details-description">
        <p>
          <span className="meta">Name: </span> {name}
        </p>
        <p>
          <span className="meta">Description: </span>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </div>
    </div>
  );
};

export default DetailsCharacters;
