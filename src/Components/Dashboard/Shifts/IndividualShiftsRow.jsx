import React from 'react';

const IndividualShiftsRow = ({ shift, index }) => {
  console.log(shift)
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{shift.date}</td>
      <td>{shift.time}</td>
      <td>{shift.position}</td>
      <td>{shift.workhours}</td>
    </tr>
  );
};

export default IndividualShiftsRow;