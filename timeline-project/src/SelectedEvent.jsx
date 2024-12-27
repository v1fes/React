import React from 'react';

const SelectedEvent = ({ event }) => {
  if (!event) return <p>Оберіть подію для перегляду деталей.</p>;

  return (
    <div className="selected-event">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default SelectedEvent;
