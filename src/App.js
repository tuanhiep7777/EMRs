import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import User from './components/User';

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar />

        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={User} />
              <Route path="**" component={User} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
