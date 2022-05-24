import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h5>Dashboard</h5>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;