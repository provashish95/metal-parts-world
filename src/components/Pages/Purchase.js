import React, { useRef, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [orderQuantity, setOrderQuantity] = useState('');
    const [isReload, setIsReload] = useState(true);
    const [isDisable, setIsDisable] = useState(true);
    const [product, setProduct] = useState({});
    const { name, img, description, price, minimumOrderQuantity, quantity } = product;
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const addressRef = useRef("");
    const quantityRef = useRef("");

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, [isReload, id])


    if (Object.keys(product).length === 0) {
        return <Loading></Loading>
    }

    const handleQuantity = event => {
        event.preventDefault();
        const UserQuantity = quantityRef.current.value;

        const myQuantity = parseInt(UserQuantity);
        const minQuantity = parseInt(minimumOrderQuantity);
        const availQuantity = parseInt(quantity);


        if (myQuantity < minQuantity) {
            toast.error('Your quantity lower than minimum quantity')
            event.target.reset();
            setIsDisable(true);
            return;
        } else if (myQuantity > availQuantity) {
            toast.error('Your quantity higher than available quantity')
            event.target.reset();
            setIsDisable(true);
            return;
        } else if (isNaN(myQuantity)) {
            toast.error('Please Enter Valid number')
            event.target.reset();
            setIsDisable(true);
            return;
        } else {
            setOrderQuantity(myQuantity);
            setIsDisable(false);
            toast.success('Added Your quantity')
            event.target.reset();
        }
    }

    const handleOrder = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newPrice = parseInt(price);
        const totalPrice = newPrice * orderQuantity;
        const oldQuantity = parseInt(quantity);
        const updateQuantity = oldQuantity - orderQuantity
        const orders = {
            productId: id,
            userName: name,
            userEmail: email,
            userPhone: phone,
            address: address,
            price: totalPrice,
            orderQuantity: orderQuantity
        }
        //console.log(updateQuantity);

        //update product quantity 
        fetch(`http://localhost:5000/updateQuantity/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ updateQuantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsReload(!isReload);
            });

        //Booking order
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(data.success)
                event.target.reset()
            });
    }

    return (
        <div className="container my-5">
            <h5 className='text-center my-5'>Purchase Your Product</h5>
            <div className="row g-0 justify-content-center align-items-center">
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="card mb-3" >
                        <div className="row g-0 justify-content-center align-items-center p-3 ">
                            <div className="col-md-4 text-center py-5">
                                <img src={img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">Price for 1 item: <small className="text-muted">{price}</small></p>
                                    <p className="card-text">Available Quantity: <small className="text-muted">{quantity}</small></p>
                                    <p className="card-text">Minimum Order: <small className="text-muted">{minimumOrderQuantity}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <div className='m-4'>
                        <form onSubmit={handleQuantity} className='w-100 mx-auto text-center'  >
                            <div className="mb-3">
                                <input type="text" ref={quantityRef} className="w-100 mx-auto rounded input-style p-1" id="exampleInputName" placeholder='Add Your Quantity' required />
                            </div>
                            <button type="submit" className='btn  secondary-color w-50 mx-auto d-block mb-5'>Add Quantity</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <div className='w-50 mx-auto'>
                        <h5 className='text-center mb-5'>Customer info</h5>
                        <form onSubmit={handleOrder}>
                            <div className="mb-3">
                                <input type="text" ref={nameRef} name="name" value={user?.displayName} className="w-100 rounded  p-1" id="exampleInputName" placeholder='Your Name' disabled />
                            </div>
                            <div className="mb-3">
                                <input type="email" ref={emailRef} name="email" value={user?.email} className="w-100 rounded p-1" id="exampleInputEmail" placeholder='Your Email' disabled />
                            </div>
                            <div className="mb-3">
                                <input type="text" ref={phoneRef} name="phone" className="w-100 rounded  p-1" id="exampleInputPhone" placeholder='Your Phone' required />
                            </div>
                            <div className="mb-3">
                                <textarea ref={addressRef} className="w-100 rounded" placeholder="Add Your Address" id="floatingTextarea2" required></textarea>
                            </div>
                            <button type="submit" className='btn btn-primary w-50 mx-auto d-block mb-5' disabled={isDisable}>Order Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;