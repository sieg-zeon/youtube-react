import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './pages/Top'
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exa path="/search" component={Search} />
        <Route exa path="/watch" component={Watch} />
        <Route exa path="/" component={Top} />
      </Switch>
    </Router>
  );
}

export default App;
