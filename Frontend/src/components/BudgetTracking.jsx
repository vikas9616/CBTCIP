import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BudgetTracking = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Budget Tracking</h2>
      <div className="mb-4">
        <label className="block  mb-2">Select Event</label>
        <select
          onChange={(e) => setSelectedEvent(events.find(event => event._id === e.target.value))}
          className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
        >
          <option value="">Select an event</option>
          {events.map(event => (
            <option key={event._id} value={event._id}>{event.name}</option>
          ))}
        </select>
      </div>
      {selectedEvent && (
        <div>
          <p className="text-white mb-4">Budget: Rs.{selectedEvent.budget}</p>
          {/* Add more budget tracking functionalities as needed */}
        </div>
      )}
    </div>
  );
};

export default BudgetTracking;
