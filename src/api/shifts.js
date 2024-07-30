export const getShifts = () => {
  return fetch(`http://localhost:5000/shifts`)
    .then(res => res.json())

}


export const getIndividualShifts = (email) => {
  return fetch(`http://localhost:5000/shifts?email=${email}`)
    .then(res => res.json())

}