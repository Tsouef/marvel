import React from 'react';
import { Router, Route } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Header from '../components/Header/Header';
import Notification from '../components/Notification/Notification';
import CreateForm from '../components/Form/CreateForm';
import Favorites from '../Containers/FavoritesContainer';
import AuthContainer from '../Containers/AuthContainer';
import SearchCategory from '../Containers/SearchCategoryContainer';
import SearchCategoryByFilter from '../Containers/SearchCategoryFilterContainer';
import CharacterContainer from '../Containers/CharacterContainer';
import ComicContainer from '../Containers/ComicContainer';
import PrivateRoute from '../routes/PrivateRoute';

const Routes = () => (
  <div className="container" style={{ position: 'relative' }}>
    <Route path="/" component={Header} />
    <Route path="/" component={Notification} />
    <Route path="/" component={AuthContainer} />
    <Route exact path="/search" component={Landing} />
    <Route exact path="/comics/id/:id" component={ComicContainer} />
    <Route exact path="/characters/id/:id" component={CharacterContainer} />
    <Route
      exact
      path="/comics"
      render={props => <SearchCategory {...props} category="comics" />}
    />
    <Route
      exact
      path="/comics/letter/:letter"
      render={props => <SearchCategoryByFilter {...props} category="comics" />}
    />
    <Route
      exact
      path="/characters"
      render={props => <SearchCategory {...props} category="characters" />}
    />
    <Route
      exact
      path="/characters/letter/:letter"
      render={props => (
        <SearchCategoryByFilter {...props} category="characters" />
      )}
    />
    <Route exact path="/favorites" component={Favorites} />
    {/* <PrivateRoute exact path="/add" component={CreateForm} /> */}
  </div>
);

export default Routes;
