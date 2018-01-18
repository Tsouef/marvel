import React from 'react';
import SearchContainer from '../../Containers/SearchContainer';

export const Landing = () => {
  return (
    <div className="container center-align">
      <h4>Welcome to API MARVEL</h4>
      <p>Navigate with different links in menu</p>
      <SearchContainer />
    </div>
  );
};

export default Landing;
