import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let errorElement;


    useEffect(() => {
        if (googleUser) {
            navigate('/');
        }
    }, [googleUser, navigate]);

    if (googleLoading) {
        return <Loading></Loading>
    }

    if (googleError) {
        errorElement = <p className='text-danger w-50 mx-auto'>Error: {googleError?.message} </p>
    }

    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
                <p className='mt-2 px-2 text-color'>or</p>
                <div style={{ height: '2px' }} className='footer-style w-50 rounded'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-style w-50 mx-auto d-block my-2 py-2 width-sizing'>
                    <span className='me-2 fs-6'><i className="fa-brands fa-google"></i></span>
                    <span>Google Login </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;