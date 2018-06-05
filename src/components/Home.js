import React, { Component } from 'react';
import Address from './Address';

class Home extends Component {
  render() {
    return (
      <div className="weather">
        <h1>Enter City and State</h1>
        <Address />
      </div>
    );
  }
}

export default Home;
