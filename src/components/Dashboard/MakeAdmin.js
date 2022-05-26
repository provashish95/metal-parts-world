import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteUser from './DeleteUser';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [show, setShow] = useState(false);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://morning-waters-28594.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4 '>All Users</h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) => <UserRow index={index} key={user._id} user={user} refetch={refetch} setDeletingOrder={setDeletingOrder} setShow={setShow}></UserRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    deletingOrder && <>

                        <DeleteUser
                            key={deletingOrder._id}
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                            show={show}
                            setShow={setShow}
                        ></DeleteUser>
                    </>
                }
            </div>
        </div>
    );
};

export default MakeAdmin;