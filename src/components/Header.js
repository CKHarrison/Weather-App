import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <div className="header-bar">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Weather Buddy</h1>
        </NavLink>
      </div>
    );
  }
}

// using withRouter higher order component to give location props to Header
export default withRouter(Header);

// <AppBar
//   showMenuIconButton={false}
//   title="Weather Buddy"
//   onTitleClick={() => this.props.history.push('/')}
//   titleStyle={{ textAlign: 'center' }}
//   className="header"
// />;
