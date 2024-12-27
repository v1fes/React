import React from 'react';
import TimelineEvent from './TimelineEvent';
import './Timeline.css';

const Timeline = ({ events, onSelectEvent }) => {
  return (
    <div className="timeline">
      {events.map((event) => (
        <TimelineEvent key={event.id} event={event} onSelect={onSelectEvent} />
      ))}
    </div>
  );
};

export default Timeline;
