import React, { useContext, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import CalendarContext from '../../Providers/CalendarContext';
import { CiClock2 } from "react-icons/ci";
import { TiTick } from 'react-icons/ti';
import { SiWelcometothejungle } from 'react-icons/si';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

// const labelclasses = ["indigo", "gray", "green", "blue", "red", "purple"]
const labelClasses = {
  indigo: 'bg-indigo-500',
  gray: 'bg-gray-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
};


const EventModal = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const positionRef = useRef(null);
  const hoursRef = useRef(null);
  const timeRef = useRef(null);


  const { setEventModal, daySelected, selectedEvent, setSelectedEvent } = useContext(CalendarContext)
  const [selectedLabel, setSelectedLabel] = useState()

  const handleShiftBtn = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const position = form.position.value
    const hours = form.hours.value
    const time = form.time.value

    const shiftInfo = {
      name: name,
      email: email,
      position: position,
      hours: hours,
      day: daySelected.valueOf(),
      label: selectedLabel,
      time: time
    }
    console.log(shiftInfo)
    fetch(`http://localhost:5000/addShift`, {
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
        setEventModal(false)
      })
  }
  const handleUpdate = (id) => {
    const updateInfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      position: positionRef.current.value,
      hours: hoursRef.current.value,
      label: selectedLabel,
      time: timeRef.current.value

    }

    fetch(`http://localhost:5000/shifts/${id}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('shift updated successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        setEventModal(false)
      })
  }
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/shifts/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('shift deleted successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        setEventModal(false)
      })
  }
  return (
    <div>
      <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center '>
        <form onSubmit={handleShiftBtn} className="bg-white rounded-lg shadow-2xl w-1/4">
          <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
            <span className='text-gray-400'>
              <SiWelcometothejungle />
            </span>

            <span className='text-grey-400 cursor-pointer flex gap-2'>
              <MdUpdate onClick={() => handleUpdate(selectedEvent._id)} />
              <MdDelete onClick={() => handleDelete(selectedEvent._id)} />
              <IoMdClose onClick={() => setEventModal(false)} />
            </span>
          </header>



          {/*shifts giving  */}

          <div className='md:flex '>
            <input ref={nameRef} type="text" placeholder="Name" name='name' defaultValue={`${selectedEvent ? selectedEvent?.name : ''}`} className="input w-full max-w-xs input-bordered  m-3" />
            <input ref={emailRef} type="email" placeholder="Email" name='email' defaultValue={`${selectedEvent ? selectedEvent?.email : ''}`} className="input w-full max-w-xs input-bordered m-3" />
          </div>

          <div>
            <select ref={positionRef} defaultValue={`${selectedEvent ? selectedEvent?.position : ''}`} name='position' className="select select-bordered w-full max-w-xs m-3">
              <option disabled selected>Select Position?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <input ref={timeRef} type="text" name='time' placeholder="Time" defaultValue={`${selectedEvent ? selectedEvent?.time : 'no time assigned'}`} className="input w-full max-w-xs input-bordered m-3" />
          </div>
          <div >


            <p className='ml-4' >{daySelected.format("dddd, MMMM DD")}</p>

          </div>
          {/* <div className="flex gap-x-2">
            {
              labelclasses.map((lblclass, i) => (
                <span
                  key={i}
                  className={`bg-${lblclass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  <span className='text-white text-sm'>
                    <TiTick />
                  </span>
                </span>
              ))
            }
          </div> */}


          <div className="flex gap-x-2 ml-4 mt-2">
            {Object.entries(labelClasses).map(([key, value], i) => (
              <span
                key={i}
                onClick={() => { setSelectedLabel(value) }}
                className={`${value} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                {selectedLabel === value &&
                  <span className='text-white text-sm'>
                    <TiTick />
                  </span>}

              </span>
            ))}
          </div>
          <div >
            <input ref={hoursRef} type="number" name='hours' placeholder="Total Hours" defaultValue={`${selectedEvent ? selectedEvent?.hours : ''}`} className="input w-full max-w-xs input-bordered m-3" />
            <input className='btn btn-ghost w-56 bg-gray-400 m-3' type="submit" value="Give Shift" />
          </div>


          {/* shift giving end */}
        </form>
      </div >
    </div >
  );
};

export default EventModal;