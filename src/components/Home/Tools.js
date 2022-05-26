import React, { useState, useEffect } from 'react';
import Loading from '../shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(-3).reverse());
            })
    }, []);

    if (!products) {
        return <Loading></Loading>
    }


    return (
        <div className='container'>
            <div className="row">
                <h2 className='text-center'>Tools</h2>
                {
                    products?.map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;