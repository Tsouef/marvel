import React from 'react';
import { Router, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';
import ComicsList from './components/Comics/ComicsList';
import ComicsFilter from './components/Comics/ComicsFilter';
import Comic from './components/Comics/Comic';
import CharactersList from './components/Characters/CharactersList';
import CharactersFilter from './components/Characters/CharactersFilter';
import Character from './components/Characters/Character';
import Favorites from './components/Favorites/Favorites';
import CreateForm from './components/Form/CreateForm';
import Auth from './components/Auth/Auth';
import PrivateRoute from './PrivateRoute';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <div className="container" style={{ position: 'relative' }}>
        <Route path="/" component={Header} />
        <Route path="/" component={Notification} />
        <Route exact path="/login" component={Auth} />
        <PrivateRoute exact path="/" component={Landing} />
        <PrivateRoute exact path="/comics" component={ComicsList} />
        <PrivateRoute exact path="/comics/id/:id" component={Comic} />
        <PrivateRoute
          exact
          path="/comics/letter/:letter"
          component={ComicsFilter}
        />
        <PrivateRoute exact path="/characters" component={CharactersList} />
        <PrivateRoute exact path="/characters/id/:id" component={Character} />
        <PrivateRoute
          exact
          path="/characters/letter/:letter"
          component={CharactersFilter}
        />
        <PrivateRoute exact path="/favorites" component={Favorites} />
        <PrivateRoute exact path="/add" component={CreateForm} />
      </div>
    </Router>
  );
};

export default App;
