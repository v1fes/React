import React from 'react';

const SelectedEvent = ({ event }) => {
  if (!event) return <p>Please select an event to view details.</p>;

  return (
    <div className="selected-event">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default SelectedEvent;
