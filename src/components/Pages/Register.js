import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        emailPassUser,
        emailPassLoading,
        emailPassError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    //const [token] = useToken(googleUser || emailPassUser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMassage;

    useEffect(() => {
        if (emailPassUser) {
            navigate(from, { replace: true });
        }
    }, [navigate, emailPassUser, from])

    if (emailPassLoading || updating) {
        return <Loading></Loading>
    }
    if (emailPassError || updateError) {
        errorMassage = <p className='text-red-500'>{emailPassError?.message}</p>
    }


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        toast.success("update done");
    };

    return (
        <div className="container my-5">
            <div className="row  w-50 mx-auto ">
                <h5 className='text-center my-5'>Registration</h5>
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
                                placeholder="Your Name"
                                className="w-100 rounded p-2 "
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-danger">{errors.name.message}</span>}
                            </label>
                        </div>
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
                        <input type="submit" className='btn secondary-color w-50 mx-auto d-block mb-5' value="Register" />
                    </form>
                    <div> <p><small>Already have an account ? <Link to="/login" className='fw-bold text-dark text-decoration-none'>Please login </Link></small></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;