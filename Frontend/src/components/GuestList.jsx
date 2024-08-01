import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuestList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [guestName, setGuestName] = useState('');

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

  const addGuest = async () => {
    if (selectedEvent) {
      try {
        selectedEvent.guests.push(guestName);
        await axios.put(`http://localhost:5000/api/events/${selectedEvent._id}`, selectedEvent);
        setGuestName('');
      } catch (error) {
        console.error('Error adding guest:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Guest List Management</h2>
      <div className="mb-4">
        <label className="block text-white mb-2">Select Event</label>
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
      <div className="mb-4">
        <label className="block text-white mb-2">Guest Name</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
        />
      </div>
      <button onClick={addGuest} className="w-full bg-green-500 text-white py-2 rounded-lg">Add Guest</button>
    </div>
  );
};

export default GuestList;
