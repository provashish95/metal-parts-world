import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2 border p-0 m-0">
                    <ul className='side-nav-ul border shadow-lg'>
                        <li className='side-nav-link border p'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            user && <>
                                <li className='side-nav-link border'><Link to='/dashboard/MyOrders'>My Orders</Link></li>
                                <li className='side-nav-link border'><Link to='/dashboard/review'>Add A Review</Link></li>
                            </>
                        }
                        <li className='side-nav-link border'><Link to='/dashboard'>My Profile</Link></li>
                        {/* for admin .... */}
                        <li className='side-nav-link border'><Link to='/dashboard'>Manage All Orders</Link></li>
                        <li className='side-nav-link border'><Link to='/dashboard'>Add A Product</Link></li>
                        <li className='side-nav-link border'><Link to='/dashboard'>Manage Products</Link></li>
                        <li className='side-nav-link border'><Link to='/dashboard'>Make Admin</Link></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10">
                    <h2>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

