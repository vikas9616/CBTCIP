import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scheduling = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [task, setTask] = useState('');

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

  const addTask = async () => {
    if (selectedEvent) {
      try {
        selectedEvent.tasks.push(task);
        await axios.put(`http://localhost:5000/api/events/${selectedEvent._id}`, selectedEvent);
        setTask('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Scheduling and Timelines</h2>
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
        <label className="block text-white mb-2">Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-lg"
        />
      </div>
      <button onClick={addTask} className="w-full bg-green-500 text-white py-2 rounded-lg">Add Task</button>
    </div>
  );
};

export default Scheduling;
