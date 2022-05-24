import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data)
                })
        }
    }, [user, navigate]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>My oders : {myOrders?.length}</h2>
        </div>
    );
};

export default MyOrders;