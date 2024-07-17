import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/Authprovider';
import { getIndividualShifts } from '../../../api/shifts';
import IndividualShiftsRow from './IndividualShiftsRow';

const Shifts = () => {
  const { user } = useContext(AuthContext)
  const [shifts, setShifts] = useState([])
  useEffect(() => {
    getIndividualShifts(user?.email)
      .then(data => {
        setShifts(data)
      })
  }, [])
  // console.log(shifts)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Position</th>
            <th>Working Hours</th>
          </tr>
        </thead>
        <tbody>

          {
            shifts.map((shift, index) => <IndividualShiftsRow
              key={shift._id}
              shift={shift}
              index={index}
            ></IndividualShiftsRow>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Shifts;