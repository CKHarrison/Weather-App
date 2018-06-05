import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './Home';
import Header from './Header';
import Forecast from './Forecast';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forecast" component={Forecast} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
