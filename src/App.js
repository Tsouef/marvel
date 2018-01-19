import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './routes/history';
import Routes from './routes/Routes';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
