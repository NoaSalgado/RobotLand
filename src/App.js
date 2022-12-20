import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  //Event handler. Using arrow functions this refers to App
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="navy f-5">RobotLand</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
