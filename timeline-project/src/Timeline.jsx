import React from 'react';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events, onSelectEvent }) => {
  return (
    <div>
      <h1>Historical Events Timeline</h1>
      <ul>
        {events.map((event) => (
          <TimelineEvent key={event.id} event={event} onSelect={onSelectEvent} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
