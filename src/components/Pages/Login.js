import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [user, loading] = useAuthState(auth);
    const [agree, setAgree] = useState(false);
    const [userError, setUserError] = useState(' ');
    const nameRef = useRef("");
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
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    //registration here..............
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password.length < 6) {
            setUserError('Password must be 6 character!');
        } else if (password !== confirmPassword) {
            setUserError('Password not matched');
        } else {
            setUserError('')
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
        }

    }

    useEffect(() => {
        if (registerUser && user) {

            //navigate(from, { replace: true });
        }
    }, [registerUser, from, navigate, user]);
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
            navigate(from, { replace: true });
        }
    }, [loginUser, from, navigate]);
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
    if (registerError || loginError || resetError || updateError) {
        errorElement = <p className='text-danger '>Error: {registerError?.message || loginError?.message || resetError?.message || updateError?.message}</p>
    }
    //loading here..........
    if (registerLoading || loginLoading || resetSending || updating || loading) {
        return <Loading></Loading>
    }



    return (
        <div className="container">
            <p>{user?.displayName}</p>
            <div className="row  my-5 w-50 mx-auto width-sizing">
                <h5 className='text-center mb-5 text-color'>{agree ? "Registration" : "Login"}</h5>
                <div className="col">
                    {
                        agree ?
                            <>
                                <form onSubmit={handleRegister} >
                                    <div className="mb-3">
                                        <input type="text" ref={nameRef} className="w-100 rounded input-style py-2 px-2" id="exampleInputName" placeholder='Your Name' required />
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
                                    <button type="submit" className='btn  secondary-color w-50 mx-auto d-block mb-5'>Register</button>
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
                                    <button type="submit" className='btn secondary-color w-50 mx-auto d-block mb-5'>Login</button>
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