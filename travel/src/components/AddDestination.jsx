import React, { useState } from 'react';

const AddDestination = ({ onAdd }) => {

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    country: '',
    description: '',
    image: '',
    category: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      ...formData,
      rating: parseFloat(formData.rating)
    };

    fetch('http://localhost:3000/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDestination)
    })
      .then(res => res.json())
      .then(data => {
        onAdd(data);    // Tell parent to add new destination to list
        setFormData({ name: '', country: '', description: '', image: '', category: '', rating: '' });
      })
      .catch(err => {
        alert('Failed to add destination');
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', maxWidth: '600px' }}>
      <h2>Add New Destination</h2>
      <input
        type="text"
        name="id"
        placeholder="id"
        value={formData.id}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        name="name"
        placeholder="Destination Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        name="category"
        placeholder="Category (e.g. City, Nature)"
        value={formData.category}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        rows="3"
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Add Destination
      </button>
    </form>
  );
};

export default AddDestination;
