import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  if (robots.length === 0) {
    return <h1>LOADING....</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="navy f-5">RobotLand</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
};

export default App;
