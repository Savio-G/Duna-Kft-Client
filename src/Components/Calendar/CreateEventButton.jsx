import React from 'react';
import { FaPlus } from "react-icons/fa";

const CreateEventButton = () => {
  return (
    <div className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
      <FaPlus />
      <div className="pl-3 pr-7"> Create </div>
    </div>
  );
};

export default CreateEventButton;