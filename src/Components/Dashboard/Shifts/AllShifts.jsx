import React, { useEffect, useState } from 'react';
import { getShifts } from '../../../api/shifts';
import ShiftsRow from './ShiftsRow';

const AllShifts = () => {
  const [shifts, setShifts] = useState([])
  useEffect(() => {
    getShifts()
      .then(data => {
        setShifts(data)
      })


  }, [])





  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Time</th>
            <th>Work Hours</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            shifts.map((shift, index) => <ShiftsRow
              key={shift._id}
              shift={shift}
              index={index}
            ></ShiftsRow>)
          }

        </tbody>

      </table>
    </div>
  );
};

export default AllShifts;