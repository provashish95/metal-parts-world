import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`https://morning-waters-28594.herokuapp.com/users/${user.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading || loading) {
        return <Loading></Loading>
    }


    const handleUpdate = (event) => {
        event.preventDefault();

        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const linkedin = event.target.linkedin.value;
        const nid = event.target.nid.value;
        const education = event.target.education.value;

        const userInfo = {
            phone: phone,
            address: address,
            linkedin: linkedin,
            nid: nid,
            education: education
        }

        fetch(`https://morning-waters-28594.herokuapp.com/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('updated your profile');
                event.target.reset();
            })

    }


    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6">

                    <h5 className='text-center mb-4'>Your Profile info</h5>
                    <label className="form-label">Your Name</label>
                    <div className="mb-3 ">
                        <input type="text" name="name" value={user?.displayName} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label">Your Email</label>
                    <div className="mb-3 " >
                        <input type="text" name="name" value={user?.email} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label">Phone</label>
                    <div className="mb-3 ">
                        <input type="text" name="name" value={userProfile.phone} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label"> Location (city/district)</label>
                    <div className="mb-3 ">
                        <input type="text" name="name" value={userProfile?.address} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label">Education</label>
                    <div className="mb-3 ">
                        <input type="text" name="name" value={userProfile?.education} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label"> Location (city/district)</label>
                    <div className="mb-3">
                        <input type="text" name="name" value={userProfile?.linkedin} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label">NID</label>
                    <div className="mb-3">
                        <input type="text" name="name" value={userProfile?.nid} className="w-100   p-1" readOnly disabled />
                    </div>
                    <label className="form-label">Role</label>
                    <div className="mb-3">
                        <input type="text" name="name" value={(userProfile?.role) ? userProfile?.role : 'N/A'} className="w-100   p-1" readOnly disabled />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <form onSubmit={handleUpdate}>
                        <h5 className='text-center mb-4'>Update Your Profile</h5>
                        <label className="form-label">Your Name</label>
                        <div className="mb-3">
                            <input type="text" name="name" value={user?.displayName} className="w-100   p-1" readOnly disabled />
                        </div>
                        <label className="form-label">Your Email</label>
                        <div className="mb-3">
                            <input type="email" value={user?.email} className="w-100  p-1" readOnly disabled />
                        </div>
                        <label className="form-label">Phone</label>
                        <div className="mb-3">
                            <input type="text" name="phone" className="w-100   p-1" required />
                        </div>
                        <label className="form-label"> Location (city/district)</label>
                        <div className="mb-3">
                            <textarea name="address" className="w-100 " required></textarea>
                        </div>
                        <label className="form-label">Education</label>
                        <div className="mb-3">
                            <textarea className="w-100" name="education" required></textarea>
                        </div>
                        <label className="form-label">Linkedin Profile url</label>
                        <div className="mb-3">
                            <input type="text" name="linkedin" className="w-100   p-1" required />
                        </div>
                        <label className="form-label">NID</label>
                        <div className="mb-3">
                            <input type="text" name="nid" className="w-100   p-1" required />
                        </div>
                        <button type="submit" className='btn btn-dark w-50 mx-auto d-block mb-5' >Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;