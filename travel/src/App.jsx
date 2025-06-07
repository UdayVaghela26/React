import React, { useState, useEffect } from 'react';
import DestinationList from './components/DestinationList';
import AddDestination from './components/AddDestination';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/destinations')
      .then(res => res.json())
      .then(data => setDestinations(data));
  }, []);

  const handleAddDestination = (newDest) => {
    setDestinations(prev => [...prev, newDest]);
  };

  return (
    <div className="App">
      <h1>Travel Destination Guide</h1>
      <AddDestination onAdd={handleAddDestination} />
      <DestinationList destinations={destinations} />
    </div>
  );
}

export default App;
