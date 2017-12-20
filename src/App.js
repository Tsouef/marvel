import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header/Header';
import ComicsList from './components/ComicsList';
import Comic from './components/Comic/Comic';
import CharactersList from './components/CharactersList';
import CharactersFilter from './components/CharactersFilter';
import Character from './components/Character/Character';
import Favorites from './components/Favorites';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/comics" component={ComicsList} />
          <Route exact path="/comics/id/:id" component={Comic} />
          <Route exact path="/characters" component={CharactersList} />
          <Route exact path="/characters/id/:id" component={Character} />
          <Route
            exact
            path="/characters/letter/:letter"
            component={CharactersFilter}
          />
          <Route exact path="/favorites" component={Favorites} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
