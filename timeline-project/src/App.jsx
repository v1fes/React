import React, { useState } from 'react';
import Timeline from './Timeline';
import SelectedEvent from './SelectedEvent';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: 'World War II', date: '1939-1945', description: 'A global war.' },
    { id: 2, title: 'Moon Landing', date: '1969', description: 'First human landing on the moon.' },
    { id: 3, title: 'Fall of Berlin Wall', date: '1989', description: 'End of the Cold War.' },
  ];

  return (
    <div>
      <Timeline events={events} onSelectEvent={setSelectedEvent} />
      <SelectedEvent event={selectedEvent} />
    </div>
  );
};

export default App;
