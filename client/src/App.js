import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cities: []
    }
  }

  async componentDidMount(){
    const response = await fetch("/cities")
    const cities = await response.json()
    this.setState({ cities })
  }

  render() {
    const cities = this.state.cities.map((city, i) => (
      <li key={i}>
        <b>{city.name}</b>: {city.population}
      </li>
    ))
    return (
      <div>
        <ul>{ cities }</ul>
      </div>
    );
  }
}

export default App;
