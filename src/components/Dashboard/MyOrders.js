import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import ConfirmationModal from './ConfirmationModal';
import TableRow from './TableRow';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    //console.log(data);
                    setMyOrders(data)
                })
        }
    }, [user, navigate]);

    if (loading) {
        return <Loading></Loading>
    }
    if (myOrders.length === 0) {
        return <Loading></Loading>
    }


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete ? ");
        if (proceed) {
            const url = `https://obscure-caverns-72360.herokuapp.com/book/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myOrders.filter(order => order._id !== id);
                    setMyOrders(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4 '>All My Orders</h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map(order => <TableRow key={order._id} order={order} handleDelete={handleDelete}></TableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <ConfirmationModal></ConfirmationModal>
            </div>
        </div>
    );
};

export default MyOrders;