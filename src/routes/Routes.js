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
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={AuthContainer} />

    <PrivateRoute
      exact
      path="/comics/id/:id"
      component={ComicContainer}
      category="comics"
    />
    <PrivateRoute
      exact
      path="/characters/id/:id"
      component={CharacterContainer}
      category="characters"
    />
    <PrivateRoute
      exact
      path="/comics"
      component={SearchCategory}
      category="comics"
    />
    <PrivateRoute
      exact
      path="/comics/letter/:letter"
      component={SearchCategoryByFilter}
      category="comics"
    />
    <PrivateRoute
      exact
      path="/characters"
      component={SearchCategory}
      category="characters"
    />
    <PrivateRoute
      exact
      path="/characters/letter/:letter"
      component={SearchCategoryByFilter}
      category="characters"
    />
    <PrivateRoute exact path="/favorites" component={Favorites} />

    {/* <PrivatePrivateRoute exact path="/add" component={CreateForm} /> */}
  </div>
);

export default Routes;
