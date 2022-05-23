import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        });

    return (
        <div>
            <h1>purchase page here :{product.name}</h1>
        </div>
    );
};

export default Purchase;