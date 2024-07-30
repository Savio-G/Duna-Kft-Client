import React, { useEffect, useState } from 'react';
import UsersRow from './UsersRow';


const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>

            <th>Email</th>
            <th>Approval</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            // users?.map(user => <UsersRow
            //   key={user._id}
            //   user={user}
            // ></UsersRow>)
            users?.map(

              user => <UsersRow
                key={users._id}
                user={user}
              >
              </UsersRow>
            )
          }


        </tbody>
      </table>
    </div>
  );
};

export default Users;