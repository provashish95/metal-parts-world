import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <h2 className='text-center'>Tools</h2>
                {
                    products?.map(product => <Tool key={product.id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;