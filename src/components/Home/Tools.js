import React, { useState, useEffect } from 'react';
import Loading from '../shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://morning-waters-28594.herokuapp.com/products')
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
            <h4 className='text-center enchant-color my-5'>OUR PARTS</h4>
            <div className="row py-5 transparent-bg">

                {
                    products?.map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;