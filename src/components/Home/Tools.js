import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    // console.log(products.slice(-3).reverse());

    return (
        <div className='container'>
            <div className="row">
                <h2 className='text-center'>Tools</h2>
                {
                    products?.slice(-3).reverse().map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;