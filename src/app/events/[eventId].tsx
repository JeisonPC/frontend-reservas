// pages/events/[eventId].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EventDetail from '../../components/EventDetail';
import ReservationForm from '../../components/ReservationForm';

const EventDetailPage: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (eventId) {
      // Llama a la API para obtener detalles del evento por ID
      fetch(`http://localhost:3000/api/v1/events/${eventId}`)
        .then(response => response.json())
        .then(data => setEvent(data))
        .catch(error => console.error('Error fetching event details:', error));
    }
  }, [eventId]);

  const handleReservationSubmit = (reservationData: { reservedByName: string }) => {
    // Llama a la API para realizar la reserva del evento
    fetch(`http://localhost:3000/api/v1/events/${eventId}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Redirige a la página de eventos después de realizar la reserva
        router.push('/');
      })
      .catch(error => console.error('Error creating reservation:', error));
  };

  return (
    <div className="container mx-auto p-4">
      {event && (
        <>
          <EventDetail event={event} />
          <ReservationForm onSubmit={handleReservationSubmit} />
        </>
      )}
    </div>
  );
};

export default EventDetailPage;
