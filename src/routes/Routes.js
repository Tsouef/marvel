import React from 'react';
import { Router, Route } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Header from '../components/Header/Header';
import Notification from '../components/Notification/Notification';
import Comic from '../components/Comics/Comic';
import Character from '../components/Characters/Character';
import Favorites from '../components/Favorites/Favorites';
import CreateForm from '../components/Form/CreateForm';
import AuthContainer from '../Containers/AuthContainer';
import SearchCategory from '../Containers/SearchCategoryContainer';
import SearchCategoryByFilter from '../Containers/SearchCategoryFilterContainer';
import PrivateRoute from '../routes/PrivateRoute';

const Routes = () => (
  <div className="container" style={{ position: 'relative' }}>
    <Route path="/" component={Header} />
    <Route path="/" component={Notification} />
    <Route exact path="/" component={AuthContainer} />
    <Route exact path="/search" component={Landing} />
    <Route exact path="/comics/id/:id" component={Comic} />
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
