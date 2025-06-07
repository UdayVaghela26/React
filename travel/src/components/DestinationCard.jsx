import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />
      <div className="card-content">
        <h2>{destination.name}, {destination.country}</h2>
        <p>{destination.description}</p>
        <p><strong>Category:</strong> {destination.category}</p>
        <p><strong>Rating:</strong> {destination.rating}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
