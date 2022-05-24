import React, { useRef, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import { toast } from 'react-toastify';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();


    const [isDisable, setIsDisable] = useState(false);
    const [product, setProduct] = useState({});
    const { name, img, description, price, minimumOrderQuantity, quantity } = product;

    const [count, setCount] = useState(0);

    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const addressRef = useRef("");
    const quantityRef = useRef("");





    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('Unauthorize access');
                }
                return res.json()
            })
            .then(data => {
                setCount(parseInt(data.minimumOrderQuantity));
                setProduct(data);
            });
    }, [id])

    if (Object.keys(product).length === 0) {
        return <Loading></Loading>
    }

    const handleOrder = (event) => {
        event.preventDefault();
        const UserQuantity = quantityRef.current.value;

        const myQuantity = parseInt(UserQuantity);
        const minQuantity = parseInt(minimumOrderQuantity);
        const availQuantity = parseInt(quantity);

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newPrice = parseInt(price);
        const totalPrice = newPrice * myQuantity;

        const orders = {
            productId: id,
            userName: name,
            userEmail: email,
            userPhone: phone,
            address: address,
            price: totalPrice,
            orderQuantity: myQuantity
        }
        //check quantity here 
        if (myQuantity < minQuantity) {
            toast.error(`Your quantity lower than ${minQuantity}`);
            setIsDisable(true);
            return;
        } else if (myQuantity > availQuantity) {
            toast.error(`Your quantity higher than ${availQuantity}`);
            setIsDisable(true);
            return;
        } else if (isNaN(myQuantity)) {
            toast.error('Please Enter Valid number');
            setIsDisable(true);
            return;
        } else {
            //Booking order here
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(orders)
            })
                .then((response) => {
                    console.log(response);
                    if (response.status === 401 || response.status === 403) {
                        toast.error("Unauthorize access");
                    }
                    return response.json()
                })
                .then((data) => {
                    toast.success(data.success)
                    event.target.reset()
                });
        }
    }


    const handleIncrement = () => {
        setCount(count + 1)
        setIsDisable(false);
    }
    const handleDecrement = () => {
        setCount(count - 1)
        setIsDisable(false);
    }
    const handleError = (event) => {
        setIsDisable(false);
    }


    return (
        <div className="container my-5">
            <h5 className='text-center my-5'>Purchase Your Product</h5>
            <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12">
                    <div className="card mb-3 shadow-lg" >
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
                                    <p className="card-text">Minimum quantity: <small className="text-muted">{minimumOrderQuantity}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row my-5">
                <div className="col-12">
                    <div className='w-50 mx-auto'>
                        <div className='text center'>
                            <p className='text-center fw-bold'>Add your quantity</p>
                            <p className='text-center'> <small >Minimum quantity will be {minimumOrderQuantity}</small></p>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="text" onChange={handleError} ref={quantityRef} value={count} className="w-50 mx-auto rounded text-center  p-1 " />
                        </div>
                        <div className='text-center mb-4'>
                            <button onClick={handleIncrement} className='btn btn-dark me-2'>+</button>
                            <button onClick={handleDecrement} className='btn btn-dark'>-</button>
                        </div>
                        <form onSubmit={handleOrder}>
                            <p className='text-center fw-bold'>Add your Info</p>
                            <div className="mb-3">
                                <input type="text" ref={nameRef} name="name" value={user?.displayName} className="w-100 rounded  p-1" readOnly disabled />
                            </div>
                            <div className="mb-3">
                                <input type="email" ref={emailRef} name="email" value={user?.email} className="w-100 rounded p-1" readOnly disabled />
                            </div>
                            <div className="mb-3">
                                <input type="text" ref={phoneRef} name="phone" className="w-100 rounded  p-1" placeholder='Your Phone' required />
                            </div>
                            <div className="mb-3">
                                <textarea ref={addressRef} className="w-100 rounded" placeholder="Add Your Address" required></textarea>
                            </div>
                            <button type="submit" className='btn btn-dark w-50 mx-auto d-block mb-5' disabled={isDisable}>Order Now</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;