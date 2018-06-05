import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { getCurrentWeather } from '../utils/api';

class Address extends Component {
  state = {
    value: '',
    city: '',
    state: '',
    fireRedirect: false
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.value.includes(',')) {
      return alert('seperate city and state with comma');
    }

    const location = this.state.value.split(',');
    let [city, state] = location;
    const fixedState = state.trim();

    // prevent redirection on invalid location
    try {
      const currentWeather = await getCurrentWeather(city, fixedState);

      this.setState({
        city,
        state: fixedState,
        fireRedirect: true
      });
    } catch (error) {
      return alert('Please enter valid location');
    }
  };
  render() {
    const { fireRedirect, city, state } = this.state;
    return (
      <div>
        <form className="address-form" onSubmit={this.handleSubmit}>
          <TextField
            id="desiredLocation"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter the name of city"
          />
          <RaisedButton type="submit" label="Submit" disabled={!this.state.value} />
        </form>

        {fireRedirect && (
          <Redirect
            to={{
              pathname: '/forecast',
              search: `${city},${state}`
            }}
          />
        )}
      </div>
    );
  }
}

export default Address;
