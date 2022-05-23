import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, price, availableQuantity, minimumOrderQuantity, description } = product;

    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card mx-auto shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body text-color">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0, 70)}...</p>
                <p className="card-text"><span className='fw-bold'>Price:</span> {price} $</p>
                <p className="card-text"><span className='fw-bold'>Available quantity:</span> {availableQuantity}</p>
                <p className="card-text"><span className='fw-bold'>Minimum order quantity:</span> {minimumOrderQuantity}</p>
                <button onClick={() => navigateToPurchase(_id)} className='btn btn-dark d-block mx-auto'> buy now</button>
            </div>
        </div>
    );
};

export default Tool;