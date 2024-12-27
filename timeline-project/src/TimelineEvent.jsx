import React from 'react';

const TimelineEvent = ({ event, onSelect }) => {
  return (
    <li onClick={() => onSelect(event)}>
      <strong>{event.title}</strong> - {event.date}
    </li>
  );
};

export default TimelineEvent;
