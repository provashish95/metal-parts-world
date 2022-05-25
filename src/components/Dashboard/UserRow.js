import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You are not Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin`)
                }
            })
    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>

            <td>
                {
                    role === 'admin' ?
                        <button className='btn btn-dark'>Admin</button>
                        :
                        <button onClick={handleAdmin} className='btn btn-dark'>Make admin</button>
                }
            </td>

            <td>
                <button className="btn btn-danger">remove</button>
            </td>
        </tr >
    );
};

export default UserRow;