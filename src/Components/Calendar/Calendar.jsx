import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../api/utils';
import CalendarHeader from './CalendarHeader';
import CalSideBar from './CalSideBar';
import Month from './Month';
import CalendarContext from '../../Providers/CalendarContext';
import EventModal from './EventModal';




const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, eventModal } = useContext(CalendarContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  return (

    <>
      <div className="h-screen flex flex-col">
        {eventModal && <EventModal />}
        <CalendarHeader />
        <div className="flex flex-1">
          <CalSideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Calendar;