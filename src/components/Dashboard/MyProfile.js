import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';

import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [phone, setPhone] = useState('');


    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`http://localhost:5000/users/${user.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading || loading) {
        return <Loading></Loading>
    }


    const handleUpdate = (event) => {
        event.preventDefault();
        //const phone = event.target.phone.value;
        console.log(phone);
        const currentUser = { phone: phone }
        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })


    }




    const onChangePhone = e => {
        const phone = e.target.value;
        setPhone(phone);
        refetch()
    }

    return (
        <div className='container'>
            <div className="row w-50 mx-auto">
                <div className="col-12">
                    <form onSubmit={handleUpdate}>
                        <p className='text-center fw-bold'>Your Profile</p>
                        <label className="form-label">Your Name</label>
                        <div className="mb-3">
                            <input type="text" name="name" value={user?.displayName} className="w-100 rounded  p-1" readOnly disabled />
                        </div>
                        <label className="form-label">Your Email</label>
                        <div className="mb-3">
                            <input type="email" name="email" value={user?.email} className="w-100  p-1" readOnly disabled />
                        </div>
                        <label className="form-label">Phone</label>
                        <div className="mb-3">
                            <input type="text" onChange={onChangePhone} name="phone" value={userProfile.phone} className="w-100   p-1" required />
                        </div>
                        <label className="form-label"> Location (city/district)</label>
                        <div className="mb-3">
                            <textarea value={userProfile?.address} className="w-100 " required></textarea>
                        </div>
                        <label className="form-label">Education</label>
                        <div className="mb-3">
                            <textarea value={userProfile?.education} className="w-100 " required></textarea>
                        </div>
                        <label className="form-label">Linkedin Profile url</label>
                        <div className="mb-3">
                            <input type="text" name="linkedin" value={userProfile?.linkedin} className="w-100   p-1" required />
                        </div>
                        <label className="form-label">NID</label>
                        <div className="mb-3">
                            <input type="text" name="nid" value={userProfile?.linkedin} className="w-100   p-1" required />
                        </div>


                        <button type="submit" className='btn btn-dark w-50 mx-auto d-block mb-5'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;