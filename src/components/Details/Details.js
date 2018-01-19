import React from 'react';
import './Details.css';

import DetailsCharacters from './DetailsCharacters';
import DetailsComics from './DetailsComics';

const Details = props => {
  if (props.category === 'characters') {
    return <DetailsCharacters {...props} />;
  }
  return <DetailsComics {...props} />;
};

export default Details;
