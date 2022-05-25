import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(order);
    return (
        <div className="container">
            <h5 className='text-center'>Your order details</h5>
            <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12">
                    <div className="card mb-3 shadow-lg" >
                        <div className="row g-0 justify-content-center align-items-center p-3 ">
                            <div className="col-md-4 text-center py-1">
                                <img src={order.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{order.productName}</h5>
                                    <p className="card-text">{order.description}</p>
                                    <p className="card-text">Price: <small className="text-muted">{order.price}</small></p>
                                    <p className="card-text">Order quantity: <small className="text-muted">{order.orderQuantity}</small></p>
                                    <p className="card-text">Product id: <small className="text-muted">{order.productId}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Name: {order.userName}</h5>
                            <p className="card-text">Email: {order.userEmail}</p>
                            <p className="card-text">Phone: {order.userPhone}</p>
                            <p className="card-text">Address: {order.address}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;