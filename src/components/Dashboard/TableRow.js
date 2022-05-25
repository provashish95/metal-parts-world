import React from 'react';

const TableRow = ({ order }) => {
    // console.log(order);
    const { productName, description, orderQuantity, price } = order;
    return (
        <tr>
            <td>{productName}</td>
            <td>{price} $</td>
            <td>{orderQuantity} </td>
            <td>{description.slice(0, 15)}...</td>
            <td><button className='btn btn-outline-danger' data-bs-toggle="modal" data-bs-target="#deleteModal">Cancel</button></td>
        </tr>
    );
};

export default TableRow;