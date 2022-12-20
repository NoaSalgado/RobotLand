import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="flex flex-column items-center bg-washed-green navy code br3 pa2 ma2 w-25 grow shadow-5">
      <img className="w-50" src={`https://robohash.org/${id}`} alt="robot" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
