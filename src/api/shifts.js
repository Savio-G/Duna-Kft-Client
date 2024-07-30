export const getShifts = () => {
  return fetch(`https://dunanetworks-server.vercel.app/shifts`)
    .then(res => res.json())

}


export const getIndividualShifts = (email) => {
  return fetch(`https://dunanetworks-server.vercel.app/shifts?email=${email}`)
    .then(res => res.json())

}