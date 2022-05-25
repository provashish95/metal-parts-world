import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';

const TableRow = ({ order, index, refetch, setDeletingOrder, setShow }) => {

    // console.log(order);
    const { productName, description, orderQuantity, price } = order;

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
                <Button variant="primary" onClick={openModal}>
                    Launch vertically centered modal
                </Button>
            </td>
        </tr >
    );
};

export default TableRow;