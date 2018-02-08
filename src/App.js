import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import GameList from './pages/GameList';
import Game from './pages/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/games" component={GameList} />
          <Route path="/games/:gameId" component={Game} />
        </Switch>
      </div>
    )
  }
}

export default App
