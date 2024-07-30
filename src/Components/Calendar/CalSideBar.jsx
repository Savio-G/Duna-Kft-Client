import React, { useContext } from 'react';
import CreateEventButton from './CreateEventButton';
import CalendarContext from '../../Providers/CalendarContext';

const CalSideBar = () => {
  const { setEventModal } = useContext(CalendarContext)
  return (
    <aside onClick={() => setEventModal(true)} className=' p-5 w-56 mr-5'>
      <CreateEventButton />

    </aside>
  );
};

export default CalSideBar;