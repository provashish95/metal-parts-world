import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableRow = ({ order, index, refetch, setDeletingOrder, setShow }) => {
    console.log(order);
    const { _id, productName, description, orderQuantity, price } = order;

    const openModal = () => {
        setDeletingOrder(order);
        setShow(true);
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{productName}</td>
            <td>{price} $</td>
            <td>{orderQuantity} </td>
            <td>{description.slice(0, 15)}...</td>
            <td>
                <Button variant="primary me-2" onClick={openModal}>
                    cancel
                </Button>
                <Link to={`/dashboard/payment/${_id}`} className='btn btn-info'>Pay</Link>
            </td>
        </tr >
    );
};

export default TableRow;