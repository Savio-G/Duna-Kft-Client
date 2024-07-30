import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import CalendarContext from '../../Providers/CalendarContext';
import { getShifts } from '../../api/shifts';

const Day = ({ day, rowidx }) => {
  const [dayEvents, setDayEvents] = useState([])
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ?
      "bg-slate-400 text-white rounded-full w-7"
      :
      ""
  }
  const { setEventModal, setDaySelected, setEvents, savedEvents, setSelectedEvent, selectedEvent } = useContext(CalendarContext)
  useEffect(() => {
    const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
    setDayEvents(events)
  }, [savedEvents, day])
  return (
    <div onClick={() => {
      setEventModal(true)
      setDaySelected(day)
    }} className='border border-gray-200 flex flex-col h-40 w-32 cursor-pointer'>
      <header className="flex flex-col items-center">
        {rowidx === 0 && <p className="text-xs mt-1">{day.format("ddd").toUpperCase()}</p>}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div className="flex-1 cursor-pointer">
        {dayEvents.map((evt, idx) => (
          <div div key={idx}
            onClick={() => { setSelectedEvent(evt) }}
            className={`${evt.label} p-1 mr-1 text-gray flex text-xs rounded mb-1 truncate`}>
            {evt.name}

          </div>
        ))}
      </div>
      {/* <div className="flex-1 cursor-pointer" ></div> */}
    </div >
  );
};

export default Day;