import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailPassUser,
        emailPassLoading,
        emailPassError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(auth);
    const [isEmail, setEmail] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const [token] = useToken(emailPassUser || googleUser);

    const navigate = useNavigate();
    const location = useLocation();
    let errorMassage;
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (googleUser || emailPassUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, emailPassUser, from, navigate])


    if (googleLoading || emailPassLoading) {
        return <Loading></Loading>
    }
    if (googleError || emailPassError) {
        errorMassage = <p className='text-danger'>{googleError?.message || emailPassError?.message}</p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const resetPassword = async () => {
        if (isEmail) {
            await sendPasswordResetEmail(isEmail);
            toast.success('Sent email');
        } else {
            toast.error('Please enter your email');
        }
    }

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }

    return (
        <div className="container my-5">
            <div className="row  w-50 mx-auto ">
                <h5 className='text-center my-5'>Login</h5>
                <div className="col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                }
                                )}
                                type="email"
                                name="email"
                                onChange={onChangeEmail}
                                placeholder="Your email"
                                className="w-100 rounded p-2 "
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-danger">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-danger">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className='my-4'>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                }
                                )}
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                className="w-100 rounded  p-2 "
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-danger">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMassage}
                        <input type="submit" className='btn secondary-color w-50 mx-auto d-block mb-5' value="Log in" />
                    </form>
                    <p><small>Forget Password ? <Link to='#' onClick={resetPassword} className='fw-bold text-dark text-decoration-none'>Reset Password</Link></small></p>
                    <div> <p><small>New to Metal World ? <Link to="/signUp" className='fw-bold text-dark text-decoration-none'>Create New Account</Link></small></p>
                        <div className='d-flex align-items-center my-2'>
                            <div style={{ height: '2px' }} className='bg-dark w-50 rounded'></div>
                            <p className='mt-2 px-2 text-color'>or</p>
                            <div style={{ height: '2px' }} className='bg-dark w-50 rounded'></div>
                        </div>

                        <div>
                            <button onClick={() => signInWithGoogle()} className='btn secondary-color w-50 mx-auto d-block my-2 py-2 width-sizing'>
                                <span className='me-2 fs-6'><i className="fa-brands fa-google"></i></span>
                                <span>Google Login </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;