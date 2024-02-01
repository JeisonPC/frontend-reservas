'use client'
import React, { useState } from 'react';

interface ReservationFormProps {
  onSubmit: (data: { reservedByName: string }) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservedByName, setReservedByName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Llama a la función onSubmit con los datos del formulario
    onSubmit({ reservedByName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={reservedByName}
          onChange={e => setReservedByName(e.target.value)}
        />
      </label>
      <button type="submit" className="ml-2 bg-blue-500 text-white p-1 rounded">
        Reserve
      </button>
    </form>
  );
};

export default ReservationForm;
