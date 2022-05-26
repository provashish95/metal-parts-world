import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2 border p-0 m-0">
                    <ul className='side-nav-ul border shadow-lg'>
                        <li className='side-nav-link border p'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            user && !admin ?
                                <>
                                    <li className='side-nav-link border'><Link to='/dashboard/MyOrders'>My Orders</Link></li>
                                    <li className='side-nav-link border'><Link to='/dashboard/review'>Add A Review</Link></li>
                                </> : ''

                        }

                        {
                            admin && <>
                                <li className='side-nav-link border'><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                                <li className='side-nav-link border'><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                                <li className='side-nav-link border'><Link to='/dashboard'>Manage Products</Link></li>
                                <li className='side-nav-link border'><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10">

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

