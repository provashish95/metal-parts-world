import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableRow = ({ order, index, refetch, setDeletingOrder, setShow }) => {
    console.log(order);
    const { _id, productName, description, orderQuantity, price, paid, transactionId } = order;

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
                {price && !paid && <>
                    <Button variant="primary me-2" onClick={openModal}>
                        cancel
                    </Button>
                </>}

                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`} className='btn btn-info'>Pay</Link>}
                {(price && paid) && <>
                    <p className='text-success fw-bold'>Paid</p>
                    <p className='text-info'><small>Transaction id</small><br /> {transactionId}</p>
                </>}
            </td>
        </tr >
    );
};

export default TableRow;