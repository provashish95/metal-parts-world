import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1Z5BKZIfiPkipfEKgq58v7TC6RQarM3MjEvf1nHXqeDq0FCNlGELI2DjBCrICTdXbd5QROsUdxbzmv9K5wdqGj00DH8sPuwV');


const Payment = () => {
    const { id } = useParams();

    const url = `https://morning-waters-28594.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container">
            <h5 className='text-center my-5'>Your order details & Payment</h5>
            <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12">
                    <div className="card mb-3 shadow-lg transparent-bg " >
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
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;