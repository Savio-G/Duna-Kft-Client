import React, { useContext } from 'react';
import { RiPassPendingLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineUserDelete } from "react-icons/ai";
import { updateAdminRole, updateRole } from '../../../api/auth';
import { AuthContext } from '../../../Providers/Authprovider';

const UsersRow = ({ user }) => {
  const handleEmployeeRole = (email) => {
    updateRole(email)
      .then(data => {
        console.log(data)
      })
  }
  const handleAdminRole = (email) => {
    updateAdminRole(email)
      .then(data => {
        console.log(data)
      })
  }
  return (
    <tr>

      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{user.email}</div>
          </div>
        </div>
      </td>
      <td>
        {user.approvalStatus ?
          <td>Approved</td>
          :
          <td onClick={() => handleEmployeeRole(user.email)} className='btn btn-ghost'><RiPassPendingLine /></td>
        }
      </td>
      <td>

        {
          user.isAdmin ?
            <td>Admin</td>
            :
            <button onClick={() => handleAdminRole(user.email)} className='btn btn-ghost'><GrUserAdmin /></button>
        }
      </td>
      <th>
        <button className="btn btn-ghost "><AiOutlineUserDelete /></button>
      </th>
    </tr>
  );
};

export default UsersRow;