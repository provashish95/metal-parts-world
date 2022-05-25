import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '8b4250e36bd3e7b35425212c00494dc4';

    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;

                    const product = {
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        price: data.price,
                        img: img
                    }
                    //send to your database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added Successfully')
                                reset();
                            } else {
                                toast.error('Failed to add Product!')
                            }
                        })
                }

            })
    }





    return (
        <div className="container my-5">
            <div className="row  w-50 mx-auto ">
                <h5 className='text-center my-5'>Add Product</h5>
                <div className="col">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mb-4'>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                }
                                )}
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                className="w-100  p-2 "
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-danger">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className='mb-4'>
                            <textarea
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'description is required'
                                    }
                                }
                                )}
                                type="text"
                                name="description"
                                placeholder="Product description"
                                className="w-100 rounded p-2 "
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="text-danger">{errors.description.message}</span>}
                            </label>
                        </div>

                        <div className='mb-4'>
                            <input
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'quantity is required'
                                    }
                                }
                                )}
                                type="text"
                                name="quantity"
                                placeholder="Product quantity"
                                className="w-100  p-2 "
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="text-danger">{errors.quantity.message}</span>}
                            </label>
                        </div>

                        <div className='mb-4'>
                            <input
                                {...register("minimumOrderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum order quantity is required'
                                    }
                                }
                                )}
                                type="text"
                                name="minimumOrderQuantity"
                                placeholder="Minimum order quantity"
                                className="w-100  p-2 "
                            />
                            <label className="label">
                                {errors.minimumOrderQuantity?.type === 'required' && <span className="text-danger">{errors.minimumOrderQuantity.message}</span>}
                            </label>
                        </div>

                        <div className='mb-4 '>
                            <input
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                }
                                )}
                                type="text"
                                name="price"
                                placeholder="Price (per-unit)"
                                className="w-100  p-2 "
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="text-danger">{errors.price.message}</span>}
                            </label>
                        </div>

                        <div className='mb-4 '>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                }
                                )}
                                type="file"
                                className="w-100  p-2 border border-dark"
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="text-danger">{errors.image.message}</span>}
                            </label>
                        </div>



                        <input type="submit" className='btn secondary-color w-50 mx-auto d-block mb-5' value="Add" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;