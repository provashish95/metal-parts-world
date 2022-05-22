import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';
import SocialLogin from './SocialLogin';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {

    const [agree, setAgree] = useState(false);
    const [userError, setUserError] = useState(' ');
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        registerUser,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    //registration here..............
    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password.length < 6) {
            setUserError('Password must be 6 character!');
        } else if (password !== confirmPassword) {
            setUserError('Password not matched');
        } else {
            setUserError('')
            createUserWithEmailAndPassword(email, password)
            event.target.reset();
        }

    }
    useEffect(() => {
        if (registerUser) {


        }
    }, [registerUser]);
    //registration here..............


    //login here.............
    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    // -----------token -------------
    useEffect(() => {
        if (loginUser) {


        }
    }, [loginUser]);
    // -----------token -------------
    //login here...........

    //Reset password here.........
    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        } else {
            toast.error('Please enter your email');
        }
    }

    //firebase error here........
    if (registerError || loginError || resetError) {
        errorElement = <p className='text-danger '>Error: {registerError?.message || loginError?.message || resetError?.message}</p>
    }
    //loading here..........
    if (registerLoading || loginLoading || resetSending) {
        return <Loading></Loading>
    }

    return (
        <div className="container">
            <div className="row  my-5 w-50 mx-auto width-sizing">
                <h5 className='text-center mb-5 text-color'>{agree ? "Registration" : "Login"}</h5>
                <div className="col">
                    {
                        agree ?
                            <>
                                <form onSubmit={handleRegister} >
                                    <div className="mb-3">
                                        <input type="text" className="w-100 rounded input-style py-2 px-2" id="exampleInputName" placeholder='Your Name' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" ref={emailRef} name="email" className="w-100 rounded input-style py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" ref={passwordRef} name="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputPassword1" placeholder='Password' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" ref={confirmPasswordRef} name="confirmPassword" className="w-100 rounded input-style py-2 px-2" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                                    </div>
                                    <p className="text-danger ">{userError || ''}</p>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label text-color" htmlFor="exampleCheck1">Agree terms & condition</label>
                                    </div>
                                    <button type="submit" className='btn  btn-style w-50 mx-auto d-block mb-5'>Register</button>
                                    {
                                        agree ? " " : errorElement
                                    }
                                </form>
                            </>
                            :
                            <>
                                <form onSubmit={handleLogin} >
                                    <div className="mb-3">
                                        <input type="email" ref={emailRef} name="email" className="w-100 rounded input-style py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" ref={passwordRef} name="password" className="w-100 rounded input-style py-2 px-2" id="exampleInputPassword1" placeholder='Password' required />
                                    </div>
                                    {errorElement}
                                    <button type="submit" className='btn btn-style w-50 mx-auto d-block mb-5'>Login</button>
                                </form>
                            </>
                    }
                    {
                        agree ? " " :
                            <p className='width-sizing text-color m-0'>Forget Password ?<span className='btn text-color fst-italic fw-bold' onClick={resetPassword}>Reset Password</span></p>
                    }
                    <p className='width-sizing text-color m-0 '>{agree ? "Already have an account ?" : "New to Warehouse ?"} <span onClick={() => setAgree(!agree)} className='btn text-color fst-italic fw-bold'>{agree ? "Please Login" : "Please Register"} </span></p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;