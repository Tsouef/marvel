import React from 'react';

const DetailsComics = ({
  thumbnail,
  title,
  description,
  prices,
  characters
}) => {
  const renderCharacters = characters => {
    return characters.items.map(character => {
      return <li key={character.name}>{character.name}</li>;
    });
  };

  return (
    <div className="details">
      <div className="details-cover">
        <img alt="" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <div className="details-description">
        <p>
          <span className="meta">Title: </span> {title}
        </p>
        <p>
          <span className="meta">Description: </span>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
        <p>
          <span className="meta">Price: </span> {prices[0].price}$
        </p>
        <p>
          <span className="meta">Characters: </span>
          <ul className="details-comics">{renderCharacters(characters)}</ul>
        </p>
      </div>
    </div>
  );
};

export default DetailsComics;
