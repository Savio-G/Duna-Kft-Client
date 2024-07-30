import React, { useContext } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarContext from '../../Providers/CalendarContext';
import dayjs from 'dayjs';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext)
  const handlePreviousMonth = () => {
    setMonthIndex(monthIndex - 1)
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }
  const handleReset = () => {
    setMonthIndex(dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex items-center'>
      <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'> Today</button>
      <button onClick={handlePreviousMonth}>
        <span className="text-gray-600 mx-2">
          <FaAngleLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="text-gray-600 mx-2">
          <FaAngleRight />
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-400 font-bold'>
        {
          dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )
        }
      </h2>
    </header>
  );
};

export default CalendarHeader;