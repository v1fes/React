import React, { useState } from 'react';
import Timeline from './Timeline';
import SelectedEvent from './SelectedEvent';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Плавання Христофора Колумба',
      date: '1492',
      description: 'Христофор Колумб відкрив Америку, досягнувши берегів Багамських островів, хоча вважав, що дістався Індії.',
    },
    {
      id: 2,
      title: 'Відкриття Васко да Гами морського шляху до Індії',
      date: '1498',
      description: 'Португальський мореплавець Васко да Гама обігнув мис Доброї Надії та дістався Індії, відкривши морський шлях із Європи.',
    },
    {
      id: 3,
      title: 'Перша навколосвітня подорож',
      date: '1519-1522',
      description: 'Фернан Магеллан організував і очолив першу навколосвітню подорож, яка довела, що Земля має сферичну форму.',
    },
    {
      id: 4,
      title: 'Відкриття Тихого океану',
      date: '1513',
      description: 'Іспанський конкістадор Васко Нуньєс де Бальбоа першим з європейців досяг Тихого океану, перейшовши Панамський перешийок.',
    },
    {
      id: 5,
      title: 'Плавання Абеля Тасмана',
      date: '1642-1644',
      description: 'Голландський мореплавець Абель Тасман відкрив Тасманію, Нову Зеландію та острови Тихого океану.',
    },
  ];

  return (
    <div>
      <Timeline events={events} onSelectEvent={setSelectedEvent} />
      <SelectedEvent event={selectedEvent} />
    </div>
  );
};

export default App;
