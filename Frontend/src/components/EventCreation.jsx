import React, { useState } from 'react';
import axios from 'axios';

const EventCreation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, date, budget };
    try {
      await axios.post('http://localhost:5000/api/events', newEvent);
      setName('');
      setDate('');
      setBudget('');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block  mb-2">Event Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white bg-gray-900 mb-2">Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">Create Event</button>
      </form>
    </div>
  );
};

export default EventCreation;
