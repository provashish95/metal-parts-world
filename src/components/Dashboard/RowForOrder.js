
import React from 'react';
import { toast } from 'react-toastify';



const RowForOrder = ({ allOrder, index, refetch, setDeletingOrder, setShow }) => {
    const { _id, userName, orderQuantity, userEmail, productName, price, paid, status } = allOrder;

    const statusInfo = {
        status: 'shipped'
    }
    const openModal = () => {
        setDeletingOrder(allOrder);
        setShow(true);
    }

    const updateStatus = () => {
        fetch(`https://morning-waters-28594.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(statusInfo)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Product Shipped');
            })
    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{productName} </td>
            <td>{price} $</td>
            <td>{orderQuantity}</td>
            <td>
                {(price && !paid) &&
                    <div>
                        <button className='btn btn-dark m-1'>unpaid</button>
                        <button onClick={openModal} className='btn btn-danger'>delete</button>
                    </div>

                }
                {(price && paid) && <button onClick={updateStatus} className='btn btn-dark'>{status}</button>}
            </td>
        </tr >
    );
};

export default RowForOrder;