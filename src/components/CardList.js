import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap justify-center w-100 pa3">
      {robots.map((robot, i) => (
        <Card
          key={i}
          id={robot.id}
          name={robot.name}
          email={robot.email}></Card>
      ))}
    </div>
  );
};

export default CardList;
