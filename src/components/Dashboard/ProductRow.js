import React from 'react';
import { Button } from 'react-bootstrap';

const ProductRow = ({ product, index, setDeletingOrder, setShow }) => {

    const { name, quantity, minimumOrderQuantity, price, description } = product;
    const openModal = () => {
        setDeletingOrder(product);
        setShow(true);
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{quantity} </td>
            <td>{minimumOrderQuantity} </td>
            <td>{price} $ </td>
            <td>{description.slice(0, 15)}...</td>
            <td>
                <Button variant="danger me-2" onClick={openModal}>
                    cancel
                </Button>
            </td>
        </tr >
    );
};

export default ProductRow;