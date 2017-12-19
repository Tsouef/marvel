import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header/Header';
import ComicsList from './components/ComicsList/ComicsList';
import Comic from './components/Comic/Comic';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/comics" component={ComicsList} />
          <Route exact path="/comics/:id" component={Comic} />
          <Route exact path="/Movies" component={Movies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
