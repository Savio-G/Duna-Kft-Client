export const saveUser = user => {
  console.log(user)
  const currentUser = {
    email: user.email,
    isAdmin: false,
    approvalStatus: false,
  }

  fetch(`http://localhost:5000/users/:${user?.email}`, {
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

  return fetch(`http://localhost:5000/users/${email}`, {
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

  return fetch(`http://localhost:5000/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())

}

export const getRole = (email) => {
  return fetch(`http://localhost:5000/users/${email}`)
    .then(res => res.json())

}