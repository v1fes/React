import React from 'react';

const TimelineEvent = ({ event, onSelect }) => {
  return (
    <div className="timeline-event" onClick={() => onSelect(event)}>
      <div className="circle"></div>
      <p>{event.date}</p>
      <p>{event.title}</p>
    </div>
  );
};

export default TimelineEvent;
