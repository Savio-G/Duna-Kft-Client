import React from 'react';

const ShiftsRow = ({ shift, index }) => {
  console.log(shift)
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{shift.name}</td>
      <td>{shift.email}</td>
      <td>{shift.position}</td>
      <td>{shift.time}</td>
      <td>{shift.workhours}</td>
      <td>{shift.date}</td>
    </tr>
  );
};

export default ShiftsRow;