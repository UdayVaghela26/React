import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = ({ destinations }) => {
  return (
    <div className="destinations">
      {destinations.map(dest => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
};

export default DestinationList;
