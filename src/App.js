import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <div className="container center-align">
          <h4>Welcome to API MARVEL</h4>
          <p>Navigate with different links in menu</p>
        </div>
      </div>
    );
  }
}

export default App;
