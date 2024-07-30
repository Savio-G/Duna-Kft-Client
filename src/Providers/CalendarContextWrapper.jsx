import React, { useEffect, useReducer, useState } from 'react';
import CalendarContext from './CalendarContext';
import dayjs from 'dayjs';
import { getShifts } from '../api/shifts';



const CalendarContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [eventModal, setEventModal] = useState(false)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [savedEvents, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  useEffect(() => {

    getShifts()
      .then(data => {
        setEvents(data)
      })
  }, [])


  return (
    <CalendarContext.Provider value={{ monthIndex, setMonthIndex, eventModal, setEventModal, daySelected, setDaySelected, savedEvents, setEvents, selectedEvent, setSelectedEvent }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextWrapper;