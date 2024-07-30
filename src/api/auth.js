export const saveUser = user => {
  console.log(user)
  const currentUser = {
    email: user.email,
    isAdmin: false,
    approvalStatus: false,
  }

  fetch(`https://dunanetworks-server.vercel.app/users/:${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    .then(data => console.log(data))
}


export const updateRole = email => {
  console.log(email)
  const currentUser = {
    approvalStatus: true,
  }

  return fetch(`https://dunanetworks-server.vercel.app/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())

}

export const updateAdminRole = email => {
  console.log(email)
  const currentUser = {
    isAdmin: true,
  }

  return fetch(`https://dunanetworks-server.vercel.app/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())

}

export const getRole = (email) => {
  return fetch(`https://dunanetworks-server.vercel.app/users/${email}`)
    .then(res => res.json())

}