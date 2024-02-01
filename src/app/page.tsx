// pages/index.tsx
import React from 'react';
import EventList from '../components/EventList';
import Link from 'next/link';
import CreateEventForm from '../components/CreateEventForm';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-center">TorneosGG</h1>
        <EventList />
        <div className="mt-4">
        <Link href="/events/[eventId]" as="/events/1">
          View Event Details
        </Link>
      </div>
        <CreateEventForm />
      </div>
    </div>
  );
};

export default Home;
