import { createContext } from "react";

const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => { },
  eventModal: false,
  setEventModal: () => { },
  selectedEvent: null,
  setSelectedEvent: () => { }
})

export default CalendarContext