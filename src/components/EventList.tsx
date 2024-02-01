// components/EventList.tsx
'use client'
import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';

interface Event {
  id: number;
  name: string;
  availablePositions: number;
  // Otras propiedades del evento
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de eventos
    fetch('http://localhost:3000/api/v1/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleDelete = (id: number) => {
    // Llamada a la API para eliminar el evento por ID
    fetch(`http://localhost:3000/api/v1/events/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Actualizar la lista de eventos después de la eliminación
        setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Event List</h2>
      <ul className="list-disc pl-4">
        {events.map(event => (
          <EventItem key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
