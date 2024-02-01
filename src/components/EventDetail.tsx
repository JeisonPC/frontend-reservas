// components/EventDetail.tsx
import React from 'react';

interface EventDetailProps {
  event: {
    id: number;
    name: string;
    description: string;
    date: string;
    availablePositions: number;
    // Otras propiedades del evento
  };
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Available Positions: {event.availablePositions}</p>
    </div>
  );
};

export default EventDetail;
