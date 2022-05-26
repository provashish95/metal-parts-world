import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import ProductModal from './ProductModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [show, setShow] = useState(false);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col ">
                    <h5 className='text-center text-color mb-4 '>All Products</h5>
                    <div className='table-responsive'>
                        <table className="table table-hover border border-1 border-dark text-center">
                            <thead className='text-color'>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Minimum order quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map((product, index) => <ProductRow key={product._id} index={index} product={product} setDeletingOrder={setDeletingOrder} setShow={setShow}></ProductRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                {
                    deletingOrder && <>

                        <ProductModal
                            key={deletingOrder._id}
                            deletingOrder={deletingOrder}
                            setDeletingOrder={setDeletingOrder}
                            refetch={refetch}
                            show={show}
                            setShow={setShow}
                        ></ProductModal>
                    </>
                }


            </div>
        </div>
    );
};

export default ManageProducts;