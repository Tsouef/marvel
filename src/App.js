import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header/Header';
import Comics from './components/Comics';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/comics" component={Comics} />
          <Route path="/Movies" component={Movies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
