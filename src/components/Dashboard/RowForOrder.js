
import React from 'react';
import { toast } from 'react-toastify';



const RowForOrder = ({ allOrder, index, refetch }) => {
    const { _id, userName, orderQuantity, userEmail, productName, price, paid, status } = allOrder;

    const statusInfo = {
        status: 'shipped'
    }

    const updateStatus = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
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
            <td>{userEmail} $</td>
            <td>{productName} </td>
            <td>{price}</td>
            <td>{orderQuantity}</td>
            <td>
                {(price && !paid) && <p className='text-success fw-bold'>unpaid</p>}
                {(price && paid) && <button onClick={updateStatus} className='text-success fw-bold'>{status}</button>}
            </td>
        </tr >
    );
};

export default RowForOrder;