import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteModal from './DeleteModal';
import RowForOrder from './RowForOrder';


const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [show, setShow] = useState(false);

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/orders', {
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
                    <h5 className='text-center text-color mb-4 '>All Orders </h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allOrders?.map((allOrder, index) => <RowForOrder index={index} key={allOrder._id} allOrder={allOrder} refetch={refetch} setDeletingOrder={setDeletingOrder} setShow={setShow}></RowForOrder>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                {
                    deletingOrder && <>

                        <DeleteModal
                            key={deletingOrder._id}
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                            show={show}
                            setShow={setShow}
                        ></DeleteModal>
                    </>
                }


            </div>
        </div>
    );
};

export default ManageAllOrders;