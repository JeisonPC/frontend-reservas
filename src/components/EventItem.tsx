// components/EventItem.tsx
// components/EventItem.tsx
import Link from "next/link";
import React from "react";

interface EventItemProps {
  event: {
    id: number;
    name: string;
    availablePositions: number;
    // Otras propiedades del evento
  };
  onDelete: (id: number) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onDelete }) => {
  const handleDelete = () => {
    // Llamada a la función onDelete cuando se hace clic en el botón de eliminación
    onDelete(event.id);
  };

  return (
    <li className="mb-2">
      {event.name} - Available Positions: {event.availablePositions}
      <button
        onClick={handleDelete}
        className="ml-2 bg-red-500 text-white p-1 rounded"
      >
        Delete
      </button>
      {/* Envuelve el botón "View Event Details" con el componente Link */}
      <Link
        className="ml-2 text-blue-500"
        href="/events/[eventId]"
        as={`/events/${event.id}`}
      >
        View Event Details
      </Link>
    </li>
  );
};

export default EventItem;
