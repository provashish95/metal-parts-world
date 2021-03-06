import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import ConfirmationModal from './ConfirmationModal';
import TableRow from './TableRow';


const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user, loading] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://morning-waters-28594.herokuapp.com/order?userEmail=${user.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    if (myOrders.length === 0) {
        return <Loading></Loading>
    }


    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4'>My Orders</h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders?.map((order, index) => <TableRow key={order._id} index={index} order={order} setDeletingOrder={setDeletingOrder} setShow={setShow}></TableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                {
                    deletingOrder && <>

                        <ConfirmationModal
                            key={deletingOrder._id}
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                            show={show}
                            setShow={setShow}
                        ></ConfirmationModal>
                    </>
                }


            </div>
        </div>
    );
};

export default MyOrders;