import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Manageshifts = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dayOfWeek = startDate.toLocaleDateString('en-US', { weekday: 'long' });

  // Get the date of the month
  const dateOfMonth = startDate.getDate();
  const month = startDate.getMonth() + 1;

  // Get the full year
  const year = startDate.getFullYear();

  // Format the date as day/month/year
  const formattedDate = `${dateOfMonth}/${month}/${year}`;

  const handleShiftBtn = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const position = form.position.value
    const time = form.time.value
    const hours = form.hours.value

    const shiftInfo = {
      name: name,
      email: email,
      position: position,
      time: time,
      workhours: hours,
      date: formattedDate
    }

    fetch("http://localhost:5000/addShift", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(shiftInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        form.reset()
      })
  }
  return (
    <div className='md:h-3/4 md:w-3/4  '>
      <form onSubmit={handleShiftBtn} className='h-full'>


        <div className='md:flex '>
          <input type="text" placeholder="Name" name='name' className="input w-full max-w-xs input-bordered  m-3" />
          <input type="email" placeholder="Email" name='email' className="input w-full max-w-xs input-bordered m-3" />
        </div>

        <div>
          <select name='position' className="select select-bordered w-full max-w-xs m-3">
            <option disabled selected>Select Position?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          <input type="text" name='time' placeholder="Time" className="input w-full max-w-xs input-bordered m-3" />
        </div>
        <div>
          <input defaultValue={dayOfWeek} type="text" placeholder="Day of Work" className="input w-full max-w-xs input-bordered m-3" />
          <DatePicker className='ml-5 ' selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <div >
          <input type="number" name='hours' placeholder="Total Hours" className="input w-full max-w-xs input-bordered m-3" />
          <input className='btn btn-ghost w-56 bg-gray-400 m-3' type="submit" value="Give Shift" />
        </div>
      </form>
    </div>
  );
};

export default Manageshifts;