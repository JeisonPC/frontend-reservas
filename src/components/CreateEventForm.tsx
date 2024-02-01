// components/CreateEventForm.tsx
'use client'
import React, { useState } from 'react';

interface NewEvent {
  name: string;
  description: string;
  date: string;
  availablePositions: number;
}

const CreateEventForm: React.FC = () => {
  const [newEvent, setNewEvent] = useState<NewEvent>({
    name: '',
    description: '',
    date: '',
    availablePositions: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent(prevEvent => ({ ...prevEvent, [name]: value }));
  };


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  fetch('http://localhost:3000/api/v1/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Event created:', data);
      // Puedes realizar acciones adicionales después de la creación del evento
    })
    .catch(error => console.error('Error creating event:', error));
};

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre del evento:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newEvent.name}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availablePositions">
            Posiciones disponibles:
          </label>
          <input
            type="number"
            id="availablePositions"
            name="availablePositions"
            value={newEvent.availablePositions}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
